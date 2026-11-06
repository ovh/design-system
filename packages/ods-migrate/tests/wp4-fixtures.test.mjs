import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { describe, it } from 'node:test';
import parser from '@typescript-eslint/parser';
import { Linter } from 'eslint';
import postcss from 'postcss';
import stylelint from 'stylelint';
import eslintPlugin from '../src/eslint-plugin.mjs';
import { stripScriptMarkers, stripStyleMarkers } from '../src/shared.mjs';
import stylelintPlugin from '../src/stylelint-plugin.mjs';
import { transformScriptTokens, transformStyles } from '../src/tokens.mjs';

/*
 * The confirmed bugs of the token engine (swarm-migrate, WP4), each as a fixture built from its
 * repro, with the real mapping: the codemod output, its idempotence, and the parity of the
 * ESLint and stylelint rules with it.
 */

const mapping = JSON.parse(readFileSync(new URL('../mappings/tokens-v19-to-v20.json', import.meta.url), 'utf8'));
const fixtures = new URL('./fixtures/wp4/', import.meta.url);
const read = (name) => readFileSync(new URL(name, fixtures), 'utf8');
const isStyle = (name) => /\.s?css$/.test(name);
const migrate = (source, name) => (isStyle(name) ? transformStyles : transformScriptTokens)(source, mapping, name);
const inputs = readdirSync(fixtures).filter((name) => name.includes('.input.'));

const linter = new Linter({ configType: 'flat' });
const eslintConfig = [{
  files: ['**/*.{js,jsx,ts,tsx,mjs}'],
  languageOptions: { parser, parserOptions: { ecmaFeatures: { jsx: true } } },
  plugins: { ods: eslintPlugin },
  rules: { 'ods/v20-tokens': 'error' },
}];
const stylelintConfig = { plugins: stylelintPlugin, rules: { 'ods/no-removed-token': true } };
const syntaxOf = (name) => (name.endsWith('.scss') ? { customSyntax: 'postcss-scss' } : {});
const markersOf = (source) => source.match(/TODO\(ods-v20\)[\s\S]*?\*\//g) ?? [];

describe('wp4 fixtures', () => {
  for (const input of inputs) {
    const output = input.replace('.input.', '.output.');
    const name = input.replace('.input', '');
    const codemod = migrate(read(input), name).output;

    it(`migrates ${input}`, () => {
      assert.equal(codemod, read(output));
    });

    it(`is idempotent on ${output}`, () => {
      assert.equal(migrate(read(output), name).output, read(output));
    });

    if (isStyle(name)) {
      it(`stylelint --fix on ${input} gives the codemod output, markers aside`, async () => {
        const { code } = await stylelint.lint({ code: read(input), codeFilename: name, config: stylelintConfig, fix: true, ...syntaxOf(name) });
        assert.equal(code, stripStyleMarkers(codemod));
      });

      it(`stylelint reports only the marked sites after the codemod on ${input}`, async () => {
        const { results } = await stylelint.lint({ code: codemod, codeFilename: name, config: stylelintConfig, ...syntaxOf(name) });
        const warnings = results[0].warnings.filter((warning) => warning.rule === 'ods/no-removed-token');
        const expected = markersOf(codemod).reduce((total, marker) => total + marker.split(/ \/ (?=--ods-|[\w-]*\.?\$|@include )/).length, 0);
        assert.equal(warnings.length, expected);
        const refixed = await stylelint.lint({ code: codemod, codeFilename: name, config: stylelintConfig, fix: true, ...syntaxOf(name) });
        assert.equal(refixed.code, codemod, 'no fixable report left');
      });
    } else {
      it(`eslint --fix on ${input} gives the codemod output, markers aside`, () => {
        assert.equal(linter.verifyAndFix(read(input), eslintConfig, name).output, stripScriptMarkers(codemod));
      });

      it(`eslint reports only the marked sites after the codemod on ${input}`, () => {
        const problems = linter.verify(codemod, eslintConfig, name);
        assert.ok(problems.every((problem) => problem.ruleId === 'ods/v20-tokens' && !problem.fix), JSON.stringify(problems));
        assert.equal(problems.length, markersOf(codemod).length);
      });
    }
  }
});

describe('the v19.7.3 default theme (:root), migrated as an app override', () => {
  const output = read('theme-v19-root.output.css');
  const rules = [];
  postcss.parse(output).walkRules((rule) => rules.push(rule));

  it('declares no custom property that reads itself', () => {
    for (const rule of rules) {
      rule.walkDecls((decl) => assert.ok(!decl.value.includes(`var(${decl.prop})`), decl.toString()));
    }
  });

  it('marks every declaration of a name already declared in the rule', () => {
    let duplicates = 0;
    for (const rule of rules) {
      const seen = new Set();
      rule.each((node) => {
        if (node.type !== 'decl') return;
        if (seen.has(node.prop)) {
          duplicates++;
          assert.ok(node.prev()?.type === 'comment' && /both become/.test(node.prev().text), node.toString());
        }
        seen.add(node.prop);
      });
    }
    assert.ok(duplicates > 0);
  });
});
