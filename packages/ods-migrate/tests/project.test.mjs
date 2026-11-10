/*
 * The project index (src/project.mjs, src/resolve.mjs): the modules of the scanned code that stand
 * for ODS are found without any option, their importers are migrated, the ESLint rule follows the
 * same modules through ods-migrate.modules.json, and a second run changes nothing.
 *
 * Each folder of fixtures/project/ is a small project: `input/` is migrated with `--write`,
 * `expected/` holds the files that change (every other file must stay as it is).
 */
import assert from 'node:assert/strict';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, relative } from 'node:path';
import { after, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import parser from '@typescript-eslint/parser';
import { Linter } from 'eslint';
import { run } from '../src/cli.mjs';
import plugin from '../src/eslint-plugin.mjs';
import { analyze, buildProjectIndex, computeEntry, indexOptions, stripComments } from '../src/project.mjs';
import { MODULES_FILE, createResolver, odsNameIn, parseJsonc } from '../src/resolve.mjs';
import { stripScriptMarkers } from '../src/shared.mjs';

const FIXTURES = fileURLToPath(new URL('./fixtures/project/', import.meta.url));
const mapping = JSON.parse(readFileSync(new URL('../mappings/v19-to-v20.json', import.meta.url), 'utf8'));
const SCRIPTS = /\.(c|m)?[jt]sx?$/;
const temps = [];
after(() => temps.forEach((dir) => rmSync(dir, { force: true, recursive: true })));

function temp() {
  const dir = mkdtempSync(join(tmpdir(), 'ods-migrate-project-'));
  temps.push(dir);
  return dir;
}

function files(dir, root = dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? files(path, root) : [relative(root, path)];
  });
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

function lint(dir, file, text, options = {}) {
  const linter = new Linter({ configType: 'flat', cwd: dir });
  const config = [{
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: { parser, parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { ods: plugin },
    rules: { 'ods/v20-migration': ['error', options] },
  }];
  return linter.verifyAndFix(text, config, join(dir, file));
}

const CASES = readdirSync(FIXTURES).filter((name) => existsSync(join(FIXTURES, name, 'input')));

describe('project index: fixtures', () => {
  for (const name of CASES) {
    describe(name, () => {
      const input = join(FIXTURES, name, 'input');
      const expectedDir = join(FIXTURES, name, 'expected');
      const expected = existsSync(expectedDir) ? files(expectedDir) : [];
      let dir;
      let first;

      it('migrates the importers of the modules that stand for ODS, without any option', async () => {
        dir = temp();
        cpSync(input, dir, { recursive: true });
        first = await migrate(dir, ['--write']);
        assert.equal(first.code, 0, first.stderr);
        for (const file of files(input)) {
          const want = expected.includes(file) ? readFileSync(join(expectedDir, file), 'utf8') : readFileSync(join(input, file), 'utf8');
          assert.equal(readFileSync(join(dir, file), 'utf8'), want, file);
        }
      });

      it('is idempotent (the code, then the modules file)', async () => {
        const before = Object.fromEntries(files(dir).filter((file) => file !== MODULES_FILE).map((file) => [file, readFileSync(join(dir, file), 'utf8')]));
        const second = await migrate(dir, ['--write']);
        assert.equal(second.code, 0);
        assert.equal(second.report.summary.filesChanged, 0);
        for (const [file, text] of Object.entries(before)) {
          assert.equal(readFileSync(join(dir, file), 'utf8'), text, file);
        }
        // The modules file follows the code (a renamed export under its v20 name), then stays.
        const modules = existsSync(join(dir, MODULES_FILE)) ? readFileSync(join(dir, MODULES_FILE), 'utf8') : null;
        await migrate(dir, ['--write']);
        assert.equal(existsSync(join(dir, MODULES_FILE)) ? readFileSync(join(dir, MODULES_FILE), 'utf8') : null, modules);
        assert.deepEqual(second.report.odsModules.map((module) => module.file), first.report.odsModules.map((module) => module.file), 'the same modules are found in the migrated code');
      });

      it('ESLint --fix, with the modules file, gives the codemod output without markers', () => {
        const base = temp();
        cpSync(input, base, { recursive: true });
        if (existsSync(join(dir, MODULES_FILE))) {
          cpSync(join(dir, MODULES_FILE), join(base, MODULES_FILE));
        }
        for (const file of files(input).filter((path) => SCRIPTS.test(path))) {
          const result = lint(base, file, readFileSync(join(input, file), 'utf8'));
          assert.equal(result.messages.filter((message) => message.fatal).length, 0, file);
          assert.equal(result.output, stripScriptMarkers(readFileSync(join(dir, file), 'utf8')), file);
        }
      });
    });
  }
});

describe('project index: report', () => {
  it('explains what it found, in plain words', async () => {
    const dir = temp();
    cpSync(join(FIXTURES, 'alias', 'input'), dir, { recursive: true });
    const { report, stdout } = await migrate(dir, ['--write']);
    assert.match(stdout, /Your modules that give access to ODS \(found on their own, nothing to configure\):\n {2}src\/ui\/ods\.ts passes ODS components on: the 2 files that import it are handled like files that import @ovhcloud\/ods-react\./);
    assert.match(stdout, /^Wrote ods-migrate\.modules\.json: the list of your modules that give access to ODS, read by the ODS ESLint rules\. Commit it if you use those rules; delete it otherwise\.$/m);
    assert.deepEqual(report.odsModules.map((module) => [module.file, module.importers]), [['src/ui/ods.ts', 2]]);
    assert.equal(report.modulesFile, MODULES_FILE);
  });

  it('names the wrappers it follows and those it does not, with the reason', async () => {
    const dir = temp();
    cpSync(join(FIXTURES, 'wrapper', 'input'), dir, { recursive: true });
    const { report, stdout } = await migrate(dir);
    assert.match(stdout, /src\/GuardedButton\.tsx has components that render the ODS Button with the same props \(GuardedButton\): the 1 file that imports it is handled like files that import @ovhcloud\/ods-react\./);
    assert.match(stdout, /src\/MessageCompat\.tsx has components that render the ODS Message with the same props \(MessageCompat, Message\)/);
    assert.match(stdout, /src\/IconButton\.tsx: IconButton is built on the ODS Button but does not pass variant on to the ODS Button\. Nothing to do unless the 1 file that uses it passes color or variant to it; if it does, choose: keep variant on IconButton, or rename it emphasis like the ODS Button\./);
    assert.match(stdout, /src\/StatusBadge\.tsx: StatusBadge is built on the ODS Badge but has its own color prop\. Nothing to do unless the 1 file that uses it passes color to it; if it does, choose: keep color on StatusBadge, or rename it status like the ODS Badge\./);
    assert.deepEqual(report.odsModulesNotFollowed.map((item) => item.name).sort(), ['IconButton', 'StatusBadge']);
    assert.equal(existsSync(join(dir, MODULES_FILE)), false, 'a dry run writes nothing');
  });

  it('lists the imports that look like ODS but lead nowhere, and --built-on-ods takes them', async () => {
    const dir = temp();
    cpSync(join(FIXTURES, 'lookalike', 'input'), dir, { recursive: true });
    const plain = await migrate(dir);
    assert.deepEqual(plain.report.odsLookalikes, [{ file: null, files: 1, installed: false, names: ['BUTTON_VARIANT'], package: '@acme/legacy-kit', specifier: '@acme/legacy-kit' }]);
    assert.match(plain.stdout, /Imports that look like ODS but that ods-migrate could not read \(left as they are; if they are ODS, your type check points at them\):/);
    assert.match(plain.stdout, /@acme\/legacy-kit: BUTTON_VARIANT in 1 file\. No source folder nor installed package was found for @acme\/legacy-kit: run ods-migrate on a folder that also holds it \(the root of your repository\), or, if it gives access to ODS components unchanged, pass --built-on-ods @acme\/legacy-kit\./);
    assert.equal(plain.report.summary.filesChanged, 0);
    const treated = await migrate(dir, ['--built-on-ods', '@acme/legacy-kit', '--write']);
    assert.equal(treated.report.summary.filesChanged, 1);
    assert.deepEqual(treated.report.odsLookalikes, []);
    assert.match(readFileSync(join(dir, 'src/App.tsx'), 'utf8'), /BUTTON_EMPHASIS\.low/);
    assert.deepEqual(JSON.parse(readFileSync(join(dir, MODULES_FILE), 'utf8')).builtOnOds, ['@acme/legacy-kit']);
  });

  it('knows only --built-on-ods: the names it had before its first release are unknown options', async () => {
    for (const option of ['--treat-as-ods', '--also']) {
      const dir = temp();
      cpSync(join(FIXTURES, 'lookalike', 'input'), dir, { recursive: true });
      let stderr = '';
      const code = await run(['.', option, '@acme/legacy-kit'], { cwd: dir, stderr: (text) => { stderr += text; }, stdout: () => {} });
      assert.equal(code, 2, option);
      assert.match(stderr, /Unknown option/, option);
    }
  });

  it('never overwrites a modules file it did not write', async () => {
    const dir = temp();
    cpSync(join(FIXTURES, 'alias', 'input'), dir, { recursive: true });
    writeFileSync(join(dir, MODULES_FILE), '{"mine":true}\n');
    const { code, stderr, stdout } = await migrate(dir, ['--write']);
    assert.equal(code, 0, stderr);
    assert.equal(readFileSync(join(dir, MODULES_FILE), 'utf8'), '{"mine":true}\n');
    assert.match(stdout, /ods-migrate\.modules\.json exists and was not written by ods-migrate: it is left as it is/);
  });

  it('counts the users of a workspace package, not the barrels that pass it on', async () => {
    const dir = temp();
    cpSync(join(FIXTURES, 'workspace', 'input'), dir, { recursive: true });
    const { report, stdout } = await migrate(dir);
    assert.deepEqual(report.odsModules.filter((module) => module.importers && (module.reexports || module.wrappers.length)).map((module) => module.file), ['packages/kit/src/index.ts']);
    assert.match(stdout, /packages\/kit\/src\/index\.ts passes ODS components on and has components that render the ODS Badge with the same props \(KitBadge\): the 1 file that imports it is handled like files that import @ovhcloud\/ods-react\./);
    // The text says what the --json report holds beyond what it shows.
    assert.match(stdout, /\(the --json report also lists 4 that no scanned file imports or that hold only types\)/);
    assert.equal(report.odsModules.length, 5);
  });
});

describe('project index: ESLint', () => {
  it('reads ods-migrate.modules.json from cwd, or the `modules` option, or none with false', () => {
    const dir = temp();
    cpSync(join(FIXTURES, 'alias', 'input'), dir, { recursive: true });
    const index = buildProjectIndex(files(dir).map((file) => join(dir, file)), { mapping });
    assert.equal(index.modules.size, 1);
    const source = readFileSync(join(dir, 'src/pages/Page.tsx'), 'utf8');
    assert.equal(lint(dir, 'src/pages/Page.tsx', source).output, source, 'no modules file: nothing to follow');
    return migrate(dir, ['--write']).then(() => {
      const base = temp();
      cpSync(join(FIXTURES, 'alias', 'input'), base, { recursive: true });
      // Its paths are relative to the file: another name in the same folder, given with `modules`.
      cpSync(join(dir, MODULES_FILE), join(base, 'ods.modules.json'));
      assert.equal(lint(base, 'src/pages/Page.tsx', source).output, source);
      assert.match(lint(base, 'src/pages/Page.tsx', source, { modules: 'ods.modules.json' }).output, /BADGE_STATUS\.accent/);
      cpSync(join(dir, MODULES_FILE), join(base, MODULES_FILE));
      assert.match(lint(base, 'src/pages/Page.tsx', source).output, /BADGE_STATUS\.accent/);
      assert.equal(lint(base, 'src/pages/Page.tsx', source, { modules: false }).output, source);
    });
  });

  it('takes builtOnOds', () => {
    const source = "import { BUTTON_VARIANT } from '@acme/kit';\nexport const a = BUTTON_VARIANT.ghost;\n";
    assert.match(lint(temp(), 'a.ts', source, { builtOnOds: ['@acme/kit'] }).output, /BUTTON_EMPHASIS\.low/);
  });
});

describe('project index: resolution', () => {
  it('reads tsconfig with comments, trailing commas, extends, references and baseUrl', () => {
    assert.deepEqual(parseJsonc('{ // a\n "a": [1, 2,], /* b */ "c": "//x", }'), { a: [1, 2], c: '//x' });
    const dir = project({
      // With a baseUrl, paths are relative to it (here src/, set by the config that extends this one).
      'base.json': '{ "compilerOptions": { "paths": { "~ui/*": ["./ui/*"] } } }',
      'src/app/a.ts': '',
      'src/ui/b.ts': '',
      'src/lib/c.tsx': '',
      'tsconfig.app.json': '{ "extends": "./base.json", "compilerOptions": { "baseUrl": "src" } }',
      'tsconfig.json': '{ "files": [], "references": [{ "path": "./tsconfig.app.json" }] }',
    });
    const { resolve } = createResolver();
    const from = join(dir, 'src/app/a.ts');
    assert.equal(resolve(from, '~ui/b').file, join(dir, 'src/ui/b.ts'));
    assert.equal(resolve(from, 'lib/c').file, join(dir, 'src/lib/c.tsx'), 'baseUrl');
    assert.deepEqual(resolve(from, '@ovhcloud/ods-react'), { ods: '@ovhcloud/ods-react' });
    assert.equal(resolve(from, 'react').unresolved, true);
  });

  it('reads package.json imports and the sources of a workspace package built to dist', () => {
    const dir = project({
      'package.json': JSON.stringify({ imports: { '#kit/*': { default: './src/kit/*.js', types: './src/kit/*.d.ts' }, '#ods': './src/ods.ts' } }),
      'packages/ui/package.json': JSON.stringify({ exports: { '.': { import: './dist/ui.es.js', types: './dist/types/src/lib.d.ts' } }, name: '@acme/ui' }),
      'packages/ui/src/lib.ts': '',
      'src/a.ts': '',
      'src/kit/x.ts': '',
      'src/ods.ts': '',
    });
    const { resolve } = createResolver({ workspace: new Map([['@acme/ui', join(dir, 'packages/ui')]]) });
    const from = join(dir, 'src/a.ts');
    assert.equal(resolve(from, '#ods').file, join(dir, 'src/ods.ts'));
    assert.equal(resolve(from, '#kit/x').file, join(dir, 'src/kit/x.ts'));
    assert.equal(resolve(from, '@acme/ui').file, join(dir, 'packages/ui/src/lib.ts'));
  });
});

describe('project index: comments', () => {
  it('reads the imports after a line comment that holds `/*`, never those of a comment', () => {
    const text = "// Path: /iam/:tab?/*\nimport { Badge } from '@/ods';\n/* import { X } from 'no'; */\nconst url = 'http://a//b'; // import 'no'\n";
    const bare = stripComments(text);
    assert.match(bare, /import \{ Badge \} from '@\/ods';/);
    assert.doesNotMatch(bare, /'no'/);
    assert.match(bare, /'http:\/\/a\/\/b'/);
  });
});

describe('project index: entries', () => {
  const options = indexOptions(mapping);
  const entryOf = (source, targets = {}) => computeEntry(analyze(source, 'a.tsx'), (spec) => (spec === '@ovhcloud/ods-react' ? true : targets[spec] ?? null), options);

  it('follows export *, export { } from, an import exported again, and shadows its own names', () => {
    const star = entryOf("export * from '@ovhcloud/ods-react';\nexport { Button } from './mine';\n");
    assert.equal(star.star, true);
    assert.equal(odsNameIn(star, 'BADGE_COLOR'), 'BADGE_COLOR');
    assert.equal(odsNameIn(star, 'Button'), null);
    const again = entryOf("import { BADGE_COLOR as C, Badge } from '@ovhcloud/ods-react';\nconst mine = 1;\nexport { C as COLORS, Badge, mine };\n");
    assert.deepEqual(again.names, { Badge: 'Badge', COLORS: 'BADGE_COLOR' });
    assert.equal(odsNameIn(again, 'mine'), null);
    const aliased = entryOf("import { MODAL_COLOR as ODS_MODAL_COLOR, MODAL_COLORS as ODS_MODAL_COLORS } from '@ovhcloud/ods-react';\ntype MODAL_COLOR = ODS_MODAL_COLOR;\nconst MODAL_COLORS = ODS_MODAL_COLORS;\nexport { MODAL_COLORS };\nexport type { MODAL_COLOR };\n");
    assert.deepEqual(aliased.names, { MODAL_COLOR: 'MODAL_COLOR', MODAL_COLORS: 'MODAL_COLORS' }, 'a name given again (type or const alias)');
    const named = entryOf("export { BADGE_COLOR } from '@ovhcloud/ods-react';\n");
    assert.deepEqual(named.names, { BADGE_COLOR: 'BADGE_COLOR', BADGE_STATUS: 'BADGE_STATUS' }, 'the v19 and v20 names of a renamed export');
  });

  it('recognizes wrappers whose props are an ODS props type and that forward them', () => {
    const imports = "import { forwardRef, type ComponentProps, type FC } from 'react';\nimport { Button, Message, type ButtonProp, type MessageProp } from '@ovhcloud/ods-react';\n";
    const wrappers = entryOf(`${imports}
interface P extends ButtonProp { extra?: string }
type Q = ComponentProps<typeof Button> & { iam?: string[] };
export const A = forwardRef<HTMLButtonElement, P>(({ extra, ...rest }, ref) => <Button ref={ ref } { ...rest } />);
export function B({ iam, ...rest }: Q) { return <Button { ...rest } />; }
export const C: FC<MessageProp> = (props) => <Message { ...props } />;
export const D = ({ variant, ...rest }: ButtonProp) => <Button variant={ variant } { ...rest } />;
export const F = ({ variant = 'ghost', ...rest }: ButtonProp) => <Button variant={ variant } { ...rest } />;
export type KitProps = ButtonProp & { iam?: string };
`);
    // F: a default of the ODS prop that the codemod migrates with it ({ emphasis: variant = 'low' }): still a pass-through.
    assert.deepEqual(wrappers.wrappers, { A: 'Button', B: 'Button', C: 'Message', D: 'Button', F: 'Button' });
    assert.equal(wrappers.names.KitProps, 'ButtonProp');
    const rejected = entryOf(`${imports}
export const E = ({ variant, ...rest }: ButtonProp) => <Button { ...rest } data-variant={ variant } />;
export const F = ({ color = 'warning', ...rest }: ButtonProp) => <Button color={ color } { ...rest } />;
export const G = (props: Omit<ButtonProp, 'variant'>) => <Button { ...props } variant="ghost" />;
export const H = (props: ButtonProp) => <Message { ...props } />;
`);
    assert.deepEqual(rejected.wrappers, {});
    assert.deepEqual(rejected.rejected.map((item) => [item.name, item.reason]), [
      ['E', 'it does not pass variant on to the ODS Button'],
      ['F', 'it gives color its own default'],
      ['G', 'its props declare or omit variant'],
      ['H', 'it does not spread its props on the ODS Button'],
    ]);
  });
});
