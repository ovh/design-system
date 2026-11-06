import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { after, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import {
  checkDigest, copyTree, coverageCommand, digestDir, gitArchive, gitShow, lineSimilarity, mergeKeepOurs, mergeRanges, rewriteOdsImports,
} from '../scripts/coverage/corpora/common.mjs';
import { mapToDocs } from '../scripts/coverage/corpora/storybook.mjs';

const CORPORA = fileURLToPath(new URL('../scripts/coverage/corpora/', import.meta.url));
const work = mkdtempSync(join(tmpdir(), 'ods-corpora-'));
after(() => rmSync(work, { force: true, recursive: true }));
const write = (file, text) => {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, text);
};

describe('coverage-c corpora: import rewrite', () => {
  it('rewrites the monorepo-relative ods-react imports, keeps JSON and styles, keeps the line count', () => {
    const src = [
      "import { Button } from '../../../../ods-react/src/components/button/src';",
      "import { formatPrice } from \"../../../../ods-react/src/utils/format\";",
      "import spec from '../../../../ods-react/src/components/tooltip/documentation/tooltip.json';",
      "import utils from '../../../../ods-react/documentation/utils.json';",
      "import { x } from '../helpers/source';",
    ].join('\n');
    const { text, count } = rewriteOdsImports(src);
    assert.equal(count, 2);
    assert.deepEqual(text.split('\n'), [
      "import { Button } from '@ovhcloud/ods-react';",
      'import { formatPrice } from "@ovhcloud/ods-react";',
      "import spec from '../../../../ods-react/src/components/tooltip/documentation/tooltip.json';",
      "import utils from '../../../../ods-react/documentation/utils.json';",
      "import { x } from '../helpers/source';",
    ]);
  });
});

describe('coverage-c corpora: merge that keeps ours where the truth is unknown', () => {
  const base = 'a\nb\nc\nd\ne\nf\ng\nh';
  it('applies the change only theirs made (the hand migration), with no exclusion', () => {
    const r = mergeKeepOurs(base, base, 'a\nb\nC\nd\ne\nf\ng\nh');
    assert.equal(r.text, 'a\nb\nC\nd\ne\nf\ng\nh');
    assert.deepEqual(r.exclude, []);
    assert.equal(r.theirsOnly, 1);
  });
  it('keeps and excludes the lines only ours has (content the truth never saw)', () => {
    const r = mergeKeepOurs('a\nb\nX\nY\nc\nd\ne\nf\ng\nh', base, 'a\nb\nc\nd\ne\nf\nG\nh');
    assert.equal(r.text, 'a\nb\nX\nY\nc\nd\ne\nf\nG\nh');
    assert.deepEqual(r.exclude, [[3, 4]]);
  });
  it('keeps ours and excludes a conflict; takes an identical change on both sides', () => {
    const conflict = mergeKeepOurs('a\nB1\nc\nd\ne\nf\ng\nh', base, 'a\nB2\nc\nd\ne\nf\ng\nh');
    assert.deepEqual([conflict.text.split('\n')[1], conflict.exclude, conflict.conflicts], ['B1', [[2, 2]], 1]);
    const same = mergeKeepOurs('a\nB\nc\nd\ne\nf\ng\nh', base, 'a\n  B\nc\nd\ne\nf\ng\nh');
    assert.deepEqual([same.exclude, same.conflicts], [[], 0]);
  });
  it('excludes the neighbours of a line ours deleted', () => {
    const r = mergeKeepOurs('a\nb\nd\ne\nf\ng\nh', base, base);
    assert.deepEqual(r.exclude, [[2, 3]]);
  });
  it('merges ranges', () => {
    assert.deepEqual(mergeRanges([[5, 6], [1, 2], [3, 3], [9, 9]]), [[1, 3], [5, 6], [9, 9]]);
  });
});

describe('coverage-c corpora: storybook → docs mapping', () => {
  it('maps by path, then by the most similar file of the same name (same folder name first)', () => {
    const story = { 'stories/a/a.stories.tsx': 'x\ny\nz', 'src/helpers/source.ts': 'one\ntwo\nthree', 'stories/b/documentation.mdx': 'b1\nb2\nshared', 'src/only.ts': 'nothing alike' };
    const docs = { 'stories/a/a.stories.tsx': 'x\ny', 'stories/support/source.ts': 'one\ntwo\nthree', 'stories/a/documentation.mdx': 'b1\nshared\nzz', 'stories/b/documentation.mdx': 'b1\nshared\nqq', 'src/only.ts.bak': '' };
    const map = mapToDocs(Object.keys(story), Object.keys(docs), { story: (f) => story[f], docs: (f) => docs[f] });
    assert.equal(map.get('stories/a/a.stories.tsx').docs, 'stories/a/a.stories.tsx');
    assert.equal(map.get('src/helpers/source.ts').docs, 'stories/support/source.ts');
    assert.equal(map.get('stories/b/documentation.mdx').docs, 'stories/b/documentation.mdx');
    assert.equal(map.has('src/only.ts'), false);
    assert.equal(lineSimilarity('a\nb', 'b\na\n'), 1);
  });
});

describe('coverage-c corpora: digests and copies', () => {
  it('digests the files the harness copies: no node_modules, build output, .git or symlinks', () => {
    const dir = join(work, 'd1');
    write(join(dir, 'src/a.ts'), 'a');
    write(join(dir, 'node_modules/x/index.js'), 'x');
    write(join(dir, 'dist/a.js'), 'a');
    symlinkSync(join(dir, 'src'), join(dir, 'link'));
    const d = digestDir(dir);
    assert.equal(d.files, 1);
    write(join(dir, 'dist/b.js'), 'b');
    assert.equal(digestDir(dir).sha256, d.sha256);
    write(join(dir, 'src/a.ts'), 'b');
    assert.notEqual(digestDir(dir).sha256, d.sha256);
    assert.equal(digestDir(dir, { skip: ['src/a.ts'] }).files, 0);
  });
  it('copies a tree with the same rules (and extra names left out)', () => {
    const from = join(work, 'd1');
    const to = join(work, 'd1-copy');
    write(join(from, 'pnpm-lock.yaml'), 'lock');
    copyTree(from, to, { exclude: ['pnpm-lock.yaml'] });
    assert.equal(existsSync(join(to, 'src/a.ts')), true);
    assert.equal(existsSync(join(to, 'node_modules')), false);
    assert.equal(existsSync(join(to, 'pnpm-lock.yaml')), false);
    assert.equal(existsSync(join(to, 'link')), false);
  });
  it('checks a digest against the pinned one', () => {
    const pinned = { sha256: 'a'.repeat(64), files: 2 };
    assert.equal(checkDigest('x', pinned, pinned).ok, true);
    assert.equal(checkDigest('x', pinned, null).ok, null);
    assert.throws(() => checkDigest('x', { sha256: 'b'.repeat(64), files: 2 }, pinned, { strict: true }), /not comparable/);
  });
  it('writes the coverage command of a run', () => {
    assert.equal(coverageCommand({ label: 'l', corpus: '/c', truth: '/t', treatAsOds: ['@x/y'] }, { json: 'l.json' }), 'node scripts/coverage.mjs /c --truth /t --treat-as-ods @x/y --label l --json l.json');
  });
});

const hasGit = spawnSync('git', ['--version']).status === 0;
describe('coverage-c corpora: git sources', { skip: hasGit ? false : 'needs git' }, () => {
  const repo = join(work, 'repo');
  const g = (...args) => execFileSync('git', ['-C', repo, ...args], { encoding: 'utf8', env: { ...process.env, GIT_AUTHOR_NAME: 't', GIT_AUTHOR_EMAIL: 't@t', GIT_COMMITTER_NAME: 't', GIT_COMMITTER_EMAIL: 't@t' } });
  it('archives a path or the whole tree of a ref, and shows a file at a ref', () => {
    mkdirSync(repo, { recursive: true });
    g('init', '-q');
    write(join(repo, 'packages/app/a.ts'), 'v1');
    write(join(repo, 'top.txt'), 't');
    g('add', '.');
    g('commit', '-qm', 'one', '--no-gpg-sign');
    write(join(repo, 'packages/app/a.ts'), 'v2');
    g('commit', '-qam', 'two', '--no-gpg-sign');
    gitArchive(repo, 'HEAD~1', 'packages/app', join(work, 'out/app'));
    assert.equal(readFileSync(join(work, 'out/app/a.ts'), 'utf8'), 'v1');
    gitArchive(repo, 'HEAD', '.', join(work, 'out/all'));
    assert.equal(readFileSync(join(work, 'out/all/packages/app/a.ts'), 'utf8'), 'v2');
    assert.equal(existsSync(join(work, 'out/all/top.txt')), true);
    assert.equal(gitShow(repo, 'HEAD~1', 'packages/app/a.ts'), 'v1');
    assert.equal(gitShow(repo, 'HEAD', 'missing.ts'), null);
  });
  it('the examples script writes the corpus, the truth and a manifest with digests and runs', () => {
    write(join(repo, 'packages/examples/vite-app/src/App.tsx'), "<Button color='primary' />");
    g('add', '.');
    g('commit', '-qm', 'v19', '--no-gpg-sign');
    g('branch', 'v19');
    write(join(repo, 'packages/examples/vite-app/src/App.tsx'), "<Button status='brand' />");
    g('commit', '-qam', 'v20', '--no-gpg-sign');
    const out = join(work, 'prepared');
    const r = spawnSync(process.execPath, [join(CORPORA, 'examples.mjs'), '--out', out, '--repo', repo, '--v19', 'v19', '--v20', 'HEAD'], { encoding: 'utf8' });
    assert.equal(r.status, 0, r.stderr);
    const manifest = JSON.parse(readFileSync(join(out, 'examples.corpus.json'), 'utf8'));
    assert.equal(readFileSync(join(out, 'examples/corpus/vite-app/src/App.tsx'), 'utf8'), "<Button color='primary' />");
    assert.equal(readFileSync(join(out, 'examples/truth/vite-app/src/App.tsx'), 'utf8'), "<Button status='brand' />");
    assert.equal(manifest.digests.corpus.files, 1);
    assert.deepEqual(manifest.runs.map((x) => x.label), ['examples', 'examples-accessibility-test', 'examples-nextjs-app', 'examples-react-router-app', 'examples-vite-app', 'examples-webpack-app']);
    assert.equal(manifest.source.v19.sha.length, 40);
  });
  it('a prepare script without --out prints its usage and exits 2', () => {
    for (const name of ['examples', 'recipes', 'storybook', 'manager']) {
      const r = spawnSync(process.execPath, [join(CORPORA, `${name}.mjs`)], { encoding: 'utf8' });
      assert.equal(r.status, 2, name);
      assert.match(r.stderr, /Usage: node scripts\/coverage\/corpora\//, name);
    }
  });
});
