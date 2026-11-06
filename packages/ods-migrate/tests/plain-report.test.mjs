/*
 * The report, the help and the marker texts, as an integrator with no internal context reads them:
 * - the help names --built-on-ods, never the former names nor internal words;
 * - the points to check come grouped by kind, each with one action; the --ods-* names ODS v19 never
 *   declared are counted apart, as not migration work, and never renamed;
 * - the JSON report (version 3) uses the words of the text, with an id per item that does not move;
 * - the blocks say what the --json report holds beyond them, read the same on every run, and count
 *   the elements that look different, the changes not final in v20 and the work per package;
 * - no text an integrator reads cites a ticket, a pull request, a BC code or a branch.
 */
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { after, describe, it } from 'node:test';
import { run } from '../src/cli.mjs';
import { transformSource } from '../src/transform.mjs';

const read = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url), 'utf8'));
const mapping = read('../mappings/v19-to-v20.json');
const tokenMapping = read('../mappings/tokens-v19-to-v20.json');
const choices = read('../configurator/choices.json');
const PACKAGE_19 = '{ "name": "app", "dependencies": { "@ovhcloud/ods-react": "^19.2.0", "react": "^18.2.0" } }\n';
const temps = [];
after(() => temps.forEach((dir) => rmSync(dir, { force: true, recursive: true })));

function temp() {
  const dir = mkdtempSync(join(tmpdir(), 'ods-migrate-plain-'));
  temps.push(dir);
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

/* Every text of the mappings and of the configurator that ends up in front of an integrator. */
function integratorTexts() {
  const texts = [];
  const walk = (value, key) => {
    if (typeof value === 'string') {
      if (['hint', 'note', 'detail', 'description', 'effect', 'renderingNote', 'title', 'component'].includes(key)) texts.push(value);
    } else if (value && typeof value === 'object') {
      Object.entries(value).forEach(([child, item]) => walk(item, Array.isArray(value) ? key : child));
    }
  };
  walk(mapping);
  walk(tokenMapping.tokens);
  walk(tokenMapping.scss);
  walk(tokenMapping.mixins);
  walk(choices);
  return [...texts, ...Object.values(tokenMapping.hints)];
}

describe('plain words: help and texts', () => {
  it('names --built-on-ods in the help, and none of the former names nor internal words', async () => {
    let stdout = '';
    await run(['--help'], { stdout: (text) => { stdout += text; } });
    assert.match(stdout, /--built-on-ods <package>/);
    assert.doesNotMatch(stdout, /--treat-as-ods|--also|barrel|re-export|\bscope\b|mapping|pending|\bsites?\b|\btruth\b|BC-\d/i);
    assert.match(stdout, /ods-migrate \. +dry run/);
  });

  it('cites no ticket, pull request, BC code or branch in a text an integrator reads', () => {
    for (const text of integratorTexts()) {
      assert.doesNotMatch(text, /\bBC-\d+|(?<![\w&])#1\d{3}(?![\da-f])|\bODS-\d+|\bpr\/\d+|stack\/remove-color|v20 ref\b|re-?export|barrel/, text);
    }
  });

  it('names the constant of a key marker as the code now reads it and as v19 wrote it, with what to do in each case', () => {
    const { output } = transformSource("import { BADGE_COLOR } from '@ovhcloud/ods-react';\nexport const props = { color: BADGE_COLOR.information, label: 'x' };\n", mapping, 'a.ts');
    assert.match(output, /TODO\(ods-v20\): color: holds BADGE_STATUS\.information \(BADGE_COLOR\.information in v19\), the status of an ODS Badge\. Passed to an ODS Badge with \{\.\.\.obj\}\? Rename the key to status: TypeScript does not flag it there\. Read as obj\.color\? Keep it and delete this comment \*\/ color: BADGE_STATUS\.information/);
  });

  it('gives the v19 and v20 z-index values in a stacking marker, and marks no value below or above every ODS overlay', () => {
    const source = (value) => `import { Tooltip } from '@ovhcloud/ods-react';\nexport const A = () => <Tooltip positionerStyle={{ zIndex: ${value} }} />;\n`;
    const marked = transformSource(source(250), mapping, 'a.tsx');
    assert.match(marked.todos[0].message, /check this stacking: ODS overlays get new z-index values in v20 \(v19: dropdowns 99, modal 100, drawer 101; v20: sticky 100, dropdowns 200, drawer 300, modal 400\)/);
    for (const value of [10, 98, 1601, 9999, 100000]) {
      assert.deepEqual(transformSource(source(value), mapping, 'a.tsx').todos, [], String(value));
    }
  });

  it('tells a test mock which prop to read, and says nothing of a prop that does not change', () => {
    const source = "import { vi } from 'vitest';\nvi.mock('@ovhcloud/ods-react', () => ({\n  Badge: ({ color }) => <span data-color={ color } />,\n  Input: ({ type }) => <input type={ type } />,\n}));\n";
    const { notes } = transformSource(source, mapping, 'a.test.tsx');
    assert.deepEqual(notes.map(({ message }) => message), ['your test mock of Badge reads its color prop: ODS v20 passes status instead: read status in the mock, and update the assertions that use it']);
  });

  it('says how to fix a namespace import, in the line itself', () => {
    const { notes } = transformSource("import * as Ods from '@ovhcloud/ods-react';\nexport const A = () => <Ods.Badge color=\"primary\" />;\n", mapping, 'a.tsx');
    assert.match(notes[0].message, /^import \* as Ods from '@ovhcloud\/ods-react': ods-migrate does not follow names read as Ods\.Button\. Switch to named imports \(import \{ Button \} from '@ovhcloud\/ods-react'\) and run ods-migrate again$/);
  });
});

describe('plain words: the report', () => {
  const tree = () => ({
    'package.json': PACKAGE_19,
    'src/a.css': '.a { color: var(--ods-color-text-muted, #6b7280); border: 1px solid var(--ods-color-primary-300); }\n.b { color: var(--ods-color-text-secondary, #6b7280); }\n',
    'src/App.tsx': [
      "import { Badge, Button, Card, Switch } from '@ovhcloud/ods-react';",
      '',
      'export const App = ({ rest }) => (',
      '  <>',
      '    <Button>Save</Button>',
      '    <Card>x</Card>',
      '    <Badge { ...rest } />',
      '    <Switch />',
      '  </>',
      ');',
      '',
    ].join('\n'),
  });

  it('groups the points to check by kind, counts the names ODS never declared apart, and leaves them alone', async () => {
    const dir = project(tree());
    const { report, stdout } = await migrate(dir, ['--write']);
    assert.match(stdout, /Points to check \(\?\), by kind \(each one is listed above with its file and line\):\n {2}1 {2}colours and styles that may look different: compare the screen with v19 \(step 9 of MIGRATION\.md\)\. Listed only by the run that makes the change: keep this report\n {2}1 {2}objects passed with \{\.\.\.\} to an ODS component: rename the keys the line names\n {2}1 {2}package\.json and tooling: see step 4 of MIGRATION\.md\n/);
    assert.match(stdout, /--ods-\* names that ODS v19 never declared \(2 uses of 2 names\): they give their fallback value, or nothing, in v19 as in v20\. Not part of the migration: nothing to do/);
    assert.deepEqual(report.notOds.map(({ name, uses }) => [name, uses]), [['--ods-color-text-muted', 1], ['--ods-color-text-secondary', 1]]);
    // The third point is the reminder to bump @ovhcloud/ods-react of the package.json.
    assert.equal(report.summary.toCheck, 3);
    assert.equal(report.summary.notOds, 2);
    assert.deepEqual(report.summary.toCheckByKind, { look: 1, package: 1, spread: 1 });
    // Both names are left alone, their fallback with them.
    assert.match(readFileSync(join(dir, 'src/a.css'), 'utf8'), /var\(--ods-color-text-muted, #6b7280\)[^]*var\(--ods-color-text-secondary, #6b7280\)/);
    assert.match(stdout, /, 3 points to check, 0 values for your type check, 0 errors\.$/m);
  });

  it('counts the elements that look different, unless the config keeps their v19 look', async () => {
    const dir = project(tree());
    const { report, stdout } = await migrate(dir);
    assert.match(stdout, /Elements that look different in v20 with no change in your code[^\n]*\n {2}1 element in 1 file: <Button> without variant or emphasis: [^\n]*\n {2}1 element in 1 file: <Card> without color or status: /);
    assert.deepEqual(report.looks.map(({ component, elements }) => [component, elements]), [['Button', 1], ['Card', 1]]);
    writeFileSync(join(dir, 'ods-migrate.config.json'), JSON.stringify({ look: { 'button-default-emphasis': 'v19' } }));
    assert.deepEqual((await migrate(dir)).report.looks.map(({ component }) => component), ['Card']);
  });

  it('applies the changes of the component API by default: none is left out', async () => {
    const dir = project(tree());
    const { report } = await migrate(dir, ['--write']);
    assert.deepEqual(report.notFinal.filter(({ name }) => /^[A-Z]/.test(name)), []);
    assert.match(readFileSync(join(dir, 'src/App.tsx'), 'utf8'), /\{\/\* TODO\(ods-v20\): <Switch> has no v20 equivalent: /);
  });

  it('counts the files a change left out of this version concerns, does not apply it, and says to migrate them by hand', async () => {
    // The mechanism stays for a later change: a pending entry of the token mapping drives it here.
    const pending = Object.entries(tokenMapping.tokens).find(([, entry]) => entry.pending);
    if (!pending) {
      return;
    }
    const dir = project({ ...tree(), 'src/b.css': `.b { ${pending[0]}: red; }\n` });
    const { report, stdout } = await migrate(dir, ['--write']);
    assert.match(stdout, /Not migrated by this version of ods-migrate \(their v20 change was not settled when it was built\): migrate these by hand, as the v20 migration guide says:\n {2}[^\n]+: 1 file concerned\n/);
    assert.doesNotMatch(stdout, /keep working as in v19/);
    assert.equal(report.notFinal.length, 1);
    assert.match(readFileSync(join(dir, 'src/b.css'), 'utf8'), new RegExp(pending[0]));
  });

  it('writes the JSON report with the words of the text, and an id per item that does not move between runs', async () => {
    const dir = project(tree());
    const first = await migrate(dir);
    const second = await migrate(dir);
    assert.equal(first.report.version, 3);
    const app = first.report.files.find(({ file }) => file === 'src/App.tsx');
    assert.equal(app.package, '.');
    assert.equal(app.toCheck[0].kind, 'spread');
    assert.match(app.toCheck[0].id, /^[0-9a-f]{10}$/);
    const ids = (report) => report.files.flatMap((file) => [...file.markers, ...file.toCheck]).map(({ id }) => id);
    assert.deepEqual(ids(second.report), ids(first.report));
  });

  it('gives the work per package when there are several', async () => {
    const dir = project({
      'apps/a/package.json': PACKAGE_19,
      'apps/a/src/A.tsx': "import { BUTTON_COLOR } from '@ovhcloud/ods-react';\nexport const c = [BUTTON_COLOR.success];\n",
      'apps/b/package.json': PACKAGE_19,
      'apps/b/src/b.css': '.b { color: var(--ods-theme-text-color); }\n',
    });
    const { report, stdout } = await migrate(dir);
    // apps/a: the read of BUTTON_COLOR.success and its import line, which keeps the v19 name; each package.json gets its bump reminder.
    assert.match(stdout, /By package: files changed, TODO\(ods-v20\) markers added, points to check, values for your type check:\n {2}apps\/a {6}1 {5}2 {5}1 {5}0\n {2}apps\/b {6}1 {5}0 {5}1 {5}0\n/);
    assert.deepEqual(report.byPackage.map(({ package: name, markersAdded }) => [name, markersAdded]), [['apps/a', 2], ['apps/b', 0]]);
  });

  it('says the same thing about a component with props of its own before and after its code is migrated', async () => {
    const dir = project({
      'package.json': PACKAGE_19,
      'src/StatusBadge.tsx': "import { Badge, type BadgeProp } from '@ovhcloud/ods-react';\n\ntype Props = Omit<BadgeProp, 'color'> & { state: string };\n\nexport const StatusBadge = ({ state, ...rest }: Props) => <Badge color=\"neutral\" { ...rest }>{ state }</Badge>;\n",
      'src/App.tsx': "import { StatusBadge } from './StatusBadge';\n\nexport const App = () => <StatusBadge state=\"on\" />;\n",
    });
    const line = (stdout) => stdout.split('\n').find((text) => text.includes('StatusBadge is built on'));
    const before = line((await migrate(dir, ['--write'])).stdout);
    assert.equal(before, '  src/StatusBadge.tsx: StatusBadge is built on the ODS Badge but has its own color prop. Nothing to do unless the 1 file that uses it passes color to it; if it does, choose: keep color on StatusBadge, or rename it status like the ODS Badge.');
    assert.equal(line((await migrate(dir)).stdout), before);
  });

  it('says that the v19-look stylesheet is up to date, and the modules file what it is for', async () => {
    const dir = project({
      'ods-migrate.config.json': JSON.stringify({ look: { 'button-radius': 'v19' } }),
      'package.json': PACKAGE_19,
      'src/ods.ts': "export * from '@ovhcloud/ods-react';\n",
      'src/App.tsx': "import { BADGE_COLOR } from './ods';\nexport const c = BADGE_COLOR.primary;\n",
    });
    const wet = await migrate(dir, ['--write']);
    assert.match(wet.stdout, /^v19-look stylesheet written: ods-v19-look\.css\. Import it once, after the ODS theme, outside any CSS @layer\.$/m);
    assert.match(wet.stdout, /^Wrote ods-migrate\.modules\.json: the list of your modules that give access to ODS, read by the ODS ESLint rules\. Commit it if you use those rules; delete it otherwise\.$/m);
    const dry = await migrate(dir);
    assert.match(dry.stdout, /^v19-look stylesheet ods-v19-look\.css: up to date\.$/m);
    assert.match(dry.stdout, /src\/ods\.ts passes ODS components on: the 1 file that imports it is handled like files that import @ovhcloud\/ods-react\./);
  });

  it('leaves the @types/react overrides to a pnpm-workspace.yaml that declares overrides', async () => {
    const dir = project({
      'package.json': '{ "name": "root", "private": true, "dependencies": { "@ovhcloud/ods-react": "^19.2.0", "react": "^19.0.0" } }\n',
      'pnpm-lock.yaml': '',
      'pnpm-workspace.yaml': "packages:\n  - 'apps/*'\noverrides:\n  '@types/react': ^19\n  lodash: 4.17.21\n",
    });
    const { report } = await migrate(dir, ['--write']);
    assert.equal(report.manifest[0].changes.length, 0);
    assert.match(report.manifest[0].toCheck[0].message, /your pnpm-workspace\.yaml declares overrides: add "@types\/react-dom": "\^19" there/);
  });
});
