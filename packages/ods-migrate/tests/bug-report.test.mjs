/*
 * An internal error is a bug in ods-migrate, never an error about a file of the integrator: the run
 * writes a report into the system temp folder (never into the project), scrubbed of the paths of the
 * machine, and says how to send it and what to do meanwhile. The crashes below are real ones of
 * ods-migrate 20.0.0 on inputs nested far deeper than any app writes; if a later version handles them,
 * replace them with another input that still crashes.
 */
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readdirSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { homedir, tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, describe, it } from 'node:test';
import { collapse, reportBug, scrubber } from '../src/bug-report.mjs';
import { run } from '../src/cli.mjs';

const temps = [];
after(() => temps.forEach((dir) => rmSync(dir, { force: true, recursive: true })));

function project(files = {}) {
  const dir = realpathSync(mkdtempSync(join(tmpdir(), 'ods-migrate-bug-')));
  temps.push(dir);
  for (const [path, text] of Object.entries(files)) {
    mkdirSync(join(dir, path, '..'), { recursive: true });
    writeFileSync(join(dir, path), text);
  }
  return dir;
}

async function migrate(dir, args = []) {
  let stderr = '';
  const code = await run(['.', ...args], { cwd: dir, stderr: (text) => { stderr += text; }, stdout: () => {} });
  const path = stderr.match(/^ {2}(.+ods-migrate-bug-report\.md)$/m)?.[1];
  if (path) temps.push(join(path, '..'));
  return { code, report: path ? readFileSync(path, 'utf8') : null, stderr };
}

const PACKAGE = '{ "dependencies": { "@ovhcloud/ods-react": "19.7.3" } }';
const BUTTON = "import { Button } from '@ovhcloud/ods-react';\nexport const B = () => <Button color=\"primary\">x</Button>;\n";
// 8,000 type aliases: the project index recurses once per alias.
const DEEP_KIT = [
  "import { Button, type ButtonProp } from '@ovhcloud/ods-react';",
  'type T0 = ButtonProp;',
  ...Array.from({ length: 8000 }, (_, i) => `type T${i + 1} = T${i};`),
  'export const MyButton = (props: T8000) => <Button { ...props } />;',
].join('\n');
// 3,000 nested parentheses: the codemod recurses once per level.
const DEEP_VALUE = `import { Button } from '@ovhcloud/ods-react';\nexport const A = () => <Button color={ ${'('.repeat(3000)}'primary'${')'.repeat(3000)} }>x</Button>;\n`;

describe('bug report: an internal error', () => {
  it('in the project index names the file and migrates the others in the same run, deep in a monorepo', async () => {
    const dir = project({ 'package.json': PACKAGE, 'apps/web/src/a.tsx': "import { MyButton } from './kit';\nexport const A = () => <MyButton>x</MyButton>;\n", 'apps/web/src/kit/index.tsx': DEEP_KIT, 'apps/web/src/b.tsx': BUTTON });
    const first = await migrate(dir, ['--write']);
    assert.equal(first.code, 2);
    assert.match(first.stderr, /^✗ apps\/web\/src\/kit\/index\.tsx: internal error, migrate by hand \(Maximum call stack size exceeded\)$/m);
    assert.match(first.stderr, /^This is a bug in ods-migrate \S+, not in your code\.$/m);
    assert.match(first.stderr, /^ {2}https:\/\/github\.com\/ovh\/design-system\/issues\/new\?title=ods-migrate\+/m);
    assert.match(first.stderr, /^Meanwhile, migrate that file by hand; the other files were written\.$/m);
    assert.match(first.stderr, /^The files that import a file listed in the report were read without it: /m);
    assert.match(first.report, /## File `apps\/web\/src\/kit\/index\.tsx`\n\nFailed while reading this file to find the modules of the project\./);
    assert.match(first.report, /- ODS in the scanned package\.json files: @ovhcloud\/ods-react 19\.7\.3/);
    assert.match(readFileSync(join(dir, 'apps/web/src/b.tsx'), 'utf8'), /<Button>x<\/Button>/, 'the other files are written in the same run');
    assert.equal(readFileSync(join(dir, 'apps/web/src/kit/index.tsx'), 'utf8'), DEEP_KIT, 'the file the index failed on is left as it is');
    assert.deepEqual(readdirSync(dir).sort(), ['apps', 'package.json'], 'no report is written into the project');
  });

  it('in the project index on a file of --ignore is reported, the file left out as in 20.0.0', async () => {
    const dir = project({ 'package.json': PACKAGE, 'src/a.tsx': "import { MyButton } from './kit';\nexport const A = () => <MyButton>x</MyButton>;\n", 'src/kit/index.tsx': DEEP_KIT, 'src/b.tsx': BUTTON });
    const ignored = await migrate(dir, ['--ignore', 'src/kit/']);
    assert.equal(ignored.code, 2);
    assert.doesNotMatch(ignored.stderr, /^✗ /m, 'a file the run leaves out is not listed as failed');
    assert.match(ignored.stderr, /^Meanwhile, the other files went through \(run with --write to apply them\)\.$/m);
    assert.match(ignored.report, /## File `src\/kit\/index\.tsx`/);
  });

  it('on one file keeps going, and says what the others did in a dry run and with --write', async () => {
    const dir = project({ 'package.json': PACKAGE, 'src/deep.tsx': DEEP_VALUE, 'src/b.tsx': BUTTON });
    const dry = await migrate(dir);
    assert.equal(dry.code, 2);
    assert.match(dry.stderr, /^✗ src\/deep\.tsx: internal error, migrate by hand \(Maximum call stack size exceeded\)$/m);
    assert.match(dry.stderr, /\)\n\nThis is a bug in ods-migrate /, 'a blank line sets the bug apart from the file lines');
    assert.match(dry.stderr, /^Meanwhile, migrate that file by hand; the other files went through \(run with --write to apply them\)\.$/m);
    assert.match(dry.report, /## File `src\/deep\.tsx`\n\n```\nRangeError: Maximum call stack size exceeded\n/);
    assert.equal(readFileSync(join(dir, 'src/b.tsx'), 'utf8'), BUTTON, 'a dry run writes nothing');
    const wet = await migrate(dir, ['--write']);
    assert.match(wet.stderr, /the other files were written\.$/m);
    assert.match(readFileSync(join(dir, 'src/b.tsx'), 'utf8'), /<Button>x<\/Button>/, 'color="primary" (brand, the v20 default) is written away');
  });

  it('is not raised for an error about the user\'s input', async () => {
    const dir = project({ 'package.json': PACKAGE, 'src/b.tsx': BUTTON });
    const usage = await migrate(dir, ['--ignore', '[z-a]']);
    assert.equal(usage.code, 2);
    assert.match(usage.stderr, /^ods-migrate: --ignore \[z-a\]: not a pattern git can read/m);
    assert.doesNotMatch(usage.stderr, /bug in ods-migrate/);
    const both = await migrate(dir, ['--ignore', '[z-a]', '--ignore', 'ok', '--ignore', '[9-0]']);
    assert.match(both.stderr, /^ods-migrate: --ignore \[z-a\], --ignore \[9-0\]: not patterns git can read/m, 'every invalid pattern is named at once');
    writeFileSync(join(dir, '.odsmigrateignore'), '[z-a]\nsrc/b.tsx\n');
    const file = await migrate(dir);
    assert.equal(file.code, 0, 'a .odsmigrateignore line git cannot read is skipped, as git does');
    assert.doesNotMatch(file.stderr, /bug in ods-migrate/);
  });
});

describe('bug report: what it holds', () => {
  it('scrubs every path of the machine, in the title, the command, the files and the stack', () => {
    const cwd = project({ 'package.json': PACKAGE });
    const outside = join(homedir(), 'elsewhere', 'deep', 'repo', 'src', 'a.tsx');
    const error = new Error(`${join(cwd, 'src/a.tsx')}: overlapping edits`);
    error.stack = `Error: ${error.message}\n    at f (${outside}:1:2)\n    at g (C:\\Users\\jdoe\\AppData\\npm\\node_modules\\postcss\\lib\\input.js:3:4)\n    at h (${join(tmpdir(), 'x', 'y.mjs')}:5:6)`;
    const lines = reportBug({ argv: [cwd, '--json', join(homedir(), 'reports', 'r.json')], cwd, failures: [{ error, file: outside }] }).join('\n');
    const path = lines.match(/^ {2}(.+ods-migrate-bug-report\.md)$/m)[1];
    temps.push(join(path, '..'));
    const report = readFileSync(path, 'utf8');
    for (const text of [report, lines.split('\n').find((line) => line.includes('issues/new'))]) {
      assert.doesNotMatch(text, new RegExp([homedir(), cwd, tmpdir(), 'jdoe'].map((part) => part.replace(/[\\^$.*+?()[\]{}|/]/g, '\\$&')).join('|')));
    }
    assert.match(report, /^# ods-migrate \S+: <project>\/src\/a\.tsx: overlapping edits$/m);
    assert.match(report, /- Command: `ods-migrate <project> --json <home>\/reports\/r\.json`/);
    assert.match(report, /^ {4}at g \(…\/lib\/input\.js:3:4\)$/m);
  });

  it('collapses a recursion of one frame and of two frames that call each other', () => {
    const one = ['RangeError: x', ...Array(50).fill('    at f (a.mjs:1:1)'), '    at main (b.mjs:2:2)'];
    assert.deepEqual(collapse(one), ['RangeError: x', '    at f (a.mjs:1:1)', '    … the same frame 49 more times', '    at main (b.mjs:2:2)']);
    const two = ['RangeError: x', ...Array(40).fill(['    at visit (a.mjs:1:1)', '    at Array.forEach (<anonymous>)']).flat()];
    assert.deepEqual(collapse(two), ['RangeError: x', '    at visit (a.mjs:1:1)', '    at Array.forEach (<anonymous>)', '    … the same 2 frames 39 more times']);
  });

  it('keeps a relative path whole, and an absolute one from where it starts', () => {
    const scrub = scrubber('/work/app');
    assert.equal(scrub('apps/web/src/kit/index.tsx and ../../libs/kit/src/index.tsx'), 'apps/web/src/kit/index.tsx and ../../libs/kit/src/index.tsx');
    assert.equal(scrub('at f (/opt/build/libs/kit/src/index.tsx:1:2)'), 'at f (…/src/index.tsx:1:2)');
  });

  it('scrubs a root in any case, as Windows spells it', () => {
    const scrub = scrubber('C:\\Users\\JDoe\\work\\app');
    assert.equal(scrub('at f (c:\\users\\jdoe\\work\\app\\src\\a.tsx:1:2)'), 'at f (<project>\\src\\a.tsx:1:2)');
    assert.equal(scrub('file:///c:/users/jdoe/work/app/src/a.tsx'), 'file:///<project>/src/a.tsx');
  });

  it('quotes the arguments of the command as a shell reads them back', () => {
    const lines = reportBug({ argv: ['.', '--ignore', 'src/my kit/**', "it's"], cwd: '/work/app', failures: [{ error: new Error('x'), file: null }] }).join('\n');
    const path = lines.match(/^ {2}(.+ods-migrate-bug-report\.md)$/m)[1];
    temps.push(join(path, '..'));
    assert.match(readFileSync(path, 'utf8'), /- Command: `ods-migrate \. --ignore 'src\/my kit\/\*\*' 'it'\\''s'`/);
  });

  it('says why the report could not be written, and prints it instead', () => {
    const temp = process.env.TMPDIR;
    const file = join(project({ 'not-a-folder': '' }), 'not-a-folder');
    process.env.TMPDIR = file;
    try {
      const text = reportBug({ argv: [], cwd: '/work/app', failures: [{ error: new Error('boom'), file: null }] }).join('\n');
      assert.match(text, /^The report could not be written into .+ \(ENOTDIR\): open an issue with it below/m);
      assert.match(text, /^# ods-migrate \S+: boom$/m);
    } finally {
      if (temp === undefined) delete process.env.TMPDIR;
      else process.env.TMPDIR = temp;
    }
  });

  it('never hides the error it reports when it fails itself', () => {
    const lines = reportBug({ argv: [], cwd: '/work/app', failures: [] });
    assert.match(lines.join('\n'), /^This is a bug in ods-migrate \S+, not in your code\. The bug report could not be written \(.+\): run again with DEBUG=ods-migrate/m);
  });

  it('scrubs the reason it could not be written', () => {
    const cwd = project();
    const failures = [{ get error() { throw new Error(`cannot read ${join(cwd, 'src', 'kit', 'index.tsx')}`); }, file: null }];
    const text = reportBug({ argv: [], cwd, failures }).join('\n');
    assert.match(text, /could not be written \(cannot read <project>\/src\/kit\/index\.tsx\)/);
    assert.doesNotMatch(text, new RegExp(cwd.replace(/[\\^$.*+?()[\]{}|/]/g, '\\$&')));
  });

  it('leaves a root alone: HOME=/ in a container, a run from /', () => {
    const home = process.env.HOME;
    process.env.HOME = '/';
    try {
      assert.equal(scrubber('/')('Maximum call stack size exceeded'), 'Maximum call stack size exceeded');
    } finally {
      process.env.HOME = home;
    }
  });

  it('scrubs the project path written with a trailing slash or as a file URL', () => {
    const scrub = scrubber('/work/my app/');
    assert.equal(scrub('/work/my app/src/a.tsx'), '<project>/src/a.tsx');
    assert.equal(scrub('file:///work/my%20app/src/a.tsx'), 'file://<project>/src/a.tsx');
  });
});
