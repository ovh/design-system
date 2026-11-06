import { Lang, parse } from '@ast-grep/napi';
import { TODO, followsMarker, inlineMarker, markerMessage } from './shared.mjs';

/*
 * The paths into `@ovhcloud/ods-themes` (BC-31, BC-32, BC-33 and the import side of BC-06 of
 * BREAKING-CHANGES-V20.md), in every kind of file the CLI reads: stylesheets (CSS, SCSS, Less,
 * indented Sass), HTML and scripts (imports, requires and the strings of build configs).
 *
 * - BC-31: the base64 bundle `@ovhcloud/ods-themes/default` is removed: it becomes `default/css`
 *   plus `default/fonts`, the two imports the migration guide gives (the same theme and fonts).
 * - BC-32: the files behind the exports moved: a path into `dist/default` or `src/default` is
 *   rewritten with the table of BC-32. A CDN URL pinned to 19 moves to 20 with its path, since the
 *   v20 path does not exist in 19. The Sass variables of `src/default/_variables` are split: the
 *   breakpoints are read from `@ovhcloud/ods-react/style`, the kept palette from
 *   `src/aluminium/_variables`, and the import is marked while removed ones are still read.
 * - BC-33: the JavaScript entry point (`ODS_THEME`, `ODS_THEMES`) is removed: marked, or dropped
 *   when the file no longer uses what it imports.
 * - BC-06: the tokens JSON keeps its path but none of its keys: its import is marked, and so is a
 *   v19 token prefix used to filter names (`k.startsWith('--ods-color-')`).
 *
 * The pass runs after the token pass, on its output: the Sass namespaces it reads are the ones the
 * token pass left. Each function returns `{ output, changes, todos, notes }` with lines of its input.
 */

const QUOTE_END = '(?=[\'"`])';
/* BC-31: the specifier of the bundle, alone in its string (with the webpack `~` or the Sass `pkg:` prefix). */
const BUNDLE = /^((?:~|pkg:)?)@ovhcloud\/ods-themes\/default$/;
const BUNDLE_IN_TEXT = new RegExp(`ods-themes\\/default${QUOTE_END}`);
/* BC-33: the JavaScript entry point. */
const ENTRY = '@ovhcloud/ods-themes';
/* BC-32: a file of `dist/default` or `src/default`, with the version of a CDN URL. */
const MOVED = /((?:@ovhcloud\/)?ods-themes)(@[^/\s'"`)]+)?\/(dist|src)\/default\/(_?variables|index|fonts|default|tokens)(\.(?:s?css|json))?(?![\w.-])/g;
/* The folders themselves (a copy config, a glob): gone, with no single file to point at. */
const FOLDER = /ods-themes(?:@[^/\s'"`)]+)?\/(?:dist|src)\/default(?:\/\*{0,2})?(?=['"`)\s,]|$)/;
/* The font folder of BC-13, already renamed by the token pass: a CDN version below 20 has no such folder. */
const FONT_CDN = /(ods-themes)@([^/\s'"`)]+)(\/(?:dist\/)?assets\/fonts\/source-sans-3)(?![\w-])/g;
/* The tokens JSON (BC-06), by its export path or one of its files. */
const TOKENS_JSON = /ods-themes(?:@[^/]+)?\/(?:default\/tokens|dist\/default\/tokens\.json|dist\/aluminium\/light\.tokens\.json)$/;
/* A v19 token prefix: the start of a family BC-01 to BC-03 remove. */
const V19_PREFIX = /^--ods-(?:theme|color|border-radius|border-width|font-family|form-element|outline)(?:-[a-z0-9-]*)?$/;

/* BC-32, by folder and v19 file: the v20 files (without extension), two when BC-31 split the bundle. */
const MOVES = {
  dist: { default: ['aluminium/light', 'fonts-base64'], fonts: ['fonts'], index: ['aluminium/light'], tokens: ['aluminium/light.tokens'] },
  src: { default: ['aluminium/light', 'fonts-base64'], fonts: ['fonts'], index: ['aluminium/light'] },
};
/* The export paths of the same files, for a context that resolves the package exports (`import`, `pkg:`). */
const EXPORTS = {
  dist: { default: ['default/css', 'fonts-base64'], fonts: ['default/fonts'], index: ['default/css'], tokens: ['default/tokens'] },
  src: { default: ['default/css', 'fonts-base64'], fonts: ['default/fonts'], index: ['default/css'] },
};

/* The Sass variables of `src/default/_variables` that v20 still has, in `src/aluminium/_variables` (master). */
const KEPT_PALETTE = /^\$ods-palette-(?:(?:blue|gray|navy|red|green|orange)-(?:50|[1-9]00)|white|black|decorative-(?:alpha|beta|new|promotion)|opacity-(?:15|20|25|50|75))$/;
/* The breakpoints, exported by `@ovhcloud/ods-react/style` under the same names (BC-05). */
const BREAKPOINT = /^\$ods-breakpoint-(?:sub-mobile|mobile|tablet|desktop|large-screen|widescreen)$/;
/* The families of `src/default/_variables` in v19: a bare read of one comes from that file. */
const THEME_FAMILY = /^\$ods-(?:color|palette|border-radius|border-width|breakpoint|form-element|outline|transition)-/;

const FONTS_HINT = 'use @ovhcloud/ods-themes/fonts-base64 instead of default/fonts if your setup cannot serve the font files';
const BUNDLE_HINT = `@ovhcloud/ods-themes/default is removed in v20 (BC-31): load @ovhcloud/ods-themes/default/css and @ovhcloud/ods-themes/default/fonts instead (${FONTS_HINT})`;
const FOLDER_HINT = 'this folder of @ovhcloud/ods-themes is gone in v20 (BC-32): the theme is dist/aluminium/light.css, the fonts dist/fonts.css (or dist/fonts-base64.css), the tokens dist/aluminium/light.tokens.json, the Sass sources src/aluminium/light.scss and src/fonts.scss; prefer the export paths (@ovhcloud/ods-themes/default/css, /default/fonts)';
const VARIABLES_HINT = 'the Sass variables of @ovhcloud/ods-themes/src/default are gone in v20 (BC-05, BC-32): the breakpoints are in @ovhcloud/ods-react/style, the palette variables that v20 keeps in @ovhcloud/ods-themes/src/aluminium/variables, the others are removed (read the CSS custom properties instead): point this at what the files that read it still use';
const ENTRY_HINT = '@ovhcloud/ods-themes has no JavaScript entry point in v20: ODS_THEME and ODS_THEMES are removed (BC-33). Write the theme names instead (ODS_THEME.default → \'default\'; the themes are \'default\', \'aluminium-dark\', \'blue-jeans\' and \'blue-jeans-dark\', each loaded through @ovhcloud/ods-themes/<theme>/css), then remove this import';
const TOKENS_HINT = 'the tokens JSON of @ovhcloud/ods-themes keeps its path but none of its keys in v20 (BC-06): the names are --ods-semantic-* and --ods-palette-*, `root` gives resolved values and the var() references are in the new `refs`: check every read of it';

const escapeRegExp = (text) => text.replace(/[$.*+?^{}()|[\]\\]/g, '\\$&');

function lineIndex(source) {
  const starts = [0];
  for (let i = source.indexOf('\n'); i >= 0; i = source.indexOf('\n', i + 1)) starts.push(i + 1);
  return (index) => {
    let low = 0;
    let high = starts.length - 1;
    while (low < high) {
      const middle = (low + high + 1) >> 1;
      if (starts[middle] <= index) low = middle;
      else high = middle - 1;
    }
    return low + 1;
  };
}

const emptyReport = (output) => ({ changes: [], notes: [], output, todos: [] });

/** The version of a CDN URL once its path is a v20 one: `19.7.3` → `20.0.0`, `19` or `^19.2` → `20`; null when it is 20 already or not a number. */
function bumpVersion(version) {
  const major = /^[\^~=v]*(\d+)(?:[.\d]*)$/.exec(version)?.[1];
  if (major === undefined || Number(major) >= 20) {
    return null;
  }
  return /^\d+\.\d+\.\d+$/.test(version) ? '20.0.0' : '20';
}

/*
 * The BC-32 rewrite of every moved file in `text`. `pick` is the target taken for a file that is two
 * files in v20; `exportsOk` that the text is a bare specifier resolved through the package exports.
 * Returns the text, the changes, the notes (a CDN version moved), and what it could not rewrite.
 */
function movePaths(text, { exportsOk = false, pick = 0 } = {}) {
  const result = { changes: [], folder: FOLDER.test(text), notes: [], split: false, text, variables: false };
  result.text = text.replace(MOVED, (match, pkg, version = '', folder, file, ext = '', offset) => {
    if (file.endsWith('variables')) {
      result.variables = folder === 'src' || result.variables;
      return match;
    }
    const bare = exportsOk && offset === text.indexOf('@ovhcloud/ods-themes/') && /^(?:~|pkg:)?$/.test(text.slice(0, offset)) && !version;
    const targets = (bare ? EXPORTS : MOVES)[folder]?.[file];
    if (!targets) {
      return match;
    }
    if (targets.length > 1) result.split = true;
    const bumped = version ? bumpVersion(version.slice(1)) : null;
    const target = targets[Math.min(pick, targets.length - 1)];
    const to = bare ? `${pkg}/${target}` : `${pkg}${bumped ? `@${bumped}` : version}/${folder}/${target}${ext}`;
    if (pick === 0) {
      result.changes.push(`${match} → ${bare ? targets.map((item) => `${pkg}/${item}`).join(' + ') : targets.map((item) => `${folder}/${item}${ext}`).join(' + ')} (BC-32${targets.length > 1 ? ', BC-31' : ''})`);
      if (bumped) result.notes.push(`${match}: the CDN URL moves to ${bumped} with the v20 path (its 19.x version has no such file): keep it in step with the @ovhcloud/ods-themes version you install (BC-32)`);
    }
    return to;
  });
  return result;
}

/** The font folder renamed by the token pass inside a URL pinned to 19 (BC-13, BC-32): its version moves to 20. */
function bumpFontUrls(text) {
  const notes = [];
  const output = text.replace(FONT_CDN, (match, pkg, version, rest) => {
    const bumped = bumpVersion(version);
    if (!bumped) return match;
    notes.push(`${pkg}@${version}${rest}: the source-sans-3 font folder only exists from v20: the URL moves to ${bumped} (BC-13, BC-32): keep it in step with the @ovhcloud/ods-themes version you install`);
    return `${pkg}@${bumped}${rest}`;
  });
  return { notes, output };
}

/* ------------------------------------------------------------------------- stylesheets */

/* An `@import`, `@use` or `@forward` of one URL on its line: indent, rule, Less options, `url(`, quote, URL, `)`, rest, `;`, comment. */
const AT_RULE = /^([ \t]*)@(import|use|forward)([ \t]+(?:\([^)]*\)[ \t]*)?)(url\([ \t]*)?(['"])([^'"\n]+)\5([ \t]*\))?(.*?)(;?)([ \t]*(?:\/\/.*|\/\*.*\*\/)?[ \t]*)$/;

/* The module namespace of a Sass `@use` URL without `as`: its last segment, without `_` and extension. */
const defaultNamespace = (url) => url.split('/').pop().replace(/^_/, '').replace(/\.(?:s[ac]ss|css)$/, '');

/** The members read through a namespace (`ns.$x`, `ns.mixin(`), in the whole text. */
function namespaceReads(text, namespace) {
  const pattern = new RegExp(`(?<![\\w$.-])${escapeRegExp(namespace)}\\.(\\$[A-Za-z_][\\w-]*|[A-Za-z_][\\w-]*(?=\\())`, 'g');
  return [...new Set([...text.matchAll(pattern)].map((match) => match[1]))];
}

/** The theme variables a stylesheet reads without a namespace and does not declare itself. */
function bareReads(text) {
  const declared = new Set([...text.matchAll(/^[ \t]*(\$ods-[\w-]+)[ \t]*:/gm)].map((match) => match[1]));
  const names = [...text.matchAll(/(?<![\w$.-])(\$ods-[\w-]+)(?![\w-])(?![ \t]*:)/g)].map((match) => match[1]);
  return [...new Set(names)].filter((name) => THEME_FAMILY.test(name) && !declared.has(name));
}

/** `@ovhcloud/ods-react/style` written the way the ods-themes URL was (`~`, `pkg:`, a node_modules path). */
function reactStyleUrl(url, ext) {
  const at = url.indexOf('ods-themes/');
  const before = url.slice(0, at);
  return /node_modules|^\.|^\//.test(before) ? `${before}ods-react/src/style/index${ext === '.scss' ? ext : ''}` : `${before}ods-react/style`;
}

/** True when the stylesheet already loads `@ovhcloud/ods-react/style` without a namespace (its breakpoints are there). */
const loadsReactStyle = (text) => /@import[ \t]+(?:url\()?['"][^'"]*ods-react\/(?:src\/)?style(?:\/index)?(?:\.scss)?['"]|@use[ \t]+['"][^'"]*ods-react\/(?:src\/)?style(?:\/index)?(?:\.scss)?['"][ \t]+as[ \t]+\*/.test(text);

/**
 * The path pass of a stylesheet. `kind`: css, scss, less or sass (the indented syntax: no `;`,
 * `//` markers). Line by line: an import of a moved file is rewritten, split or marked; any other
 * moved path (a url() of @font-face) is rewritten in place.
 */
function migrateStylePaths(source, kind = 'css') {
  const report = emptyReport(source);
  if (!source.includes('ods-themes')) {
    return report;
  }
  const lines = source.split('\n');
  const output = [];
  const renames = [];
  const comment = (indent, messages) => (kind === 'sass' ? `${indent}// ${TODO}: ${markerMessage(messages)}` : `${indent}/* ${TODO}: ${markerMessage(messages)} */`);
  const markedAbove = () => /^\s*(?:\/\*|\/\/)\s*TODO\(ods-v20\)/.test(output.at(-1) ?? '');
  const has = (pattern) => new RegExp(pattern).test(source);

  lines.forEach((rawLine, index) => {
    const line = index + 1;
    const cr = rawLine.endsWith('\r') ? '\r' : '';
    const text = cr ? rawLine.slice(0, -1) : rawLine;
    const mark = (indent, message) => {
      if (!markedAbove()) {
        output.push(`${comment(indent, [message])}${cr}`);
        report.todos.push({ line, message });
      }
    };
    // A comment (a marker of an earlier run names the paths too) is left as it is.
    if (!text.includes('ods-themes') || /^\s*(?:\/\/|\/\*|\*)/.test(text)) {
      output.push(rawLine);
      return;
    }
    const rule = AT_RULE.exec(text);
    if (!rule || /^\s*,/.test(rule[8]) || !rule[6].includes('ods-themes')) {
      // Any other path (a url() of @font-face, a comment): moved in place, what has two files is marked.
      const moved = movePaths(text);
      const fonts = bumpFontUrls(moved.text);
      moved.changes.forEach((message) => report.changes.push({ line, message }));
      [...moved.notes, ...fonts.notes].forEach((message) => report.notes.push({ line, message }));
      const indent = /^[ \t]*/.exec(text)[0];
      if (moved.split || moved.variables || moved.folder) {
        mark(indent, moved.folder ? FOLDER_HINT : moved.variables ? VARIABLES_HINT : `this file is two files in v20 (BC-31, BC-32): ${moved.text.match(MOVED)?.[0] ?? 'the theme'} and the base64 fonts (fonts-base64): load both`);
      }
      output.push(`${fonts.output}${cr}`);
      return;
    }
    const [, indent, name, options, open = '', quote, url, close = '', rest, semi, trail] = rule;
    const build = (to, tail = rest) => `${indent}@${name}${options}${open}${quote}${to}${quote}${close}${tail}${semi}${trail}${cr}`;
    const explicit = /^\s+as\s+([\w*-]+)/.exec(rest)?.[1];
    const namespace = name === 'use' ? (explicit ?? defaultNamespace(url)) : null;
    const bare = name === 'import' || namespace === '*';
    const withoutAlias = name === 'use' && explicit && explicit !== '*' ? rest.replace(/^\s+as\s+[\w-]+/, '') : rest;
    const reads = namespace && namespace !== '*' ? namespaceReads(source, namespace) : [];

    // BC-31: the base64 bundle becomes the theme and the font files, unless the file loads them already.
    const bundle = BUNDLE.exec(url);
    if (bundle) {
      if (reads.length) {
        mark(indent, `${BUNDLE_HINT}. This file reads ${reads.map((member) => `${namespace}.${member}`).join(', ')} through it, which it never exposed: remove those reads, then split this import`);
        output.push(rawLine);
        return;
      }
      const targets = [
        has(`ods-themes/default/css['"]`) ? null : `${bundle[1]}@ovhcloud/ods-themes/default/css`,
        has(`ods-themes/(?:default/fonts|fonts-base64)['"]`) ? null : `${bundle[1]}@ovhcloud/ods-themes/default/fonts`,
      ].filter(Boolean);
      targets.forEach((to) => output.push(build(to, withoutAlias)));
      report.changes.push({ line, message: targets.length
        ? `${url} → ${targets.join(' + ')} (BC-31: the bundle is removed; ${FONTS_HINT})`
        : `${url} removed (BC-31): the file already loads default/css and the fonts` });
      return;
    }

    const match = [...url.matchAll(MOVED)][0];
    if (!match) {
      if (FOLDER.test(url)) mark(indent, FOLDER_HINT);
      output.push(rawLine);
      return;
    }
    const [, , , folder, file, ext = ''] = match;

    // BC-05 + BC-32: the theme variables. Where the file still reads them says where the import goes.
    if (file.endsWith('variables') && folder === 'src') {
      if (kind === 'css' || name === 'forward') {
        // A plain CSS import of a Sass file, or a module that forwards it to others: what reads it is elsewhere.
        mark(indent, VARIABLES_HINT);
        output.push(rawLine);
        return;
      }
      const used = bare ? bareReads(source) : reads;
      const breakpoints = used.filter((member) => BREAKPOINT.test(member) && !(bare && loadsReactStyle(source)));
      const kept = used.filter((member) => KEPT_PALETTE.test(member));
      const removed = used.filter((member) => !BREAKPOINT.test(member) && !KEPT_PALETTE.test(member));
      if (removed.length) {
        const names = removed.map((member) => (bare ? member : `${namespace}.${member}`));
        mark(indent, `${url}: this file is gone in v20 (BC-32), and this file still reads ${names.join(', ')} from it, removed in v20 (BC-05): resolve their markers (read the CSS custom properties instead), then run ods-migrate again to move this import`);
        output.push(rawLine);
        return;
      }
      const palette = url.replace(/src\/default\/(_?)variables/, 'src/aluminium/$1variables');
      const react = reactStyleUrl(url, ext);
      const alias = bare ? rest : explicit ? rest : ` as ${namespace}${rest}`;
      // An `@import` is global: the stylesheets this file imports after it may read its variables too.
      if (name === 'import' && /@import[ \t]/.test(source.replace(text, ''))) {
        mark(indent, `${VARIABLES_HINT}. The stylesheets this file imports after it may read these variables too: check them, then point this import at what they all still use`);
        output.push(rawLine);
        return;
      }
      if (!breakpoints.length && !kept.length) {
        report.changes.push({ line, message: `${url} removed (BC-32): nothing in this file reads it any more` });
        return;
      }
      if (!breakpoints.length) {
        output.push(build(palette));
        report.changes.push({ line, message: `${url} → ${palette} (BC-32: the palette variables v20 keeps)` });
        return;
      }
      if (!kept.length) {
        output.push(build(react, alias));
        report.changes.push({ line, message: `${url} → ${react} (BC-05: the breakpoints are read from @ovhcloud/ods-react/style)` });
        return;
      }
      output.push(build(palette));
      if (bare) {
        output.push(build(react));
      } else {
        const taken = new Set([...source.matchAll(/@use[^;\n]*\sas\s+([\w-]+)/g)].map((item) => item[1]));
        const other = ['ods', 'ods-style', 'ods-react-style'].find((candidate) => !taken.has(candidate) && !namespaceReads(source, candidate).length);
        output.push(build(react, ` as ${other}`));
        renames.push([namespace, other]);
      }
      report.changes.push({ line, message: `${url} → ${palette} + ${react} (BC-32, BC-05: the kept palette and the breakpoints)` });
      return;
    }

    // BC-32: one or two files.
    const moved = movePaths(url, { exportsOk: url.startsWith('pkg:') });
    const second = moved.split ? movePaths(url, { exportsOk: url.startsWith('pkg:'), pick: 1 }).text : null;
    if (moved.text === url) {
      output.push(rawLine);
      return;
    }
    if (second && reads.length) {
      mark(indent, `${url} is two files in v20 (BC-31, BC-32): ${moved.text} and ${second}; this file reads ${reads.map((member) => `${namespace}.${member}`).join(', ')} through it: remove those reads, then load both`);
      output.push(rawLine);
      return;
    }
    output.push(build(moved.text, second ? withoutAlias : rest));
    if (second) output.push(build(second, withoutAlias));
    moved.changes.forEach((message) => report.changes.push({ line, message }));
    moved.notes.forEach((message) => report.notes.push({ line, message }));
  });

  let text = output.join('\n');
  // The breakpoints of a namespace whose palette stays in src/aluminium/variables go through @ovhcloud/ods-react/style.
  const lineOf = lineIndex(source);
  for (const [from, to] of renames) {
    const pattern = new RegExp(`(?<![\\w$.-])${escapeRegExp(from)}\\.\\$(ods-breakpoint-[\\w-]+)`, 'g');
    for (const match of source.matchAll(pattern)) {
      report.changes.push({ line: lineOf(match.index), message: `${match[0]} → ${to}.$${match[1]} (BC-05: the breakpoints are in @ovhcloud/ods-react/style)` });
    }
    text = text.replace(pattern, (whole, member) => `${to}.$${member}`);
  }
  report.output = text;
  for (const list of [report.changes, report.notes, report.todos]) list.sort((a, b) => a.line - b.line);
  return report;
}

/* ------------------------------------------------------------------------- HTML */

/** The path pass of an HTML page: the `<link>` of a moved file is rewritten (two `<link>` for a file that is two files). */
function migrateHtmlPaths(source) {
  const report = emptyReport(source);
  if (!source.includes('ods-themes')) {
    return report;
  }
  const lineOf = lineIndex(source);
  const eol = source.includes('\r\n') ? '\r\n' : '\n';
  // A `<link>` of a file that is two files in v20 becomes two `<link>`, the second on a line of its own.
  let output = source.replace(/<link\b[^>]*>/gi, (tag, offset) => {
    if (!tag.includes('ods-themes')) return tag;
    const line = lineOf(offset);
    const moved = movePaths(tag);
    if (moved.text === tag || moved.variables || moved.folder) return tag;
    moved.changes.forEach((message) => report.changes.push({ line, message }));
    moved.notes.forEach((message) => report.notes.push({ line, message }));
    if (!moved.split) return moved.text;
    const indent = /[ \t]*$/.exec(source.slice(source.lastIndexOf('\n', offset - 1) + 1, offset))[0];
    return `${moved.text}${eol}${indent}${movePaths(tag, { pick: 1 }).text}`;
  });
  // Any other place (a script, an inline style, a preload of a font): in place; what cannot be rewritten
  // is a point to check (HTML takes no marker).
  const lineOfOutput = lineIndex(output);
  output = output.replace(/[^\s'"`()<>]*ods-themes[^\s'"`()<>]*/g, (path, offset) => {
    const line = lineOfOutput(offset);
    const moved = movePaths(path);
    const fonts = bumpFontUrls(moved.text);
    moved.changes.forEach((message) => report.changes.push({ line, message }));
    [...moved.notes, ...fonts.notes].forEach((message) => report.notes.push({ line, message }));
    if (moved.split || moved.variables || moved.folder) {
      report.notes.push({ line, message: moved.folder ? FOLDER_HINT : moved.variables ? VARIABLES_HINT : `${path} is two files in v20 (BC-31, BC-32): load the theme and the fonts-base64 file both` });
    }
    return fonts.output;
  });
  report.output = output;
  return report;
}

/* ------------------------------------------------------------------------- scripts */

const langFor = (filename) => (/\.(c|m)?ts$/.test(filename) ? Lang.TypeScript : Lang.Tsx);
const QUICK_SCRIPT = /ods-themes|['"`]--ods-(?:theme|color|border-radius|border-width|font-family|form-element|outline)\b/;

/** The statement a string is the module of: `import 'x'`, `export … from 'x'`, `require('x');`, and whether it holds nothing else. */
function moduleContext(node) {
  const parent = node.parent();
  if (!parent) return { kind: 'other' };
  if (parent.kind() === 'import_statement' || parent.kind() === 'export_statement') {
    return { kind: 'import', sideEffect: parent.kind() === 'import_statement' && !parent.find({ rule: { kind: 'import_clause' } }), statement: parent };
  }
  if (parent.kind() === 'arguments' && parent.children().filter((child) => child.isNamed()).length === 1) {
    const call = parent.parent();
    const callee = call?.field('function');
    const name = callee?.kind() === 'import' ? 'import' : callee?.text();
    if (['require', 'require.resolve', 'import', 'import.meta.resolve'].includes(name)) {
      const statement = name === 'require' && call.parent()?.kind() === 'expression_statement' ? call.parent() : null;
      return { call, kind: name === 'require' || name === 'import' ? 'require' : 'resolve', sideEffect: Boolean(statement), statement };
    }
  }
  return { kind: 'other' };
}

/** The statement that holds a node (an import, a declaration, an expression), for a marker on its line. */
function statementOf(node) {
  for (let current = node; current; current = current.parent()) {
    if (/_statement$|^lexical_declaration$|^variable_declaration$/.test(current.kind())) return current;
  }
  return node;
}

/**
 * The path pass of a script. `options.tokenMapping` gives the v19 token names (for the prefixes);
 * `options.from` the ODS major of the file: the tokens JSON is only marked in v19 code.
 */
function migrateScriptPaths(source, filename = 'file.tsx', options = {}) {
  const report = { ...emptyReport(source), prefixes: [] };
  if (!QUICK_SCRIPT.test(source)) {
    return report;
  }
  const root = parse(langFor(filename), source).root();
  const lineOf = lineIndex(source);
  const edits = [];
  const markers = new Map();
  const tokenNames = Object.keys(options.tokenMapping?.tokens ?? {});
  const mark = (index, message) => {
    if (followsMarker(source, index)) return;
    if (!markers.has(index)) markers.set(index, []);
    if (!markers.get(index).includes(message)) markers.get(index).push(message);
  };
  const change = (index, message) => report.changes.push({ line: lineOf(index), message });
  const has = (pattern) => new RegExp(pattern).test(source);
  const eol = source.includes('\r\n') ? '\r\n' : '\n';
  const replaceStatement = (statement, specifier, targets) => {
    const { end, start } = statement.range();
    const text = source.slice(start.index, end.index);
    const lineStart = source.lastIndexOf('\n', start.index - 1) + 1;
    const indent = source.slice(lineStart, start.index);
    if (!targets.length) {
      // The statement goes, with its line when it is alone on it.
      const alone = /^[ \t]*$/.test(indent) && /^[ \t]*(?:\r?\n|$)/.test(source.slice(end.index));
      const stop = alone ? end.index + (source.slice(end.index).match(/^[ \t]*(?:\r?\n)?/)?.[0].length ?? 0) : end.index;
      edits.push({ end: stop, start: alone ? lineStart : start.index, text: '' });
      return;
    }
    const lines = targets.map((to) => text.replace(specifier, to));
    edits.push({ end: end.index, start: start.index, text: lines.join(`${eol}${/^[ \t]*$/.test(indent) ? indent : ''}`) });
  };

  // BC-33: the JavaScript entry point.
  for (const statement of root.findAll({ rule: { kind: 'import_statement' } })) {
    const sourceNode = statement.field('source');
    if (sourceNode?.text().slice(1, -1) !== ENTRY) continue;
    const locals = statement.findAll({ rule: { any: [{ kind: 'import_specifier' }, { kind: 'namespace_import' }] } })
      .map((spec) => (spec.kind() === 'import_specifier' ? spec.field('alias') ?? spec.field('name') : spec.find({ rule: { kind: 'identifier' } }))?.text())
      .concat(statement.find({ rule: { kind: 'import_clause' } })?.children().filter((child) => child.kind() === 'identifier').map((child) => child.text()) ?? [])
      .filter(Boolean);
    const { end, start } = statement.range();
    const used = locals.some((local) => root.findAll({ rule: { any: [{ kind: 'identifier' }, { kind: 'type_identifier' }, { kind: 'shorthand_property_identifier' }], regex: `^${escapeRegExp(local)}$` } })
      .some((node) => node.range().start.index < start.index || node.range().start.index >= end.index));
    if (used) {
      mark(start.index, ENTRY_HINT);
    } else {
      replaceStatement(statement, null, []);
      change(start.index, `import from ${ENTRY} removed (BC-33: the JavaScript entry point is gone, and nothing in this file used what it imported)`);
    }
  }

  for (const node of root.findAll({ rule: { any: [{ kind: 'string' }, { kind: 'template_string' }] } })) {
    if (node.kind() === 'template_string' && node.find({ rule: { kind: 'template_substitution' } })) continue;
    const raw = node.text();
    const value = raw.slice(1, -1);
    const { end, start } = node.range();
    if (!value.includes('ods-themes')) {
      // BC-06: a v19 token prefix given to a call (startsWith, includes, a filter of your own).
      if (V19_PREFIX.test(value) && !tokenNames.includes(value) && tokenNames.some((name) => name.startsWith(value)) && node.parent()?.kind() === 'arguments') {
        mark(start.index, `'${value}' is a v19 token prefix: no v20 token starts with it (v20 names start with --ods-semantic- or --ods-palette-, BC-01, BC-02, BC-06): rewrite this filter on the v20 names`);
        report.prefixes.push({ line: lineOf(start.index), prefix: value });
      }
      continue;
    }
    const context = moduleContext(node);
    const anchor = (context.statement ?? (context.kind === 'other' ? node : statementOf(node))).range().start.index;

    if (value === ENTRY) {
      // The imports are handled above; a require or a re-export cannot be removed safely.
      if (context.kind === 'require' || context.statement?.kind() === 'export_statement') mark(anchor, ENTRY_HINT);
      continue;
    }
    // BC-31.
    const bundle = BUNDLE.exec(value);
    if (bundle) {
      if (context.sideEffect) {
        const targets = [
          has(`ods-themes/default/css['"\`]`) ? null : `${bundle[1]}@ovhcloud/ods-themes/default/css`,
          has(`ods-themes/(?:default/fonts|fonts-base64)['"\`]`) ? null : `${bundle[1]}@ovhcloud/ods-themes/default/fonts`,
        ].filter(Boolean);
        replaceStatement(context.statement, value, targets);
        change(start.index, targets.length ? `${value} → ${targets.join(' + ')} (BC-31: the bundle is removed; ${FONTS_HINT})` : `${value} removed (BC-31): the file already loads default/css and the fonts`);
      } else {
        mark(anchor, BUNDLE_HINT);
      }
      continue;
    }
    if (BUNDLE_IN_TEXT.test(value) && !TOKENS_JSON.test(value)) {
      // The bundle inside a longer text (a Sass `additionalData`): it cannot be split here.
      mark(anchor, BUNDLE_HINT);
    }
    // BC-32. A bare specifier is resolved through the package exports, whatever reads it (an import, an alias).
    const exportsOk = true;
    const moved = movePaths(value, { exportsOk });
    const fonts = bumpFontUrls(moved.text);
    const second = moved.split ? movePaths(value, { exportsOk, pick: 1 }).text : null;
    if (second && context.sideEffect && [...value.matchAll(MOVED)].length === 1) {
      replaceStatement(context.statement, value, [moved.text, second]);
    } else if (moved.split || moved.variables || moved.folder) {
      mark(anchor, moved.folder ? FOLDER_HINT : moved.variables ? VARIABLES_HINT : `${value} is two files in v20 (BC-31, BC-32): ${moved.text} and ${movePaths(value, { exportsOk, pick: 1 }).text}: load both`);
      if (!moved.split && fonts.output !== value) edits.push({ end: end.index - 1, start: start.index + 1, text: fonts.output });
    } else if (fonts.output !== value) {
      edits.push({ end: end.index - 1, start: start.index + 1, text: fonts.output });
    }
    if (!moved.split || second && context.sideEffect) {
      moved.changes.forEach((message) => change(start.index, message));
    }
    [...moved.notes, ...fonts.notes].forEach((message) => report.notes.push({ line: lineOf(start.index), message }));
    // BC-06: the tokens JSON, read by key in v19 code.
    if (TOKENS_JSON.test(fonts.output) && context.kind !== 'other' && (options.from ?? 19) < 20) {
      mark(anchor, TOKENS_HINT);
    }
  }

  for (const [index, messages] of markers) {
    edits.push({ end: index, start: index, text: inlineMarker(messages) });
    messages.forEach((message) => report.todos.push({ line: lineOf(index), message }));
  }
  edits.sort((a, b) => a.start - b.start || (a.end - a.start) - (b.end - b.start));
  const parts = [];
  let cursor = 0;
  for (const item of edits) {
    if (item.start < cursor) continue;
    parts.push(source.slice(cursor, item.start), item.text);
    cursor = item.end;
  }
  parts.push(source.slice(cursor));
  report.output = parts.join('');
  for (const list of [report.changes, report.notes, report.todos]) list.sort((a, b) => a.line - b.line);
  return report;
}

/* ------------------------------------------------------------------------- JSON */

/** The path pass of a JSON file (a copy or alias config): its strings, in place; JSON takes no marker, so the rest is a point to check. */
function migrateJsonPaths(source) {
  const report = emptyReport(source);
  if (!source.includes('ods-themes')) {
    return report;
  }
  const lineOf = lineIndex(source);
  report.output = source.replace(/"((?:[^"\\\n]|\\.)*ods-themes(?:[^"\\\n]|\\.)*)"/g, (whole, value, offset) => {
    const line = lineOf(offset);
    if (BUNDLE.test(value)) {
      report.notes.push({ line, message: BUNDLE_HINT });
      return whole;
    }
    const moved = movePaths(value, { exportsOk: true });
    if (moved.split || moved.variables || moved.folder) {
      report.notes.push({ line, message: moved.folder ? FOLDER_HINT : moved.variables ? VARIABLES_HINT : `${value} is two files in v20 (BC-31, BC-32): ${moved.text} and ${movePaths(value, { exportsOk: true, pick: 1 }).text}: list both` });
      return whole;
    }
    const fonts = bumpFontUrls(moved.text);
    moved.changes.forEach((message) => report.changes.push({ line, message }));
    [...moved.notes, ...fonts.notes].forEach((message) => report.notes.push({ line, message }));
    return `"${fonts.output}"`;
  });
  return report;
}

/* ------------------------------------------------------------------------- entry point */

/**
 * The path pass of one file, by its extension: a stylesheet (css, scss, less or sass), HTML, a
 * script or JSON. Returns `{ output, changes, todos, notes }` (and `prefixes` for a script).
 */
function migrateThemePaths(source, filename, options = {}) {
  if (/\.html?$/.test(filename)) return migrateHtmlPaths(source);
  const style = /\.(s?css|less|sass)$/.exec(filename)?.[1];
  if (style) return migrateStylePaths(source, style);
  if (/\.(c|m)?[jt]sx?$/.test(filename)) return migrateScriptPaths(source, filename, options);
  if (/\.json$/.test(filename)) return migrateJsonPaths(source);
  return emptyReport(source);
}

export { bumpVersion, migrateHtmlPaths, migrateJsonPaths, migrateScriptPaths, migrateStylePaths, migrateThemePaths };
