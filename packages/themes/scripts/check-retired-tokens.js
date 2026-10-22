#! /usr/bin/env node

/*
 * Fails when a file reads or declares a token that v20 removed. A var() to a name nothing declares
 * fails silently in the browser, so a merge that brings one back would otherwise go unnoticed.
 *
 * Usage: node scripts/check-retired-tokens.js
 */
const { execFileSync } = require('child_process');
const path = require('path');

const REPO = path.resolve(__dirname, '../../..');
const RETIRED = `(var\\([[:space:]]*|^[[:space:]]*['"]?)--ods-(theme|color|border-radius|border-width|outline|font-family|form-element)-`;

/* The files that name the retired tokens on purpose: the inventory, its tooling, the "before" of the guides, generated files. */
const EXCLUDED = [
  'BREAKING-CHANGES-V20.md',
  'packages/themes/scripts/repoint-tokens.js',
  'packages/docs/src/content/guides/migration-19-to-20.mdx',
  'packages/docs/src/content/guides/whats-new.mdx',
  'packages/docs/assets/llms',
  '**/CHANGELOG.md',
];

let found = '';
try {
  found = execFileSync('git', ['grep', '--untracked', '-nE', '-e', RETIRED, '--', '.', ...EXCLUDED.map((p) => `:!${p}`)], { cwd: REPO, encoding: 'utf8' });
} catch (error) {
  /* git grep exits 1 when nothing matches. */
  if (error.status !== 1) {
    throw error;
  }
}

if (found) {
  console.error(`These lines read or declare a token removed in v20 (see BREAKING-CHANGES-V20.md):\n\n${found}`);
  process.exitCode = 1;
}
