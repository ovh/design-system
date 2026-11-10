import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { after, describe, it } from 'node:test';
import { Lang, parse } from '@ast-grep/napi';
import parser from '@typescript-eslint/parser';
import { Linter } from 'eslint';
import { run as cli } from '../src/cli.mjs';
import { createPlugin } from '../src/eslint-plugin.mjs';
import { guideEntry } from '../src/guide.mjs';
import { stripScriptMarkers } from '../src/shared.mjs';
import { transformSource } from '../src/transform.mjs';

/*
 * The Switch removed in v20 becomes Tabs `variant="switch"` (the default replacement):
 * `<Switch>` → `<Tabs variant="switch">`, a `<TabList>` around its items, each `<SwitchItem>` a `<Tab>`.
 * Any other shape keeps its marker. Each case checks that a second run changes nothing, that no parse
 * error is added, and that the lint rule's --fix gives the codemod output without its markers.
 */

const PKG = '@ovhcloud/ods-react';
const mapping = JSON.parse(readFileSync(new URL('../mappings/v19-to-v20.json', import.meta.url), 'utf8'));
const errors = (source, filename) => parse(/\.(c|m)?ts$/.test(filename) ? Lang.TypeScript : Lang.Tsx, source).root().findAll({ rule: { kind: 'ERROR' } }).length;
const temps = [];
after(() => temps.forEach((dir) => rmSync(dir, { force: true, recursive: true })));

function lint(source, filename, { cwd, fix = true } = {}) {
  const linter = new Linter({ configType: 'flat', ...(cwd ? { cwd } : {}) });
  const config = [{
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: { parser, parserOptions: { ecmaFeatures: { jsx: !/\.(c|m)?ts$/.test(filename) } } },
    plugins: { ods: createPlugin({ mapping }) },
    rules: { 'ods/v20-migration': ['error', cwd ? {} : { modules: false }] },
  }];
  const path = cwd ? join(cwd, filename) : filename;
  return fix ? linter.verifyAndFix(source, config, path) : { messages: linter.verify(source, config, path) };
}

/** Runs the codemod: a second run changes nothing, no parse error is added. */
function run(source, filename = 'file.tsx', options = {}) {
  const result = transformSource(source, mapping, filename, options);
  assert.equal(transformSource(result.output, mapping, filename, options).output, result.output, 'a second run changes nothing');
  assert.equal(errors(result.output, filename), errors(source, filename), 'no parse error added');
  return result;
}

/** The lint rule fixes the input as the codemod does, has nothing left to fix on its output, and reports each marker. */
function assertParity(source, output, filename = 'file.tsx', cwd) {
  assert.equal(lint(source, filename, { cwd }).output, stripScriptMarkers(output), '--fix gives the codemod output without its markers');
  const { messages } = lint(output, filename, { cwd, fix: false });
  assert.deepEqual(messages.filter((message) => message.fatal || message.fix).map((message) => `${message.line}: ${message.message}`), [], 'the output parses and has nothing left to fix');
  const markerLines = output.split('\n').map((text, index) => (text.includes('TODO(ods-v20)') ? index + 1 : null)).filter(Boolean);
  const reported = new Set(messages.map((message) => message.line));
  for (const lineNumber of markerLines) {
    assert.ok(reported.has(lineNumber) || reported.has(lineNumber + 1), `a report for the marker at line ${lineNumber}`);
  }
}

async function migrateProject(tree) {
  const dir = mkdtempSync(join(tmpdir(), 'ods-migrate-switch-'));
  temps.push(dir);
  for (const [path, text] of Object.entries(tree)) {
    mkdirSync(dirname(join(dir, path)), { recursive: true });
    writeFileSync(join(dir, path), text);
  }
  let stderr = '';
  const code = await cli(['.', '--write'], { cwd: dir, stderr: (text) => { stderr += text; }, stdout: () => {} });
  assert.equal(code, 0, stderr);
  return dir;
}

const NO_SELECTION = /Tabs selects no tab and warns in the console without value or defaultValue: set defaultValue/;

describe('Switch → Tabs variant="switch"', () => {
  it('rewrites the plain case: the element, a TabList around the items, each item a Tab, and the imports', () => {
    const source = `import { Switch, SwitchItem } from '${PKG}';

export const A = () => (
  <Switch aria-label="x" defaultValue="a">
    <SwitchItem value="a">A</SwitchItem>
    <SwitchItem value="b">B</SwitchItem>
  </Switch>
);
`;
    const { notes, output, todos } = run(source);
    assert.equal(output, `import { Tabs, TabList, Tab } from '${PKG}';

export const A = () => (
  <Tabs aria-label="x" defaultValue="a" variant="switch">
    <TabList>
      <Tab value="a">A</Tab>
      <Tab value="b">B</Tab>
    </TabList>
  </Tabs>
);
`);
    assert.deepEqual(todos, []);
    assert.deepEqual(notes, []);
    assertParity(source, output);
  });

  it('keeps a controlled value and onValueChange (same { value } argument), and the other imports', () => {
    const source = `import { Button, Switch, SwitchItem } from '${PKG}';
import { useState } from 'react';

export const A = () => {
  const [v, setV] = useState('a');
  return (
    <div>
      <Switch value={ v } onValueChange={ ({ value }) => setV(value) }>
        <SwitchItem value="a">A</SwitchItem>
        <SwitchItem value="b">B</SwitchItem>
      </Switch>
      <Button>ok</Button>
    </div>
  );
};
`;
    const { notes, output, todos } = run(source);
    assert.match(output, new RegExp(`^import \\{ Button, Tabs, TabList, Tab \\} from '${PKG}';$`, 'm'));
    assert.match(output, /<Tabs value=\{ v \} onValueChange=\{ \(\{ value \}\) => setV\(value\) \} variant="switch">\n {8}<TabList>\n {10}<Tab value="a">A<\/Tab>\n {10}<Tab value="b">B<\/Tab>\n {8}<\/TabList>\n {6}<\/Tabs>/);
    assert.deepEqual(todos, []);
    assert.deepEqual(notes, []);
    assertParity(source, output);
  });

  it('keeps size: a literal as it is, SWITCH_SIZE.x as the literal it stood for (the same in both engines)', () => {
    const source = `import { SWITCH_SIZE, Switch, SwitchItem } from '${PKG}';

export const A = () => (
  <>
    <Switch size="sm" defaultValue="a">
      <SwitchItem value="a">A</SwitchItem>
    </Switch>
    <Switch
      defaultValue="a"
      size={ SWITCH_SIZE.md }>
      <SwitchItem value="a">A</SwitchItem>
    </Switch>
  </>
);
`;
    const { output, todos } = run(source);
    assert.equal(output, `import { Tabs, TabList, Tab } from '${PKG}';

export const A = () => (
  <>
    <Tabs size="sm" defaultValue="a" variant="switch">
      <TabList>
        <Tab value="a">A</Tab>
      </TabList>
    </Tabs>
    <Tabs
      defaultValue="a"
      size={ 'md' }
      variant="switch">
      <TabList>
        <Tab value="a">A</Tab>
      </TabList>
    </Tabs>
  </>
);
`);
    assert.deepEqual(todos, []);
    assertParity(source, output);
  });

  it('does not invent a selection: a Switch without value nor defaultValue gets a point to check', () => {
    const source = `import { Switch, SwitchItem } from '${PKG}';

export const A = () => (
  <Switch aria-label="x">
    <SwitchItem value="a">A</SwitchItem>
  </Switch>
);
`;
    const { notes, output, todos } = run(source);
    assert.match(output, /<Tabs aria-label="x" variant="switch">/);
    assert.doesNotMatch(output, /defaultValue/);
    assert.deepEqual(todos, []);
    assert.equal(notes.length, 1);
    assert.equal(notes[0].line, 4);
    assert.match(notes[0].message, NO_SELECTION);
    assertParity(source, output);
  });

  it('wraps items that are mapped, conditional or in a fragment: TabList takes any children', () => {
    const source = `import { Switch, SwitchItem } from '${PKG}';

export const A = ({ items, c }: { items: string[], c: boolean }) => (
  <Switch defaultValue={ items[0] }>
    { items.map((i) => <SwitchItem key={ i } value={ i }>{ i }</SwitchItem>) }
    { c && <SwitchItem value="z">Z</SwitchItem> }
    <>
      <Switch.Item value="y">Y</Switch.Item>
    </>
  </Switch>
);
`;
    const { output, todos } = run(source);
    assert.equal(output, `import { Tabs, TabList, Tab } from '${PKG}';

export const A = ({ items, c }: { items: string[], c: boolean }) => (
  <Tabs defaultValue={ items[0] } variant="switch">
    <TabList>
      { items.map((i) => <Tab key={ i } value={ i }>{ i }</Tab>) }
      { c && <Tab value="z">Z</Tab> }
      <>
        <Tab value="y">Y</Tab>
      </>
    </TabList>
  </Tabs>
);
`);
    assert.deepEqual(todos, []);
    assertParity(source, output);
  });

  it('wraps items written on the line of the Switch without re-indenting', () => {
    const source = `import { Switch, SwitchItem } from '${PKG}';\n\nexport const A = () => <Switch defaultValue="a"><SwitchItem value="a">A</SwitchItem></Switch>;\n`;
    const { output } = run(source);
    assert.equal(output, `import { Tabs, TabList, Tab } from '${PKG}';\n\nexport const A = () => <Tabs defaultValue="a" variant="switch"><TabList><Tab value="a">A</Tab></TabList></Tabs>;\n`);
    assertParity(source, output);
  });

  it('moves disabled to each Tab (Tabs has none); an item with its own disabled keeps the marker', () => {
    const source = `import { Switch, SwitchItem } from '${PKG}';

export const A = ({ off }: { off: boolean }) => (
  <>
    <Switch disabled={ off } value="a">
      <SwitchItem value="a">A</SwitchItem>
      <SwitchItem value="b">B</SwitchItem>
    </Switch>
    <Switch disabled value="a">
      <SwitchItem value="a">A</SwitchItem>
      <SwitchItem value="b" disabled>B</SwitchItem>
    </Switch>
  </>
);
`;
    const { output, todos } = run(source);
    assert.match(output, /<Tabs value="a" variant="switch">\n {6}<TabList>\n {8}<Tab value="a" disabled=\{ off \}>A<\/Tab>\n {8}<Tab value="b" disabled=\{ off \}>B<\/Tab>/);
    assert.match(output, /\{\/\* TODO\(ods-v20\): <Switch> has no v20 equivalent: ods-migrate rewrites [^\n]*\*\/\}\n {4}<Switch disabled value="a">/);
    assert.equal(todos.length, 2, 'the import, still read, and the Switch it could not rewrite');
    assertParity(source, output);
  });

  it('keeps a spread (Tabs takes the same keys), with a point to check about disabled', () => {
    const source = `import { Switch, SwitchItem, type SwitchProp } from '${PKG}';

export const A = (props: SwitchProp) => (
  <Switch { ...props }>
    <SwitchItem value="a">A</SwitchItem>
  </Switch>
);
`;
    const { notes, output, todos } = run(source);
    assert.match(output, new RegExp(`^import \\{ type TabsProp, Tabs, TabList, Tab \\} from '${PKG}';$`, 'm'));
    assert.match(output, /\(props: TabsProp\) => \(\n {2}<Tabs \{ \.\.\.props \} variant="switch">/);
    assert.deepEqual(todos, []);
    assert.deepEqual(notes.map((item) => item.message), ['<Switch> → <Tabs>: if the object passed here with {...} holds disabled, set it on each <Tab> instead: <Tabs> does not take it']);
    assertParity(source, output);
  });

  it('keeps the marker where it cannot see the items: no children written out, children passed on, a Switch in a Switch', () => {
    const source = `import { Switch, SwitchItem } from '${PKG}';

export const A = ({ children }) => (
  <>
    <Switch />
    <Switch value="a">{ children }</Switch>
    <Switch value="a">
      <Switch value="b">
        <SwitchItem value="b">B</SwitchItem>
      </Switch>
    </Switch>
  </>
);
`;
    const { output, todos } = run(source);
    assert.doesNotMatch(stripScriptMarkers(output), /Tabs/);
    assert.equal(todos.length, 4, 'the import and the three outermost Switch');
    assertParity(source, output);
  });

  it('keeps the marker when a name of the file already holds Tabs, TabList or Tab', () => {
    const source = `import { Switch, SwitchItem } from '${PKG}';

const Tab = () => null;
export const A = () => (
  <Switch value="a">
    <SwitchItem value="a">A</SwitchItem>
  </Switch>
);
`;
    const { output, todos } = run(source);
    assert.doesNotMatch(stripScriptMarkers(output), /Tabs/);
    assert.equal(todos.length, 2);
    assertParity(source, output);
  });

  it('uses the local names of parts already imported, aliases included', () => {
    const source = `import { Switch, SwitchItem, Tabs as OdsTabs } from '${PKG}';

export const A = () => (
  <>
    <OdsTabs defaultValue="x" />
    <Switch value="a">
      <SwitchItem value="a">A</SwitchItem>
    </Switch>
  </>
);
`;
    const { output } = run(source);
    assert.match(output, new RegExp(`^import \\{ Tabs as OdsTabs, TabList, Tab \\} from '${PKG}';$`, 'm'));
    assert.match(output, /<OdsTabs value="a" variant="switch">\n {6}<TabList>\n {8}<Tab value="a">A<\/Tab>/);
    assertParity(source, output);
  });

  it('renames the types: SwitchProp, SwitchItemProp, SwitchValueChangeDetail, SwitchSize', () => {
    const source = `import type { SwitchItemProp, SwitchProp, SwitchSize, SwitchValueChangeDetail } from '${PKG}';

export type P = SwitchProp & { size?: SwitchSize, onChange: (detail: SwitchValueChangeDetail) => void };
export const item: SwitchItemProp = { value: 'a' };
`;
    const { output, todos } = run(source, 'types.ts');
    assert.equal(output, `import type { TabProp, TabsProp, TabsSize, TabsValueChangeEvent } from '${PKG}';

export type P = TabsProp & { size?: TabsSize, onChange: (detail: TabsValueChangeEvent) => void };
export const item: TabProp = { value: 'a' };
`);
    assert.deepEqual(todos, []);
    assertParity(source, output, 'types.ts');
  });

  it('leaves the /switch entry point marked: Tabs comes from another entry point', () => {
    const source = `import { Switch, SwitchItem } from '${PKG}/switch';

export const A = () => (
  <Switch value="a">
    <SwitchItem value="a">A</SwitchItem>
  </Switch>
);
`;
    const { output } = run(source);
    assert.doesNotMatch(stripScriptMarkers(output), /Tabs/);
    assert.match(output, new RegExp(`TODO\\(ods-v20\\): ${PKG}/switch: the Switch is removed with its entry point`));
    assertParity(source, output);
  });

  it('prints the guide entry from the codemod output', () => {
    const entry = guideEntry('Switch');
    assert.match(entry, /`<Switch>` becomes `<Tabs variant="switch">`, with a `<TabList>` around its items; `<SwitchItem>` becomes `<Tab>`/);
    assert.match(entry, /\*\*after\*\*\n```tsx\nimport \{ Tabs, TabList, Tab \} from '@ovhcloud\/ods-react';\n\n<Tabs aria-label="View" size=\{ 'sm' \} defaultValue="list" variant="switch">\n {2}<TabList>/);
  });
});

describe('Switch → Tabs in a project', () => {
  it('drops Switch from a local barrel that re-exports ODS and imports the parts from the package', async () => {
    const app = `import { Switch, SwitchItem } from './kit';

export const A = () => (
  <Switch defaultValue="a">
    <SwitchItem value="a">A</SwitchItem>
  </Switch>
);
`;
    const dir = await migrateProject({
      'package.json': JSON.stringify({ dependencies: { [PKG]: '19.7.3' }, name: 'app' }),
      'src/app.tsx': app,
      'src/kit/index.ts': `export { Switch, SwitchItem } from '${PKG}';\n`,
    });
    const output = readFileSync(join(dir, 'src/app.tsx'), 'utf8');
    assert.equal(output, `import { Tabs, TabList, Tab } from '${PKG}';

export const A = () => (
  <Tabs defaultValue="a" variant="switch">
    <TabList>
      <Tab value="a">A</Tab>
    </TabList>
  </Tabs>
);
`);
    // The kit's re-export of the removed names is marked, not guessed.
    assert.match(readFileSync(join(dir, 'src/kit/index.ts'), 'utf8'), /TODO\(ods-v20\): Switch has no v20 equivalent/);
    assert.equal(lint(app, 'src/app.tsx', { cwd: dir }).output, output);
  });

  it('imports the parts from a barrel that re-exports the whole package', async () => {
    const app = `import { Button, Switch, SwitchItem } from './kit';

export const A = () => (
  <Switch defaultValue="a">
    <SwitchItem value="a"><Button>A</Button></SwitchItem>
  </Switch>
);
`;
    const dir = await migrateProject({
      'package.json': JSON.stringify({ dependencies: { [PKG]: '19.7.3' }, name: 'app' }),
      'src/app.tsx': app,
      'src/kit/index.ts': `export * from '${PKG}';\n`,
    });
    const output = readFileSync(join(dir, 'src/app.tsx'), 'utf8');
    assert.match(output, /^import \{ Button, Tabs, TabList, Tab \} from '\.\/kit';$/m);
    assert.match(output, /<Tab value="a"><Button>A<\/Button><\/Tab>/);
    assert.equal(lint(app, 'src/app.tsx', { cwd: dir }).output, output);
  });

  it('leaves a Switch rendered through a wrapper of the app marked', async () => {
    const app = `import { MySwitch } from './MySwitch';
import { SwitchItem } from '${PKG}';

export const A = () => (
  <MySwitch value="a">
    <SwitchItem value="a">A</SwitchItem>
  </MySwitch>
);
`;
    const dir = await migrateProject({
      'package.json': JSON.stringify({ dependencies: { [PKG]: '19.7.3' }, name: 'app' }),
      'src/MySwitch.tsx': `import { Switch, type SwitchProp } from '${PKG}';\n\nexport const MySwitch = (props: SwitchProp) => <Switch { ...props } />;\n`,
      'src/app.tsx': app,
    });
    const output = readFileSync(join(dir, 'src/app.tsx'), 'utf8');
    assert.doesNotMatch(stripScriptMarkers(output), /Tabs|TabList/);
    assert.match(output, /TODO\(ods-v20\): <SwitchItem> has no v20 equivalent/);
    assert.equal(lint(app, 'src/app.tsx', { cwd: dir }).output, stripScriptMarkers(output));
    // The wrapper itself: its props type is renamed, its childless <Switch> stays marked.
    const wrapper = readFileSync(join(dir, 'src/MySwitch.tsx'), 'utf8');
    assert.match(wrapper, /props: TabsProp/);
    assert.match(wrapper, /TODO\(ods-v20\): <Switch> has no v20 equivalent/);
  });
});
