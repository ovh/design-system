#!/usr/bin/env node
/*
 * Independent coverage of ods-migrate on a v19 corpus: the breaking sites are found by the v20 type
 * checker and by the token names the ODS sources declare (never by the ods-migrate mappings), then
 * ods-migrate runs on a copy and the same detectors say what it fixed, marked or missed.
 *
 * Usage: node scripts/coverage.mjs <corpus dir> [--truth <dir>] [--config <file>] [--json <out.json>]
 *          [--treat-as-ods <module>...] [--work <dir>] [--label <name>] [--cache <dir>] [--repo <git dir>]
 *          [--v19 <ref>] [--v20 <ref>] [--deps19 <node_modules>] [--deps20 <node_modules>]
 *          [--typescript <dir>] [--react-types <dir>] [--react-dom-types <dir>] [--strict] [--check-js]
 *          [--tool <ods-migrate dir>] [--sites] [--quiet]
 * The corpus is never written: it is copied twice under <work>/<label>/ (base/ and migrated/).
 */
import { writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { parseArgs } from 'node:util';
import { defaults, runCoverage } from './coverage/harness.mjs';
import { printSummary } from './coverage/report.mjs';

const USAGE = `Usage: node scripts/coverage.mjs <corpus dir> [--truth <hand-migrated dir>] [--config <file>] [--json <out.json>]
  --treat-as-ods <module>  an import path to count and migrate as ODS (repeatable), as for ods-migrate:
                        rarely needed, the modules of the corpus that stand for ODS are found on their own
  --work <dir>          where the copies go (default: $TMPDIR/ods-migrate-coverage); <work>/<label>/{base,migrated}
  --label <name>        the folder name of this run (default: the corpus folder name)
  --cache <dir>         the extracted type surfaces (default: <work>/.surfaces)
  --repo <git dir>      the design-system repo (default: the one this package lives in)
  --v19 <ref>, --v20 <ref>             the two refs (default: v19.7.3, origin/master)
  --deps19, --deps20 <node_modules>    installed dependencies of each major (default: <repo>/node_modules,
                                       <repo>/packages/ods-react/node_modules)
  --typescript <dir>    the typescript package (default: <repo>/node_modules/typescript)
  --react-types <dir>, --react-dom-types <dir>   the @types every file reads (default: <repo>/node_modules/@types/…)
  --strict              type-check with strict: true (default false)
  --check-js            also type-check .js/.jsx (checkJs)
  --tool <dir|cli.mjs>  the ods-migrate to measure: a package folder (its src/cli.mjs) or a cli.mjs
                        (default: the package this script lives in)
  --sites               print every site, not only the summary
  --quiet               no progress lines`;

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    'treat-as-ods': { multiple: true, type: 'string' },
    cache: { type: 'string' },
    'check-js': { type: 'boolean' },
    config: { type: 'string' },
    'deps19': { type: 'string' },
    'deps20': { type: 'string' },
    help: { short: 'h', type: 'boolean' },
    json: { type: 'string' },
    label: { type: 'string' },
    quiet: { type: 'boolean' },
    'react-dom-types': { type: 'string' },
    'react-types': { type: 'string' },
    repo: { type: 'string' },
    sites: { type: 'boolean' },
    strict: { type: 'boolean' },
    tool: { type: 'string' },
    truth: { type: 'string' },
    typescript: { type: 'string' },
    v19: { type: 'string' },
    v20: { type: 'string' },
    work: { type: 'string' },
  },
});

if (values.help || positionals.length !== 1) {
  console.log(USAGE);
  process.exit(values.help ? 0 : 2);
}

const opts = {
  corpus: positionals[0],
  truth: values.truth,
  config: values.config,
  treatAsOds: values['treat-as-ods'] ?? [],
  work: values.work ?? join(tmpdir(), 'ods-migrate-coverage'),
  label: values.label,
  cache: values.cache,
  repo: values.repo,
  v19: values.v19,
  v20: values.v20,
  deps19: values.deps19,
  deps20: values.deps20,
  typescript: values.typescript,
  reactTypes: values['react-types'],
  reactDomTypes: values['react-dom-types'],
  strict: values.strict ?? false,
  checkJs: values['check-js'] ?? false,
  cli: values.tool && resolve(values.tool.endsWith('.mjs') ? values.tool : join(values.tool, 'src/cli.mjs')),
  log: values.quiet ? undefined : (m) => console.error(`· ${m}`),
};
for (const key of ['repo', 'deps19', 'typescript', 'reactTypes']) {
  if (!opts[key] && !defaults()[key]) {
    console.error(`cannot guess --${key}: pass it`);
    process.exit(2);
  }
}

try {
  const result = runCoverage(opts);
  console.log(printSummary(result, { sites: values.sites }));
  if (values.json) {
    writeFileSync(values.json, `${JSON.stringify(result, null, 2)}\n`);
    console.error(`· report written to ${values.json}`);
  }
} catch (error) {
  console.error(`✗ ${error.message}`);
  if (process.env.DEBUG) console.error(error.stack);
  process.exit(2);
}
