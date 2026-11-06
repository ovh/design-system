import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import { defaults, runCoverage } from '../scripts/coverage/harness.mjs';
import { printSummary } from '../scripts/coverage/report.mjs';

const fixtures = fileURLToPath(new URL('./fixtures/coverage/', import.meta.url));
const d = defaults();
const digest = (dir) => {
  const hash = createHash('sha256');
  for (const e of readdirSync(dir, { recursive: true, withFileTypes: true }).filter((x) => x.isFile()).map((x) => join(x.parentPath, x.name)).sort()) hash.update(e).update(readFileSync(e));
  return hash.digest('hex');
};
const hasRef = (ref) => d.repo && spawnSync('git', ['-C', d.repo, 'rev-parse', '--verify', `${ref}^{commit}`]).status === 0;
const skip = !d.typescript || !existsSync(d.typescript) || !hasRef(d.v19) || !hasRef(d.v20)
  ? `needs the ${d.v19} and ${d.v20} refs and an installed typescript in ${d.repo}` : false;

describe('coverage: end to end on the fixture corpus', { skip }, () => {
  const work = mkdtempSync(join(tmpdir(), 'ods-coverage-'));
  after(() => rmSync(work, { force: true, recursive: true }));
  let result;

  it('runs (surfaces probed, corpus untouched)', { timeout: 300_000 }, () => {
    const before = digest(fixtures);
    result = runCoverage({ corpus: join(fixtures, 'corpus'), truth: join(fixtures, 'truth'), work, label: 'fixture' });
    assert.equal(result.probes.v19.ok, true);
    assert.equal(result.probes.v20.ok, true);
    assert.equal(result.migrate.exit, 0);
    assert.equal(digest(fixtures), before);
  });

  it('finds one site of each outcome and the regression', () => {
    const outcome = (file, line) => result.sites.find((s) => s.file === file && s.line === line)?.outcome;
    assert.equal(outcome('src/App.tsx', 8), 'auto'); // <Badge color="primary"> → status="accent"
    assert.equal(outcome('src/App.tsx', 9), 'marked'); // <Divider color={ tone }>: removed, computed
    assert.equal(outcome('src/legacy.less', 2), 'auto'); // a .less that postcss-scss reads back unchanged goes through the stylesheet pass
    assert.equal(outcome('src/App.tsx', 16), 'auto'); // `BADGE_COLOR.primary`: a use of the broken import (no error of its own)
    assert.equal(outcome('src/App.tsx', 21), undefined); // the local `BADGE_COLOR` is not ODS
    assert.deepEqual(result.regressions.map((r) => [r.file, r.line, r.code]), [['src/App.tsx', 21, 'TS2339']]); // local BADGE_COLOR renamed
    const { byKind, withoutDocs, ...summary } = result.summary;
    assert.deepEqual(summary, {
      sites: 6, auto: 5, marked: 1, missed: 0, regressions: 1, regressionsUnderMarker: 0, autoPct: 83.3, assistedPct: 100,
      prematureFiles: 0, prematureHunks: 0,
      agree: 7, differ: 3, toolWrong: 3, decision: 0, unrelatedChange: 0, styleOnly: 0,
    });
    assert.equal(withoutDocs.sites, 6); // no Markdown code nor snippet in the fixture
    assert.deepEqual(byKind, { token: { sites: 2, auto: 2, marked: 0, missed: 0 }, ts: { sites: 4, auto: 3, marked: 1, missed: 0 } });
  });

  it('compares with the truth and lists the rendering changes apart', () => {
    const differ = result.truth.items.filter((r) => r.verdict === 'differ').map((r) => `${r.file}:${r.lines[0]}`);
    assert.deepEqual(differ, ['src/App.tsx:9', 'src/App.tsx:20', 'src/App.tsx:21']);
    assert.deepEqual(result.truth.byClass, { 'tool-wrong': 3, decision: 0, 'unrelated-change': 0, 'style-only': 0 });
    assert.deepEqual([result.truth.legacy.agree, result.truth.legacy.differ], [5, 3]); // the former line comparison, kept for reference
    assert.match(result.digests.corpus, /^[0-9a-f]{64}$/);
    assert.deepEqual(result.visual.map((v) => v.component), ['Badge', 'Divider']);
    assert.match(printSummary(result), /total\s+6\s+5\s+1\s+0\s+83.3%\s+100%/);
    assert.match(printSummary(result), /summary: 6 sites, 5 auto, 1 marked, 0 missed; auto 83.3%, assisted 100%/);
    assert.match(printSummary(result), /premature rewrites: 0 file\(s\), 0 hunk\(s\) in packages not on ODS 19; regressions: 1 \(0 under a marker\)/);
    assert.match(printSummary(result), /truth: 7 agree, 3 differ = tool-wrong 3, decision 0, unrelated-change 0, style-only 0/);
  });
});
