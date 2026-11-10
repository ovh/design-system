import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { chmodSync, cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import { alignLines, isIgnored, parseGitignore, run } from '../src/cli.mjs';
import * as tokens from '../src/tokens.mjs';

const CLI = fileURLToPath(new URL('../src/cli.mjs', import.meta.url));
const FIXTURES = fileURLToPath(new URL('./fixtures/wp6/', import.meta.url));
const temps = [];
after(() => temps.forEach((dir) => rmSync(dir, { force: true, recursive: true })));

/** A fresh directory with the given files (`{ 'a/b.tsx': 'text' }`), or a copy of a fixture folder. */
function project(files = {}, fixture = null) {
  const dir = mkdtempSync(join(tmpdir(), 'ods-migrate-wp6-'));
  temps.push(dir);
  if (fixture) {
    cpSync(join(FIXTURES, fixture), dir, { recursive: true });
  }
  for (const [path, text] of Object.entries(files)) {
    mkdirSync(join(dir, path, '..'), { recursive: true });
    writeFileSync(join(dir, path), text);
  }
  return dir;
}

function cli(args, cwd, env = {}) {
  const result = spawnSync(process.execPath, [CLI, ...args], { cwd, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024, env: { ...process.env, DEBUG: '', ...env } });
  return { code: result.status, stderr: result.stderr, stdout: result.stdout };
}

/** Runs the CLI in process and returns its exit code, output and JSON report. */
async function runIn(cwd, args, extra = {}) {
  let stdout = '';
  let stderr = '';
  const json = join(cwd, '.report.json');
  const code = await run([...args, '--json', json], { cwd, stderr: (text) => { stderr += text; }, stdout: (text) => { stdout += text; }, ...extra });
  const report = existsSync(json) ? JSON.parse(readFileSync(json, 'utf8')) : null;
  rmSync(json, { force: true });
  return { code, report, stderr, stdout };
}

const BADGE = "import { Badge } from '@ovhcloud/ods-react';\nexport const A = () => <Badge color=\"primary\" />;\n";
const V20 = "import { Badge } from '@ovhcloud/ods-react';\nexport const A = () => <Badge status=\"accent\" />;\n";
const fileOf = (report, name) => report.files.find((file) => file.file.endsWith(name));

describe('cli: usage and errors', () => {
  it('prints the help with --help and -h, exit 0', () => {
    for (const flag of ['--help', '-h']) {
      const { code, stdout } = cli([flag], tmpdir());
      assert.equal(code, 0);
      assert.match(stdout, /^Usage: ods-migrate <path\.\.\.>/);
      assert.match(stdout, /--config <file>/);
    }
  });

  it('rejects an unknown flag, a missing value, no path and --check --write with one line and exit 2', () => {
    const dir = project({ 'a.tsx': BADGE });
    for (const args of [['.', '--wirte'], ['.', '--json'], [], ['.', '--check', '--write'], ['.', '--from', 'next']]) {
      const { code, stderr, stdout } = cli(args, dir);
      assert.equal(code, 2, args.join(' '));
      assert.match(stderr, /^ods-migrate: /);
      assert.doesNotMatch(stderr, /\n\s+at /, 'no stack trace');
      assert.equal(stdout, '');
    }
    assert.equal(readFileSync(join(dir, 'a.tsx'), 'utf8'), BADGE);
  });

  it('shows the stack under DEBUG=ods-migrate', () => {
    const dir = project({ 'bad.css': '.a { color: var(--ods-color-primary-500)' });
    const { code, stderr } = cli(['.'], dir, { DEBUG: 'ods-migrate' });
    assert.equal(code, 2);
    assert.match(stderr, /\n\s+at /);
  });

  it('fails before writing anything when a path does not exist (ENOENT), exit 2', () => {
    const dir = project({ 'a.tsx': BADGE });
    const { code, stderr } = cli(['a.tsx', 'missing', '--write'], dir);
    assert.equal(code, 2);
    assert.match(stderr, /missing: no such file or directory/);
    assert.equal(readFileSync(join(dir, 'a.tsx'), 'utf8'), BADGE);
  });

  it('checks the --json target before --write touches a file', () => {
    const dir = project({ 'a.tsx': BADGE });
    for (const target of ['reports/out.json', '.']) {
      const { code, stderr } = cli(['.', '--write', '--json', target], dir);
      assert.equal(code, 2);
      assert.match(stderr, /--json/);
      assert.equal(readFileSync(join(dir, 'a.tsx'), 'utf8'), BADGE);
    }
  });

  it('exits 2 when a file fails to parse, and still migrates the others', () => {
    const dir = project({ 'a.tsx': BADGE, 'bad.css': '.a { color: var(--ods-color-primary-500)', 'package.json': '{ "name": "x", }' });
    const { code, stderr } = cli(['.', '--write'], dir);
    assert.equal(code, 2);
    assert.match(stderr, /✗ bad\.css: parse error/);
    assert.match(stderr, /✗ package\.json: parse error/);
    assert.equal(readFileSync(join(dir, 'a.tsx'), 'utf8'), V20);
  });

  it('types the file errors in the JSON report', async () => {
    const dir = project({ 'bad.css': '.a { color: var(--ods-color-primary-500)' });
    const { code, report } = await runIn(dir, ['.']);
    assert.equal(code, 2);
    assert.equal(report.summary.errors, 1);
    assert.equal(fileOf(report, 'bad.css').errorCode, 'PARSE');
    assert.equal(typeof fileOf(report, 'bad.css').error, 'string');
  });
});

describe('cli: the files it scans', () => {
  it('does not follow symlinks met on the way: broken link, loop (p3, p4)', () => {
    const dir = project({ 'src/a.tsx': BADGE });
    symlinkSync('/nonexistent', join(dir, 'src', 'broken.tsx'));
    mkdirSync(join(dir, 'p4', 'a'), { recursive: true });
    symlinkSync('..', join(dir, 'p4', 'a', 'loop'));
    const { code, stdout } = cli(['.'], dir);
    assert.equal(code, 0);
    assert.match(stdout, /^1 files scanned/m);
  });

  it('reads a symlinked file given as an argument', () => {
    const dir = project({ 'real/a.tsx': BADGE });
    symlinkSync(join(dir, 'real', 'a.tsx'), join(dir, 'link.tsx'));
    const { code, stdout } = cli(['link.tsx'], dir);
    assert.equal(code, 0);
    assert.match(stdout, /^1 files scanned/m);
  });

  it('skips build output and generated files', () => {
    const files = { 'src/a.tsx': BADGE };
    for (const dir of ['storybook-static', '.next', 'out', 'dist', 'build', 'coverage', '.turbo', '.vite', '.cache', '.nx', '.output', '.docusaurus', 'node_modules/x']) {
      files[`${dir}/b.js`] = BADGE;
    }
    Object.assign(files, { 'src/vendor.min.js': BADGE, 'src/types.d.ts': BADGE, 'src/types.d.mts': BADGE });
    const dir = project(files);
    const { code, stdout } = cli(['.'], dir);
    assert.equal(code, 0);
    assert.match(stdout, /^1 files scanned/m);
  });

  it('follows the .gitignore files: patterns, negation, directories only, anchored', () => {
    const dir = project({
      '.gitignore': '# generated\n*.gen.tsx\n!keep.gen.tsx\ntmp/\n/root-only.tsx\nsrc/**/fixtures\n',
      'keep.gen.tsx': BADGE,
      'root-only.tsx': BADGE,
      'src/a.gen.tsx': BADGE,
      'src/a.tsx': BADGE,
      'src/deep/fixtures/x.tsx': BADGE,
      'src/root-only.tsx': BADGE,
      'src/tmp/x.tsx': BADGE,
      'src/tmp.tsx': BADGE,
      'sub/.gitignore': 'local.tsx\n',
      'sub/local.tsx': BADGE,
      'sub/other.tsx': BADGE,
    });
    const { code, stdout } = cli(['.'], dir);
    assert.equal(code, 0);
    const listed = [...stdout.matchAll(/^(\S+\.tsx)/gm)].map(([, file]) => file).sort();
    assert.deepEqual(listed, ['keep.gen.tsx', 'src/a.tsx', 'src/root-only.tsx', 'src/tmp.tsx', 'sub/other.tsx']);
  });

  it('reads the .gitignore files above the scanned folder, up to the git root', () => {
    const dir = project({ '.git/HEAD': 'ref: refs/heads/main\n', '.gitignore': 'legacy/\n', 'app/legacy/a.tsx': BADGE, 'app/src/a.tsx': BADGE });
    const { stdout } = cli(['app'], dir);
    assert.match(stdout, /^1 files scanned/m);
  });

  it('leaves alone what a .odsmigrateignore or --ignore names, --check included', () => {
    const CSS = '.a { color: var(--ods-color-primary-500); }\n';
    const dir = project({
      '.git/HEAD': 'ref: refs/heads/main\n',
      '.odsmigrateignore': '# copies of the website CSS, never loaded by the app\nsrc/styles/site-copies/\n',
      'src/a.tsx': V20,
      'src/styles/site-copies/site.css': CSS,
      'src/vendor/lib.tsx': BADGE,
    });
    const before = cli(['.', '--check'], dir);
    assert.equal(before.code, 1);
    assert.doesNotMatch(before.stdout, /site-copies/);
    assert.match(before.stdout, /src\/vendor\/lib\.tsx/);
    const after = cli(['.', '--check', '--ignore', 'src/vendor/'], dir);
    assert.equal(after.code, 0, after.stdout);
    assert.match(after.stdout, /^1 files scanned/m);
    // Read from above the scanned folder too, up to the git root.
    assert.match(cli(['src', '--ignore', 'src/vendor/'], dir).stdout, /^1 files scanned/m);
  });

  it('leaves a place the integrator decided (ods-v20: checked), so --check passes', () => {
    const css = "body {\n  > div[data-scope='dialog'][data-part='positioner'] {\n    z-index: 100;\n  }\n}\n";
    const tsx = "import { Modal } from '@ovhcloud/ods-react';\nexport const M = () => <Modal positionerStyle={{ zIndex: 150 }} />;\n";
    const dir = project({ 'src/index.css': css, 'src/M.tsx': tsx });
    assert.equal(cli(['.', '--check'], dir).code, 1);
    const marked = cli(['.', '--diff'], dir).stdout;
    assert.match(marked, /z-index: 100 on an ODS overlay: .* Once decided, put a comment `ods-v20: checked` right before it/);
    writeFileSync(join(dir, 'src/index.css'), css.replace('    z-index: 100;', '    /* ods-v20: checked: above the site header (99) */\n    z-index: 100;'));
    writeFileSync(join(dir, 'src/M.tsx'), tsx.replace('{{ zIndex', '{{ /* ods-v20: checked */ zIndex'));
    const after = cli(['.', '--check'], dir);
    assert.equal(after.code, 0, after.stdout);
  });

  it('never writes a file that is not UTF-8, and still migrates the others (a Latin-1 comment)', () => {
    const dir = project({ 'src/a.tsx': BADGE });
    const latin = Buffer.concat([Buffer.from('/* '), Buffer.from([0xe9, 0x71, 0x75, 0x69, 0x70, 0x65]), Buffer.from(' */\n.a { color: var(--ods-color-primary-500); }\n')]);
    writeFileSync(join(dir, 'src/latin.css'), latin);
    const { code, stderr } = cli(['.', '--write'], dir);
    assert.equal(code, 2);
    assert.match(stderr, /✗ src\/latin\.css: not UTF-8, migrate by hand \(not UTF-8: save it as UTF-8, then run ods-migrate again\)/);
    assert.deepEqual(readFileSync(join(dir, 'src/latin.css')), latin, 'its bytes are kept');
    assert.match(readFileSync(join(dir, 'src/a.tsx'), 'utf8'), /status="accent"/);
  });

  it('reports an unreadable script and still migrates the others', { skip: process.getuid?.() === 0 && 'root reads anything' }, () => {
    const dir = project({ 'src/a.tsx': BADGE, 'src/locked.tsx': BADGE });
    chmodSync(join(dir, 'src/locked.tsx'), 0o000);
    try {
      const { code, stderr } = cli(['.', '--write'], dir);
      assert.equal(code, 2);
      assert.match(stderr, /✗ src\/locked\.tsx: unreadable/);
      assert.doesNotMatch(stderr, /internal error/);
      assert.match(readFileSync(join(dir, 'src/a.tsx'), 'utf8'), /status="accent"/);
    } finally {
      chmodSync(join(dir, 'src/locked.tsx'), 0o644);
    }
  });

  it('scans .html files when the token engine can', () => {
    const dir = project({ 'index.html': '<style>.a { color: var(--ods-theme-text-color); }</style>\n' });
    const { stdout } = cli(['.'], dir);
    assert.match(stdout, /1 html/);
  });
});

describe('cli: gitignore parser', () => {
  it('matches like git', () => {
    const rules = parseGitignore('*.log\n!important.log\nbuild/\n/top\na/**/b\n**/deep\n[abc].txt\n\\#hash\n', '/r');
    const ignored = (path, isDir = false) => isIgnored(rules, `/r/${path}`, isDir);
    assert.equal(ignored('x.log'), true);
    assert.equal(ignored('sub/x.log'), true);
    assert.equal(ignored('important.log'), false);
    assert.equal(ignored('build', true), true);
    assert.equal(ignored('build'), false);
    assert.equal(ignored('top'), true);
    assert.equal(ignored('sub/top'), false);
    assert.equal(ignored('a/b', true), true);
    assert.equal(ignored('a/x/y/b', true), true);
    assert.equal(ignored('x/y/deep', true), true);
    assert.equal(ignored('b.txt'), true);
    assert.equal(ignored('d.txt'), false);
    assert.equal(ignored('#hash'), true);
  });
});

describe('cli: report (bugs [50], [61], [62], [71])', () => {
  it('maps the token lines back to the file on disk (p9 drift)', async () => {
    const dir = project({}, 'drift');
    const { report } = await runIn(dir, ['.']);
    const file = fileOf(report, 'drift.tsx');
    assert.deepEqual(file.changes.map(({ line, message }) => `${line} ${message.split(' ')[0]}`), ['2 import', '7 --ods-color-primary-500']);
    assert.deepEqual(file.markers.map(({ line }) => line), [8]);
  });

  it('aligns lines after deletions and insertions', () => {
    assert.deepEqual(alignLines('a\nb\nc\nd', 'a\nc\nd'), [1, 3, 4]);
    assert.deepEqual(alignLines('a\nb\nc', 'a\nm\nb\nc'), [1, 2, 2, 3]);
    assert.deepEqual(alignLines('a\nb\nc', 'a\nB\nc'), [1, 2, 3]);
    assert.deepEqual(alignLines('a\nb\nc\nd', 'a\nX\nY\nZ\nd'), [1, 2, 3, 3, 4]);
  });

  it('counts the files that only get markers, and the markers in the files (p18)', async () => {
    const dir = project({}, 'markers-only');
    const first = await runIn(dir, ['.', '--write']);
    assert.equal(first.code, 0);
    assert.equal(first.report.summary.filesChanged, 2);
    assert.equal(first.report.summary.markersAdded, 2);
    assert.match(first.stdout, /2 changed: 0 changes, 2 TODO\(ods-v20\) markers added/);
    assert.match(first.stdout, /^2 files written\./m);
    const second = await runIn(dir, ['.', '--write']);
    assert.equal(second.report.summary.filesChanged, 0);
    assert.equal(second.report.summary.markersAdded, 0);
    assert.equal(second.report.markersBefore, 2);
    assert.match(second.stdout, /^Nothing to write\./m);
  });

  it('counts markers, not the problems they hold', async () => {
    const dir = project({ 'a.css': '.a { box-shadow: 0 0 1px var(--ods-color-primary-500), 0 0 2px var(--ods-color-critical-500); }\n' });
    const { report } = await runIn(dir, ['.', '--write']);
    const markers = (readFileSync(join(dir, 'a.css'), 'utf8').match(/TODO\(ods-v20\)/g) ?? []).length;
    assert.equal(report.summary.markersAdded, markers);
    assert.equal(report.summary.markerItems >= markers, true);
  });

  it('writes the JSON report of the contract, every list sorted by line', async () => {
    const dir = project({ 'a.tsx': `${BADGE}const s = 'var(--ods-color-primary-500)';\nexport const B = () => <Badge color="neutral" />;\n` });
    const { report } = await runIn(dir, ['.']);
    assert.equal(report.version, 3);
    // The keys say what the text report says: markers, points to check, values for the type check.
    assert.deepEqual(Object.keys(report.summary).sort(), ['changes', 'errors', 'filesChanged', 'looks', 'markerItems', 'markersAdded', 'notOds', 'toCheck', 'toCheckByKind', 'typeCheck', 'untyped']);
    for (const key of ['mapping', 'config', 'from', 'scanned', 'markersBefore', 'files', 'byPackage', 'snapshots', 'manifest', 'optOutCss', 'notFinal', 'looks', 'notOds']) {
      assert.ok(key in report, key);
    }
    const file = fileOf(report, 'a.tsx');
    for (const key of ['changes', 'markers', 'toCheck', 'typeCheck', 'untyped', 'looks', 'notOds']) {
      assert.ok(Array.isArray(file[key]), key);
      assert.deepEqual(file[key].map(({ line }) => line), file[key].map(({ line }) => line).sort((a, b) => a - b));
    }
    assert.equal(file.changed, true);
  });

  it('lists the sites left to tsc in the text report', () => {
    const dir = project({ 'a.tsx': "import { Badge } from '@ovhcloud/ods-react';\nexport const A = ({ c }) => <Badge color={c} />;\n" });
    const { stdout } = cli(['.'], dir);
    assert.match(stdout, /^\s+2 {2}type <Badge status=\{…\}>: value computed at runtime: your type check verifies it once on v20 \(nothing to do if it passes\)$/m);
  });

  it('notes the llms files removed in v20 in code', async () => {
    const dir = project({ 'a.ts': "export const url = 'https://ovh.github.io/design-system/latest/llms/react-components-gallery.txt';\n" });
    const { report } = await runIn(dir, ['.']);
    assert.match(fileOf(report, 'a.ts').toCheck[0].message, /react-components-gallery\.txt: removed/);
    assert.equal(fileOf(report, 'a.ts').toCheck[0].kind, 'package');
  });
});

describe('cli: --check', () => {
  it('exits 1 when a file would change, and writes nothing', () => {
    const dir = project({ 'a.tsx': BADGE });
    const { code, stdout } = cli(['.', '--check'], dir);
    assert.equal(code, 1);
    assert.match(stdout, /Check: 1 files to migrate/);
    assert.equal(readFileSync(join(dir, 'a.tsx'), 'utf8'), BADGE);
  });

  it('exits 1 while a TODO(ods-v20) marker is left in the code, and lists it', () => {
    const dir = project({}, 'markers-only');
    cli(['.', '--write'], dir);
    const { code, stdout } = cli(['.', '--check'], dir);
    assert.equal(code, 1);
    assert.match(stdout, /already in the code/);
    assert.match(stdout, /Check: 0 files to migrate, 2 TODO\(ods-v20\) markers in the code\./);
  });

  it('exits 0 on migrated code', () => {
    const dir = project({ 'a.tsx': V20 });
    const { code, stdout } = cli(['.', '--check'], dir);
    assert.equal(code, 0);
    assert.match(stdout, /Check: nothing left to migrate\./);
  });

  it('lists the runtime values of untyped files without failing on them alone', () => {
    const dir = project({ 'a.jsx': "import { Badge } from '@ovhcloud/ods-react';\nexport const A = ({ c }) => <Badge color={c} />;\n" });
    const { code, stdout } = cli(['.', '--check'], dir);
    assert.match(stdout, /^\s+2 {2}untyped /m);
    assert.doesNotMatch(readFileSync(join(dir, 'a.jsx'), 'utf8'), /TODO/);
    assert.equal(code, 1, 'the file would change (color → status)');
  });
});

describe('cli: snapshots', () => {
  it('counts the v19 tokens of a .snap and never rewrites it', async () => {
    const snap = 'exports[`x 1`] = `<div style="color: var(--ods-color-primary-500)" />`;\n';
    const dir = project({ '__snapshots__/a.test.tsx.snap': snap });
    const { report, stdout } = await runIn(dir, ['.', '--write']);
    assert.equal(report.snapshots.files, 1);
    assert.equal(report.snapshots.tokens, 1);
    assert.match(stdout, /1 v19 tokens in 1 test snapshots/);
    assert.equal(readFileSync(join(dir, '__snapshots__/a.test.tsx.snap'), 'utf8'), snap);
  });

  it('does not count names that ODS v19 never declared', async () => {
    const dir = project({ 'a.snap': 'exports[`x 1`] = `<div class="bg-[--ods-color-blue-100]" />`;\n' });
    const { report } = await runIn(dir, ['.']);
    assert.equal(report.snapshots.tokens, 0);
    assert.equal(report.snapshots.unknown, 1);
  });
});

describe('cli: config and --from', () => {
  it('reads --config, prints it, and puts it in the report', async () => {
    const dir = project({ 'a.tsx': BADGE, 'look.json': JSON.stringify({ look: { 'badge-accent-filled': 'v19' }, version: 1 }) });
    const { code, report, stdout } = await runIn(dir, ['.', '--config', 'look.json']);
    assert.equal(code, 0);
    assert.match(stdout, /^Config: look\.json/m);
    assert.equal(report.config.file, join(dir, 'look.json'));
    assert.equal(report.config.look['badge-accent-filled'], 'v19');
  });

  it('finds ./ods-migrate.config.json', async () => {
    const dir = project({ 'a.tsx': BADGE, 'ods-migrate.config.json': '{}' });
    const { report, stdout } = await runIn(dir, ['.']);
    assert.match(stdout, /^Config: ods-migrate\.config\.json/m);
    assert.equal(report.config.file, join(dir, 'ods-migrate.config.json'));
  });

  it('rejects a broken config with exit 2, before writing', () => {
    for (const text of ['{ nope', JSON.stringify({ look: { 'badge-accent-filled': 'blue' } }), JSON.stringify({ colors: true }), JSON.stringify({ version: 2 })]) {
      const dir = project({ 'a.tsx': BADGE, 'c.json': text });
      const { code, stderr } = cli(['.', '--config', 'c.json', '--write'], dir);
      assert.equal(code, 2, text);
      assert.match(stderr, /^ods-migrate: /);
      assert.equal(readFileSync(join(dir, 'a.tsx'), 'utf8'), BADGE);
    }
    const { code } = cli(['.', '--config', 'missing.json'], project({ 'a.tsx': BADGE }));
    assert.equal(code, 2);
  });

  it('passes the v19 look to the codemod', () => {
    const dir = project({ 'a.tsx': BADGE, 'c.json': JSON.stringify({ look: { 'badge-accent-filled': 'v19' } }) });
    cli(['.', '--config', 'c.json', '--write'], dir);
    assert.match(readFileSync(join(dir, 'a.tsx'), 'utf8'), /status="accent" emphasis="high"/);
  });

  it('writes the opt-out CSS with --write only, and never over a file it did not write', async () => {
    const configModule = {
      ConfigError: Error,
      defaultConfig: () => ({ file: null, look: {}, optOutCss: null, pending: [], version: 1 }),
      describeConfig: () => ['button-radius: v19'],
      findConfig: () => null,
      loadConfig: (path) => ({ file: path, look: { 'button-radius': 'v19' }, optOutCss: join(path, '..', 'ods-v19-look.css'), pending: [], version: 1 }),
      optOutCss: () => '[data-ods="button"] { border-radius: 4px; }\n',
    };
    const dir = project({ 'a.tsx': BADGE, 'c.json': '{}' });
    const dry = await runIn(dir, ['a.tsx', '--config', 'c.json'], { configModule });
    assert.equal(dry.code, 0);
    assert.equal(existsSync(join(dir, 'ods-v19-look.css')), false);
    assert.deepEqual(dry.report.optOutCss, { path: 'ods-v19-look.css', upToDate: false, written: false });

    const wet = await runIn(dir, ['a.tsx', '--config', 'c.json', '--write'], { configModule });
    assert.equal(wet.code, 0);
    assert.equal(readFileSync(join(dir, 'ods-v19-look.css'), 'utf8'), '/* Generated by ods-migrate from c.json */\n[data-ods="button"] { border-radius: 4px; }\n');
    assert.match(wet.stdout, /Import it once, after the ODS theme, outside any CSS @layer/);
    assert.equal(wet.report.optOutCss.written, true);

    const own = project({ 'a.tsx': BADGE, 'c.json': '{}', 'ods-v19-look.css': '.mine {}\n' });
    const refused = await runIn(own, ['a.tsx', '--config', 'c.json', '--write'], { configModule });
    assert.equal(refused.code, 2);
    assert.match(refused.stderr, /not generated by ods-migrate/);
    assert.equal(readFileSync(join(own, 'ods-v19-look.css'), 'utf8'), '.mine {}\n');
    assert.equal(readFileSync(join(own, 'a.tsx'), 'utf8'), BADGE);
  });

  it('reads the ODS major from the nearest package.json, or takes --from', async () => {
    const dir = project({
      'apps/a/package.json': JSON.stringify({ dependencies: { '@ovhcloud/ods-react': '^20.0.0' } }),
      'apps/a/src/a.tsx': BADGE,
      'apps/b/package.json': JSON.stringify({ dependencies: { '@ovh-ux/muk': '^1.2.0' } }),
      'apps/b/src/b.tsx': BADGE,
      'apps/c/src/c.tsx': BADGE,
      'package.json': JSON.stringify({ devDependencies: { '@ovhcloud/ods-react': '~19.4.0' } }),
    });
    const { report } = await runIn(dir, ['.', '--built-on-ods', '@ovh-ux/muk']);
    assert.deepEqual(['a.tsx', 'b.tsx', 'c.tsx'].map((name) => fileOf(report, name).from), [20, 19, 19]);
    assert.equal(report.from, null);
    const forced = await runIn(dir, ['.', '--from', '20']);
    assert.equal(fileOf(forced.report, 'c.tsx').from, 20);
    assert.equal(forced.report.from, 20);
  });
});

describe('cli: package.json', () => {
  it('migrates package.json files with the lockfile next to them', async () => {
    const dir = project({
      'package-lock.json': '{}',
      'package.json': `${JSON.stringify({ dependencies: { '@shikijs/langs': '^3.11.0', react: '^19.0.0' } }, null, 2)}\n`,
      'tailwind.config.js': 'export default {};\n',
    });
    const { report } = await runIn(dir, ['.', '--write']);
    const manifest = JSON.parse(readFileSync(join(dir, 'package.json'), 'utf8'));
    assert.equal(manifest.dependencies['@shikijs/langs'], '^4.3.0');
    assert.deepEqual(manifest.overrides, { '@types/react': '^19', '@types/react-dom': '^19' });
    assert.equal(report.manifest.length, 1);
    assert.equal(report.manifest[0].changes.length, 2);
    assert.equal(report.summary.filesChanged, 1);
  });
});

describe('cli: performance', () => {
  it('migrates a 1.3 MB file in under 10 s', { timeout: 60_000 }, async () => {
    let source = "import { Badge } from '@ovhcloud/ods-react';\nexport const A = () => (<>\n";
    for (let i = 0; i < 27_000; i++) {
      source += i % 2 ? '  <Badge color="primary">a</Badge>\n' : '  <b style={{ boxShadow: "var(--ods-color-primary-500)" }} />\n';
    }
    source += '</>);\n';
    assert.ok(source.length > 1_300_000, `${source.length}`);
    const dir = project({ 'big.tsx': source });
    const start = Date.now();
    const { code } = cli(['.'], dir);
    assert.equal(code, 0);
    assert.ok(Date.now() - start < 10_000, `${Date.now() - start} ms`);
  });
});
