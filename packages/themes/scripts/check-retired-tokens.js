#! /usr/bin/env node

/*
 * Fails when a file names a custom property that v20 removed, wherever it sits on the line: a
 * var(), a declaration, an inline style, a setProperty(). A var() to a name nothing declares fails
 * silently in the browser, so a merge that brings one back would otherwise go unnoticed.
 *
 * retired-tokens.txt lists the names declared in 19.7.3 and declared nowhere at the head:
 *   comm -23 <(names declared at v19.7.3) <(names declared at HEAD)
 * over packages/themes/src and packages/ods-react/src.
 * A few names that v20 added and then removed during its development are listed too, so that a
 * branch started before their removal cannot bring them back. Kept by hand: regenerating the list
 * with the comm above drops them.
 *
 * Usage: node scripts/check-retired-tokens.js
 */
const { execFileSync } = require('child_process');
const { readFileSync } = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '../../..');
const NAMES = readFileSync(path.join(__dirname, 'retired-tokens.txt'), 'utf8').split('\n').filter(Boolean);
const RETIRED = `--ods-(${NAMES.map((name) => name.replace(/^--ods-/, '')).join('|')})([^-a-z0-9]|$)`;

/* The files that name the retired tokens on purpose: the inventory, its tooling, the "before" of the guides, generated files. */
const EXCLUDED = [
  'BREAKING-CHANGES-V20.md',
  'packages/themes/scripts/repoint-tokens.js',
  'packages/themes/scripts/retired-tokens.txt',
  'packages/docs/src/content/guides/migration-19-to-20.mdx',
  'packages/docs/src/content/guides/whats-new*.mdx',
  'packages/docs/assets/llms',
  '**/CHANGELOG.md',
];

let found = '';
try {
  found = execFileSync('git', ['grep', '--untracked', '-nE', '-e', RETIRED, '--', '.', ...EXCLUDED.map((p) => `:!${p}`)], { cwd: REPO, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
} catch (error) {
  /* git grep exits 1 when nothing matches. */
  if (error.status !== 1) {
    throw error;
  }
}

if (found) {
  console.error(`These lines name a token removed in v20 (see BREAKING-CHANGES-V20.md):\n\n${found}`);
  process.exitCode = 1;
}
