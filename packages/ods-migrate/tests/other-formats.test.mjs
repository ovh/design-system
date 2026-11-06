import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, describe, it } from 'node:test';
import { run } from '../src/cli.mjs';
import { isThemeJson, transformOtherStyles, transformThemeJson } from '../src/formats.mjs';

/* Less, indented Sass and the Theme Generator JSON (src/formats.mjs), and their discovery by the CLI. */

const mapping = JSON.parse(readFileSync(new URL('../mappings/tokens-v19-to-v20.json', import.meta.url), 'utf8'));
const temps = [];
after(() => temps.forEach((dir) => rmSync(dir, { force: true, recursive: true })));

describe('other formats: Less', () => {
  it('rewrites a Less file that reads as CSS, with its // comments', () => {
    const { changes, output } = transformOtherStyles('// theme\n.a { color: var(--ods-theme-text-color); }\n', mapping, 'a.less');
    assert.equal(output, '// theme\n.a { color: var(--ods-semantic-color-content-text); }\n');
    assert.equal(changes.length, 1);
  });

  it('marks each line that reads a v19 token in a Less file it cannot parse, with the v20 name', () => {
    const source = '.a { .mixin(1px); background: var(--ods-theme-background-color); }\n.b when (@x = 1) { color: var(--ods-color-primary-500); }\n';
    const { output, todos } = transformOtherStyles(source, mapping, 'a.less');
    assert.match(output, /^\/\/ TODO\(ods-v20\): ods-migrate does not rewrite this Less file .* --ods-theme-background-color → --ods-semantic-color-surface-raised\n\.a \{/);
    assert.match(output, /\n\/\/ TODO\(ods-v20\): .*--ods-color-primary-500: v20 names colours by what they paint.*\n\.b when/);
    assert.equal(new Set(todos.map(({ line }) => line)).size, 2);
    assert.equal(transformOtherStyles(output, mapping, 'a.less').output, output);
  });

  it('leaves a Less file without v19 tokens alone', () => {
    const source = '.a { .mixin(); color: var(--ods-semantic-color-content-text); }\n';
    assert.equal(transformOtherStyles(source, mapping, 'a.less').output, source);
  });
});

describe('other formats: indented Sass', () => {
  it('marks the lines that read a v19 token, with a // comment at their indent', () => {
    const source = '.a\n  color: var(--ods-theme-text-color)\n';
    const { output, todos } = transformOtherStyles(source, mapping, 'a.sass');
    assert.equal(output, '.a\n  // TODO(ods-v20): ods-migrate does not rewrite indented Sass: rewrite the ODS v19 tokens of the next line by hand / --ods-theme-text-color → --ods-semantic-color-content-text\n  color: var(--ods-theme-text-color)\n');
    assert.equal(todos[0].line, 2);
    assert.equal(transformOtherStyles(output, mapping, 'a.sass').output, output);
  });
});

describe('other formats: Theme Generator JSON', () => {
  const theme = '{ "--ods-color-primary-500": "#ff0000", "--ods-theme-text-color": "#111111", "--ods-theme-primary-color": "#ff0000" }\n';

  it('recognises a flat object keyed by v19 tokens, and nothing else', () => {
    assert.equal(isThemeJson(theme), true);
    assert.equal(isThemeJson('{ "compilerOptions": { "strict": true } }'), false);
    assert.equal(isThemeJson('{ "label": "--ods-color-primary-500" }'), false);
    assert.equal(isThemeJson('not json "--ods-color-primary-500":'), false);
  });

  it('renames its keys as a theme object, and lists what needs a person as points to check', () => {
    const { changes, notes, output } = transformThemeJson(theme, mapping, 'theme.json');
    assert.equal(output, '{ "--ods-palette-brand-500": "#ff0000", "--ods-semantic-color-content-text": "#111111", "--ods-theme-primary-color": "#ff0000" }\n');
    assert.equal(changes.length, 2);
    assert.match(notes.map(({ message }) => message).join('\n'), /--ods-theme-primary-color: .*JSON takes no TODO\(ods-v20\) comment/);
    assert.match(notes.map(({ message }) => message).join('\n'), /a 19\.x Theme Generator export/);
    JSON.parse(output);
  });
});

describe('other formats: discovery by the CLI', () => {
  it('scans .less, .sass and the JSON that has work, skips other JSON and the lockfiles', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'ods-migrate-formats-'));
    temps.push(dir);
    const files = {
      'package.json': '{ "dependencies": { "@ovhcloud/ods-react": "19.7.3", "@ovhcloud/ods-themes": "19.7.3" } }',
      'package-lock.json': '{ "packages": { "node_modules/@ovhcloud/ods-themes": { "version": "19.7.3" } } }',
      'tsconfig.json': '{ "compilerOptions": { "strict": true } }',
      'src/a.less': "@import (css) '~@ovhcloud/ods-themes/default';\n.a { color: var(--ods-theme-text-color); }\n",
      'src/b.sass': '.a\n  color: var(--ods-theme-text-color)\n',
      'src/theme.json': '{ "--ods-theme-text-color": "#111111" }\n',
      'src/copy.json': '{ "assets": ["node_modules/@ovhcloud/ods-themes/dist/default/fonts.css"] }\n',
    };
    for (const [path, text] of Object.entries(files)) {
      mkdirSync(join(dir, path, '..'), { recursive: true });
      writeFileSync(join(dir, path), text);
    }
    let stdout = '';
    await run(['.', '--write'], { cwd: dir, stderr: () => {}, stdout: (text) => { stdout += text; } });
    assert.match(stdout, /^5 files scanned \(2 json, 1 manifests, 2 styles\)/m);
    assert.equal(readFileSync(join(dir, 'src/a.less'), 'utf8'), "@import (css) '~@ovhcloud/ods-themes/default/css';\n@import (css) '~@ovhcloud/ods-themes/default/fonts';\n.a { color: var(--ods-semantic-color-content-text); }\n");
    assert.match(readFileSync(join(dir, 'src/b.sass'), 'utf8'), /TODO\(ods-v20\): ods-migrate does not rewrite indented Sass/);
    assert.equal(readFileSync(join(dir, 'src/theme.json'), 'utf8'), '{ "--ods-semantic-color-content-text": "#111111" }\n');
    assert.equal(readFileSync(join(dir, 'src/copy.json'), 'utf8'), '{ "assets": ["node_modules/@ovhcloud/ods-themes/dist/fonts.css"] }\n');
    assert.equal(readFileSync(join(dir, 'package-lock.json'), 'utf8'), files['package-lock.json']);
  });

  it('points a run that renames the ODS keys of a Tailwind configuration to @ovhcloud/ods-tailwind (BC-30)', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'ods-migrate-formats-'));
    temps.push(dir);
    writeFileSync(join(dir, 'package.json'), '{ "dependencies": { "@ovhcloud/ods-react": "19.7.3" } }');
    writeFileSync(join(dir, 'tailwind.config.js'), "module.exports = { theme: { extend: { borderRadius: { 'ods-border-radius-md': 'var(--ods-theme-border-radius)' } } } };\n");
    let stdout = '';
    await run(['.'], { cwd: dir, stderr: () => {}, stdout: (text) => { stdout += text; } });
    assert.match(stdout, /^Tailwind: your configuration declares 1 ODS key of the v19 guide \(renamed above\)\. ODS v20 ships @ovhcloud\/ods-tailwind/m);
  });
});
