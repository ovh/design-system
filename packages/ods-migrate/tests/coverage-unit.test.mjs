import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { classify, summarize } from '../scripts/coverage/classify.mjs';
import { alignLines, newToOldRange, oldToNewRange } from '../scripts/coverage/linemap.mjs';
import { countName, removedNames, scanText } from '../scripts/coverage/token-sites.mjs';
import { compareFile, normalize } from '../scripts/coverage/truth.mjs';

const names = (css = [], scss = [], mixin = []) => ({ css: new Set(css), scss: new Set(scss), mixin: new Set(mixin) });

describe('coverage: line alignment', () => {
  it('maps kept lines, in-place edits line by line, and other hunks as a whole', () => {
    const align = alignLines(['a', 'b', 'c', 'd'], ['a', 'B', 'x', 'y', 'c', 'D']);
    assert.deepEqual(oldToNewRange(align, 0), [0, 1]);
    assert.deepEqual(oldToNewRange(align, 1), [1, 4]); // b → B, x, y
    assert.deepEqual(oldToNewRange(align, 2), [4, 5]);
    assert.deepEqual(oldToNewRange(align, 3), [5, 6]); // d → D, in place
    assert.deepEqual(newToOldRange(align, 2), [1, 2]);
  });

  it('maps a deleted line to an empty range and an inserted line to none', () => {
    const align = alignLines(['a', 'b', 'c'], ['a', 'TODO', 'c']);
    assert.deepEqual(oldToNewRange(align, 1), [1, 2]);
    const del = alignLines(['a', 'b', 'c'], ['a', 'c']);
    assert.deepEqual(oldToNewRange(del, 1), [1, 1]);
    const ins = alignLines(['a', 'c'], ['a', 'm', 'c']);
    assert.deepEqual(newToOldRange(ins, 1), [1, 1]);
  });
});

describe('coverage: token sites', () => {
  const removed = removedNames(names(['--ods-color-primary-500', '--ods-theme-x'], ['$ods-button-size-md'], ['ods-old']), names(['--ods-theme-kept'], [], []));
  const declared20 = names(['--ods-theme-kept'], [], []);

  it('finds every removed name with its kind, and leaves the kept and unknown ones', () => {
    const text = `.a { color: var(--ods-color-primary-500); width: $ods-button-size-md; }
.b { color: var(--ods-theme-kept); @include ods-old(); @include style.ods-old; }
const c = 'var(--ods-color-primary-5000)';`;
    const sites = scanText(text, removed, declared20);
    assert.deepEqual(sites.map((s) => [s.line, s.name, s.kind]), [
      [1, '--ods-color-primary-500', 'css'],
      [1, '$ods-button-size-md', 'scss'],
      [2, 'ods-old', 'mixin'],
      [2, 'ods-old', 'mixin'],
    ]);
  });

  it('reports a name built at runtime only when every name it can complete to is removed', () => {
    assert.deepEqual(scanText('`var(--ods-color-${x})`', removed, declared20).map((s) => s.kind), ['dynamic']);
    assert.deepEqual(scanText('`var(--ods-theme-${x})`', removed, declared20), []);
  });

  it('counts a name with word boundaries', () => {
    assert.equal(countName('var(--ods-a) var(--ods-a-b) x--ods-a', '--ods-a'), 1);
    assert.equal(countName('style.$ods-x + $ods-x', '$ods-x'), 2);
    assert.equal(countName('`--ods-color-${a}` --ods-color-b', '--ods-color-${…}'), 1);
  });
});

describe('coverage: classification', () => {
  const base = `import { A } from '@ovhcloud/ods-react';
<A color="x" />
<A color={y} />
.c { color: var(--ods-old); }
.d { color: var(--ods-old); }
const L = { p: 1 }; L.p;`;
  const migrated = `import { A } from '@ovhcloud/ods-react';
<A status="x" />
<A /* TODO(ods-v20): --ods-old */ color={y} />
.c { color: var(--ods-new); }
.d { color: var(--ods-old); }
const L = { p: 1 }; L.q;`;
  const texts = new Map([['f.tsx', { base, migrated }]]);
  const sites = [
    { file: 'f.tsx', line: 2, kind: 'ts', rule: 'TS2322' },
    { file: 'f.tsx', line: 3, kind: 'ts', rule: 'TS2322' },
    { file: 'f.tsx', line: 4, kind: 'token', rule: '--ods-old' },
    { file: 'f.tsx', line: 5, kind: 'token', rule: '--ods-old' },
  ];
  const before = [
    { file: 'f.tsx', line: 2, code: 'TS2322', message: '' },
    { file: 'f.tsx', line: 3, code: 'TS2322', message: '' },
  ];
  const after = [
    { file: 'f.tsx', line: 3, code: 'TS2322', message: '' },
    { file: 'f.tsx', line: 6, code: 'TS2339', message: 'q' },
  ];

  it('says AUTO, MARKED, MISSED and finds the regressions', () => {
    const result = classify({ texts, sites, after, before });
    assert.deepEqual(result.sites.map((s) => [s.line, s.outcome]), [[2, 'auto'], [3, 'marked'], [4, 'auto'], [5, 'marked']]);
    assert.deepEqual(result.regressions.map((r) => [r.line, r.code]), [[6, 'TS2339']]);
    assert.deepEqual(summarize(result.sites, result.regressions), { sites: 4, auto: 2, marked: 2, missed: 0, regressions: 1, regressionsUnderMarker: 1, autoPct: 50, assistedPct: 100 });
  });

  it('a token named only inside a marker comment is gone', () => {
    const texts1 = new Map([['h.css', { base: '.c { color: var(--ods-old); }', migrated: '/* TODO(ods-v20): --ods-old: check */ .c { color: var(--ods-new); }' }]]);
    const result = classify({ texts: texts1, sites: [{ file: 'h.css', line: 1, kind: 'token', rule: '--ods-old' }], after: [], before: [] });
    assert.equal(result.sites[0].outcome, 'auto');
  });

  it('a site still present without a marker within 3 lines is MISSED', () => {
    const far = { base: `${'\n'.repeat(10)}.d { color: var(--ods-old); }`, migrated: `/* TODO(ods-v20): x */${'\n'.repeat(10)}.d { color: var(--ods-old); }` };
    const result = classify({ texts: new Map([['g.css', far]]), sites: [{ file: 'g.css', line: 11, kind: 'token', rule: '--ods-old' }], after: [], before: [] });
    assert.equal(result.sites[0].outcome, 'missed');
  });
});

describe('coverage: truth comparison', () => {
  it('normalizes markers, imports, quotes and whitespace', () => {
    const a = normalize(`import {B,A} from "x";\n/* TODO(ods-v20): m */ <A  color='1' />\n\n`);
    const b = normalize(`import { A,\n  B } from 'x'\n<A color="1"/>`);
    assert.deepEqual(a.map((l) => l.text), b.map((l) => l.text));
    assert.deepEqual(a.map((l) => l.line), [1, 2]);
  });

  it('agrees on the same rewrite, differs on another one, and ignores regions without ODS', () => {
    const original = `import { A } from '@ovhcloud/ods-react';\n<A color="p" />\n<A color={c} />\nconst k = 1;`;
    const migrated = `import { A } from '@ovhcloud/ods-react';\n<A status="p" />\n<A /* TODO(ods-v20): x */ color={c} />\nconst k = 2;`;
    const truth = `import { A } from '@ovhcloud/ods-react';\n<A status="p" />\n<A />\nconst k = 3;`;
    const regions = compareFile({ original, migrated, truth, relevant: (t) => /\bA\b/.test(t) });
    assert.deepEqual(regions.map((r) => [r.lines, r.verdict]), [[[2, 2], 'agree'], [[3, 3], 'differ']]);
    assert.equal(regions[1].migrated, '<A color={c}/>');
  });
});
