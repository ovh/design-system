/*
 * The project index: the modules of the scanned code that stand for ODS, found before migrating so
 * that their importers are migrated like importers of @ovhcloud/ods-react, whatever path they use.
 *
 * A module stands for ODS when it re-exports ODS names (`export { Badge } from '@ovhcloud/ods-react'`,
 * `export * from …`, an import exported again), when it exports a wrapper component whose props are
 * an ODS props type and that forwards them to that ODS component (`interface P extends ButtonProp`,
 * `FC<MessageProp>`, `ComponentProps<typeof Button>`), or a props type built on one. It does so
 * transitively: a barrel of such modules stands for ODS too.
 *
 * Each module gets an entry `{ star, names, shadow }`: `names` maps the names it exports to the ODS
 * export they stand for (`GuardedButton` → `Button`), `star` says every other name it exports comes
 * from ODS (`export * from '@ovhcloud/ods-react'`) except the `shadow` ones it defines itself.
 *
 * Components of the project that are not ODS but declare props with an ODS type (`color?: ButtonColor`,
 * `actionButton?: Pick<ButtonProp, 'variant'>`) are listed too, in `typed` (by exported name): the
 * codemod renames that type, so the values their callers pass must follow (`color="primary"` →
 * `color="brand"`, `actionButton={{ variant: 'ghost' }}` → `{{ emphasis: 'low' }}`). A prop is
 * `{ type }` (an ODS type whose members change) or `{ component }` (an object of that component's props).
 *
 * Imports are first read with a regular expression on every file (cheap); only the files that import
 * something that reaches ODS are parsed (ast-grep), until nothing changes.
 */
import { readFileSync } from 'node:fs';
import { basename, dirname, relative, sep } from 'node:path';
import { Lang, parse } from '@ast-grep/napi';
import { ODS_PACKAGES, createResolver, odsNameIn } from './resolve.mjs';
import { resolveMapping } from './shared.mjs';

const SCRIPTS = /\.(c|m)?[jt]sx?$/;
const SPECIFIER = /\bfrom\s*['"]([^'"\n]+)['"]|\bimport\s*['"]([^'"\n]+)['"]|\bimport\s*\(\s*['"]([^'"\n]+)['"]\s*\)|\b(?:vi|jest)\.(?:do)?[mM]ock\(\s*['"]([^'"\n]+)['"]/g;
const NAMED_IMPORT = /\bimport\s+(?:type\s+)?(?:[\w$]+\s*,\s*)?\{([^}]*)\}\s*from\s*['"]([^'"\n]+)['"]/g;
const TRANSPARENT_TYPES = new Set(['NoInfer', 'Omit', 'Partial', 'PropsWithChildren', 'PropsWithRef', 'Readonly', 'Required']);
/* Helpers of the project that keep the keys of the type they wrap (`DeepReadonly<{ … }>`). */
const KEY_KEEPING = /^(Deep)?(Readonly|Partial|Required|Mutable|Writable|NonNullable)(Object|Props)?$/;
const COMPONENT_PROPS = new Set(['ComponentProps', 'ComponentPropsWithRef', 'ComponentPropsWithoutRef']);
const COMPONENT_TYPES = new Set(['FC', 'FunctionComponent', 'VFC', 'VoidFunctionComponent']);
const WRAPPING_CALLS = new Set(['forwardRef', 'memo']);

/* `export *`, `export {`, `export type {`, `export default name`: a module that may pass imports on. */
const REEXPORT = /\bexport\s*(?:type\s*)?(?:\*|\{)|\bexport\s+default\s+[\w$]+\s*;?\s*$/m;
const importedName = (part) => part.trim().replace(/^type\s+/, '').split(/\s+as\s+/)[0].trim();
const langFor = (filename) => (/\.(c|m)?ts$/.test(filename) ? Lang.TypeScript : Lang.Tsx);
const unprefix = (name) => name.replace(/^React\./, '');

/**
 * Comments out of the way of the regular expressions (an import in a JSDoc example is not an import).
 * A scanner, not a regular expression: `// Path: /a/*` must not open a block comment, a string may hold `//`.
 */
function stripComments(text) {
  let out = '';
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '"' || char === "'" || char === '`') {
      for (i++; i < text.length && text[i] !== char && !(char !== '`' && text[i] === '\n'); i++) {
        if (text[i] === '\\') i++;
      }
    } else if (char === '/' && text[i + 1] === '/') {
      out += text.slice(start, i);
      i = text.indexOf('\n', i);
      if (i === -1) return out;
      start = i;
    } else if (char === '/' && text[i + 1] === '*') {
      out += text.slice(start, i);
      const end = text.indexOf('*/', i + 2);
      if (end === -1) return out;
      out += ' ';
      i = end + 1;
      start = end + 2;
    }
  }
  return out + text.slice(start);
}

/* ------------------------------------------------------------------------- what the mapping says */

/** What the index needs from the component mapping: component names, props types, the props each component changes. */
function indexOptions(rawMapping) {
  const mapping = resolveMapping(rawMapping);
  const components = new Set(Object.keys(mapping.components ?? {}));
  const propsTypes = new Map();
  const propsTypeOf = new Map();
  const watched = new Map();
  // The names a wrapper may pass a watched prop on under: itself, or its v20 name.
  const forwardedAs = new Map();
  for (const [name, spec] of Object.entries(mapping.components ?? {})) {
    const types = [spec.propsType ?? []].flat();
    types.forEach((type) => propsTypes.set(type, name));
    if (types.length) propsTypeOf.set(name, types[0]);
    // The props the mapping changes, under their v19 and v20 names (the index also reads migrated code).
    watched.set(name, [...new Set(Object.entries(spec.props ?? {}).flatMap(([prop, rule]) => [prop, rule.renameTo].filter(Boolean)))]);
    forwardedAs.set(name, new Map(Object.entries(spec.props ?? {}).flatMap(([prop, rule]) => {
      const names = [prop, rule.renameTo ?? rule.moveTo?.prop].filter(Boolean);
      return [[prop, names], ...(rule.renameTo ? [[rule.renameTo, [rule.renameTo]]] : [])];
    })));
  }
  // A renamed export is the same export under its other name: a module that re-exports BADGE_COLOR (v19) also stands for BADGE_STATUS (v20).
  const equivalents = new Map();
  for (const [name, rule] of Object.entries(mapping.exports ?? {})) {
    if (rule.renameTo) {
      equivalents.set(name, [...(equivalents.get(name) ?? []), rule.renameTo]);
      equivalents.set(rule.renameTo, [...(equivalents.get(rule.renameTo) ?? []), name]);
    }
  }
  // The ODS types whose members change (`ButtonColor`), under their v19 and v20 names: a prop typed with one
  // receives values that change.
  const memberTypes = new Set();
  for (const [name, rule] of Object.entries(mapping.exports ?? {})) {
    if (rule.members && !rule.removed) {
      memberTypes.add(name);
      if (rule.renameTo) memberTypes.add(rule.renameTo);
    }
  }
  // Names that only ODS exports: an import of one of them from a module that is not ODS is worth a look.
  const distinctive = new Set([...Object.keys(mapping.exports ?? {}).filter((name) => /^[A-Z][A-Z0-9_]+$/.test(name) || name.endsWith('Prop')), ...propsTypes.keys()]);
  for (const [name, rule] of Object.entries(mapping.exports ?? {})) {
    if (rule.renameTo && distinctive.has(name)) distinctive.add(rule.renameTo);
  }
  // A default of a renamed prop that the codemod migrates in a wrapper typed with the ODS props (`variant = 'ghost'` → `emphasis: variant = 'low'`).
  const migratedDefault = (component, prop, value) => {
    const rule = mapping.components?.[component]?.props?.[prop];
    return Boolean(rule?.renameTo && typeof value === 'string' && (!rule.values || !Object.hasOwn(rule.values, value) || rule.values[value] !== null));
  };
  return { components, distinctive, equivalents, forwardedAs, memberTypes, migratedDefault, propsTypeOf, propsTypes, watched };
}

/* ------------------------------------------------------------------------- one module, parsed */

const stringOf = (node) => node?.find({ rule: { kind: 'string_fragment' } })?.text() ?? (node?.kind() === 'string' ? '' : null);
const namedChildren = (node) => node?.children().filter((child) => child.isNamed()) ?? [];

function typeDesc(node) {
  if (!node) return { k: 'other' };
  switch (node.kind()) {
    case 'type_annotation':
      return typeDesc(namedChildren(node)[0]);
    case 'type_identifier':
    case 'nested_type_identifier':
      return { args: [], k: 'ref', name: node.text() };
    case 'generic_type':
      return { args: namedChildren(node.field('type_arguments')).map(typeDesc), k: 'ref', name: node.field('name')?.text() ?? namedChildren(node)[0]?.text() };
    case 'intersection_type':
      return { items: namedChildren(node).map(typeDesc), k: 'and' };
    case 'parenthesized_type':
      return typeDesc(namedChildren(node)[0]);
    case 'type_query':
      return { k: 'query', name: namedChildren(node)[0]?.text() };
    case 'object_type':
      return { k: 'object', props: propertyNames(node), types: propertyTypes(node) };
    case 'literal_type':
      return ['undefined', 'null'].includes(namedChildren(node)[0]?.kind()) ? { k: 'nullish' } : { k: 'literal', value: stringOf(node) };
    case 'predefined_type':
      return node.text() === 'undefined' ? { k: 'nullish' } : { k: 'other' };
    case 'union_type':
      return { items: namedChildren(node).map(typeDesc), k: 'or' };
    default:
      return { k: 'other' };
  }
}

const signatureName = (child) => {
  const name = child.field('name');
  return name?.kind() === 'string' ? stringOf(name) : name?.text();
};

function propertyNames(body) {
  return namedChildren(body).filter((child) => child.kind() === 'property_signature').map(signatureName).filter(Boolean);
}

/** The declared type of each property of an object type or interface body, as a type description. */
function propertyTypes(body) {
  const types = {};
  for (const child of namedChildren(body).filter((item) => item.kind() === 'property_signature')) {
    const name = signatureName(child);
    const annotation = child.children().find((item) => item.kind() === 'type_annotation');
    if (name && annotation) types[name] = typeDesc(annotation);
  }
  return types;
}

/* The text of a string literal default (`'ghost'`), or null: only a literal is migrated through the values of a prop. */
const literalOf = (node) => (node?.kind() === 'string' ? stringOf(node) : null);

/** The first parameter of a component: its name, or what it destructures and the rest. */
function paramDesc(fn) {
  const params = fn.field('parameters') ?? fn.field('parameter');
  const first = params?.kind() === 'identifier' ? params : namedChildren(params)[0];
  if (!first) return { param: {}, type: null };
  const pattern = first.kind() === 'identifier' ? first : first.field('pattern');
  const type = first.field?.('type') ?? null;
  const param = { destructured: [] };
  if (pattern?.kind() === 'identifier') {
    param.name = pattern.text();
  } else if (pattern?.kind() === 'object_pattern') {
    for (const item of namedChildren(pattern)) {
      if (item.kind() === 'shorthand_property_identifier_pattern') {
        param.destructured.push({ local: item.text(), prop: item.text() });
      } else if (item.kind() === 'object_assignment_pattern') {
        const left = item.field('left')?.text();
        if (left) param.destructured.push({ defaultValue: literalOf(item.field('right')), defaulted: true, local: left, prop: left });
      } else if (item.kind() === 'pair_pattern') {
        const key = item.field('key');
        const value = item.field('value');
        const defaulted = value?.kind() === 'assignment_pattern';
        const local = defaulted ? value.field('left')?.text() : value?.text();
        param.destructured.push({ defaultValue: defaulted ? literalOf(value.field('right')) : undefined, defaulted, local, prop: key?.kind() === 'string' ? stringOf(key) : key?.text() });
      } else if (item.kind() === 'rest_pattern') {
        param.rest = namedChildren(item)[0]?.text();
      }
    }
  }
  return { param, type: type ? typeDesc(type) : null };
}

function elementsOf(fn, jsx) {
  if (!jsx) return [];
  return fn.findAll({ rule: { any: [{ kind: 'jsx_self_closing_element' }, { kind: 'jsx_opening_element' }] } }).map((element) => {
    const attrs = [];
    const spreads = [];
    for (const child of namedChildren(element)) {
      if (child.kind() === 'jsx_attribute') {
        const value = namedChildren(child)[1];
        const inner = value?.kind() === 'jsx_expression' ? namedChildren(value)[0] : null;
        attrs.push({ ident: inner?.kind() === 'identifier' ? inner.text() : null, name: namedChildren(child)[0]?.text() });
      } else if (child.kind() === 'jsx_expression') {
        const spread = namedChildren(child)[0];
        if (spread?.kind() === 'spread_element') spreads.push(namedChildren(spread)[0]?.text());
      }
    }
    // Children of its own (`<X { ...p }><span /></X>`): the props' children never reach it.
    const own = element.kind() === 'jsx_opening_element'
      && namedChildren(element.parent()).some((child) => !['jsx_opening_element', 'jsx_closing_element'].includes(child.kind()) && !(child.kind() === 'jsx_text' && child.text().trim() === ''));
    return { attrs, children: own, spreads, tag: element.field('name')?.text() };
  });
}

/** A component declared as a function: `function W(p: P)`, `const W: FC<P> = …`, `forwardRef<R, P>(…)`, `memo(…)`. */
function componentDesc(fn, jsx, typeArgument = null, spreads = true) {
  const { param, type } = paramDesc(fn);
  // Only a component that spreads something can be a wrapper: the others need no element list.
  return { elements: spreads ? elementsOf(fn, jsx) : [], param, propsType: typeArgument ?? type };
}

function valueComponent(value, annotation, jsx, spreads) {
  let fcType = null;
  if (annotation?.k === 'ref' && COMPONENT_TYPES.has(unprefix(annotation.name)) && annotation.args[0]) {
    fcType = annotation.args[0];
  }
  for (let node = value, depth = 0; node && depth < 4; depth++) {
    const kind = node.kind();
    if (kind === 'arrow_function' || kind === 'function_expression' || kind === 'function') {
      return componentDesc(node, jsx, fcType, spreads);
    }
    if (kind === 'parenthesized_expression' || kind === 'as_expression' || kind === 'satisfies_expression') {
      node = namedChildren(node)[0];
      continue;
    }
    if (kind !== 'call_expression') return null;
    const callee = unprefix(node.field('function')?.text() ?? '');
    if (!WRAPPING_CALLS.has(callee)) return null;
    const args = namedChildren(node.field('type_arguments'));
    if (callee === 'forwardRef' && args[1]) fcType = typeDesc(args[1]);
    node = namedChildren(node.field('arguments'))[0];
  }
  return null;
}

/**
 * The import / export structure of a module and its component and type declarations, as plain data.
 * `components: false` skips the components (a module that cannot hold a wrapper).
 */
function analyze(text, filename, { components = true } = {}) {
  const lang = langFor(filename);
  const jsx = lang === Lang.Tsx;
  const root = parse(lang, text).root();
  // A wrapper spreads its props: a declaration without `...` is not one (it may still declare typed props).
  const spreads = (node) => node.text().includes('...');
  // `aliases`: `type MODAL_COLOR = ODS_MODAL_COLOR`, `const MODAL_COLORS = ODS_MODAL_COLORS` (a name given again).
  const desc = { aliases: new Map(), components: new Map(), exportedDecls: [], imports: [], localExports: [], reexports: [], types: new Map() };
  const declare = (node, exported) => {
    const kind = node.kind();
    if (kind === 'interface_declaration') {
      const name = node.field('name')?.text();
      const clause = node.children().find((child) => child.kind() === 'extends_type_clause');
      desc.types.set(name, { ext: namedChildren(clause).map(typeDesc), k: 'interface', props: propertyNames(node.field('body')), types: propertyTypes(node.field('body')) });
      if (exported) desc.exportedDecls.push(name);
    } else if (kind === 'type_alias_declaration') {
      const name = node.field('name')?.text();
      desc.types.set(name, typeDesc(node.field('value')));
      if (node.field('value')?.kind() === 'type_identifier' && !node.field('type_parameters')) desc.aliases.set(name, node.field('value').text());
      if (exported) desc.exportedDecls.push(name);
    } else if (kind === 'function_declaration') {
      const name = node.field('name')?.text();
      if (components) desc.components.set(name, componentDesc(node, jsx, null, spreads(node)));
      if (exported) desc.exportedDecls.push(name);
    } else if (kind === 'lexical_declaration' || kind === 'variable_declaration') {
      for (const declarator of namedChildren(node).filter((child) => child.kind() === 'variable_declarator')) {
        const nameNode = declarator.field('name');
        if (nameNode?.kind() !== 'identifier') continue;
        if (declarator.field('value')?.kind() === 'identifier') desc.aliases.set(nameNode.text(), declarator.field('value').text());
        const component = components && valueComponent(declarator.field('value'), declarator.field('type') ? typeDesc(declarator.field('type')) : null, jsx, spreads(declarator));
        if (component) desc.components.set(nameNode.text(), component);
        if (exported) desc.exportedDecls.push(nameNode.text());
      }
    } else if (exported && ['class_declaration', 'abstract_class_declaration', 'enum_declaration'].includes(kind)) {
      desc.exportedDecls.push(node.field('name')?.text());
    }
  };
  for (const statement of root.children()) {
    const kind = statement.kind();
    if (kind === 'import_statement') {
      const spec = stringOf(statement.field('source'));
      const clause = statement.children().find((child) => child.kind() === 'import_clause');
      const named = [];
      // `import Card from './Card'`: the default export, under a local name.
      const defaultName = clause?.children().find((child) => child.kind() === 'identifier')?.text();
      if (defaultName) named.push({ imported: 'default', local: defaultName });
      for (const item of clause?.findAll({ rule: { kind: 'import_specifier' } }) ?? []) {
        const imported = item.field('name')?.text();
        named.push({ imported, local: item.field('alias')?.text() ?? imported });
      }
      desc.imports.push({ named, spec });
    } else if (kind === 'export_statement') {
      const source = statement.field('source');
      const declaration = statement.field('declaration');
      const clause = statement.children().find((child) => child.kind() === 'export_clause');
      const specs = clause ? clause.findAll({ rule: { kind: 'export_specifier' } }).map((item) => {
        const name = item.field('name')?.text();
        return { exported: item.field('alias')?.text() ?? name, name };
      }) : [];
      if (source) {
        const ns = statement.children().some((child) => child.kind() === 'namespace_export');
        desc.reexports.push({ ns, spec: stringOf(source), specs, star: !clause && !ns });
      } else if (declaration && statement.children().some((child) => child.kind() === 'default')) {
        // `export default function Name(…)`: exported as `default`, declared as Name.
        declare(declaration, false);
        const name = declaration.field('name')?.text();
        if (name) desc.localExports.push({ exported: 'default', local: name });
      } else if (declaration) {
        declare(declaration, true);
      } else if (clause) {
        desc.localExports.push(...specs.map(({ exported, name }) => ({ exported, local: name })));
      } else if (statement.field('value')?.kind() === 'identifier') {
        desc.localExports.push({ exported: 'default', local: statement.field('value').text() });
      }
    } else {
      declare(statement, false);
    }
  }
  return desc;
}

/* ------------------------------------------------------------------------- one module, resolved */

/**
 * The entry of a module from its structure and the entries of what it imports. `targetOf(spec)`:
 * true for an ODS package, the entry of a module, or null.
 */
function computeEntry(desc, targetOf, options) {
  const { components, equivalents, forwardedAs, memberTypes = new Set(), migratedDefault = () => false, propsTypeOf, propsTypes, watched } = options;
  const localOds = new Map();
  // Components of other modules of the project that declare typed props, and their props types, by local name.
  const localTyped = new Map();
  const localTypedTypes = new Map();
  for (const item of desc.imports) {
    const target = targetOf(item.spec);
    if (!target) continue;
    for (const { imported, local } of item.named) {
      const name = imported === 'default' && target === true ? null : odsNameIn(target, imported);
      if (name) localOds.set(local, name);
      else if (target !== true && target.typed?.[imported]) localTyped.set(local, target.typed[imported]);
      else if (target !== true && target.typedTypes?.[imported]) localTypedTypes.set(local, target.typedTypes[imported]);
    }
  }
  const rejected = [];

  // The ODS component whose props a type is, with the props the type declares itself.
  const resolveType = (type, seen = new Set()) => {
    if (!type) return null;
    if (type.k === 'ref') {
      const base = unprefix(type.name ?? '');
      if (TRANSPARENT_TYPES.has(base) && type.args[0]) {
        const inner = resolveType(type.args[0], seen);
        // `Omit<ButtonProp, 'variant'>`: the wrapper takes over the omitted props.
        if (inner && base === 'Omit') literals(type.args[1]).forEach((key) => inner.declared.add(key));
        return inner;
      }
      if (COMPONENT_PROPS.has(base) && type.args[0]?.k === 'query') {
        const component = componentOfTag(type.args[0].name, seen);
        return component ? { components: new Set([component]), declared: new Set() } : null;
      }
      const ods = localOds.get(type.name);
      if (ods && propsTypes.has(ods)) return { components: new Set([propsTypes.get(ods)]), declared: new Set() };
      if (desc.types.has(type.name) && !seen.has(type.name)) {
        seen.add(type.name);
        return resolveType(desc.types.get(type.name), seen);
      }
      return null;
    }
    const items = type.k === 'and' ? type.items : type.k === 'interface' ? [...type.ext, { k: 'object', props: type.props }] : type.k === 'object' ? [type] : [];
    const result = { components: new Set(), declared: new Set() };
    for (const item of items) {
      if (item.k === 'object') {
        item.props.forEach((prop) => result.declared.add(prop));
        continue;
      }
      const inner = resolveType(item, seen);
      inner?.components.forEach((component) => result.components.add(component));
      inner?.declared.forEach((prop) => result.declared.add(prop));
    }
    return result.components.size ? result : null;
  };
  const literals = (type) => (type?.k === 'literal' ? [type.value] : type?.k === 'or' ? type.items.flatMap(literals) : []);
  const single = (resolved) => (resolved?.components.size === 1 ? [...resolved.components][0] : null);
  const redeclares = (resolved, component) => watched.get(component)?.filter((prop) => resolved.declared.has(prop)) ?? [];

  const propsTypeMemo = new Map();
  const propsTypeOfLocal = (name) => {
    if (!propsTypeMemo.has(name)) {
      const resolved = desc.types.has(name) ? resolveType({ args: [], k: 'ref', name }) : null;
      const component = single(resolved);
      propsTypeMemo.set(name, component && redeclares(resolved, component).length === 0 && propsTypeOf.has(component) ? component : null);
    }
    return propsTypeMemo.get(name);
  };

  // The ODS component a JSX tag renders: an ODS import, or a wrapper of this module.
  const componentOfTag = (tag, seen = new Set()) => {
    const ods = localOds.get(tag);
    if (ods && components.has(ods)) return ods;
    return desc.components.has(tag) && !seen.has(`fn:${tag}`) ? wrapperOf(tag, new Set([...seen, `fn:${tag}`])) : null;
  };

  const wrapperMemo = new Map();
  const childrenThrough = new Set();
  const wrapperOf = (name, seen = new Set([`fn:${name}`])) => {
    if (wrapperMemo.has(name)) return wrapperMemo.get(name);
    wrapperMemo.set(name, null);
    const fn = desc.components.get(name);
    const resolved = fn?.propsType ? resolveType(fn.propsType, seen) : null;
    const component = single(resolved);
    let result = null;
    if (component) {
      const own = redeclares(resolved, component);
      const forwarded = fn.param.rest ?? fn.param.name;
      const element = fn.elements.find((item) => item.spreads.includes(forwarded) && (localOds.get(item.tag) === component || (item.tag !== name && componentOfTag(item.tag, seen) === component)));
      // A watched prop taken out of the props must reach the ODS element under its name (`variant={ variant }`).
      const passedOn = (prop, local) => element?.attrs.some((attr) => attr.ident === local && (forwardedAs.get(component)?.get(prop) ?? [prop]).includes(attr.name));
      const kept = (watched.get(component) ?? []).filter((prop) => fn.param.destructured.some((item) => item.prop === prop && !passedOn(prop, item.local)));
      // A default the codemod rewrites with the prop (the props are the ODS ones, nothing of its own): the wrapper still passes it through.
      const defaulted = (watched.get(component) ?? []).filter((prop) => fn.param.destructured.some((item) => item.prop === prop && item.defaulted && !migratedDefault(component, prop, item.defaultValue)));
      if (own.length) {
        rejected.push({ component, kind: 'own', name, props: own, reason: `its props declare or omit ${own.join(', ')}` });
      } else if (defaulted.length) {
        rejected.push({ component, kind: 'default', name, props: defaulted, reason: `it gives ${defaulted.join(', ')} its own default` });
      } else if (!forwarded || !element) {
        rejected.push({ component, kind: 'no-spread', name, props: [], reason: `it does not spread its props on the ODS ${component}` });
      } else if (kept.length) {
        rejected.push({ component, kind: 'not-passed', name, props: kept, reason: `it does not pass ${kept.join(', ')} on to the ODS ${component}` });
      } else {
        result = component;
        // The props' children reach the ODS element: its users write the parts a childless element needs.
        if (!fn.param.destructured.some((item) => item.prop === 'children') && !element.children && !element.attrs.some((attr) => attr.name === 'children')
          && (localOds.get(element.tag) === component || childrenThrough.has(element.tag))) {
          childrenThrough.add(name);
        }
      }
    }
    wrapperMemo.set(name, result);
    return result;
  };

  // The props of a component declared with an ODS type: `{ type }` (an ODS type whose members change,
  // `color?: ButtonColor`) or `{ component }` (an object of ODS props, `Pick<ButtonProp, 'variant'>`).
  const propDescriptor = (type, seen = new Set()) => {
    if (type?.k === 'or') {
      const items = type.items.filter((item) => item.k !== 'nullish');
      return items.length === 1 ? propDescriptor(items[0], seen) : null;
    }
    if (type?.k !== 'ref') return null;
    const base = unprefix(type.name ?? '');
    if (!type.args.length) {
      const ods = localOds.get(type.name);
      if (ods && memberTypes.has(ods)) return { type: ods };
      if (ods && propsTypes.has(ods)) return { component: propsTypes.get(ods) };
      if (!ods && desc.types.has(type.name) && !seen.has(type.name)) return propDescriptor(desc.types.get(type.name), new Set([...seen, type.name]));
      return null;
    }
    if ((TRANSPARENT_TYPES.has(base) || base === 'Pick') && type.args[0]) {
      const inner = propDescriptor(type.args[0], seen);
      return inner?.component ? inner : null;
    }
    if (COMPONENT_PROPS.has(base) && type.args[0]?.k === 'query') {
      const component = componentOfTag(type.args[0].name);
      return component ? { component } : null;
    }
    return null;
  };
  const typedPropsOf = (type) => {
    const out = {};
    const visit = (item, keep, drop, seen) => {
      if (!item || seen.size > 16) return;
      if (item.k === 'ref') {
        const base = unprefix(item.name ?? '');
        if ((TRANSPARENT_TYPES.has(base) || KEY_KEEPING.test(base)) && item.args[0]) {
          visit(item.args[0], keep, base === 'Omit' ? new Set([...(drop ?? []), ...literals(item.args[1])]) : drop, seen);
        } else if (base === 'Pick' && item.args[0]) {
          visit(item.args[0], new Set(literals(item.args[1])), drop, seen);
        } else if (!localOds.has(item.name) && desc.types.has(item.name) && !seen.has(item.name)) {
          visit(desc.types.get(item.name), keep, drop, new Set([...seen, item.name]));
        }
      } else if (item.k === 'and' || item.k === 'or') {
        item.items.forEach((part) => visit(part, keep, drop, seen));
      } else if (item.k === 'interface') {
        item.ext.forEach((part) => visit(part, keep, drop, seen));
        visit({ k: 'object', props: item.props, types: item.types }, keep, drop, seen);
      } else if (item.k === 'object') {
        for (const prop of item.props) {
          if ((keep && !keep.has(prop)) || drop?.has(prop) || Object.hasOwn(out, prop)) continue;
          const found = propDescriptor(item.types?.[prop]);
          if (found) out[prop] = found;
        }
      }
    };
    visit(type, null, null, new Set());
    return Object.keys(out).length ? out : null;
  };
  const ownTyped = {};
  for (const [name, fn] of desc.components) {
    const typed = fn.propsType ? typedPropsOf(fn.propsType) : null;
    if (typed && !wrapperOf(name)) ownTyped[name] = typed;
  }
  // The props types of those components, by name (`ConfigCardProps`): an object typed with one carries the same
  // values (`const p: Partial<ConfigCardProps> = { variant: 'ghost' }`, a test helper that spreads it on the component).
  const ownTypedTypes = {};
  for (const [name, fn] of desc.components) {
    const typeName = fn.propsType?.k === 'ref' && !fn.propsType.args.length ? fn.propsType.name : null;
    if (ownTyped[name] && typeName && desc.types.has(typeName)) ownTypedTypes[typeName] = ownTyped[name];
  }

  const entry = { childrenThrough: new Set(), names: {}, reexports: false, shadow: new Set(), star: false, typed: {}, typedTypes: {}, wrappers: {} };
  const explicit = new Set([...desc.reexports.flatMap((item) => item.specs.map((spec) => spec.exported)), ...desc.localExports.map((item) => item.exported), ...desc.exportedDecls]);
  const setName = (exported, ods, passThrough) => {
    entry.names[exported] = ods;
    if (passThrough) {
      for (const other of equivalents.get(exported) ?? []) {
        if (!explicit.has(other)) entry.names[other] = other;
      }
    }
  };
  for (const item of desc.reexports.filter((reexport) => reexport.star)) {
    const target = targetOf(item.spec);
    if (target === true) {
      entry.star = true;
      entry.reexports = true;
    } else if (target) {
      entry.star ||= target.star;
      for (const [name, ods] of Object.entries(target.names)) {
        if (!explicit.has(name) && name !== 'default') entry.names[name] = ods;
      }
      (target.shadow ?? []).forEach((name) => !explicit.has(name) && entry.shadow.add(name));
      Object.assign(entry.wrappers, Object.fromEntries(Object.entries(target.wrappers ?? {}).filter(([name]) => !explicit.has(name))));
      (target.childrenThrough ?? []).filter((name) => !explicit.has(name)).forEach((name) => entry.childrenThrough.add(name));
      Object.assign(entry.typed, Object.fromEntries(Object.entries(target.typed ?? {}).filter(([name]) => !explicit.has(name) && name !== 'default')));
      Object.assign(entry.typedTypes, Object.fromEntries(Object.entries(target.typedTypes ?? {}).filter(([name]) => !explicit.has(name))));
      entry.reexports ||= Boolean(target.reexports);
    }
  }
  for (const item of desc.reexports.filter((reexport) => !reexport.star)) {
    const target = targetOf(item.spec);
    for (const spec of item.specs) {
      const ods = item.ns ? null : odsNameIn(target, spec.name);
      if (ods) {
        setName(spec.exported, ods, spec.exported === spec.name && spec.name === ods);
        entry.reexports = true;
        if (target !== true && target.wrappers?.[spec.name]) entry.wrappers[spec.exported] = target.wrappers[spec.name];
        if (target !== true && target.childrenThrough?.includes(spec.name)) entry.childrenThrough.add(spec.exported);
      } else {
        entry.shadow.add(spec.exported);
        if (target && target !== true && target.typed?.[spec.name]) entry.typed[spec.exported] = target.typed[spec.name];
        if (target && target !== true && target.typedTypes?.[spec.name]) entry.typedTypes[spec.exported] = target.typedTypes[spec.name];
      }
    }
  }
  const localName = (local) => {
    if (localOds.has(local)) return { ods: localOds.get(local), reexport: true };
    if (localOds.has(desc.aliases.get(local)) && !propsTypes.has(localOds.get(desc.aliases.get(local)))) return { ods: localOds.get(desc.aliases.get(local)), reexport: true };
    const wrapped = wrapperOf(local);
    if (wrapped) return { ods: wrapped, wrapper: wrapped };
    const props = propsTypeOfLocal(local);
    return props ? { ods: propsTypeOf.get(props) } : null;
  };
  for (const { exported, local } of [...desc.localExports, ...desc.exportedDecls.map((name) => ({ exported: name, local: name }))]) {
    const found = localName(local);
    if (found) {
      setName(exported, found.ods, found.reexport && exported === local && local === found.ods);
      if (found.reexport) entry.reexports = true;
      if (found.wrapper) entry.wrappers[exported] = found.wrapper;
      if (found.wrapper && childrenThrough.has(local)) entry.childrenThrough.add(exported);
    } else {
      entry.shadow.add(exported);
      const typed = ownTyped[local] ?? localTyped.get(local);
      if (typed) entry.typed[exported] = typed;
      const typedType = ownTypedTypes[local] ?? localTypedTypes.get(local);
      if (typedType) entry.typedTypes[exported] = typedType;
    }
  }
  for (const name of Object.keys(entry.names)) entry.shadow.delete(name);
  entry.shadow = [...entry.shadow];
  entry.childrenThrough = [...entry.childrenThrough];
  entry.rejected = rejected.filter((item) => explicit.has(item.name) || desc.localExports.some((exp) => exp.local === item.name));
  if (!Object.keys(entry.typedTypes).length) delete entry.typedTypes;
  entry.ownTyped = ownTyped;
  entry.ownTypedTypes = ownTypedTypes;
  return entry;
}

const isEmpty = (entry) => !entry || (!entry.star && Object.keys(entry.names).length === 0 && Object.keys(entry.typed ?? {}).length === 0 && Object.keys(entry.typedTypes ?? {}).length === 0);
/* A module that only declares typed props: not a module that stands for ODS (its names are its own). */
const standsForOds = (entry) => Boolean(entry && (entry.star || Object.keys(entry.names).length));
const sameEntry = (a, b) => JSON.stringify(a) === JSON.stringify(b);

/* ------------------------------------------------------------------------- the project */

/**
 * Builds the index of the scanned files (absolute paths: scripts and package.json files).
 * Returns { modules, sourcesFor(file), importersOf(file), workspace, odsPackages, treatAsOds, suspects, rejected, ownTyped }.
 * `modules` also holds the modules whose only link to ODS is a component with typed props (see
 * standsForOds); `ownTyped` maps a file to its components with typed props, by local name.
 */
function buildProjectIndex(files, { mapping, treatAsOds = [], readText = (path) => readFileSync(path, 'utf8') } = {}) {
  const options = indexOptions(mapping);
  const packages = [...new Set([...ODS_PACKAGES, ...treatAsOds])];
  const workspace = new Map();
  for (const file of files.filter((path) => basename(path) === 'package.json')) {
    try {
      const name = JSON.parse(readText(file))?.name;
      if (typeof name === 'string' && name && !packages.includes(name)) workspace.set(name, dirname(file));
    } catch {
      // Reported by the manifest pass.
    }
  }
  const resolver = createResolver({ packages, workspace });
  const scanned = new Set(files.filter((path) => SCRIPTS.test(path) && basename(path) !== 'package.json'));

  // 1. Every specifier of every file, resolved; files outside the scanned paths that they reach are read too.
  const nodes = new Map();
  const importers = new Map();
  const queue = [...scanned];
  while (queue.length) {
    const file = queue.pop();
    if (nodes.has(file)) continue;
    let text;
    try {
      text = readText(file);
    } catch {
      nodes.set(file, { specs: new Map(), text: '' });
      continue;
    }
    const bare = stripComments(text);
    const specs = new Map();
    for (const match of bare.matchAll(SPECIFIER)) {
      const spec = match[1] ?? match[2] ?? match[3] ?? match[4];
      if (specs.has(spec)) continue;
      const target = resolver.resolve(file, spec);
      specs.set(spec, target);
      if (target.file) {
        if (!importers.has(target.file)) importers.set(target.file, new Set());
        importers.get(target.file).add(file);
        if (!nodes.has(target.file) && !target.file.split(sep).includes('node_modules')) queue.push(target.file);
      }
    }
    nodes.set(file, { bare, specs, text });
  }

  // 2. Entries, until nothing changes: a module is parsed once something it imports reaches ODS.
  const entries = new Map();
  const descs = new Map();
  const rejectedByFile = new Map();
  const ownTypedByFile = new Map();
  const ownTypedTypesByFile = new Map();
  const targetOf = (file) => (spec) => {
    const target = nodes.get(file)?.specs.get(spec) ?? resolver.resolve(file, spec);
    if (target.ods) return true;
    return target.file ? entries.get(target.file) ?? null : null;
  };
  // Parsed for its components only when one can wrap ODS or declare typed props: the file reads an ODS
  // props type or an ODS type whose members change, or a typed component of another module.
  const canWrap = (file, node) => {
    if (/\bComponentProps/.test(node.bare)) return true;
    node.named ??= [...node.bare.matchAll(NAMED_IMPORT)].map((match) => ({ names: match[1].split(',').map(importedName).filter(Boolean), spec: match[2] }));
    const of = targetOf(file);
    return node.named.some(({ names, spec }) => {
      const target = of(spec);
      return target && names.some((name) => {
        const ods = odsNameIn(target, name);
        return options.propsTypes.has(ods) || options.memberTypes.has(ods) || (target !== true && Boolean(target.typed?.[name] || target.typedTypes?.[name]));
      });
    });
  };
  const pending = new Set();
  for (const [file, node] of nodes) {
    if ([...node.specs.values()].some((target) => target.ods)) pending.add(file);
  }
  let budget = nodes.size * 20 + 1000;
  while (pending.size && budget-- > 0) {
    const [file] = pending;
    pending.delete(file);
    const node = nodes.get(file);
    if (!/\bexport\b/.test(node.bare)) continue;
    // Parsed only when it can stand for ODS: it re-exports, or it can declare a wrapper or a props type (it reads an ODS props type).
    const wraps = canWrap(file, node);
    if (!wraps && !REEXPORT.test(node.bare)) continue;
    const known = descs.get(file);
    if (!known || (wraps && !known.components)) {
      try {
        descs.set(file, { components: wraps, desc: analyze(node.text, file, { components: wraps }) });
      } catch {
        descs.set(file, { components: wraps, desc: null });
      }
    }
    const { desc } = descs.get(file);
    if (!desc) continue;
    const entry = computeEntry(desc, targetOf(file), options);
    if (entry.rejected.length) rejectedByFile.set(file, entry.rejected);
    else rejectedByFile.delete(file);
    if (Object.keys(entry.ownTyped).length) ownTypedByFile.set(file, entry.ownTyped);
    else ownTypedByFile.delete(file);
    if (Object.keys(entry.ownTypedTypes).length) ownTypedTypesByFile.set(file, entry.ownTypedTypes);
    else ownTypedTypesByFile.delete(file);
    delete entry.rejected;
    delete entry.ownTyped;
    delete entry.ownTypedTypes;
    const before = entries.get(file);
    const next = isEmpty(entry) ? undefined : entry;
    if (!sameEntry(before, next)) {
      if (next) entries.set(file, next);
      else entries.delete(file);
      for (const importer of importers.get(file) ?? []) pending.add(importer);
    }
  }

  // 3. What the engines need per file: the specifiers of a file that stand for ODS, with their entry.
  const sourcesFor = (file) => {
    const node = nodes.get(file);
    if (!node) return null;
    let map = null;
    for (const [spec, target] of node.specs) {
      const entry = target.file && entries.get(target.file);
      if (entry) (map ??= new Map()).set(spec, entry);
    }
    return map;
  };
  const importersOf = (file) => [...(importers.get(file) ?? [])].filter((importer) => scanned.has(importer));

  // 4. Imports that look like ODS but lead to nothing the index understood.
  const suspects = new Map();
  for (const file of scanned) {
    const node = nodes.get(file);
    for (const match of node.bare.matchAll(NAMED_IMPORT)) {
      const spec = match[2];
      const target = node.specs.get(spec);
      if (!target || target.ods || (target.file && standsForOds(entries.get(target.file)))) continue;
      const names = match[1].split(',').map(importedName).filter((name) => options.distinctive.has(name));
      if (!names.length) continue;
      const key = target.file ? `file:${target.file}` : `spec:${spec}`;
      if (!suspects.has(key)) suspects.set(key, { file: target.file ?? null, files: new Set(), installed: Boolean(target.installed), names: new Set(), package: target.package ?? null, resolved: Boolean(target.file), specifier: spec, specifiers: new Set() });
      const suspect = suspects.get(key);
      suspect.files.add(file);
      suspect.specifiers.add(spec);
      names.forEach((name) => suspect.names.add(name));
    }
  }

  // The workspace packages whose entry stands for ODS (a UI kit in the tree), and those that hold such a module.
  const moduleFiles = [...entries.keys()];
  const holding = [...resolver.workspace].filter(([, dir]) => moduleFiles.some((file) => !relative(dir, file).startsWith('..'))).map(([name]) => name);
  const odsPackages = holding.filter((name) => standsForOds(entries.get(resolver.packageEntry(resolver.workspace.get(name), ''))));
  return {
    importersOf,
    // True when the code of a file (comments aside) names `name`: a file that imports a barrel uses only some of its names.
    mentions: (file, name) => new RegExp(`(^|[^\\w$])${name.replace(/[$]/g, '\\$&')}(?![\\w$])`).test(nodes.get(file)?.bare ?? ''),
    modules: entries,
    ownTyped: ownTypedByFile,
    ownTypedTypes: ownTypedTypesByFile,
    odsPackages,
    workspacePackages: holding,
    rejected: rejectedByFile,
    sourcesFor,
    suspects: [...suspects.values()].map((suspect) => ({ ...suspect, files: [...suspect.files], names: [...suspect.names].sort(), specifiers: [...suspect.specifiers] })),
    treatAsOds: [...treatAsOds],
    workspace: resolver.workspace,
  };
}

export { analyze, buildProjectIndex, computeEntry, indexOptions, standsForOds, stripComments };
