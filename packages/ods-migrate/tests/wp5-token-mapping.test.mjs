import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import { resolveTokenMapping } from '../src/shared.mjs';

/*
 * The token mapping that scripts/build-token-mapping.mjs generates (WP5). The first suite reads
 * the committed JSON only. The second one checks it against the ODS repo at the commit it was
 * built from, and is skipped when that commit is not reachable. ODS_MIGRATE_BUILD=1 also reruns
 * the build and compares its output with the committed file.
 */
const mappingFile = new URL('../mappings/tokens-v19-to-v20.json', import.meta.url);
const mapping = JSON.parse(readFileSync(mappingFile, 'utf8'));
const STATUSES = ['critical', 'information', 'neutral', 'primary', 'success', 'warning'];
const SECTIONS = ['tokens', 'scss', 'mixins', 'scssPalette'];
const entries = (section) => Object.entries(mapping[section] ?? {});
const allEntries = () => SECTIONS.flatMap((section) => entries(section).map(([name, entry]) => ({ entry, name, section })));

describe('token mapping: data (WP5)', () => {
  it('gives every entry that is not a rename a hint, or a note, and every hint a text', () => {
    for (const { entry, name, section } of allEntries()) {
      if (entry.hint !== undefined) {
        assert.ok(entry.hint in mapping.hints, `${section} ${name}: hint "${entry.hint}" is not a key of hints`);
      }
      const marked = entry.to === null || entry.todo || (entry.keep && !entry.note);
      if (marked) {
        assert.ok(entry.hint, `${section} ${name}: an entry without a target needs a hint`);
      }
    }
  });

  it('writes hints that cite no BC code and no section the guide does not have', () => {
    for (const [key, text] of Object.entries(mapping.hints)) {
      assert.doesNotMatch(text, /\bBC-\d+/, key);
      assert.doesNotMatch(text, /Custom themes/i, key);
    }
    for (const { entry, name } of allEntries()) {
      for (const text of [entry.note, entry.detail].filter(Boolean)) {
        assert.doesNotMatch(text, /\bBC-\d+/, name);
      }
    }
    // The theme declaration hint says what to declare instead, on its own.
    assert.match(mapping.hints.declaration, /--ods-palette-\*/);
  });

  it('renames the 24 Message custom properties of the emphasis change, and splits the -light text colour', () => {
    for (const status of STATUSES) {
      for (const part of ['background', 'text']) {
        // `primary` is named `accent` in v20 (BC-23).
        const v20 = status === 'primary' ? 'accent' : status;
        assert.equal(mapping.tokens[`--ods-message-${part}-color-${status}`]?.to, `--ods-message-${part}-color-${v20}-high`);
        assert.equal(mapping.tokens[`--ods-message-${part}-color-${status}-light`]?.to, `--ods-message-${part}-color-${v20}-medium`);
      }
      // In v19 the light border was painted with the light text colour.
      assert.deepEqual(mapping.tokens[`--ods-message-text-color-${status}-light`].alsoDeclare, [`--ods-message-border-color-${status === 'primary' ? 'accent' : status}-medium`]);
      assert.equal(mapping.tokens[`--ods-message-background-color-${status}-light`].alsoDeclare, undefined);
    }
  });

  it('marks the removed Message close-button token, on a read too', () => {
    const entry = mapping.tokens['--ods-message-close-button-text-color-primary'];
    assert.equal(entry.to, null);
    assert.equal(entry.overrideOnly, undefined);
    assert.match(mapping.hints[entry.hint], /removed/);
    assert.doesNotMatch(mapping.hints[entry.hint], /still declares/);
  });

  it('maps the Sass mixins: Message and Button renamed with their status, Badge and is-disabled marked, Input noted', () => {
    assert.equal(mapping.mixins['ods-message-variant-default'].to, 'ods-message-emphasis-high');
    assert.equal(mapping.mixins['ods-message-variant-light'].to, 'ods-message-emphasis-medium');
    assert.equal(mapping.mixins['ods-badge'].hint, 'badge-mixin');
    assert.equal(mapping.mixins['ods-is-disabled'].hint, 'is-disabled-mixin');
    assert.match(mapping.mixins['ods-input'].note, /surface-control/);
    assert.match(mapping.hints['is-disabled-mixin'], /--ods-semantic-opacity-disabled/);
    for (const [from, to] of [['default', 'high'], ['outline', 'medium'], ['ghost', 'low']]) {
      const entry = mapping.mixins[`ods-button-variant-${from}`];
      assert.equal(entry.to, `ods-button-emphasis-${to}`);
      assert.equal(entry.pending, undefined);
      assert.deepEqual(entry.args, { primary: 'brand' });
      assert.deepEqual(entry.removedArgs, ['information', 'success', 'warning']);
    }
    for (const name of ['ods-badge-color', 'ods-tag-color', 'ods-message-variant-default', 'ods-message-variant-light']) {
      assert.deepEqual(mapping.mixins[name].args, { primary: 'accent' }, name);
    }
    assert.equal(mapping.mixins['ods-modal-color'].remove, true);
  });

  it('keeps the white of -000 and of the theme background: surface-raised, surface-page on the root only', () => {
    const background = mapping.tokens['--ods-theme-background-color'];
    assert.equal(background.to, '--ods-semantic-color-surface-raised');
    // The page background only: a text, a border or a shadow on the root stays white.
    assert.deepEqual(background.byContext, { root: { surface: '--ods-semantic-color-surface-page' } });
    assert.equal(background.contextChoice, 'page-background');
    for (const family of STATUSES) {
      const entry = mapping.tokens[`--ods-color-${family}-000`];
      assert.equal(entry.byRole.surface, '--ods-semantic-color-surface-raised', family);
      assert.equal(entry.byRole.border, '--ods-semantic-color-surface-raised', family);
      assert.ok(entry.doubtful.includes('border'), family);
      assert.deepEqual(entry.byContext, { root: { surface: '--ods-semantic-color-surface-page' } }, family);
      assert.equal(entry.contextChoice, 'page-background');
      assert.equal(entry.palette, '--ods-palette-white');
    }
    // No other white of v19 lands on the grey page by default.
    for (const [name, entry] of entries('tokens')) {
      if (entry.to === '--ods-semantic-color-surface-page' || entry.byRole?.surface === '--ods-semantic-color-surface-page') {
        assert.ok(!/-000$|background-color$/.test(name), name);
      }
    }
  });

  it('never rewrites the overlay z-index toward a layer: rerank, with its hint', () => {
    const entry = mapping.tokens['--ods-theme-overlay-z-index'];
    assert.equal(entry.to, '--ods-semantic-z-index-dropdown');
    assert.equal(entry.rerank, true);
    assert.equal(entry.hint, 'z-rerank');
    // The v20 layers are released: no hint calls them a preview.
    assert.equal(entry.note, undefined);
    assert.doesNotMatch(mapping.hints['z-rerank'], /not settled|preview/);
    assert.match(entry.detail, /99/);
    // Every v20 layer is named in the hint, so that a marker gives the numbers to compare with.
    assert.match(mapping.hints['z-rerank'], /dropdown 200, drawer 300, modal 400/);
  });

  it('declares the heading font next to the body font of a v19 theme', () => {
    for (const name of ['--ods-theme-font-family', '--ods-font-family-default']) {
      assert.equal(mapping.tokens[name].to, '--ods-semantic-font-family-body');
      assert.deepEqual(mapping.tokens[name].alsoDeclare, ['--ods-semantic-font-family-heading']);
    }
  });

  it('finds palette stops by hex: the value-preserving stop, and the theme declaration target', () => {
    // v19 primary-200 #85d9fd is v20 blue-300: the light rungs of blue and gray moved up one stop.
    assert.equal(mapping.tokens['--ods-color-primary-200'].paletteValue, '--ods-palette-blue-300');
    assert.equal(mapping.tokens['--ods-color-primary-200'].palette, '--ods-palette-brand-300');
    assert.equal(mapping.tokens['--ods-color-neutral-050'].paletteValue, '--ods-palette-gray-100');
    assert.equal(mapping.tokens['--ods-color-neutral-300'].palette, '--ods-palette-gray-400');
    assert.equal(mapping.tokens['--ods-color-neutral-000'].paletteValue, '--ods-palette-white');
    assert.equal(mapping.tokens['--ods-color-primary-500'].palette, '--ods-palette-brand-500');
    assert.equal(mapping.tokens['--ods-color-information-600'].palette, '--ods-palette-blue-600');
    // #157eea and the v19 reds have no v20 stop.
    assert.equal(mapping.tokens['--ods-color-primary-400'].paletteValue, undefined);
    assert.equal(mapping.tokens['--ods-color-critical-500'].paletteValue, undefined);
    for (const [name, entry] of entries('tokens').filter(([name]) => /^--ods-color-[a-z]+-\d{3}$/.test(name))) {
      assert.match(entry.palette, /^--ods-palette-/, name);
    }
  });

  it('maps the SCSS palette of ods-themes by hex', () => {
    assert.deepEqual(mapping.scssPalette['$ods-palette-blue-025'], { value: 'var(--ods-palette-blue-50)' });
    assert.deepEqual(mapping.scssPalette['$ods-palette-gray-000'], { value: 'var(--ods-palette-white)' });
    assert.equal(mapping.scssPalette['$ods-palette-blue-075'].to, null);
    assert.match(mapping.scssPalette['$ods-palette-blue-075'].detail, /#cef5ff/);
    // A name v20 keeps with another value: rewritten to the stop that keeps the v19 value.
    assert.equal(mapping.scssPalette['$ods-palette-blue-100'].value, 'var(--ods-palette-blue-200)');
    assert.match(mapping.scssPalette['$ods-palette-blue-100'].note, /#bef1ff/);
    assert.equal(mapping.scssPalette['$ods-palette-red-500'].to, null);
    // Unchanged names are left out.
    assert.equal(mapping.scssPalette['$ods-palette-blue-500'], undefined);
    assert.equal(mapping.scssPalette['$ods-palette-white'], undefined);
  });

  it('lists the SCSS numbers of ./style that are a var() in v20', () => {
    for (const name of ['$ods-badge-height-md', '$ods-link-font-weight', '$animation-duration']) {
      assert.ok(mapping.scssNumberToVar.includes(name), name);
    }
    // Still Sass numbers in v20: no var() marker, no calc() rewrite.
    for (const name of ['$ods-badge-height-sm', '$ods-badge-height-lg']) {
      assert.ok(!mapping.scssNumberToVar.includes(name), name);
    }
    assert.ok(!mapping.scssNumberToVar.includes('$ods-modal-size'));
  });

  it('leaves out a name ODS v19 never declared: like every other one, it keeps the fallback of the app', () => {
    assert.equal(mapping.tokens['--ods-color-text-secondary'], undefined);
  });

  it('keeps the overlay SCSS variables with a stacking marker, and notes the input actions padding', () => {
    // The v20 layers are released: a note with both values, not a marker.
    for (const name of ['$ods-overlay-base-z-index', '$ods-overlay-drawer-z-index', '$ods-overlay-modal-z-index']) {
      assert.equal(mapping.scss[name].keep, true, name);
      assert.equal(mapping.scss[name].hint, undefined, name);
      assert.match(mapping.scss[name].note, /in v19 and `--ods-semantic-z-index-[a-z]+` \(\d+\) in v20/, name);
    }
    assert.equal(mapping.scss['$ods-input-actions-padding-right'].keep, true);
    assert.match(mapping.scss['$ods-input-actions-padding-right'].note, /2px/);
    // 1:1 renames of the removed deprecated ones (BC-16); the v20 names keep their stacking note.
    assert.equal(mapping.scss['$ods-modal-z-index'].to, '$ods-overlay-modal-z-index');
    assert.equal(mapping.scss['$ods-overlay-select-z-index'].to, '$ods-overlay-base-z-index');
    for (const [name, entry] of entries('scss').filter(([, entry]) => entry.keep)) {
      assert.ok(!('to' in entry) && !('value' in entry), name);
    }
  });

  it('names the v20 token in the hints of removed tokens', () => {
    assert.match(mapping.hints.disabled, /--ods-semantic-opacity-disabled/);
    assert.match(mapping.tokens['--ods-tile-border-width'].detail, /--ods-card-border-width/);
    assert.match(mapping.tokens['--ods-tile-background-color'].detail, /--ods-card-background-color/);
    assert.match(mapping.hints[mapping.tokens['--ods-border-radius-xs'].hint], /2px/);
  });

  it('rewrites the internal classes of the components that changed modifiers', () => {
    // `default` and `outline` also matched (or now match) the Buttons without the prop: renamed only with the v19 look.
    assert.deepEqual(Object.keys(mapping.cssModifiers.button), ['default', 'ghost', 'information', 'outline', 'primary', 'success', 'warning']);
    assert.deepEqual([mapping.cssModifiers.button.default.to, mapping.cssModifiers.button.default.choice], ['high', 'button-default-emphasis']);
    assert.deepEqual([mapping.cssModifiers.button.outline.to, mapping.cssModifiers.button.outline.choice], ['medium', 'button-default-emphasis']);
    assert.equal(mapping.cssModifiers.button.ghost, 'low');
    assert.equal(mapping.cssModifiers.button.primary, 'brand');
    assert.equal(mapping.cssModifiers.button.information, null);
    assert.deepEqual([mapping.cssModifiers.message.default.to, mapping.cssModifiers.message.default.choice], ['high', 'message-default-emphasis']);
    // v20 has no class for medium, the plain status rendering: a selector on it cannot be rewritten.
    assert.equal(mapping.cssModifiers.message.light, null);
  });

  it('renames the Button custom properties after status and emphasis, and marks the removed ones (BC-24, BC-25)', () => {
    const button = entries('tokens').filter(([name]) => /^--ods-button-(background|border|text)-color-[a-z]+(-ghost|-outline)?(-hover|-active)?$/.test(name));
    // 3 statuses kept (primary → brand, critical, neutral) and 3 removed, 27 names each.
    assert.equal(button.length, 162);
    const renamed = button.filter(([, entry]) => entry.to);
    // 22 for each of brand, critical and neutral (BC-24); their 15 unread states are removed (BC-25).
    assert.equal(renamed.length, 66);
    for (const [name, entry] of renamed) {
      const [, part, status, emphasis = '', state = ''] = name.match(/^--ods-button-(background|border|text)-color-([a-z]+?)(?:-(ghost|outline))?(-hover|-active)?$/);
      const level = { '': 'high', ghost: 'low', outline: 'medium' }[emphasis];
      assert.equal(entry.to, `--ods-button-${part}-color-${status === 'primary' ? 'brand' : status}-${level}${state}`, name);
      assert.equal(entry.pending, undefined);
    }
    // A read of a removed status name keeps the colour it held; a declaration of it is marked.
    assert.equal(mapping.tokens['--ods-button-background-color-success'].read, '--ods-semantic-color-surface-success');
    assert.equal(mapping.tokens['--ods-button-background-color-success'].to, null);
    assert.equal(mapping.tokens['--ods-button-text-color-primary-hover'].read, '--ods-button-text-color-brand-high');
    assert.equal(mapping.tokens['--ods-button-border-color-critical-ghost'].read, undefined);
    assert.ok(resolveTokenMapping(mapping).tokens['--ods-button-text-color-primary-ghost']);
  });

  it('renames the Tailwind keys of the v19 guide to the documented v20 ones', () => {
    // The v20 guide documents no colour key for the v19 ones: kept with no target, their utilities are marked.
    assert.equal(mapping.tailwindKeys['ods-color-primary-500'], null);
    assert.equal(mapping.tailwindKeys['ods-color-success-500'], null);
    assert.equal(mapping.tailwindKeys['ods-border-radius-lg'], null);
    assert.equal(mapping.tailwindKeys['ods-border-radius-sm'], 'ods-control');
    assert.equal(mapping.tailwindKeys['ods-border-radius-md'], 'ods-container');
    assert.equal(mapping.tailwindKeys['ods-font-family-default'], 'ods-body');
    assert.equal(mapping.tailwindKeys['ods-border-radius-xs'], null);
  });

  it('records where it was built from', () => {
    assert.equal(mapping.source.from, 'v19.7.3');
    assert.match(mapping.source.sha, /^[0-9a-f]{7,}$/);
  });
});

/* ------------------------------------------------------------------------- against the repo */

const repo = fileURLToPath(new URL('../../..', import.meta.url));
const git = (...args) => execFileSync('git', ['-C', repo, ...args], { encoding: 'utf8', maxBuffer: 1 << 28, stdio: ['ignore', 'pipe', 'ignore'] });
const reachable = (() => {
  try {
    git('rev-parse', '--verify', `${mapping.source.sha}^{commit}`);
    git('rev-parse', '--verify', `${mapping.source.from}^{commit}`);
    return true;
  } catch {
    return false;
  }
})();
const atRef = { skip: reachable ? false : `${mapping.source.sha} is not in ${repo}` };

/* The files of `path` at `ref` that `keep` accepts. */
function filesAt(ref, path, keep) {
  return git('ls-tree', '-r', '--name-only', ref, '--', path).split('\n').filter((file) => file && keep(file))
    .map((file) => git('show', `${ref}:${file}`));
}

const uncomment = (text) => text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
const UNSHIPPED = /\/dev\.module\.css$|\/tests?\/|\.(spec|stories)\.[jt]sx?$/;
const THEME_NAME = /^--ods-(?:theme|color|border-radius|border-width|font-family|form-element|outline)-/;

/* The default theme folder: src/default in v19, the Aluminium light one in v20 (its dark mode left out, as the build does). */
const themeFiles = (ref) => {
  const dir = filesAt(ref, 'packages/themes/src/default', () => true).length ? 'packages/themes/src/default' : 'packages/themes/src/aluminium';
  return filesAt(ref, dir, (file) => file.endsWith('.scss') && !file.endsWith('/dark.scss'));
};

function surfaceAt(ref) {
  const declared = new Set();
  const scss = new Set();
  const mixins = new Set();
  for (const text of filesAt(ref, 'packages/ods-react/src', (file) => /\.(s?css|tsx?)$/.test(file) && !UNSHIPPED.test(file)).map(uncomment)) {
    for (const [, name] of text.matchAll(/(?:^|[;{\s'"])(--ods-[a-z0-9-]+)['"]?\s*:/g)) declared.add(name);
  }
  for (const text of filesAt(ref, 'packages/ods-react/src/style', (file) => /\/[^/]+\.scss$/.test(file)).map(uncomment)) {
    for (const [, name] of text.matchAll(/^\$([a-zA-Z0-9_-]+)\s*:/gm)) scss.add(`$${name}`);
    for (const [, name] of text.matchAll(/^\s*@mixin\s+([\w-]+)/gm)) mixins.add(name);
  }
  for (const text of themeFiles(ref).map(uncomment)) {
    for (const [, name] of text.matchAll(/(--ods-[a-z0-9-]+)\s*:/g)) declared.add(name);
  }
  return { declared, mixins, scss };
}

describe('token mapping: against the ODS repo (WP5)', atRef, () => {
  const before = reachable ? surfaceAt(mapping.source.from) : null;
  const after = reachable ? surfaceAt(mapping.source.sha) : null;
  const isPending = (entry) => typeof entry?.pending === 'string';

  it('covers every name ods-react removes: custom properties, SCSS variables, mixins', () => {
    const removed = [...before.declared].filter((name) => !after.declared.has(name) && !THEME_NAME.test(name));
    assert.deepEqual(removed.filter((name) => !(name in mapping.tokens)), []);
    assert.deepEqual([...before.scss].filter((name) => !after.scss.has(name) && !(name in mapping.scss)), []);
    assert.deepEqual([...before.mixins].filter((name) => !after.mixins.has(name) && !(name in mapping.mixins)), []);
  });

  it('covers every theme name v20 removes: custom properties, and SCSS variables through scssPalette or their custom property', () => {
    const themeNames = (ref) => {
      const text = themeFiles(ref).map(uncomment).join('\n');
      return { css: new Set(text.match(/--ods-[a-z0-9-]+(?=\s*:)/g)), scss: new Set(text.match(/^\s*\$[\w-]+(?=\s*:)/gm).map((name) => name.trim())) };
    };
    const v19 = themeNames(mapping.source.from);
    const v20 = themeNames(mapping.source.sha);
    assert.deepEqual([...v19.css].filter((name) => !v20.css.has(name) && !(name in mapping.tokens)), []);
    const uncovered = [...v19.scss].filter((name) => !v20.scss.has(name) && !(name in mapping.scssPalette) && !(`--${name.slice(1)}` in mapping.tokens));
    assert.deepEqual(uncovered, []);
  });

  it('only renames toward names the ref declares, unless the entry is pending', () => {
    const missing = [];
    for (const [name, entry] of entries('tokens').filter(([, entry]) => !isPending(entry))) {
      const targets = [entry.to, entry.read, entry.palette, entry.paletteValue, ...(entry.alsoDeclare ?? []), ...Object.values(entry.byRole ?? {}),
        ...Object.values(entry.byContext ?? {}).flatMap((roles) => Object.values(roles))];
      missing.push(...targets.filter((target) => target && !after.declared.has(target)).map((target) => `${name} → ${target}`));
    }
    for (const [name, entry] of entries('scss').filter(([, entry]) => !isPending(entry))) {
      if (entry.to && !after.scss.has(entry.to)) missing.push(`${name} → ${entry.to}`);
      for (const used of entry.value?.match(/--ods-[a-z0-9-]+/g) ?? []) if (!after.declared.has(used)) missing.push(`${name} → ${used}`);
    }
    for (const [name, entry] of entries('mixins').filter(([, entry]) => !isPending(entry))) {
      if (entry.to && !after.mixins.has(entry.to)) missing.push(`@mixin ${name} → ${entry.to}`);
      if (!entry.to && !entry.remove && !after.mixins.has(name)) missing.push(`@mixin ${name} is gone: it needs a \`to\``);
    }
    for (const [name, entry] of entries('scssPalette')) {
      for (const used of entry.value?.match(/--ods-[a-z0-9-]+/g) ?? []) if (!after.declared.has(used)) missing.push(`${name} → ${used}`);
    }
    assert.deepEqual(missing, []);
  });

  it('keeps an entry pending only while its target is missing or its source still there', () => {
    for (const { entry, name, section } of allEntries().filter(({ entry }) => isPending(entry))) {
      const survives = section === 'mixins' ? after.mixins.has(name) : section === 'scss' ? after.scss.has(name) : after.declared.has(name);
      const lands = !entry.to || (section === 'mixins' ? after.mixins.has(entry.to) : section === 'scss' ? after.scss.has(entry.to) : after.declared.has(entry.to));
      assert.ok(survives || !lands, `${section} ${name} is no longer pending on the ref`);
    }
  });

  it('cites in its hints only v20 tokens that exist, and only guide sections that exist', () => {
    const guide = git('show', `${mapping.source.sha}:packages/docs/src/content/guides/migration-19-to-20.mdx`);
    const headings = new Set([...guide.matchAll(/<Heading[^>]*label="([^"]+)"/g)].map(([, label]) => label));
    const texts = [...Object.values(mapping.hints), ...allEntries().flatMap(({ entry }) => [entry.note, entry.detail]).filter(Boolean)];
    for (const text of texts) {
      for (const [, section] of text.matchAll(/"([^"]+)" (?:section )?(?:in|of) the (?:migration )?guide/g)) {
        assert.ok(headings.has(section), `the guide has no "${section}" section`);
      }
      for (const name of text.match(/--ods-(?:semantic|palette)-[a-z0-9-]*[a-z0-9](?![a-z0-9-]*\*)/g) ?? []) {
        assert.ok(after.declared.has(name), `${name}, cited in "${text}", is not declared at ${mapping.source.sha}`);
      }
    }
  });

  it('is what the build writes', { skip: process.env.ODS_MIGRATE_BUILD ? false : 'set ODS_MIGRATE_BUILD=1 to rerun the build (about a minute)', timeout: 600000 }, () => {
    const dir = mkdtempSync(join(tmpdir(), 'ods-migrate-wp5-'));
    try {
      const out = join(dir, 'tokens.json');
      execFileSync(process.execPath, [fileURLToPath(new URL('../scripts/build-token-mapping.mjs', import.meta.url)),
        '--repo', repo, '--ref', mapping.source.ref, '--from', mapping.source.from, '--out', out], { stdio: 'ignore' });
      assert.deepEqual(JSON.parse(readFileSync(out, 'utf8')), mapping);
    } finally {
      rmSync(dir, { force: true, recursive: true });
    }
  });
});
