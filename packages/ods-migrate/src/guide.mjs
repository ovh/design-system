#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { attributeText, memberRule, resolveMapping } from './shared.mjs';
import { transformSource } from './transform.mjs';

const raw = JSON.parse(readFileSync(new URL('../mappings/v19-to-v20.json', import.meta.url), 'utf8'));
// The guide documents the default migration: the Aluminium look, without the pending entries.
const mapping = resolveMapping(raw);

const code = (text) => `\`${text}\``;
const list = (items, conjunction = 'and') => (items.length > 1 ? `${items.slice(0, -1).join(', ')} ${conjunction} ${items.at(-1)}` : items[0]);
// `color="information"`, `success` and `warning`: the prop is only repeated on the first value.
const valueList = (from, values) => list(values.map((value, index) => (index === 0 ? code(`${from}="${value}"`) : code(value))));
const attributes = (added) => list(Object.entries(added).map(([name, value]) => code(attributeText(name, value))));

/** The components that have a guide entry: the ones with an example (a component that `extends` another is listed under it). */
function guideComponents() {
  return Object.keys(mapping.components).filter((name) => mapping.components[name].example);
}

/** The bullet list of a component entry, without the before / after snippets. */
function guideBullets(component) {
  const { extends: base, props = {}, replacedBy, whenAbsent } = mapping.components[component];
  const lines = [];

  // A removed component that another one replaces: the element, its wrapper, each of its parts.
  if (replacedBy) {
    const added = Object.entries(replacedBy.add ?? {}).map(([name, value]) => ` ${attributeText(name, value)}`).join('');
    const parts = Object.entries(replacedBy.parts ?? {}).map(([from, to]) => `${code(`<${from}>`)} becomes ${code(`<${to}>`)}`);
    lines.push(`- ${code(`<${component}>`)} becomes ${code(`<${replacedBy.element}${added}>`)}, with a ${code(`<${replacedBy.wrap}>`)} around its items; ${list(parts)}. Its other props are kept.`);
    for (const prop of replacedBy.moveToParts ?? []) {
      lines.push(`- ${code(prop)}: ${replacedBy.element} has none, it is set on each ${code(`<${Object.values(replacedBy.parts)[0]}>`)}.`);
    }
    if (replacedBy.whenAbsent) {
      lines.push(`- Without ${list(replacedBy.whenAbsent.unless.map(code), 'or')}: ${replacedBy.whenAbsent.note}.`);
    }
  }

  for (const [from, rule] of Object.entries(props)) {
    const constant = rule.constant && mapping.exports[rule.constant];
    const values = Object.entries(rule.values ?? {});
    const orphans = values.filter(([, value]) => value === null).map(([value]) => value);

    if (rule.moveTo) {
      const { default: initial, key, prop } = rule.moveTo;
      const omitted = initial === undefined ? '' : `; ${code(`${from}={ ${JSON.stringify(initial)} }`)} is the default, so remove it`;
      lines.push(`- ${code(from)}: use ${code(`${prop}={{ ${key}: … }}`)}${omitted}.`);
      continue;
    }
    if (rule.coerce === 'string') {
      lines.push(`- ${code(from)} is a string: ${code(`${from}={ 42 }`)} becomes ${code(`${from}="42"`)}${rule.hint ? `; ${rule.hint}` : ''}.`);
      continue;
    }
    if (rule.todoUnless) {
      lines.push(`- ${valueList(from, rule.todoUnless.values)} without ${code(rule.todoUnless.attribute)}: ${rule.hint}.`);
      continue;
    }
    if (rule.stacking) {
      // The hint speaks to the reader of a marker: the guide has no comment to delete.
      lines.push(`- A ${code('zIndex')} between 99 and 1600 in ${code(from)}: ${rule.hint.replace(/, then delete this comment$/, '')}.`);
      continue;
    }
    if (rule.note && !rule.renameTo && !rule.remove) {
      lines.push(`- ${code(from)}: ${rule.note}.`);
      continue;
    }

    if (rule.remove) {
      lines.push(`- ${code(from)}${constant ? ` (or ${code(rule.constant)})` : ''} is removed${rule.always && rule.hint ? `: ${rule.hint}` : ''}.`);
      if (rule.always) {
        continue;
      }
      // Values migrated the same way share a line: `color="information"`, `neutral` and `primary`: remove the prop.
      const actions = new Map();
      for (const [oldValue, added] of values.filter(([, value]) => value !== null)) {
        const action = Object.keys(added).length > 0 ? `replace it with ${attributes(added)}` : 'remove the prop';
        actions.set(action, [...(actions.get(action) ?? []), oldValue]);
      }
      for (const [action, group] of actions) {
        lines.push(`- ${valueList(from, group)}: ${action}.`);
      }
      for (const [oldValue, added] of Object.entries(rule.v19Look?.values ?? {})) {
        lines.push(`- To keep the v19 look of ${code(`${from}="${oldValue}"`)}, add ${attributes(added)}.`);
      }
      if (orphans.length > 0) {
        lines.push(`- ${valueList(from, orphans)}: remove the prop${rule.hint ? ` and ${rule.hint}` : ''}.`);
      } else if (rule.hint) {
        lines.push(`- A computed ${code(from)}: ${rule.hint}.`);
      }
      continue;
    }

    lines.push(`- ${code(from)}${constant ? ` (or ${code(rule.constant)})` : ''}: use ${code(rule.renameTo)}${constant ? ` (or ${code(constant.renameTo)})` : ''}.`);
    for (const [oldValue, newValue] of values.filter(([, value]) => value !== null)) {
      lines.push(newValue === rule.dropDefault
        ? `- ${code(`${from}="${oldValue}"`)}: remove it, ${code(newValue)} is the v${mapping.to} default.`
        : `- ${code(`${from}="${oldValue}"`)}: use ${code(`${rule.renameTo}="${newValue}"`)}.`);
    }
    if (orphans.length > 0) {
      lines.push(`- ${valueList(from, orphans)} have **no** ${code(rule.renameTo)} equivalent${rule.hint ? `: ${rule.hint}` : ''}.`);
    }
  }

  // The default rendering that changed: the codemod keeps the v19 one only when the config asks for it.
  if (whenAbsent?.hint) {
    lines.push(`- Without ${list(whenAbsent.unless.map(code), 'or')}: ${whenAbsent.hint}.`);
  }

  // The components that take the props of this one (`extends`): one line, their own defaults are kept.
  const derived = Object.keys(mapping.components).filter((name) => mapping.components[name].extends === component);
  if (derived.length > 0) {
    const changes = Object.entries(props).filter(([, rule]) => rule.renameTo || rule.remove)
      .map(([from, rule]) => (rule.renameTo ? `${code(from)} becomes ${code(rule.renameTo)}` : `${code(from)} is removed`));
    lines.push(`- The components built on ${component} (${list(derived)}) take the same changes: ${list(changes)}. Their own default is kept.`);
  }
  if (base) {
    lines.push(`- Takes the same changes as ${base}.`);
  }

  // The exports of the component, minus the constants already listed with their prop.
  const names = mapping.components[component].exports
    ?? Object.keys(mapping.exports).filter((name) => name.toUpperCase().startsWith(component.toUpperCase()));
  const isPropConstant = (name) => Object.values(props).some((rule) => rule.constant === name);
  const exports = names.filter((name) => mapping.exports[name] && !Object.values(props).some((rule) => rule.constant === name && !rule.remove))
    .map((name) => [name, mapping.exports[name]]);
  for (const [name, rule] of exports.filter(([, rule]) => !rule.renameTo && !rule.removed)) {
    for (const member of Object.keys(rule.members ?? {})) {
      lines.push(`- ${code(`${name}.${member}`)}: use ${code(`${name}.${memberRule(rule, member).to}`)}.`);
    }
  }
  const renamed = exports.filter(([, rule]) => rule.renameTo);
  if (renamed.length > 0) {
    lines.push(`- ${list(renamed.map(([name]) => code(name)))}: use ${list(renamed.map(([, rule]) => code(rule.renameTo)))}.`);
  }
  for (const [name, rule] of Object.entries(mapping.exports).filter(([name, rule]) => rule.note && (names.includes(name) || isPropConstant(name)))) {
    lines.push(`- ${code(rule.renameTo ?? name)} ${rule.note}.`);
  }
  const removed = exports.filter(([, rule]) => rule.removed);
  if (removed.length > 0) {
    const hint = removed.find(([, rule]) => rule.hint)?.[1].hint;
    lines.push(`- ${list(removed.map(([name]) => code(name)))} ${removed.length > 1 ? 'are' : 'is'} removed${hint ? `; where your code still reads them, ${hint}` : ''}.`);
    for (const [name, rule] of removed.filter(([, rule]) => rule.hint && rule.hint !== hint)) {
      lines.push(`- ${code(name)}: ${rule.hint}.`);
    }
    for (const [name, rule] of removed) {
      for (const member of Object.keys(rule.members ?? {})) {
        const { hint: memberHint } = memberRule(rule, member);
        if (memberHint && memberHint !== rule.hint) {
          lines.push(`- ${code(`${name}.${member}`)}: ${memberHint}.`);
        }
      }
    }
  }

  return lines;
}

/**
 * Prints the migration guide entry of a component. The "after" snippet is the codemod output on
 * the "before" one, so the guide can never disagree with the tooling. A component without an
 * example gets its bullet list only.
 */
function guideEntry(component) {
  const { example } = mapping.components[component];
  const lines = [`<Heading label="${component}" level={ 3 } />`, '', ...guideBullets(component)];
  if (!example) {
    return lines.join('\n');
  }

  const imports = `import { ${[...example.imports].sort().join(', ')} } from '${mapping.package}';`;
  const before = `${imports}\n\n${example.before}\n`;
  // Sibling JSX at the top level is not valid TSX: run the codemod on it inside a fragment.
  const jsx = example.before.startsWith('<');
  const source = jsx ? `${imports}\n\n<>\n${example.before}\n</>;\n` : before;
  const output = transformSource(source, mapping, `${component}.tsx`).output;
  const after = jsx ? output.replace(/\n<>\n([\s\S]*)\n<\/>;\n$/, '\n$1\n') : output;
  lines.push('', '**before**', '```tsx', before.trimEnd(), '```', '', '**after**', '```tsx', after.trimEnd(), '```');

  return lines.join('\n');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const components = process.argv.slice(2).length ? process.argv.slice(2) : guideComponents();
  console.log(components.map(guideEntry).join('\n\n'));
}

export { guideBullets, guideComponents, guideEntry };
