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
import { stripScriptMarkers } from '../src/shared.mjs';
import { transformSource } from '../src/transform.mjs';

/*
 * The component JS / TS API against ODS master: the shapes an audit found missed or broken (removed
 * exports in JSX member tags and import lines, Button statuses without equivalent, wrappers, subpath
 * and CommonJS imports, compound statics, typed objects). Each case runs on the real mapping, checks
 * that a second run changes nothing and that no parse error is added, and that the lint rule agrees.
 */

const PKG = '@ovhcloud/ods-react';
const mapping = JSON.parse(readFileSync(new URL('../mappings/v19-to-v20.json', import.meta.url), 'utf8'));
const errors = (source, filename) => parse(/\.(c|m)?ts$/.test(filename) ? Lang.TypeScript : Lang.Tsx, source).root().findAll({ rule: { kind: 'ERROR' } }).length;
const linter = new Linter({ configType: 'flat' });

const temps = [];
after(() => temps.forEach((dir) => rmSync(dir, { force: true, recursive: true })));

/** A small project on disk, migrated with --write; returns its folder. */
async function migrateProject(tree, args = []) {
  const dir = mkdtempSync(join(tmpdir(), 'ods-migrate-lot-b-'));
  temps.push(dir);
  for (const [path, text] of Object.entries(tree)) {
    mkdirSync(dirname(join(dir, path)), { recursive: true });
    writeFileSync(join(dir, path), text);
  }
  let stderr = '';
  const code = await cli(['.', '--write', ...args], { cwd: dir, stderr: (text) => { stderr += text; }, stdout: () => {} });
  assert.equal(code, 0, stderr);
  return dir;
}

function lint(source, filename, { cwd, fix = true, options = {} } = {}) {
  const linter = new Linter({ configType: 'flat', ...(cwd ? { cwd } : {}) });
  const config = [{
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: { parser, parserOptions: { ecmaFeatures: { jsx: !/\.(c|m)?ts$/.test(filename) } } },
    plugins: { ods: createPlugin({ mapping }) },
    rules: { 'ods/v20-migration': ['error', { ...(cwd ? {} : { modules: false }), ...options }] },
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

/** The lint rule fixes the input as the codemod does, and reports each marker of the codemod output once. */
function assertParity(source, output, filename = 'file.tsx', { config } = {}) {
  assert.equal(lint(source, filename, { options: config }).output, stripScriptMarkers(output), '--fix gives the codemod output without its markers');
  const { messages } = lint(output, filename, { fix: false, options: config });
  assert.deepEqual(messages.filter((message) => message.fatal || message.fix).map((message) => `${message.line}: ${message.message}`), [], 'the output parses and has nothing left to fix');
  const markerLines = output.split('\n').map((text, index) => (text.includes('TODO(ods-v20)') ? index + 1 : null)).filter(Boolean);
  const reported = new Set(messages.map((message) => message.line));
  for (const lineNumber of markerLines) {
    assert.ok(reported.has(lineNumber) || reported.has(lineNumber + 1), `a report for the marker at line ${lineNumber}`);
  }
}

describe('removed compound parts in JSX (A4-02)', () => {
  it('marks <Switch.Item> on its element, never inside its tag, and once inside a marked <Switch>', () => {
    const source = `import { Switch } from '${PKG}';

export const A = () => (
  <div>
    <Switch>
      <Switch.Item value="b">B</Switch.Item>
    </Switch>
    <Switch.Item value="c">C</Switch.Item>
  </div>
);
export const B = () => <Switch.Item value="e" />;
`;
    const { output, todos } = run(source);
    assert.doesNotMatch(output, /<\/?\/\*/);
    assert.equal(todos.length, 4, 'the import, <Switch>, and the two <Switch.Item> outside it');
    assert.match(output, /\{\/\* TODO\(ods-v20\): <Switch\.Item> has no v20 equivalent: [^\n]*\*\/\}\n {4}<Switch\.Item value="c">/);
    assert.match(output, /=> \/\* TODO\(ods-v20\): <Switch\.Item> has no v20 equivalent: [^\n]*\*\/ <Switch\.Item value="e" \/>/);
    assertParity(source, output);
  });
});

describe('parts a rewrite adds, through a barrel (A4-03)', () => {
  it('imports from the package the parts the barrel does not export, and from the barrel the ones it names', async () => {
    const app = `import { Pagination, Toggle } from './kit';

export const A = () => <Pagination totalItems={ 3 } withPageSizeSelector />;
export const B = () => <Toggle className="x" />;
`;
    const dir = await migrateProject({
      'package.json': JSON.stringify({ dependencies: { [PKG]: '19.7.3' }, name: 'app' }),
      'src/app.tsx': app,
      'src/kit/index.ts': `export { Pagination, PaginationPages, Toggle } from '${PKG}';\n`,
    });
    const output = readFileSync(join(dir, 'src/app.tsx'), 'utf8');
    assert.equal(output, `import { Pagination, Toggle, PaginationPages } from './kit';
import { PaginationPageSizeSelector, ToggleControl } from '${PKG}';

export const A = () => <Pagination totalItems={ 3 }>
  <PaginationPageSizeSelector />
  <PaginationPages />
</Pagination>;
export const B = () => <Toggle>
  <ToggleControl className="x" />
</Toggle>;
`);
    // The lint rule, with the modules file the run wrote, imports them the same way.
    assert.equal(lint(app, 'src/app.tsx', { cwd: dir }).output, output);
  });

  it('adds them to a value import of the package that the file already has', () => {
    const source = `import { Button } from '${PKG}';\nimport { Toggle } from './kit';\n\nexport const B = () => <><Button>b</Button><Toggle /></>;\n`;
    const sources = new Map([['./kit', { names: { Toggle: 'Toggle' }, shadow: [], star: false, typed: {}, wrappers: {} }]]);
    const { output } = transformSource(source, mapping, 'file.tsx', { sources });
    assert.match(output, new RegExp(`^import \\{ Button, ToggleControl \\} from '${PKG}';\\nimport \\{ Toggle \\} from './kit';\\n`));
  });
});

describe('removed exports in the import line (C-02, A9-02)', () => {
  it('writes the values of the removed string enums the app keeps, marks what has no literal form, and drops the import once nothing reads it', () => {
    const source = `import { MODAL_COLOR, MODAL_COLORS, type ModalColor, TABLE_VARIANT, TABLE_VARIANTS, Modal, ModalContent, Text } from '${PKG}';

export const kinds: ModalColor[] = [...MODAL_COLORS];
export const all = [TABLE_VARIANTS];
export const A = () => <Modal><ModalContent color={ MODAL_COLOR.critical }>x</ModalContent></Modal>;
export const B = () => <Text>{ TABLE_VARIANT.striped }</Text>;
export const C = Object.keys(TABLE_VARIANT);
`;
    const { output, todos } = run(source);
    assert.match(output, new RegExp(`^/\\* TODO\\(ods-v20\\): TABLE_VARIANT: removed in v20, delete it from this import once the places marked below no longer use it \\*/ import \\{ TABLE_VARIANT, Modal, ModalContent, Text \\} from '${PKG}';\\n`));
    assert.match(output, /export const kinds: \('critical' \| 'information' \| 'neutral' \| 'primary' \| 'success' \| 'warning'\)\[\] = \[\.\.\.\(\['critical', 'information', 'neutral', 'primary', 'success', 'warning'\] as const\)\];/);
    assert.match(output, /export const all = \[\(\['default', 'striped'\] as const\)\];/);
    // MODAL_COLOR is read only by the attribute rewritten to role="alertdialog".
    assert.match(output, /<ModalContent role="alertdialog">/);
    assert.match(output, /<Text>\{ 'striped' \}<\/Text>/);
    // The enum object itself has no literal form.
    assert.ok(todos.some(({ message }) => /^TABLE_VARIANT has no v20 equivalent: use the boolean `striped` prop/.test(message)));
    for (const message of todos.map((todo) => todo.message)) {
      assert.doesNotMatch(message, /has no v20 equivalent$/, `a marker without a next step: ${message}`);
    }
    assertParity(source, output);
  });

  it('gives every removed export of the mapping a hint', () => {
    for (const [name, rule] of Object.entries(mapping.exports).filter(([, rule]) => rule.removed)) {
      assert.ok(rule.hint, `${name} has no hint`);
    }
  });
});

describe('component entry points of the package (A4-08, A5-05)', () => {
  const source = `import { Button, BUTTON_COLOR, BUTTON_VARIANT } from '${PKG}/button';
import { Badge } from '${PKG}/badge';
import { Switch, SWITCH_SIZE } from '${PKG}/switch';
import { Popover } from '${PKG}/popover';
import { Pagination } from '${PKG}/pagination';
import '${PKG}/normalize-css';

export const A = () => <Button color={ BUTTON_COLOR.critical } variant={ BUTTON_VARIANT.ghost }>x</Button>;
export const B = () => <Badge color="primary" />;
export const C = () => <Switch size={ SWITCH_SIZE.sm } />;
export const D = () => <Popover position="bottom" />;
export const E = () => <Pagination totalItems={ 5 } />;
`;

  it('migrates them like the package, keeps each name on its entry point, and marks the removed /switch', () => {
    const { output } = run(source);
    assert.match(output, new RegExp(`^import \\{ Button, BUTTON_STATUS, BUTTON_EMPHASIS \\} from '${PKG}/button';$`, 'm'));
    assert.match(output, /<Button status=\{ BUTTON_STATUS\.critical \} emphasis=\{ BUTTON_EMPHASIS\.low \}>/);
    assert.match(output, /<Badge status="accent" \/>/);
    assert.match(output, /<Popover overlayConfig=\{\{ position: 'bottom' \}\} \/>/);
    // The parts of a component come from its own entry point, which exports them on master.
    assert.match(output, new RegExp(`^import \\{ Pagination, PaginationPages \\} from '${PKG}/pagination';$`, 'm'));
    assert.match(output, new RegExp(`^/\\* TODO\\(ods-v20\\): ${PKG}/switch: the Switch is removed with its entry point: use Tabs \\(\`${PKG}/tabs\`\\)`, 'm'));
    assert.match(output, new RegExp(`^import '${PKG}/normalize-css';$`, 'm'));
    assertParity(source, output);
  });

  it('is not left to --check as clean', async () => {
    let stdout = '';
    const dir = await migrateProject({ 'package.json': JSON.stringify({ dependencies: { [PKG]: '19.7.3' }, name: 'app' }), 'src/a.tsx': source }, []).catch(() => null);
    assert.ok(dir);
    const code = await cli(['.', '--check'], { cwd: dir, stderr: () => {}, stdout: (text) => { stdout += text; } });
    assert.equal(code, 1, 'markers are left');
    assert.match(stdout, /TODO\(ods-v20\) markers in the code/);
  });
});

describe('Button information / success / warning (A4-04, A9-04)', () => {
  const source = `import { Button, BUTTON_COLOR, BUTTON_VARIANT, type ButtonColor } from '${PKG}';

export const A = () => <Button color={ BUTTON_COLOR.information }>b</Button>;
export const B = () => <Button color={ BUTTON_COLOR.success } variant={ BUTTON_VARIANT.ghost }>c</Button>;
export const C = ({ ok }) => <Button color={ ok ? BUTTON_COLOR.success : BUTTON_COLOR.critical }>d</Button>;
export const D = () => <Button color="warning">e</Button>;
const c2: ButtonColor = BUTTON_COLOR.warning;
const c3 = BUTTON_COLOR.critical;
`;

  it('never writes BUTTON_STATUS.information|success|warning, which master does not have', () => {
    const { output } = run(source);
    assert.doesNotMatch(output, /BUTTON_STATUS\.(information|success|warning)/);
    assert.doesNotMatch(output, /does not exist in v20/);
  });

  it('deletes a color whose whole value has no status (brand applies), marks the element, and keeps the v19 constant where a branch is valid', () => {
    const { output } = run(source);
    assert.match(output, /^export const A = \(\) => \/\* TODO\(ods-v20\): BUTTON_COLOR\.information has no v20 equivalent: a Button shows no status in v20: pick `status` brand, neutral or critical \(brand is the default\), and show the status with a Badge or a Message next to it \*\/ <Button>b<\/Button>;$/m);
    assert.match(output, /^export const B = \(\) => \/\* TODO[^\n]*\*\/ <Button emphasis=\{ BUTTON_EMPHASIS\.low \}>c<\/Button>;$/m);
    assert.match(output, /<Button \/\* TODO[^\n]*\*\/ color=\{ ok \? BUTTON_COLOR\.success : BUTTON_STATUS\.critical \}>d/);
    assert.match(output, /^export const D = \(\) => \/\* TODO\(ods-v20\): <Button color="warning"> has no v20 equivalent[^\n]*\*\/ <Button>e<\/Button>;$/m);
    assert.match(output, /^const c2: ButtonStatus = \/\* TODO[^\n]*\*\/ BUTTON_COLOR\.warning;$/m);
    assert.match(output, /^const c3 = BUTTON_STATUS\.critical;$/m);
    assert.match(output, new RegExp(`^/\\* TODO\\(ods-v20\\): BUTTON_COLOR: removed in v20, delete it from this import once the places marked below no longer use it \\*/ import \\{ Button, BUTTON_COLOR, BUTTON_STATUS, BUTTON_EMPHASIS, type ButtonStatus \\} from '${PKG}';$`, 'm'));
    assertParity(source, output);
  });
});

describe('wrappers imported by their default export (A4-07)', () => {
  it('migrates their call sites like the named import, in the codemod and in the lint rule', async () => {
    const page = `import Banner from './components/Banner';
import Third, { Banner as B2 } from './components/Banner';

export const P = () => (
  <>
    <Banner color="primary" variant="light">x</Banner>
    <Third color="warning">y</Third>
    <B2 color="warning">z</B2>
  </>
);
`;
    const dir = await migrateProject({
      'package.json': JSON.stringify({ dependencies: { [PKG]: '19.7.3' }, name: 'app' }),
      'src/components/Banner.tsx': `import { Message, type MessageProp } from '${PKG}';\nimport type { FC, PropsWithChildren } from 'react';\n\nexport type TBannerProps = PropsWithChildren<MessageProp>;\nexport const Banner: FC<TBannerProps> = ({ children, ...props }) => <Message { ...props }>{ children }</Message>;\nexport default Banner;\n`,
      'src/page.tsx': page,
    });
    const output = readFileSync(join(dir, 'src/page.tsx'), 'utf8');
    assert.match(output, /<Banner status="accent">x<\/Banner>/);
    assert.match(output, /<Third status="warning">y<\/Third>/);
    assert.match(output, /<B2 status="warning">z<\/B2>/);
    assert.equal(lint(page, 'src/page.tsx', { cwd: dir }).output, output);
  });
});

describe('wrappers typed with the ODS props that give a prop a default (A4-06)', () => {
  it('renames the key and maps its default, drops a v20 default, marks a default with no v20 value, and migrates the call sites', async () => {
    const wrappers = `import { Button, Card, Message, type ButtonProp, type CardProp, type MessageProp } from '${PKG}';

export const W = ({ variant = 'default', color = 'primary', ...p }: ButtonProp) => <Button variant={ variant } color={ color } { ...p } />;
export const PciCard = ({ color = 'neutral', ...rest }: CardProp) => <Card color={ color } { ...rest } />;
export const M = ({ variant = 'light', color = 'warning', ...rest }: MessageProp) => <Message variant={ variant } color={ color } { ...rest } />;
export const N = ({ color = 'success', ...p }: ButtonProp) => <Button color={ color } { ...p } />;
`;
    const users = `import { W, PciCard, M } from './w';\n\nexport const U = () => <><W variant="ghost" color="critical">x</W><PciCard color="primary">c</PciCard><M variant="default">m</M></>;\n`;
    const dir = await migrateProject({ 'package.json': JSON.stringify({ dependencies: { [PKG]: '19.7.3' }, name: 'app' }), 'src/u.tsx': users, 'src/w.tsx': wrappers });
    const w = readFileSync(join(dir, 'src/w.tsx'), 'utf8');
    assert.match(w, /^export const W = \(\{ emphasis: variant = 'high', status: color, \.\.\.p \}: ButtonProp\) => <Button emphasis=\{ variant \} status=\{ color \} \{ \.\.\.p \} \/>;$/m);
    assert.match(w, /^export const PciCard = \(\{ status: color, \.\.\.rest \}: CardProp\) => <Card status=\{ color \} \{ \.\.\.rest \} \/>;$/m);
    assert.match(w, /^export const M = \(\{ emphasis: variant, status: color = 'warning', \.\.\.rest \}: MessageProp\)/m);
    assert.match(w, /^export const N = \(\{ \/\* TODO\(ods-v20\): Button color = 'success' has no v20 equivalent: [^\n]*\*\/ color = 'success', \.\.\.p \}: ButtonProp\)/m);
    assert.equal(readFileSync(join(dir, 'src/u.tsx'), 'utf8'), `import { W, PciCard, M } from './w';\n\nexport const U = () => <><W emphasis="low" status="critical">x</W><PciCard status="accent">c</PciCard><M emphasis="high">m</M></>;\n`);
    assertParity(wrappers, transformSource(wrappers, mapping, 'w.tsx').output, 'w.tsx');
  });

  it('leaves a wrapper whose own props type declares the prop to the own-prop rules', () => {
    const source = `import { Badge, type BadgeProp } from '${PKG}';\ntype Own = Omit<BadgeProp, 'color'> & { color?: 'red' };\nexport const W = ({ color = 'red', ...p }: Own) => <Badge { ...p } />;\n`;
    assert.match(run(source).output, /\(\{ color = 'red', \.\.\.p \}: Own\)/);
  });
});

describe('Omit of an ODS props type (A4-05)', () => {
  it('keeps the v19 key a wrapper may redeclare (typed never in v20), omits the v20 one too, and never collapses a removed one', () => {
    const source = `import { type BadgeProp, type ButtonProp, type SpinnerProp } from '${PKG}';

interface KitBadgeProps extends Omit<BadgeProp, 'color'> { color: 'red' | 'blue' }
type KitBtnProps = Omit<ButtonProp, 'color' | 'variant'> & { color?: 'danger'; variant?: 'pill' };
type K = { color?: 'x' };
type W = Omit<ButtonProp, 'color'> & K;
interface S extends Omit<SpinnerProp, 'color'> { color?: string }
`;
    const { output } = run(source);
    assert.match(output, /interface KitBadgeProps extends Omit<BadgeProp, 'color' \| 'status'> \{ color: 'red' \| 'blue' \}/);
    assert.match(output, /type KitBtnProps = Omit<ButtonProp, 'color' \| 'status' \| 'variant' \| 'emphasis'> &/);
    assert.match(output, /type W = Omit<ButtonProp, 'color' \| 'status'> & K;/);
    assert.match(output, /interface S extends Omit<SpinnerProp, 'color'> \{ color\?: string \}/);
    assertParity(source, output);
  });
});

describe('compound statics (A4-09)', () => {
  it('migrates <Cart.Action>, <Modal.Content>, <FileUpload.Item>… like the components they stand for', () => {
    const source = `import { Cart, Modal, FileUpload, PromptInput, Editable, QueryFilter, Tooltip, Select } from '${PKG}';

export const A = ({ f }) => (
  <>
    <Cart.Action variant="ghost" color="primary">a</Cart.Action>
    <PromptInput.SendButton variant="ghost" />
    <Editable.SubmitTrigger variant="outline" />
    <QueryFilter.Clear variant="ghost" />
    <Modal><Modal.Content color="critical">x</Modal.Content></Modal>
    <FileUpload.Item file={ f } uploadSuccessLabel="ok" />
    <Tooltip.Trigger value={ 42 } />
    <Select><Select.Control className="w-full" /></Select>
  </>
);
`;
    const { notes, output } = run(source);
    for (const expected of ['<Cart.Action emphasis="low" status="brand">a</Cart.Action>', '<PromptInput.SendButton emphasis="low" />', '<Editable.SubmitTrigger emphasis="medium" />', '<QueryFilter.Clear emphasis="low" />', '<Modal.Content role="alertdialog">x</Modal.Content>', '<FileUpload.Item file={ f } />', '<Tooltip.Trigger value="42" />']) {
      assert.ok(output.includes(expected), expected);
    }
    assert.ok(notes.some(({ message }) => message.startsWith('<SelectControl className>: the field width now lives on the root')));
    assertParity(source, output);
  });
});

describe('types of the props removed or moved in v20 (A4-11)', () => {
  it('marks indexed access, Pick and Parameters<typeof X>[0] on removed and moved props, with the v20 type to use', () => {
    const source = `import { Popover, type PopoverProp, type SelectProp, type PaginationProp, type FileUploadItemProp } from '${PKG}';

type A = PopoverProp['position'];
type F = SelectProp['fitControlWidth'];
type G = PaginationProp['renderTotalItemsLabel'];
type I = FileUploadItemProp['uploadSuccessLabel'];
type J = Pick<PopoverProp, 'position' | 'gutter'>;
type K = Omit<SelectProp, 'fitControlWidth'>;
type M = Parameters<typeof Popover>[0]['position'];
`;
    const { output, todos } = run(source);
    assert.equal(todos.length, 6);
    assert.match(output, /\/\* TODO\(ods-v20\): PopoverProp\['position'\] is removed in v20: use NonNullable<PopoverProp\['overlayConfig'\]>\['position'\] \*\/ PopoverProp\['position'\];/);
    assert.match(output, /SelectProp\['fitControlWidth'\] is removed in v20: use NonNullable<SelectProp\['overlayConfig'\]>\['sameWidth'\]/);
    assert.match(output, /Pick<PopoverProp, 'position' \| 'gutter'>: position, gutter are removed in v20: pick 'overlayConfig' instead/);
    assert.match(output, /^type K = Omit<SelectProp, 'fitControlWidth'>;$/m);
    assert.match(output, /Parameters<typeof Popover>\[0\]\['position'\] is removed in v20/);
    assertParity(source, output);
  });
});

describe('object literals typed with ODS props (A4-10) and toast options (C-04)', () => {
  const source = `import { BADGE_COLOR, TOAST_COLOR, toast, type BadgeProp, type ButtonProp, type MessageProp, type PopoverProp, type SelectProp, type ToastOption } from '${PKG}';

const o1: Partial<BadgeProp> = { color: 'primary' };
const o2 = { color: 'primary', variant: 'ghost' } satisfies Partial<ButtonProp>;
const o3 = { color: 'critical' } as ButtonProp;
const o6: Partial<MessageProp> = { variant: 'light', color: 'warning' };
const o7: Partial<PopoverProp> = { position: 'bottom', gutter: 4 };
const o8: Partial<SelectProp> = { fitControlWidth: true };
const o9: Partial<SelectProp> = { fitControlWidth: false, multiple: true };
const p: ButtonProp = { color: 'information', variant: 'outline' };
const b2: Partial<BadgeProp> = { color: BADGE_COLOR.primary };
const opts = { color: TOAST_COLOR.critical, duration: 2 };
toast('c', opts);
const typed: ToastOption = { color: TOAST_COLOR.success };
toast.neutral('d', typed);
`;

  it('renames the keys and maps the values as for the JSX attributes, moves the overlay keys into overlayConfig', () => {
    const { output } = run(source);
    for (const expected of [
      "const o1: Partial<BadgeProp> = { status: 'accent' };",
      "const o2 = { status: 'brand', emphasis: 'low' } satisfies Partial<ButtonProp>;",
      "const o3 = { status: 'critical' } as ButtonProp;",
      "const o6: Partial<MessageProp> = { emphasis: 'medium', status: 'warning' };",
      "const o7: Partial<PopoverProp> = { overlayConfig: { position: 'bottom', gutter: 4 } };",
      'const o8: Partial<SelectProp> = {};',
      'const o9: Partial<SelectProp> = { overlayConfig: { sameWidth: false }, multiple: true };',
      'const b2: Partial<BadgeProp> = { status: BADGE_STATUS.accent };',
    ]) {
      assert.ok(output.includes(expected), expected);
    }
    assert.match(output, /^const p: ButtonProp = \{ \/\* TODO\(ods-v20\): an object typed ButtonProp color: 'information' has no v20 equivalent: [^\n]*\*\/ color: 'information', emphasis: 'medium' \};$/m);
    assertParity(source, output);
  });

  it('marks the color key of toast options held in a variable or typed ToastOption, with the helper to call', () => {
    const { output } = run(source);
    assert.match(output, /^const opts = \{ \/\* TODO\(ods-v20\): color: the color option of toast\(\) is removed in v20: call the helper of the status instead, e\.g\. toast\.success\(\), then delete this key[^\n]*\*\/ color: TOAST_STATUS\.critical, duration: 2 \};$/m);
    assert.match(output, /^const typed: ToastOption = \{ \/\* TODO\(ods-v20\): color: the color option of toast\(\) is removed in v20[^\n]*\*\/ color: TOAST_STATUS\.success \};$/m);
  });
});

describe('lists built from a renamed enum whose members changed (A4-13)', () => {
  it('gives Object.values / keys / entries, for…in and a spread of it a point to check, and not a plain member read', () => {
    const source = `import { BUTTON_COLOR, BUTTON_VARIANT, MESSAGE_VARIANT } from '${PKG}';

export const all = Object.values(BUTTON_COLOR);
export const vs = Object.keys(BUTTON_VARIANT);
export const ms = [...Object.entries(MESSAGE_VARIANT)];
for (const k in MESSAGE_VARIANT) { console.log(k); }
export const one = BUTTON_VARIANT.ghost;
`;
    const { notes } = run(source);
    assert.deepEqual(notes.map(({ line }) => line), [3, 4, 5, 6]);
    assert.equal(notes[0].message, 'BUTTON_COLOR → BUTTON_STATUS read as a list: now lists 3 values (brand, critical, neutral): check what is built from this list');
  });
});

describe('require() and import() of the package (C-03)', () => {
  const source = `const { BUTTON_COLOR, BUTTON_VARIANT } = require('${PKG}');
const { Text } = require('${PKG}');
const ods = require('${PKG}');
module.exports = { c: BUTTON_COLOR.critical, v: BUTTON_VARIANT.ghost, ods, Text };
export const lazyOne = lazy(() => import('${PKG}').then((m) => ({ default: m.Switch })));
export async function f() {
  const { MESSAGE_VARIANT } = await import('${PKG}');
  return MESSAGE_VARIANT.light;
}
`;

  it('marks the ones that read changed names, with the names to change, and leaves the others', () => {
    const { output, todos } = run(source, 'file.js');
    assert.deepEqual(todos.map(({ line }) => line), [1, 3, 5, 7]);
    assert.match(output, /^\/\* TODO\(ods-v20\): require\('@ovhcloud\/ods-react'\): ods-migrate does not follow names read this way: change BUTTON_COLOR, BUTTON_VARIANT as the v20 migration guide says/m);
    assert.match(output, /^const \{ Text \} = require\('@ovhcloud\/ods-react'\);$/m);
    assert.match(output, /^\/\* TODO\(ods-v20\): import\('@ovhcloud\/ods-react'\): [^\n]*\*\/ export const lazyOne/m);
    assertParity(source, output, 'file.js');
  });

  it('is not reported clean by --check', async () => {
    let stdout = '';
    const dir = await migrateProject({ 'package.json': JSON.stringify({ dependencies: { [PKG]: '19.7.3' }, name: 'app' }), 'src/a.js': 'const x = 1;\n' });
    writeFileSync(join(dir, 'src/cjs.js'), source);
    const code = await cli(['.', '--check'], { cwd: dir, stderr: () => {}, stdout: (text) => { stdout += text; } });
    assert.equal(code, 1);
    assert.doesNotMatch(stdout, /nothing left to migrate/);
  });
});

describe('Divider and Spinner neutral (A8-10)', () => {
  it('removes the prop under Aluminium, and the change line says the look changes and how to keep the grey, with the token of the guide', () => {
    const { changes, output, todos } = run(`import { Divider, Spinner, DIVIDER_COLOR, SPINNER_COLOR } from '${PKG}';\nexport const A = () => <><Divider color={ DIVIDER_COLOR.neutral } /><Spinner color={ SPINNER_COLOR.neutral } /></>;\n`);
    assert.match(output, /<Divider \/><Spinner \/>/);
    assert.equal(todos.length, 0);
    assert.ok(changes.some(({ message }) => message === '<Spinner> color="neutral" → removed (it renders in the v20 default color; set `--ods-spinner-color: var(--ods-semantic-color-content-neutral)` through a `className` to keep the v19 neutral color)'));
    assert.ok(changes.some(({ message }) => message.startsWith('<Divider> color="neutral" → removed (it renders in the v20 default color; set `background-color: var(--ods-semantic-color-interaction-neutral-hover)`')));
  });
});

describe('field-control width (A6-09, A6-10)', () => {
  it('notes a width on every *Control by default, and the Datepicker one on both elements', () => {
    const { notes } = run(`import { Datepicker, DatepickerControl, Select, SelectControl, PhoneNumberControl } from '${PKG}';\nexport const A = () => <><Select><SelectControl className="w-full" /></Select><Datepicker><DatepickerControl style={{ width: '100%' }} /></Datepicker><PhoneNumberControl className="w-full" /></>;\n`);
    assert.deepEqual(notes.map(({ message }) => message), [
      '<SelectControl className>: the field width now lives on the root in v20: move a width class or style to <Select>, the control only fills it',
      '<DatepickerControl style>: the field width now lives on the root in v20: set the width on both <Datepicker> and <DatepickerControl>: the Datepicker root is an inline block sized by its content, and the control defaults to the 280px field width',
      '<PhoneNumberControl className>: the field width now lives on the root in v20: move a width class or style to <PhoneNumber>, the control only fills it',
    ]);
  });
});
