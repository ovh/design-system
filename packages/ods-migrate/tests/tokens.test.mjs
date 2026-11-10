import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { describe, it } from 'node:test';
import { resolveToken, roleOfProperty, tailwindContext, transformScriptTokens, transformStyles } from '../src/tokens.mjs';

const mapping = JSON.parse(readFileSync(new URL('../mappings/tokens-v19-to-v20.json', import.meta.url), 'utf8'));
const fixtures = new URL('./fixtures/tokens/', import.meta.url);
const read = (name) => readFileSync(new URL(name, fixtures), 'utf8');
const transformFor = (name) => (/\.s?css$/.test(name) ? transformStyles : transformScriptTokens);
const migrate = (source, name, options) => transformFor(name)(source, mapping, name, options);

describe('design tokens', () => {
  for (const input of readdirSync(fixtures).filter((name) => name.includes('.input.'))) {
    const output = input.replace('.input.', '.output.');
    const name = input.replace('.input', '');

    it(`migrates ${input}`, () => {
      assert.equal(migrate(read(input), name).output, read(output));
    });

    it(`is idempotent on ${output}`, () => {
      assert.equal(migrate(read(output), name).output, read(output));
    });
  }

  it('reads the role from the CSS property', () => {
    const { output } = migrate('a { background: var(--ods-color-primary-500); border-color: var(--ods-color-primary-500); color: var(--ods-color-primary-500); }', 'a.css');
    assert.equal(output, 'a { background: var(--ods-semantic-color-surface-brand); border-color: var(--ods-semantic-color-border-brand); color: var(--ods-semantic-color-content-brand); }');
  });

  it('takes the hover role under a :hover selector', () => {
    const { output, notes } = migrate('a:hover { background-color: var(--ods-color-primary-700); }', 'a.css');
    assert.match(output, /interaction-brand-hover/);
    assert.equal(notes.length, 0);
  });

  it('marks a token whose role nothing in the file says, with the candidates', () => {
    const { output, todos } = migrate('a { box-shadow: 0 0 2px var(--ods-color-critical-500); }', 'a.css');
    // A box-shadow most likely draws a ring: the border is suggested first, the others follow.
    assert.match(output, /\/\* TODO\(ods-v20\): --ods-color-critical-500: .*Most likely here \(a border\): `--ods-semantic-color-border-critical`.*surface-critical.*content-critical/);
    assert.equal(todos.length, 1);
  });

  it('never reads the role from a neighbouring line', () => {
    // ovh/manager BackupDistant: a `color:` key two lines above a Tailwind background.
    const source = 'const legend = { color: \'x\' };\nconst c = <span className="bg-[--ods-color-neutral-500]" />;\n';
    assert.match(migrate(source, 'a.tsx').output, /bg-\[--ods-semantic-color-surface-neutral\]/);
    const css = 'const s = `\n  color: red;\n  --x: var(--ods-color-neutral-500);\n`;\n';
    assert.match(migrate(css, 'a.ts').output, /TODO\(ods-v20\)/);
  });

  it('keeps an overridden ODS placeholder a grey, not the text-on-solid role', () => {
    // ovh/manager account-creation: the v19 table sent a light grey text to content-on-solid (white).
    // v19 neutral-300 (#b3b3b3) is v20 gray-400: the light gray stops moved up one.
    const { output } = migrate(':root { --ods-color-form-element-text-placeholder-default: var(--ods-color-neutral-300); }', 'a.css');
    assert.equal(output, ':root { --ods-semantic-color-content-placeholder: var(--ods-palette-gray-400); }');
  });

  it('turns a v19 ramp declaration into the matching palette step', () => {
    const { output, notes } = migrate(':root { --ods-color-primary-500: #7a00cc; }', 'a.css');
    assert.equal(output, ':root { --ods-palette-brand-500: #7a00cc; }');
    assert.equal(notes.length, 1);
  });

  it('marks the disabled colours, which are an opacity in v20', () => {
    const { todos } = migrate('a { color: var(--ods-theme-text-color-disabled); }', 'a.css');
    assert.match(todos[0].message, /opacity: var\(--ods-semantic-opacity-disabled\)/);
  });

  it('reports tokens that ODS never declared, without touching them', () => {
    const source = 'a { color: var(--ods-color-blue-600); }';
    const { output, notes } = migrate(source, 'a.css');
    assert.equal(output, source);
    assert.match(notes[0].message, /ODS v19 never declared this name: it gives its fallback value \(or nothing\), in v19 as in v20\. Nothing to do/);
  });

  it('renames the font and its asset paths', () => {
    const { output } = migrate('@use "@ovhcloud/ods-themes/assets/fonts/source-sans-pro/base64/source-sans3-variable-custom";\nbody { font-family: "Source Sans Pro", arial; }', 'a.scss');
    assert.equal(output, '@use "@ovhcloud/ods-themes/assets/fonts/source-sans-3/base64/source-sans3-variable-custom";\nbody { font-family: "Source Sans 3", arial; }');
  });

  it('renames the family name alone, never a part of another family', () => {
    const css = ":root { --font: 'Brand Source Sans Pro',\n  'Source Sans Pro'; }\n.a { font-family: Source Sans Pro, arial; }\n.b { font-family: \"Source Sans Pro Light\", 'Brand Source Sans Pro'; }\n";
    assert.equal(migrate(css, 'a.css').output, ":root { --font: 'Brand Source Sans Pro',\n  'Source Sans 3'; }\n.a { font-family: 'Source Sans 3', arial; }\n.b { font-family: \"Source Sans Pro Light\", 'Brand Source Sans Pro'; }\n");
    const script = "const font = \"'Brand Source Sans Pro', 'Source Sans Pro', sans-serif\";\nconst style = { fontFamily: 'Source Sans Pro' };\n";
    assert.equal(migrate(script, 'a.ts').output, "const font = \"'Brand Source Sans Pro', 'Source Sans 3', sans-serif\";\nconst style = { fontFamily: 'Source Sans 3' };\n");
  });

  it('paints the outline of a focused element with the v20 focus role', () => {
    const css = '.f:focus,\n.f:focus-within { outline-color: var(--ods-color-primary-700); }\n.g:focus-visible { outline: 2px solid var(--ods-color-primary-500); }\n.h:focus { border-color: var(--ods-color-primary-700); }\n';
    assert.equal(migrate(css, 'a.css').output, '.f:focus,\n.f:focus-within { outline-color: var(--ods-semantic-color-focus); }\n.g:focus-visible { outline: 2px solid var(--ods-semantic-color-focus); }\n.h:focus { border-color: var(--ods-semantic-color-interaction-brand-hover); }\n');
  });

  it('reads a ring box-shadow as a border, in CSS and in a Tailwind value', () => {
    assert.equal(migrate('.a { box-shadow: inset 0 0 0 1px var(--ods-color-primary-600); }\n', 'a.css').output, '.a { box-shadow: inset 0 0 0 1px var(--ods-semantic-color-border-brand); }\n');
    assert.match(migrate('.b { box-shadow: 0 2px 4px var(--ods-color-primary-600); }\n', 'a.css').output, /TODO\(ods-v20\): --ods-color-primary-600: .*Most likely here \(a border\)/);
    assert.match(migrate('.c { box-shadow: 0 0 0 2px var(--ods-color-primary-600), 0 1px 2px #000; }\n', 'a.css').output, /TODO\(ods-v20\)/);
    assert.equal(migrate('const c = "shadow-[inset_0_0_0_1px_var(--ods-color-primary-600)]";\n', 'a.tsx').output, 'const c = "shadow-[inset_0_0_0_1px_var(--ods-semantic-color-border-brand)]";\n');
  });

  it('does not join a split declaration in a quoted string: a test looks for it in some CSS', () => {
    const { output } = migrate("expect(css).toContain('--ods-font-family-default: var(--x)');\n", 'a.ts');
    assert.match(output, /TODO\(ods-v20\): --ods-font-family-default: v20 splits it into --ods-semantic-font-family-body and --ods-semantic-font-family-heading: .*look for the other one too/);
    assert.match(output, /'--ods-semantic-font-family-body: var\(--x\)'\);\n$/);
    // A CSS-in-JS template is a stylesheet: both declarations are written.
    assert.equal(migrate('const g = css`\n  --ods-font-family-default: var(--x);\n`;\n', 'a.ts').output, 'const g = css`\n  --ods-semantic-font-family-body: var(--x); --ods-semantic-font-family-heading: var(--x);\n`;\n');
  });

  it('takes linear time on a long run of token-like names (no backtracking on `--ods-…#{`)', () => {
    const source = `const x = "${'--ods-color-'.repeat(20_000)}";\n`;
    const start = Date.now();
    migrate(source, 'a.ts');
    assert.ok(Date.now() - start < 3_000, `${Date.now() - start} ms`);
  });

  it('does not mark twice a site whose marker contains a `*`', () => {
    // ovh/manager-ui-kit tailwind.config: the BC-03 hint names `--ods-semantic-size-radius-*`.
    const once = migrate('export default { borderRadius: { xs: \'var(--ods-border-radius-xs)\' } };', 'tailwind.config.mjs').output;
    assert.match(once, /radius-\*/);
    assert.equal(migrate(once, 'tailwind.config.mjs').output, once);
  });

  it('leaves files without v19 tokens untouched', () => {
    const source = 'a { color: var(--ods-semantic-color-content-text); }';
    assert.equal(migrate(source, 'a.css').output, source);
  });

  it('every destination of the mapping is a v20 name', () => {
    const names = Object.values(mapping.tokens).flatMap((entry) => [entry.to, entry.palette, ...Object.values(entry.byRole ?? {})]).filter(Boolean);
    // The theme tokens land on the new tiers, a renamed component token on a name that v20 keeps.
    assert.ok(names.every((name) => /^--ods-(semantic|palette)-/.test(name) || !(name in mapping.tokens)));
    assert.ok(Object.values(mapping.scss).every((entry) => !entry.to || !(entry.to in mapping.scss) || mapping.scss[entry.to].keep));
  });

  it('the component mapping never tells to write a token that v20 removes', () => {
    const components = readFileSync(new URL('../mappings/v19-to-v20.json', import.meta.url), 'utf8');
    const cited = components.match(/--ods-[a-z0-9-]*[a-z0-9]|\$ods-[\w-]+/g) ?? [];
    assert.deepEqual(cited.filter((name) => name in mapping.tokens || name in mapping.scss), []);
  });

  it('renames the Button border token and its SCSS variable (BC-18)', () => {
    const source = '.a { --ods-button-border-radius-width: 2px; border: ods.$ods-button-border-radius-width solid; }';
    assert.equal(migrate(source, 'a.scss').output, '.a { --ods-button-border-width: 2px; border: ods.$ods-button-border-width solid; }');
  });

  it('marks the removed component tokens and SCSS variables with their hint', () => {
    const { todos } = migrate('.a { --ods-toggle-control-background-color-hover: red; margin: $ods-modal-margin; }', 'a.scss');
    assert.match(todos[0].message, /^--ods-toggle-control-background-color-hover: removed: the unchecked `Toggle`/);
    assert.match(todos[1].message, /^\$ods-modal-margin: removed: use `\$ods-modal-margin-horizontal`/);
  });

  it('marks a removed component token on a read and on an override, naming what v20 paints instead', () => {
    // Gone in v20 (BC-08): a read resolves to nothing, an override does nothing.
    assert.match(migrate('a { color: var(--ods-tab-text-color-selected); }', 'a.css').todos[0].message, /content-on-selected/);
    assert.equal(migrate(`const style = { color: 'var(--ods-tab-text-color-selected)' };`, 'a.ts').todos.length, 1);
    assert.match(migrate('a { --ods-tab-text-color-selected: red; }', 'a.css').todos[0].message, /content-on-selected/);
  });

  it('keeps a read of a removed name that held a known value, and marks an override of it (BC-25)', () => {
    const { output, todos } = migrate('a { color: var(--ods-button-text-color-success); --ods-button-background-color-warning: red; }', 'a.css');
    assert.match(output, /color: var\(--ods-semantic-color-content-on-success-solid\)/);
    assert.match(output, /--ods-button-background-color-warning: red/);
    assert.equal(todos.length, 1);
    assert.match(todos[0].message, /paints nothing: delete it/);
  });

  it('renames the status of the component mixins, and marks a removed or computed one (BC-23, BC-24)', () => {
    const source = "@use '@ovhcloud/ods-react/style' as ods;\n.a { @include ods.ods-button-variant-default('primary'); }\n.b { @include ods.ods-tag-color('primary'); }\n.c { @include ods.ods-button-variant-ghost('success'); }\n.d { @include ods.ods-badge-color($s); }\n";
    const { output, todos } = migrate(source, 'a.scss');
    assert.match(output, /ods\.ods-button-emphasis-high\('brand'\)/);
    assert.match(output, /ods\.ods-tag-color\('accent'\)/);
    assert.equal(todos.length, 2);
    assert.match(todos[0].message, /no 'success' Button/);
    assert.match(todos[1].message, /through a variable/);
    assert.equal(migrate(output, 'a.scss').output, output);
  });

  it('replaces a removed SCSS variable with what ODS reads for the same purpose, without its namespace', () => {
    assert.equal(migrate('a { border-radius: ods.$ods-modal-border-radius; }', 'a.scss').output, 'a { border-radius: var(--ods-semantic-size-radius-overlay); }');
    // Renamed to its v20 name, which keeps a stacking note: a second run changes nothing (BC-16).
    const { notes, output } = migrate('.a { z-index: ods.$ods-modal-z-index; }', 'a.scss');
    assert.equal(output, '.a { z-index: ods.$ods-overlay-modal-z-index; }');
    assert.equal(migrate(output, 'a.scss').output, output);
    assert.ok(notes.some((note) => /keeps its name and its layer, 100 in v19/.test(note.message ?? note)));
  });

  it('renames a bare read of the overlay z-index token 1:1', () => {
    const { output, todos } = migrate('.help { z-index: var(--ods-theme-overlay-z-index); }', 'a.css');
    assert.equal(output, '.help { z-index: var(--ods-semantic-z-index-dropdown); }');
    assert.deepEqual(todos, []);
  });

  it('never rewrites a stacking computed on the overlay token (rerank)', () => {
    const { output, todos } = migrate('.help { z-index: calc(var(--ods-theme-overlay-z-index) + 2); }', 'a.css');
    assert.match(output, /z-index: calc\(var\(--ods-theme-overlay-z-index\) \+ 2\)/);
    assert.match(todos[0].message, /^--ods-theme-overlay-z-index: check this stacking: the ODS overlays get new z-index values in v20 \(v19: dropdowns 99, modal 100, drawer 101; v20: sticky 100, dropdown 200, drawer 300, modal 400\).* \(this token is 99 in v19; its v20 layer, `--ods-semantic-z-index-dropdown`, is 200\)$/);
  });

  it('says what else a v19 ramp declaration recolours once it is a palette step', () => {
    const { notes, output } = migrate(':root { --ods-color-information-600: #0050d7; }', 'theme.css');
    assert.equal(output, ':root { --ods-palette-blue-600: #0050d7; }');
    assert.match(notes[0].message, /also feeds --ods-palette-brand-600, --ods-semantic-color-focus, which it recolours too/);
  });

  it('names what ODS reads instead, where its own styles migrated the token elsewhere', () => {
    const synthetic = {
      hints: { ods: 'ODS v20 itself uses' },
      tokens: { '--ods-theme-x': { bc: 'BC-01', ods: { '*': [{ files: ['meter.module.scss', 'selectContent.module.scss', 'checkboxControl.module.scss'], read: '--ods-semantic-y' }] }, to: '--ods-semantic-z' } },
    };
    // The ODS stylesheets are named as kinds of elements and components, never as internal parts.
    assert.deepEqual(resolveToken(synthetic, '--ods-theme-x'), {
      note: '--ods-theme-x → --ods-semantic-z: ODS v20 itself uses `--ods-semantic-y` for popups and overlays, form fields (Meter, Select, Checkbox): if this element is one of those, use that token instead; otherwise keep this one.',
      to: '--ods-semantic-z',
    });
  });

  it('flags every rename of the mapping that ODS contradicts in its own styles', () => {
    for (const [name, entry] of Object.entries(mapping.tokens).filter(([, e]) => e.to && e.ods?.['*'])) {
      const { notes } = migrate(`a { color: var(${name}); }`, 'a.css');
      assert.ok(notes.some(({ message }) => message.includes(`ODS v20 itself uses \`${entry.ods['*'][0].read}\``)), name);
    }
  });

  it('leaves a SCSS variable that the stylesheet declares itself', () => {
    const source = '$drawer-max-size: 50%;\na { max-width: $drawer-max-size; }';
    assert.equal(migrate(source, 'a.scss').output, source);
  });
});

describe('roles', () => {
  it('leaves the role of `accent-[…]` open, like the `accent-color` property', () => {
    assert.equal(tailwindContext('accent-[--ods-color-primary-500]', 'accent-['.length).role, null);
    assert.equal(roleOfProperty('accent-color'), null);
  });

  it('reads Tailwind utilities and their variants', () => {
    assert.deepEqual(tailwindContext('p-2 hover:bg-[--ods-x]', 'p-2 hover:bg-['.length), { active: false, hover: true, placeholder: false, role: 'surface', stack: false, where: 'hover:bg-[…]' });
    assert.equal(tailwindContext('active:bg-[--ods-x]', 'active:bg-['.length).active, true);
    // The v4 shorthand, with or without a data-type hint: the role is the utility's.
    assert.equal(tailwindContext('bg-(--ods-x)', 'bg-('.length).role, 'surface');
    assert.equal(tailwindContext('border-(color:--ods-x)', 'border-(color:'.length).role, 'border');
    assert.equal(tailwindContext('border-b-[var(--ods-x)]', 'border-b-[var('.length).role, 'border');
    assert.equal(tailwindContext('placeholder:text-[--ods-x]', 'placeholder:text-['.length).placeholder, true);
    assert.equal(tailwindContext('[&>svg]:fill-[--ods-x]', '[&>svg]:fill-['.length).role, 'surface');
    assert.equal(tailwindContext('var(--ods-x)', 4), null);
  });

  it('reads custom property names only when they are unambiguous', () => {
    assert.equal(roleOfProperty('--app-panel-bg'), 'surface');
    assert.equal(roleOfProperty('--app-accent'), null);
    assert.equal(roleOfProperty('box-shadow'), null);
    assert.equal(roleOfProperty('border-top-color'), 'border');
  });

  it('flags the doubtful cells of the v19 table instead of trusting them', () => {
    assert.match(resolveToken(mapping, '--ods-color-neutral-300', { role: 'content' }).note, /v20 has no exact equivalent, this is the closest colour; compare it on screen/);
  });
});
