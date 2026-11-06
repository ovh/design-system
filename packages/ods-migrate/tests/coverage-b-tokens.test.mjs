import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import {
  collectTokenSites, cssComments, declaredNames, extractSnippets, isProse, lexicalMap, moduleClasses, removedNames, scanText,
} from '../scripts/coverage/token-sites.mjs';
import { names, skipTs, ts } from './coverage-b-helpers.mjs';

const T = '--ods-color-primary-500';
const removed = names({ css: [T, '--ods-color-neutral-100'], scss: ['$ods-old'], mixin: ['ods-old-mixin'], module: ['button--ghost', 'button--outline'] });
const kept = names({ css: ['--ods-other-kept'] });
const scan = (file, text) => scanText(text, removed, kept, { file, ts }).map((s) => [s.line, s.kind, s.context]);

describe('coverage-b: contexts of scripts', { skip: skipTs }, () => {
  it('counts code, and calls comments, JSDoc, JSX text and prose strings mentions', () => {
    const text = [
      `// uses ${T}`,
      `/** JSDoc: ${T} */`,
      `const a = 'var(${T})';`,
      `const p = 'Use the var(${T}) token for the primary colour';`,
      `const x = <div style={{ color: 'var(${T})' }} title="Pick the ${T} for this">text ${T} {/* c ${T} */}</div>;`,
      `const y = <p className="text-[var(${T})]" />; // trailing ${T}`,
    ].join('\n');
    assert.deepEqual(scan('a.tsx', text), [
      [1, 'css', 'comment'],
      [2, 'css', 'comment'],
      [3, 'css', 'code'],
      [4, 'css', 'prose'],
      [5, 'css', 'code'],
      [5, 'css', 'prose'],
      [5, 'css', 'jsx-text'],
      [5, 'css', 'comment'],
      [6, 'css', 'code'],
      [6, 'css', 'comment'],
    ]);
  });

  it('keeps CSS values, class strings and snippets as code', () => {
    assert.equal(isProse(`1px solid var(${T})`), false);
    assert.equal(isProse('flex items-center bg-ods-color-primary-500 hover:underline'), false);
    assert.equal(isProse(`import { A } from '@ovhcloud/ods-react';\nexport const B = () => <A>The value of the field</A>;`), false);
    assert.equal(isProse(`color: var(${T}); background: red;`), false);
    assert.equal(isProse(`Use var(${T}) for the border of the card`), true);
    assert.equal(isProse(`Utilisez la couleur ${T} pour le fond`), true);
  });

  it('the text of a <code> element is code, like Markdown inline code', () => {
    assert.deepEqual(scan('a.tsx', `const a = <p>Reading <code>${T}</code> now ${T}</p>;`), [[1, 'css', 'code'], [1, 'css', 'jsx-text']]);
    assert.deepEqual(scan('a.html', `<td><code>${T}</code> and ${T}</td>`), [[1, 'css', 'code'], [1, 'css', 'html-text']]);
  });

  it('reads a JSDoc at the end of the file as a comment', () => {
    assert.deepEqual(scan('a.ts', `export const a = 1;\n/**\n * getToken('ods-color-primary-500')\n */\n`), [[3, 'bare-key', 'comment']]);
  });

  it('keeps a template string with code and a runtime name as a dynamic code site', () => {
    assert.deepEqual(scan('a.ts', 'const v = `var(--ods-color-${x})`;'), [[1, 'dynamic', 'code']]);
  });
});

describe('coverage-b: contexts of stylesheets, HTML and Markdown', { skip: skipTs }, () => {
  it('reads `//` comments in SCSS and Less only, never inside url()', () => {
    const text = `a { b: url(//cdn/x.png); } // ${T}\n/* ${T} */ c { d: var(${T}); }`;
    assert.deepEqual(cssComments(text, true).map((c) => text.slice(c.start, c.end)), [`// ${T}`, `/* ${T} */`]);
    assert.deepEqual(scan('a.scss', text), [[1, 'css', 'comment'], [2, 'css', 'comment'], [2, 'css', 'code']]);
    assert.deepEqual(scan('a.css', `a { b: c; } // var(${T})`), [[1, 'css', 'code']]);
  });

  it('HTML: comments and text are mentions; attributes, scripts and styles are code', () => {
    const text = `<!-- ${T} -->\n<p style="color: var(${T})">Text ${T}</p>\n<style>/* ${T} */ a { color: var(${T}); }</style>\n<script>const a = 'var(${T})'; // ${T}\n</script>`;
    assert.deepEqual(scan('a.html', text), [
      [1, 'css', 'comment'], [2, 'css', 'code'], [2, 'css', 'html-text'], [3, 'css', 'comment'], [3, 'css', 'code'], [4, 'css', 'code'], [4, 'css', 'comment'],
    ]);
  });

  it('Markdown: prose is a mention; inline code and fences are code, read in their language', () => {
    const text = [
      `# Title ${T}`,
      '',
      `Use \`${T}\` here, or ${T}.`,
      '',
      '```css',
      `.a { color: var(${T}); /* ${T} */ }`,
      '```',
      '',
      '<!-- ' + T + ' -->',
    ].join('\n');
    assert.deepEqual(scan('README.md', text), [
      [1, 'css', 'md-prose'], [3, 'css', 'code'], [3, 'css', 'md-prose'], [6, 'css', 'code'], [6, 'css', 'comment'], [9, 'css', 'comment'],
    ]);
  });

  it('MDX: ESM, JSX tags and expressions are code; `{/* */}` is a comment', () => {
    const text = [
      "import { A } from '@ovhcloud/ods-react';",
      '',
      `Some text ${T}.`,
      '',
      `<A style={{ color: 'var(${T})' }} />`,
      '',
      `{/* ${T} */}`,
    ].join('\n');
    assert.deepEqual(scan('doc.mdx', text), [[3, 'css', 'md-prose'], [5, 'css', 'code'], [7, 'css', 'comment']]);
  });

  it('a changelog is a mention as a whole', () => {
    assert.deepEqual(scan('CHANGELOG.md', `- \`${T}\` renamed`), [[1, 'css', 'changelog']]);
    assert.deepEqual(scan('whatsnew.mdx', `- \`${T}\` renamed`), [[1, 'css', 'changelog']]);
  });

  it('a snapshot is code', () => {
    assert.deepEqual(scan('a.test.tsx.snap', `exports[\`x\`] = \`<div class="_button--ghost"> ${T} </div>\`;`), [[1, 'module', 'code'], [1, 'css', 'code']]);
  });
});

describe('coverage-b: Tailwind keys and CSS-module classes', () => {
  it('finds a bare theme key in a config and in utility classes, never a custom property, a variable or a mixin', () => {
    const text = [
      "colors: { 'ods-color-primary-500': 'var(--ods-color-primary-500)' },",
      '<p className="bg-ods-color-primary-500 hover:text-ods-color-primary-500/50 !border-ods-color-neutral-100" />',
      '$ods-color-primary-500: 1; --color-ods-primary: x; .x { @include ods-color-primary-500; }',
      'ods-other-kept ods-color-primary-5000',
    ].join('\n');
    const sites = scanText(text, removed, kept).filter((s) => s.kind === 'bare-key').map((s) => [s.line, s.name]);
    assert.deepEqual(sites, [[1, 'ods-color-primary-500'], [2, 'ods-color-primary-500'], [2, 'ods-color-primary-500'], [2, 'ods-color-neutral-100']]);
  });

  it('reads the BEM classes of a CSS module with SCSS nesting and `$x: &` interpolation', () => {
    const scss = '@layer a { .button { $button: &; &--xs { x: y; } &--ghost { &#{$button}--critical { a: b; } } } .plain { c: d; } .card__header, .card--raised { e: f; } }';
    assert.deepEqual([...moduleClasses(scss)].sort(), ['button--critical', 'button--ghost', 'button--xs', 'card--raised', 'card__header']);
  });

  it('finds a removed module class in its built form or a class selector, not as a bare word', () => {
    const text = [
      'expect(el).toHaveClass("_button--ghost");',
      "querySelector('[class*=\"button--outline\"]')",
      'class="_button _button--ghost_6crpx_209 _button--md"',
      '.my-button--ghost, button--ghost, _button--ghostly',
    ].join('\n');
    assert.deepEqual(scanText(text, removed, kept).map((s) => [s.line, s.name, s.kind]), [
      [1, 'button--ghost', 'module'], [2, 'button--outline', 'module'], [3, 'button--ghost', 'module'],
    ]);
  });

  it('declaredNames reads the module classes of *.module.scss only; removedNames diffs them', () => {
    const dir = mkdtempSync(join(tmpdir(), 'cov-b-'));
    try {
      const v19 = join(dir, 'v19');
      const v20 = join(dir, 'v20');
      mkdirSync(v19);
      mkdirSync(v20);
      writeFileSync(join(v19, 'button.module.scss'), '.button { &--ghost { a: b; } &--md { a: b; } }');
      writeFileSync(join(v19, 'global.scss'), '.x--y { a: b; }');
      writeFileSync(join(v20, 'button.module.scss'), '.button { &--low { a: b; } &--md { a: b; } }');
      const r = removedNames(declaredNames([v19]), declaredNames([v20]));
      assert.deepEqual([...r.module], ['button--ghost']);
    } finally {
      rmSync(dir, { force: true, recursive: true });
    }
  });
});

describe('coverage-b: snippets', { skip: skipTs }, () => {
  it('extracts the Markdown fences that import ODS, at their offset', () => {
    const text = "Text\n\n```tsx\nimport { BUTTON_COLOR } from '@ovhcloud/ods-react';\n```\n\n```tsx\nconst a = 1;\n```\n";
    const [s, ...rest] = extractSnippets('README.md', text, ts);
    assert.equal(rest.length, 0);
    assert.equal(s.lang, 'tsx');
    assert.equal(text.slice(s.start, s.end), s.code);
    assert.match(s.code, /^import \{ BUTTON_COLOR \}/);
  });

  it('extracts template strings that import ODS, substitutions blanked, offsets kept', () => {
    const text = "export const S = { globals: { imports: `import { Tabs } from '@ovhcloud/ods-react';\n${extra}\nconst a = 1;` } };\nconst t = `no import`;";
    const [s, ...rest] = extractSnippets('a.stories.tsx', text, ts);
    assert.equal(rest.length, 0);
    assert.equal(s.code.length, s.end - s.start);
    assert.equal(s.code, "import { Tabs } from '@ovhcloud/ods-react';\n        \nconst a = 1;");
  });

  it('ignores a file without an ODS import', () => {
    assert.deepEqual(extractSnippets('a.md', '```tsx\nimport x from "y";\n```', ts), []);
  });
});

describe('coverage-b: collected sites and mentions', { skip: skipTs }, () => {
  it('puts .snap sites in their own bucket and the rest of the occurrences in mentions', () => {
    const files = { 'a.scss': `/* ${T} */ a { b: var(${T}); }`, 'x.snap': '<div class="_button--ghost">', 'b.tsx': '<p className="bg-ods-color-primary-500">Use the token for this</p>' };
    const { sites, mentions } = collectTokenSites(Object.keys(files), (f) => files[f], removed, kept, { ts });
    assert.deepEqual(sites.map((s) => [s.file, s.kind, s.rule, s.bucket]), [
      ['a.scss', 'token', T, 'main'], ['x.snap', 'module', 'button--ghost', 'snap'], ['b.tsx', 'bare-key', 'ods-color-primary-500', 'main'],
    ]);
    assert.deepEqual(mentions.map((m) => [m.file, m.context]), [['a.scss', 'comment']]);
    const docs = collectTokenSites(['README.md'], () => `Use \`${T}\`.`, removed, kept, { ts });
    assert.deepEqual(docs.sites.map((s) => [s.kind, s.detail]), [['doc', 'css']]);
  });

  it('a lexical map without a parser keeps the script as code', () => {
    assert.deepEqual(lexicalMap('a.ts', `// ${T}`).mentions, []);
  });
});
