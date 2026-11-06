/*
 * Coverage harness, the TypeScript sites (scripts/coverage/ts-sites.mjs): what uses ODS is decided by
 * the v19 checker (barrels, re-exports, aliases, package.json imports, workspace packages, wrappers),
 * one site per API usage, regressions net of what the unmigrated code already had.
 * Fixture: tests/fixtures/coverage-a — two tiny ODS surfaces (v19 BUTTON_COLOR / color, v20
 * BUTTON_STATUS / status) and the monorepo of coverage-a-project.test.mjs. No git ref, no install.
 */
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import { classify } from '../scripts/coverage/classify.mjs';
import { listFiles, loadProject } from '../scripts/coverage/project.mjs';
import { compilerOptions, pinnedSpecifiers } from '../scripts/coverage/surfaces.mjs';
import { anchorOf, checkProgram, groupSites, odsSymbols, unionDiagnostics } from '../scripts/coverage/ts-sites.mjs';
import { skipTs, ts } from './coverage-helpers.mjs';

const FIXTURE = fileURLToPath(new URL('./fixtures/coverage-a/', import.meta.url));
const PROJECT = join(FIXTURE, 'project');

const noTs = skipTs;

const surface = (v) => ({ root: join(FIXTURE, 'surfaces', v), src: join(FIXTURE, 'surfaces', v, 'packages/ods-react/src'), themes: join(FIXTURE, 'surfaces', v, 'packages/themes/src') });
const optionsOf = (s) => compilerOptions(ts, s, { reactTypes: join(FIXTURE, 'react'), reactDomTypes: join(FIXTURE, 'react') });
const at = (list) => list.map((d) => `${d.file}:${d.line} ${d.code ?? d.rule}`);

/* The harness steps on the fixture: v20 then v19 (attributing the v20 errors), as runCoverage does. */
function detect({ withProject = true } = {}) {
  const s19 = surface('v19');
  const s20 = surface('v20');
  const project = withProject ? loadProject(ts, PROJECT, { pinned: pinnedSpecifiers(optionsOf(s20)) }) : undefined;
  const files = listFiles(PROJECT, (name) => /\.tsx?$/.test(name));
  const v20 = checkProgram(ts, { files, options: optionsOf(s20), surface: s20, root: PROJECT, project });
  const v19 = checkProgram(ts, { files, options: optionsOf(s19), surface: s19, root: PROJECT, project, attribute: { diagnostics: v20.diagnostics } });
  const noise = new Set(v19.diagnostics.map((d) => `${d.file}:${d.line}:${d.code}`));
  const ods = v20.diagnostics.filter((d) => d.ods && !noise.has(`${d.file}:${d.line}:${d.code}`));
  return { project, v19, v20, ods, sites: groupSites(ods) };
}

describe('coverage ts: what uses ODS, from the v19 checker', { skip: noTs }, () => {
  const run = ts && detect();

  it('finds the errors reached through a barrel, an alias, package.json imports, a workspace package and a wrapper', () => {
    assert.deepEqual(at(run.v19.diagnostics), []); // the corpus compiles against v19: every module resolves
    assert.deepEqual(at(run.sites), [
      'apps/app/src/App.tsx:3 TS2305', // `BUTTON_COLOR` from '~/ods-direct' (tsconfig.app.json alias → relative barrel → kit → ODS)
      'apps/app/src/App.tsx:5 TS2322', // `color=` on Button imported from '#ods' (package.json imports)
      'apps/app/src/App.tsx:6 TS2322', // `color=` on Wrapper, whose props extend ButtonProp: no ODS name on the line
      'apps/app/src/App.tsx:7 unresolved-use', // `BUTTON_COLOR.critical`: the import is broken, so the use is `any` and reports nothing
      'apps/app/src/ods.ts:1 TS2305', // the re-export line itself: `export { BUTTON_COLOR as COLORS } from '@acme/kit'`
      'apps/legacy/src/legacy.ts:1 TS2305', // a site, but out of scope (ODS 18 package): see below
      'apps/legacy/src/legacy.ts:3 unresolved-use',
    ]);
    // `COLORS` (App.tsx:1, :5) is a corpus alias of the removed export: fixing ods.ts fixes it, so its broken binding is no site.
    assert.deepEqual(at(run.v20.diagnostics.filter((d) => d.code === 'unresolved-alias')), ['apps/app/src/App.tsx:1 unresolved-alias']);
    assert.equal(run.v20.diagnostics.find((d) => d.code === 'unresolved-alias').ods, false);
    // Not ODS: only the broken `COLORS` binding (its import, and its use inside `color=`, which the attribute site holds anyway).
    assert.deepEqual(at(run.v20.diagnostics.filter((d) => !d.ods)), ['apps/app/src/App.tsx:1 unresolved-alias', 'apps/app/src/App.tsx:5 unresolved-use']);
  });

  it('keeps only the packages on ODS 19', () => {
    assert.deepEqual(at(run.sites.filter((s) => run.project.scopeOf(s.file).inScope)).length, 5);
    assert.equal(run.project.scopeOf('apps/legacy/src/legacy.ts').status, 'other-ods');
  });

  it('records, per file, the local names bound to ODS and the corpus modules standing for it', () => {
    const p = run.v19.analysis.packagesFor('apps/app/src/App.tsx');
    assert.deepEqual([...p.names], [['COLORS', 'BUTTON_COLOR'], ['Button', 'Button'], ['BUTTON_COLOR', 'BUTTON_COLOR']]);
    assert.deepEqual([...p.specifiers].sort(), ['#ods', '~/ods-direct']); // not '@acme/kit': Wrapper is the kit's own
    assert.deepEqual(run.v19.analysis.stats(), { files: 6, throughCorpusModules: 3, corpusModuleSpecifiers: 4 });
  });

  it('reads a later version of a file with the names of both surfaces', () => {
    const { analysis } = run.v19;
    analysis.addExportNames(run.v20.exportNames);
    const migrated = ts.createSourceFile('App.tsx', "import { BUTTON_STATUS, helper } from '#ods';\n", ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    const { names, pkg } = odsSymbols(ts, migrated, () => analysis.packagesFor('apps/app/src/App.tsx'));
    assert.equal(names.get('BUTTON_STATUS'), 'BUTTON_STATUS'); // a v20 name, from a module standing for ODS
    assert.equal(names.has('helper'), false); // not an ODS name
    assert.equal(pkg.test("from '#ods'"), true);
    assert.equal(pkg.test('#odsx'), false);
  });

  it('misses most of them without the tsconfig and workspace resolution (what the harness did before)', () => {
    const before = detect({ withProject: false });
    // '~/ods-direct', '#ods' targets and '@acme/kit' do not resolve: errors in both majors, removed as noise.
    assert.ok(before.v19.diagnostics.length > 0);
    assert.deepEqual(at(before.sites), ['apps/legacy/src/legacy.ts:1 TS2305', 'apps/legacy/src/legacy.ts:3 unresolved-use']);
  });
});

describe('coverage ts: one site per API usage', { skip: noTs }, () => {
  const parse = (text) => ts.createSourceFile('a.tsx', text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);

  it('anchors an error to its specifier, attribute, element, or its own position', () => {
    const text = `import { A, B } from 'x';
export const e = <C p={ 1 } q="2" onClick={ () => { f(); } } />;
g();
`;
    const sf = parse(text);
    const pos = (s, nth = 0) => text.split(s, nth + 1).join(s).length;
    assert.equal(anchorOf(ts, sf, pos('B')), `specifier@${pos('B')}`);
    assert.equal(anchorOf(ts, sf, pos("'x'")), `module@0`);
    assert.equal(anchorOf(ts, sf, pos('1')), `attribute@${pos('p=')}`);
    assert.equal(anchorOf(ts, sf, pos('q=')), `attribute@${pos('q=')}`);
    assert.equal(anchorOf(ts, sf, pos('C')), `element@${pos('<C')}`);
    assert.equal(anchorOf(ts, sf, pos('f()')), `position@${pos('f()')}`); // inside a callback: its own site
    assert.equal(anchorOf(ts, sf, pos('g()')), `position@${pos('g()')}`);
  });

  it('groups the errors of one anchor, keeps every code, and leaves different anchors apart', () => {
    const d = (line, code, start, anchor) => ({ file: 'a.tsx', line, code, start, anchor, message: code });
    const sites = groupSites([
      d(3, 'TS2769', 50, 'attribute@40'),
      d(3, 'TS2322', 41, 'attribute@40'),
      d(3, 'TS2322', 60, 'attribute@58'),
      d(1, 'TS2305', 9, 'specifier@9'),
      d(1, 'TS2305', 9, 'specifier@9'),
    ]);
    assert.deepEqual(sites.map((s) => [s.line, s.rule, s.codes, s.errors.length]), [
      [1, 'TS2305', ['TS2305'], 2],
      [3, 'TS2322', ['TS2322', 'TS2769'], 2],
      [3, 'TS2322', ['TS2322'], 1],
    ]);
  });

  it('judges a grouped site on all its codes (classify)', () => {
    const texts = new Map([['a.tsx', { base: 'x\n<A p />\n', migrated: 'x\n<A q />\n' }]]);
    const site = { file: 'a.tsx', line: 2, kind: 'ts', rule: 'TS2322', codes: ['TS2322', 'TS2769'] };
    const left = classify({ texts, sites: [site], after: [{ file: 'a.tsx', line: 2, code: 'TS2769', message: '' }], before: [] });
    assert.equal(left.sites[0].outcome, 'missed'); // the first code is gone, the second is not
    const gone = classify({ texts, sites: [site], after: [], before: [] });
    assert.equal(gone.sites[0].outcome, 'auto');
  });
});

describe('coverage ts: regressions net of the unmigrated code', () => {
  it('unions the v20 and v19 errors of the unmigrated code, counting an error of both once', () => {
    const e = (line, code) => ({ file: 'a.tsx', line, code, message: '' });
    const union = unionDiagnostics([e(1, 'TS2322'), e(2, 'TS2339')], [e(2, 'TS2339'), e(3, 'TS2551'), e(3, 'TS2551')]);
    assert.deepEqual(union.map((d) => `${d.line} ${d.code}`), ['1 TS2322', '2 TS2339', '3 TS2551', '3 TS2551']);
  });

  it('does not count as a regression an error the code already had against v19 only', () => {
    // `MESSAGE_COLOR.danger`: absent from v19 already; hidden at v20 by the unresolved import, back once migrated.
    const texts = new Map([['a.tsx', { base: "import { MESSAGE_COLOR } from 'o';\nMESSAGE_COLOR.danger;\n", migrated: "import { MESSAGE_STATUS } from 'o';\nMESSAGE_STATUS.danger;\n" }]]);
    const after = [{ file: 'a.tsx', line: 2, code: 'TS2339', message: '' }];
    const v19 = [{ file: 'a.tsx', line: 2, code: 'TS2339', message: '' }];
    const v20 = [{ file: 'a.tsx', line: 1, code: 'TS2305', message: '' }];
    assert.equal(classify({ texts, sites: [], after, before: v20 }).regressions.length, 1);
    assert.equal(classify({ texts, sites: [], after, before: unionDiagnostics(v20, v19) }).regressions.length, 0);
  });
});
