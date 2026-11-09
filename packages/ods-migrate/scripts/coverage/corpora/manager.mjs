#!/usr/bin/env node
/*
 * Prepares the `manager` corpus: `packages/` of github.com/ovh/manager at the public commit d8e3d1a1
 * (2026-10-30, 45,068 files; TESTING.md § 4). Two sources, the same result:
 *   --repo <clone> [--ref d8e3d1a1]   `git archive <ref> packages` of a clone of ovh/manager
 *                                     (a `--filter=blob:none` clone is enough: git fetches the blobs it archives)
 *   --from <dir>                      a folder that holds `packages/` (an earlier extraction)
 * Either way the digest must be the pinned one (`--accept-digest` goes on, and the run is then not
 * comparable with the baseline).
 *
 *   node scripts/coverage/corpora/manager.mjs --out <dir> (--repo <ovh/manager clone> | --from <dir>) [--accept-digest]
 */
import { join } from 'node:path';
import { checkDigest, cli, copyTree, digestDir, gitArchive, isMain, revParse, writeManifest } from './common.mjs';

export const SNAPSHOT_REF = 'd8e3d1a1';
/* `packages/` of that commit, as digestDir reads it (measured on 2026-11-06). The former snapshot 7e02c54 is lost. */
export const SNAPSHOT_DIGEST = { sha256: 'ac957536a32705820c2c6ad503f8d6752235b89f3f4aca196368850fab3c15da', files: 45068 };

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
  const o = cli('manager', 'packages/ of github.com/ovh/manager at d8e3d1a1.', {
    repo: { help: 'a clone of ovh/manager' },
    ref: { help: 'the commit', default: SNAPSHOT_REF },
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
