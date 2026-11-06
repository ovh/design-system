import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import stylelint from 'stylelint';
import plugins, { noControlWidth, noRemovedToken } from '../src/stylelint-plugin.mjs';
import { transformStyles } from '../src/tokens.mjs';

const lint = async (code, rules, extra = {}) => {
  const { results } = await stylelint.lint({ code, codeFilename: 'a.css', config: { plugins, rules }, ...extra });
  return results[0];
};

describe('stylelint plugin', () => {
  it('exports both rules as an array, and each one by name', () => {
    assert.deepEqual(plugins, [noRemovedToken, noControlWidth]);
    assert.equal(noRemovedToken.ruleName, 'ods/no-removed-token');
    assert.equal(noControlWidth.ruleName, 'ods/no-control-width');
  });

  it('takes the options of the configurator', async () => {
    const result = await lint('a { color: var(--ods-theme-text-color); }', { 'ods/no-removed-token': [true, { look: { 'page-background': 'v19' }, pending: ['#1130'] }] });
    assert.deepEqual(result.invalidOptionWarnings, []);
    assert.equal(result.warnings.length, 1);
  });

  it('rejects an option it does not know', async () => {
    const result = await lint('a { color: red; }', { 'ods/no-removed-token': [true, { packages: ['x'] }] });
    assert.equal(result.invalidOptionWarnings.length, 1);
  });
});

describe('ods/no-control-width', () => {
  const rules = { 'ods/no-control-width': true };

  it('flags a width set on the control part of a field, without a fix', async () => {
    const source = '[data-ods="select-control"] { width: 100%; }\n.form [data-ods=combobox-control] { max-width: 320px; }\n[data-ods="phone-number-control"] { inline-size: 10rem; }';
    const result = await lint(source, rules);
    assert.deepEqual(result.warnings.map(({ line, text }) => [line, text]), [
      [1, 'the field width lives on the root in v20 (#1121): set it on [data-ods="select"] (ods/no-control-width)'],
      [2, 'the field width lives on the root in v20 (#1121): set it on [data-ods="combobox"] (ods/no-control-width)'],
      [3, 'the field width lives on the root in v20 (#1121): set it on [data-ods="phone-number"] (ods/no-control-width)'],
    ]);
    const { code } = await stylelint.lint({ code: source, config: { plugins, rules }, fix: true });
    assert.equal(code, source);
  });

  it('leaves the root, the other properties and a control that is not the subject alone', async () => {
    const result = await lint('[data-ods="select"] { width: 100%; }\n[data-ods="select-control"] { color: red; }\n[data-ods="select-control"] .icon { width: 1rem; }', rules);
    assert.equal(result.warnings.length, 0);
  });

  it('gives the same text as the note of the codemod', async () => {
    const source = '[data-ods="timepicker-control"] { min-width: 0; }';
    const [{ text }] = (await lint(source, rules)).warnings;
    const { notes, output } = transformStyles(source, { hints: {}, scss: {}, tokens: {} }, 'a.css');
    assert.equal(output, source);
    assert.equal(`${notes[0].message.replace(/^[^:]+: /, '')} (ods/no-control-width)`, text);
  });
});
