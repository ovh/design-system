#!/usr/bin/env zx

/**
 * Preparing the release.
 * It will check if nothing is to commit (clean state),
 * if you are on a release branch
 * and if the previous release tag is an ancestor of it.
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

// The changelog starts at the last version tag reachable from HEAD. Release
// commits come back to master through a rebase merge, which leaves their tag
// behind: without this check the changelog silently restarts from an older tag.
const previousTag = `v${require('../lerna.json').version}`;

if (!(await $`git tag --list ${previousTag}`).stdout.trim()) {
  console.error(`tag ${previousTag} not found locally, run "git fetch --tags" first!`);
  process.exit(1);
}

try {
  await $`git merge-base --is-ancestor ${previousTag} HEAD`;
} catch {
  console.log(`${previousTag} is not an ancestor of ${branch}`);
  console.error(`record it first (the tree stays unchanged): git merge -s ours --no-edit ${previousTag}`);
  process.exit(1);
}

process.exit(0);
