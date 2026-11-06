import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { classify, markerIndex } from '../scripts/coverage/classify.mjs';
import { isSiteContext, scanText, siteKind } from '../scripts/coverage/token-sites.mjs';
import { names, skipTs, ts } from './coverage-b-helpers.mjs';

const T = '--ods-color-primary-500';
const U = '--ods-color-neutral-100';
const removed = names({ css: [T, U] });
const scan = (file, text) => scanText(text, removed, names(), { file, ts }).filter((o) => isSiteContext(o.context)).map((o) => ({ ...o, kind: siteKind(o.kind) }));

/* Token sites of `base`, classified against `migrated`. */
function tokens(file, base, migrated) {
  const sites = scan(file, base).map((o) => ({ file, line: o.line, column: o.column, kind: o.kind, rule: o.name }));
  return classify({ texts: new Map([[file, { base, migrated }]]), sites, after: [], before: [], ts, scan }).sites.map((s) => [s.line, s.rule, s.outcome]);
}

const lineOf = (text, needle) => text.slice(0, text.indexOf(needle)).split('\n').length;

describe('coverage-b: marker attribution by construct (scripts)', { skip: skipTs }, () => {
  it('a marker leading a JSX attribute counts however far the value goes; a marker of another element does not', () => {
    const base = `const A = () => (
  <>
    <Box
      className="x"
      style={{
        a: 1,
        b: 2,
        color: 'var(${T})',
      }}
    />
    <Box style={{ color: 'var(${U})' }} />
  </>
);`;
    const migrated = base.replace('      style={{', `      /* TODO(ods-v20): ${T}: pick a role */\n      style={{`).replace('    <Box className', '    <Box className');
    assert.deepEqual(tokens('a.tsx', base, migrated), [[8, T, 'marked'], [11, U, 'missed']]);
  });

  it('a marker on a sibling property does not cover the next one unless it names it', () => {
    const base = `const s = {\n  a: 'var(${U})',\n  b: 'var(${T})',\n};`;
    const sibling = `const s = {\n  /* TODO(ods-v20): ${U}: x */ a: 'var(${U})',\n  b: 'var(${T})',\n};`;
    assert.deepEqual(tokens('a.ts', base, sibling), [[2, U, 'marked'], [3, T, 'missed']]);
    const naming = `const s = {\n  /* TODO(ods-v20): ${U} and ${T}: x */ a: 'var(${U})',\n  b: 'var(${T})',\n};`;
    assert.deepEqual(tokens('a.ts', base, naming), [[2, U, 'marked'], [3, T, 'marked']]);
  });

  it('a marker leading a statement covers the sites it names, and every site when it names nothing', () => {
    const body = `const s = {\n  a: 1,\n  b: 2,\n  c: 3,\n  d: 'var(${T})',\n  e: 'var(${U})',\n};`;
    assert.deepEqual(tokens('a.ts', body, `// TODO(ods-v20): ${T}: x\n${body}`), [[5, T, 'marked'], [6, U, 'missed']]);
    assert.deepEqual(tokens('a.ts', body, `// TODO(ods-v20): check this stacking\n${body}`), [[5, T, 'marked'], [6, U, 'marked']]);
  });

  it('a `{/* TODO */}` child right before a JSX element marks its attributes', () => {
    const base = `const A = () => (\n  <div>\n    <Box style={{ color: 'var(${T})' }} />\n  </div>\n);`;
    const migrated = base.replace('    <Box', `    {/* TODO(ods-v20): ${T} */}\n    <Box`);
    assert.deepEqual(tokens('a.tsx', base, migrated), [[3, T, 'marked']]);
  });

  it('a name moved into a comment (or only named by the marker) is gone: AUTO', () => {
    const base = `const a = 'var(${T})';`;
    assert.deepEqual(tokens('a.ts', base, `const a = 'var(--ods-new)'; // was ${T}`), [[1, T, 'auto']]);
  });

  it('a marker attached to an import counts for the usages it names, and only those', () => {
    const base = `import { BUTTON_COLOR, BUTTON_SIZE } from '@ovhcloud/ods-react';\n\n\n\n\nconst a = <Button color={BUTTON_COLOR.success} size={BUTTON_SIZE.xl} />;`;
    const migrated = base.replace('import', '// TODO(ods-v20): BUTTON_COLOR has no v20 equivalent\nimport');
    const at = (needle) => ({ file: 'a.tsx', line: lineOf(migrated, needle), start: migrated.indexOf(needle), code: 'TS2339', message: '' });
    const after = [at('success'), at('xl')];
    const sites = [
      { file: 'a.tsx', line: lineOf(base, 'success'), kind: 'ts', rule: 'TS2339' },
      { file: 'a.tsx', line: lineOf(base, 'xl'), kind: 'ts', rule: 'TS2339' },
    ];
    const before = sites.map((s) => ({ file: 'a.tsx', line: s.line, code: 'TS2339', message: '' }));
    const result = classify({ texts: new Map([['a.tsx', { base, migrated }]]), sites, after, before, ts, scan });
    // Both sites are on one line: the first still-present error goes to the first site.
    assert.deepEqual(result.sites.map((s) => s.outcome), ['marked', 'missed']);
  });

  it('a site in the import declaration counts a generic import marker', () => {
    const base = `import { MODAL_COLOR } from '@ovhcloud/ods-react';`;
    const migrated = `/* TODO(ods-v20): has no v20 equivalent */ import { MODAL_COLOR } from '@ovhcloud/ods-react';`;
    const after = [{ file: 'a.ts', line: 1, start: migrated.indexOf('MODAL_COLOR'), code: 'TS2305', message: '' }];
    const result = classify({ texts: new Map([['a.ts', { base, migrated }]]), sites: [{ file: 'a.ts', line: 1, kind: 'ts', rule: 'TS2305' }], after, before: [], ts, scan });
    assert.equal(result.sites[0].outcome, 'marked');
  });

  it('matches type sites with diagnostics of the same kind only (ts vs snippet)', () => {
    const base = "const s = { imports: `import { BUTTON_COLOR } from '@ovhcloud/ods-react';` };";
    const migrated = base;
    const snippetError = { file: 'a.ts', line: 1, start: base.indexOf('BUTTON_COLOR'), code: 'TS2305', message: '', kind: 'snippet' };
    const sites = [{ file: 'a.ts', line: 1, kind: 'snippet', rule: 'TS2305' }, { file: 'a.ts', line: 1, kind: 'ts', rule: 'TS2305' }];
    const result = classify({ texts: new Map([['a.ts', { base, migrated }]]), sites, after: [snippetError], before: [snippetError], ts, scan });
    assert.deepEqual(result.sites.map((s) => [s.kind, s.outcome]), [['snippet', 'missed'], ['ts', 'auto']]);
    assert.equal(result.regressions.length, 0);
  });

  it('a regression is under a marker when the marker is attached to its construct', () => {
    const base = `const a = <Button color="primary" />;\n\n\n\nconst b = <Button color="primary" />;`;
    const migrated = `const a = <Button /* TODO(ods-v20): color: x */ status="primary" />;\n\n\n\nconst b = <Button status="x" />;`;
    const after = ['status="primary"', 'status="x"'].map((n) => ({ file: 'a.tsx', line: lineOf(migrated, n), start: migrated.indexOf(n), code: 'TS2322', message: '' }));
    const result = classify({ texts: new Map([['a.tsx', { base, migrated }]]), sites: [], after, before: [], ts, scan });
    assert.deepEqual(result.regressions.map((r) => [r.line, r.underMarker]), [[1, true], [5, false]]);
  });
});

describe('coverage-b: marker attribution by construct (stylesheets, Markdown)', { skip: skipTs }, () => {
  it('a marker before a multi-line declaration covers its value; one in another declaration nearby does not', () => {
    const base = `.a {\n  box-shadow:\n    0 0 0 1px red,\n    0 0 0 2px blue,\n    0 0 0 3px var(${T});\n  color: var(${U});\n}`;
    const migrated = base.replace('  box-shadow:', `  /* TODO(ods-v20): ${T}: pick */\n  box-shadow:`).replace(`  color: var(${U});`, `  color: var(${U});`);
    assert.deepEqual(tokens('a.scss', base, migrated), [[5, T, 'marked'], [6, U, 'missed']]);
  });

  it('a marker that names one token does not cover another token of the same value; a generic one does', () => {
    const base = `.a {\n  background: linear-gradient(\n    var(${T}),\n    var(${U})\n  );\n}`;
    const named = base.replace('  background:', `  /* TODO(ods-v20): ${T}: pick */\n  background:`);
    assert.deepEqual(tokens('a.css', base, named), [[3, T, 'marked'], [4, U, 'missed']]);
    const generic = base.replace('  background:', '  /* TODO(ods-v20): check this gradient */\n  background:');
    assert.deepEqual(tokens('a.css', base, generic), [[3, T, 'marked'], [4, U, 'marked']]);
    const js = `const a = fn(\n  'var(${T})',\n  'var(${U})',\n);`;
    assert.deepEqual(tokens('a.ts', js, `const a = fn(/* TODO(ods-v20): ${T} */\n  'var(${T})',\n  'var(${U})',\n);`), [[2, T, 'marked'], [3, U, 'missed']]);
  });

  it('a marker on the rule counts for the declarations it names', () => {
    const base = `.a {\n  x: 1;\n  y: 2;\n  z: 3;\n  color: var(${T});\n  background: var(${U});\n}`;
    const migrated = `/* TODO(ods-v20): ${T}: pick */\n${base}`;
    assert.deepEqual(tokens('a.css', base, migrated), [[5, T, 'marked'], [6, U, 'missed']]);
  });

  it('a trailing marker on the line of a declaration counts', () => {
    const base = `.a {\n  color: var(${T});\n}`;
    assert.deepEqual(tokens('a.css', base, base.replace(');', `); /* TODO(ods-v20): ${T} */`)), [[2, T, 'marked']]);
  });

  it('Markdown: a fence is read in its language; inline code uses the comment lines right above', () => {
    const base = `Use \`${T}\`.\n\n\`\`\`css\n.a {\n  color: var(${U});\n}\n\`\`\``;
    const migrated = `<!-- TODO(ods-v20): ${T} -->\nUse \`${T}\`.\n\n\`\`\`css\n/* TODO(ods-v20): ${U} */\n.a {\n  color: var(${U});\n}\n\`\`\``;
    assert.deepEqual(tokens('a.md', base, migrated), [[1, T, 'marked'], [5, U, 'marked']]);
  });

  it('markerIndex lists only TODO(ods-v20) comments, not strings', () => {
    const index = markerIndex('a.ts', "const a = 'TODO(ods-v20)'; // TODO(ods-v20): x\n", ts);
    assert.equal(index.markers.length, 1);
  });
});
