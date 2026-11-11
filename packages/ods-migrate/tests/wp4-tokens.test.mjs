import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import postcss from 'postcss';
import scss from 'postcss-scss';
import { stripStyleMarkers } from '../src/shared.mjs';
import {
  applyStylePlan,
  countV19Tokens,
  planScriptTokens,
  planStyleNode,
  snapshotCounts,
  transformHtml,
  transformScriptTokens,
  transformStyles,
} from '../src/tokens.mjs';

/*
 * The keys of the token mapping and the behaviours of the token engine, tested with
 * inline mappings: the real entries come from the mapping build (WP5).
 */

const real = JSON.parse(readFileSync(new URL('../mappings/tokens-v19-to-v20.json', import.meta.url), 'utf8'));
const extend = (extra) => ({
  ...real,
  ...extra,
  hints: { ...real.hints, ...extra.hints },
  scss: { ...real.scss, ...extra.scss },
  tokens: { ...real.tokens, ...extra.tokens },
});
const css = (source, mapping, name = 'a.css', options) => transformStyles(source, mapping, name, options);
const script = (source, mapping, name = 'a.tsx', options) => transformScriptTokens(source, mapping, name, options);

/* What the stylelint rule does with --fix: the same plan, applied node by node in one walk. */
function lintFix(source, mapping, name = 'a.css', options) {
  const syntax = name.endsWith('.scss') ? scss : postcss;
  const root = syntax.parse(source);
  root.walk((node) => {
    const plan = planStyleNode(node, mapping, options);
    if (plan?.changes.length) applyStylePlan(node, plan);
  });
  return root.toString(syntax === scss ? scss.stringify : undefined);
}

describe('alsoDeclare', () => {
  const mapping = extend({
    tokens: { '--ods-theme-font-family': { alsoDeclare: ['--ods-semantic-font-family-heading'], bc: 'BC-13', to: '--ods-semantic-font-family-body' } },
  });

  it('declares the extra v20 token with the same migrated value, right after', () => {
    const { changes, output } = css(':root {\n  --ods-theme-font-family: \'Source Sans Pro\', arial;\n}', mapping);
    assert.equal(output, ':root {\n  --ods-semantic-font-family-body: \'Source Sans 3\', arial;\n  --ods-semantic-font-family-heading: \'Source Sans 3\', arial;\n}');
    assert.match(changes[0].message, /--ods-theme-font-family → --ods-semantic-font-family-body \+ --ods-semantic-font-family-heading/);
    assert.equal(css(output, mapping).output, output);
    assert.equal(lintFix(':root {\n  --ods-theme-font-family: \'Source Sans Pro\', arial;\n}', mapping), output);
  });

  it('does not declare it twice when the rule already does', () => {
    const { output } = css(':root { --ods-theme-font-family: x; --ods-semantic-font-family-heading: y; }', mapping);
    assert.equal(output, ':root { --ods-semantic-font-family-body: x; --ods-semantic-font-family-heading: y; }');
  });

  it('gives a read only the main name', () => {
    assert.equal(css('h1 { font-family: var(--ods-theme-font-family); }', mapping).output, 'h1 { font-family: var(--ods-semantic-font-family-body); }');
  });

  it('declares it in a style object and in a CSS template too', () => {
    assert.equal(
      script('const t = { \'--ods-theme-font-family\': \'Lato\' };', mapping).output,
      'const t = { \'--ods-semantic-font-family-body\': \'Lato\', \'--ods-semantic-font-family-heading\': \'Lato\' };',
    );
    assert.equal(
      script('const g = css`:root { --ods-theme-font-family: Lato; }`;', mapping).output,
      'const g = css`:root { --ods-semantic-font-family-body: Lato; --ods-semantic-font-family-heading: Lato; }`;',
    );
  });
});

describe('rerank (z-index: a computed stacking is never rewritten)', () => {
  const mapping = extend({
    hints: { 'z-rerank': 'the layers are re-ranked in v20 (BC-15).' },
    tokens: { '--ods-theme-overlay-z-index': { bc: 'BC-01', rerank: true, to: '--ods-semantic-z-index-dropdown' } },
  });

  it('marks a computed read and keeps the v19 name', () => {
    const source = '.help { z-index: calc(var(--ods-theme-overlay-z-index) + 2); }';
    const { output, todos } = css(source, mapping);
    assert.equal(output, '.help { /* TODO(ods-v20): --ods-theme-overlay-z-index: check this stacking: the layers are re-ranked in v20 (BC-15). */ z-index: calc(var(--ods-theme-overlay-z-index) + 2); }');
    assert.equal(todos.length, 1);
    assert.equal(lintFix(source, mapping), source);
  });

  it('marks an override of the token', () => {
    const { output } = css(':root { --ods-theme-overlay-z-index: 10; }', mapping);
    assert.match(output, /TODO\(ods-v20\): --ods-theme-overlay-z-index: check this stacking/);
    assert.match(output, /--ods-theme-overlay-z-index: 10/);
  });

  it('renames a bare read', () => {
    assert.equal(css('.a { z-index: var(--ods-theme-overlay-z-index); }', mapping).output, '.a { z-index: var(--ods-semantic-z-index-dropdown); }');
  });

  it('does the same in scripts', () => {
    const { output } = script('const s = { zIndex: \'calc(var(--ods-theme-overlay-z-index) + 1)\' };\nconst t = { zIndex: \'var(--ods-theme-overlay-z-index)\' };', mapping);
    assert.equal(output, 'const s = { /* TODO(ods-v20): --ods-theme-overlay-z-index: check this stacking: the layers are re-ranked in v20 (BC-15). */ zIndex: \'calc(var(--ods-theme-overlay-z-index) + 1)\' };\nconst t = { zIndex: \'var(--ods-semantic-z-index-dropdown)\' };');
  });
});

describe('todo and keep', () => {
  const mapping = extend({
    hints: { odd: 'no safe target.', rank: 'the overlays are re-ranked in v20.' },
    scss: {
      '$ods-input-actions-padding-right': { keep: true, note: '4px → 2px in v20' },
      '$ods-overlay-modal-z-index': { bc: 'BC-15', hint: 'rank', keep: true },
    },
    tokens: {
      '--ods-theme-background-color': { bc: 'BC-01', hint: 'odd', to: '--ods-semantic-color-surface-raised', todo: true },
      '--ods-tab-text-color': { hint: 'rank', keep: true },
    },
  });

  it('marks a `todo` token with its candidate, read or declared', () => {
    assert.equal(
      css('.a { background: var(--ods-theme-background-color); }', mapping).output,
      '.a { /* TODO(ods-v20): --ods-theme-background-color: no safe target. (candidate `--ods-semantic-color-surface-raised`) */ background: var(--ods-theme-background-color); }',
    );
    assert.match(css(':root { --ods-theme-background-color: #fff; }', mapping).output, /TODO\(ods-v20\): --ods-theme-background-color: no safe target/);
  });

  it('keeps a `keep` name and marks it with its hint, or notes it', () => {
    const marked = css('.a { z-index: ods.$ods-overlay-modal-z-index; padding-right: ods.$ods-input-actions-padding-right; }', mapping, 'a.scss');
    assert.equal(marked.output, '.a { /* TODO(ods-v20): ods.$ods-overlay-modal-z-index: the overlays are re-ranked in v20. */ z-index: ods.$ods-overlay-modal-z-index; padding-right: ods.$ods-input-actions-padding-right; }');
    assert.match(marked.notes[0].message, /^ods\.\$ods-input-actions-padding-right: 4px → 2px in v20/);
    assert.equal(css(marked.output, mapping, 'a.scss').output, marked.output);
    assert.match(css('.a { color: var(--ods-tab-text-color); }', mapping).output, /TODO\(ods-v20\): --ods-tab-text-color: the overlays/);
  });
});

describe('byContext (white kept, the page background on the document root)', () => {
  const mapping = extend({
    tokens: {
      '--ods-color-neutral-000': {
        bc: 'BC-04',
        byContext: { root: { surface: '--ods-semantic-color-surface-page' } },
        byRole: { border: '--ods-semantic-color-border-neutral-subtle', content: '--ods-semantic-color-content-on-solid', surface: '--ods-semantic-color-surface-raised' },
        contextChoice: 'page-background',
        palette: '--ods-palette-white',
      },
      '--ods-theme-background-color': {
        bc: 'BC-01',
        byContext: { root: { '*': '--ods-semantic-color-surface-page' } },
        contextChoice: 'page-background',
        to: '--ods-semantic-color-surface-raised',
      },
    },
  });
  const background = (selector, options) => css(`${selector} { background: var(--ods-theme-background-color); }`, mapping, 'a.css', options);

  it('gives the page background on html, body and :root, qualified or not', () => {
    for (const selector of ['body', 'html', ':root', 'body.dark', ':root[data-theme=x]', 'html body']) {
      assert.match(background(selector).output, /surface-page/, selector);
    }
  });

  it('keeps white (surface-raised) anywhere else', () => {
    assert.match(background('.panel').output, /surface-raised/);
    assert.match(background('body .panel').output, /surface-raised/);
  });

  it('uses the default and notes a selector list that mixes the root and other elements', () => {
    const { notes, output } = background('body, .panel');
    assert.match(output, /surface-raised/);
    assert.match(notes[0].message, /mixes the document root/);
  });

  it('keeps white everywhere when the configurator picks the v19 look', () => {
    assert.match(background('body', { config: { look: { 'page-background': 'v19' } } }).output, /surface-raised/);
  });

  it('applies to a ramp step by role, and never to a declaration', () => {
    assert.match(css('body { background-color: var(--ods-color-neutral-000); }', mapping).output, /surface-page/);
    assert.match(css('.card { background-color: var(--ods-color-neutral-000); }', mapping).output, /surface-raised/);
    assert.match(css('body { color: var(--ods-color-neutral-000); }', mapping).output, /content-on-solid/);
    assert.equal(css(':root { --ods-theme-background-color: #fff; }', mapping).output, ':root { --ods-semantic-color-surface-raised: #fff; }');
  });

  it('reads the selectors of a CSS template in a script; a style object has none', () => {
    assert.match(script('const g = createGlobalStyle`body { background: var(--ods-theme-background-color); }`;', mapping).output, /surface-page/);
    assert.match(script('const s = { background: \'var(--ods-theme-background-color)\' };', mapping).output, /surface-raised/);
  });
});

describe('mixins', () => {
  const mapping = extend({
    hints: { 'badge-mixin': 'ods-badge() now draws a 1px border.' },
    mixins: {
      'ods-badge': { bc: 'BC-08', hint: 'badge-mixin' },
      'ods-input': { note: 'the field width moved to the root (#1121).' },
      'ods-message-variant-default': { to: 'ods-message-emphasis-high' },
      'ods-pending-mixin': { pending: '#1130', to: 'ods-new-mixin' },
    },
  });

  it('renames a mixin, keeping its namespace and its arguments', () => {
    const { output } = css('.m { @include ods.ods-message-variant-default(\'primary\'); }', mapping, 'a.scss');
    assert.equal(output, '.m { @include ods.ods-message-emphasis-high(\'primary\'); }');
  });

  it('marks a mixin with a hint and notes one with a note', () => {
    const { notes, output } = css('.b { @include ods-badge(); }\n.i { @include ods.ods-input(); }', mapping, 'a.scss');
    assert.equal(output, '.b { /* TODO(ods-v20): @include ods-badge(): ods-badge() now draws a 1px border. */ @include ods-badge(); }\n.i { @include ods.ods-input(); }');
    assert.match(notes[0].message, /^@include ods-input\(\): the field width/);
  });

  it('leaves a pending entry alone unless the config enables it', () => {
    const source = '.p { @include ods-pending-mixin(); }';
    assert.equal(css(source, mapping, 'a.scss').output, source);
    assert.equal(css(source, mapping, 'a.scss', { config: { pending: ['#1130'] } }).output, '.p { @include ods-new-mixin(); }');
  });
});

describe('scssNumberToVar', () => {
  const mapping = extend({ scssNumberToVar: ['$ods-badge-height-md', '$ods-link-font-weight'] });
  const run = (source) => css(source, mapping, 'a.scss');

  it('moves +, - and * into a calc()', () => {
    assert.equal(run('.a { height: ods.$ods-badge-height-md + 4px; }').output, '.a { height: calc(#{ods.$ods-badge-height-md} + 4px); }');
    assert.equal(run('.a { height: $ods-badge-height-md - 2px; }').output, '.a { height: calc(#{$ods-badge-height-md} - 2px); }');
    assert.equal(run('.a { height: 2 * ods.$ods-badge-height-md; }').output, '.a { height: calc(2 * #{ods.$ods-badge-height-md}); }');
  });

  it('marks what only Sass computes', () => {
    for (const source of [
      '.a { height: $ods-badge-height-md / 2; }',
      '.a { height: math.div($ods-badge-height-md, 2); }',
      '.a { font-weight: $ods-link-font-weight + 100; }',
      '@if $ods-badge-height-md > 30px { .a { color: red; } }',
    ]) {
      assert.match(run(source).output, /TODO\(ods-v20\): \$ods-(badge-height-md|link-font-weight): a CSS custom property \(var\(\)\) in v20/, source);
    }
  });

  it('leaves a plain use, a calc() and a variable of the stylesheet alone', () => {
    for (const source of ['.a { height: $ods-badge-height-md; }', '.a { height: calc($ods-badge-height-md + 4px); }', '$ods-badge-height-md: 10px;\n.a { height: $ods-badge-height-md + 1px; }']) {
      assert.equal(run(source).output, source);
    }
  });

  it('is idempotent', () => {
    const once = run('.a { height: ods.$ods-badge-height-md + 4px; width: $ods-badge-height-md / 2; }').output;
    assert.equal(run(once).output, once);
  });
});

describe('SCSS variables of @ovhcloud/ods-themes', () => {
  const mapping = extend({
    hints: { stop: 'no v20 palette stop for this value: write it.' },
    scssPalette: {
      '$ods-palette-blue-025': { value: 'var(--ods-palette-blue-50)' },
      '$ods-palette-blue-075': { detail: '#cef5ff', hint: 'stop', to: null },
    },
  });
  const run = (source) => css(source, mapping, 'a.scss');

  // The token pass alone: the theme import itself is rewritten after it, by src/paths.mjs (tests/theme-paths.test.mjs).
  it('resolves a removed variable as its CSS custom property, from the property', () => {
    assert.equal(
      run('@use \'@ovhcloud/ods-themes/default\' as v;\n.a { color: v.$ods-color-primary-500; border: 1px solid v.$ods-color-primary-500; }').output,
      '@use \'@ovhcloud/ods-themes/default\' as v;\n.a { color: var(--ods-semantic-color-content-brand); border: 1px solid var(--ods-semantic-color-border-brand); }',
    );
    assert.equal(
      run('@import \'@ovhcloud/ods-themes/default\';\n.a { border-radius: $ods-border-radius-sm; }').output,
      '@import \'@ovhcloud/ods-themes/default\';\n.a { border-radius: var(--ods-semantic-size-radius-control); }',
    );
  });

  it('marks it where Sass computes with it, or where nothing says the role', () => {
    const { output } = run('@use \'@ovhcloud/ods-themes/default\' as v;\n.a { background: rgba(v.$ods-color-primary-500, 0.5); }\n$x: v.$ods-color-primary-500;');
    assert.match(output, /TODO\(ods-v20\): v\.\$ods-color-primary-500: a CSS custom property in v20 \(var\(--ods-semantic-color-surface-brand\)\), which Sass cannot compute/);
    assert.match(output, /TODO\(ods-v20\): v\.\$ods-color-primary-500 \(--ods-color-primary-500: v20 names colours by what they paint/);
  });

  it('reads the palette table, with its detail', () => {
    const { output } = run('@use \'@ovhcloud/ods-themes/default\' as v;\n.a { background: v.$ods-palette-blue-025; color: v.$ods-palette-blue-075; }');
    assert.match(output, /background: var\(--ods-palette-blue-50\)/);
    assert.match(output, /TODO\(ods-v20\): v\.\$ods-palette-blue-075: no v20 palette stop for this value: write it\. \(#cef5ff\)/);
  });

  it('leaves the variables of another module alone', () => {
    const source = '@use \'./theme\' as v;\n.a { color: v.$ods-color-primary-500; }';
    assert.equal(run(source).output, source);
  });
});

describe('cssModifiers (internal classes)', () => {
  const mapping = extend({ cssModifiers: { button: { ghost: 'low', information: null }, message: { primary: 'accent' } } });

  it('rewrites a class attribute selector and notes it', () => {
    const { notes, output } = css('[class*="button--ghost"] { color: red; }\n.x [class^="_message--primary"] { color: red; }', mapping);
    assert.equal(output, '[class*="button--low"] { color: red; }\n.x [class^="_message--accent"] { color: red; }');
    assert.match(notes[0].message, /internal class: prefer \[data-ods="button"\]/);
    assert.equal(lintFix('[class*="button--ghost"] { color: red; }', mapping), '[class*="button--low"] { color: red; }');
  });

  it('marks a modifier with no v20 class, and leaves a plain class selector alone', () => {
    assert.match(css('[class*="button--information"] { color: red; }', mapping).output, /^\/\* TODO\(ods-v20\): button--information: internal class with no v20 equivalent/);
    assert.equal(css('.button--ghost { color: red; }', mapping).output, '.button--ghost { color: red; }');
  });

  it('rewrites the hashed form and attribute selectors in scripts, not a bare class name', () => {
    const source = 'el.querySelector(\'[class*="button--ghost"]\');\nexpect(el).toHaveClass(\'_button--ghost_x1y2\');\nconst own = \'button--ghost\';\n';
    assert.equal(script(source, mapping).output, 'el.querySelector(\'[class*="button--low"]\');\nexpect(el).toHaveClass(\'_button--low_x1y2\');\nconst own = \'button--ghost\';\n');
  });
});

describe('tailwindKeys', () => {
  const mapping = extend({ tailwindKeys: { 'ods-color-primary-500': 'ods-brand' } });

  it('renames the utilities in class strings and @apply when the run renames their theme key', () => {
    const options = { tailwindKeys: new Set(['ods-color-primary-500']) };
    assert.equal(
      script('<div className="bg-ods-color-primary-500 hover:!text-ods-color-primary-500/50" />;', mapping, 'a.tsx', options).output,
      '<div className="bg-ods-brand hover:!text-ods-brand/50" />;',
    );
    assert.equal(css('.a { @apply border-ods-color-primary-500; }', mapping, 'a.css', options).output, '.a { @apply border-ods-brand; }');
  });

  it('renames the key of a Tailwind config theme', () => {
    const { output } = script('export default { theme: { extend: { colors: { \'ods-color-primary-500\': \'#000\' } } } };', mapping, 'tailwind.config.js');
    assert.equal(output, 'export default { theme: { extend: { colors: { \'ods-brand\': \'#000\' } } } };');
  });
});

describe('hints and markers', () => {
  it('adds the per-entry detail to the hint, and the value-preserving palette stop to a role marker', () => {
    const mapping = extend({
      tokens: {
        '--ods-border-radius-xs': { bc: 'BC-03', detail: '2px', to: null },
        '--ods-color-primary-500': { ...real.tokens['--ods-color-primary-500'], paletteValue: '--ods-palette-brand-500' },
      },
    });
    assert.match(css('.a { border-radius: var(--ods-border-radius-xs); }', mapping).todos[0].message, /\(2px\)$/);
    assert.match(css('.a { box-shadow: 0 0 1px var(--ods-color-primary-500); }', mapping).todos[0].message, /To keep the exact v19 colour whatever the theme: var\(--ods-palette-brand-500\)\.$/);
  });

  it('keeps one marker per anchor and reports each message once in scripts', () => {
    const { markers } = planScriptTokens('const s = { boxShadow: \'0 0 1px var(--ods-color-primary-500), 0 0 2px var(--ods-color-primary-500)\' };', real);
    assert.equal(markers.length, 1);
    assert.equal(markers[0].messages.length, 1);
  });
});

describe('snapshots and HTML', () => {
  it('counts only the names ODS v19 declared, apart from the unknown ones and the internal classes', () => {
    const mapping = extend({ cssModifiers: { button: { ghost: 'low' } } });
    const snap = 'exports[`x 1`] = `<div class="bg-[--ods-color-blue-100] _button--ghost_a1" style="color: var(--ods-color-primary-500)" />`;';
    assert.deepEqual(snapshotCounts(snap, mapping), { classes: 1, tokens: 1, unknown: 1 });
    assert.equal(countV19Tokens('<div class="bg-[--ods-color-blue-100]" />', real), 0);
  });

  it('migrates the styles, style and class attributes of a page, and turns every todo into a note', () => {
    const page = [
      '<style>body { color: var(--ods-theme-text-color); }</style>',
      '<div class="bg-[--ods-color-primary-500]" style="color: var(--ods-color-primary-500); box-shadow: 0 0 1px var(--ods-color-primary-500)"></div>',
      '<link rel="preload" href="/node_modules/@ovhcloud/ods-themes/assets/fonts/source-sans-pro/woff2/x.woff2">',
    ].join('\n');
    const { notes, output, todos } = transformHtml(page, real);
    assert.equal(output, [
      '<style>body { color: var(--ods-semantic-color-content-text); }</style>',
      '<div class="bg-[--ods-semantic-color-surface-brand]" style="color: var(--ods-semantic-color-content-brand); box-shadow: 0 0 1px var(--ods-color-primary-500)"></div>',
      '<link rel="preload" href="/node_modules/@ovhcloud/ods-themes/assets/fonts/source-sans-3/woff2/x.woff2">',
    ].join('\n'));
    assert.equal(todos.length, 0);
    assert.ok(notes.some(({ line, message }) => line === 2 && /^--ods-color-primary-500: v20 names colours by what they paint/.test(message)));
  });

  it('reads a style attribute that holds the other quote, or its own as an entity, and never fails the page', () => {
    const page = [
      '<div style="color: var(--ods-color-primary-500); font-family: \'Arial\'">a</div>',
      '<div style=\'background: url("x.png") var(--ods-color-primary-500)\'>b</div>',
      '<div style="font-family: &quot;Source Sans Pro&quot;; color: var(--ods-color-primary-500)">c</div>',
      '<div style=\'font-family: Source Sans Pro; color: var(--ods-color-primary-500)\'>d</div>',
      '<div class="bg-[--ods-color-primary-500] [content:\'x\']">e</div>',
      '<div style="color: var(--ods-color-primary-500); {">f</div>',
    ].join('\n');
    const { notes, output } = transformHtml(page, real);
    assert.equal(output, [
      '<div style="color: var(--ods-semantic-color-content-brand); font-family: \'Arial\'">a</div>',
      '<div style=\'background: url("x.png") var(--ods-semantic-color-surface-brand)\'>b</div>',
      '<div style="font-family: &quot;Source Sans 3&quot;; color: var(--ods-semantic-color-content-brand)">c</div>',
      '<div style=\'font-family: &#39;Source Sans 3&#39;; color: var(--ods-semantic-color-content-brand)\'>d</div>',
      '<div class="bg-[--ods-semantic-color-surface-brand] [content:\'x\']">e</div>',
      '<div style="color: var(--ods-color-primary-500); {">f</div>',
    ].join('\n'));
    assert.ok(notes.some(({ line, message }) => line === 6 && /cannot read this style attribute as CSS: rewrite its ODS v19 tokens by hand/.test(message)));
    assert.equal(transformHtml(output, real).output, output);
  });
});

describe('the stylelint fix plan', () => {
  it('equals the codemod output without markers on the WP4 cases', () => {
    const mapping = extend({
      cssModifiers: { button: { ghost: 'low' } },
      mixins: { 'ods-message-variant-default': { to: 'ods-message-emphasis-high' } },
      scssNumberToVar: ['$ods-badge-height-md'],
      tokens: { '--ods-theme-font-family': { alsoDeclare: ['--ods-semantic-font-family-heading'], to: '--ods-semantic-font-family-body' } },
    });
    const source = [
      ':root { --ods-theme-font-family: x; --ods-theme-text-color: #111; --ods-theme-input-text-color: #222; }',
      '[class*="button--ghost"] { height: ods.$ods-badge-height-md + 2px; @include ods.ods-message-variant-default(\'primary\'); }',
      '.a, .a:hover { border-color: var(--ods-color-critical-700); }',
    ].join('\n');
    assert.equal(lintFix(source, mapping, 'a.scss'), stripStyleMarkers(css(source, mapping, 'a.scss').output));
  });
});
