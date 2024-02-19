#!/usr/bin/env zx

/**
 * Preparing the release.
 * It will check if nothing is to commit (clean state)
 * and if you are on a release branch.
 *
 * this script has to be called before any `npm version` or `lerna version`.
 *
 * execution from monorepo:
 * - `npx zx scripts/ods-release-prepare.mjs`
 */
const args = process.argv.slice(2);

let branch = (await $`git branch --show-current`).stdout.trim();

try {
  await $`test -z "$(git status --porcelain)"`;
} catch (p) {
  console.log(`"git status --porcelain" exited with code: ${p.exitCode}`);
  console.log(`${p.stderr}`);
  console.error('you must clean up your local changes before releasing!');
  process.exit(1);
}

const regex = new RegExp(/^release\/*/);

if (!regex.test(branch)) {
  console.log(`current branch: ${branch}`);
  console.error('you must make a release from a release branch!');
  process.exit(1);
}

process.exit(0);
