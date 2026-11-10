/*
 * Coverage harness: the sites the hand-labelled benchmark found that the harness did not see, or saw
 * wrong (round 1 of the harness/benchmark comparison). Each test is one class of disagreement:
 *   - an error the type checker hides: the uses of a binding whose import is broken (`any`), a name
 *     imported from a barrel that re-exported a removed export, an attribute masked by another error of
 *     its element, a prop v20 removed by typing it `never` that an `undefined` value passes;
 *   - two removed names imported on one line, one of them fixed: told apart by the error message;
 *   - code shown as text: `<code>` in Markdown / MDX, removed exports in Markdown code and script strings;
 *   - a font family v20 no longer loads; a bare BEM modifier in a `[class*="--x"]` selector.
 */
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { classify } from '../scripts/coverage/classify.mjs';
import { isSiteContext, scanText, siteKind } from '../scripts/coverage/token-sites.mjs';
import { hiddenDiagnostics } from '../scripts/coverage/ts-sites.mjs';
import { skipTs, ts } from './coverage-helpers.mjs';

/* A program of in-memory files (`/p/<name>`), and the hidden diagnostics of `file` as `line code name`. */
function hidden(files, file = 'app.tsx') {
  const options = { jsx: ts.JsxEmit.Preserve, noLib: true, types: [], strict: false };
  const lib = 'interface Array<T> { length: number } interface String {} interface Number {} interface Boolean {} interface Object {}'
    + ' interface Function {} interface RegExp {} interface IArguments {} interface CallableFunction {} interface NewableFunction {}'
    + ' type Record<K extends keyof any, T> = { [P in K]: T }; type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;'
    + ' declare namespace JSX { interface IntrinsicElements { [name: string]: any } interface Element {} }';
  const all = { ...files, 'lib.d.ts': lib };
  const read = (name) => all[name.replace(/^\/p\//, '')];
  const host = ts.createCompilerHost(options);
  host.getSourceFile = (name, lang) => (read(name) !== undefined ? ts.createSourceFile(name, read(name), lang, true) : undefined);
  host.fileExists = (name) => read(name) !== undefined;
  host.readFile = read;
  host.directoryExists = (dir) => dir === '/p' || dir === '/p/';
  host.getDirectories = () => [];
  const program = ts.createProgram({ rootNames: Object.keys(all).map((f) => `/p/${f}`), options, host });
  const sf = program.getSourceFile(`/p/${file}`);
  const own = program.getSemanticDiagnostics(sf).map((d) => ({ code: `TS${d.code}`, start: d.start, message: ts.flattenDiagnosticMessageText(d.messageText, ' ') }));
  const line = (start) => sf.getLineAndCharacterOfPosition(start).line + 1;
  return {
    own: own.map((d) => `${line(d.start)} ${d.code}`),
    hidden: hiddenDiagnostics(ts, program.getTypeChecker(), sf, own).map((d) => `${line(d.start)} ${d.code} ${d.name}`),
  };
}

const ODS = `export enum BADGE_STATUS { neutral = 'neutral' }
export interface BadgeProp { status?: BADGE_STATUS; color?: never; size?: 'sm' | 'md' }
export const Badge = (props: BadgeProp): any => props;
`;

describe('coverage bench: errors the type checker hides', { skip: skipTs }, () => {
  it('counts each use of a binding whose import is broken (spinner.stories.tsx:24)', () => {
    const { own, hidden: h } = hidden({
      'ods.ts': ODS,
      'app.tsx': `import { BADGE_COLOR, Badge } from './ods';
const VARIANTS = [
  ['success', BADGE_COLOR.success],
] as const;
type T = BADGE_COLOR;
const o = { BADGE_COLOR };
export const e = <Badge status={ VARIANTS[0][1] } />;
`,
    });
    assert.deepEqual(own, ['1 TS2305']);
    assert.deepEqual(h, ['3 unresolved-use BADGE_COLOR', '5 unresolved-use BADGE_COLOR', '6 unresolved-use BADGE_COLOR']);
  });

  it('counts a name imported (or re-exported) from a barrel whose own re-export is broken (TenantDashboard.page.tsx:8, Badge.constants.ts:3)', () => {
    const { own, hidden: h } = hidden({
      'ods.ts': ODS,
      'barrel.ts': `import { BADGE_COLOR } from './ods';\nexport { BADGE_COLOR };\n`,
      'app.tsx': `import { BADGE_COLOR } from './barrel';\nexport { BADGE_COLOR as AGAIN } from './barrel';\nexport const x = BADGE_COLOR.neutral;\n`,
    });
    assert.deepEqual(own, []); // nothing reported in the importer: the error is on the barrel's import line only
    assert.deepEqual(h, ['1 unresolved-alias BADGE_COLOR', '2 unresolved-alias BADGE_COLOR', '3 unresolved-use BADGE_COLOR']);
    assert.deepEqual(hidden({ 'ods.ts': ODS, 'barrel.ts': `import { BADGE_COLOR } from './ods';\nexport { BADGE_COLOR };\n` }, 'barrel.ts').hidden, ['2 unresolved-alias BADGE_COLOR']);
  });

  it('ignores a module that is not found (noise of both majors)', () => {
    assert.deepEqual(hidden({ 'app.tsx': `import { X } from './missing';\nexport const y = X.a;\n` }).hidden, []);
  });

  it('counts an attribute masked by another error of its element (dashboard-card index.tsx:136, popover.stories.tsx:341)', () => {
    const { own, hidden: h } = hidden({
      'ods.ts': ODS,
      'app.tsx': `import { Badge, BADGE_STATUS } from './ods';
declare const ANY: any;
export const a = <Badge
  color={ ANY }
  size="sm"
  variant={ ANY }>x</Badge>;
export const b = <Badge size="sm" variant="x" emphasis="low" />;
export const c = <Badge status={ BADGE_STATUS.neutral } size="sm" data-x="1" />;
`,
    });
    assert.deepEqual(own, ['4 TS2322', '7 TS2322']); // one error per element: `color` (any → never), then the first excess property
    assert.deepEqual(h, [
      '6 masked-attribute variant', // the excess `variant`, hidden behind the `color` error
      '7 masked-attribute emphasis', // the second excess property; `variant` is the one reported
    ]);
  });

  it('counts a prop removed by typing it never when its value passes (OperationDrawer.tsx:62, :692)', () => {
    const { own, hidden: h } = hidden({
      'ods.ts': ODS,
      'app.tsx': `import { Badge, BADGE_STATUS } from './ods';
const MAP: Record<string, Parameters<typeof Badge>[0]["color"]> = {};
export const a = <Badge color={ MAP.x } />;
export const b = <Badge status={ BADGE_STATUS.neutral } />;
`,
    });
    assert.deepEqual(own, []);
    assert.deepEqual(h, ['2 removed-prop color', '3 removed-prop color']);
  });
});

describe('coverage bench: two removed names on one line', () => {
  it('tells the fixed one from the one left by the message (spinner.stories.tsx:3)', () => {
    const msg = (n) => `Module '"@ovhcloud/ods-react"' has no exported member '${n}'.`;
    const site = (n) => ({ file: 'a.tsx', line: 1, kind: 'ts', rule: 'TS2305', message: msg(n), codes: ['TS2305'], errors: [{ line: 1, code: 'TS2305', message: msg(n) }] });
    const texts = new Map([['a.tsx', { base: "import { SPINNER_COLOR, SPINNER_COLORS } from 'o';\n", migrated: "import { SPINNER_COLORS } from 'o';\n" }]]);
    const after = [{ file: 'a.tsx', line: 1, code: 'TS2305', message: msg('SPINNER_COLORS') }];
    const out = classify({ texts, sites: [site('SPINNER_COLOR'), site('SPINNER_COLORS')], after, before: [] }).sites;
    assert.deepEqual(out.map((s) => [s.message.match(/'(\w+)'/)[1], s.outcome]), [['SPINNER_COLOR', 'auto'], ['SPINNER_COLORS', 'missed']]);
  });
});

describe('coverage bench: code shown as text, fonts, bare modifiers', { skip: skipTs }, () => {
  const set = (list = []) => new Set(list);
  const removed = {
    css: set(['--ods-theme-chart-grid-color']), scss: set(), mixin: set(), module: set(['button--ghost', 'button--default']),
    moduleV19: set(['button--ghost', 'button--default', 'button--critical', 'tab--default']), moduleV20: set(['button--critical', 'tab--default', 'button--low']),
    font: set(['Source Sans Pro']), export: set(['MESSAGE_COLOR', 'BADGE_COLOR']),
  };
  const declared20 = { css: set(), scss: set(), mixin: set(), module: set(), font: set(['Source Sans 3']) };
  const sites = (file, text) => scanText(text, removed, declared20, { file, ts }).map((o) => [o.line, o.name, isSiteContext(o.context) ? siteKind(o.kind, file) : `mention:${o.context}`]);

  it('reads the text of a <code> element as code in MDX and Markdown (charts.mdx:114)', () => {
    const text = '<table>\n  <tr>\n    <td>Grids</td>\n    <td><code>--ods-theme-chart-grid-color</code></td>\n  </tr>\n</table>\n\nThe --ods-theme-chart-grid-color token.\n';
    assert.deepEqual(sites('a.mdx', text), [[4, '--ods-theme-chart-grid-color', 'doc'], [8, '--ods-theme-chart-grid-color', 'mention:md-prose']]);
    assert.deepEqual(sites('a.md', text), [[4, '--ods-theme-chart-grid-color', 'doc'], [8, '--ods-theme-chart-grid-color', 'mention:md-prose']]);
  });

  it('counts a removed export in Markdown code and in a script string, not in script code nor prose (README.md:17, Badge.stories.tsx:15)', () => {
    assert.deepEqual(sites('README.md', 'Message variant to use: `MESSAGE_COLOR.information`\n\nUse MESSAGE_COLOR no more.\n'), [[1, 'MESSAGE_COLOR', 'doc'], [3, 'MESSAGE_COLOR', 'mention:md-prose']]);
    assert.deepEqual(sites('a.mdx', '<Message\n  color={ MESSAGE_COLOR.warning }>\n</Message>\n'), [[2, 'MESSAGE_COLOR', 'doc']]);
    // In script code (and its comments) the type checker has them: only the string counts.
    const story = "const code = `<Badge color={BADGE_COLOR.information} />`;\nconst x = BADGE_COLOR.information;\n// BADGE_COLOR\n";
    assert.deepEqual(sites('a.stories.tsx', story), [[1, 'BADGE_COLOR', 'doc']]);
  });

  it('counts a removed prop of an ODS tag in Markdown code and script strings (RIGHT_PANEL_MODERNIZATION.md:417)', () => {
    const withProps = { ...removed, prop: new Map([['Message', new Set(['color', 'variant'])]]) };
    const found = (file, text) => scanText(text, withProps, declared20, { file, ts }).map((o) => [o.line, o.name, isSiteContext(o.context) ? siteKind(o.kind, file) : `mention:${o.context}`]);
    assert.deepEqual(found('a.md', '| Error | `toast.critical(msg)` + `<Message color="critical">` |\n\nA <Message color="x"> in prose.\n'), [[1, 'Message color', 'doc'], [3, 'Message color', 'mention:md-prose']]);
    assert.deepEqual(found('a.tsx', 'const code = `<Message\n  variant="light">x</Message>`;\nexport const e = <Message color="x" />;\n'), [[2, 'Message variant', 'doc']]); // the code itself is the type checker's
  });

  it('counts a font family v20 no longer loads, unless the list names one it loads (common.module.css:2)', () => {
    assert.deepEqual(sites('a.css', ".a { font-family: 'Source Sans Pro', arial; }\n.b { font-family: 'Source Sans Pro', 'Source Sans 3'; }\n/* Source Sans Pro */\n"), [[1, 'Source Sans Pro', 'token'], [3, 'Source Sans Pro', 'mention:comment']]);
    // Another font whose name holds it: the app's own family, a local() face name.
    assert.deepEqual(sites('a.css', ".c { font-family: 'Brand Source Sans Pro', serif; }\n@font-face { src: local('Source Sans Pro Light'); }\n"), []);
  });

  it('counts a bare modifier the component of the type selector (or every component) no longer declares (tailwind.css:115, :132)', () => {
    const css = 'button[class*="--ghost"] {}\nbutton[class*="--default"][class*="--critical"] {}\ndiv[class*="--default"] {}\n[class*="--ghost"] {}\n';
    assert.deepEqual(sites('a.css', css), [[1, 'button--ghost', 'module'], [2, 'button--default', 'module'], [4, '--ghost', 'module']]);
  });
});

describe('coverage bench: outcomes', { skip: skipTs }, () => {
  it('does not call AUTO a usage whose rewrite holds a new error, and keeps AUTO for its neighbour (DnssecModal.tsx:33, App.tsx:333)', () => {
    const base = 'const c = { buttonColor: BUTTON_COLOR.information, x: BUTTON_COLOR.primary };\n<Button color={ BUTTON_COLOR.information } variant={ BUTTON_VARIANT.ghost }>i</Button>;\n';
    const migrated = 'const c = { buttonColor: /* TODO(ods-v20): BUTTON_COLOR.information has no v20 equivalent */ BUTTON_STATUS.information, x: BUTTON_STATUS.primary };\n<Button color={ BUTTON_STATUS.information } emphasis={ BUTTON_EMPHASIS.low }>i</Button>;\n';
    const span = (line, text, from = 0) => {
      const start = base.split('\n').slice(0, line - 1).join('\n').length + (line > 1 ? 1 : 0) + base.split('\n')[line - 1].indexOf(text, from);
      return [start, start + text.length];
    };
    const site = (line, code, text, from) => ({ file: 'a.tsx', line, kind: 'ts', rule: code, codes: [code], message: code, errors: [{ line, code, message: code }], span: span(line, text, from) });
    const at = (needle) => ({ file: 'a.tsx', line: migrated.slice(0, migrated.indexOf(needle)).split('\n').length, start: migrated.indexOf(needle), code: 'TS2339', message: needle });
    const out = classify({
      texts: new Map([['a.tsx', { base, migrated }]]),
      ts,
      sites: [
        site(1, 'unresolved-use', 'BUTTON_COLOR.information'),
        site(1, 'unresolved-use', 'BUTTON_COLOR.primary'),
        site(2, 'TS2322', 'color={ BUTTON_COLOR.information }'),
        site(2, 'masked-attribute', 'variant={ BUTTON_VARIANT.ghost }'),
      ],
      after: [at('information, x'), at('information }')],
      before: [],
    }).sites;
    assert.deepEqual(out.map((s) => [s.line, s.rule, s.outcome]), [
      [1, 'unresolved-use', 'marked'], // gone, but `BUTTON_STATUS.information` does not exist (the marker quoting the old code is not aligned with it)
      [1, 'unresolved-use', 'auto'],
      [2, 'TS2322', 'missed'], // its own error is gone, the new one sits in the same attribute
      [2, 'masked-attribute', 'auto'], // the regression of the `color` attribute is not this one's
    ]);
  });

  it('does not let a marker of another branch cover a site that it happens to name (Badge.stories.tsx:15)', () => {
    const removed = { css: new Set(), scss: new Set(), mixin: new Set(), module: new Set(), font: new Set(), export: new Set(['BADGE_COLOR']) };
    const scan = (file, text) => scanText(text, removed, { font: new Set() }, { file, ts }).filter((o) => isSiteContext(o.context)).map((o) => ({ ...o, kind: siteKind(o.kind, file) }));
    const base = "export const Default = {\n  args: {\n    color: BADGE_COLOR.information,\n  },\n  docs: {\n    code: `<Badge color={BADGE_COLOR.information} />`,\n  },\n};\n";
    const marked = base.replace('    color: BADGE_COLOR', '    /* TODO(ods-v20): color: this key holds BADGE_COLOR.information */ color: BADGE_STATUS');
    const sites = scan('a.tsx', base).map((o) => ({ file: 'a.tsx', line: o.line, column: o.column, kind: o.kind, rule: o.name }));
    const run = (migrated) => classify({ texts: new Map([['a.tsx', { base, migrated }]]), sites, after: [], before: [], ts, scan }).sites.map((s) => [s.line, s.outcome]);
    assert.deepEqual(run(marked), [[6, 'missed']]); // the marker of `args.color` names BADGE_COLOR but is about its own key
    assert.deepEqual(run(marked.replace('    code:', '    /* TODO(ods-v20): BADGE_COLOR in the shown code */ code:')), [[6, 'marked']]); // its own marker
    assert.deepEqual(run(marked.replace('export const', '// TODO(ods-v20): BADGE_COLOR left in the docs\nexport const')), [[6, 'marked']]); // leading the statement
  });
});
