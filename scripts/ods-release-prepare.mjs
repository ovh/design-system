#!/usr/bin/env zx

/**
 * Preparing the release.
 * It will check if nothing is to commit (clean state)
 * and if you are on a release branch,
 * then make the previous release tag an ancestor of it for the changelog.
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
// behind: without it the changelog silently restarts from an older tag. A
// merge would bring the tag's commits into the branch and break its rebase
// merge, so graft the tag as an extra parent of HEAD instead: git replace is
// local, never pushed, and leaves the files untouched.
const previousTag = `v${require('../lerna.json').version}`;

if (!(await $`git tag --list ${previousTag}`).stdout.trim()) {
  console.error(`tag ${previousTag} not found locally, run "git fetch --tags" first!`);
  process.exit(1);
}

try {
  await $`git merge-base --is-ancestor ${previousTag} HEAD`;
} catch {
  // The graft gives HEAD two parents, and the changelog skips merge commits:
  // HEAD itself is never listed. Only graft onto a commit it would skip anyway.
  // Keep in sync with changelog.preset.config.js and the angular parser and writer.
  const message = (await $`git log -1 --format=%B HEAD`).stdout;
  const [header, ...body] = message.split('\n');
  if (/^((feat|fix|perf|revert)\b|\w*(\([^)]*\))?!:|Revert ")/.test(header) || /^[\s|*]*BREAKING CHANGE[:\s]/im.test(body.join('\n'))) {
    console.error(`HEAD "${header}" would be left out of the changelog: commit the What's new entry first!`);
    process.exit(1);
  }
  const head = (await $`git rev-parse HEAD`).stdout.trim();
  const parents = (await $`git rev-parse HEAD^@`).stdout.trim().split('\n').filter(Boolean);
  await $`git replace --graft ${head} ${parents} ${previousTag}`;
  console.log(`${previousTag} grafted onto ${branch} for the changelog (local only, undo with "git replace -d ${head}")`);
}

process.exit(0);
