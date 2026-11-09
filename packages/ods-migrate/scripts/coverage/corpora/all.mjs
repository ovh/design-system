#!/usr/bin/env node
/*
 * Prepares every corpus of TESTING.md § 5.3 into one folder, then prints the coverage commands.
 *
 *   node scripts/coverage/corpora/all.mjs --out <dir> [--repo <design-system>]
 *        [--manager-repo <snapshot repo> | --manager-from <dir holding packages/>] [--only a,b] [--accept-digest]
 *
 * A corpus whose source is missing is skipped with a message (exit 1 at the end); `--only` limits
 * the run to some of: examples, recipes, storybook, manager.
 */
import { join } from 'node:path';
import { cli, designSystemRepo, isMain } from './common.mjs';
import { prepareExamples } from './examples.mjs';
import { prepareManager, SNAPSHOT_REF } from './manager.mjs';
import { prepareRecipes } from './recipes.mjs';
import { prepareStorybook } from './storybook.mjs';

export const CORPORA = ['examples', 'recipes', 'storybook', 'manager'];

export function prepareAll(o) {
  const only = o.only ? o.only.split(',').map((s) => s.trim()) : CORPORA;
  const accept = o['accept-digest'];
  const steps = {
    examples: () => prepareExamples({ out: o.out, repo: o.repo, v19: 'v19.7.3', v20: 'origin/master' }),
    recipes: () => prepareRecipes({ out: o.out, repo: o.repo, v19: 'v19.7.3', v20: 'origin/master' }),
    storybook: () => prepareStorybook({ out: o.out, repo: o.repo, v19: 'v19.7.3', 'docs-base': '9336e1951^', 'docs-v20': 'origin/master' }),
    manager: () => {
      if (!o['manager-repo'] && !o['manager-from']) throw new Error('pass --manager-repo or --manager-from');
      return prepareManager({ out: o.out, repo: o['manager-repo'], ref: SNAPSHOT_REF, from: o['manager-from'], 'accept-digest': accept });
    },
  };
  const failed = [];
  for (const name of only) {
    if (!steps[name]) throw new Error(`unknown corpus ${name} (known: ${CORPORA.join(', ')})`);
    console.log(`· ${name}`);
    try {
      steps[name]();
    } catch (error) {
      console.error(`✗ ${name}: ${error.message}`);
      failed.push(name);
    }
  }
  return failed;
}

if (isMain(import.meta.url)) {
  const o = cli('all', 'Every corpus of TESTING.md § 5.3.', {
    repo: { help: 'the design-system git repo', default: designSystemRepo() ?? undefined },
    'manager-repo': { help: 'a clone of github.com/ovh/manager (git archive d8e3d1a1 packages)' },
    'manager-from': { help: 'a folder holding the packages/ of the snapshot (instead of --manager-repo)' },
    only: { help: 'a comma-separated subset' },
    'accept-digest': { type: 'boolean', help: 'go on when an untracked input is not the pinned one' },
  });
  process.exit(prepareAll(o).length ? 1 : 0);
}
