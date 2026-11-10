import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, describe, it } from 'node:test';
import vm from 'node:vm';
import parser from '@typescript-eslint/parser';
import { Linter } from 'eslint';
import stylelint from 'stylelint';
import { run } from '../src/cli.mjs';
import eslintPlugin from '../src/eslint-plugin.mjs';
import { stripScriptMarkers } from '../src/shared.mjs';
import stylelintPlugin from '../src/stylelint-plugin.mjs';
import { transformScriptTokens, transformStyles } from '../src/tokens.mjs';
import { transformSource } from '../src/transform.mjs';

/*
 * One regression test per finding of the review of the integrated package (lenses decisions,
 * p0-silent, corpus, ux-configurator), with the real mappings: the codemod output, and the
 * ESLint / stylelint rules on the same input (--fix gives the codemod output without its markers,
 * and the rules report every marker on the codemod output, without a fix).
 */

const mapping = JSON.parse(readFileSync(new URL('../mappings/v19-to-v20.json', import.meta.url), 'utf8'));
const tokenMapping = JSON.parse(readFileSync(new URL('../mappings/tokens-v19-to-v20.json', import.meta.url), 'utf8'));
const temps = [];
after(() => temps.forEach((dir) => rmSync(dir, { force: true, recursive: true })));

/* The script pipeline of the CLI: components, then the tokens of what the component pass wrote. */
function codemod(source, filename = 'a.tsx', options = {}) {
  const components = transformSource(source, mapping, filename, { packages: ['@ovh-ux/muk'], ...options });
  const tokens = transformScriptTokens(components.output, tokenMapping, filename, options);
  return { ...components, notes: [...components.notes, ...tokens.notes], output: tokens.output, todos: [...components.todos, ...tokens.todos] };
}

const linter = new Linter({ configType: 'flat' });
function lint(source, filename = 'a.tsx', { fix = true, look } = {}) {
  const config = [{
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: { parser, parserOptions: { ecmaFeatures: { jsx: !/\.(c|m)?ts$/.test(filename) } } },
    plugins: { ods: eslintPlugin },
    rules: { 'ods/v20-migration': ['error', { look, builtOnOds: ['@ovh-ux/muk'] }], 'ods/v20-tokens': ['error', { look }] },
  }];
  return fix ? linter.verifyAndFix(source, config, filename) : { messages: linter.verify(source, config, filename), output: source };
}

/* --fix on the input gives the codemod output without its markers; on the codemod output, one unfixable report per marker. */
function assertParity(input, filename = 'a.tsx', { config, look = config?.look } = {}) {
  const { output } = codemod(input, filename, { config });
  assert.equal(lint(input, filename, { look }).output, stripScriptMarkers(output), 'ESLint --fix = codemod without markers');
  const { messages } = lint(output, filename, { fix: false, look });
  assert.deepEqual(messages.filter((message) => message.fatal || message.fix).map((message) => message.message), [], 'nothing left to fix');
  assert.equal(messages.length, output.match(/TODO\(ods-v20\)/g)?.length ?? 0, 'one report per marker');
  return output;
}

async function stylelintFix(code, filename = 'a.css', options = true) {
  const result = await stylelint.lint({
    code,
    codeFilename: filename,
    config: { plugins: stylelintPlugin, rules: { 'ods/no-removed-token': options } },
    customSyntax: filename.endsWith('.scss') ? 'postcss-scss' : undefined,
    fix: true,
  });
  return { output: result.code, warnings: result.results[0].warnings };
}

function project(files) {
  const dir = mkdtempSync(join(tmpdir(), 'ods-migrate-review-'));
  temps.push(dir);
  for (const [path, text] of Object.entries(files)) {
    mkdirSync(join(dir, path, '..'), { recursive: true });
    writeFileSync(join(dir, path), text);
  }
  return dir;
}

async function cli(cwd, args) {
  let stdout = '';
  let stderr = '';
  const code = await run(args, { cwd, stderr: (text) => { stderr += text; }, stdout: (text) => { stdout += text; } });
  return { code, stderr, stdout };
}

const ODS = "import { Badge, Button, BUTTON_COLOR, BUTTON_VARIANT, Card, CARD_COLOR, Message, Popover, Tag } from '@ovhcloud/ods-react';\n";
const PACKAGE_19 = JSON.stringify({ dependencies: { '@ovhcloud/ods-react': '^19.7.3' } });

describe('the defaults chosen for v20', () => {
  it('marks a computed z-index in a Tailwind arbitrary value, in a class string and in @apply', async () => {
    const input = 'export const A = () => <div className="z-[calc(var(--ods-theme-overlay-z-index)+1)]" />;\n';
    const output = assertParity(input);
    assert.match(output, /TODO\(ods-v20\): --ods-theme-overlay-z-index: check this stacking/);
    assert.match(output, /z-\[calc\(var\(--ods-theme-overlay-z-index\)\+1\)\]/);
    const css = '.e { @apply z-[calc(var(--ods-theme-overlay-z-index)+1)]; }';
    assert.match(transformStyles(css, tokenMapping, 'a.css').output, /TODO\(ods-v20\): --ods-theme-overlay-z-index: check this stacking.*@apply z-\[calc\(var\(--ods-theme-overlay-z-index\)\+1\)\]/);
    const { output: fixed, warnings } = await stylelintFix(css);
    assert.equal(fixed, css);
    assert.equal(warnings.length, 1);
  });

  it('renames the overlay z-index only where a z-index reads it as is: a variable that holds it is marked', () => {
    const css = transformStyles('.a { z-index: var(--ods-theme-overlay-z-index); }\n.c { --my-z: var(--ods-theme-overlay-z-index); }\n', tokenMapping, 'a.css');
    assert.equal(css.output.split('\n')[0], '.a { z-index: var(--ods-semantic-z-index-dropdown); }');
    assert.doesNotMatch(css.notes[0]?.message ?? '', /not settled|preview/);
    assert.match(css.output.split('\n')[1], /^\.c \{ \/\* TODO\(ods-v20\): --ods-theme-overlay-z-index: check this stacking.*--my-z: var\(--ods-theme-overlay-z-index\)/);
    const scss = transformStyles('$z: var(--ods-theme-overlay-z-index);\n.a { z-index: calc(#{$z} + 1); }\n', tokenMapping, 'a.scss');
    assert.match(scss.output, /TODO\(ods-v20\).*\n\$z: var\(--ods-theme-overlay-z-index\);/);
    const script = "const z = 'var(--ods-theme-overlay-z-index)';\nexport const A = () => <div style={{ zIndex: `calc(${z} + 1)` }} />;\nexport const B = () => <div style={{ zIndex: 'var(--ods-theme-overlay-z-index)' }} />;\n";
    const output = assertParity(script);
    assert.match(output, /^const z = \/\* TODO\(ods-v20\): --ods-theme-overlay-z-index: check this stacking/);
    assert.match(output, /zIndex: 'var\(--ods-semantic-z-index-dropdown\)'/);
    assert.doesNotMatch(tokenMapping.hints['z-rerank'], /pick the v20 layer/);
  });

  it('drops an explicit v20 status default: Card neutral, Badge, Message and Tag information', () => {
    const input = `${ODS}export const A = () => <>
  <Card color="neutral">c</Card>
  <Card color={ CARD_COLOR.neutral }>c</Card>
  <Badge color="information">b</Badge>
  <Message color="information">m</Message>
  <Tag color="information">t</Tag>
</>;\n`;
    const output = assertParity(input);
    assert.match(output, /<Card>c<\/Card>\n {2}<Card>c<\/Card>\n {2}<Badge>b<\/Badge>\n {2}<Message>m<\/Message>\n {2}<Tag>t<\/Tag>/);
    // card-default-status v19 adds status="accent" to a bare Card: the explicit neutral stays.
    const config = { look: { 'card-default-status': 'v19' } };
    assert.match(codemod(input, 'a.tsx', { config }).output, /<Card status="neutral">c<\/Card>\n {2}<Card status=\{ CARD_STATUS\.neutral \}>c<\/Card>/);
    assert.match(lint(input, 'a.tsx', { look: config.look }).output, /<Card status="neutral">c<\/Card>/);
  });

  it('keeps white everywhere on the document root except its page background', () => {
    const { output } = transformStyles([
      'body { color: var(--ods-theme-background-color); }',
      'html { border: 1px solid var(--ods-theme-background-color); }',
      'body { box-shadow: 0 0 0 4px var(--ods-theme-background-color); }',
      ':root { --text-on-dark: var(--ods-theme-background-color); }',
      ':root { --card-surface: var(--ods-color-neutral-000); }',
      'body { background: var(--ods-theme-background-color); }',
      'html { background-color: var(--ods-color-neutral-000); }',
    ].join('\n'), tokenMapping, 'a.css');
    const lines = output.split('\n');
    lines.slice(0, 5).forEach((text) => assert.match(text, /surface-raised/, text));
    lines.slice(5).forEach((text) => assert.match(text, /surface-page/, text));
    const { notes } = transformStyles(':root { --card-surface: var(--ods-color-neutral-000); }', tokenMapping, 'a.css');
    assert.match(notes.map(({ message }) => message).join('\n'), /declared on the document root: if this property is the page background, use `--ods-semantic-color-surface-page`/);
  });

  it('writes the value of SPINNER_COLOR.neutral where the app keeps it, and offers to delete it where it reaches a Spinner', () => {
    const { output } = codemod("import { SPINNER_COLOR, Spinner } from '@ovhcloud/ods-react';\nexport const c = SPINNER_COLOR.neutral;\nexport const A = () => <Spinner color={ c } />;\n");
    assert.match(output, /^import \{ Spinner \} from '@ovhcloud\/ods-react';\nexport const c = 'neutral';\n/);
    assert.match(output, /<Spinner color=\{…\}> is removed in v20 and its value is computed at runtime: the v20 Spinner has a single default color/);
  });
});

describe('failures that used to be silent', () => {
  it('renames a Tailwind utility only with its theme key, collected over the run (a preset, a v4 @theme)', async () => {
    const usage = 'export const A = () => <div className="text-ods-color-primary-500 rounded-ods-border-radius-md" />;\n';
    // Alone (ESLint, or a run on src only): marked, never renamed, and no ESLint fix.
    const alone = assertParity(usage);
    assert.match(alone, /TODO\(ods-v20\): ods-color-primary-500: a Tailwind key of the ODS v19 guide with no v20 name/);
    assert.match(alone, /ods-border-radius-md: a Tailwind key of the ODS guide, `ods-container` in v20: rename it in your Tailwind theme/);
    assert.match(alone, /className="text-ods-color-primary-500 rounded-ods-border-radius-md"/);
    // The preset and the usage in the same run: the documented key renamed with its utility, the colour one marked.
    const preset = "module.exports = { theme: { extend: { colors: { 'ods-color-primary-500': '#0050d7' }, borderRadius: { 'ods-border-radius-md': '8px' } } } };\n";
    const dir = project({ 'package.json': PACKAGE_19, 'src/a.tsx': usage, 'tailwind-preset.js': preset, 'tailwind.config.js': "module.exports = { presets: [require('./tailwind-preset')] };\n" });
    assert.equal((await cli(dir, ['.', '--write'])).code, 0);
    assert.match(readFileSync(join(dir, 'src/a.tsx'), 'utf8'), /className="text-ods-color-primary-500 rounded-ods-container"/);
    assert.match(readFileSync(join(dir, 'tailwind-preset.js'), 'utf8'), /colors: \{ \/\* TODO\(ods-v20\): ods-color-primary-500: a Tailwind key of the ODS v19 guide with no v20 name.*\*\/ 'ods-color-primary-500':.*borderRadius: \{ 'ods-container': '8px' \}/);
    // A Tailwind v4 theme.
    const v4 = project({ 'package.json': PACKAGE_19, 'src/a.tsx': 'export const A = () => <div className="rounded-ods-border-radius-md" />;\n', 'tw.css': '@theme {\n  --radius-ods-border-radius-md: 8px;\n}\n' });
    await cli(v4, ['.', '--write']);
    assert.equal(readFileSync(join(v4, 'tw.css'), 'utf8'), '@theme {\n  --radius-ods-container: 8px;\n}\n');
    assert.match(readFileSync(join(v4, 'src/a.tsx'), 'utf8'), /className="rounded-ods-container"/);
    // The theme of the same stylesheet counts for its @apply, in the codemod and in stylelint.
    const css = '@theme {\n  --radius-ods-border-radius-md: 8px;\n}\n.a { @apply rounded-ods-border-radius-md; }\n';
    const expected = '@theme {\n  --radius-ods-container: 8px;\n}\n.a { @apply rounded-ods-container; }\n';
    assert.equal(transformStyles(css, tokenMapping, 'a.css').output, expected);
    assert.equal((await stylelintFix(css)).output, expected);
  });

  it('marks the internal classes whose elements depend on the v20 default, unless the config keeps the v19 look', () => {
    const css = '.x [class*="button--default"] { color: red; }\n.x [class*="button--outline"] { color: red; }\n.x [class*="message--default"] { color: red; }\n.x [class*="button--ghost"] { color: red; }\n';
    const aluminium = transformStyles(css, tokenMapping, 'a.css');
    assert.equal(aluminium.todos.length, 3);
    assert.match(aluminium.output, /TODO\(ods-v20\): button--default: it also matched every Button without `variant`.*\n\.x \[class\*="button--default"\]/);
    assert.match(aluminium.output, /TODO\(ods-v20\): button--outline: `button--medium` in v20, which also matches every Button without `emphasis`/);
    assert.match(aluminium.output, /\[class\*="button--low"\]/);
    const config = { look: { 'button-default-emphasis': 'v19', 'message-default-emphasis': 'v19' } };
    assert.equal(transformStyles(css, tokenMapping, 'a.css', { config }).output, css.replace('button--default', 'button--high').replace('button--outline', 'button--medium').replace('message--default', 'message--high').replace('button--ghost', 'button--low'));
  });

  it('renames the Button status classes: button--primary is button--brand, the other statuses have none', () => {
    const { output, todos } = transformStyles('.x [class*="button--primary"] { color: red; }\n.y [class*="button--success"] { color: red; }\n', tokenMapping, 'a.css');
    assert.match(output, /\[class\*="button--brand"\]/);
    assert.match(todos[0].message, /^button--success: internal class with no v20 equivalent/);
  });

  it('moves a prop into an overlayConfig object before its spread, which still wins', () => {
    const input = `${ODS}const base = { position: 'bottom' as const };\nexport const A = () => <Popover position="top" overlayConfig={{ ...base }}>a</Popover>;\n`;
    const output = assertParity(input);
    assert.match(output, /<Popover overlayConfig=\{\{ position: 'top', \.\.\.base \}\}>a<\/Popover>/);
    const multiline = `${ODS}export const A = () => <Popover position="top" overlayConfig={{\n  ...base,\n}}>a</Popover>;\n`;
    assert.match(assertParity(multiline), /overlayConfig=\{\{\n {2}position: 'top',\n {2}\.\.\.base,\n\}\}/);
  });

  it('wraps a unary minus on a Sass number that became a var()', () => {
    const { output } = transformStyles("@use '@ovhcloud/ods-react/style/button' as button;\n.b { margin-left: -(button.$ods-button-size-md); margin-right: -button.$ods-button-size-md; }\n", tokenMapping, 'a.scss');
    assert.equal(output, "@use '@ovhcloud/ods-react/style/button' as button;\n.b { margin-left: calc(-1 * #{button.$ods-button-size-md}); margin-right: calc(-1 * #{button.$ods-button-size-md}); }\n");
    assert.equal(transformStyles(output, tokenMapping, 'a.scss').output, output);
  });

  it('keeps an explicit default written after a spread, renamed: it overrode the spread', () => {
    const input = `${ODS}export const A = (rest: any) => <Button {...rest} color="primary" variant="outline">a</Button>;\nexport const B = (rest: any) => <Button color="primary" {...rest}>b</Button>;\n`;
    const output = assertParity(input);
    assert.match(output, /<Button \{\.\.\.rest\} status="brand" emphasis="medium">a<\/Button>/);
    assert.match(output, /<Button \{\.\.\.rest\}>b<\/Button>/);
  });

  it('maps a template literal without substitution like a string literal', () => {
    for (const filename of ['a.tsx', 'a.jsx']) {
      const input = "import { Badge, Button, Message } from '@ovhcloud/ods-react';\nexport const D = () => <Button variant={`ghost`}>d</Button>;\nexport const E = () => <Badge color={`primary`}>e</Badge>;\nexport const F = () => <Message variant={`light`} color={`primary`}>f</Message>;\nexport const G = () => <Button variant={`outline`}>g</Button>;\n";
      const output = assertParity(input, filename);
      assert.match(output, /<Button emphasis=\{`low`\}>d<\/Button>/);
      assert.match(output, /<Badge status=\{`accent`\}>e<\/Badge>/);
      assert.match(output, /<Message status=\{`accent`\}>f<\/Message>/);
      assert.match(output, /<Button>g<\/Button>/);
      assert.deepEqual(codemod(input, filename).untyped, []);
    }
  });
});

describe('findings on real code', () => {
  it('marks an object key that feeds a renamed prop, in both engines, once', () => {
    const input = "import { BUTTON_VARIANT, BUTTON_COLOR } from '@ovhcloud/ods-react';\nimport { Button } from './MyButton';\nexport const Item = () => {\n  const buttonProps = { variant: BUTTON_VARIANT.ghost, color: BUTTON_COLOR.critical, label: 'x' };\n  return <Button {...buttonProps} />;\n};\n";
    const output = assertParity(input);
    // The marker names the constant as the code now reads it, and as v19 wrote it, and says what to do in each case.
    assert.match(output, /\/\* TODO\(ods-v20\): variant: holds BUTTON_EMPHASIS\.low \(BUTTON_VARIANT\.ghost in v19\), the emphasis of an ODS Button\. Passed to an ODS Button with \{\.\.\.obj\}\? Rename the key to emphasis: TypeScript does not flag it there\. Read as obj\.variant\? Keep it and delete this comment \*\/ variant: BUTTON_EMPHASIS\.low/);
    assert.match(output, /\/\* TODO\(ods-v20\): color: holds BUTTON_STATUS\.critical \(BUTTON_COLOR\.critical in v19\), the status of an ODS Button\..*\*\/ color: BUTTON_STATUS\.critical/);
    assert.equal(codemod(output).output, output);
    // Without the marker, a v20 constant under the key is the integrator's choice: nothing reported.
    assert.deepEqual(lint(stripScriptMarkers(output), 'a.tsx', { fix: false }).messages, []);
  });

  it('lists the objects typed by a Pick that now names the v20 prop', () => {
    const { output, typed } = codemod("import type { ButtonProp } from '@ovhcloud/ods-react';\nexport type P = { actionButton?: Pick<ButtonProp, 'variant'> };\n", 'a.ts');
    assert.match(output, /Pick<ButtonProp, 'emphasis'>/);
    assert.match(typed[0].message, /the objects typed with it still use the `variant` key \(now emphasis\): your type check lists them once on v20/);
  });

  it('notes a v19 prop holding an ODS constant on a local component', () => {
    const { notes } = codemod("import { BUTTON_VARIANT } from '@ovhcloud/ods-react';\nimport { Button } from './MyButton';\nexport const F = () => <Button variant={BUTTON_VARIANT.ghost}>x</Button>;\n");
    assert.match(notes.map(({ message }) => message).join('\n'), /<Button variant=\{ BUTTON_VARIANT\.ghost \}>: Button is your component, not the ODS Button\. If it gives this variant to an ODS Button, rename the attribute to emphasis here; if it uses it another way, keep it/);
  });
});

describe('the configurator, as an integrator uses it', () => {
  it('never migrates the generated opt-out CSS: --check passes after --write with the v19 font', async () => {
    const dir = project({ 'ods-migrate.config.json': JSON.stringify({ look: { 'font-family': 'v19' } }), 'package.json': PACKAGE_19, 'src/a.css': ".t { font-family: 'Source Sans Pro', sans-serif; }\n" });
    assert.equal((await cli(dir, ['.', '--write'])).code, 0);
    assert.match(readFileSync(join(dir, 'ods-v19-look.css'), 'utf8'), /--ods-semantic-font-family-body: 'Source Sans Pro'/);
    // The v19 font choice keeps the family name in the app's own code too.
    assert.equal(readFileSync(join(dir, 'src/a.css'), 'utf8'), ".t { font-family: 'Source Sans Pro', sans-serif; }\n");
    const check = await cli(dir, ['.', '--check']);
    assert.equal(check.code, 0, check.stdout);
    assert.match(check.stdout, /Check: nothing left to migrate/);
    const { warnings } = await stylelintFix(readFileSync(join(dir, 'ods-v19-look.css'), 'utf8'), 'ods-v19-look.css', [true, { look: { 'font-family': 'v19' } }]);
    assert.deepEqual(warnings, []);
  });

  it('keeps the v19 look of the v19 values it rewrites on a package already on ODS 20, and warns', async () => {
    const dir = project({
      'ods-migrate.config.json': JSON.stringify({ look: { 'badge-accent-filled': 'v19', 'button-default-emphasis': 'v19' } }),
      'package.json': JSON.stringify({ dependencies: { '@ovhcloud/ods-react': '^20.0.0' } }),
      'src/App.tsx': "import { Badge, Button } from '@ovhcloud/ods-react';\nexport const A = () => <><Button>a</Button><Badge color=\"primary\">b</Badge></>;\n",
    });
    const { stdout } = await cli(dir, ['.', '--write']);
    assert.equal(readFileSync(join(dir, 'src/App.tsx'), 'utf8'), "import { Badge, Button } from '@ovhcloud/ods-react';\nexport const A = () => <><Button>a</Button><Badge status=\"accent\" emphasis=\"high\">b</Badge></>;\n");
    assert.match(stdout, /Warning: package\.json declares @ovhcloud\/ods-react \^20\.0\.0: the v19-look additions of the config \(button-default-emphasis\) are skipped for its files.*pass --from 19/);
  });

  it('adds emphasis="high" with ESLint --fix when BADGE_COLOR is only read in the attribute', () => {
    const input = "import { Badge, BADGE_COLOR } from '@ovhcloud/ods-react';\nexport const B = () => <Badge color={ BADGE_COLOR.primary }>New</Badge>;\n";
    const config = { look: { 'badge-accent-filled': 'v19' } };
    const output = assertParity(input, 'a.tsx', { config });
    assert.match(output, /<Badge status=\{ BADGE_STATUS\.accent \} emphasis="high">New<\/Badge>/);
  });

  it('says when a config next to the scanned code is not read', async () => {
    const dir = project({ 'app/ods-migrate.config.json': JSON.stringify({ look: { 'card-default-status': 'v19' } }), 'app/package.json': PACKAGE_19, 'app/src/a.tsx': 'export const a = 1;\n' });
    const { stdout } = await cli(dir, ['app']);
    assert.match(stdout, /Note: app\/ods-migrate\.config\.json is not read: ods-migrate reads the ods-migrate\.config\.json of the folder it runs from, or the file given with --config\./);
  });

  it('empties a generated opt-out CSS that no choice needs any more', async () => {
    const dir = project({ 'ods-migrate.config.json': JSON.stringify({ look: { 'button-radius': 'v19' } }), 'package.json': PACKAGE_19 });
    await cli(dir, ['.', '--write']);
    assert.match(readFileSync(join(dir, 'ods-v19-look.css'), 'utf8'), /button-radius/);
    writeFileSync(join(dir, 'ods-migrate.config.json'), JSON.stringify({ look: { 'button-radius': 'aluminium' } }));
    const { stdout } = await cli(dir, ['.', '--write']);
    assert.match(stdout, /v19-look stylesheet ods-v19-look\.css: no choice of your config needs it any more, emptied: delete it and its import\./);
    assert.equal(readFileSync(join(dir, 'ods-v19-look.css'), 'utf8'), '/* Generated by ods-migrate from ods-migrate.config.json */\n/* No choice of the config keeps a v19 look any more: delete this file and its import. */\n');
    assert.doesNotMatch((await cli(dir, ['.', '--write'])).stdout, /v19-look stylesheet/);
  });

  it('rejects an unknown pending id and a --from other than 19 or 20', async () => {
    const dir = project({ 'cfg.json': JSON.stringify({ pending: ['NOPE-1'] }), 'package.json': PACKAGE_19 });
    const pending = await cli(dir, ['.', '--config', 'cfg.json']);
    assert.equal(pending.code, 2);
    assert.match(pending.stderr, /unknown id "NOPE-1" in pending \(known: [^)]*\)/);
    assert.doesNotMatch(pending.stderr, /example-pending/, 'the component API has no pending id');
    for (const from of ['7', '21']) {
      const result = await cli(dir, ['.', '--from', from]);
      assert.equal(result.code, 2);
      assert.match(result.stderr, /--from expects an ODS major \(19, 20\)/);
    }
  });

  it('keeps `pending` when the page loads a config and downloads it again, and shows a full radius as such', () => {
    const page = readFileSync(new URL('../configurator/index.html', import.meta.url), 'utf8');
    const script = page.match(/<script id="config-builder">([\s\S]*?)<\/script>/)[1];
    const context = vm.createContext({});
    vm.runInContext(script, context);
    const selection = context.readSelection({ look: { 'button-radius': 'v19' }, optOutCss: 'src/ods-v19-look.css', pending: ['example-pending'], extra: 1 }, ['button-radius']);
    assert.deepEqual(JSON.parse(JSON.stringify(selection.ignored)), ['extra']);
    assert.deepEqual(JSON.parse(JSON.stringify(context.buildConfig(selection.look, selection.optOutCss, selection.pending))), { look: { 'button-radius': 'v19' }, optOutCss: 'src/ods-v19-look.css', pending: ['example-pending'], version: 1 });
    assert.equal(context.shownValue('3.35544e+07px'), 'full (pill)');
    assert.equal(context.shownValue('4px'), '4px');
  });

  it('says where the Datepicker width lives', () => {
    const choices = JSON.parse(readFileSync(new URL('../configurator/choices.json', import.meta.url), 'utf8')).choices;
    assert.match(choices.find(({ id }) => id === 'form-field-width').alternative.effect, /its width is set on `DatepickerControl`, whose element has no `data-ods`/);
  });

  it('documents what the CLI writes and reads', () => {
    const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
    assert.match(readme, /"look": \{ "button-default-emphasis": "aluminium"/);
    // The ids of `pending` are for the ODS team, each said in plain words; the component API has none.
    assert.match(readme, /`pending`: for the ODS team only\. [^\n]*The shipped mappings have no pending entry/);
    assert.doesNotMatch(readme, /`example-pending` \(/);
    assert.match(readme, /Scripts are read in a tolerant way/);
    assert.ok(existsSync(new URL('../configurator/index.html', import.meta.url)));
  });
});
