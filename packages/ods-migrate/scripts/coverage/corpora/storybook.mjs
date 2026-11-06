#!/usr/bin/env node
/*
 * Prepares the `storybook` corpus and its truth.
 *
 * Corpus: design-system packages/storybook at v19.7.3, with its monorepo-relative ODS imports
 * (`../../../../ods-react/src/components/<x>/src`, `…/ods-react/src/utils/format`) rewritten to
 * `@ovhcloud/ods-react` line by line, so that ods-migrate and the harness see ODS imports.
 *
 * Truth: packages/storybook no longer exists at v20; it became packages/docs, which the ODS team
 * then migrated by hand. The hand migration is the change of packages/docs between `--docs-base`
 * (default 9336e1951^, the docs right before the first v20 API change, the Spinner color
 * deprecation) and `--docs-v20`. Each storybook file is mapped to its docs file (same path, or the
 * most similar file of the same name at the base, renames followed to v20), the three versions get
 * the same import rewrite, and the truth is a three-way merge that applies the hand migration to
 * the storybook file and keeps the storybook lines wherever the truth is not known: lines the docs
 * base does not have (storybook-only content) and conflicts. Those lines are listed in
 * `truth/.ods-truth.json` (`exclude`), and the harness does not compare them.
 *
 *   node scripts/coverage/corpora/storybook.mjs --out <dir> [--repo <design-system>] [--v19 v19.7.3]
 *        [--docs-base 9336e1951^] [--docs-v20 origin/master]
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { cli, designSystemRepo, digestDir, digestFiles, git, gitArchive, gitLsFiles, gitShow, isMain, lineSimilarity, mergeKeepOurs, revParse, rewriteOdsImports, writeManifest } from './common.mjs';

const TEXT = /\.(c|m)?[jt]sx?$|\.(mdx?|json|s?css|less|html?|ya?ml)$/;

/* storybook path → docs path at the base: the same path, or the most similar file of the same name. */
export function mapToDocs(storyFiles, docsFiles, read) {
  const docsSet = new Set(docsFiles);
  const byName = new Map();
  for (const f of docsFiles) {
    const n = basename(f);
    if (!byName.has(n)) byName.set(n, []);
    byName.get(n).push(f);
  }
  const map = new Map();
  for (const f of storyFiles) {
    if (docsSet.has(f)) {
      map.set(f, { docs: f, how: 'same path' });
      continue;
    }
    const candidates = byName.get(basename(f)) ?? [];
    let best = null;
    for (const c of candidates) {
      // The same parent folder name breaks the tie between files of the same name (documentation.mdx…).
      const s = lineSimilarity(read.story(f), read.docs(c)) + (basename(dirname(c)) === basename(dirname(f)) ? 0.1 : 0);
      if (s >= 0.5 && (!best || s > best.s)) best = { c, s };
    }
    if (best) map.set(f, { docs: best.c, how: `same name, ${Math.round(Math.min(best.s, 1) * 100)}% similar` });
  }
  return map;
}

export function prepareStorybook({ out, repo, v19, 'docs-base': docsBase, 'docs-v20': docsV20 }) {
  const dir = join(out, 'storybook');
  const corpus = join(dir, 'corpus');
  const truthDir = join(dir, 'truth');
  gitArchive(repo, v19, 'packages/storybook', corpus);

  // 1. Corpus: the ODS imports rewritten.
  let rewrites = 0;
  let rewrittenFiles = 0;
  const storyFiles = digestFiles(corpus);
  const story = new Map();
  for (const rel of storyFiles) {
    if (!TEXT.test(rel)) continue;
    const r = rewriteOdsImports(readFileSync(join(corpus, rel), 'utf8'));
    if (r.count) {
      writeFileSync(join(corpus, rel), r.text);
      rewrites += r.count;
      rewrittenFiles += 1;
    }
    story.set(rel, r.text);
  }

  // 2. The docs files at the base and at v20 (renames followed).
  const prefix = 'packages/docs/';
  const docsBaseFiles = gitLsFiles(repo, docsBase, 'packages/docs').map((f) => f.slice(prefix.length)).filter((f) => TEXT.test(f));
  const docsV20Files = new Set(gitLsFiles(repo, docsV20, 'packages/docs').map((f) => f.slice(prefix.length)));
  const renames = new Map();
  for (const line of git(repo, ['diff', '-M', '--name-status', docsBase, docsV20, '--', 'packages/docs']).split('\n')) {
    const [status, from, to] = line.split('\t');
    if (status?.startsWith('R')) renames.set(from.slice(prefix.length), to.slice(prefix.length));
  }
  const docsCache = new Map();
  const docsAt = (ref, rel) => {
    const k = `${ref}:${rel}`;
    if (!docsCache.has(k)) {
      const t = gitShow(repo, ref, prefix + rel);
      docsCache.set(k, t === null ? null : rewriteOdsImports(t).text);
    }
    return docsCache.get(k);
  };
  const mapping = mapToDocs([...story.keys()], docsBaseFiles, { story: (f) => story.get(f), docs: (f) => docsAt(docsBase, f) ?? '' });

  // 3. Truth: the merge, file by file.
  const sidecar = { version: 1, kind: 'merge-keep-ours', refs: { v19, docsBase, docsV20 }, files: {} };
  const unmapped = [];
  const deleted = [];
  let excludedLines = 0;
  let coveredLines = 0;
  let conflicts = 0;
  for (const rel of story.keys()) {
    const m = mapping.get(rel);
    if (!m) {
      unmapped.push(rel);
      continue;
    }
    const v20Path = renames.get(m.docs) ?? m.docs;
    if (!docsV20Files.has(v20Path)) {
      deleted.push(rel);
      continue;
    }
    const merged = mergeKeepOurs(story.get(rel), docsAt(docsBase, m.docs), docsAt(docsV20, v20Path));
    mkdirSync(dirname(join(truthDir, rel)), { recursive: true });
    writeFileSync(join(truthDir, rel), merged.text);
    const lines = story.get(rel).split(/\r?\n/).length;
    const excluded = merged.exclude.reduce((n, [a, b]) => n + b - a + 1, 0);
    excludedLines += excluded;
    coveredLines += lines - excluded;
    conflicts += merged.conflicts;
    sidecar.files[rel] = { docs: { base: m.docs, v20: v20Path, how: m.how }, exclude: merged.exclude, conflicts: merged.conflicts, oursOnlyChunks: merged.oursOnly, migrationChunks: merged.theirsOnly };
  }
  mkdirSync(truthDir, { recursive: true });
  writeFileSync(join(truthDir, '.ods-truth.json'), `${JSON.stringify(sidecar, null, 2)}\n`);
  const mapped = Object.keys(sidecar.files).length;
  console.log(`storybook: ${story.size} text files, ${rewrites} imports rewritten in ${rewrittenFiles} files; truth for ${mapped} files (${coveredLines} lines covered, ${excludedLines} excluded, ${conflicts} conflicts); ${unmapped.length} with no docs file, ${deleted.length} deleted in the v20 docs`);

  return writeManifest(out, 'storybook', {
    source: {
      repo,
      corpus: { path: 'packages/storybook', ref: v19, sha: revParse(repo, v19) },
      docsBase: { path: 'packages/docs', ref: docsBase, sha: revParse(repo, docsBase) },
      docsV20: { path: 'packages/docs', ref: docsV20, sha: revParse(repo, docsV20) },
    },
    corpusRewrite: { imports: rewrites, files: rewrittenFiles, rule: 'relative ods-react/src imports → @ovhcloud/ods-react (JSON and styles kept)' },
    truth: {
      how: 'three-way merge per file: storybook v19 (ours), docs at docsBase (base), docs at docsV20 (theirs); ours kept and excluded where the docs base differs or both changed',
      files: mapped,
      linesCovered: coveredLines,
      linesExcluded: excludedLines,
      conflicts,
      unmapped,
      deletedInV20: deleted,
    },
    digests: { corpus: digestDir(corpus), truth: digestDir(truthDir) },
    runs: [{ label: 'storybook', corpus, truth: truthDir, gated: true }],
  });
}

if (isMain(import.meta.url)) {
  const o = cli('storybook', 'packages/storybook at v19 with its ODS imports rewritten, and a truth merged from the v20 docs migration.', {
    repo: { help: 'the design-system git repo', default: designSystemRepo() ?? undefined },
    v19: { help: 'the v19 ref', default: 'v19.7.3' },
    'docs-base': { help: 'packages/docs before the v20 migration', default: '9336e1951^' },
    'docs-v20': { help: 'packages/docs after the v20 migration', default: 'origin/master' },
  });
  prepareStorybook(o);
}
