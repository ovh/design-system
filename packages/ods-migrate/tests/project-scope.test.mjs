/*
 * What ods-migrate finds on its own, without any option, beyond the modules that re-export ODS:
 * - the components of the project whose props are typed with ODS types (their callers' values and
 *   their own defaults follow the renamed type), in the codemod and in the ESLint rule;
 * - the packages pinned to ODS 17 or 18, left unchanged (codemod, ESLint, stylelint), with one plain
 *   sentence in the report, unless --from says what the code is written for;
 * - the advice printed for an import that looks like ODS but leads nowhere;
 * - the coverage gate: a corpus that drops to 0 sites fails unless its baseline entry allows it.
 * The fixtures of fixtures/project/ (typed-props, package-scope, detection-paths) are run, made
 * idempotent and checked against ESLint --fix by project.test.mjs.
 */
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { after, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import parser from '@typescript-eslint/parser';
import { Linter } from 'eslint';
import stylelint from 'stylelint';
import { run } from '../src/cli.mjs';
import plugin from '../src/eslint-plugin.mjs';
import { analyze, computeEntry, indexOptions } from '../src/project.mjs';
import { MODULES_FILE, createOlderOdsResolver } from '../src/resolve.mjs';
import { TODO } from '../src/shared.mjs';
import stylelintPlugins from '../src/stylelint-plugin.mjs';

const FIXTURES = fileURLToPath(new URL('./fixtures/project/', import.meta.url));
const PACKAGE = fileURLToPath(new URL('../', import.meta.url));
const mapping = JSON.parse(readFileSync(new URL('../mappings/v19-to-v20.json', import.meta.url), 'utf8'));
const temps = [];
after(() => temps.forEach((dir) => rmSync(dir, { force: true, recursive: true })));

function temp() {
  const dir = mkdtempSync(join(tmpdir(), 'ods-migrate-scope-'));
  temps.push(dir);
  return dir;
}

function copy(name) {
  const dir = temp();
  cpSync(join(FIXTURES, name, 'input'), dir, { recursive: true });
  return dir;
}

function project(tree) {
  const dir = temp();
  for (const [path, text] of Object.entries(tree)) {
    mkdirSync(dirname(join(dir, path)), { recursive: true });
    writeFileSync(join(dir, path), text);
  }
  return dir;
}

async function migrate(dir, args = []) {
  let stdout = '';
  let stderr = '';
  const json = join(temp(), 'report.json');
  const code = await run(['.', '--json', json, ...args], { cwd: dir, stderr: (text) => { stderr += text; }, stdout: (text) => { stdout += text; } });
  return { code, report: JSON.parse(readFileSync(json, 'utf8')), stderr, stdout };
}

function linter(dir, rules) {
  const instance = new Linter({ configType: 'flat', cwd: dir });
  const config = [{
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: { parser, parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { ods: plugin },
    rules,
  }];
  return { fix: (file, text) => instance.verifyAndFix(text, config, join(dir, file)), verify: (file, text) => instance.verify(text, config, join(dir, file)) };
}

/* ------------------------------------------------------------------------- typed props */

const entryOf = (text, filename = 'Comp.tsx', targets = {}) => {
  const desc = analyze(text, filename);
  return computeEntry(desc, (spec) => (spec === '@ovhcloud/ods-react' ? true : targets[spec] ?? null), indexOptions(mapping));
};

describe('typed props: the components found', () => {
  it('reads the props typed with an ODS type whose members change, whatever declares them', () => {
    const entry = entryOf(`
      import { forwardRef, memo, FC, PropsWithChildren } from 'react';
      import { Button, type ButtonColor, ButtonVariant, BadgeColor, ButtonSize } from '@ovhcloud/ods-react';
      type Tone = ButtonColor;
      interface Base { tone?: Tone }
      interface CardProps<T extends string> extends Base { status: T; badge?: BadgeColor | undefined; size?: ButtonSize; label: string }
      export function Card<T extends string>({ badge = 'primary' }: CardProps<T>) { return null; }
      type LinkProps = ({ to: string } | { href: string }) & { variant?: ButtonVariant | null };
      export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>(({ variant = 'ghost' }, ref) => null);
      export const Pill: FC<Omit<CardProps<string>, 'badge'>> = memo((props) => null);
      const Hidden = ({ color }: { color: ButtonColor }) => null;
      export default Hidden;
    `);
    assert.deepEqual(entry.typed, {
      Card: { badge: { type: 'BadgeColor' }, tone: { type: 'ButtonColor' } },
      Link: { variant: { type: 'ButtonVariant' } },
      Pill: { tone: { type: 'ButtonColor' } },
      default: { color: { type: 'ButtonColor' } },
    });
    assert.deepEqual(Object.keys(entry.ownTyped).sort(), ['Card', 'Hidden', 'Link', 'Pill']);
    assert.deepEqual(entry.names, {}, 'a component with typed props does not stand for ODS');
  });

  it('reads the props that take an object of ODS props, through Pick, Partial and a helper that keeps the keys', () => {
    const entry = entryOf(`
      import { FC, ComponentProps } from 'react';
      import { Button, ButtonProp, BadgeProp } from '@ovhcloud/ods-react';
      type DeepReadonly<T> = { readonly [K in keyof T]: T[K] };
      export type MenuProps = DeepReadonly<{ actionButton?: Pick<ButtonProp, 'variant'>; badge?: Partial<BadgeProp>; trigger: ComponentProps<typeof Button>; label: string }>;
      export const Menu: FC<MenuProps> = ({ actionButton }) => null;
    `);
    assert.deepEqual(entry.typed.Menu, { actionButton: { component: 'Button' }, badge: { component: 'Badge' }, trigger: { component: 'Button' } });
  });

  it('passes them on through a barrel, by name and as a default export', () => {
    const button = { names: {}, shadow: [], star: false, typed: { Button: { color: { type: 'ButtonColor' } }, default: { variant: { type: 'ButtonVariant' } } }, wrappers: {} };
    const entry = entryOf(`
      export { Button, default as Link } from './Button';
      export * from './more';
    `, 'index.ts', { './Button': button, './more': { ...button, typed: { Extra: { color: { type: 'ButtonColor' } } } } });
    assert.deepEqual(entry.typed, { Button: { color: { type: 'ButtonColor' } }, Extra: { color: { type: 'ButtonColor' } }, Link: { variant: { type: 'ButtonVariant' } } });
  });

  it('keeps a followed wrapper a wrapper, and a prop of another type out', () => {
    const entry = entryOf(`
      import { Button, ButtonProp, ButtonSize } from '@ovhcloud/ods-react';
      export const GuardedButton = (props: ButtonProp) => <Button { ...props } />;
      export const Sized = ({ size }: { size: ButtonSize }) => null;
    `);
    assert.deepEqual(entry.typed, {});
    assert.equal(entry.wrappers.GuardedButton, 'Button');
  });
});

describe('typed props: callers, defaults, report, lint', () => {
  it('reports the components and how many files use them', async () => {
    const dir = copy('typed-props');
    const { report, stdout } = await migrate(dir);
    assert.match(stdout, /Your components whose props take ODS values \(found on their own: the values passed to them change in v20\):/);
    assert.match(stdout, /src\/components\/button\/Button\.tsx: Button \(variant, color\): the values given to it in 1 file are handled too\./);
    assert.deepEqual(report.typedComponents.map((item) => [item.file, item.name, item.users]), [
      ['src/components/card/ConfigCard.tsx', 'ConfigCard', 2],
      ['src/components/button-link/ButtonLink.tsx', 'ButtonLink', 1],
      ['src/components/button/Button.tsx', 'Button', 1],
      ['src/components/menu/ActionsMenu.tsx', 'ActionsMenu', 1],
    ]);
    assert.deepEqual(report.odsModules, [], 'a module of typed components is not a module that stands for ODS');
    const notes = report.files.find((file) => file.file === 'src/components/button-link/ButtonLink.tsx').toCheck.map((note) => note.message);
    assert.ok(notes.some((message) => /^ButtonLink variant: its values change in v20 \('default' → 'high', 'outline' → 'medium', 'ghost' → 'low'\): what this code builds from it changes too \(a CSS class name, an object key\): rename those to match, and check what a renamed class overrides first, since the v20 value may look different/.test(message)), notes.join('\n'));
  });

  it('lints the migrated code with one report per marker and nothing left to fix', async () => {
    const dir = copy('typed-props');
    await migrate(dir, ['--write']);
    const { verify } = linter(dir, { 'ods/v20-migration': 'error' });
    let markers = 0;
    let reports = 0;
    for (const file of ['src/pages/Page.tsx', 'src/components/button/Button.tsx', 'src/components/menu/ActionsMenu.tsx']) {
      const text = readFileSync(join(dir, file), 'utf8');
      markers += text.split(TODO).length - 1;
      const messages = verify(file, text).filter((message) => message.ruleId === 'ods/v20-migration');
      assert.equal(messages.filter((message) => message.fix).length, 0, file);
      reports += messages.length;
    }
    assert.equal(markers, 1);
    assert.equal(reports, markers);
  });

  it('leaves the callers alone when the component is not typed with ODS (same names, other types)', async () => {
    const dir = project({
      'src/Button.tsx': "type Props = { color?: 'primary' | 'secondary' };\nexport const Button = ({ color = 'primary' }: Props) => <button className={ color } />;\n",
      'src/App.tsx': "import { BADGE_COLOR } from '@ovhcloud/ods-react';\nimport { Button } from './Button';\n\nexport const App = () => <Button color=\"primary\" data-color={ BADGE_COLOR.primary } />;\n",
    });
    await migrate(dir, ['--write']);
    assert.equal(readFileSync(join(dir, 'src/Button.tsx'), 'utf8'), "type Props = { color?: 'primary' | 'secondary' };\nexport const Button = ({ color = 'primary' }: Props) => <button className={ color } />;\n");
    assert.match(readFileSync(join(dir, 'src/App.tsx'), 'utf8'), /<Button color="primary" data-color=\{ BADGE_STATUS\.accent \} \/>/);
  });
});

/* ------------------------------------------------------------------------- packages on an older ODS */

describe('package scope: packages pinned to ODS 17 or 18', () => {
  it('says in one sentence per package that it is left unchanged', async () => {
    const dir = copy('package-scope');
    const { report, stdout } = await migrate(dir);
    assert.match(stdout, /\napps\/on17 uses ODS 17: left unchanged\. Migrate it to ODS 19 first \(https:\/\/ovh\.github\.io\/design-system\/latest\/guides\/migration-to-v19\), then run ods-migrate on it\.\napps\/on18 uses ODS 18: left unchanged\. Migrate it to ODS 19 first \(.*\), then run ods-migrate on it\.\n/);
    assert.deepEqual(report.olderOds, [{ files: 3, major: 17, package: 'apps/on17' }, { files: 3, major: 18, package: 'apps/on18' }]);
    assert.ok(!report.files.some((file) => /apps\/on1[78]\//.test(file.file)));
  });

  it('names the project itself when it is the one on an older ODS', async () => {
    const dir = project({
      'package.json': '{ "name": "playground", "dependencies": { "@ovhcloud/ods-components": "^18.6.0-alpha.2" } }\n',
      'src/style.css': '.a { color: var(--ods-color-primary-500); }\n',
    });
    const { report, stdout } = await migrate(dir, ['--write']);
    assert.match(stdout, /This project uses ODS 18: left unchanged\. Migrate it to ODS 19 first \(/);
    assert.equal(report.summary.filesChanged, 0);
    assert.equal(readFileSync(join(dir, 'src/style.css'), 'utf8'), '.a { color: var(--ods-color-primary-500); }\n');
  });

  it('migrates them when --from says the code is written for ODS 19', async () => {
    const dir = copy('package-scope');
    const { report, stdout } = await migrate(dir, ['--from', '19']);
    assert.doesNotMatch(stdout, /left unchanged/);
    assert.deepEqual(report.olderOds, []);
    assert.ok(report.files.some((file) => file.file === 'apps/on18/src/style.css' && file.changed));
  });

  it('reads the nearest package.json only, and keeps the ranges that name no major in scope', () => {
    const dir = project({
      'package.json': '{ "dependencies": { "@ovhcloud/ods-components": "18.6.4" } }',
      'a/package.json': '{ "name": "a" }',
      'b/package.json': '{ "dependencies": { "@ovhcloud/ods-themes": "workspace:^18.0.0" } }',
      'c/package.json': '{ "devDependencies": { "@ovhcloud/ods-react": "*" } }',
      'd/package.json': '{ "peerDependencies": { "@ovhcloud/ods-react": ">=18 <20 || ^19" } }',
      'e/package.json': 'not json',
      'f/package.json': '{ "dependencies": { "@ovhcloud/ods-react": "npm:@ovhcloud/ods-react@^17.0.0" } }',
    });
    const olderOf = createOlderOdsResolver();
    const at = (path) => olderOf(join(dir, path, 'x.ts'));
    assert.deepEqual(at('.'), { dir, major: 18 });
    assert.equal(at('a'), null, 'a package.json without ODS: in scope');
    assert.deepEqual(at('b'), { dir: join(dir, 'b'), major: 18 });
    assert.equal(at('c'), null);
    assert.equal(at('d'), null, 'a range that allows 18 and 19 is on 19');
    assert.equal(at('e'), null, 'an unreadable package.json is not a reason to skip');
    assert.deepEqual(at('f'), { dir: join(dir, 'f'), major: 17 });
  });

  it('is followed by the lint rules: ESLint and stylelint leave those packages alone', async () => {
    const dir = copy('package-scope');
    const { verify } = linter(dir, { 'ods/v20-migration': 'error', 'ods/v20-tokens': 'error' });
    const tsx = "import { BADGE_COLOR, Badge } from '@ovhcloud/ods-react';\n\nexport const Tag = () => <Badge color={ BADGE_COLOR.primary } style={ { color: 'var(--ods-color-primary-500)' } } />;\n";
    assert.equal(verify('apps/on18/src/Other.tsx', tsx).length, 0);
    assert.ok(verify('apps/on19/src/Other.tsx', tsx).length >= 3);
    const css = '.card { color: var(--ods-color-primary-500); }\n';
    const config = { plugins: stylelintPlugins, rules: { 'ods/no-removed-token': true } };
    const lint = async (file) => (await stylelint.lint({ code: css, codeFilename: join(dir, file), config })).results[0].warnings.length;
    assert.equal(await lint('apps/on17/src/other.css'), 0);
    assert.equal(await lint('apps/on19/src/other.css'), 1);
  });
});

describe('--read: a component library of another repository', () => {
  it('reads it to learn its components, never changes it, and counts only the app', async () => {
    const lib = project({
      'package.json': '{ "name": "@acme/lib", "peerDependencies": { "@ovhcloud/ods-react": "^19.7.1" } }',
      'src/index.ts': "export { Alert } from './Alert';\n",
      'src/Alert.tsx': "import { Message, type MessageColor } from '@ovhcloud/ods-react';\n\nexport type AlertProps = { color?: MessageColor; text: string };\nexport const Alert = ({ color = 'primary', text }: AlertProps) => <Message color={ color }>{ text }</Message>;\n",
    });
    const app = project({
      'package.json': '{ "dependencies": { "@acme/lib": "1.0.0", "@ovhcloud/ods-react": "19.7.1" } }',
      'tsconfig.json': `{ "compilerOptions": { "paths": { "@acme/lib": ["${join(lib, 'src/index.ts')}"] } } }`,
      'src/App.tsx': "import { Alert } from '@acme/lib';\n\nexport const App = () => <Alert color=\"primary\" text=\"x\" />;\n",
    });
    const before = readFileSync(join(lib, 'src/Alert.tsx'), 'utf8');
    const { code, report, stdout } = await migrate(app, ['--read', lib, '--write']);
    assert.equal(code, 0);
    assert.equal(readFileSync(join(app, 'src/App.tsx'), 'utf8'), "import { Alert } from '@acme/lib';\n\nexport const App = () => <Alert color=\"accent\" text=\"x\" />;\n");
    assert.equal(readFileSync(join(lib, 'src/Alert.tsx'), 'utf8'), before, 'the library is never written');
    assert.ok(report.files.every((file) => !file.file.startsWith('..')), 'only the app is reported');
    assert.match(stdout, /Alert \(color\): the values given to it in 1 file are handled too\./);
    // --check on the app alone passes once it is migrated, whatever the library still holds.
    assert.equal((await migrate(app, ['--read', lib, '--check'])).code, 0);
  });
});

describe('files a .odsmigrateignore leaves out', () => {
  it('are left alone by ESLint and stylelint too, as by the command', async () => {
    const dir = project({
      '.git/HEAD': 'ref: refs/heads/main\n',
      '.odsmigrateignore': 'src/styles/site-copies/\n*.vendor.tsx\n',
      'package.json': '{ "dependencies": { "@ovhcloud/ods-react": "19.7.3" } }',
    });
    const { verify } = linter(dir, { 'ods/v20-migration': 'error', 'ods/v20-tokens': 'error' });
    const tsx = "import { BADGE_COLOR, Badge } from '@ovhcloud/ods-react';\n\nexport const Tag = () => <Badge color={ BADGE_COLOR.primary } />;\n";
    assert.equal(verify('src/lib.vendor.tsx', tsx).length, 0);
    assert.ok(verify('src/Tag.tsx', tsx).length >= 2);
    const css = '.card { color: var(--ods-color-primary-500); }\n';
    const config = { plugins: stylelintPlugins, rules: { 'ods/no-removed-token': true } };
    const lint = async (file) => (await stylelint.lint({ code: css, codeFilename: join(dir, file), config })).results[0].warnings.length;
    assert.equal(await lint('src/styles/site-copies/site.css'), 0);
    assert.equal(await lint('src/styles/app.css'), 1);
  });
});

/* ------------------------------------------------------------------------- look-alikes */

describe('imports that look like ODS: what to do, in plain words', () => {
  it('tells an installed package, a missing one, a file of the project and a broken alias apart', async () => {
    const dir = project({
      'tsconfig.json': '{ "compilerOptions": { "paths": { "@/*": ["./src/*"] } } }',
      'node_modules/@acme/kit/package.json': '{ "name": "@acme/kit", "main": "index.js" }',
      'node_modules/@acme/kit/index.js': 'export const BUTTON_VARIANT = {};\n',
      'src/constants.ts': "export const BADGE_COLOR = { primary: 'primary' };\n",
      'src/App.tsx': [
        "import { BUTTON_VARIANT } from '@acme/kit';",
        "import { BADGE_COLOR } from './constants';",
        "import { MESSAGE_COLOR } from '@/missing/ods';",
        "import { SPINNER_COLOR } from '../nowhere';",
        '',
        'export const all = [BUTTON_VARIANT, BADGE_COLOR, MESSAGE_COLOR, SPINNER_COLOR];',
        '',
      ].join('\n'),
    });
    const { report, stdout } = await migrate(dir);
    assert.equal(report.summary.filesChanged, 0);
    assert.match(stdout, /@acme\/kit: BUTTON_VARIANT in 1 file\. @acme\/kit is an installed package, not code of the scanned folders: if its source is in your repository, run ods-migrate on a folder that holds both; otherwise, if it gives access to ODS components unchanged, pass --built-on-ods @acme\/kit\./);
    assert.match(stdout, /\.\/constants: BADGE_COLOR in 1 file\. It leads to src\/constants\.ts, which does not take these names from @ovhcloud\/ods-react: nothing to do if they are not the ODS ones/);
    assert.match(stdout, /@\/missing\/ods: MESSAGE_COLOR in 1 file\. This path leads to no file: if it is an alias, declare it where your build reads it/);
    assert.match(stdout, /\.\.\/nowhere: SPINNER_COLOR in 1 file\. This relative path leads to no file: check it\./);
  });
});

/* ------------------------------------------------------------------------- the coverage gate */

describe('coverage gate: a corpus that drops to 0 sites', () => {
  const run = (sites, extra = {}) => ({
    label: 'corpus',
    refs: { v19: { sha: 'aaaaaaaaaaaa' }, v20: { sha: 'bbbbbbbbbbbb' } },
    options: { treatAsOds: [] },
    files: {},
    summary: { sites, auto: sites, marked: 0, missed: 0, autoPct: sites ? 100 : null, assistedPct: sites ? 100 : null, regressions: 0, regressionsUnderMarker: 0, prematureFiles: 0, prematureHunks: 0 },
    migrate: { exit: 0 },
    ...extra,
  });
  const check = (baselineEntry, report, record = false) => {
    const dir = temp();
    writeFileSync(join(dir, 'baseline.json'), JSON.stringify({ coverage: { corpus: baselineEntry } }));
    writeFileSync(join(dir, 'run.json'), JSON.stringify(report));
    try {
      const stdout = execFileSync(process.execPath, [join(PACKAGE, 'scripts/coverage-check.mjs'), ...(record ? ['--record'] : []), '--baseline', join(dir, 'baseline.json'), join(dir, 'run.json')], { encoding: 'utf8' });
      return { code: 0, stdout, baseline: JSON.parse(readFileSync(join(dir, 'baseline.json'), 'utf8')) };
    } catch (error) {
      return { code: error.status, stdout: error.stdout };
    }
  };
  const was = (sites, extra = {}) => ({ refs: { v19: 'aaaaaaaaa', v20: 'bbbbbbbbb' }, sites, auto: sites, missed: 0, autoPct: sites ? 100 : null, assistedPct: sites ? 100 : null, regressions: 0, regressionsUnderMarker: 0, prematureFiles: 0, ...extra });

  it('fails from N sites to 0', () => {
    const result = check(was(12), run(0));
    assert.equal(result.code, 1);
    assert.match(result.stdout, /sites 12 → 0: nothing measured/);
  });

  it('passes from 0 to 0 (a package on ODS 18), and from N to 0 when the entry allows it', () => {
    assert.equal(check(was(0), run(0)).code, 0);
    assert.equal(check(was(12, { allowNoSites: true }), run(0)).code, 0);
    assert.equal(check(was(12), run(12)).code, 0);
  });

  it('keeps allowNoSites when a run is recorded', () => {
    const { baseline } = check(was(12, { allowNoSites: true, note: 'why' }), run(0), true);
    assert.equal(baseline.coverage.corpus.allowNoSites, true);
    assert.equal(baseline.coverage.corpus.sites, 0);
  });
});

describe('modules file', () => {
  it('lists the typed components for the ESLint rule, by exported name and by local name', async () => {
    const dir = copy('typed-props');
    await migrate(dir, ['--write']);
    const modules = JSON.parse(readFileSync(join(dir, MODULES_FILE), 'utf8'));
    assert.deepEqual(modules.modules['src/components/card/ConfigCard.tsx'].typed, { default: { deleteButtonColor: { type: 'ButtonColor' }, deleteButtonVariant: { type: 'ButtonVariant' } } });
    assert.deepEqual(modules.components['src/components/card/ConfigCard.tsx'], { ConfigCard: { deleteButtonColor: { type: 'ButtonColor' }, deleteButtonVariant: { type: 'ButtonVariant' } } });
  });
});
