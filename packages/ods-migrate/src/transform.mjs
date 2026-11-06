import { Lang, parse } from '@ast-grep/napi';
import { planReplacement, replacementParts } from './replaced.mjs';
import { odsNameIn } from './resolve.mjs';
import { TODO, attributeText, eolOf, followsMarker, inlineMarker, isUntyped, isV19Look, jsxChildMarker, memberRule, resolveMapping, stackingNeedsCheck, typeRule } from './shared.mjs';

function langFor(filename) {
  return /\.(c|m)?ts$/.test(filename) ? Lang.TypeScript : Lang.Tsx;
}

/* The value of a string literal, or of a template literal without substitution nor escape (`\`ghost\``), or null. */
function stringValue(node) {
  if (node?.kind() === 'template_string' && node.children().every((child) => child.kind() === '`' || child.kind() === 'string_fragment')) {
    return node.children().filter((child) => child.kind() === 'string_fragment').map((child) => child.text()).join('');
  }
  if (node?.kind() !== 'string') {
    return null;
  }
  return node.children().filter((child) => child.kind() === 'string_fragment').map((child) => child.text()).join('');
}

function line(node) {
  return node.range().start.line + 1;
}

const startOf = (node) => node.range().start.index;
const endOf = (node) => node.range().end.index;
const rangeOf = (node) => ({ end: endOf(node), start: startOf(node) });
// `within(ranges, node)`: the node starts inside one of the ranges. The ranges are merged and sorted
// once per length of the list, so a file with thousands of attributes stays linear-ish.
const mergedRanges = new WeakMap();
function within(ranges, node) {
  let entry = mergedRanges.get(ranges);
  if (entry?.length !== ranges.length) {
    const list = [];
    for (const range of [...ranges].sort((a, b) => a.start - b.start)) {
      const last = list.at(-1);
      if (last && range.start <= last.end) {
        last.end = Math.max(last.end, range.end);
      } else {
        list.push({ ...range });
      }
    }
    entry = { length: ranges.length, list };
    mergedRanges.set(ranges, entry);
  }
  const index = startOf(node);
  let low = 0;
  let high = entry.list.length - 1;
  while (low <= high) {
    const middle = (low + high) >> 1;
    if (entry.list[middle].start > index) {
      high = middle - 1;
    } else if (entry.list[middle].end <= index) {
      low = middle + 1;
    } else {
      return true;
    }
  }
  return false;
}
const sameRange = (a, b) => startOf(a) === startOf(b) && endOf(a) === endOf(b);
/* The entry points of a package that are not a component (`/style`, `/normalize-css`): their names are not the ODS API. */
const COMPONENT_ENTRY = /^(?!style$|normalize-css$)[a-z][a-z0-9-]*$/;
/* The component entry points that v20 removes, with what to import instead. */
const REMOVED_ENTRIES = { switch: 'the Switch is removed with its entry point: use Tabs (`@ovhcloud/ods-react/tabs`) with `variant="switch"`, a single-select ButtonGroup or a RadioGroup' };
const named = (node) => node?.children().filter((child) => child.isNamed() && child.kind() !== 'comment') ?? [];
const isSimple = (node) => ['identifier', 'member_expression', 'call_expression', 'subscript_expression'].includes(node.kind());
const quoteOf = (node) => (node.kind() === 'string' ? node.text()[0] : '\'');
const quoteSingle = (value) => `'${String(value).replace(/['\\]/g, '\\$&')}'`;

/** `(x)`, `x as const`, `x satisfies T`, `x!` → `x`: what an expression evaluates to. */
function unwrap(node) {
  let current = node;
  for (;;) {
    const kind = current?.kind();
    if (kind === 'parenthesized_expression' || kind === 'non_null_expression' || kind === 'satisfies_expression') {
      current = named(current)[0];
    } else if (kind === 'as_expression' && current.children().at(-1).text() === 'const') {
      current = named(current)[0];
    } else {
      return current;
    }
  }
}

/**
 * Lists the expressions that can end up as the value of a prop: the expression itself, the branches
 * of a ternary, the operands of `||` / `??`, the right operand of `&&`. A string nested anywhere else
 * (a function argument, an object) is not a value of the prop, so it is never rewritten.
 */
function valueLeaves(node) {
  switch (node.kind()) {
    case 'parenthesized_expression':
      return named(node).flatMap(valueLeaves);
    case 'ternary_expression':
      return [node.field('consequence'), node.field('alternative')].flatMap(valueLeaves);
    case 'binary_expression': {
      const operator = node.field('operator')?.text();
      if (operator === '||' || operator === '??') {
        return [node.field('left'), node.field('right')].flatMap(valueLeaves);
      }
      if (operator === '&&') {
        return valueLeaves(node.field('right'));
      }
      return [node];
    }
    default:
      return [node];
  }
}

/** The leaves of a tree made of ternaries only (parentheses allowed), or null when `||`, `??` or `&&` take part. */
function ternaryLeaves(node) {
  switch (node.kind()) {
    case 'parenthesized_expression':
      return ternaryLeaves(named(node)[0]);
    case 'ternary_expression': {
      const consequence = ternaryLeaves(node.field('consequence'));
      const alternative = ternaryLeaves(node.field('alternative'));
      return consequence && alternative ? [...consequence, ...alternative] : null;
    }
    case 'binary_expression':
      return ['||', '??', '&&'].includes(node.field('operator')?.text()) ? null : [node];
    default:
      return [node];
  }
}

/** The members of a `'a' | 'b' | C` union, in source order. */
function unionMembers(node) {
  if (node.kind() === 'union_type') {
    return named(node).flatMap(unionMembers);
  }
  if (node.kind() === 'parenthesized_type') {
    return unionMembers(named(node)[0]);
  }
  return [node];
}

function intersectionMembers(node) {
  return node.kind() === 'intersection_type' ? named(node).flatMap(intersectionMembers) : [node];
}

const literalTypeValue = (node) => (node.kind() === 'literal_type' ? stringValue(named(node)[0]) : null);

/** The text of a JSX attribute value used as a JS expression: `"x"` → `'x'`, bare → `true`, `{ e }` → `e`. */
function attributeExpression(attribute) {
  const value = attribute.children().at(-1);
  if (value === attribute.child(0) || sameRange(value, attribute.child(0))) {
    return { bare: true, node: null, text: 'true' };
  }
  if (value.kind() === 'jsx_expression') {
    const node = named(value)[0];
    return { bare: false, node, text: node?.text() ?? '' };
  }
  const literal = stringValue(value);
  return { bare: false, node: value, text: literal === null ? value.text() : quoteSingle(literal) };
}

/** A JS value of the mapping (`AttrValue` or JSON) as expression text. */
function expressionText(value) {
  if (typeof value?.expr === 'string') {
    return value.expr;
  }
  return typeof value === 'string' ? quoteSingle(value) : String(value);
}

/**
 * The key of `v19Look.values` that a value of the v19 prop stands for: the value itself, or the v19
 * value it was mapped from, when an earlier pass (an ESLint --fix of the constant) already wrote
 * the v20 value (`color={ BADGE_STATUS.accent }` is v19 `primary`). Undefined when there is none.
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
 * by v19 name and by v20 name: a member written as the value of a `variant:` key of an object
 * literal feeds a prop that no longer exists, which no type check sees through a spread.
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

/* The marker of a key that feeds a renamed prop, written from the v19 names so that every engine and every run agree. */
/* The words that tell a marker of a key that feeds a renamed prop (the lint rule finds the codemod's marker by them). */
const FEEDS_SPREAD = 'Passed to an ODS';
/*
 * Names the constant as the code now reads it, and as v19 wrote it: `v19Member` is the member the
 * code had, `v20Member` what it became (unknown in the lint rule on already migrated code: `…`).
 */
const feedsMessage = ({ component, constant, prop, renameTo, v20 }, v19Member, v20Member = v19Member) => `${prop}: holds ${v20}.${v20Member} (${constant}.${v19Member} in v19), the ${renameTo} of an ODS ${component}. ${FEEDS_SPREAD} ${component} with {...obj}? Rename the key to ${renameTo}: TypeScript does not flag it there. Read as obj.${prop}? Keep it and delete this comment`;

/* A spread on an ODS element that may carry v19 props: TypeScript does not flag a key in a spread. */
const spreadMessage = (component, carried) => `<${component} {...…}>: if the object passed here with {...} has these keys, change them (TypeScript does not flag them there): ${carried.join(', ')}`;

/**
 * Migrates one source file. Returns the new source and what was done, so the CLI can report it.
 * Nothing that cannot be proven safe is rewritten silently: it gets a TODO(ods-v20) marker or a note.
 */
function transformSource(source, rawMapping, filename = 'file.tsx', options = {}) {
  const config = options.config;
  const mapping = resolveMapping(rawMapping, config);
  // Packages that re-export the ODS API under the same names (a UI kit built on ODS) migrate the same way.
  const packages = [mapping.package, ...(options.packages ?? [])];
  // `@ovhcloud/ods-react/button`: a component entry point of a package, read like the package (its names are the same).
  const isPackage = (specifier) => packages.includes(specifier) || packages.some((name) => specifier?.startsWith(`${name}/`) && COMPONENT_ENTRY.test(specifier.slice(name.length + 1)));
  // Modules of the project that stand for ODS (src/project.mjs), by the specifier this file imports them with:
  // only the names they export from ODS count (`GuardedButton` → `Button`).
  const sources = options.sources ?? null;
  // A module whose only link to ODS is a component with typed props is not a source: its names are its own.
  const standsForOds = (entry) => Boolean(entry && (entry.star || Object.keys(entry.names ?? {}).length));
  const isSource = (specifier) => isPackage(specifier) || standsForOds(sources?.get(specifier));
  // Components of this file whose props are typed with ODS types (src/project.mjs), by local name.
  const ownTyped = options.ownTyped ?? {};
  const odsNameOf = (specifier, name) => (sources?.has(specifier) && !isPackage(specifier) ? odsNameIn(sources.get(specifier), name) : name);
  const isWrapper = (specifier, name) => Boolean(sources?.has(specifier) && !isPackage(specifier) && sources.get(specifier).wrappers?.[name]);
  // A wrapper whose props' children reach the ODS element: a childless use gets its parts written out, as the component would.
  const passesChildren = (specifier, name) => Boolean(sources?.get(specifier)?.childrenThrough?.includes(name));
  const report = { changes: [], looks: [], notes: [], todos: [], typed: [], untyped: [] };
  // In TypeScript a leftover old value fails the type check once the types are renamed, so a value
  // computed at runtime is left to tsc. In untyped code nothing would catch it: it is listed for --check.
  const untyped = isUntyped(source, filename);
  // The v19 look of an element without the prop is only added for a project that still runs ODS 19
  // (or an unknown version). The v19 look of a v19 value is kept wherever that value is rewritten:
  // the value says the code is v19, whatever the package.json already declares.
  const v19Allowed = !(options.from >= 20);
  const v19Look = (choice) => v19Allowed && isV19Look(config, choice);
  const eol = eolOf(source);

  if (!packages.some((name) => source.includes(name)) && ![...(sources?.keys() ?? [])].some((name) => source.includes(name)) && Object.keys(ownTyped).length === 0) {
    return { output: source, ...report };
  }

  const lang = langFor(filename);
  const root = parse(lang, source).root();
  const lineStarts = [0];
  for (let index = source.indexOf('\n'); index >= 0; index = source.indexOf('\n', index + 1)) {
    lineStarts.push(index + 1);
  }
  const lineAt = (index) => {
    let low = 0;
    let high = lineStarts.length - 1;
    while (low < high) {
      const middle = (low + high + 1) >> 1;
      if (lineStarts[middle] <= index) {
        low = middle;
      } else {
        high = middle - 1;
      }
    }
    return low + 1;
  };
  const indentAt = (index) => {
    const start = lineStarts[lineAt(index) - 1];
    let end = start;
    while (source[end] === ' ' || source[end] === '\t') {
      end++;
    }
    return source.slice(start, end);
  };

  // Every edit carries the report entries it stands for: an edit that apply() drops (a duplicate, or
  // an edit inside a range another edit deletes) takes them along.
  const edits = [];
  const edit = (start, end, text, ...entries) => edits.push({ end, entries, seq: edits.length, start, text });
  const change = (at, message) => ['changes', { line: typeof at === 'number' ? lineAt(at) : line(at), message }];
  const replace = (node, text, message) => edit(startOf(node), endOf(node), text, ...(message ? [change(node, message)] : []));
  const note = (at, message) => report.notes.push({ line: typeof at === 'number' ? lineAt(at) : line(at), message });

  // What cannot be migrated is never guessed: it gets a marker, the integrator decides. One marker per
  // anchor, with every message for it, and none where a previous run left one.
  const markers = new Map();
  const mark = (node, message, { jsx = false, index = startOf(node) } = {}) => {
    if (!markers.has(index)) {
      markers.set(index, { jsx, messages: [] });
    }
    const marker = markers.get(index);
    marker.jsx ||= jsx;
    if (!marker.messages.includes(message)) {
      marker.messages.push(message);
    }
  };
  // A marked attribute is flagged once: a marker inside it, on the same line and saying the same, is dropped.
  const markedAttributes = [];
  const markAttribute = (attribute, messages) => {
    markedAttributes.push(rangeOf(attribute));
    [messages].flat().forEach((message) => mark(attribute, message));
  };
  const noEquivalent = (what, hint) => `${what} has no v${mapping.to} equivalent${hint ? `: ${hint}` : ''}`;
  // The import of a removed export its code still reads: the build fails on it once the reads are gone too.
  const removedImport = (names) => `${names.join(', ')}: removed in v${mapping.to}, delete ${names.length > 1 ? 'them' : 'it'} from this import once the places marked below no longer use ${names.length > 1 ? 'them' : 'it'}`;

  const apply = () => {
    // A marker of an earlier run ends with `*/` or `*/}`: only then is the (costly) check worth it.
    const mayFollowMarker = (index) => {
      let before = index - 1;
      while (before >= 0 && /\s/.test(source[before])) {
        before--;
      }
      return source[before] === '/' || source[before] === '}';
    };
    for (const range of markedAttributes) {
      const outer = markers.get(range.start);
      for (const [index, inner] of markers) {
        if (index > range.start && index < range.end && lineAt(index) === lineAt(range.start) && inner.messages.every((message) => outer.messages.includes(message))) {
          markers.delete(index);
        }
      }
    }
    for (const [index, { jsx, messages }] of markers) {
      if (!mayFollowMarker(index) || !followsMarker(source, index)) {
        const text = jsx ? jsxChildMarker(messages, source, index) : inlineMarker(messages);
        edit(index, index, text, ...messages.map((message) => ['todos', { line: lineAt(index), message }]));
      }
    }
    // Insertions before replacements at the same index, wider edits first, then in the order they were made.
    edits.sort((a, b) => a.start - b.start || (a.end === a.start ? 0 : 1) - (b.end === b.start ? 0 : 1) || b.end - a.end || a.seq - b.seq);
    const kept = [];
    let cover = null;
    for (const item of edits) {
      const previous = kept.at(-1);
      if (previous && previous.start === item.start && previous.end === item.end && previous.text === item.text) {
        continue;
      }
      const insertion = item.start === item.end;
      if (cover && item.start >= cover.start && item.end <= cover.end && !(insertion && (item.start === cover.start || item.start === cover.end))) {
        continue;
      }
      if (cover && item.start < cover.end) {
        throw new Error(`${filename}: overlapping edits at ${item.start}`);
      }
      kept.push(item);
      if (!insertion) {
        cover = item;
      }
    }
    const parts = [];
    let cursor = 0;
    for (const item of kept) {
      parts.push(source.slice(cursor, item.start), item.text);
      cursor = item.end;
      for (const [list, entry] of item.entries) {
        report[list].push(entry);
      }
    }
    parts.push(source.slice(cursor));
    for (const list of Object.values(report)) {
      list.sort((a, b) => a.line - b.line);
    }
    return { output: parts.join(''), ...report };
  };

  // ------------------------------------------------------------------------- imports

  const localComponents = new Map();
  const localExports = new Map();
  const importedLocals = new Map();
  const importRanges = [];
  const importStatements = [];
  const componentImport = new Map();
  // Wrapper components of the project (`<GuardedButton>`, a Button): migrated like the component, but
  // they get no v19-look addition (their inner ODS element does), and parts written out only when they pass their children on.
  const wrapperLocals = new Set();
  // The wrappers among them that pass their children on, with their import (where the parts written out are added).
  const childrenLocals = new Map();

  for (const statement of root.findAll({ rule: { kind: 'import_statement' } })) {
    const sourceNode = statement.field('source');
    if (!sourceNode || !isSource(stringValue(sourceNode))) {
      continue;
    }
    const specifier = stringValue(sourceNode);
    importRanges.push(statement.range());
    const entry = packages.map((name) => specifier.startsWith(`${name}/`) && specifier.slice(name.length + 1)).find(Boolean);
    if (entry && REMOVED_ENTRIES[entry]) {
      mark(statement, `${specifier}: ${REMOVED_ENTRIES[entry]}`);
    }

    if (statement.find({ rule: { kind: 'namespace_import' } })) {
      const namespace = statement.find({ rule: { kind: 'namespace_import' } }).find({ rule: { kind: 'identifier' } })?.text() ?? 'X';
      note(statement, `import * as ${namespace} from '${specifier}': ods-migrate does not follow names read as ${namespace}.Button. Switch to named imports (import { Button } from '${specifier}') and run ods-migrate again`);
    }

    // `import Banner from './Banner'`: the default export of a module of the project, when it stands for an ODS component.
    const defaultName = statement.find({ rule: { kind: 'import_clause' } })?.children().find((child) => child.kind() === 'identifier')?.text();
    const defaultOds = defaultName && !isPackage(specifier) ? odsNameOf(specifier, 'default') : null;
    if (defaultOds && mapping.components[defaultOds]) {
      importedLocals.set(defaultName, defaultOds);
      localComponents.set(defaultName, defaultOds);
      if (isWrapper(specifier, 'default')) {
        wrapperLocals.add(defaultName);
        // A default import has no list of its own: the parts go to the package import.
        if (passesChildren(specifier, 'default')) childrenLocals.set(defaultName, { get added() { return packageAdded; }, specifier: mapping.package });
      }
    }

    const namedImports = statement.find({ rule: { kind: 'named_imports' } });
    if (!namedImports) {
      continue;
    }
    const specifiers = namedImports.findAll({ rule: { kind: 'import_specifier' } });
    const importedNames = new Set(specifiers.map((spec) => spec.field('name').text()));
    const clause = statement.find({ rule: { kind: 'import_clause' } });
    const info = { added: [], namedImports, onlyNamed: named(clause).length === 1, specifier, specs: [], statement };
    importStatements.push(info);

    for (const spec of specifiers) {
      const nameNode = spec.field('name');
      const written = nameNode.text();
      // The ODS export the name stands for: itself, or what a module of the project exports under it.
      const imported = odsNameOf(specifier, written);
      const local = spec.field('alias')?.text() ?? written;
      const item = { imported, local, spec };
      info.specs.push(item);
      if (!imported) {
        // A name of its own of a module that stands for ODS (`DisableCondition` next to `GuardedButton`).
        continue;
      }
      importedLocals.set(local, imported);

      if (mapping.components[imported]) {
        localComponents.set(local, imported);
        if (isWrapper(specifier, written)) {
          wrapperLocals.add(local);
          if (passesChildren(specifier, written)) childrenLocals.set(local, info);
        } else {
          componentImport.set(local, info);
        }
      }
      const exportRule = mapping.exports[imported];
      if (!exportRule) {
        continue;
      }
      item.rule = exportRule;
      localExports.set(local, { aliased: local !== imported, imported, rule: exportRule });
      // Exported under another name by a module of the project: that module keeps its name.
      if (!exportRule.renameTo || written !== imported) {
        continue;
      }
      // The new name may already be imported (a file migrated by hand halfway): keep a single specifier.
      if (local === imported && importedNames.has(exportRule.renameTo)) {
        item.duplicate = true;
        continue;
      }
      // Written by rewriteImports: some reads may keep the v19 name (a member with no v20 value).
      item.rename = { nameNode, to: exportRule.renameTo };
    }
  }

  // Re-exports of the package (a UI kit): `export { BADGE_COLOR, DIVIDER_COLOR } from '@ovhcloud/ods-react'`.
  for (const statement of root.findAll({ rule: { kind: 'export_statement' } })) {
    const sourceNode = statement.field('source');
    if (!sourceNode || !isSource(stringValue(sourceNode))) {
      continue;
    }
    importRanges.push(statement.range());
    for (const spec of statement.findAll({ rule: { kind: 'export_specifier' } })) {
      const nameNode = spec.field('name');
      if (odsNameOf(stringValue(sourceNode), nameNode.text()) !== nameNode.text()) {
        continue;
      }
      const rule = mapping.exports[nameNode.text()];
      if (rule?.removed) {
        mark(spec, noEquivalent(nameNode.text(), rule.hint));
      } else if (rule?.renameTo) {
        replace(nameNode, rule.renameTo, `export ${nameNode.text()} → ${rule.renameTo}`);
        // `export { BADGE_COLOR as BADGE_COLOR }`: the exported name follows.
        const alias = spec.field('alias');
        if (alias?.text() === nameNode.text()) {
          replace(alias, rule.renameTo);
        }
      }
    }
  }
  // The names of other packages' imports are theirs (`import { BUTTON_VARIANT } from '@ovhcloud/ods-components'`).
  // Components of the project with typed props, imported by name or as the default export, are noted by local name.
  const typedLocals = new Map(Object.entries(ownTyped));
  for (const statement of root.findAll({ rule: { kind: 'import_statement' } })) {
    const specifier = stringValue(statement.field('source'));
    if (!isSource(specifier)) {
      importRanges.push(statement.range());
    }
    const typed = sources?.get(specifier)?.typed;
    if (!typed || Object.keys(typed).length === 0) {
      continue;
    }
    const clause = statement.find({ rule: { kind: 'import_clause' } });
    const defaultName = clause?.children().find((child) => child.kind() === 'identifier')?.text();
    if (defaultName && typed.default) {
      typedLocals.set(defaultName, typed.default);
    }
    for (const spec of statement.findAll({ rule: { kind: 'import_specifier' } })) {
      const written = spec.field('name').text();
      if (typed[written]) {
        typedLocals.set(spec.field('alias')?.text() ?? written, typed[written]);
      }
    }
  }

  // Removes items of a comma-separated list (import specifiers, object pairs) the way ESLint fixes do:
  // an item with its following comma, or with the preceding one when it is last.
  const removeFromList = (items, removed, entries = []) => {
    const ranges = [];
    for (let index = 0; index < items.length; index++) {
      if (!removed.has(index)) {
        continue;
      }
      let last = index;
      while (removed.has(last + 1)) {
        last++;
      }
      if (last < items.length - 1) {
        ranges.push([startOf(items[index]), startOf(items[last + 1])]);
      } else if (index > 0) {
        const comma = source.indexOf(',', endOf(items[index - 1]));
        ranges.push([comma >= 0 && comma < startOf(items[index]) ? comma : endOf(items[index - 1]), endOf(items[last])]);
      }
      index = last;
    }
    ranges.forEach(([start, end], index) => edit(start, end, '', ...(index === 0 ? entries : [])));
  };

  // Appends `, Name` to a list (object pairs, import specifiers), in its single-line or multi-line layout.
  const appendToList = (items, texts, container) => {
    const last = items.at(-1);
    if (!last) {
      const inner = texts.join(', ');
      return { end: endOf(container) - 1, start: startOf(container) + 1, text: ` ${inner} ` };
    }
    const multiline = container.text().includes('\n');
    const separator = multiline ? `,${eol}${indentAt(startOf(last))}` : ', ';
    return { end: endOf(last), start: endOf(last), text: texts.map((text) => `${separator}${text}`).join('') };
  };

  // The parts a rewrite adds that the module imported from does not export (a barrel that names only
  // some ODS components): imported from the package, on a line of their own.
  const packageAdded = [];
  // True when the module a statement imports from gives access to this ODS export.
  const exportsName = (info, name) => isPackage(info.specifier) || odsNameOf(info.specifier, name) === name;
  // The list an added part goes to: its component's import, else a value import of the package, else a new line.
  const addedListOf = (info, name) => {
    if (exportsName(info, name)) {
      return info.added;
    }
    return importStatements.find((item) => item.specifier === mapping.package && !/^import\s+type\b/.test(item.statement.text()))?.added ?? packageAdded;
  };

  // Run last: an import goes once nothing reads it any more (a removed export, or a renamed one whose
  // reads all sat in attributes this run deleted), and the children a rewrite added are imported.
  const rewriteImports = (reads) => {
    if (packageAdded.length > 0) {
      const last = root.findAll({ rule: { kind: 'import_statement' } }).at(-1);
      const text = `import { ${packageAdded.join(', ')} } from '${mapping.package}';`;
      // The last import may go as a whole below (a barrel whose names a rewrite replaced): the line goes where it was.
      const emptied = last && importStatements.find((info) => sameRange(info.statement, last) && info.onlyNamed && info.added.length === 0 && info.specs.length > 0
        && info.specs.every((item) => item.duplicate || ((item.rule?.renameTo || item.rule?.removed) && (reads.get(item.local)?.kept ?? 0) === 0)));
      if (emptied) {
        edit(startOf(last), startOf(last), `${text}${eol}`, change(last, `import ${packageAdded.join(', ')} from ${mapping.package} added`));
      } else if (last) {
        edit(endOf(last), endOf(last), `${eol}${text}`, change(last, `import ${packageAdded.join(', ')} from ${mapping.package} added`));
      } else {
        edit(0, 0, `${text}${eol}`, change(0, `import ${packageAdded.join(', ')} from ${mapping.package} added`));
      }
    }
    for (const info of importStatements) {
      const removed = new Set();
      // A renamed export some reads of which keep the v19 name: the v19 name stays, removed in v20, next to the v20 one.
      const keptNames = [];
      // The reads of a renamed export that keep its v19 name, once the deleted attributes are gone.
      const keptReads = (item) => keptV19.has(item.local) && (references.get(item.local) ?? []).some((node) => !within(dropped, node) && orphanMember(node, item.rule));
      for (const item of info.specs.filter((spec) => spec.duplicate)) {
        if (keptReads(item)) {
          item.duplicate = false;
          keptNames.push(item.local);
        } else {
          report.changes.push({ line: line(item.spec), message: `import ${item.imported} → ${item.rename?.to ?? item.rule.renameTo}` });
        }
      }
      for (const item of info.specs.filter((spec) => spec.rename)) {
        const { nameNode, to } = item.rename;
        const renamedReads = (references.get(item.local) ?? []).filter((node) => !within(dropped, node) && !orphanMember(node, item.rule)).length;
        if (!keptReads(item)) {
          replace(nameNode, to, `import ${item.imported} → ${to}`);
          continue;
        }
        keptNames.push(item.local);
        if (renamedReads > 0 && !info.specs.some((other) => other.imported === to)) {
          edit(endOf(item.spec), endOf(item.spec), `, ${source.slice(startOf(item.spec), startOf(nameNode))}${to}`, change(item.spec, `import ${to} added (${item.imported} kept where its value has no v${mapping.to} equivalent)`));
        }
      }
      const stillRead = [...info.specs.filter((item) => item.rule?.removed && (reads.get(item.local)?.kept ?? 0) > 0).map((item) => item.local), ...keptNames];
      if (stillRead.length > 0) {
        mark(info.statement, removedImport(stillRead));
      }
      info.specs.forEach((item, index) => {
        const count = reads.get(item.local) ?? { kept: 0, total: 0 };
        const renamedOrRemoved = item.rule?.renameTo || item.rule?.removed;
        // A v19 name nothing reads (any more) goes: the lint rule cannot tell an import it emptied from an unused one.
        if (item.duplicate || (renamedOrRemoved && count.kept === 0)) {
          removed.add(index);
          if (!item.duplicate) {
            report.changes.push({ line: line(info.statement), message: `import ${item.local} removed (${item.rule.removed ? `no v${mapping.to} equivalent, ` : ''}no longer used)` });
          }
        }
      });
      const items = info.specs.map((item) => item.spec);
      if (removed.size === items.length && items.length > 0 && info.added.length === 0) {
        if (info.onlyNamed) {
          const { end, start } = info.statement.range();
          const next = source.startsWith('\r\n', end.index) ? 2 : source[end.index] === '\n' ? 1 : 0;
          edit(start.index, end.index + next, '');
        } else {
          const comma = source.lastIndexOf(',', startOf(info.namedImports));
          edit(comma, endOf(info.namedImports), '');
        }
        continue;
      }
      if (removed.size === items.length && items.length > 0) {
        replace(info.namedImports, `{ ${info.added.join(', ')} }`);
        continue;
      }
      removeFromList(items, removed);
      if (info.added.length > 0) {
        const kept = items.filter((_, index) => !removed.has(index));
        const { end, start, text } = appendToList(kept, info.added, info.namedImports);
        edit(start, end, text, change(info.statement, `import ${info.added.join(', ')} added`));
      }
    }
  };

  // ------------------------------------------------------------------------- test mocks

  const mockModule = (node) => {
    if (!node) {
      return null;
    }
    if (node.kind() === 'call_expression' && node.child(0)?.kind() === 'import') {
      return stringValue(named(node.field('arguments'))[0]);
    }
    return stringValue(node);
  };
  const keyName = (key) => stringValue(key) ?? key.text();
  // Replaces a key keeping its quotes: `'BADGE_COLOR'` → `'BADGE_STATUS'`.
  const replaceKey = (key, text, message) => {
    const fragment = key.kind() === 'string' ? key.find({ rule: { kind: 'string_fragment' } }) : null;
    replace(fragment ?? key, text, message);
  };
  // The objects that carry the members of a mocked export: `{ … }`, or `Object.assign(fn, { … })`.
  const memberObjects = (value) => {
    const inner = unwrap(value);
    if (inner?.kind() === 'object') {
      return [inner];
    }
    if (inner?.kind() === 'call_expression' && inner.field('function')?.text() === 'Object.assign') {
      return named(inner.field('arguments')).slice(1).map(unwrap).filter((node) => node?.kind() === 'object');
    }
    return [];
  };
  const renameMemberKeys = (object, rule, what) => {
    for (const member of named(object)) {
      if (member.kind() === 'shorthand_property_identifier') {
        const to = memberRule(rule, member.text())?.to;
        if (to) {
          replace(member, `${to}: ${member.text()}`, `${what}.${member.text()} → .${to}`);
        }
        continue;
      }
      if (member.kind() !== 'pair') {
        continue;
      }
      const memberKey = member.field('key');
      const from = keyName(memberKey);
      const to = memberRule(rule, from)?.to;
      if (!to) {
        continue;
      }
      replaceKey(memberKey, to, `${what}.${from} → .${to}`);
      const memberValue = member.field('value');
      if (stringValue(memberValue) === from) {
        replace(memberValue.find({ rule: { kind: 'string_fragment' } }), to);
      }
    }
  };

  // Test mocks of the package (vi.mock / jest.mock) list the exports by name: they must follow the rename,
  // or the migrated code reads an export the mock no longer provides.
  const mockFactories = [];
  for (const call of root.findAll({ rule: { kind: 'call_expression', regex: '^(vi|jest)\\.(do)?[mM]ock\\(' } })) {
    const [moduleName, factory] = named(call.field('arguments'));
    if (!factory || !isSource(mockModule(moduleName))) {
      continue;
    }
    mockFactories.push(rangeOf(factory));
    for (const pair of factory.findAll({ rule: { kind: 'pair' } })) {
      const key = pair.field('key');
      const name = key && keyName(key);
      const mockedProps = name && mapping.components[name]?.props;
      for (const [prop, propRule] of Object.entries(mockedProps ?? {})) {
        if (pair.field('value')?.find({ rule: { any: [{ kind: 'shorthand_property_identifier_pattern' }, { kind: 'property_identifier' }], regex: `^${prop}$` } })) {
          const now = propRule.remove ? `${prop} is removed in v${mapping.to}: stop reading it` : propRule.renameTo ? `ODS v${mapping.to} passes ${propRule.renameTo} instead: read ${propRule.renameTo} in the mock` : propRule.moveTo ? `ODS v${mapping.to} passes it as ${propRule.moveTo.prop}.${propRule.moveTo.key}: read that in the mock` : null;
          if (now) {
            note(pair, `your test mock of ${name} reads its ${prop} prop: ${now}, and update the assertions that use it`);
          }
        }
      }
      const rule = name && mapping.exports[name];
      if (!rule) {
        continue;
      }
      if (rule.removed) {
        note(pair, `your test mock provides ${name}, removed in v${mapping.to}: delete it from the mock once the code no longer reads it`);
        continue;
      }
      if (rule.renameTo) {
        replaceKey(key, rule.renameTo, `mock ${name} → ${rule.renameTo}`);
      }
      for (const object of memberObjects(pair.field('value'))) {
        renameMemberKeys(object, rule, `mock ${name}`);
      }
    }
    for (const shorthand of factory.findAll({ rule: { kind: 'shorthand_property_identifier' } })) {
      const rule = mapping.exports[shorthand.text()];
      if (rule?.renameTo && !localExports.has(shorthand.text())) {
        replace(shorthand, `${rule.renameTo}: ${shorthand.text()}`, `mock ${shorthand.text()} → ${rule.renameTo}`);
      }
    }
  }

  // `require('@ovhcloud/ods-react')`, `await import('@ovhcloud/ods-react')`: names read this way are not followed. A destructuring
  // that names a changed export, or a module object read by property, gets a marker that says which names to change.
  const changedNames = (names) => names.filter((name) => mapping.exports[name] || mapping.components[name]?.props && Object.keys(mapping.components[name].props).length);
  for (const call of root.findAll({ rule: { kind: 'call_expression' } })) {
    const callee = call.child(0);
    const dynamic = callee?.kind() === 'import';
    if (!dynamic && !(callee?.kind() === 'identifier' && callee.text() === 'require')) {
      continue;
    }
    const specifier = stringValue(named(call.field('arguments'))[0]);
    const mockCall = call.parent()?.kind() === 'arguments' && /^(vi|jest)\.(do)?[mM]ock$/.test(call.parent().parent()?.field('function')?.text() ?? '');
    if (specifier === null || !isPackage(specifier) || mockCall || within(mockFactories, call)) {
      continue;
    }
    let holder = call.parent();
    while (holder && ['await_expression', 'parenthesized_expression'].includes(holder.kind())) {
      holder = holder.parent();
    }
    const pattern = holder?.kind() === 'variable_declarator' ? holder.field('name') : null;
    const form = dynamic ? `import('${specifier}')` : `require('${specifier}')`;
    let names = null;
    if (pattern?.kind() === 'object_pattern') {
      names = named(pattern).map((item) => (item.kind() === 'pair_pattern' ? keyName(item.field('key')) : item.kind() === 'shorthand_property_identifier_pattern' ? item.text() : null)).filter(Boolean);
    }
    const changed = names ? changedNames(names) : [];
    if (names && changed.length === 0) {
      continue;
    }
    const found = call.ancestors().find((node) => ['lexical_declaration', 'variable_declaration', 'expression_statement', 'return_statement'].includes(node.kind())) ?? call;
    const statement = found.parent()?.kind() === 'export_statement' ? found.parent() : found;
    mark(statement, names
      ? `${form}: ods-migrate does not follow names read this way: change ${changed.join(', ')} as the v${mapping.to} migration guide says, or switch to import { … } from '${specifier}' and run ods-migrate again`
      : `${form}: ods-migrate does not follow names read from this module object: switch to import { … } from '${specifier}' and run ods-migrate again, or change the names it reads as the v${mapping.to} migration guide says`);
  }

  // `BadgeProp`, or `ComponentProps<typeof Badge>`: the component whose props a type is.
  const propsTypes = new Map();
  for (const [local, imported] of importedLocals) {
    for (const [component, spec] of Object.entries(mapping.components)) {
      if ([spec.propsType ?? []].flat().includes(imported)) {
        propsTypes.set(local, component);
      }
    }
  }
  // A local alias of a props type is that props type (`type LocalBadgeProp = BadgeProp`).
  if (propsTypes.size > 0) {
    for (const alias of root.findAll({ rule: { kind: 'type_alias_declaration' } })) {
      const value = alias.field('value');
      if (value?.kind() === 'type_identifier' && propsTypes.has(value.text()) && !alias.field('type_parameters')) {
        propsTypes.set(alias.field('name').text(), propsTypes.get(value.text()));
      }
    }
  }

  // `<Cart.Action>`: a compound static of an ODS import is the component it stands for (`CartAction`).
  const statics = mapping.statics ?? {};
  const staticRoots = new Set([...importedLocals].filter(([, imported]) => statics[imported]).map(([local]) => local));
  const componentOfTag = (tag) => {
    if (localComponents.has(tag)) {
      return localComponents.get(tag);
    }
    const [root, member, ...rest] = tag?.split('.') ?? [];
    return staticRoots.has(root) && member && rest.length === 0 ? statics[importedLocals.get(root)][member] : undefined;
  };

  if (localComponents.size === 0 && staticRoots.size === 0 && localExports.size === 0 && propsTypes.size === 0 && typedLocals.size === 0) {
    rewriteImports(new Map());
    return apply();
  }

  const insideImport = (node) => {
    const index = startOf(node);
    return importRanges.some((range) => index >= range.start.index && index < range.end.index);
  };

  // Every reference to an imported binding, outside the import statements, by local name.
  const references = new Map();
  // The regex keeps the query to the imported names: every node handed to JS costs memory in napi.
  const names = [...importedLocals.keys()].map((name) => name.replace(/[$]/g, '\\$&')).join('|');
  const identifiers = names ? root.findAll({ rule: { any: [{ kind: 'identifier' }, { kind: 'type_identifier' }, { kind: 'shorthand_property_identifier' }], regex: `^(${names})$` } }) : [];
  for (const node of identifiers) {
    if (!insideImport(node)) {
      if (!references.has(node.text())) {
        references.set(node.text(), []);
      }
      references.get(node.text()).push(node);
    }
  }

  // The pair an expression is the value of, through what keeps it a value: parentheses, `as`,
  // `satisfies`, a ternary branch, `||` / `??` operands, the right of `&&`.
  const feedsOf = propConstants(mapping);
  const valuePair = (node) => {
    let child = node;
    for (let parent = child.parent(); parent; child = parent, parent = parent.parent()) {
      const kind = parent.kind();
      if (kind === 'pair') {
        return sameRange(parent.field('value'), child) ? parent : null;
      }
      const operator = kind === 'binary_expression' ? parent.field('operator')?.text() : null;
      if (!['parenthesized_expression', 'as_expression', 'satisfies_expression', 'non_null_expression', 'ternary_expression', 'binary_expression'].includes(kind)
        || (kind === 'ternary_expression' && sameRange(parent.field('condition'), child))
        || (kind === 'binary_expression' && !(operator === '||' || operator === '??' || (operator === '&&' && sameRange(parent.field('right'), child))))) {
        return null;
      }
    }
    return null;
  };

  // ------------------------------------------------------------------------- props typed with ODS types

  // A component of the project that declares `color?: ButtonColor` keeps its prop names, but the type is
  // renamed (ButtonStatus) and its values change: the values its callers pass and its own defaults follow.
  // `actionButton?: Pick<ButtonProp, 'variant'>`: the keys of the object passed follow the ODS props.
  const typedLeaves = [];
  const typedObjects = [];
  const typedAttributes = [];
  const typedLabel = (descriptor) => descriptor.type;
  const collectTyped = (value, descriptor, label) => {
    const inner = value && unwrap(value);
    if (!inner) {
      return;
    }
    if (descriptor.type) {
      const rule = typeRule(mapping, descriptor.type);
      if (!rule) {
        return;
      }
      for (const leaf of valueLeaves(inner).map(unwrap)) {
        if (stringValue(leaf) !== null) {
          typedLeaves.push({ label: typedLabel(descriptor), leaf, rule });
        }
      }
    } else if (descriptor.component && mapping.components[descriptor.component] && inner.kind() === 'object') {
      typedObjects.push({ component: descriptor.component, label, object: inner });
    }
  };
  if (typedLocals.size > 0 && lang === Lang.Tsx) {
    for (const element of root.findAll({ rule: { any: [{ kind: 'jsx_opening_element' }, { kind: 'jsx_self_closing_element' }] } })) {
      const name = element.field('name')?.text();
      const typed = typedLocals.get(name);
      if (!typed || localComponents.has(name)) {
        continue;
      }
      for (const attribute of element.children().filter((child) => child.kind() === 'jsx_attribute')) {
        const prop = attribute.child(0).text();
        if (typed[prop]) {
          typedAttributes.push(rangeOf(attribute));
          collectTyped(attributeExpression(attribute).node, typed[prop], `<${name} ${prop}>`);
        }
      }
    }
  }
  const propsOf = (type) => {
    if (type?.kind() === 'type_identifier') {
      return propsTypes.get(type.text());
    }
    // `Parameters<typeof Badge>[0]`: the props of the component, as `ComponentProps<typeof Badge>`.
    if (type?.kind() === 'lookup_type') {
      const [object, index] = named(type);
      const query = object?.kind() === 'generic_type' && object.child(0).text() === 'Parameters' ? named(object.children().find((child) => child.kind() === 'type_arguments'))[0] : null;
      return query?.kind() === 'type_query' && index?.text() === '0' ? componentOfTag(named(query)[0]?.text()) : undefined;
    }
    if (type?.kind() !== 'generic_type' || !/^(React\.)?ComponentProps(WithRef|WithoutRef)?$/.test(type.child(0).text())) {
      return undefined;
    }
    const query = named(type.children().find((child) => child.kind() === 'type_arguments'))[0];
    return query?.kind() === 'type_query' ? localComponents.get(named(query)[0]?.text()) : undefined;
  };
  // Object literals typed with ODS props: `const o: Partial<BadgeProp> = { color: 'primary' }`, `{ … } satisfies ButtonProp`,
  // `{ … } as PopoverProp`. Their keys follow the props, as for the object passed to a typed prop.
  const objectPropsOf = (type) => {
    const node = type?.kind() === 'type_annotation' ? named(type)[0] : type;
    if (node?.kind() === 'type_identifier' || node?.kind() === 'lookup_type') {
      return propsOf(node);
    }
    if (node?.kind() === 'generic_type') {
      const name = node.child(0).text().replace(/^React\./, '');
      const [first] = named(node.children().find((child) => child.kind() === 'type_arguments'));
      return /^(Partial|Required|Readonly|Pick|Omit|PropsWithChildren)$/.test(name) ? objectPropsOf(first) : propsOf(node);
    }
    return undefined;
  };
  if (propsTypes.size > 0 || localComponents.size > 0) {
    const typedValue = (type, value, how) => {
      const component = objectPropsOf(type);
      const inner = value && unwrap(value);
      if (component && inner?.kind() === 'object' && !typedObjects.some(({ object }) => sameRange(object, inner))) {
        typedObjects.push({ component, label: `${how} ${(type.kind() === 'type_annotation' ? named(type)[0] : type).text()}`, moves: true, object: inner });
      }
    };
    for (const declarator of root.findAll({ rule: { kind: 'variable_declarator' } })) {
      if (declarator.field('type')) {
        typedValue(declarator.field('type'), declarator.field('value'), 'an object typed');
      }
    }
    for (const expression of root.findAll({ rule: { any: [{ kind: 'as_expression' }, { kind: 'satisfies_expression' }, ...(lang === Lang.TypeScript ? [{ kind: 'type_assertion' }] : [])] } })) {
      const [first, second] = named(expression);
      const [value, type] = expression.kind() === 'type_assertion' ? [second, named(first)[0]] : [first, second];
      typedValue(type, value, expression.kind() === 'satisfies_expression' ? 'an object satisfying' : 'an object cast to');
    }
  }

  // The defaults of the destructured props of this file's typed components (`variant = 'default'`), and a note
  // where the value builds something else (`button-link--${variant}`: a class name that changes with it).
  const functionsOf = (name) => {
    const found = root.findAll({ rule: { kind: 'function_declaration' } }).filter((node) => node.field('name')?.text() === name);
    for (const declarator of root.findAll({ rule: { kind: 'variable_declarator' } })) {
      if (declarator.field('name')?.text() !== name) {
        continue;
      }
      let node = declarator.field('value');
      for (let depth = 0; node && depth < 5; depth++) {
        const kind = node.kind();
        if (kind === 'arrow_function' || kind === 'function_expression' || kind === 'function') {
          found.push(node);
          break;
        }
        node = ['parenthesized_expression', 'as_expression', 'satisfies_expression'].includes(kind) ? named(node)[0]
          : kind === 'call_expression' ? named(node.field('arguments'))[0] : null;
      }
    }
    return found;
  };
  for (const [name, typed] of Object.entries(ownTyped)) {
    for (const fn of functionsOf(name)) {
      const params = fn.field('parameters');
      const pattern = named(params)[0]?.field?.('pattern');
      if (pattern?.kind() !== 'object_pattern') {
        continue;
      }
      for (const item of named(pattern)) {
        let prop;
        let local;
        let value = null;
        if (item.kind() === 'object_assignment_pattern') {
          prop = item.field('left')?.text();
          local = prop;
          value = item.field('right');
        } else if (item.kind() === 'pair_pattern') {
          const key = item.field('key');
          prop = key && (stringValue(key) ?? key.text());
          const target = item.field('value');
          local = target?.kind() === 'assignment_pattern' ? target.field('left')?.text() : target?.text();
          value = target?.kind() === 'assignment_pattern' ? target.field('right') : null;
        } else if (item.kind() === 'shorthand_property_identifier_pattern') {
          prop = item.text();
          local = prop;
        }
        const descriptor = prop && typed[prop];
        if (!descriptor) {
          continue;
        }
        if (value) {
          collectTyped(value, descriptor, `${name} ${prop}`);
        }
        const rule = descriptor.type && typeRule(mapping, descriptor.type);
        const changes = rule ? Object.entries(rule.members).filter(([from, to]) => typeof to === 'string' && to !== from) : [];
        if (!local || changes.length === 0) {
          continue;
        }
        const built = fn.findAll({ rule: { kind: 'identifier', regex: `^${local.replace(/[$]/g, '\\$&')}$`, inside: { kind: 'template_substitution', stopBy: 'end' } } });
        if (built.length > 0) {
          note(built[0], `${name} ${prop}: its values change in v${mapping.to} (${changes.map(([from, to]) => `'${from}' → '${to}'`).join(', ')}): what this code builds from it changes too (a CSS class name, an object key): rename those to match`);
        }
      }
    }
  }

  // ------------------------------------------------------------------------- defaults of a wrapper typed with ODS props

  // `({ variant = 'default', ...p }: ButtonProp) => <Button variant={ variant } { ...p } />`: ButtonProp has no `variant`
  // in v20. The key follows the prop, the local keeps its name so the body still reads it, and the default its value:
  // `{ emphasis: variant = 'high' }`. A default equal to the v20 one goes; a default with no v20 value is marked.
  const odsPropsOf = (type) => {
    const node = type?.kind() === 'type_annotation' ? named(type)[0] : type;
    if (node?.kind() === 'type_identifier') {
      return propsTypes.get(node.text());
    }
    if (node?.kind() === 'intersection_type') {
      const found = intersectionMembers(node).map(odsPropsOf).filter(Boolean);
      return found.length === 1 ? found[0] : undefined;
    }
    if (node?.kind() === 'generic_type' && /^(React\.)?PropsWithChildren$/.test(node.child(0).text())) {
      return odsPropsOf(named(node.children().find((child) => child.kind() === 'type_arguments'))[0]);
    }
    return undefined;
  };
  for (const parameter of propsTypes.size > 0 ? root.findAll({ rule: { kind: 'required_parameter' } }) : []) {
    const pattern = parameter.field('pattern');
    const component = pattern?.kind() === 'object_pattern' ? odsPropsOf(parameter.field('type')) : undefined;
    const props = component && mapping.components[component].props;
    if (!props) {
      continue;
    }
    const keys = new Set(named(pattern).map((item) => (item.kind() === 'object_assignment_pattern' ? item.field('left')?.text() : item.kind() === 'pair_pattern' ? keyName(item.field('key')) : item.text())));
    for (const item of named(pattern)) {
      const shorthand = item.kind() === 'object_assignment_pattern';
      const prop = shorthand ? item.field('left')?.text() : item.kind() === 'pair_pattern' ? keyName(item.field('key')) : null;
      const rule = prop && props[prop];
      const target = shorthand ? item : item.kind() === 'pair_pattern' ? item.field('value') : null;
      if (!rule?.renameTo || target?.kind() !== (shorthand ? 'object_assignment_pattern' : 'assignment_pattern') || keys.has(rule.renameTo)) {
        continue;
      }
      const local = shorthand ? prop : target.field('left')?.text();
      const fallback = target.field('right');
      const literal = stringValue(fallback);
      const label = `${component} ${prop} = ${fallback.text()}`;
      const values = rule.values ?? {};
      if (literal !== null && Object.hasOwn(values, literal) && values[literal] === null) {
        mark(item, noEquivalent(`${label}`, rule.hint));
        continue;
      }
      const to = literal === null ? null : values[literal] ?? literal;
      const key = `${rule.renameTo}: ${local}`;
      const { whenAbsent } = mapping.components[component];
      if (to !== null && to === rule.dropDefault && !(whenAbsent && isV19Look(config, whenAbsent.choice))) {
        replace(item, key, `${label} → { ${key} } (${to} is the v${mapping.to} default)`);
      } else if (to !== null) {
        replace(item, `${key} = ${quoteOf(fallback)}${to}${quoteOf(fallback)}`, `${label} → { ${key} = '${to}' }`);
      } else {
        // A computed default: the key follows, the value is the type check's.
        replace(item, `${key} = ${fallback.text()}`, `${label} → { ${key} = … }`);
        report[untyped ? 'untyped' : 'typed'].push({ line: line(item), message: `${component} ${rule.renameTo} = …: value computed at runtime${untyped ? ': no type check here (JavaScript or @ts-nocheck), check its values by hand' : ': your type check verifies it once on v20 (nothing to do if it passes)'}` });
      }
    }
  }

  // ------------------------------------------------------------------------- renamed exports and members

  // The member a reference reads (`BUTTON_COLOR.information`, `BUTTON_COLOR['information']`, a type `ButtonColor.information`) when it has no v20 value.
  const orphanMember = (node, rule) => {
    const parent = node.parent();
    const key = parent?.kind() === 'member_expression' && sameRange(parent.field('object'), node) ? parent.field('property')?.text()
      : parent?.kind() === 'subscript_expression' && sameRange(parent.field('object'), node) ? stringValue(parent.field('index'))
        : parent?.kind() === 'nested_type_identifier' && sameRange(parent.child(0), node) ? parent.children().at(-1).text() : null;
    return key !== null && key !== undefined && memberRule(rule, key)?.to === null;
  };
  // Renamed exports some reads of which keep the v19 name: the import keeps it next to the v20 one.
  const keptV19 = new Set();

  // A list built from a renamed enum whose members changed (`Object.values(BUTTON_COLOR)`, `for (const k in …)`, `[...…]`):
  // it changes at runtime with no type error, as the *_COLORS lists do.
  const iterated = (node) => {
    const parent = node.parent();
    if (parent?.kind() === 'arguments' && named(parent).length === 1) {
      return /^Object\.(values|keys|entries)$/.test(parent.parent()?.field('function')?.text() ?? '');
    }
    return parent?.kind() === 'spread_element' || (parent?.kind() === 'for_in_statement' && sameRange(parent.field('right'), node));
  };
  for (const [local, { imported, rule }] of localExports) {
    for (const node of rule.listNote ? (references.get(local) ?? []).filter(iterated) : []) {
      note(node, `${imported}${rule.renameTo ? ` → ${rule.renameTo}` : ''} read as a list: ${rule.listNote}`);
    }
  }

  for (const [local, { aliased, imported, rule }] of localExports) {
    if (rule.note && references.get(local)?.length) {
      note(references.get(local)[0], `${imported} → ${rule.renameTo ?? imported}: ${rule.note}`);
    }
    if (aliased || !rule.renameTo) {
      continue;
    }
    for (const node of references.get(local) ?? []) {
      // `BUTTON_COLOR.information` has no v20 member: it keeps its v19 name, under its marker, rather than a v20 name that does not exist.
      if (orphanMember(node, rule)) {
        keptV19.add(local);
        continue;
      }
      // In a mock of the package, the key is the export the code reads: it takes the new name too.
      const keyed = node.kind() === 'shorthand_property_identifier' && !within(mockFactories, node);
      replace(node, keyed ? `${local}: ${rule.renameTo}` : rule.renameTo);
    }
  }

  // Renamed members: BADGE_COLOR.primary → BADGE_STATUS.accent, in values and in types. The members of a
  // removed export are marked with the reads of the export, further down.
  for (const [local, { rule }] of localExports) {
    if (!rule.members || rule.removed) {
      continue;
    }
    for (const node of references.get(local) ?? []) {
      const parent = node.parent();
      if (parent?.kind() === 'member_expression' && sameRange(parent.field('object'), node)) {
        const property = parent.field('property');
        const member = property && memberRule(rule, property.text());
        if (member?.to === null) {
          mark(parent, noEquivalent(`${local}.${property.text()}`, member.hint));
        } else if (member) {
          replace(property, member.to, `${local}.${property.text()} → .${member.to}`);
        }
        const feeds = member?.to !== null && property ? feedsOf.get(localExports.get(local).imported) : null;
        const pair = feeds && !within(mockFactories, parent) ? valuePair(parent) : null;
        if (pair && keyName(pair.field('key')) === feeds.prop && !typedObjects.some(({ object }) => sameRange(pair.parent(), object))) {
          mark(pair, feedsMessage(feeds, property.text(), member?.to ?? property.text()));
        }
      } else if (parent?.kind() === 'subscript_expression' && sameRange(parent.field('object'), node)) {
        const index = parent.field('index');
        const value = index && stringValue(index);
        const member = value !== null && memberRule(rule, value);
        if (member?.to === null) {
          mark(parent, noEquivalent(`${local}['${value}']`, member.hint));
        } else if (member) {
          replace(index.find({ rule: { kind: 'string_fragment' } }), member.to, `${local}['${value}'] → ['${member.to}']`);
        }
      } else if (parent?.kind() === 'nested_type_identifier' && sameRange(parent.child(0), node)) {
        const name = parent.children().at(-1);
        const member = memberRule(rule, name.text());
        if (member?.to === null) {
          mark(parent, noEquivalent(`${local}.${name.text()}`, member.hint));
        } else if (member) {
          replace(name, member.to, `type ${local}.${name.text()} → .${member.to}`);
        }
      }
    }
  }

  // ------------------------------------------------------------------------- typed literals

  // Literals typed with a renamed type: `const tones: Record<Status, BadgeColor> = { draft: 'primary' }`.
  // Only a literal whose own position has the type is rewritten: a label next to it is not a status.
  const renamedType = (node) => node?.kind() === 'type_identifier' && localExports.get(node.text())?.rule.members ? node.text() : null;
  const mentionsRenamedType = (node) => Boolean(renamedType(node) || node?.findAll({ rule: { kind: 'type_identifier' } }).some(renamedType));
  const hits = new Map();
  const opaque = [];
  const walkTyped = (type, value) => {
    const inner = unwrap(value);
    if (!type || !inner || ['as_expression', 'type_assertion'].includes(inner.kind())) {
      // A cast in the value is a typed site of its own.
      return;
    }
    const local = renamedType(type);
    if (local) {
      for (const leaf of valueLeaves(inner).map(unwrap)) {
        if (stringValue(leaf) !== null) {
          const hit = hits.get(startOf(leaf)) ?? { leaf, locals: new Map() };
          hit.locals.set(local, localExports.get(local).rule);
          hits.set(startOf(leaf), hit);
        }
      }
      return;
    }
    const args = named(type.field('type_arguments') ?? type.children().find((child) => child.kind() === 'type_arguments'));
    const name = type.kind() === 'generic_type' ? type.child(0).text().replace(/^.*\./, '') : null;
    switch (type.kind()) {
      case 'parenthesized_type':
      case 'readonly_type':
        return walkTyped(named(type)[0], value);
      case 'union_type': {
        const members = unionMembers(type).filter((member) => !/^(undefined|null)$/.test(member.text()));
        if (members.some(mentionsRenamedType) && !members.every(mentionsRenamedType)) {
          opaque.push({ type, value: inner });
          return;
        }
        return members.forEach((member) => walkTyped(member, value));
      }
      case 'array_type':
        return inner.kind() === 'array' ? named(inner).forEach((element) => walkTyped(named(type)[0], element)) : undefined;
      case 'object_type':
        if (inner.kind() === 'object') {
          for (const pair of named(inner).filter((child) => child.kind() === 'pair')) {
            const key = keyName(pair.field('key'));
            const property = named(type).find((member) => member.kind() === 'property_signature' && keyName(member.field('name')) === key);
            walkTyped(named(property?.field('type'))[0], pair.field('value'));
          }
        }
        return;
      case 'generic_type':
        if (name === 'Array' || name === 'ReadonlyArray') {
          return inner.kind() === 'array' ? named(inner).forEach((element) => walkTyped(args[0], element)) : undefined;
        }
        if (name === 'Partial' || name === 'Readonly' || name === 'Required') {
          return walkTyped(args[0], value);
        }
        if (name === 'Record' && args.length === 2) {
          if (mentionsRenamedType(args[0]) && inner.kind() === 'object') {
            note(inner, `keys of an object typed ${type.text()}: rename the keys whose value changed in v${mapping.to} by hand`);
          }
          if (inner.kind() === 'object') {
            named(inner).filter((child) => child.kind() === 'pair').forEach((pair) => walkTyped(args[1], pair.field('value')));
          }
          return;
        }
        break;
      default:
        break;
    }
    if (mentionsRenamedType(type)) {
      opaque.push({ type, value: inner });
    }
  };

  for (const declarator of root.findAll({ rule: { kind: 'variable_declarator' } })) {
    const annotation = declarator.field('type');
    if (annotation && mentionsRenamedType(annotation)) {
      walkTyped(named(annotation)[0], declarator.field('value'));
    }
  }
  // `<BadgeColor>'primary'` only parses in .ts (it is JSX in .tsx).
  const casts = [{ kind: 'as_expression' }, { kind: 'satisfies_expression' }, ...(lang === Lang.TypeScript ? [{ kind: 'type_assertion' }] : [])];
  for (const expression of root.findAll({ rule: { any: casts } })) {
    const [first, second] = named(expression);
    const [value, type] = expression.kind() === 'type_assertion' ? [second, named(first)[0]] : [first, second];
    if (type && mentionsRenamedType(type)) {
      walkTyped(type, value);
    }
  }
  for (const { label, leaf, rule } of typedLeaves) {
    const hit = hits.get(startOf(leaf)) ?? { leaf, locals: new Map() };
    hit.locals.set(label, rule);
    hits.set(startOf(leaf), hit);
  }
  for (const { leaf, locals } of hits.values()) {
    const literal = stringValue(leaf);
    const rules = [...locals].map(([local, rule]) => [local, memberRule(rule, literal)]).filter(([, member]) => member);
    const targets = new Set(rules.map(([, member]) => member.to));
    if (rules.length === 0) {
      continue;
    }
    const names = rules.map(([local]) => local).join(', ');
    // A JSX attribute string takes no comment before it: the marker goes before the attribute.
    const attribute = leaf.parent()?.kind() === 'jsx_attribute' ? leaf.parent() : null;
    const markLeaf = (message) => (attribute ? markAttribute(attribute, message) : mark(leaf, message));
    if (targets.size > 1) {
      markLeaf(`'${literal}' is typed ${rules.map(([local]) => local).join(' and ')}, which map it to ${rules.map(([, member]) => (member.to === null ? 'nothing' : `'${member.to}'`)).join(' and ')} in v${mapping.to}: pick the value by hand`);
    } else if (rules[0][1].to === null) {
      markLeaf(noEquivalent(`'${literal}' (${names})`, rules[0][1].hint));
    } else {
      replace(leaf.find({ rule: { kind: 'string_fragment' } }), rules[0][1].to, `'${literal}' typed ${names} → '${rules[0][1].to}'`);
    }
  }
  for (const { type, value } of opaque) {
    const strings = [value, ...value.findAll({ rule: { kind: 'string' } })].map(stringValue).filter((text) => text !== null);
    const local = [type, ...type.findAll({ rule: { kind: 'type_identifier' } })].map(renamedType).find(Boolean);
    if (strings.some((text) => memberRule(localExports.get(local).rule, text))) {
      note(value, `a value typed ${type.text()} may hold ${local} values: not rewritten, check them by hand`);
    }
  }

  // The v20 names of the renamed constants: a value read from one is known, as with the v19 name.
  const renamedConstants = new Set(Object.values(mapping.exports).filter((rule) => rule.renameTo && rule.members).map((rule) => rule.renameTo));
  // The value key of `"neutral"`, `SPINNER_COLOR.neutral` or `SPINNER_COLOR['neutral']`, when it is a constant.
  const valueKey = (node, rule) => {
    const inner = unwrap(node);
    if (stringValue(inner) !== null) {
      return stringValue(inner);
    }
    if (!['member_expression', 'subscript_expression'].includes(inner?.kind())) {
      return undefined;
    }
    const object = inner.field('object')?.text();
    const constants = rule?.constant ? [rule.constant, mapping.exports[rule.constant]?.renameTo] : [];
    if (!localExports.has(object) && !constants.includes(importedLocals.get(object)) && !renamedConstants.has(importedLocals.get(object))) {
      return undefined;
    }
    if (inner.kind() === 'member_expression') {
      return inner.field('property')?.text();
    }
    return stringValue(inner.field('index')) ?? undefined;
  };

  // Objects of ODS props passed to a typed prop (`actionButton={{ variant: 'ghost' }}` → `{{ emphasis: 'low' }}`).
  for (const { component, label, moves, object } of typedObjects) {
    const props = mapping.components[component].props ?? {};
    const keys = new Set(named(object).map((item) => (item.kind() === 'pair' ? keyName(item.field('key')) : item.kind() === 'shorthand_property_identifier' ? item.text() : null)));
    // `{ position: 'bottom', gutter: 4 }` typed PopoverProp → `{ overlayConfig: { position: 'bottom', gutter: 4 } }`: only in an object
    // that has no overlayConfig of its own nor a spread, and whose type keeps overlayConfig (not a Pick of the v19 keys).
    const movedPairs = named(object).filter((item) => item.kind() === 'pair' && props[keyName(item.field('key'))]?.moveTo);
    const movable = moves && movedPairs.length > 0 && !named(object).some((item) => item.kind() === 'spread_element' || item.kind() === 'shorthand_property_identifier')
      && !keys.has(props[keyName(movedPairs[0].field('key'))].moveTo.prop) && new Set(movedPairs.map((item) => props[keyName(item.field('key'))].moveTo.prop)).size === 1
      && !/\bPick</.test(label);
    if (movable) {
      const target = props[keyName(movedPairs[0].field('key'))].moveTo.prop;
      const entries = [];
      for (const item of movedPairs) {
        const { moveTo } = props[keyName(item.field('key'))];
        const value = unwrap(item.field('value'));
        const isDefault = Object.hasOwn(moveTo, 'default') && (value.text() === JSON.stringify(moveTo.default) || stringValue(value) === moveTo.default);
        if (!isDefault) {
          entries.push(`${moveTo.key}: ${item.field('value').text()}`);
        }
      }
      const items = named(object);
      const removed = new Set(movedPairs.map((item) => items.findIndex((other) => sameRange(other, item))));
      const first = [...removed].sort((a, b) => a - b)[0];
      const message = `${label} { ${movedPairs.map((item) => keyName(item.field('key'))).join(', ')} } → { ${target}: { … } }`;
      if (entries.length === 0 && removed.size === items.length) {
        replace(object, '{}', message);
      } else if (entries.length === 0) {
        removeFromList(items, removed, [change(object, message)]);
      } else {
        replace(items[first], `${target}: { ${entries.join(', ')} }`, message);
        removed.delete(first);
        removeFromList(items, removed);
      }
    }
    for (const item of named(object)) {
      const shorthand = item.kind() === 'shorthand_property_identifier';
      if (item.kind() !== 'pair' && !shorthand) {
        continue;
      }
      const key = shorthand ? item.text() : keyName(item.field('key'));
      const rule = props[key];
      if (!rule) {
        continue;
      }
      if (rule.moveTo && movable) {
        continue;
      }
      if (rule.remove || rule.moveTo || (rule.renameTo && keys.has(rule.renameTo))) {
        mark(item, `${label}: ${key} of ${component} is ${rule.renameTo ? `renamed ${rule.renameTo}, which is also set` : rule.moveTo ? `now ${rule.moveTo.prop}.${rule.moveTo.key}` : 'removed'} in v${mapping.to}${rule.hint ? `: ${rule.hint}` : ''}`);
        continue;
      }
      if (!rule.renameTo) {
        continue;
      }
      const value = shorthand ? null : unwrap(item.field('value'));
      const literal = value ? stringValue(value) : null;
      if (literal !== null && rule.values && Object.hasOwn(rule.values, literal) && rule.values[literal] === null) {
        mark(item, noEquivalent(`${label} ${key}: '${literal}'`, rule.hint));
        continue;
      }
      // A constant with no v20 value (`BUTTON_COLOR.information`) is marked where it is read: the key stays, as the value does.
      const constantKey = value && literal === null ? valueKey(value, rule) : undefined;
      if (constantKey !== undefined && rule.values && Object.hasOwn(rule.values, constantKey) && rule.values[constantKey] === null) {
        continue;
      }
      if (shorthand) {
        replace(item, `${rule.renameTo}: ${key}`, `${label} { ${key} } → { ${rule.renameTo}: ${key} }`);
        continue;
      }
      replaceKey(item.field('key'), rule.renameTo, `${label} { ${key} } → { ${rule.renameTo} }`);
      if (literal !== null && rule.values?.[literal]) {
        replace(value.find({ rule: { kind: 'string_fragment' } }), rule.values[literal], `${label} ${rule.renameTo}: '${literal}' → '${rule.values[literal]}'`);
      }
    }
  }

  // Object literals typed with a type whose keys are renamed members: `const t: ToastController = { primary }`.
  for (const [local, { rule }] of localExports) {
    if (!rule.memberKeys || !rule.members) {
      continue;
    }
    const typedWith = (type) => {
      if (type?.kind() === 'type_identifier') {
        return type.text() === local;
      }
      const args = named(type?.children().find((child) => child.kind() === 'type_arguments'));
      return type?.kind() === 'generic_type' && /^(Partial|Readonly|Required)$/.test(type.child(0).text()) && typedWith(args[0]);
    };
    const values = [];
    for (const declarator of root.findAll({ rule: { kind: 'variable_declarator' } })) {
      if (typedWith(named(declarator.field('type'))[0])) {
        values.push(declarator.field('value'));
      }
    }
    for (const expression of root.findAll({ rule: { any: [{ kind: 'as_expression' }, { kind: 'satisfies_expression' }] } })) {
      const [value, type] = named(expression);
      if (typedWith(type)) {
        values.push(value);
      }
    }
    for (const object of values.filter(Boolean).flatMap(memberObjects)) {
      renameMemberKeys(object, rule, local);
    }
  }

  // ------------------------------------------------------------------------- types of the props

  // `Omit<BadgeProp, 'a'>` → { component, omitted, union }; bare `BadgeProp` → { component, bare }.
  const propsReference = (type) => {
    if (type?.kind() === 'generic_type' && type.child(0).text() === 'Omit') {
      const [base, union] = named(type.children().find((child) => child.kind() === 'type_arguments'));
      const component = propsOf(base);
      if (component) {
        const omitted = new Set(union ? unionMembers(union).map(literalTypeValue).filter((value) => value !== null) : []);
        return { base, component, generic: type, omitted, union };
      }
      return undefined;
    }
    const component = propsOf(type);
    return component ? { bare: type, base: type, component, omitted: new Set() } : undefined;
  };

  // Wrappers that declare props of their own next to the ODS ones (`interface P extends BadgeProp { status }`).
  // Runs on the original types, before the Omit renames below.
  const omitAdditions = new Map();
  const ownPropDeclarations = [];
  for (const declaration of root.findAll({ rule: { kind: 'interface_declaration' } })) {
    const clause = declaration.children().find((child) => child.kind() === 'extends_type_clause');
    const body = declaration.children().find((child) => child.kind() === 'interface_body');
    ownPropDeclarations.push({ members: named(body), name: declaration.field('name')?.text(), references: named(clause) });
  }
  for (const declaration of root.findAll({ rule: { kind: 'type_alias_declaration' } })) {
    const value = declaration.field('value');
    if (value?.kind() === 'intersection_type') {
      const parts = intersectionMembers(value);
      const members = parts.filter((part) => part.kind() === 'object_type').flatMap(named);
      ownPropDeclarations.push({ members, name: declaration.field('name')?.text(), references: parts });
    }
  }
  for (const { members, name, references: types } of ownPropDeclarations) {
    for (const reference of types.map(propsReference).filter(Boolean)) {
      const { component, omitted } = reference;
      const spec = mapping.components[component];
      const added = [];
      for (const member of members.filter((child) => child.kind() === 'property_signature')) {
        const prop = keyName(member.field('name'));
        const rule = spec.props?.[prop];
        // An Omit of the v20 name omits the v19 one too: it is what the codemod wrote on a previous run.
        if (omitted.has(prop) || (rule?.renameTo && omitted.has(rule.renameTo))) {
          continue;
        }
        if (rule && (rule.renameTo || rule.remove)) {
          mark(member, `<${name}> declares its own ${prop}, typed never on ${component} in v${mapping.to}: rename it, or omit it with Omit<${reference.base.text()}, '${prop}'>`);
        } else if ((spec.conflicts ?? []).includes(prop)) {
          added.push(prop);
          note(member, `<${name}> ${prop}: take ${prop} out of the props before passing them with {...} to ${component}`);
        }
      }
      if (added.length === 0) {
        continue;
      }
      added.sort((a, b) => spec.conflicts.indexOf(a) - spec.conflicts.indexOf(b));
      if (reference.bare) {
        replace(reference.bare, `Omit<${reference.bare.text()}, ${added.map(quoteSingle).join(' | ')}>`, `<${name}> ${reference.bare.text()} → Omit<…, ${added.map(quoteSingle).join(' | ')}> (own ${added.join(', ')})`);
      } else {
        omitAdditions.set(startOf(reference.generic), { added, name });
      }
    }
  }

  // `BadgeProp['color']`, `Omit<BadgeProp, 'color'>`, `Pick<ComponentProps<typeof Badge>, 'color'>`.
  for (const lookup of root.findAll({ rule: { kind: 'lookup_type' } })) {
    const [object, index] = named(lookup);
    const component = propsOf(object);
    const prop = index && literalTypeValue(index);
    const rule = component && prop !== null && mapping.components[component].props?.[prop];
    if (rule?.renameTo) {
      replace(index.find({ rule: { kind: 'string_fragment' } }), rule.renameTo, `${object.text()}['${prop}'] → ['${rule.renameTo}']`);
    } else if (rule?.remove) {
      mark(lookup, `${object.text()}['${prop}'] is removed in v${mapping.to}${rule.hint ? `: ${rule.hint}` : ''}`);
    } else if (rule?.moveTo) {
      mark(lookup, `${object.text()}['${prop}'] is removed in v${mapping.to}: use NonNullable<${object.text()}['${rule.moveTo.prop}']>['${rule.moveTo.key}']`);
    }
  }
  for (const generic of root.findAll({ rule: { kind: 'generic_type' } })) {
    const kind = generic.child(0).text();
    if (kind !== 'Omit' && kind !== 'Pick') {
      continue;
    }
    const [base, union] = named(generic.children().find((child) => child.kind() === 'type_arguments'));
    const component = propsOf(base);
    if (!component || !union) {
      continue;
    }
    const props = mapping.components[component].props ?? {};
    const additions = omitAdditions.get(startOf(generic));
    const members = unionMembers(union);
    const values = members.map(literalTypeValue);
    const result = [];
    const fragmentEdits = [];
    const moved = [];
    let rebuilt = Boolean(additions);
    members.forEach((member, index) => {
      const prop = values[index];
      const rule = prop !== null ? props[prop] : undefined;
      if (kind === 'Omit' && rule?.moveTo) {
        result.push({ text: member.text(), value: prop });
      } else if (kind === 'Pick' && rule?.moveTo) {
        moved.push(prop);
        result.push({ text: member.text(), value: prop });
      } else if (kind === 'Omit' && (rule?.renameTo || rule?.remove)) {
        // The v19 key is typed never on the ODS props in v20: it stays omitted, so a prop of the same name the
        // wrapper declares keeps working. The v20 key the v19 one became is omitted too, as the v19 one was.
        result.push({ text: member.text(), value: prop });
        if (rule.renameTo && !values.includes(rule.renameTo) && !result.some((item) => item.value === rule.renameTo)) {
          result.push({ text: member.text().replace(prop, rule.renameTo), value: rule.renameTo });
          rebuilt = true;
        }
      } else if (rule?.renameTo) {
        if (values.includes(rule.renameTo) || result.some((item) => item.value === rule.renameTo)) {
          rebuilt = true;
          return;
        }
        result.push({ text: member.text().replace(prop, rule.renameTo), value: rule.renameTo });
        fragmentEdits.push([member.find({ rule: { kind: 'string_fragment' } }), rule.renameTo, `${kind}<${base.text()}, '${prop}'> → '${rule.renameTo}'`]);
      } else if (rule?.remove) {
        rebuilt = true;
      } else {
        result.push({ text: member.text(), value: prop });
      }
    });
    for (const prop of additions?.added ?? []) {
      if (!result.some((item) => item.value === prop)) {
        result.push({ text: quoteSingle(prop), value: prop });
      }
    }
    // A Pick that now names the v20 prop: the object literals typed with it, in other files too, keep the v19 key.
    const picked = kind === 'Pick' ? members.map((member, index) => values[index]).filter((prop) => prop !== null && props[prop]?.renameTo) : [];
    if (picked.length > 0 && result.length > 0) {
      report.typed.push({ line: line(generic), message: `${kind}<${base.text()}, …>: the objects typed with it still use the ${picked.map((prop) => `\`${prop}\` key (now ${props[prop].renameTo})`).join(', ')}: your type check lists them once on v20` });
    }
    if (moved.length > 0) {
      const target = props[moved[0]].moveTo.prop;
      mark(generic, `${generic.text()}: ${moved.join(', ')} ${moved.length > 1 ? 'are' : 'is'} removed in v${mapping.to}: pick '${target}' instead, whose object takes ${moved.map((prop) => props[prop].moveTo.key).join(', ')}`);
    }
    if (!rebuilt) {
      fragmentEdits.forEach(([node, text, message]) => replace(node, text, message));
    } else if (result.length > 0) {
      replace(union, result.map((item) => item.text).join(' | '), `${kind}<${base.text()}, ${union.text()}> → ${kind}<…, ${result.map((item) => item.text).join(' | ')}>${additions ? ` (own ${additions.added.join(', ')} of ${additions.name})` : ''}`);
    } else if (kind === 'Omit') {
      replace(generic, base.text(), `${generic.text()} → ${base.text()}`);
    } else {
      mark(generic, `${generic.text()}: ${values.filter((value) => value !== null).join(', ')} is removed in v${mapping.to}${props[values[0]]?.hint ? `: ${props[values[0]].hint}` : ''}`);
    }
  }

  // ------------------------------------------------------------------------- toast(…, { color })

  const dropped = [];
  const flagged = [];
  const heldOptions = [];
  const heldMessage = (local, option, optionRule) => `${option}: the ${option} option of ${local}() is removed in v${mapping.to}${optionRule.hint ? `: ${optionRule.hint}` : ''}, then delete this key (a helper such as ${local}.neutral() already ignored it in v19)`;
  // An object of toast options typed with the ODS ToastOption, or passed to toast() from a variable: its option key is marked.
  const markOptionKey = (object, local, option, optionRule) => {
    for (const item of named(object)) {
      const key = item.kind() === 'pair' ? keyName(item.field('key')) : item.kind() === 'shorthand_property_identifier' ? item.text() : null;
      if (key === option) {
        flagged.push(rangeOf(item));
        mark(item, heldMessage(local, option, optionRule));
      }
    }
  };

  for (const [local, { rule }] of localExports) {
    for (const [option, optionRule] of Object.entries(rule.callOptions ?? {})) {
      for (const node of references.get(local) ?? []) {
        const parent = node.parent();
        const helperCall = parent?.kind() === 'member_expression' && sameRange(parent.field('object'), node)
          && parent.parent()?.kind() === 'call_expression' && sameRange(parent.parent().field('function'), parent);
        const call = helperCall ? parent.parent() : parent?.kind() === 'call_expression' && sameRange(parent.field('function'), node) ? parent : null;
        if (!call) {
          continue;
        }
        const args = named(call.field('arguments'));
        const options = unwrap(args[1]);
        if (options?.kind() === 'identifier') {
          // `toast('…', opts)`: an object held in a variable may be read elsewhere, its key is marked, not removed.
          heldOptions.push({ local, name: options.text(), option, optionRule });
          continue;
        }
        if (options?.kind() !== 'object') {
          continue;
        }
        const items = named(options);
        const index = items.findIndex((item) => (item.kind() === 'pair' ? keyName(item.field('key')) : item.kind() === 'shorthand_property_identifier' ? item.text() : null) === option);
        if (index < 0) {
          continue;
        }
        const pair = items[index];
        const removePair = (...entries) => {
          dropped.push(rangeOf(pair));
          if (items.length === 1) {
            edit(endOf(args[0]), endOf(args[1]), '', ...entries);
          } else {
            removeFromList(items, new Set([index]), entries);
          }
        };
        const helperName = helperCall ? parent.field('property').text() : null;
        if (helperCall) {
          // toast.critical(msg, { color }): the helper already set the color in v19.
          removePair(change(pair, `${local}.${helperName}(…, { ${option} }) → ${option} removed, the helper sets it`));
          continue;
        }
        const value = pair.kind() === 'pair' ? pair.field('value') : null;
        // The constant whose members name the helpers (`TOAST_COLOR.primary` → `toast.accent`).
        const constant = optionRule.constant ?? 'TOAST_COLOR';
        const key = value ? valueKey(value, { constant }) : undefined;
        let helper;
        if (key !== undefined && optionRule.values && Object.hasOwn(optionRule.values, key)) {
          helper = optionRule.values[key];
        } else if (key !== undefined) {
          const member = memberRule(mapping.exports[constant], key);
          helper = member ? member.to : key;
        }
        if (key === undefined || !helper || !optionRule.toHelper) {
          flagged.push(rangeOf(pair));
          mark(pair, `${local}(…, { ${option} }): the ${option} option is removed in v${mapping.to}${optionRule.hint ? `: ${optionRule.hint}` : ''}`);
          continue;
        }
        edit(endOf(node), endOf(node), `.${helper}`);
        removePair(change(call, `${local}(…, { ${option}: '${key}' }) → ${local}.${helper}(…)`));
      }
    }
  }

  const toastEntry = [...localExports].find(([, { rule }]) => rule.callOptions);
  const toastOptionType = [...importedLocals].find(([, imported]) => imported === 'ToastOption')?.[0];
  if (toastEntry) {
    const [local, { rule }] = toastEntry;
    const options = Object.entries(rule.callOptions);
    for (const declarator of root.findAll({ rule: { kind: 'variable_declarator' } })) {
      const value = unwrap(declarator.field('value'));
      const annotation = named(declarator.field('type'))[0];
      const held = heldOptions.some((item) => item.name === declarator.field('name')?.text());
      const typed = Boolean(toastOptionType) && annotation?.text().replace(/^(Partial|Readonly)<(.*)>$/, '$2') === toastOptionType;
      if (value?.kind() === 'object' && (held || typed)) {
        options.forEach(([option, optionRule]) => markOptionKey(value, local, option, optionRule));
      }
    }
    for (const expression of toastOptionType ? root.findAll({ rule: { any: [{ kind: 'as_expression' }, { kind: 'satisfies_expression' }] } }) : []) {
      const [value, type] = named(expression);
      if (unwrap(value)?.kind() === 'object' && type?.text() === toastOptionType) {
        options.forEach(([option, optionRule]) => markOptionKey(unwrap(value), local, option, optionRule));
      }
    }
  }

  // ------------------------------------------------------------------------- JSX of the mapped components

  const elements = lang === Lang.Tsx
    ? root.findAll({ rule: { any: [{ kind: 'jsx_opening_element' }, { kind: 'jsx_self_closing_element' }] } })
    : [];
  // The hints of removed props that build a part (`withPageSizeSelector`), noted when the part is not written out.
  const partHints = [];
  const writtenOut = [];
  const deleteAttribute = (attribute, ...entries) => {
    dropped.push(rangeOf(attribute));
    edit(endOf(attribute.prev()), endOf(attribute), '', ...entries);
  };
  // After a spread an explicit attribute overrode what the spread carried: deleting it would let the spread win.
  const afterSpreadOf = (attribute) => attribute.parent().children().some((child) => child.kind() === 'jsx_expression' && child.find({ rule: { kind: 'spread_element' } }) && startOf(child) < startOf(attribute));
  const computedReport = (attribute, message) => report[untyped ? 'untyped' : 'typed'].push({ line: line(attribute), message: `${message}${untyped ? ': no type check here (JavaScript or @ts-nocheck), check its values by hand' : ': your type check verifies it once on v20 (nothing to do if it passes)'}` });

  for (const element of elements) {
    const nameNode = element.field('name');
    const component = componentOfTag(nameNode?.text());
    const spec = component && mapping.components[component];
    if (!spec) {
      noteLocalWrapper(element, nameNode);
      continue;
    }
    const props = spec.props ?? {};
    const attributes = element.children().filter((child) => child.kind() === 'jsx_attribute');
    const byName = new Map(attributes.map((attribute) => [attribute.child(0).text(), attribute]));
    const spreads = element.children().filter((child) => child.kind() === 'jsx_expression' && child.find({ rule: { kind: 'spread_element' } }));
    const whenAbsent = spec.whenAbsent && !wrapperLocals.has(nameNode.text()) && v19Look(spec.whenAbsent.choice) ? spec.whenAbsent : null;
    // The v19 default kept explicit (`emphasis="medium"` not dropped, a computed value keeps its v19 fallback).
    const v19Default = spec.whenAbsent && isV19Look(config, spec.whenAbsent.choice) ? spec.whenAbsent : null;

    // Aluminium: an element without the prop looks different in v20 with no change in the code (counted for the visual check).
    if (spec.whenAbsent && !whenAbsent && !wrapperLocals.has(nameNode.text()) && spreads.length === 0 && !spec.whenAbsent.unless.some((name) => byName.has(name))) {
      report.looks.push({ component, line: line(element), message: `<${component}> without ${spec.whenAbsent.unless.join(' or ')}: ${spec.whenAbsent.hint}` });
    }

    // v19 look: an element without the prop gets the v19 default written out (before the caller's spread).
    if (whenAbsent && !whenAbsent.unless.some((name) => byName.has(name))) {
      const texts = Object.entries(whenAbsent.add).map(([name, value]) => attributeText(name, value));
      const message = `<${component}> ${texts.join(' ')} added (v19 look)`;
      if (spreads.length > 0) {
        edit(startOf(spreads[0]), startOf(spreads[0]), `${texts.join(' ')} `, change(element, message));
      } else {
        edit(endOf(nameNode), endOf(nameNode), ` ${texts.join(' ')}`, change(element, message));
      }
    }

    const carried = Object.entries(props)
      .map(([prop, rule]) => (rule.renameTo ? `${prop} → ${rule.renameTo}` : rule.remove ? `${prop} (removed: delete it)` : rule.moveTo ? `${prop} → ${rule.moveTo.prop}.${rule.moveTo.key}` : null))
      .filter(Boolean);
    for (const spread of carried.length > 0 ? spreads : []) {
      const message = spreadMessage(component, carried);
      if (untyped) {
        mark(spread, message);
      } else {
        note(spread, message);
      }
    }

    // Props moved into a key of an object prop: `<Popover position="top">` → `overlayConfig={{ position: 'top' }}`.
    const moves = new Map();
    for (const attribute of attributes) {
      const rule = props[attribute.child(0).text()];
      if (!rule?.moveTo) {
        continue;
      }
      const { prop } = rule.moveTo;
      if (!moves.has(prop)) {
        moves.set(prop, []);
      }
      moves.get(prop).push({ attribute, rule });
    }
    for (const [target, moved] of moves) {
      const pairs = [];
      for (const { attribute, rule } of moved) {
        const value = attributeExpression(attribute);
        const from = attribute.child(0).text();
        const isDefault = Object.hasOwn(rule.moveTo, 'default')
          && (value.text === JSON.stringify(rule.moveTo.default) || value.text === expressionText(rule.moveTo.default) || (value.node && stringValue(value.node) === rule.moveTo.default));
        if (isDefault) {
          deleteAttribute(attribute, change(attribute, `<${component}> ${from} removed (${expressionText(rule.moveTo.default)} is the v${mapping.to} default of ${target}.${rule.moveTo.key})`));
          continue;
        }
        pairs.push({ attribute, from, key: rule.moveTo.key, text: `${rule.moveTo.key}: ${value.text}` });
      }
      if (pairs.length === 0) {
        continue;
      }
      const existing = byName.get(target);
      const message = `<${component}> ${pairs.map((pair) => pair.from).join(', ')} → ${target}.${pairs.map((pair) => pair.key).join(', ')}`;
      if (!existing) {
        replace(pairs[0].attribute, `${target}={{ ${pairs.map((pair) => pair.text).join(', ')} }}`, message);
        pairs.slice(1).forEach((pair) => deleteAttribute(pair.attribute));
        continue;
      }
      const value = attributeExpression(existing);
      const object = value.node && unwrap(value.node);
      if (object?.kind() === 'object') {
        // The target already won at runtime for the keys it sets (`overlayConfig?.position ?? position`).
        const items = named(object);
        const present = new Set(items.filter((item) => item.kind() === 'pair').map((item) => keyName(item.field('key'))));
        const missing = pairs.filter((pair) => !present.has(pair.key));
        pairs.forEach((pair, index) => deleteAttribute(pair.attribute, ...(index === 0 ? [change(pair.attribute, message)] : [])));
        const spread = items.find((item) => item.kind() === 'spread_element');
        if (missing.length > 0 && spread) {
          // Before the spread: what it carries still wins, as `overlayConfig` did in v19.
          const separator = object.text().includes('\n') ? `,${eol}${indentAt(startOf(spread))}` : ', ';
          edit(startOf(spread), startOf(spread), missing.map((pair) => `${pair.text}${separator}`).join(''));
          note(existing, `<${component} ${target}={ ${value.text} }>: an explicit undefined in the object passed with {...} now hides ${missing.map((pair) => pair.from).join(', ')}`);
        } else if (missing.length > 0) {
          const { end, start, text } = appendToList(items, missing.map((pair) => pair.text), object);
          edit(start, end, text);
        }
        continue;
      }
      const spread = value.node && isSimple(value.node) ? value.text : `(${value.text})`;
      pairs.forEach((pair) => deleteAttribute(pair.attribute));
      replace(existing, `${target}={{ ${pairs.map((pair) => pair.text).join(', ')}, ...${spread} }}`, message);
      note(existing, `<${component} ${target}={ ${value.text} }>: an explicit undefined in ${value.text} now hides ${pairs.map((pair) => pair.from).join(', ')}`);
    }

    // v19 look of one value: the attributes to add, and the expressions to merge by hand into an attribute already there.
    // An attribute already set to a plain value is the caller's choice, and wins.
    const v19LookOf = (rule, key) => {
      const look = { added: [], conflicts: [] };
      const lookKey = v19LookKey(rule, key);
      if (lookKey === undefined || !isV19Look(config, rule.v19Look.choice)) {
        return look;
      }
      for (const [name, value] of Object.entries(rule.v19Look.values[lookKey])) {
        const text = attributeText(name, value);
        if (!byName.has(name)) {
          look.added.push(text);
        } else if (typeof value === 'object' && byName.get(name).text() !== text) {
          look.conflicts.push(`keep the v19 look with ${text}, merged into your ${name}`);
        }
      }
      return look;
    };

    for (const attribute of attributes) {
      const nameOfAttribute = attribute.child(0);
      const from = nameOfAttribute.text();
      const rule = props[from];
      if (!rule || rule.moveTo) {
        continue;
      }
      const value = attributeExpression(attribute);
      const expression = value.node;
      const leaves = expression ? valueLeaves(expression) : [];
      const inner = expression && unwrap(expression);
      // A key only when the whole value is that literal or constant: `cond && X` is not X.
      const staticKey = inner && leaves.length === 1 && sameRange(unwrap(leaves[0]), inner) ? valueKey(inner, rule) : undefined;

      if (rule.note) {
        note(attribute, `<${component} ${from}>: ${rule.note}`);
      }

      // A value that renders differently unless another attribute is set (`<Input type="password">`): valid v20 code,
      // so a point to check, never a marker; nothing for a project already on v20, whose code was written for it.
      if (rule.todoUnless && v19Allowed) {
        const hit = leaves.map((leaf) => valueKey(leaf, rule)).find((key) => rule.todoUnless.values.includes(key));
        if (hit !== undefined && !byName.has(rule.todoUnless.attribute) && spreads.length === 0) {
          note(attribute, `<${component} ${from}="${hit}">${rule.hint ? `: ${rule.hint}` : `: set ${rule.todoUnless.attribute}`}`);
        }
      }

      if (rule.coerce === 'string' && expression) {
        const number = inner.kind() === 'number' || (inner.kind() === 'unary_expression' && /^[-+]$/.test(inner.child(0).text()) && named(inner)[0]?.kind() === 'number');
        if (number) {
          replace(attribute.children().at(-1), `"${inner.text().replace(/\s+/g, '')}"`, `<${component}> ${from}={ ${inner.text()} } → "${inner.text().replace(/\s+/g, '')}"`);
        } else if (inner.kind() === 'array') {
          mark(attribute, `<${component} ${from}={[…]}>: the value of a trigger is a string in v${mapping.to}${rule.hint ? `: ${rule.hint}` : ''}`);
        } else if (!['string', 'template_string'].includes(inner.kind())) {
          computedReport(attribute, `<${component} ${from}={…}>: a string in v${mapping.to}`);
        }
      }

      if (rule.stacking && inner?.kind() === 'object') {
        for (const pair of named(inner).filter((item) => item.kind() === 'pair' && /^(zIndex|z-index)$/.test(keyName(item.field('key'))))) {
          const zIndex = unwrap(pair.field('value'));
          const text = stringValue(zIndex) ?? (zIndex.kind() === 'template_string' ? zIndex.text() : null);
          const literal = zIndex.kind() === 'number' || (zIndex.kind() === 'unary_expression' && named(zIndex)[0]?.kind() === 'number');
          // A string that reads the v19 overlay token is left to the token pass: it marks a computed read
          // and renames a bare one, so a marker here would outlive that rename.
          if ((literal || (text !== null && /^\s*-?\d+\s*$/.test(text))) && stackingNeedsCheck(text ?? zIndex.text().replace(/\s+/g, ''))) {
            mark(pair, `<${component} ${from}={{ zIndex }}>: check this stacking${rule.hint ? `: ${rule.hint}` : ''}`);
          }
        }
      }

      if (rule.remove) {
        if (rule.always) {
          // A prop that builds a part of a root without children: its hint matters only if the part is not written out below.
          const buildsPart = spec.childless?.children.some((child) => child.when === from || child.labelFrom?.prop === from);
          deleteAttribute(attribute, change(attribute, `<${component}> ${from} removed${rule.hint && !buildsPart ? ` (${rule.hint})` : ''}`));
          if (rule.hint && buildsPart) {
            partHints.push({ attribute, element, message: `<${component} ${from}>: ${rule.hint}` });
          }
          continue;
        }
        const replacement = staticKey === undefined ? undefined : rule.values?.[staticKey];
        if (!replacement && staticKey === undefined && expression && leaves.length > 0) {
          if (foldTernary(attribute, expression, rule, component, byName)) {
            continue;
          }
        }
        if (!replacement) {
          flagged.push(rangeOf(attribute));
          if (staticKey === undefined) {
            markAttribute(attribute, `<${component} ${from}={…}> is removed in v${mapping.to} and its value is computed at runtime${rule.hint ? `: ${rule.hint}` : ''}`);
          } else {
            markAttribute(attribute, noEquivalent(`<${component} ${from}="${staticKey}">`, rule.hint));
          }
          continue;
        }
        const look = v19LookOf(rule, staticKey);
        if (look.conflicts.length > 0) {
          // Kept and marked: the integrator merges the v19 look into the attribute already there.
          flagged.push(rangeOf(attribute));
          markAttribute(attribute, `<${component} ${from}="${staticKey}">: ${look.conflicts.join(' / ')}`);
          continue;
        }
        const added = [...Object.entries(replacement).filter(([name]) => !byName.has(name)).map(([name, text]) => attributeText(name, text)), ...look.added];
        dropped.push(rangeOf(attribute));
        // A value whose v19 look only the configurator keeps (`<Spinner color="neutral">`): the line says the element looks different.
        const looksDifferent = added.length === 0 && v19LookKey(rule, staticKey) !== undefined && rule.hint;
        const message = `<${component}> ${from}="${staticKey}" → ${added.length > 0 ? added.join(' ') : 'removed'}${looksDifferent ? ` (it renders in the v${mapping.to} default color; ${rule.hint.replace(/^[^:]*: delete the prop, or /, '')})` : ''}`;
        if (added.length > 0) {
          replace(attribute, added.join(' '), message);
        } else {
          deleteAttribute(attribute, change(attribute, message));
        }
        continue;
      }

      if (!rule.renameTo) {
        continue;
      }

      if (byName.has(rule.renameTo)) {
        // Both props set: the new one already won at runtime, the old one was ignored.
        deleteAttribute(attribute, change(attribute, `<${component}> ${from} removed, ${rule.renameTo} already set`));
        continue;
      }

      const values = rule.values ?? {};
      const orphans = leaves.filter((leaf) => {
        const key = valueKey(leaf, rule);
        return key !== undefined && Object.hasOwn(values, key) && values[key] === null;
      });
      if (orphans.length > 0) {
        const messages = orphans.map((leaf) => {
          const literal = stringValue(unwrap(leaf));
          return literal !== null
            ? noEquivalent(`<${component} ${from}="${literal}">`, rule.hint)
            : noEquivalent(unwrap(leaf).text(), memberRule(localExports.get(unwrap(leaf).field('object')?.text())?.rule, valueKey(leaf, rule))?.hint ?? rule.hint);
        });
        if (staticKey !== undefined && !afterSpreadOf(attribute)) {
          // The whole value has no v20 equivalent: the attribute goes (the component takes its default), the marker says what to pick.
          deleteAttribute(attribute, change(attribute, `<${component}> ${from}="${staticKey}" → removed (no v${mapping.to} equivalent)`));
          // On the element, as for a removed component: in a form JSX accepts, before it.
          const whole = element.kind() === 'jsx_opening_element' ? element.parent() : element;
          messages.forEach((message) => mark(whole, message, { jsx: whole.parent()?.kind() === 'jsx_element' }));
          continue;
        }
        // No v20 value for one branch: the attribute is left as it is, for the integrator to pick another value.
        flagged.push(rangeOf(attribute));
        markAttribute(attribute, messages);
        continue;
      }

      const mapped = staticKey === undefined ? undefined : values[staticKey] ?? staticKey;
      const suppressed = v19Default && Object.hasOwn(v19Default.add, rule.renameTo);
      // After a spread the explicit value overrode what the spread carried: it stays, renamed.
      const afterSpread = spreads.some((spread) => startOf(spread) < startOf(attribute));
      if (rule.dropDefault !== undefined && mapped === rule.dropDefault && !suppressed && !afterSpread) {
        deleteAttribute(attribute, change(attribute, `<${component}> ${from}="${staticKey}" → removed (${rule.dropDefault} is the v${mapping.to} default)`));
        continue;
      }

      const look = v19LookOf(rule, staticKey);
      if (look.conflicts.length > 0) {
        // Kept and marked, as for a removed prop: the old attribute is what the lint finds again.
        flagged.push(rangeOf(attribute));
        markAttribute(attribute, `<${component} ${from}="${staticKey}">: ${look.conflicts.join(' / ')}`);
        continue;
      }

      replace(nameOfAttribute, rule.renameTo, `<${component}> ${from} → ${rule.renameTo}`);

      for (const text of look.added) {
        edit(endOf(attribute), endOf(attribute), ` ${text}`, change(attribute, `<${component}> ${text} added (v19 look of ${from}="${staticKey}")`));
      }

      if (Object.keys(values).length === 0 || value.bare) {
        continue;
      }

      let unknown = !expression;
      for (const leaf of leaves.map(unwrap)) {
        const literal = stringValue(leaf);
        if (literal !== null) {
          if (values[literal]) {
            replace(leaf.find({ rule: { kind: 'string_fragment' } }), values[literal], `<${component}> ${rule.renameTo}="${literal}" → "${values[literal]}"`);
          }
        } else if (valueKey(leaf, rule) === undefined) {
          // A variable, a call, a template: the value is only known at runtime.
          unknown = true;
        }
      }
      if (!unknown) {
        continue;
      }
      if (rule.defaultWas !== undefined && v19Default) {
        const last = inner.kind() === 'binary_expression' && ['??', '||'].includes(inner.field('operator')?.text()) ? unwrap(inner.field('right')) : null;
        if (!last || !['string', 'number', 'true', 'false'].includes(last.kind())) {
          const fallback = quoteSingle(values[rule.defaultWas] ?? rule.defaultWas);
          const message = `<${component} ${rule.renameTo}={…}>: undefined kept the v19 default (${fallback})`;
          if (isSimple(expression)) {
            edit(endOf(expression), endOf(expression), ` ?? ${fallback}`, change(attribute, message));
          } else {
            edit(startOf(expression), startOf(expression), '(');
            edit(endOf(expression), endOf(expression), `) ?? ${fallback}`, change(attribute, message));
          }
        }
      }
      computedReport(attribute, `<${component} ${rule.renameTo}={…}>: value computed at runtime`);
    }
  }

  // A component of the app (`<Button>` of a UI kit's own sources) given a v19 prop that holds an ODS
  // constant: it may pass it on to the ODS component, whose prop is renamed. Only a point to check:
  // its own API may well keep the name.
  function noteLocalWrapper(element, nameNode) {
    if (!/^[A-Z]/.test(nameNode?.text() ?? '')) {
      return;
    }
    for (const attribute of element.children().filter((child) => child.kind() === 'jsx_attribute')) {
      if (within(typedAttributes, attribute)) {
        continue;
      }
      const value = attributeExpression(attribute).node;
      const inner = value && unwrap(value);
      const object = inner?.kind() === 'member_expression' ? inner.field('object')?.text() : null;
      const feeds = object && feedsOf.get(importedLocals.get(object));
      if (feeds && attribute.child(0).text() === feeds.prop) {
        note(attribute, `<${nameNode.text()} ${feeds.prop}={ ${inner.text()} }>: ${nameNode.text()} is your component, not the ODS ${feeds.component}. If it gives this ${feeds.prop} to an ODS ${feeds.component}, rename the attribute to ${feeds.renameTo} here; if it uses it another way, keep it`);
      }
    }
  }

  // Ternary of a removed prop whose every branch is known: `color={ c ? MODAL_COLOR.critical : MODAL_COLOR.neutral }`
  // → `role={ c ? 'alertdialog' : undefined }`. True when the attribute was rewritten.
  function foldTernary(attribute, expression, rule, component, byName) {
    const leaves = ternaryLeaves(expression);
    if (!leaves || leaves.length < 2) {
      return false;
    }
    const replacements = leaves.map((leaf) => {
      const key = valueKey(leaf, rule);
      return key === undefined ? null : rule.values?.[key] ?? null;
    });
    if (replacements.some((replacement) => !replacement)) {
      return false;
    }
    const names = new Set(replacements.flatMap(Object.keys));
    if (names.size > 1) {
      return false;
    }
    const from = attribute.child(0).text();
    const [name] = names;
    dropped.push(rangeOf(attribute));
    if (!name || byName.has(name)) {
      deleteAttribute(attribute, change(attribute, `<${component}> ${from}={…} removed`));
      return true;
    }
    const boolean = replacements.some((replacement) => typeof replacement[name] === 'boolean');
    const valueOf = (index) => (Object.hasOwn(replacements[index], name) ? expressionText(replacements[index][name]) : boolean ? 'false' : 'undefined');
    let leafIndex = 0;
    const render = (node) => {
      if (node.kind() === 'parenthesized_expression') {
        const innerNode = named(node)[0];
        return `${source.slice(startOf(node), startOf(innerNode))}${render(innerNode)}${source.slice(endOf(innerNode), endOf(node))}`;
      }
      if (node.kind() !== 'ternary_expression') {
        return valueOf(leafIndex++);
      }
      const condition = node.field('condition');
      const consequence = node.field('consequence');
      const alternative = node.field('alternative');
      const yes = render(consequence);
      const no = render(alternative);
      if (yes === 'true' && no === 'false') {
        return condition.text();
      }
      if (yes === 'false' && no === 'true') {
        return isSimple(condition) ? `!${condition.text()}` : `!(${condition.text()})`;
      }
      return `${source.slice(startOf(node), startOf(consequence))}${yes}${source.slice(endOf(consequence), startOf(alternative))}${no}${source.slice(endOf(alternative), endOf(node))}`;
    };
    const text = render(expression);
    const result = text === 'true' ? attributeText(name, true) : attributeText(name, { expr: text });
    replace(attribute, result, `<${component}> ${from}={…} → ${result}`);
    return true;
  }

  // ------------------------------------------------------------------------- components without children

  // `<Pagination totalItems={ 500 } />` renders its parts as children in v20: write them out.
  for (const element of elements) {
    const nameNode = element.field('name');
    const component = componentOfTag(nameNode?.text());
    const childless = component && (!wrapperLocals.has(nameNode.text()) || childrenLocals.has(nameNode.text())) && mapping.components[component].childless;
    if (!childless) {
      continue;
    }
    const selfClosing = element.kind() === 'jsx_self_closing_element';
    const parent = element.parent();
    if (!selfClosing) {
      const content = named(parent).filter((child) => !sameRange(child, element) && child.kind() !== 'jsx_closing_element');
      if (content.some((child) => child.kind() !== 'jsx_text' || child.text().trim() !== '')) {
        continue;
      }
    }
    if (element.children().some((child) => child.kind() === 'jsx_expression')) {
      note(element, `<${component} {...…}> without children: if the object passed here with {...} holds children, check them against the v${mapping.to} parts`);
      continue;
    }
    const attributes = new Map(element.children().filter((child) => child.kind() === 'jsx_attribute').map((attribute) => [attribute.child(0).text(), attribute]));
    const info = componentImport.get(nameNode.text()) ?? childrenLocals.get(nameNode.text());
    const localOf = (part) => [...importedLocals].find(([, imported]) => imported === part)?.[0];
    const removeRoot = (name) => {
      const attribute = attributes.get(name);
      const rule = mapping.components[component].props?.[name];
      if (attribute && !(rule?.remove && rule.always)) {
        deleteAttribute(attribute);
      }
    };
    const lines = [];
    const written = [];
    // Only the parts written out are imported, in the order they first appear.
    const emit = (child, text) => {
      written.push(`<${child.element} />`);
      if (!localOf(child.element) && info) {
        const list = addedListOf(info, child.element);
        if (!list.includes(child.element)) {
          list.push(child.element);
        }
      }
      lines.push(text);
    };
    for (const child of childless.children) {
      const parts = [localOf(child.element) ?? child.element];
      for (const name of child.moveProps ?? []) {
        if (attributes.has(name)) {
          parts.push(attributes.get(name).text());
          removeRoot(name);
        }
      }
      if (child.labelFrom && attributes.has(child.labelFrom.prop)) {
        const renderer = attributeExpression(attributes.get(child.labelFrom.prop)).text;
        const missing = [];
        const argument = child.labelFrom.arg.replace(/\$(\w+)/g, (_, name) => {
          if (!attributes.has(name)) {
            missing.push(name);
            return `$${name}`;
          }
          return attributeExpression(attributes.get(name)).text;
        });
        if (missing.length > 0) {
          const whole = selfClosing ? element : parent;
          mark(whole, `<${component} ${child.labelFrom.prop}>: ${missing.join(', ')} is not set on the element, write the label of <${child.element}> by hand`, { jsx: whole.parent()?.kind() === 'jsx_element' });
        } else {
          parts.push(`label={ (${renderer})(${argument}) }`);
        }
        removeRoot(child.labelFrom.prop);
      }
      const text = `<${parts.join(' ')} />`;
      if (child.when) {
        const condition = attributes.get(child.when);
        removeRoot(child.when);
        const value = condition ? attributeExpression(condition) : null;
        if (!value || value.text === 'false') {
          continue;
        }
        emit(child, value.text === 'true' ? text : `{ ${value.text} && ${text} }`);
      } else {
        emit(child, text);
      }
    }
    writtenOut.push(element);
    const indent = indentAt(startOf(element));
    const body = `${eol}${lines.map((text) => `${indent}  ${text}`).join(eol)}${eol}${indent}`;
    const message = `<${component}> without children → ${written.join(', ') || 'no part'}`;
    if (selfClosing) {
      const last = element.children().filter((child) => child.isNamed()).at(-1);
      edit(endOf(last), endOf(element), `>${lines.length > 0 ? body : ''}</${nameNode.text()}>`, change(element, message));
    } else {
      const closing = parent.children().find((child) => child.kind() === 'jsx_closing_element');
      edit(endOf(element), startOf(closing), lines.length > 0 ? body : '', change(element, message));
    }
  }

  // A root given its parts as children ignored these props in v19 too: only one whose parts could not be written out keeps the hint.
  for (const { attribute, element, message } of partHints) {
    const parent = element.parent();
    const hasChildren = element.kind() === 'jsx_opening_element' && named(parent).some((child) => !sameRange(child, element) && child.kind() !== 'jsx_closing_element' && (child.kind() !== 'jsx_text' || child.text().trim() !== ''));
    if (!hasChildren && !writtenOut.some((node) => sameRange(node, element))) {
      note(attribute, message);
    }
  }

  // ------------------------------------------------------------------------- removed components replaced by another one

  // `<Switch>` written with its items → `<Tabs variant="switch">`, a `<TabList>` around the items, each a `<Tab>`
  // (mapping `replacedBy`, planned in replaced.mjs as in the lint rule). Any other shape keeps its marker.
  const topLevelNames = new Set();
  if (Object.values(mapping.components).some((spec) => spec.replacedBy)) {
    for (const statement of root.findAll({ rule: { kind: 'import_statement' } })) {
      const clause = statement.find({ rule: { kind: 'import_clause' } });
      for (const node of clause ? clause.findAll({ rule: { kind: 'identifier' } }) : []) {
        topLevelNames.add(node.text());
      }
    }
    for (const child of root.children()) {
      const declaration = child.kind() === 'export_statement' ? child.field('declaration') : child;
      if (!declaration) {
        continue;
      }
      if (['lexical_declaration', 'variable_declaration'].includes(declaration.kind())) {
        for (const declarator of named(declaration).filter((item) => item.kind() === 'variable_declarator')) {
          const pattern = declarator.field('name');
          [pattern, ...pattern.findAll({ rule: { any: [{ kind: 'identifier' }, { kind: 'shorthand_property_identifier_pattern' }] } })]
            .filter((node) => ['identifier', 'shorthand_property_identifier_pattern'].includes(node.kind()))
            .forEach((node) => topLevelNames.add(node.text()));
        }
      } else if (declaration.field('name')) {
        topLevelNames.add(declaration.field('name').text());
      }
    }
  }
  const tagRange = (node) => ({ end: endOf(node), start: startOf(node) });
  const tagOf = (opening) => ({
    attributes: opening.children().filter((child) => child.kind() === 'jsx_attribute' || (child.kind() === 'jsx_expression' && child.find({ rule: { kind: 'spread_element' } })))
      .map((attribute) => ({ end: endOf(attribute), name: attribute.kind() === 'jsx_attribute' ? attribute.child(0).text() : null, start: startOf(attribute), text: attribute.text() })),
    end: endOf(opening),
    name: tagRange(opening.field('name')),
    start: startOf(opening),
  });
  // The removed component a tag renders, and the part of it (`SwitchItem`, `Switch.Item`) another tag renders.
  const replacedOf = (tag) => (tag && !wrapperLocals.has(tag) && mapping.components[localComponents.get(tag)]?.replacedBy ? localComponents.get(tag) : null);
  const replacedPartOf = (tag, replacement, component) => {
    const [first, member, ...rest] = tag?.split('.') ?? [];
    if (member) {
      return rest.length === 0 && importedLocals.get(first) === component ? replacement.statics?.[member] : undefined;
    }
    return replacement.parts?.[importedLocals.get(first)];
  };
  for (const opening of elements.filter((node) => node.kind() === 'jsx_opening_element')) {
    const tag = opening.field('name')?.text();
    const component = replacedOf(tag);
    const info = component && componentImport.get(tag);
    const entry = info && packages.map((name) => info.specifier.startsWith(`${name}/`) && info.specifier.slice(name.length + 1)).find(Boolean);
    if (!info || (entry && REMOVED_ENTRIES[entry])) {
      continue;
    }
    const replacement = mapping.components[component].replacedBy;
    const element = opening.parent();
    // A Switch inside a Switch, or with one inside: marked, as it was.
    const nested = (node) => replacedOf(node.field('name')?.text()) === component;
    if (element.ancestors().some((ancestor) => ancestor.kind() === 'jsx_element' && nested(ancestor.child(0)))) {
      continue;
    }
    const inner = element.findAll({ rule: { any: [{ kind: 'jsx_opening_element' }, { kind: 'jsx_self_closing_element' }] } }).filter((node) => !sameRange(node, opening));
    if (inner.some(nested)) {
      continue;
    }
    // The local name of each v20 part: its ODS import, or its own name when nothing else of the file holds it.
    const partNames = {};
    for (const part of [replacement.element, replacement.wrap, ...Object.values(replacement.parts ?? {})]) {
      partNames[part] ??= [...importedLocals].find(([, imported]) => imported === part)?.[0] ?? (topLevelNames.has(part) ? null : part);
    }
    if (Object.values(partNames).some((name) => !name)) {
      continue;
    }
    const items = [];
    for (const node of inner) {
      const part = replacedPartOf(node.field('name')?.text(), replacement, component);
      if (!part) {
        continue;
      }
      const closing = node.kind() === 'jsx_opening_element' ? node.parent().children().find((child) => child.kind() === 'jsx_closing_element') : null;
      items.push({ closingName: closing?.field('name') ? tagRange(closing.field('name')) : null, opening: tagOf(node), to: partNames[part] });
    }
    const closing = element.children().find((child) => child.kind() === 'jsx_closing_element');
    const plan = planReplacement({
      element: { closing: { name: tagRange(closing.field('name')), start: startOf(closing) }, opening: tagOf(opening) },
      items,
      literals: element.findAll({ rule: { any: [{ kind: 'string' }, { kind: 'template_string' }] } }).map(tagRange),
      names: { element: partNames[replacement.element], wrap: partNames[replacement.wrap] },
      replacement,
      source,
    });
    if (plan.blocked) {
      continue;
    }
    const message = `<${tag}> → <${partNames[replacement.element]}${Object.entries(replacement.add ?? {}).map(([name, value]) => ` ${attributeText(name, value)}`).join('')}>, its ${items.length} item${items.length > 1 ? 's' : ''} → <${Object.values(partNames).at(-1)}> in a <${partNames[replacement.wrap]}>`;
    plan.edits.forEach((item, index) => edit(item.start, item.end, item.text, ...(index === 0 ? [change(opening, message)] : [])));
    plan.notes.forEach((text) => note(opening, `<${tag}> → <${partNames[replacement.element]}>: ${text}`));
    // The tags are no longer reads of the removed exports: their import goes once nothing else reads them.
    dropped.push(tagRange(opening.field('name')), tagRange(closing.field('name')), ...items.flatMap((item) => [item.opening.name, item.closingName].filter(Boolean)));
    for (const part of replacementParts(replacement)) {
      if (![...importedLocals.values()].includes(part)) {
        const list = addedListOf(info, part);
        if (!list.includes(part)) {
          list.push(part);
        }
      }
    }
  }

  // ------------------------------------------------------------------------- removed exports

  // Removed exports still read outside the attributes migrated above: no automatic answer, mark each read.
  // A removed component used as JSX is marked once, on its outermost element, in a form JSX accepts.
  const reads = new Map();
  const markedElements = [];
  // `Switch.Item` is a part of Switch: the root of a JSX tag name is the export it reads.
  const tagRoot = (element) => element?.field('name')?.text().split('.')[0];
  const JSX_TAGS = ['jsx_opening_element', 'jsx_self_closing_element', 'jsx_closing_element'];
  // A removed string enum (its v19 values in `inline`) that feeds the app's own code: its reads become the
  // literals they stood for, so the code keeps compiling; a read with no literal form stays marked.
  const enumQuote = importStatements[0] ? quoteOf(importStatements[0].statement.field('source')) : '\'';
  const enumLiteral = (value) => `${enumQuote}${value}${enumQuote}`;
  const inlineOf = (node, rule) => {
    const values = rule.inline;
    if (!values) {
      return null;
    }
    const parent = node.parent();
    if (Array.isArray(values)) {
      // `MODAL_COLOR.critical`, `MODAL_COLOR['critical']`, the type `MODAL_COLOR.critical`.
      const key = parent?.kind() === 'member_expression' && sameRange(parent.field('object'), node) ? parent.field('property')?.text()
        : parent?.kind() === 'subscript_expression' && sameRange(parent.field('object'), node) ? stringValue(parent.field('index'))
          : parent?.kind() === 'nested_type_identifier' && sameRange(parent.child(0), node) ? parent.children().at(-1).text() : null;
      if (key) {
        return values.includes(key) ? { node: parent, text: enumLiteral(key) } : null;
      }
      // The type `ModalColor` or `MODAL_COLOR`: the union of its values.
      if (node.kind() !== 'type_identifier') {
        return null;
      }
      // Bare where the union is the whole type (`color?: ModalColor`, `type T = ModalColor`, a union member), in parentheses elsewhere (`ModalColor[]`).
      const union = values.map(enumLiteral).join(' | ');
      const bare = values.length === 1 || ['type_annotation', 'type_alias_declaration', 'union_type', 'type_arguments'].includes(parent?.kind());
      return { node, text: bare ? union : `(${union})` };
    }
    // `MODAL_COLORS`: the list of the values, read-only as the v19 one.
    return node.kind() === 'identifier' && parent?.kind() !== 'typeof_type' ? { node, text: `([${values.list.map(enumLiteral).join(', ')}] as const)` } : null;
  };
  for (const [local, nodes] of references) {
    const rule = localExports.get(local)?.rule;
    let kept = nodes.filter((node) => !within(dropped, node));
    if (rule?.removed && rule.inline) {
      kept = kept.filter((node) => {
        const inline = !within(flagged, node) && inlineOf(node, rule);
        if (inline) {
          replace(inline.node, inline.text, `${inline.node.text()} → ${inline.text} (removed in v${mapping.to}: the value it stood for)`);
        }
        return !inline;
      });
    }
    reads.set(local, { kept: kept.length, total: nodes.length });
    if (!rule?.removed) {
      continue;
    }
    for (const node of kept) {
      let parent = node.parent();
      // `<Switch.Item>`: the marker goes on the element, never inside its tag.
      if (parent?.kind() === 'member_expression' && sameRange(parent.field('object'), node) && JSX_TAGS.includes(parent.parent()?.kind())) {
        parent = parent.parent();
      }
      if (parent?.kind() === 'jsx_closing_element') {
        continue;
      }
      if (['jsx_opening_element', 'jsx_self_closing_element'].includes(parent?.kind())) {
        const element = parent.kind() === 'jsx_opening_element' ? parent.parent() : parent;
        const insideRemoved = element.ancestors().some((ancestor) => ancestor.kind() === 'jsx_element' && localExports.get(tagRoot(ancestor.child(0)))?.rule.removed);
        if (within(markedElements, element) || insideRemoved) {
          continue;
        }
        markedElements.push(rangeOf(element));
        mark(element, noEquivalent(`<${parent.field('name').text()}>`, rule.hint), { jsx: element.parent()?.kind() === 'jsx_element' });
        continue;
      }
      if (within(flagged, node)) {
        continue;
      }
      const memberNode = parent?.kind() === 'member_expression' && sameRange(parent.field('object'), node) ? parent.field('property')
        : parent?.kind() === 'nested_type_identifier' && sameRange(parent.child(0), node) ? parent.children().at(-1) : null;
      const member = memberNode && memberRule(rule, memberNode.text());
      if (member) {
        mark(node, noEquivalent(`${local}.${memberNode.text()}`, member.hint));
      } else {
        mark(node, noEquivalent(local, rule.hint));
      }
    }
  }
  rewriteImports(reads);

  return apply();
}

export { TODO, transformSource };
