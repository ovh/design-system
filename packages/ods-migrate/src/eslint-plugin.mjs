import { readFileSync } from 'node:fs';
import { moduleLookup, odsNameIn, olderOdsOf } from './resolve.mjs';
import { attributeText, isUntyped, isV19Look, memberRule, resolveMapping, resolveTokenMapping, stackingNeedsCheck, typeRule } from './shared.mjs';
import { planScriptTokens } from './tokens.mjs';

const defaultMapping = JSON.parse(readFileSync(new URL('../mappings/v19-to-v20.json', import.meta.url), 'utf8'));
const defaultTokenMapping = JSON.parse(readFileSync(new URL('../mappings/tokens-v19-to-v20.json', import.meta.url), 'utf8'));

/* ------------------------------------------------------------------------- AST helpers */

/** The expressions that can end up as the value of a prop: ternary branches, `||` / `??` operands, the right of `&&`. */
function valueLeaves(node) {
  switch (node?.type) {
    case 'ConditionalExpression':
      return [...valueLeaves(node.consequent), ...valueLeaves(node.alternate)];
    case 'LogicalExpression':
      return node.operator === '&&' ? valueLeaves(node.right) : [...valueLeaves(node.left), ...valueLeaves(node.right)];
    case undefined:
    case null:
      return [];
    default:
      return [node];
  }
}

const isString = (node) => node?.type === 'Literal' && typeof node.value === 'string';
/** The value of a string literal, or of a template literal without substitution nor escape (`\`ghost\``), as the codemod reads it. */
function stringOf(node) {
  if (isString(node)) {
    return node.value;
  }
  const quasi = node?.type === 'TemplateLiteral' && node.expressions.length === 0 ? node.quasis[0]?.value : null;
  return quasi && quasi.raw === quasi.cooked ? quasi.cooked : undefined;
}
const isStaticString = (node) => stringOf(node) !== undefined;
const literalLeaves = (node) => valueLeaves(node).filter(isStaticString);
const isConstAssertion = (node) => node.type === 'TSAsExpression' && node.typeAnnotation.type === 'TSTypeReference'
  && node.typeAnnotation.typeName.type === 'Identifier' && node.typeAnnotation.typeName.name === 'const';
/* `x` written as `x`, `obj.x` or `f(x)`: no parentheses needed around it. */
const isSimple = (node) => ['CallExpression', 'Identifier', 'MemberExpression'].includes(node.type);

/** `'x' as const` is the literal itself. Any other `as` / `satisfies` has its own type, read by its own handler. */
function unwrapConst(node) {
  return node && isConstAssertion(node) ? unwrapConst(node.expression) : node;
}

/** The name of a property key (`a`, `'a'`), or undefined when it is computed. */
function keyName(property) {
  if (property.computed) {
    return undefined;
  }
  return property.key.type === 'Identifier' ? property.key.name : isString(property.key) ? property.key.value : undefined;
}

function referenceName(type) {
  if (type?.type === 'TSInterfaceHeritage') {
    return type.expression.type === 'Identifier' ? type.expression.name : undefined;
  }
  return type?.type === 'TSTypeReference' && type.typeName.type === 'Identifier' ? type.typeName.name : undefined;
}

const typeArguments = (type) => type?.typeArguments?.params ?? [];

/** The string literals of a type such as `'color'` or `'color' | 'size'`, or null when it is anything else. */
function literalTypes(type) {
  const members = type?.type === 'TSUnionType' ? type.types : [type];
  return members.every((member) => member?.type === 'TSLiteralType' && isString(member.literal)) ? members : null;
}

/**
 * The string literals at a value position of a type, each with the name of the type that types it:
 * bare `T`, `T[]`, `Array<T>`, `ReadonlyArray<T>`, the `V` of `Record<K, V>`, the matching property
 * of an object type literal, through unions. A sibling string (a label, an i18n key) is never one.
 */
function typedPositions(value, type) {
  const node = unwrapConst(value);
  if (!node || !type) {
    return [];
  }
  switch (type.type) {
    case 'TSTypeAnnotation':
    case 'TSParenthesizedType':
      return typedPositions(node, type.typeAnnotation);
    case 'TSUnionType':
      return type.types.flatMap((member) => typedPositions(node, member));
    case 'TSTypeOperator':
      return type.operator === 'readonly' ? typedPositions(node, type.typeAnnotation) : [];
    case 'TSArrayType':
      return node.type === 'ArrayExpression' ? node.elements.flatMap((element) => typedPositions(element, type.elementType)) : [];
    case 'TSTypeLiteral': {
      if (node.type !== 'ObjectExpression') {
        return [];
      }
      return node.properties.flatMap((property) => {
        const member = property.type === 'Property' && type.members.find((item) => item.type === 'TSPropertySignature' && keyName(item) === keyName(property));
        return member ? typedPositions(property.value, member.typeAnnotation) : [];
      });
    }
    case 'TSTypeReference': {
      const name = referenceName(type);
      const args = typeArguments(type);
      if ((name === 'Array' || name === 'ReadonlyArray') && args.length === 1) {
        return node.type === 'ArrayExpression' ? node.elements.flatMap((element) => typedPositions(element, args[0])) : [];
      }
      if (name === 'Record' && args.length === 2) {
        return node.type === 'ObjectExpression'
          ? node.properties.flatMap((property) => (property.type === 'Property' ? typedPositions(property.value, args[1]) : []))
          : [];
      }
      return name ? literalLeaves(node).map((literal) => ({ literal, name })) : [];
    }
    default:
      return [];
  }
}

/** Object literals typed with a type whose keys are renamed (`memberKeys`): `: T`, `as T`, `satisfies T`, `Partial<T>`. */
function keyedObject(value, type) {
  const node = unwrapConst(value);
  if (type?.type === 'TSTypeAnnotation') {
    return keyedObject(node, type.typeAnnotation);
  }
  const name = referenceName(type);
  if (name === 'Partial' && typeArguments(type).length === 1) {
    return keyedObject(node, typeArguments(type)[0]);
  }
  return name && node?.type === 'ObjectExpression' ? { name, object: node } : null;
}

/**
 * The key of `v19Look.values` that a value of the v19 prop stands for: the value itself, or the v19
 * value it was mapped from, when an earlier --fix pass already wrote the v20 constant
 * (`color={ BADGE_STATUS.accent }` is v19 `primary`: the import fix and the attribute fix overlap,
 * so ESLint applies them in two passes). Undefined when there is none.
 */
function v19LookKey(rule, key) {
  if (!rule.v19Look || key === undefined) {
    return undefined;
  }
  if (Object.hasOwn(rule.v19Look.values ?? {}, key)) {
    return key;
  }
  return Object.keys(rule.values ?? {}).find((from) => rule.values[from] === key && Object.hasOwn(rule.v19Look.values ?? {}, from));
}

/**
 * The constants of a renamed prop (`BUTTON_VARIANT` feeds `variant` of Button, renamed `emphasis`),
 * by v19 name and by v20 name, as the codemod reads them.
 */
function propConstants(mapping) {
  const constants = new Map();
  for (const [component, spec] of Object.entries(mapping.components)) {
    for (const [prop, rule] of Object.entries(spec.props ?? {})) {
      const renamed = rule.constant && mapping.exports[rule.constant]?.renameTo;
      if (spec.extends || !rule.renameTo || !renamed || constants.has(rule.constant)) {
        continue;
      }
      const info = { component, constant: rule.constant, prop, renameTo: rule.renameTo, v20: renamed };
      constants.set(rule.constant, info);
      constants.set(renamed, info);
    }
  }
  return constants;
}

/* The words that tell a marker of a key that feeds a renamed prop (the lint rule finds the codemod's marker by them). */
const FEEDS_SPREAD = 'Passed to an ODS';
/*
 * Names the constant as the code now reads it, and as v19 wrote it: `v19Member` is the member the
 * code had, `v20Member` what it became (unknown in the lint rule on already migrated code: `…`).
 */
const feedsMessage = ({ component, constant, prop, renameTo, v20 }, v19Member, v20Member = v19Member) => `${prop}: holds ${v20}.${v20Member} (${constant}.${v19Member} in v19), the ${renameTo} of an ODS ${component}. ${FEEDS_SPREAD} ${component} with {...obj}? Rename the key to ${renameTo}: TypeScript does not flag it there. Read as obj.${prop}? Keep it and delete this comment`;

/* A spread on an ODS element that may carry v19 props: TypeScript does not flag a key in a spread. */
const spreadMessage = (component, carried) => `<${component} {...…}>: if the object passed here with {...} has these keys, change them (TypeScript does not flag them there): ${carried.join(', ')}`;

/** The object property an expression is the value of, through parentheses, `as`, `satisfies`, `!`, a ternary branch, `||` / `??`, the right of `&&`. */
function valueProperty(node) {
  let child = node;
  for (let parent = child.parent; parent; child = parent, parent = parent.parent) {
    if (parent.type === 'Property') {
      return parent.value === child && parent.parent?.type === 'ObjectExpression' ? parent : null;
    }
    const kept = ['TSAsExpression', 'TSSatisfiesExpression', 'TSNonNullExpression'].includes(parent.type)
      || (parent.type === 'ConditionalExpression' && parent.test !== child)
      || (parent.type === 'LogicalExpression' && (parent.operator !== '&&' || parent.right === child));
    if (!kept) {
      return null;
    }
  }
  return null;
}

/** Walks every node under `node` (visitor keys of the parser), parents first. */
function walk(node, visitorKeys, visit) {
  visit(node);
  for (const key of visitorKeys[node.type] ?? []) {
    for (const child of [node[key]].flat()) {
      if (child && typeof child.type === 'string') {
        walk(child, visitorKeys, visit);
      }
    }
  }
}

/* The entry points of a package that are not a component (`/style`, `/normalize-css`): their names are not the ODS API. */
const COMPONENT_ENTRY = /^(?!style$|normalize-css$)[a-z][a-z0-9-]*$/;
/* The component entry points that v20 removes, with what to import instead (the codemod's words). */
const REMOVED_ENTRIES = { switch: 'the Switch is removed with its entry point: use Tabs (`@ovhcloud/ods-react/tabs`) with `variant="switch"`, a single-select ButtonGroup or a RadioGroup' };
const hintOf = (rule) => (rule?.hint ? `: ${rule.hint}` : '');
/* The import of a removed export its code still reads, in the words of the codemod's marker. */
const removedImportMessage = (names) => `${names.join(', ')}: removed in ODS v20, delete ${names.length > 1 ? 'them' : 'it'} from this import once the places marked below no longer use ${names.length > 1 ? 'them' : 'it'}`;
const configOf = (options) => ({ look: options?.look, pending: options?.pending });
const contains = (outer, node) => node.range[0] >= outer.range[0] && node.range[1] <= outer.range[1];

/* ------------------------------------------------------------------------- shared rule plumbing */

/** The text helpers every rule needs: quotes kept, removals that leave clean code, CRLF kept. */
function textHelpers(sourceCode) {
  const { text } = sourceCode;
  const quote = (node, value) => {
    const raw = sourceCode.getText(node);
    return `${raw[0]}${value}${raw[0]}`;
  };
  const indentOf = (node) => sourceCode.lines[node.loc.start.line - 1].match(/^[ \t]*/)[0];
  const eol = text.includes('\r\n') ? '\r\n' : '\n';
  // A JSX attribute goes with the whitespace before it.
  const removeAttribute = (fixer, attribute) => fixer.removeRange([sourceCode.getTokenBefore(attribute).range[1], attribute.range[1]]);
  // A statement goes with its line break (CRLF included).
  const removeStatement = (fixer, node) => {
    const end = node.range[1];
    return fixer.removeRange([node.range[0], end + (text.startsWith('\r\n', end) ? 2 : text[end] === '\n' ? 1 : 0)]);
  };
  // An item of a comma list goes with the comma after it, or the comma before it when it is the last one.
  const removeListItem = (fixer, item) => {
    const after = sourceCode.getTokenAfter(item);
    const next = after.value === ',' ? sourceCode.getTokenAfter(after) : after;
    const before = sourceCode.getTokenBefore(item);
    // The last item goes with the comma before it (a trailing comma stays), as the codemod does.
    if (/^[}\])]$/.test(next.value) && before.value === ',') {
      return fixer.removeRange([before.range[0], item.range[1]]);
    }
    if (after.value === ',') {
      return fixer.removeRange([item.range[0], next.range[0]]);
    }
    return fixer.removeRange([before.range[0], item.range[1]]);
  };
  // Removes the named imports of one statement in a single fix, the way the codemod does: a run of removed
  // specifiers goes up to the next kept one or, at the end of the list, from the comma after the last kept one.
  // One fix for all of them: two removals that touch would be applied in two --fix passes, one at a time.
  const removeSpecifiers = (fixer, node, removed) => {
    if (removed.size === node.specifiers.length) {
      return removeStatement(fixer, node);
    }
    const items = node.specifiers.filter((spec) => spec.type === 'ImportSpecifier');
    if (items.every((spec) => removed.has(spec))) {
      const open = sourceCode.getTokenBefore(items[0]);
      return fixer.removeRange([sourceCode.getTokenBefore(open).range[0], sourceCode.getTokenAfter(items.at(-1), (token) => token.value === '}').range[1]]);
    }
    const fixes = [];
    for (let index = 0; index < items.length; index++) {
      if (!removed.has(items[index])) {
        continue;
      }
      let last = index;
      while (last + 1 < items.length && removed.has(items[last + 1])) {
        last++;
      }
      if (last < items.length - 1) {
        fixes.push(fixer.removeRange([items[index].range[0], items[last + 1].range[0]]));
      } else {
        const comma = sourceCode.getTokenAfter(items[index - 1]);
        fixes.push(fixer.removeRange([comma.value === ',' ? comma.range[0] : items[index - 1].range[1], items[last].range[1]]));
      }
      index = last;
    }
    return fixes;
  };
  // Appends items to a comma list (object literal, named imports), keeping the trailing comma and the layout.
  const appendToList = (fixer, items, last, open, texts) => {
    if (!last) {
      return fixer.insertTextAfter(open, ` ${texts.join(', ')} `);
    }
    const after = sourceCode.getTokenAfter(last);
    const trailing = after.value === ',';
    const close = trailing ? sourceCode.getTokenAfter(after) : after;
    if (last.loc.end.line < close.loc.start.line) {
      const indent = indentOf(last);
      return trailing
        ? fixer.insertTextAfter(after, texts.map((item) => `${eol}${indent}${item},`).join(''))
        : fixer.insertTextAfter(last, texts.map((item) => `,${eol}${indent}${item}`).join(''));
    }
    return trailing
      ? fixer.insertTextAfter(after, texts.map((item) => ` ${item},`).join(''))
      : fixer.insertTextAfter(last, texts.map((item) => `, ${item}`).join(''));
  };
  return { appendToList, eol, indentOf, quote, removeAttribute, removeListItem, removeSpecifiers, removeStatement };
}

/**
 * The sources a rule follows: the package, the --built-on-ods packages (option `builtOnOds`, or its
 * former names `treatAsOds` and `packages`), and the modules of the project that stand for ODS, listed by the CLI in
 * ods-migrate.modules.json (option `modules`: another path, or false). `isSource(specifier)` and
 * `targetOf(specifier)`: true for a package, the entry of a module, or null.
 */
function sourcesOf(context, mapping) {
  const options = context.options[0] ?? {};
  const builtOnOds = [...(options.builtOnOds ?? []), ...(options.treatAsOds ?? []), ...(options.packages ?? [])];
  const lookup = moduleLookup({ cwd: context.cwd ?? process.cwd(), option: options.modules, packages: builtOnOds });
  const packages = [...new Set([mapping.package, ...builtOnOds, ...lookup.treatAsOds])];
  // `@ovhcloud/ods-react/button`: a component entry point of a package, read like the package, as in the codemod.
  const isPackage = (specifier) => packages.includes(specifier) || packages.some((name) => specifier?.startsWith(`${name}/`) && COMPONENT_ENTRY.test(specifier.slice(name.length + 1)));
  const targetOf = (specifier) => (isPackage(specifier) ? true : lookup(context.filename, specifier));
  // A module whose only link to ODS is a component with typed props is not a source: its names are its own.
  const standsForOds = (target) => target === true || Boolean(target && (target.star || Object.keys(target.names ?? {}).length));
  return { isPackage, isSource: (specifier) => standsForOds(targetOf(specifier)), ownTyped: lookup.components(context.filename), packages, standsForOds, targetOf };
}

/** Reads the imports of the package (and of the UI kits and modules that re-export it) into the maps every rule uses. */
function importTracker(mapping, { standsForOds = () => true, targetOf }) {
  const state = {
    // Components of the project whose props are typed with ODS types: local name → { prop: { type } | { component } }.
    typed: new Map(),
    components: new Map(),
    // The ODS name of each named import (null: a name of a module of the project that is not ODS).
    odsNames: new Map(),
    // Wrapper components of the project (`<GuardedButton>`, a Button): no v19-look addition, no parts written out unless they pass their children on.
    wrappers: new Set(),
    // The wrappers among them whose props' children reach the ODS element.
    childrenWrappers: new Set(),
    // Every named import of the package: local name → imported name.
    imports: new Map(),
    importNodes: [],
    // Local type names that are the props type of a component (`BadgeProp`, local aliases followed).
    propsTypes: new Map(),
    renamedExports: new Map(),
  };
  const propsTypeOwners = new Map();
  for (const [name, component] of Object.entries(mapping.components)) {
    for (const type of [component.propsType ?? []].flat()) {
      propsTypeOwners.set(type, name);
    }
  }
  state.read = (node) => {
    const target = targetOf(node.source.value);
    if (!target) {
      return false;
    }
    if (target !== true && Object.keys(target.typed ?? {}).length) {
      for (const spec of node.specifiers) {
        const written = spec.type === 'ImportDefaultSpecifier' ? 'default' : spec.type === 'ImportSpecifier' ? spec.imported.name ?? spec.imported.value : null;
        if (written && target.typed[written]) {
          state.typed.set(spec.local.name, target.typed[written]);
        }
      }
    }
    if (!standsForOds(target)) {
      return false;
    }
    state.importNodes.push(node);
    for (const spec of node.specifiers) {
      // `import Banner from './Banner'`: the default export of a module of the project, when it stands for an ODS component.
      if (spec.type === 'ImportDefaultSpecifier' && target !== true) {
        const name = odsNameIn(target, 'default');
        if (name && mapping.components[name]) {
          state.imports.set(spec.local.name, name);
          state.components.set(spec.local.name, name);
          if (target.wrappers?.default) {
            state.wrappers.add(spec.local.name);
            if (target.childrenThrough?.includes('default')) state.childrenWrappers.add(spec.local.name);
          }
        }
        continue;
      }
      if (spec.type !== 'ImportSpecifier') {
        continue;
      }
      const written = spec.imported.name ?? spec.imported.value;
      const name = odsNameIn(target, written);
      state.odsNames.set(spec, name);
      if (!name) {
        continue;
      }
      state.imports.set(spec.local.name, name);
      if (mapping.components[name]) {
        state.components.set(spec.local.name, name);
        if (target !== true && target.wrappers?.[written]) {
          state.wrappers.add(spec.local.name);
          if (target.childrenThrough?.includes(written)) state.childrenWrappers.add(spec.local.name);
        }
      }
      if (propsTypeOwners.has(name)) {
        state.propsTypes.set(spec.local.name, propsTypeOwners.get(name));
      }
      // Already renamed (by hand, or by a previous --fix pass): the old members are still to fix.
      const renamedFrom = Object.values(mapping.exports).find((rule) => rule.renameTo === name && rule.members);
      if (renamedFrom) {
        state.renamedExports.set(spec.local.name, renamedFrom);
      }
      if (mapping.exports[name]) {
        state.renamedExports.set(spec.local.name, mapping.exports[name]);
      }
    }
    return true;
  };
  return state;
}

/* ------------------------------------------------------------------------- ods/v20-migration */

/**
 * Flags every v19 API that v20 removed, from the same mapping as the codemod, and fixes it with --fix.
 * Run after the codemod: it catches what was missed and stops the old API from coming back.
 */
function migrationRule(rawMapping) {
  return {
    create(context) {
      // A package pinned to ODS 17 or 18 is left alone, as the codemod does: the v20 names do not exist in its theme.
      if (olderOdsOf(context.filename)) {
        return {};
      }
      const { sourceCode } = context;
      const options = context.options[0] ?? {};
      const config = configOf(options);
      const mapping = resolveMapping(rawMapping, config);
      const sources = sourcesOf(context, mapping);
      const { isSource } = sources;
      const untyped = isUntyped(sourceCode.text, context.filename);
      const { appendToList, eol, indentOf, quote, removeAttribute, removeListItem, removeSpecifiers } = textHelpers(sourceCode);
      const imports = importTracker(mapping, sources);
      const { components, propsTypes, renamedExports } = imports;
      // Removed exports: their import goes once nothing reads them, checked at the end of the file.
      const removedSpecifiers = [];
      // Every named import of the package: a renamed one whose reads all sit in deleted attributes goes too.
      const specifiers = [];
      // Attributes deleted or replaced (what they read is no longer read), attributes reported (still read, already flagged).
      const dropped = [];
      const flagged = [];
      const within = (nodes, node) => nodes.some((other) => contains(other, node));
      const typeNodes = [];
      const conflictNodes = [];

      const renamedConstants = new Set(Object.values(mapping.exports).filter((rule) => rule.renameTo && rule.members).map((rule) => rule.renameTo));
      // The member a read of an export reads (`BUTTON_COLOR.information`, a type `ButtonColor.information`) when it has no v20 value.
      const orphanRead = (identifier, rule) => {
        const { parent } = identifier;
        const key = parent.type === 'MemberExpression' && parent.object === identifier ? (parent.computed ? stringOf(parent.property) : parent.property.name)
          : parent.type === 'TSQualifiedName' && parent.left === identifier ? parent.right.name : undefined;
        return key !== undefined && memberRule(rule, key)?.to === null;
      };
      // Renamed exports some reads of which keep the v19 name (their member has no v20 value): reported on the import, as the codemod marks it.
      const keptV19 = [];
      // A --fix pass may drop the import of a constant read only in an attribute that a later pass deletes
      // (ESLint skips overlapping fixes): the read left behind is unbound, and still that v19 constant.
      let unbound;
      const unboundConstant = (name) => {
        unbound ??= new Set(sourceCode.scopeManager.globalScope.through.map((reference) => reference.identifier.name));
        return !imports.imports.has(name) && unbound.has(name) && (Boolean(mapping.exports[name]?.members) || renamedConstants.has(name));
      };
      // The value key of `"neutral"`, `SPINNER_COLOR.neutral` or `SPINNER_COLOR['neutral']`, when it is a constant.
      const valueKey = (value, constant) => {
        if (isStaticString(value)) {
          return stringOf(value);
        }
        if (value?.type !== 'MemberExpression' || value.object.type !== 'Identifier') {
          return undefined;
        }
        const { name } = value.object;
        if (!renamedExports.has(name) && !(constant && imports.imports.get(name) === constant) && !unboundConstant(name)) {
          return undefined;
        }
        if (value.computed) {
          return stringOf(value.property);
        }
        return value.property.name;
      };
      const attributeValue = (attribute) => (attribute.value?.type === 'JSXExpressionContainer' ? attribute.value.expression : attribute.value);

      const reportTyped = (node, typeAnnotation) => {
        // Literals at a value position of a renamed type: one fix when every type agrees, none when they disagree.
        const byLiteral = new Map();
        for (const { literal, name } of typedPositions(node, typeAnnotation)) {
          const rule = renamedExports.get(name);
          if (!rule?.members) {
            continue;
          }
          if (!byLiteral.has(literal)) {
            byLiteral.set(literal, []);
          }
          byLiteral.get(literal).push({ member: memberRule(rule, stringOf(literal)), name });
        }
        for (const [literal, entries] of byLiteral) {
          const targets = new Set(entries.map(({ member }) => (member ? member.to : stringOf(literal))));
          const from = `'${stringOf(literal)}' (${entries.map(({ name }) => name).join(', ')})`;
          if (targets.size > 1) {
            context.report({ data: { detail: `${from}: these types disagree on its v20 value, pick it by hand` }, messageId: 'ambiguousType', node: literal });
            continue;
          }
          const [to] = targets;
          if (to === null) {
            context.report({ data: { from, hint: entries[0].member.hint ? `: ${entries[0].member.hint}` : '' }, messageId: 'noEquivalent', node: literal });
          } else if (to !== stringOf(literal)) {
            context.report({ data: { from, to: `'${to}'` }, fix: (fixer) => fixer.replaceText(literal, quote(literal, to)), messageId: 'renamedExport', node: literal });
          }
        }
        // Keys of an object typed with a type whose members are keys (`ToastController`).
        const keyed = keyedObject(node, typeAnnotation);
        const rule = keyed && renamedExports.get(keyed.name);
        if (!rule?.memberKeys) {
          return;
        }
        for (const property of keyed.object.properties) {
          const key = property.type === 'Property' ? keyName(property) : undefined;
          const member = key === undefined ? undefined : memberRule(rule, key);
          if (member?.to) {
            context.report({
              data: { from: `${key} (${keyed.name})`, to: member.to },
              fix: (fixer) => (property.shorthand
                ? fixer.replaceText(property, `${member.to}: ${key}`)
                : fixer.replaceText(property.key, isString(property.key) ? quote(property.key, member.to) : member.to)),
              messageId: 'renamedExport',
              node: property.key,
            });
          }
        }
      };

      // Components of the project whose props are typed with ODS types (the modules file): `color?: ButtonColor` keeps
      // its name but its type is renamed and its values change, so the values passed to it and its defaults follow;
      // `actionButton?: Pick<ButtonProp, 'variant'>` takes an object of ODS props, whose keys follow. As the codemod.
      const ownTyped = sources.ownTyped ?? {};
      const typedOf = (name) => (components.has(name) ? undefined : imports.typed.get(name) ?? ownTyped[name]);
      // The ODS component whose props type an object literal is typed with, through Partial / Required / Readonly / Pick / Omit / PropsWithChildren.
      const objectPropsOf = (type) => {
        if (type?.type !== 'TSTypeReference') {
          return undefined;
        }
        const name = referenceName(type)?.replace(/^React\./, '');
        if (/^(Partial|Required|Readonly|Pick|Omit|PropsWithChildren)$/.test(name ?? '')) {
          return objectPropsOf(typeArguments(type)[0]);
        }
        if (typeArguments(type).length === 0 && propsTypes.has(referenceName(type))) {
          return propsTypes.get(referenceName(type));
        }
        const [argument] = typeArguments(type);
        return /^(React\.)?ComponentProps(WithRef|WithoutRef)?$/.test(referenceName(type) ?? '') && argument?.type === 'TSTypeQuery' && argument.exprName.type === 'Identifier' ? components.get(argument.exprName.name) : undefined;
      };
      // Objects typed with ODS props: their keys are handled by reportTypedValue, not as a key that feeds a prop.
      const typedObjectNodes = [];
      const reportTypedValue = (value, descriptor, label, anchor) => {
        const node = unwrapConst(value);
        if (!node || !descriptor) {
          return;
        }
        if (descriptor.type) {
          const rule = typeRule(mapping, descriptor.type);
          for (const literal of rule ? literalLeaves(node).map(unwrapConst) : []) {
            const member = memberRule(rule, stringOf(literal));
            const from = `'${stringOf(literal)}' (${descriptor.type})`;
            if (member?.to === null) {
              context.report({ data: { from, hint: member.hint ? `: ${member.hint}` : '' }, messageId: 'noEquivalent', node: anchor && anchor.value === literal ? anchor : literal });
            } else if (member && member.to !== stringOf(literal)) {
              context.report({ data: { from, to: `'${member.to}'` }, fix: (fixer) => fixer.replaceText(literal, quote(literal, member.to)), messageId: 'renamedExport', node: literal });
            }
          }
          return;
        }
        const spec = mapping.components[descriptor.component];
        if (!spec || node.type !== 'ObjectExpression') {
          return;
        }
        const props = spec.props ?? {};
        const keys = new Set(node.properties.map((property) => (property.type === 'Property' ? keyName(property) : undefined)));
        // `{ position: 'bottom' }` typed PopoverProp → `{ overlayConfig: { position: 'bottom' } }`, as in the codemod.
        const moved = node.properties.filter((property) => property.type === 'Property' && !property.shorthand && props[keyName(property)]?.moveTo);
        const movable = descriptor.moves && moved.length > 0 && !node.properties.some((property) => property.type !== 'Property' || property.shorthand)
          && !keys.has(props[keyName(moved[0])].moveTo.prop) && new Set(moved.map((property) => props[keyName(property)].moveTo.prop)).size === 1;
        if (movable) {
          const target = props[keyName(moved[0])].moveTo.prop;
          const entries = moved.filter((property) => {
            const { moveTo } = props[keyName(property)];
            const value = unwrapConst(property.value);
            return !(Object.hasOwn(moveTo, 'default') && value.type === 'Literal' && value.value === moveTo.default);
          }).map((property) => `${props[keyName(property)].moveTo.key}: ${sourceCode.getText(property.value)}`);
          context.report({
            data: { component: descriptor.component, from: moved.map((property) => keyName(property)).join(', '), to: target },
            fix: (fixer) => {
              if (entries.length === 0 && moved.length === node.properties.length) {
                return fixer.replaceText(node, '{}');
              }
              const fixes = moved.slice(entries.length === 0 ? 0 : 1).map((property) => removeListItem(fixer, property));
              if (entries.length > 0) {
                fixes.push(fixer.replaceText(moved[0], `${target}: { ${entries.join(', ')} }`));
              }
              return fixes;
            },
            messageId: 'movedProp',
            node: moved[0],
          });
        }
        for (const property of node.properties) {
          const key = property.type === 'Property' ? keyName(property) : undefined;
          const rule = key === undefined ? undefined : props[key];
          if (!rule || (rule.moveTo && movable)) {
            continue;
          }
          // A constant with no v20 value (`BUTTON_COLOR.information`) is reported where it is read: the key stays.
          const constant = !property.shorthand && !isStaticString(unwrapConst(property.value)) ? valueKey(unwrapConst(property.value), rule.constant) : undefined;
          if (rule.renameTo && constant !== undefined && rule.values && Object.hasOwn(rule.values, constant) && rule.values[constant] === null) {
            continue;
          }
          if (rule.remove || rule.moveTo || (rule.renameTo && keys.has(rule.renameTo))) {
            context.report({ data: { detail: `${label}: ${key} of ${descriptor.component} is ${rule.renameTo ? `renamed ${rule.renameTo}, which is also set` : rule.moveTo ? `now ${rule.moveTo.prop}.${rule.moveTo.key}` : 'removed'} in ODS v20${hintOf(rule)}` }, messageId: 'typedObject', node: property });
            continue;
          }
          if (!rule.renameTo) {
            continue;
          }
          const literal = property.shorthand ? undefined : stringOf(unwrapConst(property.value));
          if (literal !== undefined && rule.values && Object.hasOwn(rule.values, literal) && rule.values[literal] === null) {
            context.report({ data: { from: `${label} ${key}: '${literal}'`, hint: hintOf(rule) }, messageId: 'noEquivalent', node: property });
            continue;
          }
          context.report({
            data: { component: label, from: key, to: rule.renameTo },
            fix: (fixer) => {
              if (property.shorthand) {
                return fixer.replaceText(property, `${rule.renameTo}: ${key}`);
              }
              const fixes = [fixer.replaceText(property.key, isString(property.key) ? quote(property.key, rule.renameTo) : rule.renameTo)];
              const value = unwrapConst(property.value);
              if (literal !== undefined && rule.values?.[literal]) {
                fixes.push(fixer.replaceText(value, quote(value, rule.values[literal])));
              }
              return fixes;
            },
            messageId: 'renamedProp',
            node: property.key,
          });
        }
      };
      // The function of a component declared as `function Name`, or `const Name = forwardRef(memo((…) => …))`.
      const componentFunction = (node) => {
        let current = node;
        for (let depth = 0; current && depth < 5; depth++) {
          if (['ArrowFunctionExpression', 'FunctionDeclaration', 'FunctionExpression'].includes(current.type)) {
            return current;
          }
          current = ['TSAsExpression', 'TSSatisfiesExpression'].includes(current.type) ? current.expression
            : current.type === 'CallExpression' ? current.arguments[0] : null;
        }
        return null;
      };
      const reportTypedDefaults = (name, fn) => {
        const typed = ownTyped[name];
        const param = typed && fn?.params[0];
        if (param?.type !== 'ObjectPattern') {
          return;
        }
        for (const property of param.properties) {
          const prop = property.type === 'Property' ? keyName(property) : undefined;
          if (prop !== undefined && typed[prop] && property.value.type === 'AssignmentPattern') {
            reportTypedValue(property.value.right, typed[prop], `${name} ${prop}`, null);
          }
        }
      };
      // The object of a pair is the value of a typed prop of a component: its keys are handled above.
      const inTypedObject = (pair) => {
        let up = pair.parent?.parent;
        while (up && ['TSAsExpression', 'TSSatisfiesExpression'].includes(up.type)) {
          up = up.parent;
        }
        if (up?.type !== 'JSXExpressionContainer' || up.parent?.type !== 'JSXAttribute') {
          return false;
        }
        const element = up.parent.parent;
        const typed = element.name?.type === 'JSXIdentifier' ? typedOf(element.name.name) : undefined;
        return Boolean(typed?.[up.parent.name.name]?.component);
      };

      // Test mocks of the package (vi.mock / jest.mock) list the exports by name: they follow the rename, like in the codemod.
      const reportMock = (node) => {
        const [moduleArgument, factory] = node.arguments;
        const moduleName = moduleArgument?.type === 'ImportExpression' ? moduleArgument.source.value : moduleArgument?.value;
        if (!factory || !isSource(moduleName)) {
          return;
        }
        walk(factory, sourceCode.visitorKeys, (property) => {
          if (property.type !== 'Property' || property.parent.type !== 'ObjectExpression') {
            return;
          }
          const name = keyName(property);
          const rule = name && mapping.exports[name];
          if (!rule || rule.removed) {
            return;
          }
          if (property.shorthand) {
            if (rule.renameTo && !imports.imports.has(name)) {
              context.report({ data: { from: `mock ${name}`, to: rule.renameTo }, fix: (fixer) => fixer.replaceText(property, `${rule.renameTo}: ${name}`), messageId: 'renamedExport', node: property });
            }
            return;
          }
          const fixes = [];
          if (rule.renameTo) {
            fixes.push((fixer) => fixer.replaceText(property.key, isString(property.key) ? quote(property.key, rule.renameTo) : rule.renameTo));
          }
          let { value } = property;
          if (value.type === 'CallExpression' && sourceCode.getText(value.callee) === 'Object.assign') {
            value = value.arguments.findLast((argument) => argument.type === 'ObjectExpression');
          }
          for (const member of value?.type === 'ObjectExpression' ? value.properties : []) {
            const key = member.type === 'Property' && !member.shorthand ? keyName(member) : undefined;
            const to = key === undefined ? undefined : memberRule(rule, key)?.to;
            if (!to) {
              continue;
            }
            fixes.push((fixer) => fixer.replaceText(member.key, isString(member.key) ? quote(member.key, to) : to));
            if (stringOf(member.value) === key) {
              fixes.push((fixer) => fixer.replaceText(member.value, quote(member.value, to)));
            }
          }
          if (fixes.length > 0) {
            context.report({
              data: { from: `mock ${name}`, to: rule.renameTo ?? `${name} with its v20 members` },
              fix: (fixer) => fixes.map((fix) => fix(fixer)),
              messageId: 'renamedExport',
              node: property.key,
            });
          }
        });
      };

      // `{ variant: BUTTON_VARIANT.ghost }`: the key feeds a prop renamed in v20, which nothing checks through a
      // spread. Reported (never fixed: a wrapper may keep the name) on the v19 constant, and on the v20 one
      // while the marker of the codemod is still there.
      const feedsOf = propConstants(mapping);
      const mocks = [];
      const reportFeeds = (node, object, property) => {
        const imported = node.type === 'MemberExpression' && !node.computed && object.type === 'Identifier' ? imports.imports.get(object.name) : undefined;
        const feeds = imported && feedsOf.get(imported);
        const pair = feeds && !within(mocks, node) ? valueProperty(node) : null;
        if (!pair || keyName(pair) !== feeds.prop || inTypedObject(pair) || typedObjectNodes.includes(pair.parent)) {
          return;
        }
        const key = property.name;
        const v19 = imported === feeds.constant && memberRule(mapping.exports[feeds.constant], key)?.to !== null;
        const marked = sourceCode.getCommentsBefore(pair).some((comment) => comment.value.startsWith(' TODO(ods-v20): ') && [FEEDS_SPREAD, 'Spread on an ODS', ' feeds <'].some((words) => comment.value.includes(words)));
        if (v19 || (imported === feeds.v20 && marked)) {
          context.report({ data: { detail: feedsMessage(feeds, v19 ? key : '…', v19 ? (memberRule(mapping.exports[feeds.constant], key)?.to ?? key) : key) }, messageId: 'feedsProp', node: pair });
        }
      };

      // `toast(msg, opts)` with `const opts = { color }`, or an object typed ToastOption: the key is reported, never removed, as in the codemod.
      const reportedOptionKeys = new Set();
      const reportOptionKeys = (object, local, rule) => {
        for (const [option, optionRule] of Object.entries(rule.callOptions)) {
          for (const property of object.properties.filter((item) => item.type === 'Property' && keyName(item) === option && !reportedOptionKeys.has(item))) {
            reportedOptionKeys.add(property);
            flagged.push(property);
            context.report({ data: { detail: `${option}: the ${option} option of ${local}() is removed in v20${hintOf(optionRule)}, then delete this key (a helper such as ${local}.neutral() already ignored it in v19)` }, messageId: 'toastOption', node: property });
          }
        }
      };
      const toastOptionTypes = () => [...imports.imports].filter(([, imported]) => imported === 'ToastOption').map(([local]) => local);
      const toastExport = () => [...renamedExports].find(([, rule]) => rule.callOptions);
      // `toast(msg, { color })`: the option becomes the helper, `toast.success(msg, { color })` drops it.
      const reportCallOptions = (node) => {
        const { callee } = node;
        const object = callee.type === 'MemberExpression' && !callee.computed ? callee.object : callee;
        const rule = object.type === 'Identifier' && renamedExports.get(object.name);
        const argument = node.arguments[1];
        if (rule?.callOptions && argument?.type === 'Identifier') {
          const variable = sourceCode.getScope(node).references.find((reference) => reference.identifier === argument)?.resolved;
          const init = variable?.defs[0]?.node.type === 'VariableDeclarator' ? unwrapConst(variable.defs[0].node.init) : null;
          if (init?.type === 'ObjectExpression') {
            reportOptionKeys(init, object.name, rule);
          }
          return;
        }
        if (!rule?.callOptions || argument?.type !== 'ObjectExpression') {
          return;
        }
        const helperCall = object !== callee;
        for (const [option, optionRule] of Object.entries(rule.callOptions)) {
          const property = argument.properties.find((item) => item.type === 'Property' && keyName(item) === option);
          if (!property) {
            continue;
          }
          const removeOption = (fixer) => (argument.properties.length === 1
            ? fixer.removeRange([sourceCode.getTokenBefore(argument).range[0], argument.range[1]])
            : removeListItem(fixer, property));
          if (helperCall) {
            dropped.push(property);
            context.report({ data: { detail: `${object.name}.${callee.property.name}(…, { ${option} }): the helper already sets it, the ${option} option is removed in ODS v20` }, fix: removeOption, messageId: 'toastOption', node: property });
            continue;
          }
          const key = valueKey(property.value, optionRule.constant ?? 'TOAST_COLOR');
          const values = optionRule.values ?? {};
          const helper = key === undefined
            ? undefined
            : Object.hasOwn(values, key) ? values[key] : (memberRule(mapping.exports[optionRule.constant ?? 'TOAST_COLOR'], key) ?? { to: key }).to;
          if (!helper) {
            context.report({ data: { detail: `${object.name}(…, { ${option} }): the ${option} option is removed in v20${hintOf(optionRule)}` }, messageId: 'toastOption', node: property });
            continue;
          }
          // The pair goes: a constant it alone read is no longer imported.
          dropped.push(property);
          context.report({
            data: { detail: `${object.name}(…, { ${option} }): the ${option} option is removed in ODS v20, use ${object.name}.${helper}()` },
            fix: (fixer) => [fixer.insertTextAfter(callee, `.${helper}`), removeOption(fixer)],
            messageId: 'toastOption',
            node: property,
          });
        }
      };

      // `<Pagination />` without children: ODS v20 renders only the parts it is given.
      const childlessFix = (node, component, rule, byName) => {
        const element = node.parent;
        const consumed = new Set();
        const lines = [];
        const emitted = [];
        const missing = [];
        const textOf = (attribute) => (attribute.value ? sourceCode.getText(attributeValue(attribute)) : 'true');
        for (const child of rule.children) {
          const local = [...imports.imports].find(([, imported]) => imported === child.element)?.[0] ?? child.element;
          const attributes = [];
          for (const name of child.moveProps ?? []) {
            if (byName.has(name)) {
              attributes.push(sourceCode.getText(byName.get(name)));
              consumed.add(byName.get(name));
            }
          }
          const label = child.labelFrom && byName.get(child.labelFrom.prop);
          if (label) {
            consumed.add(label);
            const argument = child.labelFrom.arg.replace(/\$(\w+)/g, (placeholder, name) => {
              if (!byName.has(name)) {
                missing.push(name);
                return placeholder;
              }
              return textOf(byName.get(name));
            });
            attributes.push(`label={ (${textOf(label)})(${argument}) }`);
          }
          const tag = `<${local}${attributes.map((attribute) => ` ${attribute}`).join('')} />`;
          const when = child.when && byName.get(child.when);
          const value = when && attributeValue(when);
          if (when) {
            consumed.add(when);
          }
          if (!child.when || (when && (!value || (value.type === 'Literal' && value.value === true)))) {
            lines.push(tag);
          } else if (when && !(value.type === 'Literal' && value.value === false)) {
            lines.push(`{ ${sourceCode.getText(value)} && ${tag} }`);
          } else {
            continue;
          }
          emitted.push(child.element);
        }
        if (missing.length > 0) {
          return { consumed, missing };
        }
        const indent = indentOf(node);
        const body = `${eol}${lines.map((line) => `${indent}  ${line}`).join(eol)}${eol}${indent}`;
        const childNames = emitted.filter((name) => ![...imports.imports.values()].includes(name));
        const importNode = imports.importNodes.find((item) => item.specifiers.some((spec) => spec.local.name === node.name.name));
        // A part the module imported from does not export (a barrel that names only some ODS components)
        // comes from the package: a value import of it, or a line of its own after the last import.
        const target = importNode && sources.targetOf(importNode.source.value);
        const exported = (name) => target === true || odsNameIn(target, name) === name;
        const ownNames = childNames.filter(exported);
        const packageNames = childNames.filter((name) => !exported(name));
        const packageImport = imports.importNodes.find((item) => item.source.value === mapping.package && item.importKind !== 'type' && item.specifiers.some((spec) => spec.type === 'ImportSpecifier'));
        const lastImport = sourceCode.ast.body.filter((statement) => statement.type === 'ImportDeclaration').at(-1);
        return {
          consumed,
          fix: (fixer) => {
            const fixes = [...consumed].map((attribute) => removeAttribute(fixer, attribute));
            if (node.selfClosing) {
              const slash = sourceCode.getTokenBefore(sourceCode.getLastToken(node));
              fixes.push(fixer.replaceTextRange([sourceCode.getTokenBefore(slash).range[1], node.range[1]], `>${body}</${sourceCode.getText(node.name)}>`));
            } else {
              fixes.push(fixer.replaceTextRange([node.range[1], element.closingElement.range[0]], body));
            }
            const named = (statement) => statement?.specifiers.filter((spec) => spec.type === 'ImportSpecifier') ?? [];
            const append = (statement, names) => {
              const items = named(statement);
              if (names.length > 0 && items.length > 0) {
                fixes.push(appendToList(fixer, items, items.at(-1), sourceCode.getTokenBefore(items[0]), names));
              }
            };
            if (packageImport && packageImport === importNode) {
              append(importNode, childNames);
            } else {
              append(importNode, ownNames);
              if (packageImport) {
                append(packageImport, packageNames);
              } else if (packageNames.length > 0 && lastImport) {
                fixes.push(fixer.insertTextAfter(lastImport, `${eol}import { ${packageNames.join(', ')} } from '${mapping.package}';`));
              }
            }
            return fixes;
          },
        };
      };

      // `variant={ c ? TABLE_VARIANT.striped : TABLE_VARIANT.default }` → `striped={ c }`: a ternary whose leaves all have a replacement.
      const foldTernary = (expression, rule, names) => {
        if (expression?.type !== 'ConditionalExpression') {
          return null;
        }
        const leaves = [];
        const collect = (node) => (node.type === 'ConditionalExpression' ? [node.consequent, node.alternate].forEach(collect) : leaves.push(node));
        collect(expression);
        const replacements = leaves.map((leaf) => {
          const key = valueKey(leaf);
          return key === undefined ? undefined : rule.values?.[key];
        });
        if (replacements.some((replacement) => !replacement)) {
          return null;
        }
        const set = new Set(replacements.flatMap((replacement) => Object.keys(replacement)));
        if (set.size > 1) {
          return null;
        }
        const [name] = set;
        if (!name || names.has(name)) {
          return { text: null };
        }
        const boolean = replacements.some((replacement) => replacement[name] === true);
        const valueText = (value) => {
          if (value === undefined) {
            return boolean ? 'false' : 'undefined';
          }
          if (typeof value === 'string') {
            return `'${value.replace(/['\\]/g, '\\$&')}'`;
          }
          return typeof value?.expr === 'string' ? value.expr : String(value);
        };
        const texts = replacements.map((replacement) => valueText(replacement[name]));
        let text;
        if (leaves.length === 2 && texts.join() === 'true,false') {
          text = sourceCode.getText(expression.test);
        } else if (leaves.length === 2 && texts.join() === 'false,true') {
          const test = sourceCode.getText(expression.test);
          text = expression.test.type === 'Identifier' || expression.test.type === 'MemberExpression' ? `!${test}` : `!(${test})`;
        } else {
          const start = expression.range[0];
          text = sourceCode.getText(expression);
          leaves.map((leaf, index) => ({ leaf, text: texts[index] })).sort((a, b) => b.leaf.range[0] - a.leaf.range[0]).forEach((item) => {
            text = text.slice(0, item.leaf.range[0] - start) + item.text + text.slice(item.leaf.range[1] - start);
          });
        }
        return { text: attributeText(name, { expr: text }) };
      };

      // Moved props (`<Popover position="top">` → `overlayConfig={{ position: 'top' }}`), one fix per target prop.
      const reportMoved = (component, moved, byName) => {
        const groups = new Map();
        for (const item of moved) {
          const target = item.rule.moveTo.prop;
          groups.set(target, [...(groups.get(target) ?? []), item]);
        }
        for (const [target, items] of groups) {
          const entries = [];
          const deleted = [];
          for (const { attribute, rule } of items) {
            const value = attributeValue(attribute);
            const literal = !value ? true : value.type === 'Literal' ? value.value : undefined;
            if (rule.moveTo.default !== undefined && literal === rule.moveTo.default) {
              deleted.push(attribute);
              continue;
            }
            const text = !value ? 'true' : isString(value) && attribute.value.type === 'Literal' ? `'${value.value.replace(/['\\]/g, '\\$&')}'` : sourceCode.getText(value);
            entries.push({ attribute, key: rule.moveTo.key, text });
          }
          const targetAttribute = byName.get(target);
          const targetValue = targetAttribute && attributeValue(targetAttribute);
          const fix = (fixer) => {
            const pairs = (list) => list.map(({ key, text }) => `${key}: ${text}`);
            if (!targetAttribute) {
              const [first, ...rest] = entries;
              return [
                ...(first ? [fixer.replaceText(first.attribute, `${target}={{ ${pairs(entries).join(', ')} }}`)] : []),
                ...[...rest.map((entry) => entry.attribute), ...deleted].map((attribute) => removeAttribute(fixer, attribute)),
              ];
            }
            const fixes = items.map(({ attribute }) => removeAttribute(fixer, attribute));
            if (targetValue?.type === 'ObjectExpression') {
              const present = new Set(targetValue.properties.map((property) => (property.type === 'Property' ? keyName(property) : undefined)));
              const added = entries.filter((entry) => !present.has(entry.key));
              const spread = targetValue.properties.find((property) => property.type === 'SpreadElement');
              if (added.length > 0 && spread) {
                // Before the spread: what it carries still wins, as `overlayConfig` did in v19.
                const separator = targetValue.loc.start.line < targetValue.loc.end.line ? `,${eol}${indentOf(spread)}` : ', ';
                fixes.push(fixer.insertTextBefore(spread, pairs(added).map((pair) => `${pair}${separator}`).join('')));
              } else if (added.length > 0) {
                fixes.push(appendToList(fixer, targetValue.properties, targetValue.properties.at(-1), sourceCode.getFirstToken(targetValue), pairs(added)));
              }
            } else if (targetValue && entries.length > 0) {
              const text = sourceCode.getText(targetValue);
              fixes.push(fixer.replaceText(targetAttribute.value, `{{ ${pairs(entries).join(', ')}, ...${isSimple(targetValue) ? text : `(${text})`} }}`));
            }
            return fixes;
          };
          for (const { attribute, rule } of items) {
            context.report({ data: { component, from: attribute.name.name, to: `${target}.${rule.moveTo.key}` }, fix, messageId: 'movedProp', node: attribute });
          }
        }
      };

      // `v19Look`: the attributes that keep the v19 look of one value, when the rule options pick it. An
      // attribute of that name already on the element wins; an expression to merge into it is a conflict.
      const v19LookAttributes = (rule, key, byName) => {
        const result = { added: [], conflicts: [] };
        const lookKey = v19LookKey(rule, key);
        if (lookKey === undefined || !isV19Look(config, rule.v19Look.choice)) {
          return result;
        }
        for (const [name, value] of Object.entries(rule.v19Look.values[lookKey])) {
          const text = attributeText(name, value);
          const existing = byName.get(name);
          if (!existing) {
            result.added.push(text);
          } else if (typeof value === 'object' && sourceCode.getText(existing) !== text) {
            result.conflicts.push(`keep the v19 look with ${text}, merged into your ${name}`);
          }
        }
        return result;
      };

      return {
        ImportDeclaration(node) {
          if (!imports.read(node)) {
            return;
          }
          const entry = sources.packages.map((name) => node.source.value.startsWith(`${name}/`) && node.source.value.slice(name.length + 1)).find(Boolean);
          if (entry && REMOVED_ENTRIES[entry]) {
            context.report({ data: { detail: `${node.source.value}: ${REMOVED_ENTRIES[entry]}` }, messageId: 'removedImport', node });
          }
          const imported = new Set(node.specifiers.filter((spec) => spec.type === 'ImportSpecifier').map((spec) => spec.imported.name));

          for (const spec of node.specifiers) {
            if (spec.type !== 'ImportSpecifier') {
              continue;
            }
            const name = imports.odsNames.get(spec);
            if (!name) {
              continue;
            }
            specifiers.push({ node, spec });
            const rule = mapping.exports[name];
            if (!rule) {
              continue;
            }
            if (rule.removed) {
              removedSpecifiers.push({ node, rule, spec });
            }
            // Exported under another name by a module of the project: that module keeps its name.
            if (!rule.renameTo || (spec.imported.name ?? spec.imported.value) !== name) {
              continue;
            }
            // Nothing reads it: it goes at the end of the file (unusedRemovedExport), it is not renamed.
            if ((sourceCode.getDeclaredVariables(spec)[0]?.references ?? []).length === 0) {
              continue;
            }

            const aliased = spec.local.name !== name;
            const references = sourceCode.getDeclaredVariables(spec)[0]?.references ?? [];
            // `BUTTON_COLOR.information` has no v20 member: it keeps its v19 name, as in the codemod, rather than a v20 name that does not exist.
            const kept = aliased ? [] : references.filter((reference) => orphanRead(reference.identifier, rule));
            if (kept.length > 0) {
              keptV19.push({ name: spec.local.name, node });
            }
            if (kept.length === references.length || (kept.length > 0 && imported.has(rule.renameTo) && references.length === kept.length)) {
              continue;
            }
            context.report({
              data: { from: name, to: rule.renameTo },
              fix(fixer) {
                if (aliased) {
                  return fixer.replaceText(spec.imported, rule.renameTo);
                }
                // The new name may already be imported (a file migrated by hand halfway): keep a single specifier.
                const fixes = kept.length > 0
                  ? (imported.has(rule.renameTo) ? [] : [fixer.insertTextAfter(spec, `, ${sourceCode.text.slice(spec.range[0], spec.imported.range[0])}${rule.renameTo}`)])
                  : [imported.has(rule.renameTo) ? removeListItem(fixer, spec) : fixer.replaceText(spec.imported, rule.renameTo)];
                for (const reference of references.filter((item) => !kept.includes(item))) {
                  const { identifier } = reference;
                  const shorthand = identifier.parent.type === 'Property' && identifier.parent.shorthand;
                  fixes.push(fixer.replaceText(identifier, shorthand ? `${name}: ${rule.renameTo}` : rule.renameTo));
                }
                return fixes;
              },
              messageId: 'renamedExport',
              node: spec,
            });
          }
        },

        // Re-exports of the package (a UI kit): `export { BADGE_COLOR } from '@ovhcloud/ods-react'`.
        ExportNamedDeclaration(node) {
          const target = node.source && sources.targetOf(node.source.value);
          if (!target) {
            return;
          }
          for (const spec of node.specifiers) {
            const name = spec.local.name ?? spec.local.value;
            if (odsNameIn(target, name) !== name) {
              continue;
            }
            const rule = mapping.exports[name];
            if (rule?.removed) {
              context.report({ data: { from: name, hint: hintOf(rule) }, messageId: 'noEquivalent', node: spec });
            } else if (rule?.renameTo) {
              // `export { BADGE_COLOR as BADGE_COLOR }`: the exported name follows.
              const sameAlias = spec.exported && spec.exported.range[0] !== spec.local.range[0] && (spec.exported.name ?? spec.exported.value) === name;
              context.report({ data: { from: name, to: rule.renameTo }, fix: (fixer) => (sameAlias ? [fixer.replaceText(spec.local, rule.renameTo), fixer.replaceText(spec.exported, rule.renameTo)] : fixer.replaceText(spec.local, rule.renameTo)), messageId: 'renamedExport', node: spec });
            }
          }
        },

        // `require('@ovhcloud/ods-react')`, `await import(…)`: not followed, reported as the codemod marks it.
        'CallExpression[callee.name="require"], ImportExpression'(node) {
          const source = node.type === 'ImportExpression' ? node.source : node.arguments[0];
          const specifier = isString(source) ? source.value : undefined;
          const parent = node.parent;
          const mock = parent?.type === 'CallExpression' && parent.arguments[0] === node && parent.callee.type === 'MemberExpression' && ['jest', 'vi'].includes(parent.callee.object.name) && /^(do)?[mM]ock$/.test(parent.callee.property.name);
          if (specifier === undefined || mock || !(sources.isPackage(specifier))) {
            return;
          }
          let holder = parent;
          while (holder && holder.type === 'AwaitExpression') {
            holder = holder.parent;
          }
          const pattern = holder?.type === 'VariableDeclarator' ? holder.id : null;
          const form = node.type === 'ImportExpression' ? `import('${specifier}')` : `require('${specifier}')`;
          const names = pattern?.type === 'ObjectPattern' ? pattern.properties.filter((property) => property.type === 'Property').map((property) => keyName(property)).filter(Boolean) : null;
          const changed = names ? names.filter((name) => mapping.exports[name] || (mapping.components[name]?.props && Object.keys(mapping.components[name].props).length)) : [];
          if (names && changed.length === 0) {
            return;
          }
          context.report({
            data: {
              detail: names
                ? `${form}: ods-migrate does not follow names read this way: change ${changed.join(', ')} as the v20 migration guide says, or switch to import { … } from '${specifier}' and run ods-migrate again`
                : `${form}: ods-migrate does not follow names read from this module object: switch to import { … } from '${specifier}' and run ods-migrate again, or change the names it reads as the v20 migration guide says`,
            },
            messageId: 'removedImport',
            node,
          });
        },

        CallExpression(node) {
          const { callee } = node;
          if (callee.type === 'MemberExpression' && callee.object.type === 'Identifier' && ['jest', 'vi'].includes(callee.object.name)
            && callee.property.type === 'Identifier' && /^(do)?[mM]ock$/.test(callee.property.name)) {
            const [moduleArgument, factory] = node.arguments;
            if (factory && isSource(moduleArgument?.type === 'ImportExpression' ? moduleArgument.source.value : moduleArgument?.value)) mocks.push(factory);
            reportMock(node);
            return;
          }
          reportCallOptions(node);
        },

        FunctionDeclaration(node) {
          if (node.id) {
            reportTypedDefaults(node.id.name, node);
          }
        },

        // `({ variant = 'default', ...p }: ButtonProp)`: the key follows the prop, the local keeps its name, as in the codemod.
        'ObjectPattern'(node) {
          const fn = node.parent;
          if (!['ArrowFunctionExpression', 'FunctionDeclaration', 'FunctionExpression'].includes(fn?.type) || !fn.params.includes(node)) {
            return;
          }
          const odsPropsOf = (type) => {
            if (type?.type === 'TSTypeReference' && typeArguments(type).length === 0) {
              return propsTypes.get(referenceName(type));
            }
            if (type?.type === 'TSIntersectionType') {
              const found = type.types.map(odsPropsOf).filter(Boolean);
              return found.length === 1 ? found[0] : undefined;
            }
            if (type?.type === 'TSTypeReference' && /^(React\.)?PropsWithChildren$/.test(sourceCode.getText(type.typeName))) {
              return odsPropsOf(typeArguments(type)[0]);
            }
            return undefined;
          };
          const component = odsPropsOf(node.typeAnnotation?.typeAnnotation);
          const props = component && mapping.components[component].props;
          if (!props) {
            return;
          }
          const keys = new Set(node.properties.map((property) => (property.type === 'Property' ? keyName(property) : undefined)));
          for (const property of node.properties) {
            const prop = property.type === 'Property' ? keyName(property) : undefined;
            const rule = prop && props[prop];
            if (!rule?.renameTo || property.value.type !== 'AssignmentPattern' || keys.has(rule.renameTo)) {
              continue;
            }
            const local = sourceCode.getText(property.value.left);
            const fallback = property.value.right;
            const literal = stringOf(fallback);
            const values = rule.values ?? {};
            const from = `${component} ${prop} = ${sourceCode.getText(fallback)}`;
            if (literal !== undefined && Object.hasOwn(values, literal) && values[literal] === null) {
              context.report({ data: { from, hint: hintOf(rule) }, messageId: 'noEquivalent', node: property });
              continue;
            }
            const to = literal === undefined ? undefined : values[literal] ?? literal;
            const key = `${rule.renameTo}: ${local}`;
            const keepDefault = Boolean(mapping.components[component].whenAbsent) && isV19Look(config, mapping.components[component].whenAbsent.choice);
            const text = to !== undefined && to === rule.dropDefault && !keepDefault ? key
              : to !== undefined ? `${key} = ${quote(fallback, to)}` : `${key} = ${sourceCode.getText(fallback)}`;
            context.report({ data: { component, from: prop, to: rule.renameTo }, fix: (fixer) => fixer.replaceText(property, text), messageId: 'renamedProp', node: property });
          }
        },

        'VariableDeclarator, TSAsExpression, TSSatisfiesExpression, TSTypeAssertion'(node) {
          const [value, type] = node.type === 'VariableDeclarator' ? [node.init, node.id.typeAnnotation?.typeAnnotation] : [node.expression, node.typeAnnotation];
          if (node.type === 'VariableDeclarator') {
            reportTyped(node.init, node.id.typeAnnotation);
            if (node.id.type === 'Identifier' && ownTyped[node.id.name]) {
              reportTypedDefaults(node.id.name, componentFunction(node.init));
            }
          } else {
            reportTyped(node.expression, node.typeAnnotation);
          }
          const typeName = type?.type === 'TSTypeReference' ? (/^(Partial|Readonly)$/.test(referenceName(type) ?? '') ? referenceName(typeArguments(type)[0]) : referenceName(type)) : undefined;
          if (typeName && toastOptionTypes().includes(typeName) && unwrapConst(value)?.type === 'ObjectExpression' && toastExport()) {
            reportOptionKeys(unwrapConst(value), toastExport()[0], toastExport()[1]);
          }
          // An object literal typed with ODS props (`Partial<BadgeProp>`, `satisfies ButtonProp`, `as PopoverProp`): its keys follow the props.
          const component = objectPropsOf(type);
          const object = unwrapConst(value);
          if (component && object?.type === 'ObjectExpression') {
            const how = node.type === 'VariableDeclarator' ? 'an object typed' : node.type === 'TSSatisfiesExpression' ? 'an object satisfying' : 'an object cast to';
            const text = sourceCode.getText(type);
            typedObjectNodes.push(object);
            reportTypedValue(object, { component, moves: !/\bPick</.test(text) }, `${how} ${text}`, null);
          }
        },

        'MemberExpression, TSQualifiedName'(node) {
          const object = node.type === 'MemberExpression' ? node.object : node.left;
          const property = node.type === 'MemberExpression' ? node.property : node.right;
          reportFeeds(node, object, property);
          const rule = object.type === 'Identifier' && renamedExports.get(object.name);
          // A removed export is reported where it is still read, at the end of the file.
          if (!rule?.members || rule.removed || within(dropped, node)) {
            return;
          }
          const key = stringOf(property) ?? (!node.computed && property.name);
          const member = memberRule(rule, key);
          if (member?.to === null) {
            context.report({ data: { from: `${object.name}.${key}`, hint: member.hint ? `: ${member.hint}` : '' }, messageId: 'noEquivalent', node });
            return;
          }
          if (!member?.to || member.to === key) {
            return;
          }
          context.report({
            data: { from: `${object.name}.${key}`, to: `${!rule.renameTo || object.name === rule.renameTo ? object.name : rule.renameTo}.${member.to}` },
            fix: (fixer) => fixer.replaceText(property, isStaticString(property) ? quote(property, member.to) : member.to),
            messageId: 'renamedExport',
            node: property,
          });
        },

        TSTypeAliasDeclaration(node) {
          // A local alias of a props type is that props type.
          if (node.typeAnnotation.type === 'TSTypeReference' && typeArguments(node.typeAnnotation).length === 0 && propsTypes.has(referenceName(node.typeAnnotation))) {
            propsTypes.set(node.id.name, propsTypes.get(referenceName(node.typeAnnotation)));
          }
          if (node.typeAnnotation.type === 'TSIntersectionType') {
            const literals = node.typeAnnotation.types.filter((type) => type.type === 'TSTypeLiteral');
            conflictNodes.push({ members: literals.flatMap((type) => type.members), name: node.id.name, refs: node.typeAnnotation.types.filter((type) => type.type === 'TSTypeReference') });
          }
        },

        TSInterfaceDeclaration(node) {
          conflictNodes.push({ members: node.body.body, name: node.id.name, refs: node.extends ?? [] });
        },

        'TSIndexedAccessType, TSInterfaceHeritage, TSTypeReference'(node) {
          typeNodes.push(node);
        },

        JSXOpeningElement(node) {
          const typed = node.name.type === 'JSXIdentifier' ? typedOf(node.name.name) : undefined;
          if (typed) {
            for (const attribute of node.attributes) {
              if (attribute.type === 'JSXAttribute' && attribute.name.type === 'JSXIdentifier' && typed[attribute.name.name]) {
                reportTypedValue(attributeValue(attribute), typed[attribute.name.name], `<${node.name.name} ${attribute.name.name}>`, attribute);
              }
            }
            return;
          }
          // `<Cart.Action>`: a compound static of an ODS import is the component it stands for (`CartAction`), as in the codemod.
          const component = node.name.type === 'JSXIdentifier' ? components.get(node.name.name)
            : node.name.type === 'JSXMemberExpression' && node.name.object.type === 'JSXIdentifier' ? mapping.statics?.[imports.imports.get(node.name.object.name)]?.[node.name.property.name] : undefined;
          if (!component) {
            return;
          }
          const spec = mapping.components[component];
          const { props } = spec;
          const attributes = node.attributes.filter((attribute) => attribute.type === 'JSXAttribute' && attribute.name.type === 'JSXIdentifier');
          const byName = new Map(attributes.map((attribute) => [attribute.name.name, attribute]));
          const names = new Set(byName.keys());
          const spreads = node.attributes.filter((attribute) => attribute.type === 'JSXSpreadAttribute');
          const consumed = new Set();

          // In untyped code nothing would catch an old prop carried by a spread.
          const carried = Object.entries(props).filter(([, rule]) => rule.renameTo || rule.remove || rule.moveTo)
            .map(([prop, rule]) => (rule.renameTo ? `${prop} → ${rule.renameTo}` : rule.moveTo ? `${prop} → ${rule.moveTo.prop}.${rule.moveTo.key}` : `${prop} (removed: delete it)`));
          if (untyped && carried.length > 0) {
            for (const spread of spreads) {
              context.report({ data: { detail: spreadMessage(component, carried) }, messageId: 'spreadUntyped', node: spread });
            }
          }

          const childless = spec.childless;
          const empty = node.selfClosing || node.parent.children.every((child) => child.type === 'JSXText' && child.value.trim() === '');
          if (childless && empty && spreads.length === 0 && (!imports.wrappers.has(node.name.name) || imports.childrenWrappers.has(node.name.name))) {
            const result = childlessFix(node, component, childless, byName);
            // Kept as they are when the parts cannot be built: the integrator still needs them.
            result.consumed.forEach((attribute) => consumed.add(attribute));
            if (result.missing) {
              result.consumed.forEach((attribute) => flagged.push(attribute));
              context.report({ data: { detail: `<${component}> without children: ${result.missing.join(', ')} is needed to build its parts, add them by hand` }, messageId: 'childless', node });
            } else {
              result.consumed.forEach((attribute) => dropped.push(attribute));
              context.report({ data: { detail: `<${component}> without children renders nothing in ODS v20: add ${childless.children.map((child) => `<${child.element} />`).join(', ')}` }, fix: result.fix, messageId: 'childless', node });
            }
          }

          // A value with no v20 equivalent whose attribute the codemod deleted: reported while its marker is there, as the codemod left it.
          const orphanValues = Object.entries(props).filter(([, rule]) => rule.renameTo && Object.values(rule.values ?? {}).includes(null));
          // The marker sits before the element: `/* … */ <Button>`, or `{/* … */}` in children position.
          const element = node.parent;
          const before = element.parent?.type === 'JSXElement' || element.parent?.type === 'JSXFragment'
            ? (() => {
              const siblings = element.parent.children;
              const index = siblings.indexOf(element);
              const previous = siblings.slice(0, index).reverse().find((child) => !(child.type === 'JSXText' && child.value.trim() === ''));
              return previous?.type === 'JSXExpressionContainer' && previous.expression.type === 'JSXEmptyExpression' ? sourceCode.getCommentsInside(previous) : [];
            })()
            : sourceCode.getCommentsBefore(element);
          for (const comment of before) {
            const text = comment.value.trim();
            if (text.startsWith('TODO(ods-v20): ') && orphanValues.some(([prop, rule]) => !names.has(prop) && Object.entries(rule.values).some(([key, to]) => to === null && (text.includes(`<${component} ${prop}="${key}"> has no v20 equivalent`) || new RegExp(`\\b${rule.constant}\\.${key} has no v20 equivalent`).test(text))))) {
              context.report({ data: { detail: text.replace(/^TODO\(ods-v20\): /, '').replace(/ has no v20 equivalent/, ' has no ODS v20 equivalent') }, loc: comment.loc, messageId: 'removedValue' });
            }
          }

          const whenAbsent = spec.whenAbsent;
          const v19Default = Boolean(whenAbsent) && isV19Look(config, whenAbsent.choice);
          const moved = [];

          for (const attribute of attributes) {
            const from = attribute.name.name;
            const rule = props[from];
            if (!rule || consumed.has(attribute)) {
              continue;
            }
            const value = attributeValue(attribute);

            if (rule.moveTo) {
              moved.push({ attribute, rule });
              continue;
            }

            if (rule.coerce === 'string' && value) {
              const number = value.type === 'Literal' && typeof value.value === 'number'
                || (value.type === 'UnaryExpression' && value.operator === '-' && value.argument.type === 'Literal' && typeof value.argument.value === 'number');
              if (number) {
                const text = sourceCode.getText(value).replace(/\s+/g, '');
                context.report({ data: { detail: `<${component} ${from}={ ${text} }>: the ${from} is a string in ODS v20, use ${from}="${text}"` }, fix: (fixer) => fixer.replaceText(attribute.value, `"${text}"`), messageId: 'coercedValue', node: attribute });
              } else if (value.type === 'ArrayExpression') {
                flagged.push(attribute);
                context.report({ data: { detail: `<${component} ${from}={[…]}>: the value of a trigger is a string in v20${hintOf(rule)}` }, messageId: 'coercedValue', node: attribute });
              }
            }

            // `todoUnless` (`<Input type="password">` without `maskOption`) is valid v20 code: a point to check of the codemod, not a lint report.

            if (rule.stacking && value?.type === 'ObjectExpression') {
              // Reported on the zIndex pair, where the codemod puts its marker (a multi-line style object spans several lines).
              const zIndex = value.properties.find((property) => property.type === 'Property' && /^(zIndex|z-index)$/.test(keyName(property)));
              const literal = zIndex && unwrapConst(zIndex.value);
              // A string that reads the v19 overlay token is left to ods/v20-tokens, as in the codemod.
              const stacked = literal && ((literal.type === 'Literal' && typeof literal.value === 'number')
                || (literal.type === 'UnaryExpression' && literal.argument.type === 'Literal' && typeof literal.argument.value === 'number')
                || /^\s*-?\d+\s*$/.test(stringOf(literal) ?? ''));
              const number = literal?.type === 'UnaryExpression' ? `${literal.operator}${literal.argument.value}` : literal?.type === 'Literal' && typeof literal.value === 'number' ? literal.value : stringOf(literal);
              if (stacked && stackingNeedsCheck(number)) {
                context.report({ data: { detail: `<${component} ${from}={{ zIndex }}>: check this stacking${hintOf(rule)}` }, messageId: 'stacking', node: zIndex });
              }
            }

            if (rule.remove) {
              if (rule.always) {
                dropped.push(attribute);
                context.report({ data: { component, from, to: 'nothing' }, fix: (fixer) => removeAttribute(fixer, attribute), messageId: 'removedProp', node: attribute });
                continue;
              }
              const key = value ? valueKey(value) : undefined;
              const replacement = key === undefined ? undefined : rule.values?.[key];
              if (!replacement) {
                const folded = key === undefined ? foldTernary(value, rule, names) : null;
                if (folded) {
                  dropped.push(attribute);
                  context.report({
                    data: { component, from, to: folded.text ?? 'nothing' },
                    fix: (fixer) => (folded.text ? fixer.replaceText(attribute, folded.text) : removeAttribute(fixer, attribute)),
                    messageId: 'removedProp',
                    node: attribute,
                  });
                  continue;
                }
                flagged.push(attribute);
                context.report({
                  data: { from: key === undefined ? `<${component} ${from}={…}>` : `<${component} ${from}="${key}">`, hint: hintOf(rule) },
                  messageId: key === undefined ? 'removedComputed' : 'noEquivalent',
                  node: attribute,
                });
                continue;
              }
              const look = v19LookAttributes(rule, key, byName);
              if (look.conflicts.length > 0) {
                // Kept and reported: the integrator merges the v19 look into the attribute already there.
                flagged.push(attribute);
                context.report({ data: { detail: `<${component} ${from}="${key}">: ${look.conflicts.join(' / ')}` }, messageId: 'keepV19Look', node: attribute });
                continue;
              }
              dropped.push(attribute);
              const added = Object.entries(replacement).filter(([name]) => !names.has(name)).map(([name, text]) => attributeText(name, text));
              added.push(...look.added);
              context.report({
                data: { component, from, to: added.length > 0 ? added.join(' ') : 'nothing' },
                fix: (fixer) => (added.length > 0 ? fixer.replaceText(attribute, added.join(' ')) : removeAttribute(fixer, attribute)),
                messageId: 'removedProp',
                node: attribute,
              });
              continue;
            }

            if (!rule.renameTo) {
              continue;
            }
            const leaves = value ? literalLeaves(value) : [];
            // A literal or a constant member with no v20 value (bug [42]): the prop is not renamed, as in the codemod.
            const orphan = value && valueLeaves(value).find((leaf) => {
              const key = valueKey(leaf, rule.constant);
              return key !== undefined && rule.values && Object.hasOwn(rule.values, key) && rule.values[key] === null;
            });
            if (orphan && !names.has(rule.renameTo)) {
              const subject = isStaticString(orphan) ? `<${component} ${from}="${stringOf(orphan)}">` : sourceCode.getText(orphan);
              // The whole value has no v20 equivalent: the attribute goes (the component takes its default), as in the codemod.
              const whole = unwrapConst(value) === orphan && !spreads.some((spread) => spread.range[0] < attribute.range[0]);
              if (whole) {
                dropped.push(attribute);
                context.report({ data: { from: subject, hint: hintOf(rule) }, fix: (fixer) => removeAttribute(fixer, attribute), messageId: 'noEquivalent', node: attribute });
                continue;
              }
              // No automatic fix: the integrator has to pick another value, or another component.
              flagged.push(attribute);
              context.report({ data: { from: subject, hint: hintOf(rule) }, messageId: 'noEquivalent', node: attribute });
              continue;
            }
            if (names.has(rule.renameTo)) {
              // Both props set: the new one already won at runtime, the old one was ignored.
              dropped.push(attribute);
              context.report({ data: { component, from, to: rule.renameTo }, fix: (fixer) => removeAttribute(fixer, attribute), messageId: 'redundantProp', node: attribute });
              continue;
            }

            // The v20 default written out (`status="brand"`) is noise: the attribute goes, unless the v19 look keeps every emphasis explicit.
            const key = value ? valueKey(value) : undefined;
            const mapped = key !== undefined && rule.values && Object.hasOwn(rule.values, key) ? rule.values[key] : key;
            const keepsDefault = v19Default && Object.hasOwn(whenAbsent.add ?? {}, rule.renameTo);
            // After a spread the explicit value overrode what the spread carried: it stays, renamed.
            const afterSpread = spreads.some((spread) => spread.range[0] < attribute.range[0]);
            if (rule.dropDefault !== undefined && !keepsDefault && !afterSpread && mapped === rule.dropDefault) {
              dropped.push(attribute);
              context.report({ data: { component, from, to: `nothing (${rule.dropDefault} is the v20 default)` }, fix: (fixer) => removeAttribute(fixer, attribute), messageId: 'removedProp', node: attribute });
              continue;
            }

            const unknown = Boolean(value) && valueLeaves(value).some((leaf) => !isStaticString(leaf) && valueKey(leaf) === undefined);
            const defaultValue = v19Default && rule.defaultWas !== undefined && unknown && attribute.value.type === 'JSXExpressionContainer'
              && !(value.type === 'LogicalExpression' && ['??', '||'].includes(value.operator) && value.right.type === 'Literal')
              ? rule.values?.[rule.defaultWas] ?? rule.defaultWas
              : undefined;
            const look = v19LookAttributes(rule, key, byName);
            if (look.conflicts.length > 0) {
              // Kept and reported, as for a removed prop: the old attribute is what the lint finds again.
              context.report({ data: { detail: `<${component} ${from}="${key}">: ${look.conflicts.join(' / ')}` }, messageId: 'keepV19Look', node: attribute });
              continue;
            }
            const extra = look.added;
            context.report({
              data: { component, from, to: rule.renameTo },
              fix(fixer) {
                const fixes = [fixer.replaceText(attribute.name, rule.renameTo)];
                for (const leaf of leaves) {
                  const to = rule.values?.[stringOf(leaf)];
                  if (to) {
                    fixes.push(fixer.replaceText(leaf, quote(leaf, to)));
                  }
                }
                if (defaultValue !== undefined) {
                  // `emphasis={ v }` kept the v19 default when v was undefined: keep it.
                  fixes.push(isSimple(value) ? fixer.insertTextAfter(value, ` ?? '${defaultValue}'`) : fixer.insertTextBefore(value, '('));
                  if (!isSimple(value)) {
                    fixes.push(fixer.insertTextAfter(value, `) ?? '${defaultValue}'`));
                  }
                }
                if (extra.length > 0) {
                  fixes.push(fixer.insertTextAfter(attribute, ` ${extra.join(' ')}`));
                }
                return fixes;
              },
              messageId: 'renamedProp',
              node: attribute,
            });
          }

          if (moved.length > 0) {
            reportMoved(component, moved, byName);
          }
        },

        'Program:exit'() {
          const props = (component) => mapping.components[component]?.props ?? {};
          // The props type of a component: `BadgeProp` (or a local alias), `ComponentProps<typeof Badge>`.
          const propsOf = (type) => {
            // `Parameters<typeof Badge>[0]`: the props of the component, as `ComponentProps<typeof Badge>`.
            if (type?.type === 'TSIndexedAccessType' && referenceName(type.objectType) === 'Parameters' && type.indexType.type === 'TSLiteralType' && type.indexType.literal.value === 0) {
              const [query] = typeArguments(type.objectType);
              return query?.type === 'TSTypeQuery' && query.exprName.type === 'Identifier' ? components.get(query.exprName.name) : undefined;
            }
            const name = referenceName(type);
            if (!name) {
              return undefined;
            }
            if (propsTypes.has(name) && typeArguments(type).length === 0) {
              return propsTypes.get(name);
            }
            const [argument] = typeArguments(type);
            if (/^ComponentProps(WithRef|WithoutRef)?$/.test(name) && argument?.type === 'TSTypeQuery' && argument.exprName.type === 'Identifier') {
              return components.get(argument.exprName.name);
            }
            return undefined;
          };

          for (const node of typeNodes) {
            if (node.type === 'TSIndexedAccessType') {
              const component = propsOf(node.objectType);
              const literal = node.indexType.type === 'TSLiteralType' && isString(node.indexType.literal) ? node.indexType.literal : null;
              const rule = component && literal && props(component)[literal.value];
              const subject = `${sourceCode.getText(node.objectType)}['${literal?.value}']`;
              if (rule?.renameTo) {
                context.report({ data: { detail: `${subject} is removed in ODS v20, use ['${rule.renameTo}']` }, fix: (fixer) => fixer.replaceText(literal, quote(literal, rule.renameTo)), messageId: 'indexedType', node });
              } else if (rule?.remove) {
                context.report({ data: { detail: `${subject} is removed in v20${hintOf(rule)}` }, messageId: 'indexedType', node });
              } else if (rule?.moveTo) {
                const objectText = sourceCode.getText(node.objectType);
                context.report({ data: { detail: `${subject} is removed in v20: use NonNullable<${objectText}['${rule.moveTo.prop}']>['${rule.moveTo.key}']` }, messageId: 'indexedType', node });
              }
              continue;
            }
            const helper = referenceName(node);
            const [objectType, keys] = typeArguments(node);
            const component = (helper === 'Omit' || helper === 'Pick') && propsOf(objectType);
            const members = component && literalTypes(keys);
            if (!members) {
              continue;
            }
            const rules = props(component);
            const present = new Set(members.map((member) => member.literal.value));
            const subject = `${helper}<${sourceCode.getText(objectType)}, …>`;
            const moved = helper === 'Pick' ? members.filter((member) => rules[member.literal.value]?.moveTo) : [];
            if (moved.length > 0) {
              const names = moved.map((member) => member.literal.value);
              context.report({ data: { detail: `${sourceCode.getText(node)}: ${names.join(', ')} ${names.length > 1 ? 'are' : 'is'} removed in v20: pick '${rules[names[0]].moveTo.prop}' instead, whose object takes ${names.map((prop) => rules[prop].moveTo.key).join(', ')}` }, messageId: 'indexedType', node });
            }
            if (helper === 'Omit') {
              // The v19 key stays omitted (it is typed never in v20), the v20 key it became is omitted too, as in the codemod.
              const added = members.filter((member) => rules[member.literal.value]?.renameTo && !present.has(rules[member.literal.value].renameTo));
              if (added.length > 0) {
                context.report({
                  data: { detail: `${subject}: ${added.map((member) => `'${member.literal.value}'`).join(', ')} is renamed in ODS v20, omit ${added.map((member) => `'${rules[member.literal.value].renameTo}'`).join(', ')} too` },
                  fix: (fixer) => added.map((member) => fixer.insertTextAfter(member, ` | ${quote(member.literal, rules[member.literal.value].renameTo)}`)),
                  messageId: 'indexedType',
                  node,
                });
              }
              continue;
            }
            const renamed = members.filter((member) => rules[member.literal.value]?.renameTo && !present.has(rules[member.literal.value].renameTo));
            const removed = members.filter((member) => rules[member.literal.value]?.remove || (rules[member.literal.value]?.renameTo && present.has(rules[member.literal.value].renameTo)));
            if (renamed.length + removed.length === 0) {
              continue;
            }
            if (removed.length === members.length && helper === 'Pick') {
              context.report({ data: { detail: `${subject}: ${removed.map((member) => `'${member.literal.value}'`).join(', ')} is removed in v20${hintOf(rules[removed[0].literal.value])}` }, messageId: 'indexedType', node });
              continue;
            }
            context.report({
              data: { detail: `${subject}: ${[...renamed, ...removed].map((member) => `'${member.literal.value}'`).join(', ')} is removed in ODS v20` },
              fix(fixer) {
                if (removed.length === members.length) {
                  return fixer.replaceText(node, sourceCode.getText(objectType));
                }
                if (removed.length > 1) {
                  const kept = members.filter((member) => !removed.includes(member));
                  return fixer.replaceText(keys, kept.map((member) => (renamed.includes(member) ? quote(member.literal, rules[member.literal.value].renameTo) : sourceCode.getText(member))).join(' | '));
                }
                const fixes = renamed.map((member) => fixer.replaceText(member.literal, quote(member.literal, rules[member.literal.value].renameTo)));
                for (const member of removed) {
                  const index = members.indexOf(member);
                  fixes.push(index < members.length - 1
                    ? fixer.removeRange([member.range[0], members[index + 1].range[0]])
                    : fixer.removeRange([members[index - 1].range[1], member.range[1]]));
                }
                return fixes;
              },
              messageId: 'indexedType',
              node,
            });
          }

          // Wrappers that declare their own props next to the ODS ones: `interface X extends BadgeProp { status: … }`.
          for (const { members, name, refs } of conflictNodes) {
            const own = new Map(members.filter((member) => member.type === 'TSPropertySignature' && keyName(member) !== undefined).map((member) => [keyName(member), member]));
            for (const ref of refs) {
              const omit = referenceName(ref) === 'Omit' ? ref : null;
              const base = omit ? typeArguments(omit)[0] : ref;
              const component = propsOf(base);
              if (!component) {
                continue;
              }
              const omittedTypes = omit ? literalTypes(typeArguments(omit)[1]) : [];
              if (omit && !omittedTypes) {
                continue;
              }
              const omitted = new Set(omittedTypes.map((member) => member.literal.value));
              const baseText = sourceCode.getText(base);
              for (const [prop, rule] of Object.entries(props(component))) {
                if (own.has(prop) && (rule.renameTo || rule.remove) && !omitted.has(prop) && !(rule.renameTo && omitted.has(rule.renameTo))) {
                  context.report({ data: { detail: `<${name}> declares its own ${prop}, typed never on ${component} in v20: rename it, or omit it with Omit<${baseText}, '${prop}'>` }, messageId: 'ownPropConflict', node: own.get(prop) });
                }
              }
              // An omitted v19 prop renamed to a conflict (`Omit<BadgeProp, 'color'>` → 'status') already omits it.
              const omittedAfterRename = new Set([...omitted].map((prop) => props(component)[prop]?.renameTo ?? prop));
              const conflicts = (mapping.components[component].conflicts ?? []).filter((prop) => own.has(prop) && !omitted.has(prop) && !omittedAfterRename.has(prop));
              if (conflicts.length === 0) {
                continue;
              }
              const quoteChar = omittedTypes[0] ? sourceCode.getText(omittedTypes[0].literal)[0] : '\'';
              const union = conflicts.map((prop) => `${quoteChar}${prop}${quoteChar}`).join(' | ');
              context.report({
                data: { detail: `<${name}> declares its own ${conflicts.join(', ')}, which ${component} also takes in ODS v20: omit it from ${baseText}` },
                fix: (fixer) => (omit
                  ? fixer.insertTextAfter(typeArguments(omit)[1], ` | ${union}`)
                  : fixer.replaceText(ref, `Omit<${baseText}, ${union}>`)),
                messageId: 'ownPropConflict',
                node: ref,
              });
            }
          }

          // The specifiers that nothing reads any more, per statement; the statements whose removed specifiers are still read.
          const unused = [];
          const stillRead = new Map();
          for (const { node, rule, spec } of removedSpecifiers) {
            const name = spec.imported.name;
            const reads = (sourceCode.getDeclaredVariables(spec)[0]?.references ?? []).filter((reference) => !within(dropped, reference.identifier));
            // `Switch.Item` is a part of Switch: the root of a JSX tag name is the export it reads.
            const tagRoot = (name) => (name.type === 'JSXMemberExpression' ? tagRoot(name.object) : name.name);
            for (const { identifier } of reads.filter((reference) => !within(flagged, reference.identifier))) {
              const tag = identifier.parent.type === 'JSXMemberExpression' && identifier.parent.object === identifier ? identifier.parent.parent : identifier.parent;
              if (tag.type === 'JSXClosingElement') {
                continue;
              }
              if (tag.type === 'JSXOpeningElement') {
                // A removed component: one report on the outermost element, none on its nested removed parts.
                const element = tag.parent;
                let outer = element.parent;
                while (outer && !(outer.type === 'JSXElement' && removedSpecifiers.some((item) => item.spec.local.name === tagRoot(outer.openingElement.name)))) {
                  outer = outer.parent;
                }
                if (outer) {
                  continue;
                }
              }
              const parent = identifier.parent;
              const memberKey = parent.type === 'MemberExpression' && parent.object === identifier
                ? (parent.computed ? (isString(parent.property) ? parent.property.value : undefined) : parent.property.name)
                : parent.type === 'TSQualifiedName' && parent.left === identifier ? parent.right.name : undefined;
              const member = memberKey === undefined ? undefined : memberRule(rule, memberKey);
              context.report({
                data: { from: member ? `${identifier.name}.${memberKey}` : identifier.name, hint: (member ?? rule).hint ? `: ${(member ?? rule).hint}` : '' },
                messageId: 'noEquivalent',
                node: member ? parent : identifier,
              });
            }
            if (reads.length === 0) {
              unused.push({ name, node, spec });
            } else {
              stillRead.set(node, [...(stillRead.get(node) ?? []), spec.local.name]);
            }
          }
          for (const { name, node } of keptV19) {
            const spec = node.specifiers.find((item) => item.local.name === name);
            const reads = (sourceCode.getDeclaredVariables(spec)[0]?.references ?? []).filter((reference) => !within(dropped, reference.identifier));
            if (reads.some((reference) => orphanRead(reference.identifier, renamedExports.get(name)))) {
              stillRead.set(node, [...(stillRead.get(node) ?? []), name]);
            }
          }
          for (const [node, names] of stillRead) {
            context.report({ data: { detail: removedImportMessage(names) }, messageId: 'removedImport', node });
          }

          // A renamed export read only in attributes deleted above (`color={ BUTTON_COLOR.primary }`, the default) goes too.
          for (const { node, spec } of specifiers) {
            if (mapping.exports[spec.imported.name]?.removed || components.has(spec.local.name)) {
              continue;
            }
            const references = sourceCode.getDeclaredVariables(spec)[0]?.references ?? [];
            // A v19 name nothing reads: an earlier --fix pass may have deleted its last read, as the codemod does in one go.
            const unread = references.length === 0 && Boolean(mapping.exports[spec.imported.name]?.renameTo);
            if (!unread && (references.length === 0 || !references.every((reference) => within(dropped, reference.identifier)))) {
              continue;
            }
            unused.push({ name: spec.local.name, node, spec });
          }

          // Every report of a statement carries the removal of all its unused specifiers (ESLint applies one of them).
          for (const { name, node, spec } of unused) {
            const removed = new Set(unused.filter((item) => item.node === node).map((item) => item.spec));
            context.report({ data: { from: name }, fix: (fixer) => removeSpecifiers(fixer, node, removed), messageId: 'unusedRemovedExport', node: spec });
          }
        },
      };
    },
    meta: {
      docs: { description: `Flag and fix the ${rawMapping.package} v${rawMapping.from} APIs removed in v${rawMapping.to}` },
      fixable: 'code',
      messages: {
        ambiguousType: '{{detail}}.',
        childless: '{{detail}}.',
        coercedValue: '{{detail}}.',
        feedsProp: '{{detail}}.',
        indexedType: '{{detail}}.',
        keepV19Look: '{{detail}}.',
        movedProp: '{{component}}: `{{from}}` is removed in ODS v20, use `{{to}}`.',
        noEquivalent: '{{from}} has no ODS v20 equivalent{{hint}}.',
        removedImport: '{{detail}}.',
        removedValue: '{{detail}}.',
        ownPropConflict: '{{detail}}.',
        redundantProp: '{{component}}: `{{from}}` is removed in ODS v20 and `{{to}}` is already set, delete it.',
        removedComputed: '{{from}} is removed in ODS v20 and its value is computed at runtime{{hint}}.',
        removedProp: '{{component}}: `{{from}}` is removed in ODS v20, use {{to}} instead.',
        renamedExport: '`{{from}}` is removed in ODS v20, use `{{to}}`.',
        renamedProp: '{{component}}: `{{from}}` is removed in ODS v20, use `{{to}}` (check the value mapping in the migration guide).',
        spreadUntyped: '{{detail}}.',
        stacking: '{{detail}}.',
        toastOption: '{{detail}}.',
        typedObject: '{{detail}}.',
        unusedRemovedExport: '`{{from}}` is removed in ODS v20 and no longer used, delete it.',
      },
      schema: [{
        additionalProperties: false,
        properties: {
          look: { additionalProperties: { enum: ['aluminium', 'v19'] }, type: 'object' },
          builtOnOds: { items: { type: 'string' }, type: 'array' },
          modules: { oneOf: [{ type: 'string' }, { enum: [false] }] },
          packages: { items: { type: 'string' }, type: 'array' },
          pending: { items: { type: 'string' }, type: 'array' },
          treatAsOds: { items: { type: 'string' }, type: 'array' },
        },
        type: 'object',
      }],
      type: 'problem',
    },
  };
}

/* ------------------------------------------------------------------------- ods/v20-default-changed */

/**
 * Opt-in: flags each element of a component whose default rendering changes in v20 (`<Button>` without
 * `variant`), whatever the config, and suggests the attributes that keep the v19 look. Never an autofix.
 */
function defaultChangedRule(rawMapping) {
  return {
    create(context) {
      // A package pinned to ODS 17 or 18 is left alone, as the codemod does: the v20 names do not exist in its theme.
      if (olderOdsOf(context.filename)) {
        return {};
      }
      const mapping = resolveMapping(rawMapping);
      const imports = importTracker(mapping, sourcesOf(context, mapping));
      return {
        ImportDeclaration(node) {
          imports.read(node);
        },
        JSXOpeningElement(node) {
          const component = node.name.type === 'JSXIdentifier' && !imports.wrappers.has(node.name.name) && imports.components.get(node.name.name);
          const whenAbsent = component && mapping.components[component].whenAbsent;
          if (!whenAbsent) {
            return;
          }
          const names = new Set(node.attributes.filter((attribute) => attribute.type === 'JSXAttribute').map((attribute) => attribute.name.name));
          if (whenAbsent.unless.some((name) => names.has(name))) {
            return;
          }
          const added = Object.entries(whenAbsent.add).map(([name, value]) => attributeText(name, value)).join(' ');
          const spread = node.attributes.find((attribute) => attribute.type === 'JSXSpreadAttribute');
          context.report({
            data: { component, hint: whenAbsent.hint ?? 'its default rendering changes in v20', unless: whenAbsent.unless.join(' or ') },
            messageId: 'defaultChanged',
            node,
            suggest: [{
              data: { added },
              // Before the first spread, so that the caller's value still wins.
              fix: (fixer) => (spread ? fixer.insertTextBefore(spread, `${added} `) : fixer.insertTextAfter(node.typeArguments ?? node.name, ` ${added}`)),
              messageId: 'keepV19Default',
            }],
          });
        },
      };
    },
    meta: {
      docs: { description: 'Flag the components whose default rendering changes in ODS v20' },
      hasSuggestions: true,
      messages: {
        defaultChanged: '<{{component}}> without {{unless}}: {{hint}}.',
        keepV19Default: 'Keep the v19 look: add {{added}}.',
      },
      schema: [{
        additionalProperties: false,
        properties: {
          builtOnOds: { items: { type: 'string' }, type: 'array' },
          modules: { oneOf: [{ type: 'string' }, { enum: [false] }] },
          packages: { items: { type: 'string' }, type: 'array' },
          treatAsOds: { items: { type: 'string' }, type: 'array' },
        },
        type: 'object',
      }],
      type: 'suggestion',
    },
  };
}

/* ------------------------------------------------------------------------- ods/v20-tokens */

/**
 * Flags the design tokens removed in ODS v20 in strings (Tailwind classes, style objects, CSS-in-JS,
 * Tailwind configs) and fixes those whose role the file says, from the same plan as the codemod.
 */
function tokensRule(rawTokenMapping) {
  return {
    create(context) {
      // A package pinned to ODS 17 or 18 is left alone, as the codemod does: the v20 names do not exist in its theme.
      if (olderOdsOf(context.filename)) {
        return {};
      }
      return {
        Program() {
          const { sourceCode } = context;
          const config = configOf(context.options[0]);
          const loc = (start, end) => ({ end: sourceCode.getLocFromIndex(end), start: sourceCode.getLocFromIndex(start) });
          const plan = planScriptTokens(sourceCode.text, resolveTokenMapping(rawTokenMapping, config), context.filename, { config });
          for (const edit of plan.edits) {
            context.report({
              data: { detail: edit.message },
              fix: (fixer) => fixer.replaceTextRange([edit.start, edit.end], edit.text),
              loc: loc(edit.start, edit.end),
              messageId: 'removedToken',
            });
          }
          for (const marker of plan.markers) {
            context.report({ data: { detail: marker.messages.join(' / ') }, loc: loc(marker.start, marker.end), messageId: 'unresolvedToken' });
          }
        },
      };
    },
    meta: {
      docs: { description: 'Flag and fix the design tokens removed in ODS v20' },
      fixable: 'code',
      messages: {
        removedToken: '{{detail}} (ODS v20 removed this token).',
        unresolvedToken: '{{detail}}',
      },
      schema: [{
        additionalProperties: false,
        properties: {
          look: { additionalProperties: { enum: ['aluminium', 'v19'] }, type: 'object' },
          pending: { items: { type: 'string' }, type: 'array' },
        },
        type: 'object',
      }],
      type: 'problem',
    },
  };
}

/**
 * The plugin, built from a component mapping and a token mapping. The default export reads the
 * mappings of the package; tests build it from inline mappings.
 */
function createPlugin({ mapping = defaultMapping, tokenMapping = defaultTokenMapping } = {}) {
  return {
    meta: { name: 'ods-migrate' },
    rules: {
      'v20-default-changed': defaultChangedRule(mapping),
      'v20-migration': migrationRule(mapping),
      'v20-tokens': tokensRule(tokenMapping),
    },
  };
}

export { createPlugin };
export default createPlugin();
