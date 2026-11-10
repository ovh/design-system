import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { Lang, parse } from '@ast-grep/napi';
import { transformSource } from '../src/transform.mjs';

// The engine keys of CONTRACT §4, tested with small inline mappings (the real entries come from the mapping).
const PKG = '@ovhcloud/ods-react';
const errors = (source, filename) => parse(/\.(c|m)?ts$/.test(filename) ? Lang.TypeScript : Lang.Tsx, source).root().findAll({ rule: { kind: 'ERROR' } }).length;

/** Runs the codemod, and checks every result the same way: a second run changes nothing, no parse error is added. */
function run(source, mapping, filename = 'file.tsx', options = {}) {
  const result = transformSource(source, { from: '19', package: PKG, to: '20', exports: {}, ...mapping }, filename, options);
  const again = transformSource(result.output, { from: '19', package: PKG, to: '20', exports: {}, ...mapping }, filename, options);
  assert.equal(again.output, result.output, 'a second run changes nothing');
  assert.equal(errors(result.output, filename), errors(source, filename), 'no parse error added');
  return result;
}
const imports = (names) => `import { ${names} } from '${PKG}';\n`;
// The marker on the import of removed exports still read (`MODAL_COLOR: removed in v20, delete it from this import…`).
const removedImport = (names, list = names.split(', ')) => `/* TODO(ods-v20): ${list.join(', ')}: removed in v20, delete ${list.length > 1 ? 'them' : 'it'} from this import once the places marked below no longer use ${list.length > 1 ? 'them' : 'it'} */ ${imports(names)}`;

const badge = {
  components: { Badge: { conflicts: ['status', 'emphasis'], props: { color: { constant: 'BADGE_COLOR', renameTo: 'status', values: { primary: 'accent' } } }, propsType: 'BadgeProp' } },
  exports: { BADGE_COLOR: { members: { primary: 'accent' }, renameTo: 'BADGE_STATUS' }, BadgeColor: { members: { primary: 'accent' }, renameTo: 'BadgeStatus' } },
};
const button = {
  components: {
    Button: {
      props: {
        color: { constant: 'BUTTON_COLOR', dropDefault: 'brand', hint: 'pick another', renameTo: 'status', values: { information: null, primary: 'brand' } },
        variant: { constant: 'BUTTON_VARIANT', defaultWas: 'default', dropDefault: 'medium', renameTo: 'emphasis', values: { default: 'high', ghost: 'low', outline: 'medium' } },
      },
      whenAbsent: { add: { emphasis: 'high' }, choice: 'button-default-emphasis', unless: ['variant', 'emphasis'] },
    },
  },
  exports: {
    BUTTON_COLOR: { hint: 'pick another', members: { information: null, primary: 'brand' }, renameTo: 'BUTTON_STATUS' },
    BUTTON_VARIANT: { members: { default: 'high', ghost: 'low', outline: 'medium' }, renameTo: 'BUTTON_EMPHASIS' },
  },
};
const v19 = (choice) => ({ config: { look: { [choice]: 'v19' } } });

describe('apply and imports', () => {
  it('drops the edits inside an attribute the "both props set" branch removes, instead of crashing (bugs 36, 51)', () => {
    const { output } = run(`${imports('Badge, BADGE_COLOR')}export const A = () => <Badge status="neutral" color={ BADGE_COLOR.primary }>x</Badge>;\n`, badge);
    assert.equal(output, `${imports('Badge')}export const A = () => <Badge status="neutral">x</Badge>;\n`);
  });

  it('renames an import in place, keeping comments, spacing and trailing spaces (bug 40)', () => {
    const source = `import {\n  Badge, // the badge  \n  BADGE_COLOR,// its color\n  Text,TEXT_PRESET,\n} from '${PKG}';\nconst a = BADGE_COLOR.primary;\n`;
    const { output } = run(source, badge);
    assert.equal(output, source.replace('BADGE_COLOR,', 'BADGE_STATUS,').replace('BADGE_COLOR.primary', 'BADGE_STATUS.accent'));
  });

  it('removes a specifier with its comma, the preceding one when it is last', () => {
    const mapping = { components: {}, exports: { DIVIDER_COLOR: { removed: true }, DividerColor: { removed: true } } };
    assert.equal(run(`import { Divider, DIVIDER_COLOR } from '${PKG}';\nconst d = Divider;\n`, mapping).output, `import { Divider } from '${PKG}';\nconst d = Divider;\n`);
    assert.equal(run(`import { DIVIDER_COLOR, DividerColor, Divider } from '${PKG}';\nconst d = Divider;\n`, mapping).output, `import { Divider } from '${PKG}';\nconst d = Divider;\n`);
    assert.equal(run(`import { Divider, DIVIDER_COLOR, DividerColor } from '${PKG}';\nconst d = Divider;\n`, mapping).output, `import { Divider } from '${PKG}';\nconst d = Divider;\n`);
  });
});

describe('values without a v20 equivalent (bug 42)', () => {
  it('deletes an attribute whose whole value has none (the default applies) and marks the element; keeps a computed one as it is, marked once', () => {
    const { output, todos } = run(`${imports('Button, BUTTON_COLOR')}const a = <Button color={ BUTTON_COLOR.information }>x</Button>;\nconst b = <Button color={ c ? "information" : "success" }>y</Button>;\n`, button, 'file.jsx');
    assert.equal(output, `${imports('Button')}const a = /* TODO(ods-v20): BUTTON_COLOR.information has no v20 equivalent: pick another */ <Button>x</Button>;\nconst b = <Button /* TODO(ods-v20): <Button color="information"> has no v20 equivalent: pick another */ color={ c ? "information" : "success" }>y</Button>;\n`);
    assert.equal(todos.length, 2);
  });

  it('never writes a v20 member that does not exist: a read of one keeps its v19 constant, and the import keeps it next to the v20 one', () => {
    const { output } = run(`${imports('Button, BUTTON_COLOR')}const a = <Button color={ c ? BUTTON_COLOR.information : BUTTON_COLOR.critical }>x</Button>;\nconst b = BUTTON_COLOR.information;\n`, button);
    assert.doesNotMatch(output, /BUTTON_STATUS\.information/);
    assert.match(output, /^\/\* TODO\(ods-v20\): BUTTON_COLOR: removed in v20, delete it from this import once the places marked below no longer use it \*\/ import \{ Button, BUTTON_COLOR, BUTTON_STATUS \} from '@ovhcloud\/ods-react';$/m);
    assert.match(output, /color=\{ c \? BUTTON_COLOR\.information : BUTTON_STATUS\.critical \}/);
    assert.match(output, /const b = \/\* TODO\(ods-v20\): BUTTON_COLOR\.information has no v20 equivalent: pick another \*\/ BUTTON_COLOR\.information;/);
  });

  it('keeps the marker of a constant on another line than the attribute, where a lint report on it lands', () => {
    const { output } = run(`${imports('Button, BUTTON_COLOR')}const a = <Button color={\n  c ? BUTTON_COLOR.information : BUTTON_COLOR.critical\n}>x</Button>;\n`, button);
    // The attribute, the constant on its own line, and the import that keeps BUTTON_COLOR for it.
    assert.equal((output.match(/TODO\(ods-v20\)/g) ?? []).length, 3);
  });

  it('keeps marking a value read from the v20 name of another constant (second run)', () => {
    const source = `${imports('Button, BADGE_COLOR')}const a = <Button color={ BADGE_COLOR.information } />;\n`;
    const mapping = { components: button.components, exports: { ...badge.exports, ...button.exports } };
    // BADGE_COLOR.information is a Badge value: on a Button it has none, the attribute goes and the element is marked.
    assert.match(run(source, mapping, 'file.jsx').output, /TODO\(ods-v20\): BADGE_COLOR\.information has no v20 equivalent[^/]*\/ <Button \/>/);
  });
});

describe('untyped code', () => {
  it('renames a computed value without a marker and lists it (JS and // @ts-nocheck)', () => {
    for (const [filename, header] of [['file.jsx', ''], ['file.tsx', '// @ts-nocheck\n']]) {
      const { output, todos, untyped, typed } = run(`${header}${imports('Badge')}const a = <Badge color={ tone }>x</Badge>;\n`, badge, filename);
      assert.equal(output, `${header}${imports('Badge')}const a = <Badge status={ tone }>x</Badge>;\n`);
      assert.deepEqual([todos.length, typed.length, untyped.length], [0, 0, 1]);
    }
  });

  it('leaves a computed value to tsc in TypeScript', () => {
    const { typed, untyped } = run(`${imports('Badge')}const a = <Badge color={ tone }>x</Badge>;\n`, badge);
    assert.deepEqual([typed.length, untyped.length], [1, 0]);
  });

  it('marks a spread on a mapped component in JS, and only notes it in TS', () => {
    const source = `${imports('Badge')}const a = <Badge { ...rest } />;\n`;
    assert.equal(run(source, badge, 'file.jsx').output, `${imports('Badge')}const a = <Badge /* TODO(ods-v20): <Badge {...…}>: if the object passed here with {...} has these keys, change them (TypeScript does not flag them there): color → status */ { ...rest } />;\n`);
    const typed = run(source, badge);
    assert.equal(typed.output, source);
    assert.equal(typed.notes.length, 1);
  });

  it('keeps the marker of a removed prop with a computed value', () => {
    const mapping = { components: { Spinner: { props: { color: { remove: true, values: { primary: {} } } } } } };
    const { todos } = run(`${imports('Spinner')}const a = <Spinner color={ tone } />;\n`, mapping, 'file.jsx');
    assert.equal(todos.length, 1);
  });
});

describe('typed literals', () => {
  it('rewrites the literals at a position of the renamed type only (bugs 11, 43)', () => {
    const source = `${imports('type BadgeColor')}const a: Record<BadgeColor, string> = { primary: 'primary' };
const b: Array<{ key: string; tone?: BadgeColor }> = [{ key: 'primary', tone: 'primary' }];
const c = { x: 'primary' as const } satisfies Record<string, BadgeColor>;
const d: ReadonlyArray<BadgeColor> = ['primary'];
const e: Partial<Record<string, BadgeColor>> = { x: ('primary') };
const f: string | BadgeColor = 'primary';
`;
    const { output, notes } = run(source, badge, 'file.ts');
    assert.equal(output, `${imports('type BadgeStatus')}const a: Record<BadgeStatus, string> = { primary: 'primary' };
const b: Array<{ key: string; tone?: BadgeStatus }> = [{ key: 'primary', tone: 'accent' }];
const c = { x: 'accent' as const } satisfies Record<string, BadgeStatus>;
const d: ReadonlyArray<BadgeStatus> = ['accent'];
const e: Partial<Record<string, BadgeStatus>> = { x: ('accent') };
const f: string | BadgeStatus = 'primary';
`);
    assert.deepEqual(notes.map((item) => item.line), [2, 7]);
  });
});

describe('propsType: indexed types, Omit, Pick (bug 19)', () => {
  const mapping = {
    components: {
      Badge: { props: { color: { renameTo: 'status' }, size: { hint: 'gone', remove: true } }, propsType: 'BadgeProp' },
    },
  };
  it('renames the indexed access of a renamed prop and marks a removed one', () => {
    const source = `import { type ComponentProps } from 'react';\n${imports('Badge, type BadgeProp as BP')}type A = BP['color'];\ntype B = ComponentProps<typeof Badge>['color'];\ntype C = BP['size'];\n`;
    assert.equal(run(source, mapping).output, source.replace("BP['color']", "BP['status']").replace("Badge>['color']", "Badge>['status']").replace("type C = ", "type C = /* TODO(ods-v20): BP['size'] is removed in v20: gone */ "));
  });

  it('keeps the v19 literals of an Omit (typed never in v20) and adds the v20 ones; renames and drops those of a Pick', () => {
    const source = `${imports('type BadgeProp')}type A = Omit<BadgeProp, 'color' | 'id'>;
type B = Omit<BadgeProp, 'size'>;
type C = Omit<BadgeProp, 'color' | 'status'>;
type D = Pick<BadgeProp, 'size' | 'id'>;
type E = Pick<BadgeProp, 'size'>;
type F = Omit<Other, 'color'>;
`;
    assert.equal(run(source, mapping).output, `${imports('type BadgeProp')}type A = Omit<BadgeProp, 'color' | 'status' | 'id'>;
type B = Omit<BadgeProp, 'size'>;
type C = Omit<BadgeProp, 'color' | 'status'>;
type D = Pick<BadgeProp, 'id'>;
type E = /* TODO(ods-v20): Pick<BadgeProp, 'size'>: size is removed in v20: gone */ Pick<BadgeProp, 'size'>;
type F = Omit<Other, 'color'>;
`);
  });
});

describe('own props of a wrapper (conflicts)', () => {
  it('omits a v20 prop the wrapper declares itself, and marks its own v19 prop', () => {
    const source = `${imports('type BadgeProp')}interface A extends BadgeProp { status: string }
interface B extends Omit<BadgeProp, 'color'> { status: string; emphasis?: number }
type C = BadgeProp & { color: string };
interface D extends Omit<BadgeProp, 'status'> { status: string }
`;
    const { notes, output } = run(source, badge);
    assert.equal(output, `${imports('type BadgeProp')}interface A extends Omit<BadgeProp, 'status'> { status: string }
interface B extends Omit<BadgeProp, 'color' | 'status' | 'emphasis'> { status: string; emphasis?: number }
type C = BadgeProp & { /* TODO(ods-v20): <C> declares its own color, typed never on Badge in v20: rename it, or omit it with Omit<BadgeProp, 'color'> */ color: string };
interface D extends Omit<BadgeProp, 'status'> { status: string }
`);
    assert.equal(notes.length, 3);
  });
});

describe('moveTo', () => {
  const overlay = { prop: 'overlayConfig' };
  const mapping = {
    components: {
      Popover: { props: { gutter: { moveTo: { ...overlay, key: 'gutter' } }, position: { moveTo: { ...overlay, key: 'position' } }, sameWidth: { moveTo: { ...overlay, key: 'sameWidth' } } } },
      Select: { props: { fitControlWidth: { moveTo: { ...overlay, default: true, key: 'sameWidth' } } } },
    },
  };
  const wrap = (jsx) => `${imports('Popover, Select')}const a = ${jsx};\n`;
  const cases = [
    ['<Popover gutter={ GAP } position="right" sameWidth>x</Popover>', "<Popover overlayConfig={{ gutter: GAP, position: 'right', sameWidth: true }}>x</Popover>"],
    ['<Select fitControlWidth />', '<Select />'],
    ['<Select fitControlWidth={ true } />', '<Select />'],
    ['<Select fitControlWidth={ false } />', '<Select overlayConfig={{ sameWidth: false }} />'],
    ["<Popover position=\"top\" overlayConfig={{ position: 'bottom' }} />", "<Popover overlayConfig={{ position: 'bottom' }} />"],
    ['<Popover position="top" overlayConfig={{ flip: false }} />', "<Popover overlayConfig={{ flip: false, position: 'top' }} />"],
    ['<Popover position="top" overlayConfig={{\n  flip: false,\n}} />', "<Popover overlayConfig={{\n  flip: false,\n  position: 'top',\n}} />"],
    ['<Popover position="top" overlayConfig={ config } />', "<Popover overlayConfig={{ position: 'top', ...config }} />"],
    ['<Popover position="top" overlayConfig={ a || b } />', "<Popover overlayConfig={{ position: 'top', ...(a || b) }} />"],
  ];
  for (const [before, after] of cases) {
    it(`${before} → ${after}`, () => {
      assert.equal(run(wrap(before), mapping).output, wrap(after));
    });
  }

  it('notes that an explicit undefined in another expression hides the moved prop, and keeps the spread note', () => {
    assert.equal(run(wrap('<Popover position="top" overlayConfig={ config } />'), mapping).notes.length, 1);
    const { notes, output } = run(wrap('<Popover { ...rest } position="top" />'), mapping);
    assert.equal(output, wrap("<Popover { ...rest } overlayConfig={{ position: 'top' }} />"));
    assert.equal(notes.length, 1);
  });
});

describe('always, note, coerce, todoUnless, stacking', () => {
  it('always: removes the attribute whatever its value, with the hint in the change, and drops the import it read', () => {
    const mapping = {
      components: { FileUploadItem: { props: { uploadSuccessLabel: { always: true, hint: 'an icon shows it', remove: true } } } },
      exports: { LABELS: { removed: true } },
    };
    const { changes, notes, output, todos } = run(`${imports('FileUploadItem, LABELS')}const a = <FileUploadItem uploadSuccessLabel={ LABELS.done } name="f" />;\n`, mapping);
    assert.equal(output, `${imports('FileUploadItem')}const a = <FileUploadItem name="f" />;\n`);
    assert.deepEqual([notes.length, todos.length], [0, 0]);
    assert.ok(changes.some(({ message }) => message === '<FileUploadItem> uploadSuccessLabel removed (an icon shows it)'));
  });

  it('note: reports the attribute, edits nothing', () => {
    const mapping = { components: { SelectControl: { props: { className: { note: 'move a width class to <Select>' } } } } };
    const source = `${imports('SelectControl')}const a = <SelectControl className="w-64" />;\n`;
    const { notes, output } = run(source, mapping);
    assert.equal(output, source);
    assert.deepEqual(notes.map((item) => item.message), ['<SelectControl className>: move a width class to <Select>']);
  });

  it('coerce: a number becomes a string, an array is marked, anything else is left to tsc', () => {
    const mapping = { components: { ModalTrigger: { props: { value: { coerce: 'string', hint: 'wrap it with String(…)' } } } } };
    const source = `${imports('ModalTrigger')}const a = <><ModalTrigger value={ 42 } /><ModalTrigger value={ -1 } /><ModalTrigger value="x" /><ModalTrigger value={ ['a'] } /><ModalTrigger value={ id } /></>;\n`;
    const { output, typed } = run(source, mapping);
    assert.equal(output, `${imports('ModalTrigger')}const a = <><ModalTrigger value="42" /><ModalTrigger value="-1" /><ModalTrigger value="x" /><ModalTrigger /* TODO(ods-v20): <ModalTrigger value={[…]}>: the value of a trigger is a string in v20: wrap it with String(…) */ value={ ['a'] } /><ModalTrigger value={ id } /></>;\n`);
    assert.equal(typed.length, 1);
  });

  it('todoUnless: a point to check (valid v20 code, never a marker) unless the element has the attribute or a spread, and nothing on a project already on v20', () => {
    const mapping = { components: { Input: { props: { type: { constant: 'INPUT_TYPE', hint: 'add maskOption', todoUnless: { attribute: 'maskOption', values: ['password'] } } } } } };
    const source = `${imports('Input, INPUT_TYPE')}const a = <><Input type="password" /><Input type={ INPUT_TYPE.password } maskOption={ m } /><Input { ...p } type="password" /><Input type="text" /></>;\n`;
    const { notes, output, todos } = run(source, mapping);
    assert.equal(output, source);
    assert.deepEqual([notes.map(({ message }) => message), todos.length], [['<Input type="password">: add maskOption'], 0]);
    assert.deepEqual(run(source, mapping, 'file.tsx', { from: 20 }).notes, []);
  });

  it('stacking: marks a literal z-index between the ODS layers (not one below or above them all), never rewrites it, and leaves the v19 overlay token to the token pass', () => {
    const mapping = { components: { Modal: { props: { positionerStyle: { hint: 'overlays moved to 200-400', stacking: true } } } } };
    const source = `${imports('Modal')}const a = <>
  <Modal positionerStyle={{ zIndex: 102 }} />
  <Modal positionerStyle={{ top: 0, zIndex: '150' }} />
  <Modal positionerStyle={{ zIndex: 98 }} />
  <Modal positionerStyle={{ zIndex: '99999' }} />
  <Modal positionerStyle={{ zIndex: 'calc(var(--ods-theme-overlay-z-index) + 2)' }} />
  <Modal positionerStyle={{ zIndex: level }} />
  <Modal positionerStyle={{ zIndex: 'var(--ods-semantic-z-index-modal)' }} />
</>;\n`;
    const { output, todos } = run(source, mapping);
    assert.equal(todos.length, 2);
    assert.match(output, /\{ top: 0, \/\* TODO\(ods-v20\): <Modal positionerStyle=\{\{ zIndex \}\}>: check this stacking: overlays moved to 200-400\. Once decided, put a comment `ods-v20: checked` right before it, so that ods-migrate and --check leave it\. \*\/ zIndex: '150' \}/);
    assert.equal(output.replace(/\/\* TODO\(ods-v20\)[^*]*\*\/ /g, ''), source);
  });
});

describe('remove with replacement attributes', () => {
  const mapping = {
    components: {
      ModalContent: { props: { color: { constant: 'MODAL_COLOR', remove: true, values: { critical: { role: 'alertdialog' }, neutral: {} } } } },
      Table: { props: { variant: { constant: 'TABLE_VARIANT', remove: true, values: { default: {}, striped: { striped: true } } } } },
    },
    exports: { MODAL_COLOR: { removed: true }, TABLE_VARIANT: { removed: true } },
  };
  const wrap = (jsx, names = 'Table, TABLE_VARIANT') => `${imports(names)}const a = ${jsx};\n`;
  const cases = [
    ['<Table variant="striped" />', '<Table striped />', 'Table'],
    ['<Table variant={ TABLE_VARIANT.default } />', '<Table />', 'Table'],
    ['<Table variant={ isStriped ? TABLE_VARIANT.striped : TABLE_VARIANT.default } />', '<Table striped={ isStriped } />', 'Table'],
    ['<Table variant={ dense ? "default" : "striped" } />', '<Table striped={ !dense } />', 'Table'],
    ['<Table variant={ a && b ? "default" : "striped" } />', '<Table striped={ !(a && b) } />', 'Table'],
    ['<Table variant={ a ? "default" : b ? "striped" : "default" } />', '<Table striped={ a ? false : b } />', 'Table'],
    ['<Table striped variant={ c ? "default" : "striped" } />', '<Table striped />', 'Table'],
  ];
  for (const [before, after, names] of cases) {
    it(`${before} → ${after}`, () => {
      assert.equal(run(wrap(before), mapping).output, wrap(after, names));
    });
  }

  it('folds a ModalContent ternary into role, and keeps the marker on && / ||', () => {
    const source = `${imports('ModalContent, MODAL_COLOR')}const a = <ModalContent color={ isCritical ? MODAL_COLOR.critical : MODAL_COLOR.neutral } />;\nconst b = <ModalContent color={ isCritical && MODAL_COLOR.critical } />;\n`;
    const { output, todos } = run(source, mapping);
    assert.equal(output, `${removedImport('ModalContent, MODAL_COLOR', ['MODAL_COLOR'])}const a = <ModalContent role={ isCritical ? 'alertdialog' : undefined } />;\nconst b = <ModalContent /* TODO(ods-v20): <ModalContent color={…}> is removed in v20 and its value is computed at runtime */ color={ isCritical && MODAL_COLOR.critical } />;\n`);
    assert.equal(todos.length, 2);
  });
});

describe('toast options (callOptions)', () => {
  const mapping = {
    components: {},
    exports: {
      TOAST_COLOR: { members: { primary: 'accent' }, renameTo: 'TOAST_STATUS' },
      toast: { callOptions: { color: { constant: 'TOAST_COLOR', hint: 'use the matching helper', toHelper: true, values: { primary: 'accent' } } }, members: { primary: 'accent' } },
    },
  };
  const cases = [
    ["toast.critical('m', { color: 'success' });", "toast.critical('m');"],
    ["toast.critical('m', { duration: 1, color });", "toast.critical('m', { duration: 1 });"],
    ["toast('m', { color: 'primary', duration: 1 });", "toast.accent('m', { duration: 1 });"],
    ["toast('m', { color: TOAST_COLOR.warning });", "toast.warning('m');"],
    ["toast.primary('m');", "toast.accent('m');"],
  ];
  for (const [before, after] of cases) {
    it(`${before} → ${after}`, () => {
      const source = `${imports('toast, TOAST_COLOR')}${before}\nconst keep = TOAST_COLOR;\n`;
      assert.equal(run(source, mapping).output, `${imports('toast, TOAST_STATUS')}${after}\nconst keep = TOAST_STATUS;\n`);
    });
  }

  it('marks a computed color, and drops a constant import no longer read', () => {
    const { output, todos } = run(`${imports('toast, TOAST_COLOR')}toast('m', { color: level });\ntoast('n', { color: TOAST_COLOR.primary });\n`, mapping);
    assert.equal(output, `${imports('toast')}toast('m', { /* TODO(ods-v20): toast(…, { color }): the color option is removed in v20: use the matching helper */ color: level });\ntoast.accent('n');\n`);
    assert.equal(todos.length, 1);
  });
});

describe('mocks', () => {
  const mapping = {
    components: { Badge: badge.components.Badge },
    exports: { ...badge.exports, ToastController: { memberKeys: true, members: { primary: 'accent' } }, toast: { members: { primary: 'accent' } } },
  };
  it('migrates import() mocks, quoted keys and Object.assign members (bug 16)', () => {
    const source = `vi.mock(import('${PKG}'), () => ({ "BADGE_COLOR": { 'primary': 'primary' }, toast: Object.assign(vi.fn(), { primary: vi.fn(), critical }) }));\n`;
    assert.equal(run(source, mapping, 'file.test.tsx').output, `vi.mock(import('${PKG}'), () => ({ "BADGE_STATUS": { 'accent': 'accent' }, toast: Object.assign(vi.fn(), { accent: vi.fn(), critical }) }));\n`);
  });

  it('gives a mocked shorthand of an imported constant the new name, without a key that a second run would rename', () => {
    const source = `${imports('BADGE_COLOR')}vi.mock('${PKG}', () => ({ BADGE_COLOR }));\nconst a = BADGE_COLOR.primary;\n`;
    assert.equal(run(source, mapping, 'file.test.tsx').output, `${imports('BADGE_STATUS')}vi.mock('${PKG}', () => ({ BADGE_STATUS }));\nconst a = BADGE_STATUS.accent;\n`);
  });

  it('renames the keys of objects typed ToastController', () => {
    const source = `${imports('type ToastController')}const a: ToastController = { primary, critical: vi.fn() };\nconst b = { primary: vi.fn() } as Partial<ToastController>;\n`;
    assert.equal(run(source, mapping).output, `${imports('type ToastController')}const a: ToastController = { accent: primary, critical: vi.fn() };\nconst b = { accent: vi.fn() } as Partial<ToastController>;\n`);
  });
});

describe('childless', () => {
  const mapping = {
    components: {
      Pagination: {
        childless: { children: [
          { element: 'PaginationPageSizeSelector', labelFrom: { arg: '{ totalItems: $totalItems }', prop: 'renderTotalItemsLabel' }, when: 'withPageSizeSelector' },
          { element: 'PaginationPages' },
        ] },
        props: { renderTotalItemsLabel: { always: true, remove: true }, withPageSizeSelector: { always: true, remove: true } },
      },
      Toggle: { childless: { children: [{ element: 'ToggleControl', moveProps: ['className'] }] }, props: {} },
    },
  };
  it('writes the parts out as children and imports them', () => {
    const source = `import { Pagination, Toggle } from '${PKG}';

export const A = () => (
  <div>
    <Pagination totalItems={ 500 } withPageSizeSelector renderTotalItemsLabel={ ({ totalItems }) => \`\${totalItems} items\` } />
    <Pagination totalItems={ 5 } withPageSizeSelector={ hasSize }></Pagination>
    <Toggle className="t" withLabels />
    <Pagination { ...props } />
  </div>
);
`;
    const { notes, output } = run(source, mapping);
    assert.equal(output, `import { Pagination, Toggle, PaginationPageSizeSelector, PaginationPages, ToggleControl } from '${PKG}';

export const A = () => (
  <div>
    <Pagination totalItems={ 500 }>
      <PaginationPageSizeSelector label={ (({ totalItems }) => \`\${totalItems} items\`)({ totalItems: 500 }) } />
      <PaginationPages />
    </Pagination>
    <Pagination totalItems={ 5 }>
      { hasSize && <PaginationPageSizeSelector /> }
      <PaginationPages />
    </Pagination>
    <Toggle withLabels>
      <ToggleControl className="t" />
    </Toggle>
    <Pagination { ...props } />
  </div>
);
`);
    assert.deepEqual(notes.map((item) => item.message), [
      '<Pagination {...…}>: if the object passed here with {...} has these keys, change them (TypeScript does not flag them there): renderTotalItemsLabel (removed: delete it), withPageSizeSelector (removed: delete it)',
      '<Pagination {...…}> without children: if the object passed here with {...} holds children, check them against the v20 parts',
    ]);
  });

  it('marks a label it cannot write, in a form JSX accepts', () => {
    const source = `import { Pagination } from '${PKG}';\nconst a = (\n  <div>\n    <Pagination renderTotalItemsLabel={ render } withPageSizeSelector />\n  </div>\n);\n`;
    const { output, todos } = run(source, mapping);
    assert.equal(output, `import { Pagination, PaginationPageSizeSelector, PaginationPages } from '${PKG}';\nconst a = (\n  <div>\n    {/* TODO(ods-v20): <Pagination renderTotalItemsLabel>: totalItems is not set on the element, write the label of <PaginationPageSizeSelector> by hand */}\n    <Pagination>\n      <PaginationPageSizeSelector />\n      <PaginationPages />\n    </Pagination>\n  </div>\n);\n`);
    assert.equal(todos.length, 1);
  });

  it('leaves an element with children alone', () => {
    const source = `import { Toggle, ToggleControl } from '${PKG}';\nconst a = <Toggle><ToggleControl /></Toggle>;\n`;
    assert.equal(run(source, mapping).output, source);
  });
});

describe('removed component used as JSX', () => {
  it('marks the outermost element once, in a form JSX accepts', () => {
    const mapping = { components: {}, exports: { Switch: { hint: 'use Tabs', removed: true }, SwitchItem: { removed: true } } };
    const source = `${imports('Switch, SwitchItem')}const a = (
  <div>
    <Switch>
      <SwitchItem value="a">A</SwitchItem>
    </Switch>
  </div>
);
const b = <Switch />;
`;
    const { output, todos } = run(source, mapping);
    assert.equal(output, `${removedImport('Switch, SwitchItem')}const a = (
  <div>
    {/* TODO(ods-v20): <Switch> has no v20 equivalent: use Tabs */}
    <Switch>
      <SwitchItem value="a">A</SwitchItem>
    </Switch>
  </div>
);
const b = /* TODO(ods-v20): <Switch> has no v20 equivalent: use Tabs */ <Switch />;
`);
    assert.equal(todos.length, 3);
  });

  it('marks a member of a removed export with its own hint', () => {
    const mapping = { components: {}, exports: { DIVIDER_COLOR: { hint: 'use CSS', members: { primary: { hint: 'delete it', to: null } }, removed: true } } };
    const { output } = run(`${imports('DIVIDER_COLOR')}const a = DIVIDER_COLOR.primary;\nconst b = DIVIDER_COLOR;\n`, mapping);
    assert.equal(output, `${removedImport('DIVIDER_COLOR')}const a = /* TODO(ods-v20): DIVIDER_COLOR.primary has no v20 equivalent: delete it */ DIVIDER_COLOR.primary;\nconst b = /* TODO(ods-v20): DIVIDER_COLOR has no v20 equivalent: use CSS */ DIVIDER_COLOR;\n`);
  });

  it('notes a renamed export whose values changed, once per file', () => {
    const mapping = { components: {}, exports: { MESSAGE_VARIANTS: { note: 'now lists 3 values', renameTo: 'MESSAGE_EMPHASES' } } };
    const { notes } = run(`${imports('MESSAGE_VARIANTS')}const a = MESSAGE_VARIANTS;\nconst b = MESSAGE_VARIANTS;\n`, mapping);
    assert.deepEqual(notes, [{ line: 2, message: 'MESSAGE_VARIANTS → MESSAGE_EMPHASES: now lists 3 values' }]);
  });
});

describe('defaults and the v19 look', () => {
  const source = `${imports('Button, BUTTON_COLOR, BUTTON_VARIANT')}const a = <>
  <Button>Plain</Button>
  <Button { ...rest }>Spread</Button>
  <Button color="primary" variant="outline">Defaults</Button>
  <Button color={ BUTTON_COLOR.primary } variant={ BUTTON_VARIANT.ghost }>Constants</Button>
  <Button variant={ v }>Computed</Button>
  <Button variant={ v ?? 'ghost' }>Fallback</Button>
  <Button status="brand" emphasis="medium">v20</Button>
</>;\n`;

  it('Aluminium: adds nothing and drops the explicit v20 defaults', () => {
    const { output } = run(source, button);
    assert.equal(output, `${imports('Button, BUTTON_EMPHASIS')}const a = <>
  <Button>Plain</Button>
  <Button { ...rest }>Spread</Button>
  <Button>Defaults</Button>
  <Button emphasis={ BUTTON_EMPHASIS.low }>Constants</Button>
  <Button emphasis={ v }>Computed</Button>
  <Button emphasis={ v ?? 'low' }>Fallback</Button>
  <Button status="brand" emphasis="medium">v20</Button>
</>;\n`);
  });

  it('v19 look: writes the v19 default out, keeps an explicit emphasis, wraps a computed value', () => {
    const { output } = run(source, button, 'file.tsx', v19('button-default-emphasis'));
    assert.equal(output, `${imports('Button, BUTTON_EMPHASIS')}const a = <>
  <Button emphasis="high">Plain</Button>
  <Button emphasis="high" { ...rest }>Spread</Button>
  <Button emphasis="medium">Defaults</Button>
  <Button emphasis={ BUTTON_EMPHASIS.low }>Constants</Button>
  <Button emphasis={ v ?? 'high' }>Computed</Button>
  <Button emphasis={ v ?? 'low' }>Fallback</Button>
  <Button status="brand" emphasis="medium">v20</Button>
</>;\n`);
  });

  it('a project already on ODS 20 gets no v19-look addition, but the v19 values it rewrites keep their v19 look (review: ux-configurator)', () => {
    const { output } = run(source, button, 'file.tsx', { ...v19('button-default-emphasis'), from: 20 });
    assert.equal(output, `${imports('Button, BUTTON_EMPHASIS')}const a = <>
  <Button>Plain</Button>
  <Button { ...rest }>Spread</Button>
  <Button emphasis="medium">Defaults</Button>
  <Button emphasis={ BUTTON_EMPHASIS.low }>Constants</Button>
  <Button emphasis={ v ?? 'high' }>Computed</Button>
  <Button emphasis={ v ?? 'low' }>Fallback</Button>
  <Button status="brand" emphasis="medium">v20</Button>
</>;\n`);
  });

  it('v19Look: adds attributes for one value, or keeps and marks the old attribute when an expression must be merged by hand', () => {
    const mapping = {
      components: {
        Badge: { props: { color: { renameTo: 'status', v19Look: { choice: 'badge-accent-filled', values: { primary: { emphasis: 'high' } } }, values: { primary: 'accent' } } } },
        Divider: { props: { color: { remove: true, v19Look: { choice: 'divider-neutral-grey', values: { neutral: { style: { expr: "{ color: 'grey' }" } } } }, values: { neutral: {}, primary: {} } } } },
      },
    };
    const input = `${imports('Badge, Divider')}const a = <><Badge color="primary" /><Divider color="neutral" /><Divider color="neutral" style={ s } /></>;\n`;
    assert.equal(run(input, mapping).output, `${imports('Badge, Divider')}const a = <><Badge status="accent" /><Divider /><Divider style={ s } /></>;\n`);
    const config = { config: { look: { 'badge-accent-filled': 'v19', 'divider-neutral-grey': 'v19' } } };
    assert.equal(run(input, mapping, 'file.tsx', config).output, `${imports('Badge, Divider')}const a = <><Badge status="accent" emphasis="high" /><Divider style={{ color: 'grey' }} /><Divider /* TODO(ods-v20): <Divider color="neutral">: keep the v19 look with style={{ color: 'grey' }}, merged into your style */ color="neutral" style={ s } /></>;\n`);
  });
});
