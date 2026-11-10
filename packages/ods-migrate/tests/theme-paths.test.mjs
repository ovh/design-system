import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, describe, it } from 'node:test';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { run } from '../src/cli.mjs';
import { bumpVersion, migrateHtmlPaths, migrateJsonPaths, migrateScriptPaths, migrateStylePaths } from '../src/paths.mjs';

/*
 * The paths into @ovhcloud/ods-themes (src/paths.mjs): BC-31 (the `./default` bundle), BC-32 (the
 * files moved in dist/ and src/), BC-33 (ODS_THEME, ODS_THEMES) and the import side of BC-06 (the
 * tokens JSON), in stylesheets, HTML, scripts and JSON configs.
 */

const temps = [];
after(() => temps.forEach((dir) => rmSync(dir, { force: true, recursive: true })));

/*
 * The themes and ods-react packages of master: those of this checkout when it has the v20 layout,
 * otherwise extracted from its `origin/master` (a worktree on an older branch); null without either.
 */
function masterPackages() {
  const checkout = fileURLToPath(new URL('../../../', import.meta.url));
  if (existsSync(join(checkout, 'packages/themes/src/aluminium/light.scss'))) return checkout;
  const dir = mkdtempSync(join(tmpdir(), 'ods-migrate-master-'));
  temps.push(dir);
  const archive = spawnSync('git', ['-C', checkout, 'archive', '--format=tar', 'origin/master', 'packages/themes', 'packages/ods-react/package.json', 'packages/ods-react/src/style'], { maxBuffer: 1 << 28 });
  if (archive.status !== 0 || spawnSync('tar', ['-x', '-C', dir], { input: archive.stdout }).status !== 0) return null;
  return existsSync(join(dir, 'packages/themes/src/aluminium/light.scss')) ? dir : null;
}
const REPO = masterPackages();
const THEMES = REPO && join(REPO, 'packages/themes');
const NO_MASTER = !REPO && 'needs the packages of master (this checkout, or its origin/master ref)';

const messages = (list) => list.map(({ message }) => message).join('\n');
const style = (source, kind = 'scss') => migrateStylePaths(source, kind);
const script = (source, options = {}) => migrateScriptPaths(source, 'a.tsx', options);

/** Every path the passes write must exist on master: an export of the themes package, or a file in it. */
function existsOnMaster(path) {
  const exportsOf = JSON.parse(readFileSync(join(THEMES, 'package.json'), 'utf8')).exports;
  const sub = path.replace(/^.*?ods-themes(?:@[^/]+)?\//, '');
  if (exportsOf[`./${sub}`]) return true;
  const file = join(THEMES, sub);
  return [file, `${file}.scss`, file.replace(/([^/]+)$/, '_$1.scss'), `${file}.css`].some(existsSync)
    || (/^dist\//.test(sub) && Object.values(exportsOf).some((target) => target.default === `./${sub}`));
}

describe('theme paths: BC-31, the base64 bundle `./default`', () => {
  it('becomes default/css + default/fonts in Sass, CSS and Less, with the `~` prefix kept', () => {
    assert.equal(style("@import '@ovhcloud/ods-themes/default';\n.a { color: red; }\n").output,
      "@import '@ovhcloud/ods-themes/default/css';\n@import '@ovhcloud/ods-themes/default/fonts';\n.a { color: red; }\n");
    assert.equal(style('@import "~@ovhcloud/ods-themes/default";', 'css').output,
      '@import "~@ovhcloud/ods-themes/default/css";\n@import "~@ovhcloud/ods-themes/default/fonts";');
    assert.equal(style("@import (css) '@ovhcloud/ods-themes/default';", 'less').output,
      "@import (css) '@ovhcloud/ods-themes/default/css';\n@import (css) '@ovhcloud/ods-themes/default/fonts';");
    assert.equal(style("@import url('@ovhcloud/ods-themes/default');", 'css').output,
      "@import url('@ovhcloud/ods-themes/default/css');\n@import url('@ovhcloud/ods-themes/default/fonts');");
    assert.equal(style("@use '@ovhcloud/ods-themes/default';").output,
      "@use '@ovhcloud/ods-themes/default/css';\n@use '@ovhcloud/ods-themes/default/fonts';");
    assert.match(messages(style("@import '@ovhcloud/ods-themes/default';").changes), /the bundle is removed.*fonts-base64/);
  });

  it('only adds what the file does not load yet (manager/apps/communication)', () => {
    const source = "@import '@ovhcloud/ods-themes/default';\n@import '@ovhcloud/ods-themes/default/css';\n@import '@ovhcloud/ods-themes/default/fonts';\n";
    assert.equal(style(source).output, "@import '@ovhcloud/ods-themes/default/css';\n@import '@ovhcloud/ods-themes/default/fonts';\n");
  });

  it('marks a `@use … as v` whose members are still read, instead of splitting it', () => {
    const source = "@use '@ovhcloud/ods-themes/default' as v;\n.a { width: v.$ods-something; }\n";
    const { output, todos } = style(source);
    assert.match(output, /^\/\* TODO\(ods-v20\): @ovhcloud\/ods-themes\/default is removed in v20: .*v\.\$ods-something/);
    assert.equal(todos.length, 1);
    assert.equal(style(output).output, output);
  });

  it('splits a side-effect import or require of a script, marks what cannot be split', () => {
    assert.equal(script("import React from 'react';\nimport '@ovhcloud/ods-themes/default';\n").output,
      "import React from 'react';\nimport '@ovhcloud/ods-themes/default/css';\nimport '@ovhcloud/ods-themes/default/fonts';\n");
    assert.equal(script("require('@ovhcloud/ods-themes/default');\n").output,
      "require('@ovhcloud/ods-themes/default/css');\nrequire('@ovhcloud/ods-themes/default/fonts');\n");
    const lazy = script("const theme = () => import('@ovhcloud/ods-themes/default');\n");
    assert.match(lazy.output, /^\/\* TODO\(ods-v20\): @ovhcloud\/ods-themes\/default is removed in v20: /);
    const alias = script("export default { resolve: { alias: { theme: '@ovhcloud/ods-themes/default' } } };\n");
    assert.match(alias.output, /theme: \/\* TODO\(ods-v20\): @ovhcloud\/ods-themes\/default is removed/);
    for (const { output } of [lazy, alias]) assert.equal(script(output).output, output);
  });

  it('leaves a v20 import and another package alone', () => {
    for (const source of ["import '@ovhcloud/ods-themes/default/css';\n", "import '@ovhcloud/ods-themes/blue-jeans/css';\n", "import '@acme/ods-themes/default-x';\n"]) {
      assert.equal(script(source).output, source);
    }
    assert.equal(style("@import '@ovhcloud/ods-themes/default/fonts';").output, "@import '@ovhcloud/ods-themes/default/fonts';");
  });
});

describe('theme paths: BC-32, the files moved in dist/ and src/', () => {
  it('rewrites the four dist files with the table, in CSS', { skip: NO_MASTER }, () => {
    const { changes, output } = style([
      "@import '~@ovhcloud/ods-themes/dist/default/index.css';",
      "@import '../node_modules/@ovhcloud/ods-themes/dist/default/fonts.css';",
      "@import '../node_modules/@ovhcloud/ods-themes/dist/default/default.css';",
    ].join('\n'), 'css');
    assert.equal(output, [
      "@import '~@ovhcloud/ods-themes/dist/aluminium/light.css';",
      "@import '../node_modules/@ovhcloud/ods-themes/dist/fonts.css';",
      "@import '../node_modules/@ovhcloud/ods-themes/dist/aluminium/light.css';",
      "@import '../node_modules/@ovhcloud/ods-themes/dist/fonts-base64.css';",
    ].join('\n'));
    assert.equal(changes.length, 3);
    for (const path of output.match(/ods-themes\/[^'"]+/g)) assert.ok(existsOnMaster(path), path);
  });

  it('moves a CDN URL pinned to 19 to 20 with its path, and says so', () => {
    const { notes, output } = style("@import url('https://unpkg.com/@ovhcloud/ods-themes@19.7.3/dist/default/index.css');", 'css');
    assert.equal(output, "@import url('https://unpkg.com/@ovhcloud/ods-themes@20.0.0/dist/aluminium/light.css');");
    assert.match(messages(notes), /moves to 20\.0\.0/);
    assert.equal(style("@import 'https://cdn.jsdelivr.net/npm/@ovhcloud/ods-themes@^19/dist/default/fonts.css';", 'css').output,
      "@import 'https://cdn.jsdelivr.net/npm/@ovhcloud/ods-themes@20/dist/fonts.css';");
    assert.equal(bumpVersion('20.1.0'), null);
    assert.equal(bumpVersion('latest'), null);
  });

  it('A5-08: moves the version of a font URL the token pass renamed to source-sans-3', () => {
    const source = "@font-face { src: url('https://unpkg.com/@ovhcloud/ods-themes@19.7.3/assets/fonts/source-sans-3/woff2/x.woff2'); }";
    const { notes, output } = style(source, 'css');
    assert.equal(output, "@font-face { src: url('https://unpkg.com/@ovhcloud/ods-themes@20.0.0/assets/fonts/source-sans-3/woff2/x.woff2'); }");
    assert.match(messages(notes), /source-sans-3 font folder only exists from v20/);
    // An unversioned URL is the latest, already v20: nothing to move.
    const latest = "@font-face { src: url('https://unpkg.com/@ovhcloud/ods-themes/assets/fonts/source-sans-3/woff2/x.woff2'); }";
    assert.equal(style(latest, 'css').output, latest);
  });

  it('rewrites the Sass sources of src/default, and prefers the export path for `pkg:`', { skip: NO_MASTER }, () => {
    assert.equal(style("@use '~@ovhcloud/ods-themes/src/default/fonts';\n@import '@ovhcloud/ods-themes/src/default/index';\n").output,
      "@use '~@ovhcloud/ods-themes/src/fonts';\n@import '@ovhcloud/ods-themes/src/aluminium/light';\n");
    assert.equal(style("@use 'pkg:@ovhcloud/ods-themes/src/default/index';").output, "@use 'pkg:@ovhcloud/ods-themes/default/css';");
    assert.equal(style("@import '@ovhcloud/ods-themes/src/default/default';").output,
      "@import '@ovhcloud/ods-themes/src/aluminium/light';\n@import '@ovhcloud/ods-themes/src/fonts-base64';");
    for (const path of ['src/fonts', 'src/aluminium/light', 'src/fonts-base64', 'src/aluminium/variables', 'default/css']) assert.ok(existsOnMaster(`ods-themes/${path}`), path);
  });

  it('rewrites the <link> of an HTML page, two <link> for a file that is two files', () => {
    const source = [
      '<head>',
      '  <link rel="stylesheet" href="https://unpkg.com/@ovhcloud/ods-themes@19.7.3/dist/default/index.css">',
      '  <link rel="stylesheet" href="/node_modules/@ovhcloud/ods-themes/dist/default/default.css">',
      '</head>',
    ].join('\n');
    const { changes, notes, output } = migrateHtmlPaths(source);
    assert.equal(output, [
      '<head>',
      '  <link rel="stylesheet" href="https://unpkg.com/@ovhcloud/ods-themes@20.0.0/dist/aluminium/light.css">',
      '  <link rel="stylesheet" href="/node_modules/@ovhcloud/ods-themes/dist/aluminium/light.css">',
      '  <link rel="stylesheet" href="/node_modules/@ovhcloud/ods-themes/dist/fonts-base64.css">',
      '</head>',
    ].join('\n'));
    assert.deepEqual(changes.map(({ line }) => line), [2, 3]);
    assert.equal(notes.length, 1);
    assert.equal(migrateHtmlPaths(output).output, output);
  });

  it('rewrites the strings of a build config, and the export path for a bare specifier', () => {
    const source = [
      "export default {",
      "  alias: { '@ods-theme': '@ovhcloud/ods-themes/dist/default/index.css' },",
      "  copy: [{ src: 'node_modules/@ovhcloud/ods-themes/dist/default/fonts.css' }, { src: 'node_modules/@ovhcloud/ods-themes/dist/default/default.css' }],",
      "  dir: 'node_modules/@ovhcloud/ods-themes/dist/default/*',",
      "};",
    ].join('\n');
    const { output, todos } = script(source);
    assert.match(output, /'@ods-theme': '@ovhcloud\/ods-themes\/default\/css'/);
    assert.match(output, /src: 'node_modules\/@ovhcloud\/ods-themes\/dist\/fonts\.css'/);
    assert.match(output, /\/\* TODO\(ods-v20\): node_modules\/@ovhcloud\/ods-themes\/dist\/default\/default\.css is two files in v20/);
    assert.match(messages(todos), /this folder of @ovhcloud\/ods-themes is gone in v20/);
    assert.equal(script(output).output, output);
    assert.equal(migrateJsonPaths('{ "assets": ["node_modules/@ovhcloud/ods-themes/dist/default/index.css"] }').output,
      '{ "assets": ["node_modules/@ovhcloud/ods-themes/dist/aluminium/light.css"] }');
  });

  it('splits a side-effect import of dist/default/default.css', () => {
    assert.equal(script("import '@ovhcloud/ods-themes/dist/default/default.css';\n").output,
      "import '@ovhcloud/ods-themes/default/css';\nimport '@ovhcloud/ods-themes/fonts-base64';\n");
  });
});

describe('theme paths: BC-32 and BC-05, the variables of src/default', () => {
  it('moves the breakpoints to @ovhcloud/ods-react/style, under the same namespace (migration guide)', () => {
    const source = "@use '@ovhcloud/ods-themes/src/default/variables' as theme;\n.a { @media (width >= theme.$ods-breakpoint-tablet) { padding: 16px; } }\n";
    assert.equal(style(source).output, "@use '@ovhcloud/ods-react/style' as theme;\n.a { @media (width >= theme.$ods-breakpoint-tablet) { padding: 16px; } }\n");
  });

  it('points the kept palette at src/aluminium/variables, with the default namespace kept', () => {
    const source = "@use '@ovhcloud/ods-themes/src/default/variables';\n.a { color: variables.$ods-palette-blue-500; }\n";
    assert.equal(style(source).output, "@use '@ovhcloud/ods-themes/src/aluminium/variables';\n.a { color: variables.$ods-palette-blue-500; }\n");
  });

  it('splits a namespace that reads both, and moves the breakpoint reads to the new one', () => {
    const source = "@use '@ovhcloud/ods-themes/src/default/variables' as theme;\n.a { color: theme.$ods-palette-gray-900; @media (width >= theme.$ods-breakpoint-mobile) { b: c; } }\n";
    const { changes, output } = style(source);
    assert.equal(output, "@use '@ovhcloud/ods-themes/src/aluminium/variables' as theme;\n@use '@ovhcloud/ods-react/style' as ods;\n.a { color: theme.$ods-palette-gray-900; @media (width >= ods.$ods-breakpoint-mobile) { b: c; } }\n");
    assert.match(messages(changes), /theme\.\$ods-breakpoint-mobile → ods\.\$ods-breakpoint-mobile/);
  });

  it('drops the import once nothing reads it (the token pass rewrote every variable)', () => {
    assert.equal(style("@use '@ovhcloud/ods-themes/src/default/variables';\n.b { color: var(--ods-semantic-color-content-brand); }\n").output,
      '.b { color: var(--ods-semantic-color-content-brand); }\n');
  });

  it('marks it while a removed variable is still read (its own marker says what to do)', () => {
    const source = "@use '@ovhcloud/ods-themes/src/default/variables' as v;\n.a { background: rgba(v.$ods-color-primary-500, 0.5); }\n";
    const { output, todos } = style(source);
    assert.match(output, /^\/\* TODO\(ods-v20\): @ovhcloud\/ods-themes\/src\/default\/variables: this file is gone in v20, and this file still reads v\.\$ods-color-primary-500/);
    assert.equal(todos.length, 1);
    assert.equal(style(output).output, output);
  });

  it('reads the bare names of an @import, and marks an @import that the stylesheets after it may read', () => {
    assert.equal(style("@import '@ovhcloud/ods-themes/src/default/variables';\n.a { width: $ods-breakpoint-tablet; }\n").output,
      "@import '@ovhcloud/ods-react/style';\n.a { width: $ods-breakpoint-tablet; }\n");
    const chained = style("@import '@ovhcloud/ods-themes/src/default/variables';\n@import 'partial';\n");
    assert.match(chained.output, /^\/\* TODO\(ods-v20\): the Sass variables of @ovhcloud\/ods-themes\/src\/default are gone/);
  });

  it('compiles on master with sass: breakpoints, kept palette, fonts and theme', { skip: NO_MASTER }, () => {
    const require = createRequire(import.meta.url);
    const sass = require('sass');
    const packages = { 'ods-react': join(REPO, 'packages/ods-react'), 'ods-themes': THEMES };
    // Resolves `@ovhcloud/<pkg>/<path>` like a bundler does: the `sass` condition of the exports, then the file.
    const importer = {
      findFileUrl(url) {
        const match = /^(?:~|pkg:)?@ovhcloud\/(ods-[a-z]+)\/(.*)$/.exec(url);
        if (!match) return null;
        const target = JSON.parse(readFileSync(join(packages[match[1]], 'package.json'), 'utf8')).exports[`./${match[2]}`];
        return pathToFileURL(join(packages[match[1]], target ? target.sass ?? target.default : match[2]));
      },
    };
    const source = [
      "@use '@ovhcloud/ods-themes/src/default/variables' as theme;",
      "@use '~@ovhcloud/ods-themes/src/default/fonts';",
      "@import '@ovhcloud/ods-themes/default';",
      '.b {',
      '  @media (width >= theme.$ods-breakpoint-tablet) { padding: 16px; }',
      '  border-color: theme.$ods-palette-blue-500;',
      '}',
    ].join('\n');
    const { output } = style(source);
    const css = sass.compileString(output, { importers: [importer], silenceDeprecations: ['import'] }).css;
    assert.match(css, /@media \(width >= 768px\)/);
    assert.match(css, /border-color: #0050d7/);
    assert.match(css, /--ods-semantic-color-content-text/);
  });
});

describe('theme paths: BC-33, ODS_THEME and ODS_THEMES', () => {
  it('marks the import while the file uses it, with the theme names', () => {
    const source = "import { ODS_THEME, ODS_THEMES } from '@ovhcloud/ods-themes';\nconst theme = ODS_THEME.default;\n";
    const { output, todos } = script(source);
    assert.match(output, /^\/\* TODO\(ods-v20\): @ovhcloud\/ods-themes has no JavaScript entry point in v20: ODS_THEME and ODS_THEMES are removed\. Write the theme names instead .*'default', 'aluminium-dark', 'blue-jeans' and 'blue-jeans-dark'/);
    assert.equal(todos.length, 1);
    assert.equal(script(output).output, output);
  });

  it('removes the import when nothing uses it, and marks a require or a re-export', () => {
    assert.equal(script("import React from 'react';\nimport { ODS_THEMES } from '@ovhcloud/ods-themes';\nexport const A = 1;\n").output,
      "import React from 'react';\nexport const A = 1;\n");
    assert.match(script("const { ODS_THEME } = require('@ovhcloud/ods-themes');\n").output, /^\/\* TODO\(ods-v20\): @ovhcloud\/ods-themes has no JavaScript entry point/);
    assert.match(script("export { ODS_THEME } from '@ovhcloud/ods-themes';\n").output, /^\/\* TODO\(ods-v20\): @ovhcloud\/ods-themes has no JavaScript entry point/);
  });
});

describe('theme paths: BC-06, the tokens JSON', () => {
  it('marks its import, moves its dist path, and marks a v19 prefix filter', () => {
    const tokenMapping = JSON.parse(readFileSync(new URL('../mappings/tokens-v19-to-v20.json', import.meta.url), 'utf8'));
    const source = [
      "import tokens from '@ovhcloud/ods-themes/dist/default/tokens.json';",
      "const all = require('@ovhcloud/ods-themes/default/tokens');",
      "export const p = Object.keys(tokens.root).filter((k) => k.startsWith('--ods-color-primary-'));",
    ].join('\n');
    const { output, prefixes, todos } = script(source, { tokenMapping });
    assert.match(output, /^\/\* TODO\(ods-v20\): the tokens JSON of @ovhcloud\/ods-themes keeps its path but none of its keys in v20.*\*\/ import tokens from '@ovhcloud\/ods-themes\/default\/tokens';/m);
    assert.match(output, /^\/\* TODO\(ods-v20\): the tokens JSON .*\*\/ const all = require/m);
    assert.match(output, /startsWith\(\/\* TODO\(ods-v20\): '--ods-color-primary-' is a v19 token prefix/);
    assert.deepEqual(prefixes, [{ line: 3, prefix: '--ods-color-primary-' }]);
    assert.equal(todos.length, 3);
    assert.equal(script(output, { tokenMapping }).output, output);
    // On ODS 20 code, the import is the v20 JSON already.
    assert.equal(script("import tokens from '@ovhcloud/ods-themes/default/tokens';\n", { from: 20, tokenMapping }).output, "import tokens from '@ovhcloud/ods-themes/default/tokens';\n");
  });
});

describe('theme paths: the CLI', () => {
  function project(files) {
    const dir = mkdtempSync(join(tmpdir(), 'ods-migrate-paths-'));
    temps.push(dir);
    for (const [path, text] of Object.entries(files)) {
      mkdirSync(join(dir, path, '..'), { recursive: true });
      writeFileSync(join(dir, path), text);
    }
    return dir;
  }
  async function migrate(dir, args) {
    let stdout = '';
    const code = await run(['.', ...args], { cwd: dir, stderr: () => {}, stdout: (text) => { stdout += text; } });
    return { code, stdout };
  }

  it('rewrites a v19 package, leaves an ODS 18 one alone, and --check fails while ./default is left', async () => {
    const dir = project({
      'a/package.json': '{ "dependencies": { "@ovhcloud/ods-react": "19.7.3", "@ovhcloud/ods-themes": "19.7.3" } }',
      'a/src/index.scss': "@import '@ovhcloud/ods-themes/default';\n.a { color: var(--ods-color-primary-500); }\n",
      'a/src/main.tsx': "import '@ovhcloud/ods-themes/default';\n",
      'b/package.json': '{ "dependencies": { "@ovhcloud/ods-themes": "18.6.0" } }',
      'b/src/index.scss': "@import '@ovhcloud/ods-themes/default';\n",
    });
    assert.equal((await migrate(dir, ['--check'])).code, 1);
    await migrate(dir, ['--write']);
    assert.equal(readFileSync(join(dir, 'a/src/index.scss'), 'utf8'), "@import '@ovhcloud/ods-themes/default/css';\n@import '@ovhcloud/ods-themes/default/fonts';\n.a { color: var(--ods-semantic-color-content-brand); }\n");
    assert.equal(readFileSync(join(dir, 'a/src/main.tsx'), 'utf8'), "import '@ovhcloud/ods-themes/default/css';\nimport '@ovhcloud/ods-themes/default/fonts';\n");
    assert.equal(readFileSync(join(dir, 'b/src/index.scss'), 'utf8'), "@import '@ovhcloud/ods-themes/default';\n");
    const again = await migrate(dir, ['--check']);
    assert.equal(again.code, 0);
    assert.match(again.stdout, /Check: nothing left to migrate\./);
  });

  it('reports the line of a moved path on disk, after the token pass changed the file', async () => {
    const dir = project({
      'package.json': '{ "dependencies": { "@ovhcloud/ods-react": "19.7.3" } }',
      'src/a.tsx': "import { Badge } from '@ovhcloud/ods-react';\nexport const A = () => <Badge color=\"primary\" />;\nimport('@ovhcloud/ods-themes/default');\n",
    });
    const { stdout } = await migrate(dir, []);
    assert.match(stdout, /^ {5}3 {2}⚠ TODO\(ods-v20\) @ovhcloud\/ods-themes\/default is removed in v20/m);
  });
});
