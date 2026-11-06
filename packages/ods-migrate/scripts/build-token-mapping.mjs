#!/usr/bin/env node
/*
 * Builds mappings/tokens-v19-to-v20.json:
 * - the theme tokens from the tables of packages/themes/scripts/repoint-tokens.js, so the codemod,
 *   the ESLint and stylelint rules and the guide read the same mapping as the one that migrated
 *   ODS itself;
 * - the palette by value: the v19 and v20 themes are read as text and resolved to hex, so a v19
 *   step finds the v20 stop that keeps its colour (`paletteValue`, `scssPalette`), and a theme
 *   declaration the stop that plays its part (`palette`);
 * - the public names of ods-react that v20 removes or stops reading (component tokens, SCSS
 *   variables and mixins of `@ovhcloud/ods-react/style`), found by comparing the last v19 release
 *   with the ref, and resolved by the REMOVED and MIXINS tables below;
 * - the internal class modifiers, the SCSS numbers that became a var() and the Tailwind keys of the
 *   guide, each checked against both refs.
 *
 * Usage: node scripts/build-token-mapping.mjs [--ref <git ref>] [--from <v19 tag>] [--repo <path>] [--out <file>]
 * The ref defaults to origin/master, where the v20 changes are merged; build on the release ref
 * before publishing. --from defaults to the last v19 release.
 * An entry whose target the ref does not declare yet is written with `pending: "<ticket>"`: the
 * engines skip it unless the config enables it, and the build drops the flag once the ref has it.
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { basename, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import vm from 'node:vm';
import postcss from 'postcss';
import { resolveToken, roleOfProperty } from '../src/tokens.mjs';

const { values: options } = parseArgs({
  options: {
    from: { type: 'string' },
    out: { default: join(dirname(fileURLToPath(import.meta.url)), '../mappings/tokens-v19-to-v20.json'), type: 'string' },
    ref: { default: 'origin/master', type: 'string' },
    repo: { default: join(dirname(fileURLToPath(import.meta.url)), '../../..'), type: 'string' },
  },
});

const git = (...args) => execFileSync('git', ['-C', options.repo, ...args], { encoding: 'utf8', maxBuffer: 1 << 28 });
const sha = git('rev-parse', '--short', options.ref).trim();
const from = options.from ?? git('tag', '--list', 'v19.*', '--sort=-v:refname').split('\n')[0];
const script = git('show', `${options.ref}:packages/themes/scripts/repoint-tokens.js`);
const uncomment = (text) => text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
/*
 * The default theme as text: v19 keeps it in src/default/ (the palette in a partial, the roles in
 * index.scss); v20 ships one folder per theme, the default being Aluminium light (BC-32), whose
 * dark mode is left out: its roles would shadow nothing (the first declaration wins) but its
 * palette partial is the same.
 */
const themeOf = (ref) => {
  const has = (dir) => git('ls-tree', '--name-only', ref, `packages/themes/src/${dir}/`).trim() !== '';
  const dir = has('default') ? 'default' : 'aluminium';
  return git('ls-tree', '--name-only', `${ref}:packages/themes/src/${dir}/`)
    .split('\n').filter((file) => file.endsWith('.scss') && file !== 'dark.scss')
    .map((file) => git('show', `${ref}:packages/themes/src/${dir}/${file}`)).join('\n');
};
const theme = themeOf(options.ref);

/* The script runs its guard rail and rewrite at load time: keep only the tables. */
const tablesEnd = script.indexOf('/* ------------------------------------------------------------------------- the guard rail */');
if (tablesEnd < 0) {
  throw new Error('repoint-tokens.js changed shape: the guard rail marker is missing');
}
const sandbox = { __dirname: '/', module: { exports: {} }, process: { argv: [] }, require: createRequire(import.meta.url) };
vm.runInNewContext(`${script.slice(0, tablesEnd)}
module.exports = { FAMILY, LEGACY, NAMED, THEME, THEME_SPLIT, rampRole, splitRole };`, sandbox);
const { FAMILY, LEGACY, NAMED, THEME, THEME_SPLIT, rampRole, splitRole } = sandbox.module.exports;

const declared = new Set(uncomment(theme).match(/--ods-[a-z0-9-]+(?=\s*:)/g));
const semantic = (role) => (role ? `--ods-semantic-${role}` : null);

/* ------------------------------------------------------------------------- the theme values */

/*
 * The values of a theme, resolved as far as the text allows: `$a: #hex`, `$a: $b`,
 * `--x: #{var.$a}`, `--x: var(--y)`. The first declaration of a name wins (the default theme's
 * `:root`, before any media query). Enough for the colours, which are all literals at the end of
 * a chain; anything else comes back as written.
 */
function themeValues(text) {
  const scss = new Map();
  const css = new Map();
  const clean = uncomment(text);
  for (const [, name, value] of clean.matchAll(/^\s*\$([\w-]+)\s*:\s*([^;]+);/gm)) if (!scss.has(name)) scss.set(name, value);
  for (const [, name, value] of clean.matchAll(/(--ods-[a-z0-9-]+)\s*:\s*([^;]+);/g)) if (!css.has(name)) css.set(name, value);
  const resolve = (raw, depth = 0) => {
    if (raw === undefined || depth > 20) return undefined;
    const value = raw.trim().replace(/\s*!default$/, '');
    const variable = value.match(/^#\{\s*(?:[\w-]+\.)?\$([\w-]+)\s*\}$/) ?? value.match(/^(?:[\w-]+\.)?\$([\w-]+)$/);
    if (variable) return resolve(scss.get(variable[1]), depth + 1);
    const reference = value.match(/^var\(\s*(--[a-z0-9-]+)\s*\)$/);
    if (reference) return resolve(css.get(reference[1]), depth + 1);
    return /^#[0-9a-f]{3}$/i.test(value) ? `#${[...value.slice(1)].map((c) => c + c).join('')}`.toLowerCase() : value.toLowerCase();
  };
  return {
    css: (name) => resolve(css.get(name)),
    cssNames: [...css.keys()],
    scss: (name) => resolve(scss.get(name.replace(/^\$/, ''))),
    scssNames: [...scss.keys()].map((name) => `$${name}`),
  };
}

const v19Theme = git('show', `${from}:packages/themes/src/default/index.scss`);
const v19Values = themeValues(themeOf(from));
const v20Values = themeValues(theme);
const isHex = (value) => /^#[0-9a-f]{6}$/.test(value ?? '');
const WHITE = '#ffffff';

/*
 * The v20 palette stops: one hex per hue stop (`--ods-palette-blue-300`), plus white, black and
 * the one-off colours. `brand` is an alias aimed at a hue, never a value.
 */
const HUE_STOP = /^--ods-palette-([a-z]+)-(\d+)$/;
const stops20 = v20Values.cssNames
  .filter((name) => name.startsWith('--ods-palette-') && !name.startsWith('--ods-palette-brand-') && isHex(v20Values.css(name)))
  .map((name) => ({ hex: v20Values.css(name), hue: name.match(HUE_STOP)?.[1] ?? null, name, stop: name.match(HUE_STOP)?.[2] ?? null }));
const channels = (hex) => [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16));
const distance = (a, b) => channels(a).reduce((sum, value, index) => sum + (value - channels(b)[index]) ** 2, 0);

/* The v20 stop with the same hex, the one of `hue` first. */
const stopOfHex = (hex, hue) => (isHex(hex)
  ? stops20.find((stop) => stop.hex === hex && stop.hue === hue) ?? stops20.find((stop) => stop.hex === hex && stop.hue === null) ?? stops20.find((stop) => stop.hex === hex)
  : undefined);

const RUNGS = ['000', '025', '050', '075', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
/* The v20 palette hue behind each v19 family; primary is the brand alias, aimed at blue by default. */
const PALETTE_HUE = { critical: 'red', information: 'blue', neutral: 'gray', primary: 'brand', success: 'green', warning: 'orange' };
const VALUE_HUE = { ...PALETTE_HUE, primary: 'blue' };

/*
 * The palette stop a v19 theme declaration of a ramp step becomes. The stop that holds the same
 * colour in v20 is the one the roles moved to (the light blue and gray rungs moved up one stop),
 * and between two of them the nearest colour of the hue. A hue that v20 redrew (red, green,
 * orange: no v19 colour survives) keeps its numbering, which the role tables follow.
 */
const paletteStop = (family, rung) => {
  const hex = v19Values.css(`--ods-color-${family}-${rung}`);
  if (hex === WHITE) return '--ods-palette-white';
  const hue = stops20.filter((stop) => stop.hue === VALUE_HUE[family]);
  const kept = RUNGS.some((step) => hue.some((stop) => stop.hex === v19Values.css(`--ods-color-${family}-${step}`)));
  const stop = !kept
    ? { '025': '50', '050': '50', '075': '100' }[rung] ?? String(Number(rung))
    : (hue.find((candidate) => candidate.hex === hex) ?? [...hue].sort((a, b) => distance(a.hex, hex) - distance(b.hex, hex))[0]).stop;
  return `--ods-palette-${PALETTE_HUE[family]}-${stop}`;
};

/*
 * Cells of the ramp table that a consumer cannot take on trust, found by the review of #1122:
 * the destination changes role family, or is an interaction or state role (`drag-over`,
 * `readonly`) for a colour at rest, which the table's own rule forbids. They are rewritten, and
 * also listed as points to check.
 */
const isDoubtful = (role, family, kind, rung) =>
  (kind === 'content' && family === 'neutral' && Number(rung) <= 300)
  || /interaction-|drag-over|readonly/.test(role ?? '')
  || (family === 'primary' && /information/.test(role ?? ''))
  || (kind === 'border' && /surface/.test(role ?? ''));

const tokens = {};
const add = (name, entry) => {
  tokens[name] = entry;
};

/* The `null` cells of THEME that are not a disabled colour, each with what takes over (BC-01 _none_ rows). */
const THEME_NONE = { 'anchor-text-color-hover': 'link-hover' };
for (const [key, role] of Object.entries(THEME)) {
  add(`--ods-theme-${key}`, role ? { bc: 'BC-01', to: semantic(role) } : { bc: THEME_NONE[key] ? 'BC-01' : 'BC-12', hint: THEME_NONE[key] ?? 'disabled', to: null });
}
for (const [key, family] of Object.entries(THEME_SPLIT)) {
  add(`--ods-theme-${key}`, {
    bc: 'BC-01',
    byRole: Object.fromEntries(['surface', 'border', 'content'].map((kind) => [kind, semantic(splitRole(family, kind))])),
  });
}
for (const family of Object.keys(FAMILY)) {
  for (const rung of RUNGS) {
    const byRole = {};
    const doubtful = [];
    for (const kind of ['surface', 'border', 'content']) {
      const rest = rampRole(kind, family, rung, 'color');
      const hover = rampRole(kind, family, rung, 'color-hover');
      const active = rampRole(kind, family, rung, 'color-active');
      byRole[kind] = semantic(rest);
      if (hover !== rest) {
        byRole[`${kind}:hover`] = semantic(hover);
      }
      // A pressed state of its own: read for `:active` and `-active`, the hover cell otherwise.
      if (active !== hover) {
        byRole[`${kind}:active`] = semantic(active);
      }
      if (kind === 'content') {
        const placeholder = rampRole(kind, family, rung, 'placeholder-color');
        if (placeholder !== rest) {
          byRole['content:placeholder'] = semantic(placeholder);
        }
      }
      if (isDoubtful(rest, family, kind, rung)) {
        doubtful.push(kind);
      }
    }
    const paletteValue = stopOfHex(v19Values.css(`--ods-color-${family}-${rung}`), VALUE_HUE[family])?.name;
    add(`--ods-color-${family}-${rung}`, {
      bc: ['000', '025', '075'].includes(rung) ? 'BC-04' : 'BC-02',
      byRole,
      ...(doubtful.length ? { doubtful } : {}),
      palette: paletteStop(family, rung),
      ...(paletteValue ? { paletteValue } : {}),
    });
  }
}
for (const [key, role] of Object.entries(NAMED)) {
  add(`--ods-color-${key}`, role ? { bc: 'BC-02', to: semantic(role) } : { bc: 'BC-12', hint: 'disabled', to: null });
}
for (const [key, role] of Object.entries(LEGACY)) {
  add(`--ods-${key}`, role ? { bc: 'BC-03', to: semantic(role) } : { bc: 'BC-03', hint: key === 'border-radius-xs' ? 'radius-xs' : 'no-equivalent', to: null });
}

/* ------------------------------------------------------------- what a 1:1 rename does not say */

const valueOf = (text, name) => text.match(new RegExp(`${name}:\\s*([^;]+);`))?.[1].trim();

/*
 * The white of v19 stays white (DECISIONS): a token that painted #fff and that the tables send
 * to the grey page surface lands on `surface-raised`, the white of a card on the page. Only the
 * background declared on the document root (`html`, `body`, `:root`) keeps `surface-page`: a text,
 * a border or a shadow there stays white. The configurator's `page-background` choice turns the
 * contexts off.
 */
const PAGE = '--ods-semantic-color-surface-page';
const RAISED = '--ods-semantic-color-surface-raised';
for (const [name, entry] of Object.entries(tokens)) {
  if (v19Values.css(name) !== WHITE) continue;
  if (entry.to === PAGE) {
    entry.to = RAISED;
    entry.byContext = { root: { surface: PAGE } };
    entry.contextChoice = 'page-background';
  } else if (entry.byRole?.surface === PAGE) {
    for (const kind of Object.keys(entry.byRole).filter((kind) => entry.byRole[kind] === PAGE)) {
      entry.byRole[kind] = RAISED;
    }
    entry.byContext = { root: { surface: PAGE } };
    entry.contextChoice = 'page-background';
  }
}

/*
 * A z-index token keeps its role but not its rank: the layers are re-ranked in v20. A z-index
 * that reads it as is gets the layer of the ref; a value computed from it, kept in a variable, or
 * an override of it, is marked (`rerank`), never pointed at a layer: what the app meant it to sit
 * above is the app's to say.
 */
const layers = [...theme.matchAll(/(--ods-semantic-z-index-[a-z]+):\s*(\d+)/g)].map(([, name, value]) => `${name.replace('--ods-semantic-z-index-', '')} ${value}`).join(', ');
for (const [name, entry] of Object.entries(tokens)) {
  if (entry.to && /z-index/.test(name)) {
    Object.assign(entry, { detail: `this token is ${valueOf(v19Theme, name)} in v19; its v20 layer, \`${entry.to}\`, is ${valueOf(theme, entry.to)}`, hint: 'z-rerank', rerank: true });
  }
}

/* A v19 theme that set the body font also set the headings, which have their own token in v20. */
const HEADING = '--ods-semantic-font-family-heading';
for (const entry of Object.values(tokens)) {
  if (entry.to === '--ods-semantic-font-family-body' && declared.has(HEADING)) {
    entry.alsoDeclare = [HEADING];
  }
}

/*
 * A name the tables map but v19 never declared is not an ODS v19 token: an app that reads it gets
 * its own fallback (or nothing), in v19 as in v20. It is treated like every other name ODS never
 * declared (left alone, reported apart): renaming it would replace the app's fallback with an ODS
 * colour, a guess.
 */
for (const [name, entry] of Object.entries(tokens)) {
  if (entry.to && !v19Values.css(name)) {
    delete tokens[name];
  }
}

/*
 * A v19 theme that declares a ramp step recoloured one family. Its v20 palette step can feed more:
 * the brand ramp points at a hue, the focus ring reads one. The declaration is still renamed, with
 * the names it now also recolours, found in the v20 default theme.
 */
const STATUS_NAME = { critical: 'critical', information: 'information', neutral: 'neutral', primary: 'brand', success: 'success', warning: 'warning' };
const v19Readers = (step) => [...v19Theme.matchAll(new RegExp(`(--ods-theme-[a-z0-9-]+):\\s*var\\(${step}\\)`, 'g'))]
  .flatMap(([, name]) => [tokens[name]?.to, ...Object.values(tokens[name]?.byRole ?? {})]).filter(Boolean);
const v20Readers = (step) => [...theme.matchAll(new RegExp(`(--ods-(?:semantic|palette)-[a-z0-9-]+):\\s*var\\(${step}\\)`, 'g'))].map(([, name]) => name);
for (const [name, entry] of Object.entries(tokens)) {
  const family = name.match(/^--ods-color-([a-z]+)-\d{3}$/)?.[1];
  if (!family || !entry.palette) continue;
  const expected = new Set(v19Readers(name));
  const shared = v20Readers(entry.palette).filter((reader) => !expected.has(reader) && !reader.includes(STATUS_NAME[family]));
  if (shared.length) {
    entry.paletteShared = shared;
  }
}

/*
 * The SCSS palette of ods-themes (`$ods-palette-blue-025`), by value. A name v20 keeps with the
 * same colour needs nothing; any other one reads the v20 stop that holds its v19 colour, or is
 * marked with that colour when no stop holds it.
 */
const scssPalette = {};
for (const name of v19Values.scssNames.filter((name) => name.startsWith('$ods-palette-'))) {
  const hex = v19Values.scss(name);
  const kept = v20Values.scssNames.includes(name);
  const now = kept ? v20Values.scss(name) : undefined;
  if (!isHex(hex) || now === hex) continue;
  const stop = stopOfHex(hex, name.match(/^\$ods-palette-([a-z]+)-\d+$/)?.[1]);
  if (stop) {
    scssPalette[name] = { value: `var(${stop.name})`, ...(kept ? { note: `keeps its name in v20 but is ${now} there: the v19 ${hex} is \`${stop.name}\`.` } : {}) };
  } else {
    scssPalette[name] = { detail: kept ? `${hex} in v19, ${now} in v20` : hex, hint: kept ? 'palette-changed' : 'palette-removed', to: null };
  }
}

/*
 * The other SCSS variables of ods-themes that v20 removes. Most have a custom property of the same
 * name, which the engines resolve through `tokens`; the others read what the v19 custom property
 * built from them became, or the v20 stop of their colour, or the one v20 token of the same value,
 * or are marked with their v19 value.
 */
for (const name of v19Values.scssNames.filter((name) => !name.startsWith('$ods-palette-') && !v20Values.scssNames.includes(name))) {
  if (`--${name.slice(1)}` in tokens) continue;
  const via = v19Theme.match(new RegExp(`(--ods-[a-z0-9-]+):\\s*#\\{\\s*[\\w-]+\\.\\${name}\\s*\\}`))?.[1];
  const value = v19Values.scss(name);
  const stop = stopOfHex(value);
  const same = v20Values.cssNames.filter((css) => css.startsWith('--ods-semantic-') && v20Values.css(css) === value);
  if (tokens[via]?.to) {
    scssPalette[name] = { value: `var(${tokens[via].to})` };
  } else if (stop) {
    scssPalette[name] = { value: `var(${stop.name})` };
  } else if (!isHex(value) && same.length === 1) {
    scssPalette[name] = { value: `var(${same[0]})` };
  } else {
    scssPalette[name] = { detail: `${value} in v19`, hint: isHex(value) ? 'palette-removed' : 'no-equivalent', to: null };
  }
}

/* ----------------------------------------------------------------------- the ods-react surface */

/* What ods-react ships: its styles and sources, without the dev stories' modules, the tests and the stories. */
const UNSHIPPED = /\/dev\.module\.css$|\/tests?\/|\.(spec|stories)\.[jt]sx?$/;
const THEME_NAME = /^--ods-(?:theme|color|border-radius|border-width|font-family|form-element|outline)-/;

/* Every file of `path` at `ref` that `keep` accepts, read in one git process. */
function readTree(ref, path, keep) {
  const entries = git('ls-tree', '-r', ref, '--', path).split('\n').filter(Boolean)
    .map((line) => ({ file: line.split('\t')[1], sha: line.split('\t')[0].split(' ')[2] }))
    .filter(({ file }) => keep(file));
  const out = execFileSync('git', ['-C', options.repo, 'cat-file', '--batch'], { input: `${entries.map((entry) => entry.sha).join('\n')}\n`, maxBuffer: 1 << 28 });
  const files = new Map();
  let offset = 0;
  for (const { file } of entries) {
    const header = out.indexOf(10, offset);
    const size = Number(out.toString('utf8', offset, header).split(' ')[2]);
    files.set(file, out.toString('utf8', header + 1, header + 1 + size));
    offset = header + 1 + size + 1;
  }
  return files;
}

/* The custom properties ods-react declares and reads, and the variables and mixins of its ./style entry point. */
function surface(ref) {
  const declaredNames = new Set();
  const read = new Set();
  const scss = new Map();
  const mixins = new Set();
  for (const [file, content] of readTree(ref, 'packages/ods-react/src', (file) => /\.(s?css|tsx?)$/.test(file) && !UNSHIPPED.test(file))) {
    const text = uncomment(content);
    for (const [, name] of text.matchAll(/(?:^|[;{\s'"])(--ods-[a-z0-9-]+)['"]?\s*:/g)) declaredNames.add(name);
    for (const [, name] of text.matchAll(/var\(\s*(--ods-[a-z0-9-]+)/g)) read.add(name);
    if (/^packages\/ods-react\/src\/style\/[^/]+\.scss$/.test(file)) {
      for (const [, name, value] of text.matchAll(/^\$([a-zA-Z0-9_-]+)\s*:\s*([^;]+);/gm)) scss.set(`$${name}`, value.trim());
      for (const [, name] of text.matchAll(/^\s*@mixin\s+([\w-]+)/gm)) mixins.add(name);
    }
  }
  return { declared: declaredNames, mixins, read, scss };
}

const before = surface(from);
const after = surface(options.ref);
const declares = (name) => declared.has(name) || after.declared.has(name);

/*
 * What becomes of each public name of ods-react that v20 removes. `to` renames it, `value`
 * replaces a read of a SCSS variable with what ODS itself reads for the same purpose, `to: null`
 * marks it with its hint, `keep` marks or notes a name that v20 keeps with another meaning.
 * `pending` names the ticket of a rename that the ref has not landed yet. The guard rail below
 * fails when the comparison finds a removed name that these tables do not cover, or a covered
 * name that is still there without being pending.
 */
const REMOVED = {
  '--ods-button-border-radius-width': { bc: 'BC-18', to: '--ods-button-border-width' },
  '--ods-card-border-color-primary': { bc: 'BC-23', to: '--ods-card-border-color-accent' },
  '--ods-code-primary-color': { bc: 'BC-17', to: '--ods-code-text-color' },
  '--ods-code-secondary-color': { bc: 'BC-17', to: '--ods-code-background-color' },
  '--ods-code-trigger-background-color': { bc: 'BC-17', to: '--ods-code-trigger-color' },
  '--ods-tab-border-color-selected': { bc: 'BC-08', hint: 'tab-selected', to: null },
  '--ods-tab-text-color-selected': { bc: 'BC-08', hint: 'tab-selected', to: null },
  '--ods-toggle-control-border-color': { bc: 'BC-08', hint: 'toggle-border', to: null },
  '--ods-button-group-item-background-color-checked-disabled': { bc: 'BC-12', hint: 'disabled', to: null },
  '--ods-message-close-button-text-color-primary': { bc: 'ODS-2335', hint: 'message-close', to: null },
  '--ods-switch-item-background-color-checked-disabled': { bc: 'BC-12', hint: 'disabled', to: null },
  '--ods-tab-background-color-selected-disabled-switch': { bc: 'BC-12', hint: 'disabled', to: null },
  '--ods-tab-border-color-disabled': { bc: 'BC-12', hint: 'disabled', to: null },
  '--ods-tab-border-color-selected-disabled': { bc: 'BC-12', hint: 'disabled', to: null },
  '--ods-tab-border-color-selected-disabled-switch': { bc: 'BC-12', hint: 'disabled', to: null },
  '--ods-tile-background-color-disabled': { bc: 'BC-12', hint: 'disabled', to: null },
  '--ods-tile-background-color': { bc: 'BC-08', detail: 'the Card one is `--ods-card-background-color`', hint: 'tile', to: null },
  '--ods-tile-border-color': { bc: 'BC-08', detail: 'the Card one is `--ods-card-border-color-neutral`', hint: 'tile', to: null },
  '--ods-tile-border-width': { bc: 'BC-08', detail: 'the Card one is `--ods-card-border-width`', hint: 'tile', to: null },
  '--ods-toggle-control-background-color-hover': { bc: 'BC-08', hint: 'toggle-hover', to: null },
  '$drawer-max-size': { bc: 'BC-16', hint: 'drawer-max-size', to: null },
  '$ods-button-border-radius-width': { bc: 'BC-18', to: '$ods-button-border-width' },
  '$ods-modal-border-radius': { bc: 'BC-16', value: 'var(--ods-semantic-size-radius-overlay)' },
  '$ods-modal-margin': { bc: 'BC-16', hint: 'modal-margin', to: null },
  // Its v20 name keeps a note of its own (overlay-rank, not a marker): renaming it is idempotent.
  '$ods-modal-z-index': { bc: 'BC-16', to: '$ods-overlay-modal-z-index' },
  '$ods-overlay-arrow-background-color': { bc: 'BC-16', value: 'var(--ods-semantic-color-surface-overlay)' },
  '$ods-overlay-select-z-index': { bc: 'BC-16', to: '$ods-overlay-base-z-index' },
  '$ods-state-is-disabled-background-color': { bc: 'BC-12', hint: 'disabled-scss', to: null },
  '$ods-state-is-disabled-border-color': { bc: 'BC-12', hint: 'disabled-scss', to: null },
  '$ods-state-is-disabled-text-color': { bc: 'BC-12', hint: 'disabled-scss', to: null },
};

/*
 * Message emphasis (ODS-2335): the default variant becomes `high`, `light` becomes `medium`. The
 * v19 light border was painted with the light text colour; v20 has a border token of its own, so
 * a theme that set the text colour also declares the border.
 */
const ACCENT = (status) => (status === 'primary' ? 'accent' : status);
for (const name of before.declared) {
  const match = name.match(/^--ods-message-(background|text)-color-([a-z]+?)(-light)?$/);
  if (!match || after.declared.has(name)) continue;
  const [, part, status, light] = match;
  REMOVED[name] = {
    bc: 'BC-23',
    to: `--ods-message-${part}-color-${ACCENT(status)}-${light ? 'medium' : 'high'}`,
    ...(part === 'text' && light ? { alsoDeclare: [`--ods-message-border-color-${ACCENT(status)}-medium`] } : {}),
  };
}

/*
 * Badge and Tag status (BC-23): `primary` becomes `accent`. A Badge status of the six that have
 * emphases painted the tinted Badge in 19.7.3: its name takes `-high`. The text hover and active
 * states of the Tag held their rest colour and nothing read them (BC-25): a read takes the rest
 * name, an override did nothing and is marked.
 */
const BADGE_DECORATIVE = ['alpha', 'beta', 'new', 'promotion'];
for (const name of before.declared) {
  if (after.declared.has(name)) continue;
  const badge = name.match(/^--ods-badge-(background|border|text)-color-([a-z]+)$/);
  if (badge && !BADGE_DECORATIVE.includes(badge[2])) {
    REMOVED[name] = { bc: 'BC-23', note: 'the v19 Badge of this status is the `high` one in v20: add `emphasis="high"` on the Badges this override or read is meant for.', to: `--ods-badge-${badge[1]}-color-${ACCENT(badge[2])}-high` };
    continue;
  }
  const tagState = name.match(/^--ods-tag-text-color-([a-z]+)-(hover|active)$/);
  if (tagState) {
    REMOVED[name] = { bc: 'BC-25', hint: 'unread-removed', read: `--ods-tag-text-color-${ACCENT(tagState[1])}`, to: null };
    continue;
  }
  const tag = name.match(/^--ods-tag-([a-z-]+)-color-primary(-hover|-active)?$/);
  if (tag) {
    REMOVED[name] = { bc: 'BC-23', to: `--ods-tag-${tag[1]}-color-accent${tag[2] ?? ''}` };
  }
}

/* Modal header colours (BC-08) and the Switch (BC-26): no element of v20 reads them any more. */
for (const name of before.declared) {
  if (after.declared.has(name) || name in REMOVED) continue;
  if (/^--ods-modal-header-background-color-[a-z]+$/.test(name)) REMOVED[name] = { bc: 'BC-08', hint: 'modal-header', to: null };
  else if (/^--ods-switch-/.test(name)) REMOVED[name] = { bc: 'BC-26', hint: 'switch', to: null };
}

/*
 * Button emphasis (ODS-2326, PR #1130): the `-ghost` and `-outline` custom properties become
 * `-low` and `-medium`. Generated from the v19 names, pending until the ref renames them.
 */
const BUTTON_EMPHASIS = { '': 'high', ghost: 'low', outline: 'medium' };
const BUTTON_STATUS = { critical: 'critical', neutral: 'neutral', primary: 'brand' };
/*
 * The value each removed `information`, `success` and `warning` name held (BC-25): a read keeps
 * painting it, an override paints nothing and is marked. `inherit` and `unset` have no token.
 */
const BUTTON_REMOVED_READ = {
  'background-': 'surface-<s>', 'background-hover': 'interaction-<s>-hover', 'background-active': 'interaction-<s>-active',
  'border-': 'border-<s>', 'border-hover': 'interaction-<s>-hover', 'border-active': 'interaction-<s>-active',
  'text-': 'content-on-<s>-solid', 'text-hover': 'content-on-<s>-solid', 'text-active': 'content-on-<s>-solid',
  'background-ghost-hover': 'interaction-<s>-subtle-hover', 'background-ghost-active': 'interaction-<s>-subtle-active',
  'text-ghost': 'content-<s>', 'text-ghost-hover': 'content-on-<s>', 'text-ghost-active': 'content-on-<s>',
  'background-outline': 'surface-control', 'background-outline-hover': 'interaction-<s>-subtle-hover', 'background-outline-active': 'interaction-<s>-subtle-active',
  'border-outline': 'border-<s>', 'border-outline-hover': 'interaction-<s>-hover', 'border-outline-active': 'interaction-<s>-active',
  'text-outline': 'content-<s>', 'text-outline-hover': 'content-on-<s>', 'text-outline-active': 'content-on-<s>',
};
for (const name of before.declared) {
  const match = name.match(/^--ods-button-(background|border|text)-color-([a-z]+?)(?:-(ghost|outline))?(?:-(hover|active))?$/);
  if (!match || after.declared.has(name)) continue;
  const [, part, status, emphasis = '', state] = match;
  if (status in BUTTON_STATUS) {
    const to = `--ods-button-${part}-color-${BUTTON_STATUS[status]}-${BUTTON_EMPHASIS[emphasis]}${state ? `-${state}` : ''}`;
    // The states that held their rest value and that nothing read (BC-25): a read takes the rest name.
    const rest = to.replace(/-(hover|active)$/, '');
    REMOVED[name] = after.declared.has(to)
      ? { bc: 'BC-24', to }
      : { bc: 'BC-25', hint: 'unread-removed', ...(after.declared.has(rest) ? { read: rest } : {}), to: null };
  } else {
    const role = BUTTON_REMOVED_READ[`${part}-${[emphasis, state].filter(Boolean).join('-')}`];
    REMOVED[name] = { bc: 'BC-25', hint: 'button-status-removed', ...(role ? { read: `--ods-semantic-color-${role.replace('<s>', status)}` } : {}), to: null };
  }
}

/*
 * The SCSS variables of ./style that keep their name in v20 with another meaning: the overlay
 * ranks (a drawer is now under a modal), the padding of the in-field actions.
 */
const RANK = (v19, v20) => `keeps its name and its layer, ${v19} in v19 and ${v20} in v20: a value you compute from it (\`+ 1\`) or that must clear another overlay may now land elsewhere, check it (a drawer now sits under a modal).`;
const KEPT = {
  '$ods-input-actions-padding-right': { bc: 'BC-16', keep: true, note: 'keeps its name and goes from 4px to 2px in v20 (`--ods-semantic-size-space-inset-block-compact`), like the action buttons of ODS fields. To keep 4px, write `calc(var(--ods-semantic-size-space-inset-inline) / 2)`.' },
  '$ods-overlay-base-z-index': { bc: 'BC-15', keep: true, note: RANK(99, `\`--ods-semantic-z-index-dropdown\` (${valueOf(theme, '--ods-semantic-z-index-dropdown')})`) },
  '$ods-overlay-drawer-z-index': { bc: 'BC-15', keep: true, note: RANK(101, `\`--ods-semantic-z-index-drawer\` (${valueOf(theme, '--ods-semantic-z-index-drawer')})`) },
  '$ods-overlay-modal-z-index': { bc: 'BC-15', keep: true, note: RANK(100, `\`--ods-semantic-z-index-modal\` (${valueOf(theme, '--ods-semantic-z-index-modal')})`) },
};

/*
 * The mixins of ./style. `to` renames an `@include` (namespace and arguments kept: `'primary'`
 * stays), `hint` marks one whose output changed in a way that shows, `note` reports one.
 */
/*
 * `args` renames the status a mixin takes (`'primary'` → `'brand'`), `removedArgs` marks the
 * statuses it no longer accepts: v20 stops the build on any value it does not know.
 */
const BUTTON_ARGS = { args: { primary: 'brand' }, removedArgs: ['information', 'success', 'warning'] };
const ACCENT_ARGS = { args: { primary: 'accent' } };
const MIXINS = {
  'ods-badge': { bc: 'BC-08', hint: 'badge-mixin' },
  'ods-badge-color': { bc: 'BC-23', ...ACCENT_ARGS },
  'ods-button-variant-default': { bc: 'BC-24', to: 'ods-button-emphasis-high', ...BUTTON_ARGS },
  'ods-button-variant-ghost': { bc: 'BC-24', to: 'ods-button-emphasis-low', ...BUTTON_ARGS },
  'ods-button-variant-outline': { bc: 'BC-24', to: 'ods-button-emphasis-medium', ...BUTTON_ARGS },
  'ods-input': { bc: 'BC-14', note: '`ods-input()` now paints a background, `var(--ods-semantic-color-surface-control)`, and a shadow: re-declare `background-color` after the include if this field sits on a tinted ground.' },
  'ods-is-disabled': { bc: 'BC-12', hint: 'is-disabled-mixin' },
  'ods-message-variant-default': { bc: 'BC-23', to: 'ods-message-emphasis-high', ...ACCENT_ARGS },
  'ods-message-variant-light': { bc: 'BC-23', to: 'ods-message-emphasis-medium', ...ACCENT_ARGS },
  'ods-modal-color': { bc: 'BC-16', hint: 'modal-color-mixin', remove: true },
  'ods-tag-color': { bc: 'BC-23', ...ACCENT_ARGS },
};

/*
 * A pending entry stays pending while the ref still has its source or lacks its target; once the
 * ref lands both, it is a plain rename.
 */
const settle = (entry, gone, lands) => {
  if (entry.pending && gone && (!entry.to || lands(entry.to))) delete entry.pending;
  return entry;
};

const isRemovedCss = (name) => before.declared.has(name) && !after.declared.has(name) && !THEME_NAME.test(name);
const isRemovedScss = (name) => before.scss.has(name) && !after.scss.has(name);
const removedNames = [
  ...[...before.declared].filter(isRemovedCss),
  ...[...before.scss.keys()].filter(isRemovedScss),
];
const removedMixins = [...before.mixins].filter((name) => !after.mixins.has(name));
const covered = (name) => (name.startsWith('$') ? name in REMOVED || name in KEPT : name in REMOVED);
const uncovered = [...removedNames.filter((name) => !covered(name)), ...removedMixins.filter((name) => !(name in MIXINS)).map((name) => `@mixin ${name}`)];
const stale = [
  ...Object.entries(REMOVED).filter(([name, entry]) => !entry.pending && !removedNames.includes(name)).map(([name]) => name),
  ...Object.entries(KEPT).filter(([name]) => !after.scss.has(name)).map(([name]) => name),
  ...Object.entries(MIXINS).filter(([name, entry]) => !before.mixins.has(name) || (entry.to || entry.remove ? !entry.pending && after.mixins.has(name) : !after.mixins.has(name))).map(([name]) => `@mixin ${name}`),
];
if (uncovered.length || stale.length) {
  throw new Error([
    ...(uncovered.length ? [`ods-react removes names the REMOVED and MIXINS tables do not cover:\n  ${uncovered.join('\n  ')}`] : []),
    ...(stale.length ? [`the tables cover names that are not what they say on the ref (still there, or never there):\n  ${stale.join('\n  ')}`] : []),
  ].join('\n'));
}
const scssVariables = {};
for (const [name, entry] of Object.entries(REMOVED).sort(([a], [b]) => a.localeCompare(b))) {
  if (name.startsWith('$')) {
    scssVariables[name] = settle(entry, isRemovedScss(name), (to) => after.scss.has(to));
  } else {
    add(name, settle(entry, isRemovedCss(name), declares));
  }
}
Object.assign(scssVariables, KEPT);

/*
 * The variables of ./style that keep their name with another value (a radius, a padding): the v19
 * value with its tokens migrated, when it is not the v20 one, is the one to write back to keep
 * the v19 size. Only values made of tokens and numbers are compared; a colour is a re-binding
 * (BC-08) that the theme covers.
 */
const migrateTokens = (value) => value.replace(/--ods-[a-z0-9-]+/g, (name) => tokens[name]?.to ?? name);
for (const [name, value19] of before.scss) {
  const value20 = after.scss.get(name);
  if (!value20 || name in scssVariables || !/var\(--ods-(?:theme|border-radius)/.test(value19) || /color/.test(name)) continue;
  const kept = migrateTokens(value19.replace(/\s*!default$/, ''));
  if (kept !== value20.replace(/\s*!default$/, '') && !/--ods-(?:theme|color)-/.test(kept)) {
    scssVariables[name] = { bc: 'BC-08', keep: true, note: `keeps its name with another value in v20 (\`${value20}\`). To keep the v19 size, write \`${kept}\`.` };
  }
}
const mixins = Object.fromEntries(Object.entries(MIXINS).map(([name, entry]) => [name, settle(entry, !after.mixins.has(name), (to) => after.mixins.has(to))]));

/* A component stacking rank that keeps its name with a new layer (BC-15): noted wherever it is read or set. */
add('--ods-drawer-z-index', { bc: 'BC-15', keep: true, note: `keeps its name: a drawer is at \`--ods-semantic-z-index-drawer\` (${valueOf(theme, '--ods-semantic-z-index-drawer')}) in v20, 101 in v19, and now sits under a modal: check what you stack against it.` });

/* Declared still, but read by nothing any more: an override of it silently stops working. */
const unread = [...after.declared].filter((name) => before.read.has(name) && !after.read.has(name) && !THEME_NAME.test(name) && !(name in tokens)).sort();
for (const name of unread) {
  add(name, { bc: 'BC-08', hint: 'unread', overrideOnly: true, to: null });
}

/*
 * The SCSS variables of ./style that were a Sass number in v19 and are a var() in v20: Sass
 * arithmetic on them fails, or emits a CSS value the browser drops.
 */
const scssNumber = (map, name, depth = 0) => {
  const value = map.get(name)?.replace(/\s*!default$/, '');
  if (!value || depth > 5) return false;
  if (/^-?\d*\.?\d+[a-z%]*$/i.test(value)) return true;
  const alias = value.match(/^(?:[\w-]+\.)?(\$[\w-]+)$/)?.[1];
  return alias ? scssNumber(map, alias, depth + 1) : false;
};
const scssNumberToVar = [...after.scss.keys()].filter((name) => scssNumber(before.scss, name) && /var\(/.test(after.scss.get(name))).sort();

/* Same guard rail as the source script: every destination must exist in v20, unless pending. */
const live = (entry) => !entry.pending;
const destinations = Object.values(tokens).filter(live).flatMap((entry) => [
  entry.to, entry.read, entry.palette, entry.paletteValue, ...(entry.alsoDeclare ?? []), ...Object.values(entry.byRole ?? {}),
  ...Object.values(entry.byContext ?? {}).flatMap((roles) => Object.values(roles)),
]).filter(Boolean);
const valueNames = [...Object.values(scssVariables), ...Object.values(scssPalette)].flatMap((entry) => entry.value?.match(/--ods-[a-z0-9-]+/g) ?? []);
const missing = [...new Set([...destinations, ...valueNames])].filter((name) => !declares(name));
const missingScss = Object.values(scssVariables).filter(live).map((entry) => entry.to).filter((name) => name && !after.scss.has(name));
const missingMixins = Object.values(mixins).filter(live).map((entry) => entry.to).filter((name) => name && !after.mixins.has(name)).map((name) => `@mixin ${name}`);
if (missing.length || missingScss.length || missingMixins.length) {
  throw new Error(`v20 does not declare:\n  ${[...missing, ...missingScss, ...missingMixins].join('\n  ')}`);
}

/* ------------------------------------------------ the tables against what ODS did to itself */

/*
 * A cell of the tables is only as good as what ODS wrote for the same token in its own styles.
 * Compile the stylesheets of ods-react, the recipes and the docs at both refs, key each
 * declaration by (file, selector chain, property), and wherever v19 read one theme token and v20
 * reads one semantic token, compare it with what the mapping writes. A cell that ODS contradicts
 * is still rewritten, with a point to check that names what ODS reads instead.
 */
const require = createRequire(import.meta.url);
const STYLE_ROOTS = ['packages/ods-react/src', 'packages/ods-recipes/src', 'packages/docs/src'];

/*
 * One key per selector of a list, without the qualifiers that v20 added around the same states
 * (`:not([data-disabled], [data-invalid])`) nor the cascade layers it moved styles into.
 */
function selectorKeys(selector) {
  const bare = selector.replace(/:not\((?:[^()]|\([^()]*\))*\)/g, '').replace(/\s+/g, ' ');
  const keys = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i <= bare.length; i++) {
    if (bare[i] === '(') depth++;
    else if (bare[i] === ')') depth--;
    else if ((bare[i] === ',' && depth === 0) || i === bare.length) {
      keys.push(bare.slice(start, i).trim());
      start = i + 1;
    }
  }
  return keys.filter(Boolean);
}

/* The compiled declarations of the stylesheets, and the classes each CSS module defines. */
function compiledStyles(ref, sass) {
  const dir = mkdtempSync(join(tmpdir(), 'ods-migrate-'));
  try {
    const roots = STYLE_ROOTS.filter((root) => git('ls-tree', '--name-only', ref, root).trim());
    execFileSync('tar', ['-x', '-C', dir], { input: execFileSync('git', ['-C', options.repo, 'archive', ref, ...roots], { maxBuffer: 1 << 30 }) });
    const style = new URL(`file://${join(dir, 'packages/ods-react/src/style/index.scss')}`);
    const walk = (path) => readdirSync(path, { withFileTypes: true }).flatMap((entry) => {
      const child = join(path, entry.name);
      if (entry.isDirectory()) return entry.name === 'node_modules' ? [] : walk(child);
      return /\.s?css$/.test(entry.name) && !/^(_|dev\.)/.test(entry.name) ? [child] : [];
    });
    const found = new Map();
    const classes = new Map();
    for (const path of roots.flatMap((root) => walk(join(dir, root)))) {
      let css;
      try {
        css = path.endsWith('.scss')
          ? sass.compile(path, { importers: [{ findFileUrl: (url) => (url === '@ovhcloud/ods-react/style' ? style : null) }], quietDeps: true, silenceDeprecations: ['import', 'global-builtin'] }).css
          : readFileSync(path, 'utf8');
      } catch {
        continue;
      }
      const root = postcss.parse(css);
      if (path.startsWith(join(dir, 'packages/ods-react/src/components/'))) {
        root.walkRules((rule) => {
          for (const [, name] of rule.selector.matchAll(/\.([a-zA-Z][\w-]*)/g)) classes.set(basename(path), (classes.get(basename(path)) ?? new Set()).add(name));
        });
      }
      root.walkDecls((decl) => {
        const conditions = [];
        for (let node = decl.parent.parent; node && node.type !== 'root'; node = node.parent) {
          if (node.type === 'atrule' && node.name !== 'layer') conditions.unshift(`@${node.name} ${node.params}`);
        }
        if (decl.parent.type !== 'rule') return;
        for (const selector of selectorKeys(decl.parent.selector)) {
          const key = `${relative(dir, path)} | ${[...conditions, selector].join(' > ')} | ${decl.prop}`;
          found.set(key, [...(found.get(key) ?? []), decl.value]);
        }
      });
    }
    return { classes, declarations: found };
  } finally {
    rmSync(dir, { force: true, recursive: true });
  }
}

/*
 * The modifiers of the internal CSS-module classes that v20 renames (`button--ghost` →
 * `button--low`), checked on both refs below. `null`: no v20 class, the codemod marks it.
 * `{ to, choice, hint }`: the class also matched the elements without the prop (the v19
 * default), which render another class in Aluminium: renamed only when the config keeps the v19
 * look (the codemod then writes that default out), marked with the hint otherwise.
 */
const CSS_MODIFIERS = {
  badge: { primary: 'accent' },
  button: {
    default: {
      choice: 'button-default-emphasis',
      hint: 'it also matched every Button without `variant`, which renders `button--medium` in v20 (Aluminium): only the explicit `variant="default"` ones become `button--high`. Select [data-ods="button"] and the props of the component instead',
      to: 'high',
    },
    ghost: 'low',
    information: null,
    outline: {
      choice: 'button-default-emphasis',
      hint: '`button--medium` in v20, which also matches every Button without `emphasis` (the v20 default, Aluminium): select [data-ods="button"] and the props of the component instead',
      to: 'medium',
    },
    primary: 'brand',
    success: null,
    warning: null,
  },
  card: { primary: 'accent' },
  message: {
    default: {
      choice: 'message-default-emphasis',
      hint: 'it also matched every Message without `variant`, which renders `medium` in v20 (Aluminium), a class-less emphasis: only the explicit `variant="default"` ones become `message--high`. Select [data-ods="message"] and the props of the component instead',
      to: 'high',
    },
    light: null,
    primary: 'accent',
  },
  tag: { primary: 'accent' },
};
const modifierTarget = (entry) => (entry !== null && typeof entry === 'object' ? entry.to : entry);

const contradicted = new Map();
let cssModifiers = CSS_MODIFIERS;
let sass = null;
try {
  sass = require('sass');
} catch {
  console.warn('sass is not installed: the tables are not checked against the styles of ODS, nor the class modifiers');
}
if (sass) {
  const draft = { hints: {}, tokens };
  const v19 = compiledStyles(from, sass);
  const v20 = compiledStyles(options.ref, sass);
  for (const [key, values19] of v19.declarations) {
    const values20 = v20.declarations.get(key) ?? [];
    const [file, selector, prop] = key.split(' | ');
    // Only the sites that say it without doubt: one value on each side, one token in each, no theme declaration, no gradient.
    if (values19.length !== 1 || values20.length !== 1) continue;
    const old = (values19[0].match(/--ods-[a-z0-9-]*[a-z0-9]/g) ?? []).filter((name) => name in tokens && !tokens[name].overrideOnly);
    const read = values20[0].match(/--ods-(?:semantic|palette)-[a-z0-9-]*[a-z0-9]/g) ?? [];
    if (old.length !== 1 || read.length !== 1 || prop in tokens || /gradient\(/.test(values19[0])) continue;
    const entry = tokens[old[0]];
    // A ramp step carries no role: ODS picking a more precise one per component is the rule, not a contradiction.
    if (/^--ods-color-[a-z]+-\d{3}$/.test(old[0])) continue;
    const hover = /:(hover|active|focus)/.test(selector) || /-(hover|active)$/.test(prop);
    const placeholder = /::?placeholder/.test(selector) || /placeholder/.test(prop);
    const role = roleOfProperty(prop);
    const { to } = resolveToken(draft, old[0], { hover, placeholder, role, stack: prop === 'z-index' });
    if (!to || to === read[0]) continue;
    const cell = 'to' in entry ? '*' : (placeholder && entry.byRole['content:placeholder'] && 'content:placeholder') || (hover && entry.byRole[`${role}:hover`] && `${role}:hover`) || role;
    const id = `${old[0]} ${cell}`;
    if (!contradicted.has(id)) contradicted.set(id, { cell, name: old[0], reads: new Map() });
    const files = contradicted.get(id).reads.get(read[0]) ?? new Set();
    contradicted.get(id).reads.set(read[0], files.add(file.split('/').pop()));
  }
  for (const { cell, name, reads } of contradicted.values()) {
    tokens[name].ods ??= {};
    tokens[name].ods[cell] = [...reads].map(([read, files]) => ({ files: [...files].sort(), read }));
  }

  /* What ODS reads where it stopped reading an unread token: the override to write instead. */
  for (const name of unread) {
    const instead = new Set();
    for (const [key, values19] of v19.declarations) {
      if (values19.some((value) => value.includes(`var(${name})`))) {
        for (const value of v20.declarations.get(key) ?? []) {
          for (const used of value.match(/--ods-[a-z0-9-]*[a-z0-9]/g) ?? []) if (used !== name) instead.add(used);
        }
      }
    }
    if (instead.size) {
      tokens[name].detail = `ODS reads ${[...instead].sort().map((used) => `\`${used}\``).join(', ')} there now`;
    }
  }

  /* Each modifier must exist in v19, be gone in v20, and its target must exist in v20. */
  const wrong = [];
  for (const [block, modifiers] of Object.entries(CSS_MODIFIERS)) {
    const classes19 = v19.classes.get(`${block}.module.scss`) ?? new Set();
    const classes20 = v20.classes.get(`${block}.module.scss`) ?? new Set();
    for (const [modifier, entry] of Object.entries(modifiers)) {
      const target = modifierTarget(entry);
      if (!classes19.has(`${block}--${modifier}`)) wrong.push(`${block}--${modifier} is not a v19 class`);
      if (classes20.has(`${block}--${modifier}`)) wrong.push(`${block}--${modifier} is still a v20 class`);
      if (target && !classes20.has(`${block}--${target}`)) wrong.push(`${block}--${target} is not a v20 class`);
    }
  }
  if (wrong.length) {
    throw new Error(`the class modifiers do not match the refs:\n  ${wrong.join('\n  ')}`);
  }
} else {
  cssModifiers = {};
}

/* -------------------------------------------------------------------------- the Tailwind keys */

/*
 * The keys of the Tailwind v3 config that the guide documents, v19 → v20, paired by the token
 * they read: the v19 key's token, migrated, is the token the v20 key reads. A v19 key whose token
 * has no documented v20 key is left out (its value still migrates).
 */
const TAILWIND_GUIDE = {
  from: 'packages/storybook/stories/ovhcloud-design-system/design-and-style/tailwind.mdx',
  to: 'packages/docs/src/content/guides/tailwind.mdx',
};
const tailwindConfig = (ref, path) => {
  let text;
  try {
    text = git('show', `${ref}:${path}`);
  } catch {
    return null;
  }
  const sections = {};
  for (const [, section, body] of text.matchAll(/(borderRadius|colors|fontFamily)\s*:\s*\{([^}]*)\}/g)) {
    sections[section] ??= [...body.matchAll(/'([\w-]+)'\s*:\s*'var\((--ods-[a-z0-9-]+)\)'/g)].map(([, key, token]) => ({ key, token }));
  }
  return sections;
};
const tailwindKeys = {};
const tailwind19 = tailwindConfig(from, TAILWIND_GUIDE.from);
const tailwind20 = tailwindConfig(options.ref, TAILWIND_GUIDE.to);
if (!tailwind19 || !tailwind20) {
  console.warn('the Tailwind guide is missing on one of the refs: no Tailwind key is renamed');
} else {
  for (const [section, keys] of Object.entries(tailwind19)) {
    for (const { key, token } of keys) {
      const entry = tokens[token];
      const targets = new Set([entry?.to, ...Object.values(entry?.byRole ?? {})].filter(Boolean));
      const match = (tailwind20[section] ?? []).find((candidate) => targets.has(candidate.token));
      if (match && match.key !== key) tailwindKeys[key] = match.key;
      // No documented v20 key: its utilities are marked, never renamed (the guide names the roles to pick).
      else if (!match) tailwindKeys[key] = null;
    }
  }
}

/* ------------------------------------------------------------------------------------ hints */

const hints = {
  'badge-mixin': '`ods-badge()` now draws a 1px solid border (coloured by `ods-badge-color()`, `currentColor` without it) and a full radius: to keep the v19 look, add `border: 0` and `--ods-badge-border-radius: var(--ods-semantic-size-radius-control)` after the include.',
  declaration: 'a v19 theme declaration: a v20 theme declares the palette (`--ods-palette-*`) and, where a role needs its own value, the semantic token (`--ods-semantic-*`).',
  disabled: 'disabled is an opacity in v20, not a colour: remove this colour. To dim like ODS, set `opacity: var(--ods-semantic-opacity-disabled)` on `:disabled` / `[data-disabled]`; for a grey, write your own colour there.',
  'disabled-scss': 'disabled is an opacity in v20, not a colour: to look disabled like ODS, replace these colours with `@include ods-is-disabled()` (or `opacity: var(--ods-semantic-opacity-disabled)`); to keep a grey, write your own colour.',
  'drawer-max-size': 'removed: use `$drawer-max-width` or `$drawer-max-height`, or write its v19 value, calc(100% - 48px).',
  'is-disabled-mixin': '`ods-is-disabled()` now dims with `opacity: var(--ods-semantic-opacity-disabled)` instead of painting the v19 disabled grey: anything painted on this element is dimmed too. To keep a grey, set the colours here yourself.',
  'message-close': 'removed: the close button of a Message keeps its neutral look on every status and emphasis in v20, so an override has no effect and a read resolves to nothing. Remove it, or style the close button inside `[data-ods="message"]` yourself.',
  'button-status-removed': 'removed: the `information`, `success` and `warning` Buttons are gone in v20 (use `status="neutral"`, or a Message for a status), so an override of it paints nothing: delete it.',
  'link-hover': 'no v20 theme role: the Link hover colour is `--ods-link-text-color-hover`, set it on `[data-ods="link"]`. Its default is the rest colour, and the thicker underline is the hover signal in v20.',
  'modal-color-mixin': 'removed: the header background it painted belongs to a `color` the Modal no longer renders. Delete this include.',
  'modal-header': 'removed: the Modal header has no status colour in v20, so an override has no effect and a read resolves to nothing. Remove it, or style the header inside `[data-ods="modal-content"]` yourself.',
  'modal-margin': 'removed: use `$ods-modal-margin-horizontal` or `$ods-modal-margin-vertical`, or write its v19 value, 16px.',
  switch: 'removed with the Switch component: replace the Switch (Tabs with `variant="switch"`, Button Group or Radio Group, see the Switch section of the migration guide) and style the replacement through its own custom properties.',
  'tab-selected': 'removed: a selected Tab paints the theme roles `--ods-semantic-color-border-selected-solid` (border), `--ods-semantic-color-surface-selected` (background) and `--ods-semantic-color-content-on-selected` (text) in v20. Override those inside `[data-ods="tab"][aria-selected="true"]` instead.',
  'toggle-border': 'removed: the Toggle border reads `--ods-semantic-color-border-control` in v20. Override that inside `[data-ods="toggle-control"]` instead.',
  'unread-removed': 'removed: it held the rest value and nothing read it, so an override of it never did anything. Delete it.',
  'no-equivalent': 'no v20 token for this value: write the value.',
  'number-to-var': 'a CSS var() in v20, not a Sass number: Sass arithmetic on it fails or emits a value the browser drops. Wrap it in calc().',
  ods: 'ODS v20 itself uses',
  'palette-changed': 'this palette variable keeps its name in v20 with another colour, and no v20 stop holds the v19 one: write the value, or pick a `--ods-semantic-color-*` role.',
  'palette-removed': 'removed, and no v20 palette stop holds this colour: write the value, or pick a `--ods-semantic-color-*` role.',
  'radius-xs': 'removed, v20 has no radius below `--ods-semantic-size-radius-control` (4px): write its v19 value, 2px, or use the closest `--ods-semantic-size-radius-*`.',
  role: 'v20 names colours by what they paint: pick the one for this place.',
  shared: 'in the v20 default theme, this palette step also feeds',
  tile: 'removed, and never read even in v19 (`Tile` renders a `Card`): this override did nothing. Remove it; overriding the Card token instead changes the rendering.',
  'toggle-hover': 'removed: the unchecked `Toggle` no longer changes its background on hover, so an override has no effect and a read resolves to nothing. Remove it, or style `[data-ods="toggle-control"]:hover` yourself.',
  unknown: 'ODS v19 never declared this name: it gives its fallback value (or nothing), in v19 as in v20. Nothing to do for the migration.',
  unread: 'ODS v20 still declares this token but no longer reads it: an override of it has no effect.',
  'z-rerank': `the ODS overlays get new z-index values in v20 (v19: dropdowns 99, modal 100, drawer 101; v20: ${layers}), so a value computed from this token, kept in a variable, or overriding it may now land under a drawer or a modal: check what it must sit above, and set its value by hand.`,
};

/* Every hint names what exists: its key, the v20 tokens it cites, a guide section if any. */
const guide = git('show', `${options.ref}:packages/docs/src/content/guides/migration-19-to-20.mdx`);
const headings = new Set([...guide.matchAll(/<Heading[^>]*label="([^"]+)"/g)].map(([, label]) => label));
const entriesOf = (table) => Object.entries(table).map(([name, entry]) => ({ entry, name }));
const allEntries = [tokens, scssVariables, mixins, scssPalette].flatMap(entriesOf);
const texts = [...Object.values(hints), ...allEntries.flatMap(({ entry }) => [entry.note, entry.detail]).filter(Boolean)];
const badHints = [
  ...allEntries.filter(({ entry }) => entry.hint && !(entry.hint in hints)).map(({ entry, name }) => `${name}: no hint "${entry.hint}"`),
  ...allEntries.filter(({ entry }) => (entry.to === null || (entry.keep && !entry.note)) && !entry.hint).map(({ name }) => `${name}: no hint`),
  ...texts.filter((text) => /\bBC-\d+/.test(text)).map((text) => `cites a BC code: ${text}`),
  ...texts.flatMap((text) => [...text.matchAll(/"([^"]+)" (?:section )?(?:in|of) the (?:migration )?guide/g)]).filter(([, section]) => !headings.has(section)).map(([, section]) => `no "${section}" section in the guide`),
  ...texts.flatMap((text) => text.match(/--ods-(?:semantic|palette)-[a-z0-9-]*[a-z0-9](?![a-z0-9-]*\*)/g) ?? []).filter((name) => !declares(name)).map((name) => `${name} is not a v20 token`),
];
if (badHints.length) {
  throw new Error(`the hints do not hold:\n  ${badHints.join('\n  ')}`);
}

const mapping = {
  from: '19',
  to: '20',
  source: { file: 'packages/themes/scripts/repoint-tokens.js', from, ref: options.ref, sha },
  hints,
  scss: scssVariables,
  tokens,
  mixins,
  scssPalette,
  scssNumberToVar,
  cssModifiers,
  tailwindKeys,
};

writeFileSync(options.out, `${JSON.stringify(mapping, null, 2)}\n`);
const pendingCount = allEntries.filter(({ entry }) => entry.pending).length;
console.log(`${Object.keys(tokens).length} tokens, ${Object.keys(scssVariables).length} SCSS variables, ${Object.keys(mixins).length} mixins, ${Object.keys(scssPalette).length} palette variables mapped (${pendingCount} pending), ${from} → ${options.ref} (${sha}), ${unread.length} declared but no longer read, ${contradicted.size} cells that ODS contradicts in its own styles → ${relative(process.cwd(), options.out)}`);
for (const { cell, name, reads } of contradicted.values()) {
  console.log(`  ${name} (${cell === '*' ? 'rename' : cell}): ODS reads ${[...reads].map(([read, files]) => `${read} in ${[...files].join(', ')}`).join('; ')}`);
}
