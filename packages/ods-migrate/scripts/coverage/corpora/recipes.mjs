#!/usr/bin/env node
/*
 * Prepares the `recipes` corpus: design-system packages/ods-recipes at v19.7.3 (the corpus) and at
 * the v20 ref (the hand-migrated truth).
 *
 *   node scripts/coverage/corpora/recipes.mjs --out <dir> [--repo <design-system>] [--v19 v19.7.3] [--v20 origin/master]
 */
import { join } from 'node:path';
import { cli, designSystemRepo, isMain, digestDir, gitArchive, revParse, writeManifest } from './common.mjs';

export function prepareRecipes({ out, repo, v19, v20 }) {
  const dir = join(out, 'recipes');
  gitArchive(repo, v19, 'packages/ods-recipes', join(dir, 'corpus'));
  gitArchive(repo, v20, 'packages/ods-recipes', join(dir, 'truth'));
  return writeManifest(out, 'recipes', {
    source: { repo, path: 'packages/ods-recipes', v19: { ref: v19, sha: revParse(repo, v19) }, v20: { ref: v20, sha: revParse(repo, v20) } },
    truth: 'the same path at the v20 ref: the ODS team migrated it by hand',
    digests: { corpus: digestDir(join(dir, 'corpus')), truth: digestDir(join(dir, 'truth')) },
    runs: [{ label: 'recipes', corpus: join(dir, 'corpus'), truth: join(dir, 'truth'), gated: true }],
  });
}

if (isMain(import.meta.url)) {
  const o = cli('recipes', 'packages/ods-recipes of the design-system at v19 (corpus) and v20 (truth).', {
    repo: { help: 'the design-system git repo', default: designSystemRepo() ?? undefined },
    v19: { help: 'the v19 ref', default: 'v19.7.3' },
    v20: { help: 'the v20 ref', default: 'origin/master' },
  });
  prepareRecipes(o);
}
