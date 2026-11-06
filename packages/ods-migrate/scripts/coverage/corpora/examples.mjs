#!/usr/bin/env node
/*
 * Prepares the `examples` corpora: design-system packages/examples at v19.7.3 (the corpus) and at
 * the v20 ref (the hand-migrated truth), one run for the five apps together and one per app.
 *
 *   node scripts/coverage/corpora/examples.mjs --out <dir> [--repo <design-system>] [--v19 v19.7.3] [--v20 origin/master]
 */
import { join } from 'node:path';
import { cli, designSystemRepo, isMain, digestDir, gitArchive, revParse, writeManifest } from './common.mjs';

export const APPS = ['accessibility-test', 'nextjs-app', 'react-router-app', 'vite-app', 'webpack-app'];

export function prepareExamples({ out, repo, v19, v20 }) {
  const dir = join(out, 'examples');
  gitArchive(repo, v19, 'packages/examples', join(dir, 'corpus'));
  gitArchive(repo, v20, 'packages/examples', join(dir, 'truth'));
  const runs = [
    { label: 'examples', corpus: join(dir, 'corpus'), truth: join(dir, 'truth'), gated: true },
    ...APPS.map((app) => ({ label: `examples-${app}`, corpus: join(dir, 'corpus', app), truth: join(dir, 'truth', app), gated: true })),
  ];
  return writeManifest(out, 'examples', {
    source: { repo, path: 'packages/examples', v19: { ref: v19, sha: revParse(repo, v19) }, v20: { ref: v20, sha: revParse(repo, v20) } },
    truth: 'the same path at the v20 ref: the ODS team migrated it by hand',
    digests: { corpus: digestDir(join(dir, 'corpus')), truth: digestDir(join(dir, 'truth')) },
    runs,
  });
}

if (isMain(import.meta.url)) {
  const o = cli('examples', 'packages/examples of the design-system at v19 (corpus) and v20 (truth).', {
    repo: { help: 'the design-system git repo', default: designSystemRepo() ?? undefined },
    v19: { help: 'the v19 ref', default: 'v19.7.3' },
    v20: { help: 'the v20 ref', default: 'origin/master' },
  });
  prepareExamples(o);
}
