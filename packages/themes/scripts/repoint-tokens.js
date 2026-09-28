#! /usr/bin/env node

/*
 * Re-points every reference to the retired token surface onto the semantic layer.
 *
 * Two historical surfaces disappear in this refactor and both are referenced from component
 * styles, so neither can be deleted without rewriting the references in the same change:
 *
 *   --ods-theme-*            the 72 role tokens. A direct rename, one destination each, except
 *                            the six --ods-theme-<colour>-color variants, which served as fill,
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
 *   node scripts/repoint-tokens.js --report          write the report, change nothing
 *   node scripts/repoint-tokens.js --write           apply, and write the report
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO = path.resolve(__dirname, '../../..');
const REPORT = path.join(REPO, 'packages/themes/scripts/repoint-report.csv');

const WRITE = process.argv.includes('--write');

/* ------------------------------------------------------------------ the role token renames */

/*
 * One destination each. Order matters at match time, not here: the matcher sorts longest first,
 * because --ods-theme-text-color is a strict prefix of --ods-theme-text-color-disabled and a
 * naive pass would corrupt it.
 */
const THEME = {
  'anchor-text-color': 'color-content-base',
  'anchor-text-color-hover': 'color-interaction-base-hover',
  'anchor-text-color-visited': 'color-content-visited',
  'background-color': 'color-surface-page',
  'background-color-disabled': 'color-surface-disabled',
  'background-color-drag-over': 'color-surface-drag-over',
  'background-color-readonly': 'color-surface-readonly',
  'background-color-selected': 'color-surface-selected-solid',
  'border-color-disabled': 'color-border-disabled',
  'border-color-drag-over': 'color-border-drag-over',
  'border-color-readonly': 'color-border-readonly',
  'border-color-selected': 'color-border-selected',
  'brand-color': 'color-content-brand',
  'heading-text-color': 'color-content-heading',
  'progress-background-color': 'color-surface-base',
  'split-background-color': 'color-surface-neutral-minimal',
  'split-border-color': 'color-border-neutral-minimal',
  'text-color': 'color-content-text',
  'text-color-disabled': 'color-content-disabled',
  'text-color-selected': 'color-content-on-selected-solid',
  'track-background-color': 'color-surface-neutral-minimal',
  'track-background-color-disabled': 'color-surface-neutral',

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

  'input-background-color-checked': 'color-surface-base',
  'input-background-color-checked-hover': 'color-interaction-base-hover',
  'input-background-color-invalid': 'color-surface-critical',
  'input-border-color': 'color-border-control',
  'input-border-color-checked': 'color-border-selected',
  'input-border-color-checked-hover': 'color-interaction-base-hover',
  'input-border-color-hover': 'color-interaction-control-hover',
  'input-border-color-invalid': 'color-border-critical',
  'input-border-radius': 'size-radius-control',
  'input-border-width': 'border-thickness',
  'input-min-height': 'size-block-size-md',
  'input-option-background-color-hover': 'color-interaction-highlight-hover',
  'input-option-background-color-selected': 'color-surface-selected',
  'input-option-background-color-selected-hover': 'color-interaction-selected-highlight-hover',
  'input-padding-horizontal': 'size-space-inset-inline',
  'input-padding-vertical': 'size-space-inset-block-compact',
  'input-placeholder-text-color': 'color-content-placeholder',
  'input-text-color': 'color-content-text',
  'input-text-color-checked': 'color-content-on-solid',
  'input-text-color-invalid': 'color-content-critical',

  'chart-background-color': 'color-chart-background',
  'chart-axis-color': 'color-chart-axis',
  'chart-tick-color': 'color-chart-tick',
  'chart-legend-color': 'color-chart-legend',
  'chart-grid-color': 'color-chart-grid',
  'chart-reference-line-color': 'color-chart-reference-line',
};

/*
 * The six that split. Each was used as a fill, as a border and as a text colour, so the single
 * historical name becomes one of three depending on the declaring property. This is the only
 * part of the role rename that is not mechanical, and the report lists every site.
 */
const THEME_SPLIT = {
  'critical-color': 'critical',
  'information-color': 'information',
  'neutral-color': 'neutral',
  'primary-color': 'base',
  'success-color': 'success',
  'warning-color': 'warning',
};

/* ------------------------------------------------------------------------- the ramp rules */

/* primary and information were byte-identical aliases of blue; they stay distinct as roles. */
const FAMILY = {
  primary: 'base',
  information: 'information',
  critical: 'critical',
  success: 'success',
  warning: 'warning',
  neutral: 'neutral',
};

/*
 * (kind, family, rung) -> role. `null` means "no destination, report it".
 *
 * The shape differs per family because the roles do: `base` has a selected ladder where the
 * status families have a minimal/subtle one, and neutral has a recessed ground that no other
 * family has.
 */
function rampRole(kind, family, rung, prop) {
  const f = FAMILY[family];
  const hover = /-hover$|-active$/.test(prop);

  if (kind === 'surface') {
    if (rung === '000') return 'color-surface-page';
    if (f === 'neutral') {
      if (['025', '050', '075'].includes(rung)) return 'color-surface-neutral-recessed';
      if (rung === '100') return 'color-surface-neutral-minimal';
      if (['200', '300'].includes(rung)) return 'color-surface-neutral-subtle';
      if (['400', '500', '600'].includes(rung)) return 'color-surface-neutral';
      if (['700', '800'].includes(rung)) return 'color-interaction-neutral-hover';
      if (rung === '900') return 'color-surface-code';
    }
    if (f === 'base') {
      if (['025', '050'].includes(rung)) return 'color-surface-selected';
      if (['075', '100'].includes(rung)) return hover ? 'color-interaction-base-subtle-hover' : 'color-surface-selected-strong';
      if (['200', '300'].includes(rung)) return 'color-surface-information-subtle';
      if (['400', '500'].includes(rung)) return 'color-surface-base';
      if (['600', '700'].includes(rung)) return 'color-interaction-base-hover';
      if (['800', '900'].includes(rung)) return 'color-surface-selected-solid';
    }
    /* information, critical, success, warning */
    if (['025', '050', '075', '100'].includes(rung)) {
      return hover ? `color-interaction-${f}-subtle-hover` : `color-surface-${f}-minimal`;
    }
    if (['200', '300'].includes(rung)) return `color-surface-${f}-subtle`;
    /*
     * warning ships one rung lighter than the others - 400 at rest, 500 on hover - because it is
     * the only role carrying dark text and orange darkens out of contrast fast. Its roles keep
     * that offset, so the rest rung here is 400 and anything above it is the hover.
     */
    if (f === 'warning') {
      if (rung === '400') return 'color-surface-warning';
      return 'color-interaction-warning-hover';
    }
    if (['400', '500'].includes(rung)) return `color-surface-${f}`;
    if (['600', '700', '800', '900'].includes(rung)) return `color-interaction-${f}-hover`;
  }

  if (kind === 'border') {
    if (rung === '000') return 'color-surface-page';
    if (f === 'neutral') {
      if (['025', '050', '075'].includes(rung)) return 'color-border-readonly';
      if (rung === '100') return 'color-border-neutral-minimal';
      if (rung === '200') return 'color-border-neutral-subtle';
      if (rung === '300') return 'color-border-control';
      if (['400', '500'].includes(rung)) return 'color-interaction-control-hover';
      if (rung === '600') return 'color-border-strong';
      if (['700', '800', '900'].includes(rung)) return 'color-border-neutral-strong';
    }
    if (f === 'base') {
      if (['025', '050', '075', '100'].includes(rung)) return 'color-border-drag-over';
      if (['200', '300'].includes(rung)) return 'color-border-information-subtle';
      if (['400', '500'].includes(rung)) return 'color-border-base';
      if (['600', '700', '800', '900'].includes(rung)) return 'color-interaction-base-hover';
    }
    if (['025', '050', '075', '100', '200', '300'].includes(rung)) return `color-border-${f}-subtle`;
    /*
     * There is no interaction rung in the border family, so a hover border lands on *-strong -
     * which happens to hold the same value as interaction-<f>-hover for every family except
     * warning. Warning would jump to a dark ring around a light fill, so it holds its rest value.
     */
    if (f === 'warning') return 'color-border-warning';
    if (['400', '500'].includes(rung)) return `color-border-${f}`;
    if (['600', '700', '800', '900'].includes(rung)) return `color-border-${f}-strong`;
  }

  if (kind === 'content') {
    /* The decorative badges carry their own text colour, whatever rung they were written with. */
    if (/alpha|beta|-new|promotion/.test(prop)) return 'color-content-on-decorative';
    if (rung === '000') return 'color-content-on-solid';
    if (f === 'neutral') {
      if (['025', '050', '075', '100', '200', '300'].includes(rung)) return 'color-content-on-solid';
      if (['400', '500'].includes(rung)) return 'color-content-neutral';
      if (rung === '600') return /placeholder/.test(prop) ? 'color-content-placeholder' : 'color-content-neutral';
      if (['700', '800', '900'].includes(rung)) return 'color-content-on-neutral';
    }
    if (f === 'base') {
      if (['400', '500'].includes(rung)) return 'color-content-base';
      /*
       * Everything darker is brand text sitting on a brand-tinted ground - a ghost hover fill, a
       * light message, a tag. An interaction token would be wrong here: this text is static, and
       * binding it to a hover role would make it move when the hover colour is re-themed.
       */
      if (['600', '700', '800', '900'].includes(rung)) return 'color-content-on-brand-subtle';
    }
    if (f === 'warning') {
      /* warning is the one family whose solid fill carries dark text rather than white. */
      if (['500', '600', '700'].includes(rung)) return 'color-content-warning';
      if (rung === '800') return 'color-content-on-warning';
      if (rung === '900') return 'color-content-on-warning-solid';
    }
    if (['400', '500'].includes(rung)) return `color-content-${f}`;
    if (['600', '700', '800', '900'].includes(rung)) return `color-content-on-${f}`;
  }

  return null;
}

/* The named tier-1 colours that were never ramps. */
const NAMED = {
  alpha: 'color-surface-decorative-alpha',
  beta: 'color-surface-decorative-beta',
  new: 'color-surface-decorative-new',
  promotion: 'color-surface-decorative-promotion',
  text: 'color-content-text',
  heading: 'color-content-heading',
  /*
   * Dangling today: two dev-module rules read --ods-color-text-secondary and nothing declares it,
   * so they currently render with an inherited colour. Pointed at the closest real role.
   */
  'text-secondary': 'color-content-placeholder',

  /*
   * The flat tokens deprecated several majors ago. They were never removed because they still
   * have live internal readers, which is exactly what this list clears.
   */
  'background-disabled-default': 'color-surface-disabled',
  'background-readonly-default': 'color-surface-readonly',
  'border-disabled-default': 'color-border-disabled',
  'border-readonly-default': 'color-border-readonly',
  'text-disabled-default': 'color-content-disabled',
  'element-background-selected': 'color-surface-selected-solid',
  'element-text-selected': 'color-content-on-selected-solid',
  'form-element-background-default': 'color-surface-page',
  'form-element-background-hover-default': 'color-surface-page',
  'form-element-background-focus-default': 'color-surface-page',
  'form-element-background-critical': 'color-surface-page',
  'form-element-background-selected-critical': 'color-surface-critical',
  'form-element-border-default': 'color-border-control',
  'form-element-border-hover-default': 'color-interaction-control-hover',
  'form-element-border-focus-default': 'color-interaction-control-hover',
  'form-element-border-critical': 'color-border-critical',
  'form-element-text-default': 'color-content-text',
  'form-element-text-placeholder-default': 'color-content-placeholder',
};

/* --------------------------------------------------------------------- property -> kind */

function kindOf(prop) {
  if (/background|--ods-range-track|-fill-/.test(prop)) return 'surface';
  if (/border-color|^border|outline-color|-border$|-ring/.test(prop)) return 'border';
  if (/box-shadow/.test(prop)) return 'shadow';
  if (/color$|color-|^fill$|^color$/.test(prop)) return 'content';
  return 'other';
}

/* ------------------------------------------------------------------------------- rewrite */

const themeKeys = Object.keys(THEME).concat(Object.keys(THEME_SPLIT)).sort((a, b) => b.length - a.length);
const THEME_RE = new RegExp(`--ods-theme-(${themeKeys.join('|')})(?![a-z0-9-])`, 'g');
const RAMP_RE = /--ods-color-([a-z]+)-(\d{3})(?![a-z0-9-])/g;
const NAMED_RE = new RegExp(`--ods-color-(${Object.keys(NAMED).sort((a, b) => b.length - a.length).join('|')})(?![a-z0-9-])`, 'g');

const rows = [];
let unmapped = 0;

function rewriteLine(line, prop, file, lineNo) {
  let out = line;

  out = out.replace(THEME_RE, (m, key) => {
    if (THEME[key]) {
      rows.push([file, lineNo, prop, `--ods-theme-${key}`, `--ods-semantic-${THEME[key]}`, 'rename']);
      return `--ods-semantic-${THEME[key]}`;
    }
    const f = THEME_SPLIT[key];
    const kind = kindOf(prop);
    const family = f === 'base' && kind === 'border' ? 'base' : f;
    let role;
    if (kind === 'surface') role = `color-surface-${family}`;
    else if (kind === 'border') role = `color-border-${family}`;
    else role = `color-content-${family}`;
    rows.push([file, lineNo, prop, `--ods-theme-${key}`, `--ods-semantic-${role}`, `split:${kind}`]);
    return `--ods-semantic-${role}`;
  });

  out = out.replace(NAMED_RE, (m, key) => {
    rows.push([file, lineNo, prop, m, `--ods-semantic-${NAMED[key]}`, 'named']);
    return `--ods-semantic-${NAMED[key]}`;
  });

  out = out.replace(RAMP_RE, (m, family, rung) => {
    if (!FAMILY[family]) {
      rows.push([file, lineNo, prop, m, '', 'UNKNOWN-FAMILY']);
      unmapped += 1;
      return m;
    }
    const kind = kindOf(prop);
    const role = rampRole(kind, family, rung, prop);
    if (!role) {
      rows.push([file, lineNo, prop, m, '', `UNMAPPED:${kind}`]);
      unmapped += 1;
      return m;
    }
    rows.push([file, lineNo, prop, m, `--ods-semantic-${role}`, `ramp:${kind}`]);
    return `--ods-semantic-${role}`;
  });

  return out;
}

/*
 * Brand files are excluded on purpose: they DECLARE the tier-1 ramps rather than reference them,
 * so a rename table has nothing to say about them. They are rewritten by hand.
 */
const files = execSync(
  "grep -rl 'ods-theme-\\|ods-color-' packages/ods-react/src packages/ods-recipes/src " +
  "--include='*.scss' --include='*.css' --include='*.ts' --include='*.tsx'",
  { cwd: REPO, encoding: 'utf8' },
).trim().split('\n');

let changedFiles = 0;

for (const rel of files) {
  const abs = path.join(REPO, rel);
  const lines = fs.readFileSync(abs, 'utf8').split('\n');
  let prop = '';
  let touched = false;

  const next = lines.map((line, i) => {
    const m = line.match(/^\s*([a-z-]+|--[a-z0-9-]+)\s*:/);
    if (m) prop = m[1];
    if (!/--ods-(theme|color)-/.test(line)) return line;
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
