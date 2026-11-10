#!/usr/bin/env node
/*
 * Compares coverage runs (the `--json` reports of scripts/coverage.mjs) with the last recorded
 * numbers in coverage-baseline.json, corpus by corpus (matched on the run's `--label`).
 *
 * Usage: node scripts/coverage-check.mjs [--baseline <file>] <run.json>...
 *        node scripts/coverage-check.mjs --record [--baseline <file>] <run.json>...
 *
 * A run fails when, against the baseline entry of its label:
 *   - ods-migrate did not exit 0;
 *   - the ODS refs differ (the numbers are not comparable: record a new baseline on purpose);
 *   - auto% or assisted% dropped;
 *   - missed sites or regressions rose (or regressions outside a marker rose);
 *   - premature rewrites (files changed in packages not on ODS 19) rose;
 *   - with a truth, tool-wrong DIFFER items rose (DIFFER regions for a baseline recorded before the
 *     item comparison: then any change of unit is reported as not comparable);
 *   - the corpus or truth digest differs from the baseline's (another input: not comparable);
 *   - the run found no site where the baseline had some (auto% and assisted% are then undefined, so
 *     the two checks above cannot see it: an empty or wrong corpus, a harness that broke), unless the
 *     baseline entry says `"allowNoSites": true`. An entry recorded at 0 sites (a package on ODS 18)
 *     needs nothing: only a drop from more than 0 to 0 fails.
 * A label missing from the baseline is reported, not failed. Exit 0 all pass, 1 a failure, 2 usage.
 * --record writes the runs into the baseline (keeping the other entries and their notes).
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    baseline: { default: join(dirname(fileURLToPath(import.meta.url)), '../coverage-baseline.json'), type: 'string' },
    help: { short: 'h', type: 'boolean' },
    record: { type: 'boolean' },
  },
});
if (values.help || positionals.length === 0) {
  console.log('Usage: node scripts/coverage-check.mjs [--record] [--baseline <file>] <run.json>...');
  process.exit(values.help ? 0 : 2);
}

const baseline = existsSync(values.baseline) ? JSON.parse(readFileSync(values.baseline, 'utf8')) : { coverage: {} };
baseline.coverage ??= {};

/* The numbers of a run that the baseline keeps. */
function entryOf(run) {
  const s = run.summary;
  return {
    refs: { v19: run.refs.v19.sha.slice(0, 9), v20: run.refs.v20.sha.slice(0, 9) },
    options: { treatAsOds: run.options.treatAsOds, config: run.options.config, strict: run.options.strict, checkJs: run.options.checkJs, truth: Boolean(run.truth) },
    files: run.files,
    sites: s.sites,
    auto: s.auto,
    marked: s.marked,
    missed: s.missed,
    autoPct: s.autoPct,
    assistedPct: s.assistedPct,
    regressions: s.regressions,
    regressionsUnderMarker: s.regressionsUnderMarker,
    ...(s.prematureFiles !== undefined && { prematureFiles: s.prematureFiles, prematureHunks: s.prematureHunks }),
    ...(run.truth && { agree: run.truth.agree, differ: run.truth.differ }),
    ...(run.truth?.byClass && { truthUnit: 'item', toolWrong: run.truth.byClass['tool-wrong'], differByClass: run.truth.byClass, excluded: run.truth.excluded }),
    ...(run.digests && { digests: run.digests }),
    migrateExit: run.migrate.exit,
    seconds: Math.round(Object.values(run.timings ?? {}).reduce((total, ms) => total + ms, 0) / 1000),
  };
}

let failed = false;
for (const path of positionals) {
  const run = JSON.parse(readFileSync(path, 'utf8'));
  const label = run.label;
  const now = entryOf(run);
  if (values.record) {
    const previous = baseline.coverage[label] ?? {};
    baseline.coverage[label] = { ...Object.fromEntries(Object.entries(previous).filter(([key]) => ['allowNoSites', 'corpus', 'fetch', 'command', 'gated', 'note'].includes(key))), ...now };
    console.log(`recorded ${label}`);
    continue;
  }
  const was = baseline.coverage[label];
  const line = `${label}: ${now.sites} sites, auto ${now.autoPct ?? '–'}%, assisted ${now.assistedPct ?? '–'}%, missed ${now.missed}, regressions ${now.regressions}${now.prematureFiles !== undefined ? `, premature ${now.prematureFiles} file(s)` : ''}${now.differ !== undefined ? `, differ ${now.differ}${now.toolWrong !== undefined ? ` (tool-wrong ${now.toolWrong})` : ''}` : ''}`;
  if (!was) {
    console.log(`?    ${line} (no baseline entry for this label)`);
    continue;
  }
  const problems = [];
  if (now.migrateExit !== 0) problems.push(`ods-migrate exit ${now.migrateExit}`);
  if (was.refs && (was.refs.v19 !== now.refs.v19 || was.refs.v20 !== now.refs.v20)) {
    problems.push(`refs ${now.refs.v19}→${now.refs.v20} differ from the baseline ${was.refs.v19}→${was.refs.v20}: not comparable`);
  }
  const lower = (key) => now[key] !== null && was[key] !== null && now[key] < was[key] && problems.push(`${key} ${was[key]} → ${now[key]}`);
  const higher = (key) => was[key] !== undefined && now[key] > was[key] && problems.push(`${key} ${was[key]} → ${now[key]}`);
  lower('autoPct');
  lower('assistedPct');
  if (was.sites > 0 && now.sites === 0 && was.allowNoSites !== true) {
    problems.push(`sites ${was.sites} → 0: nothing measured (an empty or wrong corpus, or a broken harness); if 0 is expected, set "allowNoSites": true on the baseline entry`);
  }
  higher('missed');
  higher('regressions');
  higher('prematureFiles');
  if (was.regressions !== undefined && now.regressions - now.regressionsUnderMarker > was.regressions - was.regressionsUnderMarker) {
    problems.push(`regressions outside a marker ${was.regressions - was.regressionsUnderMarker} → ${now.regressions - now.regressionsUnderMarker}`);
  }
  if (was.digests && now.digests && (was.digests.corpus !== now.digests.corpus || was.digests.truth !== now.digests.truth)) {
    problems.push('the corpus or the truth differs from the baseline input (digest): not comparable');
  }
  if (now.differ !== undefined && (was.truthUnit ?? 'region') !== (now.truthUnit ?? 'region')) {
    problems.push(`truth compared by ${now.truthUnit ?? 'region'}, the baseline by ${was.truthUnit ?? 'region'}: not comparable, record a new baseline`);
  } else if (now.truthUnit === 'item') higher('toolWrong');
  else higher('differ');
  const gated = was.gated !== false;
  if (problems.length && gated) failed = true;
  console.log(`${problems.length ? (gated ? 'FAIL' : 'warn') : 'ok  '} ${line}${problems.length ? `\n       ${problems.join('\n       ')}` : ''}`);
}

if (values.record) {
  baseline.recordedAt = new Date().toISOString().slice(0, 10);
  writeFileSync(values.baseline, `${JSON.stringify(baseline, null, 2)}\n`);
}
process.exit(failed ? 1 : 0);
