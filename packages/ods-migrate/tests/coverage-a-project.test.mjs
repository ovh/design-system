/*
 * Coverage harness, the project model (scripts/coverage/project.mjs): package scope, tsconfig reading,
 * module resolution per file, premature rewrites. Fixture: tests/fixtures/coverage-a/project, a small
 * monorepo (a UI kit on ODS 19 built to a missing dist/, an app reaching ODS through it with a
 * solution-style tsconfig, package.json `imports` and a relative barrel, an app on ODS 18).
 */
import assert from 'node:assert/strict';
import { cpSync, mkdtempSync, rmSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import { diffLines } from 'diff';
import { countHunks, globToRegExp, includes, loadProject, prematureRewrites, rangeMajors } from '../scripts/coverage/project.mjs';
import { skipTs, ts } from './coverage-helpers.mjs';

const FIXTURE = fileURLToPath(new URL('./fixtures/coverage-a/', import.meta.url));
const PROJECT = join(FIXTURE, 'project');

const noTs = skipTs;

describe('coverage project: version ranges', () => {
  it('reads the majors a range allows', () => {
    const majors = (r) => [...rangeMajors(r)];
    assert.deepEqual(majors('^19.0.1'), [19]);
    assert.deepEqual(majors('~19.5.0'), [19]);
    assert.deepEqual(majors('19.5.0'), [19]);
    assert.deepEqual(majors('19.x'), [19]);
    assert.deepEqual(majors('>=19.0.0 <20.0.0'), [19]);
    assert.deepEqual(majors('^18.0.0 || ^19.0.0'), [18, 19]);
    assert.deepEqual(majors('18.6.4'), [18]);
    assert.deepEqual(majors('npm:@ovhcloud/ods-react@^19.2.0'), [19]);
    for (const unknown of ['workspace:*', 'catalog:', '*', 'latest', '']) assert.deepEqual(majors(unknown), [], unknown);
  });
});

describe('coverage project: tsconfig include patterns', () => {
  it('matches directories, ** and * like TypeScript', () => {
    assert.equal(globToRegExp('src', '/p').test('/p/src/a/b.tsx'), true);
    assert.equal(globToRegExp('src', '/p').test('/p/srcx/a.ts'), false);
    assert.equal(globToRegExp('src/**/*.ts', '/p').test('/p/src/a.ts'), true);
    assert.equal(globToRegExp('src/**/*.ts', '/p').test('/p/src/a/b.ts'), true);
    assert.equal(globToRegExp('*.ts', '/p').test('/p/a/b.ts'), false);
    assert.equal(globToRegExp('vite.config.ts', '/p').test('/p/vite.config.ts'), true);
  });

  it('applies files, include and exclude, and the default include', () => {
    const config = { dir: '/p', include: { patterns: ['src'], base: '/p' }, exclude: { patterns: ['src/__tests__'], base: '/p' } };
    assert.equal(includes(config, '/p/src/App.tsx'), true);
    assert.equal(includes(config, '/p/src/__tests__/a.ts'), false);
    assert.equal(includes(config, '/p/other.ts'), false);
    assert.equal(includes({ dir: '/p' }, '/p/any/where.ts'), true);
    assert.equal(includes({ dir: '/p', files: { patterns: [], base: '/p' } }, '/p/a.ts'), false);
  });
});

describe('coverage project: the fixture monorepo', { skip: noTs }, () => {
  const project = ts && loadProject(ts, PROJECT, { pinned: ['@ovhcloud/ods-react', 'react', 'react/*'] });

  it('classifies each package by its nearest package.json', () => {
    assert.deepEqual(project.packages.map((p) => [p.dir, p.status]), [
      ['', 'none'],
      ['apps/app', 'ods19-via'], // no ODS dependency of its own, @acme/kit is on ODS 19
      ['apps/legacy', 'other-ods'], // ods-themes 18.6.4
      ['packages/kit', 'ods19'], // peerDependencies ^19.5.0
      ['packages/tsconfig', 'none'],
    ]);
    assert.equal(project.scopeOf('apps/app/src/App.tsx').inScope, true);
    assert.equal(project.scopeOf('apps/legacy/src/legacy.ts').inScope, false);
    assert.equal(project.scopeOf('packages/kit/src/wrapper.tsx').status, 'ods19');
    assert.equal(project.scopeOf('README.md').status, 'none');
  });

  it('reads every tsconfig, following a workspace extends with comments and trailing commas', () => {
    const s = project.summary();
    assert.equal(s.tsconfigs, 4);
    assert.equal(s.tsconfigsRead, 4);
    assert.equal(s.withPaths, 3);
    assert.deepEqual(s.unresolvedExtends, []); // `@acme/tsconfig/base` is found in the workspace
    assert.deepEqual(s.outOfScope.map((p) => p.dir), ['apps/legacy']);
  });

  it('picks the config of a file, solution-style references by include', () => {
    const rel = (c) => c && c.file.slice(PROJECT.length + 1);
    assert.equal(rel(project.configOf(join(PROJECT, 'apps/app/src/App.tsx'))), 'apps/app/tsconfig.app.json');
    assert.equal(rel(project.configOf(join(PROJECT, 'apps/app/vite.config.ts'))), 'apps/app/tsconfig.node.json');
    assert.equal(rel(project.configOf(join(PROJECT, 'packages/kit/src/index.ts'))), 'packages/kit/tsconfig.json');
    assert.equal(project.configOf(join(PROJECT, 'apps/legacy/src/legacy.ts')), null);
  });

  it('resolves aliases, package.json imports and workspace packages per file, on any copy', () => {
    const copy = mkdtempSync(join(tmpdir(), 'coverage-a-copy-'));
    try {
      cpSync(PROJECT, copy, { recursive: true });
      for (const root of [PROJECT, copy]) {
        const options = { module: ts.ModuleKind.ESNext, moduleResolution: ts.ModuleResolutionKind.Bundler, allowImportingTsExtensions: true, noEmit: true, paths: {} };
        const resolveOne = project.moduleResolver(ts, root, options, ts.sys);
        const to = (spec, from) => resolveOne(spec, join(root, from), undefined).resolvedModule?.resolvedFileName?.slice(root.length + 1);
        assert.equal(to('~/ods-direct', 'apps/app/src/App.tsx'), 'apps/app/src/ods-direct.ts'); // tsconfig.app.json paths
        assert.equal(to('#ods', 'apps/app/src/App.tsx'), 'apps/app/src/ods.ts'); // package.json imports
        assert.equal(to('@acme/kit', 'apps/app/src/App.tsx'), 'packages/kit/src/index.ts'); // types in dist/ → the sources
        assert.equal(to('@/wrapper', 'packages/kit/src/index.ts'), 'packages/kit/src/wrapper.tsx'); // the kit's own alias
        assert.equal(to('@/wrapper', 'apps/app/src/App.tsx'), undefined); // not the app's alias
      }
    } finally {
      rmSync(copy, { force: true, recursive: true });
    }
  });
});

describe('coverage project: premature rewrites', { skip: noTs }, () => {
  const work = mkdtempSync(join(tmpdir(), 'coverage-a-premature-'));
  after(() => rmSync(work, { force: true, recursive: true }));

  it('counts the files and hunks ods-migrate changed in packages not on ODS 19, and only those', () => {
    const base = join(work, 'base');
    const migrated = join(work, 'migrated');
    cpSync(PROJECT, base, { recursive: true });
    cpSync(PROJECT, migrated, { recursive: true });
    const legacy = join(migrated, 'apps/legacy/src/legacy.ts');
    writeFileSync(legacy, readFileSync(legacy, 'utf8').replace(/BUTTON_COLOR/g, 'BUTTON_STATUS').replace('primary', 'critical'));
    writeFileSync(join(migrated, 'apps/legacy/package.json'), '{ "name": "@acme/legacy", "private": true, "dependencies": { "@ovhcloud/ods-themes": "^20.0.0" } }\n');
    const app = join(migrated, 'apps/app/src/App.tsx');
    writeFileSync(app, readFileSync(app, 'utf8').replace('color=', 'status='));
    writeFileSync(join(migrated, 'ods-migrate.modules.json'), '{}\n');
    const project = loadProject(ts, base);
    const r = prematureRewrites({ scopeOf: project.scopeOf, base, migrated, diffLines });
    assert.deepEqual(r.list.map((f) => [f.file, f.hunks]), [['apps/legacy/package.json', 1], ['apps/legacy/src/legacy.ts', 2]]);
    assert.equal(r.files, 2);
    assert.equal(r.hunks, 3);
    assert.deepEqual(r.byPackage, { 'apps/legacy': { status: 'other-ods', files: 2, hunks: 3 } });
  });

  it('counts contiguous changed regions', () => {
    assert.equal(countHunks(diffLines('a\nb\nc\nd\n', 'a\nB\nc\nD\n')), 2);
    assert.equal(countHunks(diffLines('a\nb\n', 'x\ny\n')), 1);
    assert.equal(countHunks(diffLines('a\n', 'a\n')), 0);
  });
});
