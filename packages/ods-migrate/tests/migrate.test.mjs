import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { describe, it } from 'node:test';
import parser from '@typescript-eslint/parser';
import { Linter } from 'eslint';
import plugin from '../src/eslint-plugin.mjs';
import { guideComponents, guideEntry } from '../src/guide.mjs';
import { stripScriptMarkers } from '../src/shared.mjs';
import { transformSource } from '../src/transform.mjs';

const mapping = JSON.parse(readFileSync(new URL('../mappings/v19-to-v20.json', import.meta.url), 'utf8'));
const fixtures = new URL('./fixtures/', import.meta.url);
const read = (name) => readFileSync(new URL(name, fixtures), 'utf8');
const inputs = readdirSync(fixtures).filter((name) => name.includes('.input.'));
const options = { packages: ['@ovh-ux/muk'] };

const linter = new Linter({ configType: 'flat' });
const lintConfig = [{
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: { parser, parserOptions: { ecmaFeatures: { jsx: true } } },
  plugins: { ods: plugin },
  rules: { 'ods/v20-migration': ['error', { packages: ['@ovh-ux/muk'] }] },
}];

describe('codemod', () => {
  for (const input of inputs) {
    const output = input.replace('.input.', '.output.');

    it(`migrates ${input}`, () => {
      assert.equal(transformSource(read(input), mapping, input, options).output, read(output));
    });

    it(`is idempotent on ${output}`, () => {
      assert.equal(transformSource(read(output), mapping, output, options).output, read(output));
    });
  }

  it('leaves files that do not import ODS untouched', () => {
    const source = 'import { Badge } from "other-lib";\nconst a = <Badge color="primary" />;\n';
    assert.equal(transformSource(source, mapping).output, source);
  });

  it('lists a value computed at runtime in untyped code instead of marking it', () => {
    const { output, todos, untyped } = transformSource('import { Badge } from "@ovhcloud/ods-react";\nconst a = <Badge color={ props.tone } />;\n', mapping, 'file.jsx');
    assert.equal(output, 'import { Badge } from "@ovhcloud/ods-react";\nconst a = <Badge status={ props.tone } />;\n');
    assert.equal(todos.length, 0);
    assert.equal(untyped.length, 1);
  });
});

describe('eslint rule', () => {
  it('reports the values with no v20 equivalent, deleting an attribute whose whole value has none', () => {
    const { messages, output } = linter.verifyAndFix(read('components.input.tsx'), lintConfig, 'components.input.tsx');
    assert.deepEqual(messages.map((message) => message.line), [3]);
    assert.ok(messages.every((message) => message.messageId === 'noEquivalent'));
    assert.equal(output, stripScriptMarkers(read('components.output.tsx')));
  });

  it('reports the removed props and exports it cannot migrate, and fixes the rest like the codemod', () => {
    const { messages, output } = linter.verifyAndFix(read('removed.input.tsx'), lintConfig, 'removed.input.tsx');
    assert.deepEqual(messages.map((message) => `${message.line}:${message.messageId}`), ['1:removedImport', '3:noEquivalent', '5:noEquivalent', '11:removedComputed']);
    assert.equal(output, stripScriptMarkers(read('removed.output.tsx')));
  });

  it('reports a removed export passed to another component, and drops the import of the ones no longer read', () => {
    const { messages, output } = linter.verifyAndFix(read('muk-modal.input.tsx'), lintConfig, 'muk-modal.input.tsx');
    assert.deepEqual(messages.map((message) => `${message.line}:${message.messageId}`), ['1:removedImport', '5:noEquivalent']);
    assert.equal(output, stripScriptMarkers(read('muk-modal.output.tsx')));
  });

  // What has no equivalent is left as it is by the lint rule, and marked by the codemod.
  const marked = ['components.input.tsx', 'muk-modal.input.tsx', 'removed.input.tsx'];
  for (const input of inputs.filter((name) => !marked.includes(name))) {
    const output = input.replace('.input.', '.output.');

    it(`--fix on ${input} gives the codemod output, without the TODO markers`, () => {
      assert.equal(linter.verifyAndFix(read(input), lintConfig, input).output, stripScriptMarkers(read(output)));
    });

    it(`reports only the markers of the codemod output of ${input}`, () => {
      const lines = read(output).split('\n');
      const messages = linter.verify(read(output), lintConfig, output);
      assert.equal(messages.length, read(output).split('TODO(ods-v20)').length - 1);
      assert.ok(messages.every((message) => !message.fix && lines[message.line - 1].includes('TODO(ods-v20)')));
    });
  }
});

describe('guide', () => {
  // Components without an example (the Button wrappers, listed under Button) have no entry of their own.
  for (const component of guideComponents()) {
    it(`${component}: the "after" snippet passes the lint rule`, () => {
      const after = guideEntry(component).split('**after**\n```tsx\n')[1].split('\n```')[0];
      assert.deepEqual(linter.verify(`${after.replace(/^(<[\s\S]*)$/m, '<>\n$1\n</>;')}`, lintConfig, 'after.tsx'), []);
    });
  }
});
