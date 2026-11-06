#!/usr/bin/env node
/*
 * Prepares the `manager` corpus: `packages/` of ovh/manager frozen at the snapshot commit 7e02c54
 * (10,585 files; TESTING.md § 4). Two sources, the same result:
 *   --repo <git dir> [--ref 7e02c54]   `git archive <ref> packages` of the snapshot repo
 *   --from <dir>                      a folder that holds `packages/` (an earlier extraction)
 * Either way the digest must be the pinned one of 7e02c54 (`--accept-digest` goes on, and the run
 * is then not comparable with the baseline).
 *
 *   node scripts/coverage/corpora/manager.mjs --out <dir> (--repo <snapshot repo> | --from <dir>) [--accept-digest]
 */
import { join } from 'node:path';
import { checkDigest, cli, copyTree, digestDir, gitArchive, isMain, revParse, writeManifest } from './common.mjs';

export const SNAPSHOT_REF = '7e02c54';
/* `packages/` of the snapshot commit, as digestDir reads it (measured on 2026-10-26). */
export const SNAPSHOT_DIGEST = { sha256: '27f0136d8bb2ac99a79ad6148270bc87d6d6d8bf1bdf6eda909e7c0728803462', files: 10585 };

export function prepareManager({ out, repo, ref, from, 'accept-digest': accept }) {
  if (!repo === !from) throw new Error('pass one of --repo or --from');
  const corpus = join(out, 'manager', 'corpus', 'packages');
  let source;
  if (repo) {
    gitArchive(repo, ref, 'packages', corpus);
    source = { repo, ref, sha: revParse(repo, ref), path: 'packages' };
  } else {
    copyTree(join(from, 'packages'), corpus);
    source = { from: join(from, 'packages'), claimedRef: SNAPSHOT_REF };
  }
  const digest = digestDir(corpus);
  source.digestMatches = checkDigest('manager', digest, SNAPSHOT_DIGEST, { strict: !accept }).ok;
  return writeManifest(out, 'manager', {
    source,
    digests: { manager: digest },
    runs: [{ label: 'manager', corpus, gated: true, treatAsOds: ['@ovh-ux/muk'], node: '--max-old-space-size=12000', note: 'the baseline is recorded with --treat-as-ods @ovh-ux/muk (without it, 2 sites fewer); ~2 min' }],
  });
}

if (isMain(import.meta.url)) {
  const o = cli('manager', 'packages/ of the ovh/manager snapshot 7e02c54.', {
    repo: { help: 'the snapshot git repo' },
    ref: { help: 'the snapshot commit', default: SNAPSHOT_REF },
    from: { help: 'a folder holding packages/ (instead of --repo)' },
    'accept-digest': { type: 'boolean', help: 'go on when the digest is not the pinned one (the run is then not comparable)' },
  });
  try {
    prepareManager(o);
  } catch (error) {
    console.error(`✗ ${error.message}`);
    process.exit(1);
  }
}
