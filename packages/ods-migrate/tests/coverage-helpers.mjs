/*
 * Shared by the coverage tests (not a test file): the TypeScript module the harness reads code with,
 * found without an install: $COVERAGE_TYPESCRIPT (or the older $ODS_MIGRATE_TYPESCRIPT, $ODS_TYPESCRIPT),
 * the repo one the harness defaults to, the one this package resolves, or the one of @typescript-eslint/parser.
 */
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { defaults } from '../scripts/coverage/harness.mjs';

export function findTypeScript() {
  const require = createRequire(import.meta.url);
  const dirs = [process.env.COVERAGE_TYPESCRIPT, process.env.ODS_MIGRATE_TYPESCRIPT, process.env.ODS_TYPESCRIPT, defaults().typescript].filter(Boolean);
  for (const dir of dirs) if (existsSync(join(dir, 'package.json'))) return createRequire(join(dir, 'package.json'))(dir);
  for (const resolveIt of [() => require.resolve('typescript'), () => createRequire(require.resolve('@typescript-eslint/parser')).resolve('typescript')]) {
    try {
      return require(resolveIt());
    } catch {}
  }
  return null;
}

export const ts = findTypeScript();
export const skipTs = ts ? false : 'needs typescript (the repo one, or COVERAGE_TYPESCRIPT=<dir>)';
