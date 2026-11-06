import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { describe, it } from 'node:test';
import parser from '@typescript-eslint/parser';
import { Linter } from 'eslint';
import stylelint from 'stylelint';
import eslintPlugin from '../src/eslint-plugin.mjs';
import stylelintPlugin from '../src/stylelint-plugin.mjs';
import { transformScriptTokens, transformStyles } from '../src/tokens.mjs';

const mapping = JSON.parse(readFileSync(new URL('../mappings/tokens-v19-to-v20.json', import.meta.url), 'utf8'));
const fixtures = new URL('./fixtures/tokens/', import.meta.url);
const read = (name) => readFileSync(new URL(name, fixtures), 'utf8');
const inputs = readdirSync(fixtures).filter((name) => name.includes('.input.'));

/* The codemod output without its markers: what a --fix of the rule must produce. */
const withoutScriptMarkers = (source) => source.replace(/\/\* TODO\(ods-v20\)[\s\S]*?\*\/ /g, '');
const withoutStyleMarkers = (source) => source.replace(/^[ \t]*\/\* TODO\(ods-v20\)[\s\S]*?\*\/\n/gm, '');

const linter = new Linter({ configType: 'flat' });
const eslintConfig = [{
  files: ['**/*.{js,jsx,ts,tsx,mjs}'],
  languageOptions: { parser, parserOptions: { ecmaFeatures: { jsx: true } } },
  plugins: { ods: eslintPlugin },
  rules: { 'ods/v20-tokens': 'error' },
}];
const stylelintConfig = { plugins: stylelintPlugin, rules: { 'ods/no-removed-token': true } };
const stylelintSyntax = (name) => (name.endsWith('.scss') ? { customSyntax: 'postcss-scss' } : {});

describe('eslint ods/v20-tokens', () => {
  for (const input of inputs.filter((name) => !/\.s?css$/.test(name))) {
    const name = input.replace('.input', '');
    const codemod = transformScriptTokens(read(input), mapping, name).output;

    it(`--fix on ${input} gives the codemod output, markers aside`, () => {
      assert.equal(linter.verifyAndFix(read(input), eslintConfig, name).output, withoutScriptMarkers(codemod));
    });

    it(`reports only the marked sites after the codemod on ${input}`, () => {
      const problems = linter.verify(codemod, eslintConfig, name);
      assert.ok(problems.every((problem) => problem.ruleId === 'ods/v20-tokens' && !problem.fix));
      assert.equal(problems.length, (codemod.match(/TODO\(ods-v20\)/g) ?? []).length);
    });
  }
});

describe('stylelint ods/no-removed-token', () => {
  for (const input of inputs.filter((name) => /\.s?css$/.test(name))) {
    const name = input.replace('.input', '');
    const codemod = transformStyles(read(input), mapping, name).output;

    it(`--fix on ${input} gives the codemod output, markers aside`, async () => {
      const { code } = await stylelint.lint({ code: read(input), codeFilename: name, config: stylelintConfig, fix: true, ...stylelintSyntax(name) });
      assert.equal(code, withoutStyleMarkers(codemod));
    });

    it(`reports only the marked sites after the codemod on ${input}`, async () => {
      const { results } = await stylelint.lint({ code: codemod, codeFilename: name, config: stylelintConfig, ...stylelintSyntax(name) });
      const warnings = results[0].warnings.filter((warning) => warning.rule === 'ods/no-removed-token');
      const marked = codemod.match(/TODO\(ods-v20\)[\s\S]*?\*\//g) ?? [];
      // One warning per todo; a marker joins its todos with ' / ', each starting with the name it is about.
      assert.equal(warnings.length, marked.reduce((total, marker) => total + marker.split(/ \/ (?=--ods-|[\w-]*\.?\$)/).length, 0));
    });
  }

  it('stops an old token from coming back', async () => {
    const { results } = await stylelint.lint({ code: 'a { color: var(--ods-theme-text-color); }', config: stylelintConfig });
    assert.match(results[0].warnings[0].text, /--ods-semantic-color-content-text/);
  });
});
