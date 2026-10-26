#! /usr/bin/env node

/*
 * Re-points every reference to the retired token surface onto the semantic layer.
 *
 * Two historical surfaces disappear in this refactor and both are referenced from component
 * styles, so neither can be deleted without rewriting the references in the same change:
 *
 *   --ods-theme-*            the 72 role tokens. A direct rename, one destination each, except
 *                            the six --ods-theme-<color>-color variants, which served as fill,
 *                            border AND text and therefore split three ways.
 *   --ods-color-<f>-<rung>   the tier-1 ramp aliases. There is no rename for these: a ramp step
 *                            carries no role, so the destination depends on what the declaring
 *                            property does with it. That is what RAMP below encodes.
 *
 * The declaring property is the whole signal. `--ods-button-background-color-critical` and
 * `--ods-button-text-color-critical` may both read critical-500, and they resolve to
 * surface-critical and content-critical respectively. So this is a line-oriented rewrite that
 * always knows which property it is inside, not a global search and replace.
 *
 * Usage:
 *   node scripts/repoint-tokens.js --report [path...]   write the report, change nothing
 *   node scripts/repoint-tokens.js --write [path...]    apply, and write the report
 *   node scripts/repoint-tokens.js --tables             print the BREAKING-CHANGES-V20.md tables
 *   node scripts/repoint-tokens.js --tables --update    rewrite them in BREAKING-CHANGES-V20.md
 *
 * Paths are relative to the repo root and default to the ods-react and ods-recipes sources.
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const REPO = path.resolve(__dirname, '../../..');
const REPORT = path.join(REPO, 'packages/themes/scripts/repoint-report.csv');

const WRITE = process.argv.includes('--write');

/* ------------------------------------------------------------------ the role token renames */

/*
 * One destination each. Order matters at match time, not here: the matcher sorts longest first,
 * because --ods-theme-text-color is a strict prefix of --ods-theme-text-color-disabled and a
 * naive pass would corrupt it.
 *
 * `null` means the role is gone with nothing to take over - the disabled colors, now an opacity
 * (BC-12 in BREAKING-CHANGES-V20.md) - so the site is reported, not rewritten.
 */
const THEME = {
  'anchor-text-color': 'color-content-brand',
  'anchor-text-color-hover': 'color-interaction-brand-hover',
  'anchor-text-color-visited': 'color-interaction-brand-visited',
  'background-color': 'color-surface-page',
  'background-color-disabled': null,
  'background-color-drag-over': 'color-surface-drag-over',
  'background-color-readonly': 'color-surface-readonly',
  'background-color-selected': 'color-surface-selected-solid',
  'border-color-disabled': null,
  'border-color-drag-over': 'color-border-drag-over',
  'border-color-readonly': 'color-border-readonly',
  'border-color-selected': 'color-border-selected-solid',
  'brand-color': 'color-brand',
  'heading-text-color': 'color-content-heading',
  'progress-background-color': 'color-surface-control-solid',
  'split-background-color': 'color-border-neutral-minimal',
  'split-border-color': 'color-border-neutral-minimal',
  'text-color': 'color-content-text',
  'text-color-disabled': null,
  'text-color-selected': 'color-content-on-selected-solid',
  'track-background-color': 'color-surface-track',
  'track-background-color-disabled': null,

  'outline-color': 'color-focus',
  'outline-offset': 'border-focus-offset',
  'outline-style': 'border-focus-style',
  'outline-width': 'border-focus-thickness',

  'backdrop-background-color': 'color-surface-backdrop',
  'backdrop-opacity': 'opacity-backdrop',
  'overlay-border-radius': 'size-radius-overlay',
  'overlay-box-shadow': 'shadow-overlay',
  'overlay-z-index': 'z-index-dropdown',

  'border-radius': 'size-radius-container',
  'border-width': 'border-thickness',
  'column-gap': 'size-space-gap-inline',
  'padding-horizontal': 'size-space-inset-inline',
  'padding-vertical': 'size-space-inset-block',
  'row-gap': 'size-space-gap-block',

  'transition-duration': 'motion-duration-slow',

  'font-family': 'font-family-body',
  'font-family-code': 'font-family-code',

  'input-background-color-checked': 'color-surface-control-solid',
  'input-background-color-checked-hover': 'color-interaction-control-solid-hover',
  'input-background-color-invalid': 'color-surface-critical',
  'input-border-color': 'color-border-control',
  'input-border-color-checked': 'color-border-control-solid',
  'input-border-color-checked-hover': 'color-interaction-control-solid-hover',
  'input-border-color-hover': 'color-interaction-control-hover',
  'input-border-color-invalid': 'color-border-critical',
  'input-border-radius': 'size-radius-control',
  'input-border-width': 'border-thickness',
  'input-min-height': 'size-block-size-md',
  'input-option-background-color-hover': 'color-interaction-highlight',
  'input-option-background-color-selected': 'color-surface-selected',
  'input-option-background-color-selected-hover': 'color-interaction-selected-highlight',
  'input-padding-horizontal': 'size-space-inset-inline',
  'input-padding-vertical': 'size-space-inset-block-compact',
  'input-placeholder-text-color': 'color-content-placeholder',
  'input-text-color': 'color-content-text',
  'input-text-color-checked': 'color-content-on-control-solid',
  'input-text-color-invalid': 'color-content-critical',

  'chart-background-color': 'color-chart-background',
  'chart-axis-color': 'color-chart-axis',
  'chart-tick-color': 'color-chart-tick',
  'chart-legend-color': 'color-chart-legend',
  'chart-grid-color': 'color-chart-grid',
  'chart-reference-line-color': 'color-chart-reference-line',
};

/*
 * The six that split. Each was used as a fill, as a border and as a text color, so the single
 * historical name becomes one of three depending on the declaring property. This is the only
 * part of the role rename that is not mechanical, and the report lists every site.
 */
const THEME_SPLIT = {
  'critical-color': 'critical',
  'information-color': 'information',
  'neutral-color': 'neutral',
  'primary-color': 'brand',
  'success-color': 'success',
  'warning-color': 'warning',
};

/* ------------------------------------------------------------------------- the ramp rules */

/* primary and information were byte-identical aliases of blue; they stay distinct as roles. */
const FAMILY = {
  primary: 'brand',
  information: 'information',
  critical: 'critical',
  success: 'success',
  warning: 'warning',
  neutral: 'neutral',
};

/*
 * (kind, family, rung, prop) -> role. `null` means "no destination, report it".
 *
 * The state comes from the name of the declaring property: a `-hover` or `-active` declaration
 * takes the interaction role of its rung, any other the static one. A `:hover` selector is not
 * read, so `.x:hover { background-color: ... }` gets the static role.
 */
function rampRole(kind, family, rung, prop) {
  const f = FAMILY[family];
  const state = /-hover$/.test(prop) ? 'hover' : (/-active$/.test(prop) ? 'active' : 'rest');
  const light = ['025', '050', '075', '100', '200', '300'].includes(rung);

  if (kind === 'surface') {
    if (rung === '000') return 'color-surface-page';
    if (state !== 'rest') {
      if (f === 'brand') return light ? `color-interaction-accent-subtle-${state}` : `color-interaction-brand-${state}`;
      return light ? `color-interaction-${f}-subtle-${state}` : `color-interaction-${f}-${state}`;
    }
    if (f === 'neutral') {
      if (['025', '050', '075', '100'].includes(rung)) return 'color-surface-neutral-minimal';
      if (['200', '300'].includes(rung)) return 'color-surface-neutral-subtle';
      if (rung === '900') return 'color-surface-code';
      return 'color-surface-neutral';
    }
    if (f === 'brand') {
      if (['025', '050', '075', '100'].includes(rung)) return 'color-surface-selected';
      if (['200', '300'].includes(rung)) return 'color-surface-information-subtle';
      if (['800', '900'].includes(rung)) return 'color-surface-selected-solid';
      return 'color-surface-brand';
    }
    return light ? `color-surface-${f}-subtle` : `color-surface-${f}`;
  }

  if (kind === 'border') {
    if (rung === '000') return 'color-surface-page';
    if (f === 'neutral') {
      if (state !== 'rest' && ['400', '500'].includes(rung)) return 'color-interaction-control-hover';
      if (state !== 'rest' && !light) return `color-interaction-neutral-${state}`;
      if (['025', '050', '075', '100'].includes(rung)) return 'color-border-neutral-minimal';
      if (rung === '200') return 'color-border-neutral-subtle';
      if (rung === '300') return 'color-border-control';
      return 'color-border-neutral';
    }
    if (f === 'brand') {
      if (light) return 'color-border-information-subtle';
      return state === 'rest' ? 'color-border-brand' : `color-interaction-brand-${state}`;
    }
    if (light) return `color-border-${f}-subtle`;
    if (state === 'rest') return `color-border-${f}`;
    return `color-interaction-${f}-${state}`;
  }

  if (kind === 'content') {
    /* The decorative badges carry their own text color, whatever rung they were written with. */
    if (/alpha|beta|-new|promotion/.test(prop)) return 'color-content-on-vivid';
    if (rung === '000') return 'color-content-on-solid';
    if (f === 'neutral') {
      if (['025', '050', '075', '100', '200', '300'].includes(rung)) return 'color-content-on-solid';
      if (['400', '500'].includes(rung)) return 'color-content-neutral';
      if (rung === '600') return /placeholder/.test(prop) ? 'color-content-placeholder' : 'color-content-neutral';
      if (['700', '800', '900'].includes(rung)) return 'color-content-on-neutral';
    }
    if (f === 'brand') {
      if (['400', '500'].includes(rung)) return 'color-content-brand';
      /*
       * Everything darker is brand text sitting on a brand-tinted ground - a ghost hover fill, a
       * light message, a tag. An interaction token would be wrong here: this text is static, and
       * binding it to a hover role would make it move when the hover color is re-themed.
       */
      if (['600', '700', '800', '900'].includes(rung)) return 'color-content-on-brand';
    }
    if (f === 'warning') {
      if (['500', '600', '700'].includes(rung)) return 'color-content-warning';
      if (['800', '900'].includes(rung)) return 'color-content-on-warning';
    }
    if (['400', '500'].includes(rung)) return `color-content-${f}`;
    if (['600', '700', '800', '900'].includes(rung)) return `color-content-on-${f}`;
  }

  return null;
}

/*
 * What a table cannot settle: the destination depends on what the site paints. The rewrite keeps
 * the table's answer, --tables prints these under the tables so a reviewer picks per site.
 */
const NOTES = {
  theme: {
    'background-color': 'per site: `surface-page` for the page, `surface-raised` for a card or a panel, `surface-overlay` for a popover, a modal or a drawer, `surface-control` for a field. ODS reads all four.',
    'heading-text-color': 'a group label in a list (Select, Combobox, Menu, Query Filter) reads `content-group-label`.',
    'overlay-z-index': 'an offset meant to clear a drawer or a modal now lands under them: restack it with BC-15.',
  },
  split: {
    'primary-color': 'in a `color`, an icon or a caret reads `content-icon`.',
  },
  ramp: {
    surface: [
      ['every family', '000', 'white: per site, as `--ods-theme-background-color` in BC-01.'],
      ['primary', '025-300 on a `-hover` / `-active`', 'ODS picked per component: `interaction-brand-subtle-*` on the primary ghost and outline Button, `interaction-accent-subtle-*` on the Tag, `interaction-highlight` on list-like items (Switch, File Upload).'],
      ['neutral', '025-100 on a `-hover` / `-active`', 'the Tab hover reads `interaction-highlight`, as the list-like items do.'],
      ['primary', '200-300', '`primary` was also the brand: a brand or accent tint reads `surface-accent-subtle` rather than the information family.'],
      ['neutral', '700-900', '`surface-code` is the role of the Code block. No role holds another dark neutral fill: `surface-neutral` is the solid neutral one.'],
    ],
    border: [
      ['every family', '000', 'white: per site, as `--ods-theme-background-color` in BC-01.'],
      ['primary', '025-300', '`primary` was also the brand: a brand or accent line reads `border-accent-subtle` rather than the information family.'],
      ['neutral', '400-500 on a `-hover` / `-active`', '`interaction-control-hover` is the hover of the fields, read by the Accordion and the Tile. It has no pressed rung, so an `-active` declaration gets it too.'],
    ],
    content: [
      ['warning', '800-900', 'text on a solid warning fill reads `content-on-warning-solid`.'],
    ],
  },
};

/* The named tier-1 colors that were never ramps. */
const NAMED = {
  alpha: 'color-surface-decorative-alpha',
  beta: 'color-surface-decorative-beta',
  new: 'color-surface-decorative-new',
  promotion: 'color-surface-decorative-promotion',
  text: 'color-content-text',
  heading: 'color-content-heading',
  /*
   * Dangling today: two dev-module rules read --ods-color-text-secondary and nothing declares it,
   * so they currently render with an inherited color. Pointed at the closest real role.
   */
  'text-secondary': 'color-content-placeholder',

  /*
   * The flat tokens deprecated several majors ago. They were never removed because they still
   * have live internal readers, which is exactly what this list clears.
   */
  'background-disabled-default': null,
  'background-readonly-default': 'color-surface-readonly',
  'border-disabled-default': null,
  'border-readonly-default': 'color-border-readonly',
  'text-disabled-default': null,
  'element-background-selected': 'color-surface-selected-solid',
  'element-text-selected': 'color-content-on-selected-solid',
  'form-element-background-default': 'color-surface-control',
  'form-element-background-hover-default': 'color-interaction-control-highlight',
  'form-element-background-focus-default': 'color-surface-control',
  'form-element-background-critical': 'color-surface-control',
  'form-element-background-selected-critical': 'color-surface-critical',
  'form-element-border-default': 'color-border-control',
  'form-element-border-hover-default': 'color-interaction-control-hover',
  'form-element-border-focus-default': 'color-interaction-control-hover',
  'form-element-border-critical': 'color-border-critical',
  'form-element-text-default': 'color-content-text',
  'form-element-text-placeholder-default': 'color-content-placeholder',
};

/* The last legacy tokens outside both families (BC-03). A proposal until design confirms it. */
const LEGACY = {
  'border-radius-xs': null,
  'border-radius-sm': 'size-radius-control',
  'border-radius-md': 'size-radius-container',
  'border-radius-lg': 'size-radius-pill',
  'border-width-sm': 'border-thickness',
  'border-width-md': 'border-thickness-strong',
  'font-family-default': 'font-family-body',
  'font-family-code': 'font-family-code',
  'form-element-input-height': 'size-block-size-md',
  'outline-color-default': 'color-focus',
  'outline-offset': 'border-focus-offset',
  'outline-style-default': 'border-focus-style',
  'outline-width': 'border-focus-thickness',
};

/* --------------------------------------------------------------------- property -> kind */

function kindOf(prop) {
  if (/background|--ods-range-track|-fill-|^fill$/.test(prop)) return 'surface';
  if (/border-color|^border|outline-color|-border$|-ring/.test(prop)) return 'border';
  if (/box-shadow/.test(prop)) return 'shadow';
  if (/color$|color-|^color$/.test(prop)) return 'content';
  return 'other';
}

function splitRole(family, kind) {
  if (kind === 'surface') return `color-surface-${family}`;
  if (kind === 'border') return `color-border-${family}`;
  return `color-content-${family}`;
}

/* ------------------------------------------------------------------------- the guard rail */

/*
 * Every destination the tables can emit must be declared by the default theme, or a rewrite
 * would trade one dead token for another.
 */
function destinations() {
  const out = new Set([...Object.values(THEME), ...Object.values(NAMED), ...Object.values(LEGACY)]);
  Object.values(THEME_SPLIT).forEach((f) => ['surface', 'border', 'content'].forEach((kind) => out.add(splitRole(f, kind))));
  for (const kind of ['surface', 'border', 'content']) {
    for (const family of Object.keys(FAMILY)) {
      for (const rung of ['000', '025', '050', '075', '100', '200', '300', '400', '500', '600', '700', '800', '900']) {
        ['color', 'color-hover', 'color-active', 'placeholder-color', 'alpha-color'].forEach((prop) => out.add(rampRole(kind, family, rung, prop)));
      }
    }
  }
  out.delete(null);
  return out;
}

const themeSource = fs.readFileSync(path.join(REPO, 'packages/themes/src/default/index.scss'), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\/\/.*$/gm, '');
const declared = new Set(themeSource.match(/--ods-[a-z0-9-]+(?=\s*:)/g));
const undeclared = [...destinations()].filter((role) => !declared.has(`--ods-semantic-${role}`)).sort();
if (undeclared.length) {
  console.error(`the default theme does not declare:\n${undeclared.map((role) => `  --ods-semantic-${role}`).join('\n')}`);
  process.exit(3);
}

/* -------------------------------------------------------------------------------- tables */

if (process.argv.includes('--tables')) {
  const RUNGS = ['000', '025', '050', '075', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
  const cell = (role) => (role ? `\`--ods-semantic-${role}\`` : '_none_');
  const short = (role) => (role ? `\`${role.replace(/^color-/, '')}\`` : '_none_');
  const table = (head, body) => [`| ${head.join(' | ')} |`, `| ${head.map(() => '---').join(' | ')} |`, ...body.map((r) => `| ${r.join(' | ')} |`)].join('\n');
  const notes = (items) => (items.length ? `\n\nDepends on the site:\n\n${items.map((item) => `- ${item}`).join('\n')}` : '');
  const stateCell = (kind, family, rung) => {
    const hover = rampRole(kind, family, rung, 'color-hover');
    const active = rampRole(kind, family, rung, 'color-active');
    if (hover === active) return short(hover);
    return active === hover.replace(/-hover$/, '-active') ? `${short(hover)} / \`-active\`` : `${short(hover)} / ${short(active)}`;
  };
  const ramp = (kind, withState) => [
    table(['rung', ...Object.keys(FAMILY)], RUNGS.map((rung) => [rung, ...Object.keys(FAMILY).map((f) => short(rampRole(kind, f, rung, '')))])),
    ...(withState ? ['\nOn a `-hover` / `-active` declaration:\n', table(['rung', ...Object.keys(FAMILY)], RUNGS.map((rung) => [rung, ...Object.keys(FAMILY).map((f) => stateCell(kind, f, rung))]))] : []),
  ].join('\n') + notes(NOTES.ramp[kind].map(([family, rungs, text]) => `${family}, ${rungs}: ${text}`));

  const BLOCKS = {
    'bc01-renames': table(['before', 'after'], Object.entries(THEME).map(([k, v]) => [`\`--ods-theme-${k}\``, cell(v)]))
      + notes(Object.entries(NOTES.theme).map(([k, text]) => `\`--ods-theme-${k}\`: ${text}`)),
    'bc01-split': table(['before', 'in a `background` / `fill`', 'in a `border-color` / `outline-color`', 'in a `color`'],
      Object.entries(THEME_SPLIT).map(([k, f]) => [`\`--ods-theme-${k}\``, ...['surface', 'border', 'content'].map((kind) => cell(splitRole(f, kind)))]))
      + notes(Object.entries(NOTES.split).map(([k, text]) => `\`--ods-theme-${k}\`: ${text}`)),
    'bc02-surface': ramp('surface', true),
    'bc02-border': ramp('border', true),
    'bc02-content': ramp('content', false),
    'bc02-named': table(['before', 'after'], Object.entries(NAMED).map(([k, v]) => [`\`--ods-color-${k}\``, cell(v)])),
  };

  if (process.argv.includes('--update')) {
    const doc = path.join(REPO, 'BREAKING-CHANGES-V20.md');
    let text = fs.readFileSync(doc, 'utf8');
    for (const [id, body] of Object.entries(BLOCKS)) {
      const re = new RegExp(`(<!-- repoint-tokens:${id} -->\\n)[\\s\\S]*?(\\n<!-- /repoint-tokens:${id} -->)`);
      if (!re.test(text)) {
        console.error(`BREAKING-CHANGES-V20.md has no <!-- repoint-tokens:${id} --> block`);
        process.exit(4);
      }
      text = text.replace(re, (m, open, close) => `${open}${body}${close}`);
    }
    fs.writeFileSync(doc, text);
  } else {
    Object.entries(BLOCKS).forEach(([id, body]) => console.log(`<!-- repoint-tokens:${id} -->\n${body}\n<!-- /repoint-tokens:${id} -->\n`));
  }
  process.exit(0);
}

/* ------------------------------------------------------------------------------- rewrite */

const themeKeys = Object.keys(THEME).concat(Object.keys(THEME_SPLIT)).sort((a, b) => b.length - a.length);
const THEME_RE = new RegExp(`--ods-theme-(${themeKeys.join('|')})(?![a-z0-9-])`, 'g');
const RAMP_RE = /--ods-color-([a-z]+)-(\d{3})(?![a-z0-9-])/g;
const NAMED_RE = new RegExp(`--ods-color-(${Object.keys(NAMED).sort((a, b) => b.length - a.length).join('|')})(?![a-z0-9-])`, 'g');
const LEGACY_RE = new RegExp(`--ods-(${Object.keys(LEGACY).sort((a, b) => b.length - a.length).join('|')})(?![a-z0-9-])`, 'g');
const OLD_RE = /--ods-(theme|color|border-radius|border-width|font-family|form-element|outline)-/;

const rows = [];
let unmapped = 0;

/*
 * The nearest `name:` before the token on its line, which also catches a JSX inline style
 * (camelCased), or else the declaration carried down from the lines above.
 */
function propAt(line, offset, carried) {
  const m = line.slice(0, offset).match(/([A-Za-z-]+)\s*:\s*[^:;{]*$/);
  return m ? m[1].replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`) : carried;
}

function rewriteLine(line, carried, file, lineNo) {
  const report = (prop, from, rule) => {
    rows.push([file, lineNo, prop, from, '', rule]);
    unmapped += 1;
    return from;
  };
  const rename = (prop, from, role, rule) => {
    rows.push([file, lineNo, prop, from, `--ods-semantic-${role}`, rule]);
    return `--ods-semantic-${role}`;
  };
  /* A color inside a gradient is not the property's fill, so the property says nothing about it. */
  const inGradient = (offset) => /gradient\(/.test(line.slice(0, offset));
  let out = line;

  out = out.replace(THEME_RE, (m, key, offset) => {
    const prop = propAt(line, offset, carried);
    if (key in THEME) return THEME[key] ? rename(prop, m, THEME[key], 'rename') : report(prop, m, 'UNMAPPED:removed');
    const kind = inGradient(offset) ? 'gradient' : kindOf(prop);
    if (!['surface', 'border', 'content'].includes(kind)) return report(prop, m, `UNMAPPED:split:${kind}`);
    return rename(prop, m, splitRole(THEME_SPLIT[key], kind), `split:${kind}`);
  });

  out = out.replace(NAMED_RE, (m, key, offset) => {
    const prop = propAt(line, offset, carried);
    return NAMED[key] ? rename(prop, m, NAMED[key], 'named') : report(prop, m, 'UNMAPPED:removed');
  });

  out = out.replace(RAMP_RE, (m, family, rung, offset) => {
    const prop = propAt(line, offset, carried);
    if (!FAMILY[family]) return report(prop, m, 'UNKNOWN-FAMILY');
    if (inGradient(offset)) return report(prop, m, 'UNMAPPED:gradient');
    const kind = kindOf(prop);
    const role = rampRole(kind, family, rung, prop);
    return role ? rename(prop, m, role, `ramp:${kind}`) : report(prop, m, `UNMAPPED:${kind}`);
  });

  out = out.replace(LEGACY_RE, (m, key, offset) => {
    const prop = propAt(line, offset, carried);
    return LEGACY[key] ? rename(prop, m, LEGACY[key], 'legacy') : report(prop, m, 'UNMAPPED:removed');
  });

  return out;
}

/*
 * Brand files are excluded on purpose: they DECLARE the tier-1 ramps rather than reference them,
 * so a rename table has nothing to say about them. They are rewritten by hand.
 */
const targets = process.argv.slice(2).filter((arg) => !arg.startsWith('--'));
let files = [];
try {
  files = execFileSync('git', [
    'grep', '-lE', '-e', OLD_RE.source, '--',
    ...(targets.length ? targets : ['packages/ods-react/src', 'packages/ods-recipes/src']),
  ], { cwd: REPO, encoding: 'utf8' }).trim().split('\n').filter((f) => /\.(scss|css|tsx?|mdx)$/.test(f));
} catch (e) {
  if (e.status !== 1) throw e;
}

let changedFiles = 0;

for (const rel of files) {
  const abs = path.join(REPO, rel);
  const lines = fs.readFileSync(abs, 'utf8').split('\n');
  let prop = '';
  let touched = false;

  const next = lines.map((line, i) => {
    const m = line.match(/^\s*([a-z-]+|--[a-z0-9-]+)\s*:/);
    if (m) prop = m[1];
    if (!OLD_RE.test(line)) return line;
    const out = rewriteLine(line, prop, rel, i + 1);
    if (out !== line) touched = true;
    return out;
  });

  if (touched) {
    changedFiles += 1;
    if (WRITE) fs.writeFileSync(abs, next.join('\n'));
  }
}

const csv = ['file,line,property,from,to,rule']
  .concat(rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')))
  .join('\n');
fs.writeFileSync(REPORT, csv);

const byRule = rows.reduce((acc, r) => ({ ...acc, [r[5]]: (acc[r[5]] || 0) + 1 }), {});
console.log(WRITE ? 'APPLIED' : 'DRY RUN');
console.log(`files scanned  ${files.length}`);
console.log(`files changed  ${changedFiles}`);
console.log(`rewrites       ${rows.length - unmapped}`);
console.log(`unmapped       ${unmapped}`);
console.log('\nby rule:');
Object.entries(byRule).sort((a, b) => b[1] - a[1]).forEach(([k, n]) => console.log(`  ${String(n).padStart(5)}  ${k}`));
console.log(`\nreport: ${path.relative(REPO, REPORT)}`);
process.exit(unmapped > 0 ? 2 : 0);
