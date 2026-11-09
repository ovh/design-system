/*
 * The package.json pass of the CLI: what ODS v20 changes in the dependencies of an app. Each rule
 * was checked against the package.json files of ods-react, ods-recipes and the docs on the v20 stack:
 *
 * - ods-react 20 highlights code with Shiki 4 (`shiki`, `@shikijs/*` 4.3.0); v19.7.3 was on ^3.11.0.
 *   The languages and themes an app imports from `@shikijs/*` must come from the same major.
 * - ods-recipes 19 installed `tailwindcss` (3.4.18) as a dependency; ods-recipes 20 only has it in
 *   its devDependencies, so an app that used Tailwind through it loses it.
 * - `@ovhcloud/ods-storybook` is replaced by `@ovhcloud/ods-docs` (a Vite app, not a Storybook build).
 * - On React 19, a single `@types/react` major (the migration guide's "overrides" section).
 * - ods-react 20 is built with Vite 8, whose default target is Chrome / Edge 111, Firefox 114 and
 *   Safari 16.4 (Vite 6 in v19): an app that supports older browsers must transpile it.
 * - `react-components-gallery.txt` and `react-components-icon--gallery.txt` are no longer in the
 *   llms documentation.
 * - The ODS packages are not bumped: a run reads the major of the code from `@ovhcloud/ods-react`, so
 *   bumping first would make a second run read the code as v20. Each 19 range gets a reminder.
 * - `@ovhcloud/ods-tailwind` (v20) maps the Tailwind v4 utilities to the semantic tokens: an app on
 *   Tailwind is told about it, since the ODS keys of its v19 configuration no longer apply (BC-30).
 * - The ODS 18 components (`@ovhcloud/ods-components` 18, and `@ovh-ux/manager-react-components` 2+,
 *   built on them) declare no tokens: they read the `--ods-*` names of `@ovhcloud/ods-themes` 18 / 19 (76 of
 *   the 80 names ods-components 18.6.2 reads). The v20 theme has none of them, so bumping ods-themes
 *   to 20 leaves those components without colours unless the v19 theme stays loaded. ODS 17 brings its
 *   own theme (`@ovhcloud/ods-theme-blue-jeans`), which the bump leaves in place.
 *
 * The file is edited in place, value by value, so its formatting and key order are kept.
 */

const DEPENDENCY_BLOCKS = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies'];
const SHIKI = /^@shikijs\//;
const SHIKI_RANGE = '^4.3.0';
const TAILWIND_RANGE = '^3.4.18';
const RECIPES = '@ovhcloud/ods-recipes';
const STORYBOOK = '@ovhcloud/ods-storybook';
const DOCS = '@ovhcloud/ods-docs';
const DOCS_RANGE = '^20.0.0';
const TYPES = ['@types/react', '@types/react-dom'];
const TYPES_RANGE = '^19';
const OVERRIDES = { npm: ['overrides'], pnpm: ['pnpm', 'overrides'], yarn: ['resolutions'] };
const VITE_TARGET = 'Chrome 111, Edge 111, Firefox 114, Safari 16.4';
const ODS_PACKAGES = ['@ovhcloud/ods-react', '@ovhcloud/ods-themes', RECIPES];
const ODS_RANGE = '^20.0.0';
const ODS_TAILWIND = '@ovhcloud/ods-tailwind';
const THEMES = '@ovhcloud/ods-themes';
// The packages built on the ODS 18 components, by the major from which they read the ods-themes tokens
// (manager-react-components 1 is on ODS 17 and its blue-jeans theme).
const ODS18_READERS = { '@ovhcloud/ods-components': 18, '@ovh-ux/manager-react-components': 2 };
const THEMES_V19_ALIAS = '@ovhcloud/ods-themes-v19';
const LLMS_REMOVED = {
  'react-components-gallery.txt': 'removed from the llms documentation in v20: read ods-components-index.txt (component list) or llms-index.json (machine-readable index)',
  'react-components-icon--gallery.txt': 'removed from the llms documentation in v20: read react-components-icon--documentation.txt',
};
const LLMS_PATTERN = new RegExp(Object.keys(LLMS_REMOVED).map((name) => name.replace(/[.*+?^${}()|[\]\\-]/g, '\\$&')).join('|'), 'g');

/* ------------------------------------------------------------------------- JSON with positions */

class JsonSyntaxError extends SyntaxError {}

/** Parses JSON text into a tree that keeps the offsets of every value and key. */
function parseJson(text) {
  let index = 0;
  const fail = (what) => {
    throw new JsonSyntaxError(`invalid JSON: ${what} at line ${lineAt(text, index)}`);
  };
  const space = () => {
    while (/\s/.test(text[index] ?? '')) index++;
  };
  const string = () => {
    const start = index;
    index++;
    while (index < text.length && text[index] !== '"') {
      index += text[index] === '\\' ? 2 : 1;
    }
    if (text[index] !== '"') fail('unterminated string');
    index++;
    return { end: index, start, type: 'string', value: JSON.parse(text.slice(start, index)) };
  };
  const value = () => {
    space();
    const start = index;
    const char = text[index];
    if (char === '{') {
      index++;
      const members = [];
      space();
      if (text[index] === '}') {
        index++;
        return { end: index, members, start, type: 'object' };
      }
      for (;;) {
        space();
        if (text[index] !== '"') fail('expected a key');
        const key = string();
        space();
        if (text[index++] !== ':') fail('expected ":"');
        members.push({ key, value: value() });
        space();
        if (text[index] === ',') {
          index++;
          continue;
        }
        if (text[index++] !== '}') fail('expected "}"');
        return { end: index, members, start, type: 'object' };
      }
    }
    if (char === '[') {
      index++;
      const items = [];
      space();
      if (text[index] === ']') {
        index++;
        return { end: index, items, start, type: 'array' };
      }
      for (;;) {
        items.push(value());
        space();
        if (text[index] === ',') {
          index++;
          continue;
        }
        if (text[index++] !== ']') fail('expected "]"');
        return { end: index, items, start, type: 'array' };
      }
    }
    if (char === '"') {
      return string();
    }
    const literal = /^(?:true|false|null|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/.exec(text.slice(index, index + 64));
    if (!literal) fail(`unexpected ${char === undefined ? 'end of file' : `"${char}"`}`);
    index += literal[0].length;
    return { end: index, start, type: 'literal', value: JSON.parse(literal[0]) };
  };
  const root = value();
  space();
  if (index < text.length) fail('trailing content');
  return root;
}

const member = (object, key) => object?.type === 'object' ? object.members.find((entry) => entry.key.value === key) : undefined;
const lineAt = (text, index) => text.slice(0, index).split('\n').length;

/* ------------------------------------------------------------------------- versions */

/**
 * The major of the lowest version a range accepts (`^19.1.0` → 19, `>=18 <20` → 18,
 * `^18 || ^19` → 18), without `semver`. Null for what is not a version range (`workspace:*`,
 * `latest`, a URL, `*`).
 */
function minMajor(range) {
  if (typeof range !== 'string') {
    return null;
  }
  const text = range.trim().replace(/^npm:(?:@[^/]+\/)?[^@]+@/, '').replace(/^workspace:/, '');
  if (/^[a-z+]+:/i.test(text) || text.includes('/')) {
    return null;
  }
  let min = null;
  for (const part of text.split('||')) {
    const comparators = [...part.matchAll(/(<=|>=|<|>|=|~>|~|\^)?\s*v?(\d+|[xX*])(?:\.(?:\d+|[xX*]))*(?:-[\w.]+)?/g)];
    const lower = comparators.find(([, operator]) => operator !== '<' && operator !== '<=');
    if (!lower || !/^\d+$/.test(lower[2])) {
      continue;
    }
    const major = Number(lower[2]);
    min = min === null ? major : Math.min(min, major);
  }
  return min;
}

/** The dependency blocks of a package.json tree, as `[blockName, objectNode]`. */
function blocksOf(root) {
  return DEPENDENCY_BLOCKS.map((name) => [name, member(root, name)?.value]).filter(([, node]) => node?.type === 'object');
}

/** The range declared for `name` in any dependency block, or undefined. */
function declared(root, name) {
  for (const [, block] of blocksOf(root)) {
    const entry = member(block, name);
    if (entry?.value.type === 'string') {
      return entry.value.value;
    }
  }
  return undefined;
}

/* ------------------------------------------------------------------------- edits */

/** The indentation of the members of an object node, read from the text (two spaces when empty). */
function indentOf(text, object, fallback) {
  const first = object.members[0];
  if (first) {
    const lineStart = text.lastIndexOf('\n', first.key.start) + 1;
    return text.slice(lineStart, first.key.start);
  }
  return fallback;
}

function baseIndent(text, node) {
  const lineStart = text.lastIndexOf('\n', node.start) + 1;
  return /^\s*/.exec(text.slice(lineStart, node.start))[0];
}

/**
 * The edit that adds `entries` (`[[key, jsonValueText]]`) to an object node: after its last member,
 * or in place of `{}` when it is empty. Alphabetical blocks stay alphabetical.
 */
function addMembers(text, object, entries, eol) {
  const outer = baseIndent(text, object);
  const unit = object.members.length ? indentOf(text, object, `${outer}  `).slice(outer.length) || '  ' : '  ';
  const indent = `${outer}${unit}`;
  const render = ([key, value]) => `${JSON.stringify(key)}: ${value}`;
  const multiline = object.members.length === 0 || text.slice(object.start, object.end).includes('\n');
  if (object.members.length === 0) {
    return [{ end: object.end, start: object.start, text: `{${eol}${entries.map((entry) => indent + render(entry)).join(`,${eol}`)}${eol}${outer}}` }];
  }
  const keys = object.members.map((entry) => entry.key.value);
  const sorted = keys.every((key, i) => i === 0 || keys[i - 1].localeCompare(key) <= 0);
  const edits = [];
  for (const entry of entries) {
    const before = sorted ? object.members.find((existing) => existing.key.value.localeCompare(entry[0]) > 0) : undefined;
    if (before) {
      edits.push({ end: before.key.start, start: before.key.start, text: `${render(entry)},${multiline ? eol + indent : ' '}` });
    } else {
      const last = object.members.at(-1);
      edits.push({ end: last.value.end, start: last.value.end, text: `,${multiline ? eol + indent : ' '}${render(entry)}` });
    }
  }
  return edits;
}

/** Applies non-overlapping edits in one pass (linear in the size of the text). */
function applyEdits(text, edits) {
  const sorted = [...edits].sort((a, b) => a.start - b.start || a.end - b.end);
  const parts = [];
  let cursor = 0;
  for (const edit of sorted) {
    parts.push(text.slice(cursor, edit.start), edit.text);
    cursor = edit.end;
  }
  parts.push(text.slice(cursor));
  return parts.join('');
}

/* ------------------------------------------------------------------------- the pass */

/**
 * Migrates a package.json. `lockfile` is the package manager of the lockfile next to it (null when
 * there is none: a workspace member, or an app without lockfile); `hasTailwindConfig` says whether a
 * `tailwind.config.*` sits next to it; `reactMajor` is the React major of the workspace, for a root
 * package.json that does not declare React itself; `hasBrowserslistrc` flags a `.browserslistrc`;
 * `workspaceOverrides`: the names under `overrides` of a pnpm-workspace.yaml next to it (null: none).
 */
function transformManifest(text, { file = 'package.json', hasBrowserslistrc = false, hasTailwindConfig = false, lockfile = null, reactMajor = null, workspaceOverrides = null } = {}) {
  const report = { changes: [], notes: [], output: text };
  const root = parseJson(text);
  if (root.type !== 'object') {
    return report;
  }
  const eol = text.includes('\r\n') ? '\r\n' : '\n';
  const edits = [];
  const change = (index, message) => report.changes.push({ line: lineAt(text, index), message });
  const note = (index, message) => report.notes.push({ line: lineAt(text, index), message });

  // Shiki 4: the languages and themes passed to ODS come from the same major as its highlighter.
  for (const [, block] of blocksOf(root)) {
    for (const entry of block.members) {
      const name = entry.key.value;
      const major = minMajor(entry.value.value);
      if (SHIKI.test(name) && entry.value.type === 'string' && major !== null && major < 4) {
        edits.push({ end: entry.value.end, start: entry.value.start, text: JSON.stringify(SHIKI_RANGE) });
        change(entry.value.start, `${name} ${entry.value.value} → ${SHIKI_RANGE} (ods-react 20 highlights code with Shiki 4: languages and themes come from the same major)`);
      }
    }
  }

  // ods-recipes no longer brings tailwindcss.
  if (declared(root, RECIPES) !== undefined && declared(root, 'tailwindcss') === undefined) {
    const recipes = blocksOf(root).map(([, block]) => member(block, RECIPES)).find(Boolean);
    if (hasTailwindConfig) {
      const devDependencies = member(root, 'devDependencies')?.value;
      if (devDependencies?.type === 'object') {
        edits.push(...addMembers(text, devDependencies, [['tailwindcss', JSON.stringify(TAILWIND_RANGE)]], eol));
      } else {
        edits.push(...addMembers(text, root, [['devDependencies', `{ "tailwindcss": ${JSON.stringify(TAILWIND_RANGE)} }`]], eol));
      }
      change(recipes.key.start, `devDependencies: tailwindcss ${TAILWIND_RANGE} added (ods-recipes 20 no longer installs it, and a tailwind.config sits next to this package.json)`);
    } else {
      note(recipes.key.start, `${RECIPES} 20 no longer installs tailwindcss: if this app uses Tailwind (a tailwind.config, @tailwind or @apply), add "tailwindcss": "${TAILWIND_RANGE}" to its devDependencies`);
    }
  }

  // ods-storybook → ods-docs.
  for (const [blockName, block] of blocksOf(root)) {
    const entry = member(block, STORYBOOK);
    if (!entry) {
      continue;
    }
    if (member(block, DOCS)) {
      note(entry.key.start, `${blockName}: ${STORYBOOK} is replaced by ${DOCS}, already declared: remove ${STORYBOOK}`);
      continue;
    }
    edits.push({ end: entry.key.end, start: entry.key.start, text: JSON.stringify(DOCS) });
    if (entry.value.type === 'string' && (minMajor(entry.value.value) ?? 20) < 20) {
      edits.push({ end: entry.value.end, start: entry.value.start, text: JSON.stringify(DOCS_RANGE) });
    }
    change(entry.key.start, `${blockName}: ${STORYBOOK} → ${DOCS} ${DOCS_RANGE}`);
    note(entry.key.start, `${DOCS} is a Vite app, not a Storybook build: review any script that copies files out of the package`);
  }
  const scripts = member(root, 'scripts')?.value;
  for (const entry of scripts?.type === 'object' ? scripts.members : []) {
    if (entry.value.type === 'string' && entry.value.value.includes(STORYBOOK)) {
      note(entry.value.start, `scripts.${entry.key.value} reads ${STORYBOOK}: it is ${DOCS} in v20, and its dist is a Vite app`);
    }
  }

  // A single @types/react major on React 19.
  const ownReact = minMajor(declared(root, 'react'));
  const react = ownReact ?? reactMajor;
  if (react !== null && react >= 19) {
    const majors = Object.fromEntries(TYPES.map((name) => [name, minMajor(declared(root, name))]));
    for (const name of TYPES) {
      if (majors[name] !== null && majors[name] < 19) {
        const entry = blocksOf(root).map(([, block]) => member(block, name)).find(Boolean);
        note(entry.value.start, `${name} ${entry.value.value} on React ${react}: bump it to ${TYPES_RANGE} (both type packages share the React major)`);
      }
    }
    const path = lockfile && !(lockfile === 'pnpm' && workspaceOverrides) ? OVERRIDES[lockfile] : null;
    if (lockfile === 'pnpm' && workspaceOverrides) {
      // pnpm also reads `overrides` from pnpm-workspace.yaml: where the workspace keeps them, the types go there too.
      const wanted = TYPES.filter((name) => !workspaceOverrides.includes(name));
      if (wanted.length > 0) {
        note(member(root, 'name')?.value.start ?? root.start, `React ${react}: your pnpm-workspace.yaml declares overrides: add ${wanted.map((name) => `"${name}": "${TYPES_RANGE}"`).join(' and ')} there, so that every package of the install uses the same React ${react} types (two versions break the JSX types of the ODS components)`);
      }
    } else if (path) {
      let parent = root;
      let missing = [];
      for (const [i, key] of path.entries()) {
        const found = member(parent, key)?.value;
        if (found?.type !== 'object') {
          missing = path.slice(i);
          break;
        }
        parent = found;
      }
      const wanted = TYPES.filter((name) => missing.length > 0 || !member(parent, name));
      if (wanted.length > 0) {
        const values = `{ ${wanted.map((name) => `${JSON.stringify(name)}: ${JSON.stringify(TYPES_RANGE)}`).join(', ')} }`;
        const value = missing.slice(1).reduceRight((inner, key) => `{ ${JSON.stringify(key)}: ${inner} }`, values);
        const entries = missing.length > 0 ? [[missing[0], value]] : wanted.map((name) => [name, JSON.stringify(TYPES_RANGE)]);
        edits.push(...addMembers(text, parent, entries, eol));
        change(parent === root ? root.end - 1 : parent.start, `${path.join('.')}: ${wanted.join(', ')} ${TYPES_RANGE} added, so that every package of the install uses the same React ${react} types, even one that brings older ones with it (two versions break the JSX types of the ODS components)`);
      }
    } else if (ownReact !== null || declared(root, '@types/react') !== undefined) {
      note(member(root, 'name')?.value.start ?? root.start, `React ${react}: make sure a single @types/react version is installed (two versions break the JSX types of the ODS components): \`overrides\` for npm, \`resolutions\` for yarn, \`pnpm.overrides\` or the \`overrides\` of pnpm-workspace.yaml for pnpm, at the root of the workspace`);
    }
  }

  // The ODS packages: bumped by hand once the diff is reviewed (a run before the bump reads the code as v19).
  // One point per package.json, on the first of its ODS 19 ranges.
  const odsRanges = blocksOf(root).flatMap(([, block]) => ODS_PACKAGES.map((name) => member(block, name)))
    .filter((entry) => entry?.value.type === 'string' && minMajor(entry.value.value) === 19)
    .sort((a, b) => a.value.start - b.value.start);
  if (odsRanges.length) {
    const names = odsRanges.map((entry) => `${entry.key.value} ${entry.value.value}`).join(', ');
    note(odsRanges[0].value.start, `${names}: bump ${odsRanges.length > 1 ? 'them' : 'it'} to ${ODS_RANGE} once you have reviewed the changes of ods-migrate, install, then run your type check (step 4 of MIGRATION.md). ods-migrate reads the ODS version of your code from @ovhcloud/ods-react: if you bump first, run it again with --from 19`);
  }

  // ODS 18 components read the tokens of the ods-themes 19 theme, which the v20 theme does not declare.
  const themes = declared(root, THEMES);
  const readers = blocksOf(root).flatMap(([, block]) => block.members)
    .filter((entry) => entry.value.type === 'string' && minMajor(entry.value.value) >= (ODS18_READERS[entry.key.value] ?? Infinity))
    .sort((a, b) => a.value.start - b.value.start);
  if (readers.length && minMajor(themes) === 19) {
    note(readers[0].value.start, `${readers.map((entry) => `${entry.key.value} ${entry.value.value}`).join(', ')}: ${readers.length > 1 ? 'these components read' : 'its components read'} the --ods-* tokens of the ${THEMES} 19 theme, and the v20 theme declares none of them: once ${THEMES} is on 20, they lose their colours. Keep the v19 theme loaded next to the v20 one (its CSS only declares --ods-* names on :root, none of them v20 names): add "${THEMES_V19_ALIAS}": "npm:${THEMES}@${themes}" and import '${THEMES_V19_ALIAS}/default/css' next to the v20 theme, then check those components on screen (step 4 of MIGRATION.md)`);
  }

  // Tailwind v4: the ODS keys of the v19 guide no longer apply; @ovhcloud/ods-tailwind maps the utilities (BC-30).
  // A v3 configuration with those keys is told by the CLI, which sees them.
  const tailwind = declared(root, 'tailwindcss');
  const odsMajor = minMajor(declared(root, '@ovhcloud/ods-react') ?? declared(root, '@ovhcloud/ods-themes'));
  if (tailwind !== undefined && (minMajor(tailwind) ?? 0) >= 4 && odsMajor === 19 && declared(root, ODS_TAILWIND) === undefined) {
    const entry = blocksOf(root).map(([, block]) => member(block, 'tailwindcss')).find(Boolean);
    note(entry.value.start, `tailwindcss ${tailwind}: ODS v20 ships ${ODS_TAILWIND}, the Tailwind v4 utilities on the ODS semantic tokens (bg-ods-surface-raised, rounded-ods-container) with no configuration to copy: add "${ODS_TAILWIND}": "${ODS_RANGE}", import it before the ODS theme, and remove the ODS keys of your @theme and the .vscode/tailwind.json of the v19 guide (BC-30, the Tailwind CSS guide)`);
  }

  // Browser targets.
  const browserslist = member(root, 'browserslist');
  if (browserslist || hasBrowserslistrc) {
    note(browserslist?.key.start ?? root.start, `${browserslist ? 'browserslist' : '.browserslistrc'}: ods-react 20 is built for ${VITE_TARGET} (Vite 8 defaults): if you support older browsers, transpile @ovhcloud/ods-react (Next transpilePackages, a babel-loader include on webpack, build.target on Vite)`);
  }

  report.notes.push(...scanLlmsUrls(text));
  report.output = edits.length ? applyEdits(text, edits) : text;
  for (const list of [report.changes, report.notes]) {
    list.sort((a, b) => a.line - b.line);
  }
  return report;
}

/** Notes for each reference to an llms documentation file that v20 removed. */
function scanLlmsUrls(text) {
  const notes = [];
  for (const match of text.matchAll(LLMS_PATTERN)) {
    notes.push({ line: lineAt(text, match.index), message: `${match[0]}: ${LLMS_REMOVED[match[0]]}` });
  }
  return notes;
}

export { JsonSyntaxError, applyEdits, minMajor, parseJson, scanLlmsUrls, transformManifest };
