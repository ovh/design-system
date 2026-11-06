import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { after, describe, it } from 'node:test';
import {
  alignElements, apiDiff, compareTruth, compareTruthFile, defaultsOf, normCode, parseScript, parseStyle, semValue, snippetElements, summarizeTruth,
} from '../scripts/coverage/truth.mjs';
import { skipTs, ts } from './coverage-helpers.mjs';

const skip = skipTs;

/* A tiny v19 → v20 API: Button variant/color → emphasis/status, Badge color → status (+ emphasis), Card. */
const v19 = {
  exports: ['Button', 'BUTTON_COLOR', 'BUTTON_VARIANT', 'Badge', 'BADGE_COLOR', 'Card', 'Accordion', 'Text'],
  constants: { BUTTON_COLOR: { primary: 'primary', critical: 'critical', information: 'information' }, BUTTON_VARIANT: { default: 'default', ghost: 'ghost', outline: 'outline' }, BADGE_COLOR: { primary: 'primary', neutral: 'neutral' } },
  components: {
    Button: { color: { values: ['primary', 'critical', 'information'], type: 'c' }, variant: { values: ['default', 'ghost', 'outline'], type: 'v' }, size: { values: ['sm', 'md'], type: 's' } },
    Badge: { color: { values: ['primary', 'neutral'], type: 'c' } },
    Card: { color: { values: ['primary', 'neutral'], type: 'c' } },
    Accordion: { multiple: { values: ['true', 'false'], type: 'boolean' } },
    Text: { preset: { values: ['span', 'paragraph'], type: 'p' } },
  },
  defaults: {},
};
const v20 = {
  exports: ['Button', 'BUTTON_STATUS', 'BUTTON_EMPHASIS', 'Badge', 'BADGE_STATUS', 'BADGE_EMPHASIS', 'Card', 'CARD_STATUS', 'Accordion', 'ACCORDION_EMPHASIS', 'Text'],
  constants: { BUTTON_STATUS: { brand: 'brand', critical: 'critical' }, BUTTON_EMPHASIS: { high: 'high', medium: 'medium', low: 'low' }, BADGE_STATUS: { accent: 'accent', neutral: 'neutral' }, BADGE_EMPHASIS: { high: 'high', medium: 'medium' }, CARD_STATUS: { accent: 'accent', neutral: 'neutral' }, ACCORDION_EMPHASIS: { high: 'high', medium: 'medium' } },
  components: {
    Button: { color: { values: [], type: 'never', never: true }, emphasis: { values: ['high', 'medium', 'low'], type: 'e' }, status: { values: ['brand', 'critical'], type: 's' }, size: { values: ['sm', 'md'], type: 's' } },
    Badge: { status: { values: ['accent', 'neutral'], type: 's' }, emphasis: { values: ['high', 'medium'], type: 'e' } },
    Card: { status: { values: ['accent', 'neutral'], type: 's' } },
    Accordion: { multiple: { values: ['true', 'false'], type: 'boolean' }, emphasis: { values: ['high', 'medium'], type: 'e' } },
    Text: { preset: { values: ['span', 'paragraph'], type: 'p' } },
  },
  defaults: { Button: { emphasis: 'medium', status: 'brand', size: 'md' }, Badge: { emphasis: 'medium', status: 'neutral' }, Card: { status: 'neutral' }, Accordion: { emphasis: 'medium' } },
};
const api = apiDiff(v19, v20);
const removed = { css: new Set(['--ods-color-primary-500', '--ods-theme-background-color', '--ods-z-index-overlay']), scss: new Set(), mixin: new Set() };
const names = (...list) => new Map(list.map((n) => [n, n]));
const IMPORT = "import { Badge, Button, Card, Accordion, Text } from '@ovhcloud/ods-react';\n";

function compare(original, migrated, truth, extra = {}) {
  const { items } = compareTruthFile({
    file: extra.file ?? 'a.tsx', original, migrated, truth, ts, api, removed,
    odsNames: names('Badge', 'Button', 'Card', 'Accordion', 'Text', 'BUTTON_COLOR', 'BUTTON_VARIANT', 'BUTTON_EMPHASIS', 'BUTTON_STATUS', 'BADGE_STATUS', 'ACCORDION_EMPHASIS', 'CARD_STATUS'),
    isOdsModule: (m) => m === '@ovhcloud/ods-react',
    relevant: (t) => /ods|Button|Badge|Card|Accordion|BUTTON|BADGE/.test(t),
    ...extra,
  });
  return items;
}
const differ = (items) => items.filter((x) => x.verdict === 'differ');

describe('coverage-c: value normalization', () => {
  it('normalizes code: quotes, whitespace, markers, trailing commas', () => {
    assert.equal(normCode("{ a: 'x',  b: [1, 2, ] } /* TODO(ods-v20): look */"), '{a:"x",b:[1,2]}');
  });
  it('makes a constant member and its literal the same, and unwraps {"x"}', () => {
    assert.equal(semValue('{BUTTON_STATUS.brand}'), semValue('"brand"'));
    assert.equal(semValue('{"x"}'), '"x"');
    assert.equal(semValue('{variant}'), '{variant}');
    assert.equal(semValue(null), null);
  });
});

describe('coverage-c: parsing', { skip }, () => {
  it('reads imports, re-exports and JSX attributes, and blanks them in the masked text', () => {
    const p = parseScript(ts, 'a.tsx', `import { A as B, type C } from 'm';\nexport { D } from 'n';\nconst x = <B color="p" {...rest} disabled size={ 'sm' }>Label</B>;\n`);
    assert.deepEqual(p.imports.map((s) => [s.module, s.imported, s.local, s.typeOnly, s.reexport]), [['m', 'A', 'B', false, false], ['m', 'C', 'C', true, false], ['n', 'D', 'D', false, true]]);
    assert.equal(p.elements.length, 1);
    assert.deepEqual([...p.elements[0].attrs], [['color', '"p"'], ['{...rest}', ''], ['disabled', '{true}'], ['size', '{"sm"}']]);
    assert.equal(p.elements[0].label, 'Label');
    assert.equal(p.masked.split('\n').length, 4);
    assert.match(p.masked, /const x = \s+;/); // the element, its text and closing tag are blanked
  });
  it('replaces nested JSX in an attribute value by a placeholder', () => {
    const p = parseScript(ts, 'a.tsx', 'const x = <A trigger={ <B variant="ghost" /> } />;');
    assert.equal(p.elements[0].attrs.get('trigger'), '{<B/>}');
    assert.equal(p.elements.length, 2);
  });
  it('reads CSS declarations with their selector path', () => {
    const s = parseStyle('a.scss', '.a {\n  color: red;\n  .b { --x: var(--y) !important; }\n}\n');
    assert.deepEqual(s.declarations.map((d) => [d.path, d.prop, d.value, d.line]), [['.a', 'color', 'red', 2], ['.a > .b', '--x', 'var(--y)!important', 3]]);
    assert.doesNotMatch(s.masked, /color/);
  });
  it('reads JSX written in strings', () => {
    const [e] = snippetElements('`<Button variant="ghost" size={ BUTTON_SIZE.sm }>`');
    assert.equal(e.tag, 'Button');
    assert.deepEqual([...e.attrs], [['variant', '"ghost"'], ['size', '{BUTTON_SIZE.sm}']]);
  });
  it('reads the defaults a component applies (destructuring, ?? and conditional fallbacks)', () => {
    const sf = ts.createSourceFile('b.tsx', `const B = forwardRef(({ size = SIZE.md, status = 'brand', emphasis, tone }, ref) => {
  const e = ok(emphasis) ? emphasis as E : EMPHASIS.medium;
  const t = tone ?? 'soft';
  return null;
});`, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    const decl = sf.statements[0].declarationList.declarations[0];
    assert.deepEqual(defaultsOf(ts, decl, { SIZE: { md: 'md' }, EMPHASIS: { medium: 'medium' } }), { size: 'md', status: 'brand', emphasis: 'medium', tone: 'soft' });
  });
});

describe('coverage-c: element alignment', { skip }, () => {
  it('pairs the elements a truth keeps, in order, when it drops some', () => {
    const els = (src) => parseScript(ts, 'a.tsx', src).elements;
    const a = els('<><B c="1">One</B><B c="2">Two</B><B c="3">Three</B><B c="4">Four</B></>');
    const b = els('<><B s="1">One</B><B s="3">Three</B><B s="9">Nine</B></>');
    // One ↔ One, Three ↔ Three (labels), then Nine pairs with the first element left (Four).
    assert.deepEqual([...alignElements(a, b)], [0, -1, 1, 2]);
  });
});

describe('coverage-c: compareTruthFile', { skip }, () => {
  it('agrees whatever the attribute order and quote style', () => {
    const items = compare(`${IMPORT}<Button color="critical" size="sm" />`, `${IMPORT}<Button size='sm' status="critical" />`, `${IMPORT}<Button status="critical" size="sm" />`);
    assert.equal(differ(items).length, 0);
    assert.deepEqual(items.map((x) => [x.kind, x.key, x.verdict]), [['jsx-attribute', '<Button> color', 'agree'], ['jsx-attribute', '<Button> status', 'agree']]);
  });
  it('style-only: a constant member against its literal', () => {
    const [x] = differ(compare(`${IMPORT}<Badge color="neutral" />`, `${IMPORT}<Badge status="neutral" />`, `${IMPORT}<Badge status={ BADGE_STATUS.neutral } />`));
    assert.equal(x.class, 'style-only');
  });
  it('decision: the truth adds emphasis="high" to a Button without variant (Aluminium config)', () => {
    const [x] = differ(compare(`${IMPORT}<Button>Save</Button>`, `${IMPORT}<Button>Save</Button>`, `${IMPORT}<Button emphasis={ BUTTON_EMPHASIS.high }>Save</Button>`));
    assert.deepEqual([x.class, x.look], ['decision', 'button-default-emphasis']);
  });
  it('tool-wrong: the same difference when the config asks for the v19 look', () => {
    const [x] = differ(compare(`${IMPORT}<Button>Save</Button>`, `${IMPORT}<Button>Save</Button>`, `${IMPORT}<Button emphasis="high">Save</Button>`, { look: { 'button-default-emphasis': 'v19' } }));
    assert.equal(x.class, 'tool-wrong');
  });
  it('decision: an explicit default the truth keeps and ods-migrate drops (status, emphasis="medium")', () => {
    const d = differ(compare(`${IMPORT}<Button color="primary" variant="outline" />`, `${IMPORT}<Button />`, `${IMPORT}<Button emphasis="medium" status="brand" />`));
    assert.deepEqual(d.map((x) => [x.key, x.class, x.look]), [['<Button> emphasis', 'decision', 'button-default-emphasis'], ['<Button> status', 'decision', 'drop-default']]);
  });
  it('decision: Card status="accent", Badge emphasis="high", a new v20 prop set to keep the v19 look', () => {
    const d = differ(compare(`${IMPORT}<Card /><Badge color="primary" /><Accordion />`, `${IMPORT}<Card /><Badge status="accent" /><Accordion />`, `${IMPORT}<Card status="accent" /><Badge status="accent" emphasis="high" /><Accordion emphasis="high" />`));
    assert.deepEqual(d.map((x) => x.look), ['card-default-status', 'badge-accent-filled', 'v19-look-addition']);
  });
  it('unrelated-change: an attribute the v20 API does not require to change, new and removed content', () => {
    const d = differ(compare(`${IMPORT}<Text preset="span">a</Text>\n<Button size="sm">x</Button>\n`, `${IMPORT}<Text preset="span">a</Text>\n<Button size="sm">x</Button>\n`, `${IMPORT}<Text preset="paragraph">a</Text>\n<Card>new</Card>\n<Card>new</Card>\n`));
    assert.deepEqual(d.map((x) => x.class), ['unrelated-change', 'unrelated-change', 'unrelated-change']);
    assert.equal(d.filter((x) => x.kind === 'jsx-attribute').length, 1); // Text preset
    assert.ok(d.some((x) => x.kind === 'jsx-element' && /removed/.test(x.reason))); // the Button
    assert.ok(d.some((x) => x.kind === 'jsx-element' && /and 1 more/.test(x.key))); // one block of new content
  });
  it('tool-wrong: a removed prop left as is, and its counterpart the truth adds', () => {
    const d = differ(compare(`${IMPORT}<Badge color="primary" />`, `${IMPORT}<Badge color="primary" />`, `${IMPORT}<Badge status="accent" />`));
    assert.deepEqual(d.map((x) => [x.key, x.class]), [['<Badge> color', 'tool-wrong'], ['<Badge> status', 'tool-wrong']]);
    assert.match(d[1].reason, /counterpart of color/);
  });
  it('tool-wrong: ods-migrate wrote another value; flagged when under a marker', () => {
    const [x] = differ(compare(`${IMPORT}<Button color="information" />`, `${IMPORT}<Button /* TODO(ods-v20): check */ color="information" />`, `${IMPORT}<Button status="brand" />`).filter((i) => i.key.endsWith('status')));
    assert.equal(x.class, 'tool-wrong');
    assert.equal(x.marked, true);
  });
  it('a removed element whose ods-migrate output has a new v20 error is tool-wrong', () => {
    const src = `${IMPORT}<Button color={ BUTTON_COLOR.information } />\n`;
    const out = `${IMPORT}<Button color={ BUTTON_STATUS.information } />\n`;
    assert.equal(differ(compare(src, out, IMPORT))[0].class, 'unrelated-change');
    assert.equal(differ(compare(src, out, IMPORT, { regressionLines: [2] }))[0].class, 'tool-wrong');
  });
  it('import specifiers follow the class of the code that uses them; an unused one left is style-only', () => {
    const d = differ(compare(
      "import { Button, BUTTON_COLOR } from '@ovhcloud/ods-react';\n<Button>a</Button>",
      "import { Button, BUTTON_COLOR } from '@ovhcloud/ods-react';\n<Button>a</Button>",
      "import { Button, BUTTON_EMPHASIS } from '@ovhcloud/ods-react';\n<Button emphasis={ BUTTON_EMPHASIS.high }>a</Button>",
    ));
    const by = Object.fromEntries(d.map((x) => [x.key, x.class]));
    assert.equal(by['BUTTON_EMPHASIS from "@ovhcloud/ods-react"'], 'decision');
    assert.equal(by['BUTTON_COLOR from "@ovhcloud/ods-react"'], 'tool-wrong'); // not exported in v20
    const [unused] = differ(compare("import { Button, Text } from '@ovhcloud/ods-react';\n<Button>a</Button>", "import { Button, Text } from '@ovhcloud/ods-react';\n<Button>a</Button>", "import { Button } from '@ovhcloud/ods-react';\n<Button>a</Button>"));
    assert.deepEqual([unused.kind, unused.class], ['import-specifier', 'style-only']);
  });
  it('compares CSS by declaration: order-insensitive, page-background decision, unrelated edits', () => {
    const o = 'body {\n  color: red;\n  background: var(--ods-theme-background-color);\n}\n.a { margin: 0; }\n';
    const m = 'body {\n  color: red;\n  background: var(--ods-semantic-color-surface-page);\n}\n.a { margin: 0; }\n';
    const t = 'body {\n  background: var(--ods-semantic-color-surface-raised);\n  color: red;\n}\n.a { margin: 1px; color: var(--ods-x); }\n';
    const items = compare(o, m, t, { file: 'a.scss' });
    assert.deepEqual(differ(items).map((x) => [x.key, x.class, x.look]), [['body { background }', 'decision', 'page-background'], ['.a { color }', 'unrelated-change', undefined]]);
    assert.equal(items.find((x) => x.key === 'body { color }'), undefined); // moved, unchanged
  });
  it('a CSS declaration with a removed token that ods-migrate left is tool-wrong', () => {
    const [x] = differ(compare('.a { color: var(--ods-color-primary-500); }\n', '.a { color: var(--ods-color-primary-500); }\n', '.a { color: var(--ods-semantic-color-x); }\n', { file: 'a.css' }));
    assert.equal(x.class, 'tool-wrong');
  });
  it('snippets in strings: attribute by attribute (decision, or a removed prop left)', () => {
    const o = 'const s = `<Button>Save</Button>`;\nconst t = `<Badge color="primary" />`;\n';
    const t = 'const s = `<Button emphasis="high">Save</Button>`;\nconst t = `<Badge status="accent" />`;\n';
    const d = differ(compare(o, o, t, { file: 'b.ts' }));
    assert.deepEqual(d.map((x) => [x.kind, x.class]), [['line', 'decision'], ['line', 'tool-wrong']]);
  });
  it('z-index computed from a token: the truth rewrite is a decision', () => {
    const o = 'const s = { zIndex: "calc(var(--ods-z-index-overlay) + 1)" };\n';
    const t = 'const s = { zIndex: "calc(var(--ods-semantic-z-index-dropdown) + 1)" };\n';
    const [x] = differ(compare(o, o, t, { file: 'c.ts' }));
    assert.deepEqual([x.class, x.look], ['decision', 'z-index']);
  });
  it('a local constant named like a removed ODS export is not the export (the truth keeps it: tool-wrong)', () => {
    const o = "import { Badge } from '@ovhcloud/ods-react';\nconst BUTTON_COLOR = { primary: 'mine' };\nexport const x = BUTTON_COLOR.primary;\n";
    const m = "import { Badge } from '@ovhcloud/ods-react';\nconst BUTTON_STATUS = { primary: 'mine' };\nexport const x = BUTTON_STATUS.brand;\n";
    const d = differ(compare(o, m, o, { file: 'l.ts' }));
    assert.deepEqual(d.map((x) => [x.verdict, x.class]), [['differ', 'tool-wrong'], ['differ', 'tool-wrong']]);
  });
  it('the truth that left a removed token as is gives no truth for the item', () => {
    const [x] = compare('.a { color: var(--ods-color-primary-500); }\n', '.a { color: var(--ods-semantic-color-x); }\n', '.a { color: var(--ods-color-primary-500); }\n', { file: 'a.css' });
    assert.deepEqual([x.verdict, x.excludedBy], ['excluded', 'stale-truth']);
  });
  it('excludes the items on lines the truth does not cover', () => {
    const items = compare(`${IMPORT}<Badge color="primary" />`, `${IMPORT}<Badge status="accent" />`, `${IMPORT}<Badge color="primary" />`, { exclude: [[2, 2]] });
    assert.deepEqual(items.map((x) => x.verdict), ['excluded', 'excluded']);
  });
  it('ignores the changes that do not touch ODS', () => {
    const r = compareTruthFile({ file: 'd.tsx', original: '<div a="1" />', migrated: '<div a="1" />', truth: '<div a="2" />', ts, relevant: () => false });
    assert.deepEqual([r.items.length, r.ignored], [0, 1]);
  });
});

describe('coverage-c: summary and the harness step', { skip }, () => {
  const work = mkdtempSync(join(tmpdir(), 'ods-truth-'));
  after(() => rmSync(work, { force: true, recursive: true }));
  it('counts by verdict, class, kind and look', () => {
    const s = summarizeTruth([
      { kind: 'line', verdict: 'agree' },
      { kind: 'line', verdict: 'differ', class: 'tool-wrong', marked: true },
      { kind: 'jsx-attribute', verdict: 'differ', class: 'decision', look: 'drop-default' },
      { kind: 'jsx-attribute', verdict: 'excluded' },
    ], 3);
    assert.deepEqual([s.items, s.agree, s.differ, s.excluded, s.ignored, s.toolWrongMarked], [4, 1, 2, 1, 3, 1]);
    assert.deepEqual(s.byClass, { 'tool-wrong': 1, decision: 1, 'unrelated-change': 0, 'style-only': 0 });
    assert.deepEqual(s.byLook, { 'drop-default': 1 });
  });
  it('compares a truth folder, honours its sidecar and gives each site a verdict', () => {
    const write = (root, rel, text) => {
      mkdirSync(dirname(join(work, root, rel)), { recursive: true });
      writeFileSync(join(work, root, rel), text);
    };
    write('base', 'a.tsx', `${IMPORT}<Badge color="primary" />\n<Button color="critical" />\n`);
    write('migrated', 'a.tsx', `${IMPORT}<Badge status="accent" />\n<Button color="critical" />\n`);
    write('truth', 'a.tsx', `${IMPORT}<Badge status="accent" />\n<Button status="critical" />\n`);
    write('truth', 'extra.tsx', 'x');
    write('truth', '.ods-truth.json', JSON.stringify({ files: { 'a.tsx': { exclude: [[3, 3]] } } }));
    const sites = [{ file: 'a.tsx', line: 2 }, { file: 'a.tsx', line: 3 }, { file: 'b.tsx', line: 1 }];
    const t = compareTruth({ ts, truthRoot: join(work, 'truth'), base: join(work, 'base'), migrated: join(work, 'migrated'), sites, packages: () => ({ list: ['@ovhcloud/ods-react'], entries: null }), api, removed, choiceIds: ['button-default-emphasis'] });
    assert.deepEqual(sites.map((s) => s.truth), ['agree', 'excluded', undefined]);
    assert.deepEqual([t.agree, t.differ, t.excluded, t.sitesWithoutTruth], [2, 0, 2, 1]);
    assert.deepEqual(t.unmatched, ['extra.tsx']);
    assert.ok(t.lookIdsMissing.includes('card-default-status'));
    assert.equal(typeof t.legacy.differ, 'number');
  });
});
