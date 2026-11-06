import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import parser from '@typescript-eslint/parser';
import { Linter } from 'eslint';
import { createPlugin } from '../src/eslint-plugin.mjs';
import { stripScriptMarkers } from '../src/shared.mjs';
import { transformSource } from '../src/transform.mjs';

/*
 * Parity of ods/v20-migration with the codemod (CONTRACT §3.3): on each input, --fix gives the
 * codemod output without its markers, and on the codemod output the rule has nothing left to fix
 * and reports every marker, and only them. The outputs were written by hand from the contract,
 * and are checked against transformSource.
 */

const fixtures = new URL('./fixtures/wp3/', import.meta.url);
const read = (name) => readFileSync(new URL(name, fixtures), 'utf8');
const realMapping = JSON.parse(readFileSync(new URL('../mappings/v19-to-v20.json', import.meta.url), 'utf8'));
const inlineMapping = JSON.parse(read('mapping.json'));
const linter = new Linter({ configType: 'flat' });

function lint(source, { filename, mapping = realMapping, options = {}, fix = true }) {
  const config = [{
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: { parser, parserOptions: { ecmaFeatures: { jsx: !/\.(c|m)?ts$/.test(filename) } } },
    plugins: { ods: createPlugin({ mapping }) },
    rules: { 'ods/v20-migration': ['error', { packages: ['@ovh-ux/muk'], ...options }] },
  }];
  return fix ? linter.verifyAndFix(source, config, filename) : { messages: linter.verify(source, config, filename), output: source };
}

const lineAt = (source, index) => source.slice(0, index).split('\n').length;

/** Each marker spans from its own line to the line of the node it precedes: a report must fall in there. */
function markerSpans(source) {
  return [...source.matchAll(/\{?\/\* TODO\(ods-v20\)[\s\S]*?\*\/\}?\s*/g)].map((match) => ({
    end: lineAt(source, match.index + match[0].length),
    start: lineAt(source, match.index),
    text: match[0].trim(),
  }));
}

function assertReportsMatchMarkers(output, messages) {
  assert.deepEqual(messages.filter((message) => message.fatal).map((message) => message.message), [], 'the codemod output parses');
  assert.deepEqual(messages.filter((message) => message.fix).map((message) => `${message.line}: ${message.message}`), [], 'nothing left to fix on the codemod output');
  const spans = markerSpans(output);
  for (const span of spans) {
    assert.ok(messages.some((message) => message.line >= span.start && message.line <= span.end), `no report for the marker at line ${span.start}: ${span.text}`);
  }
  for (const message of messages) {
    assert.ok(spans.some((span) => message.line >= span.start && message.line <= span.end), `report without marker at line ${message.line}: ${message.message}`);
  }
}

const cases = [
  { name: 'typed-literals', ext: 'ts', why: 'bugs [5], [11], [43]: type-directed typed literals, `as const`, two types on one string' },
  { name: 'mock', ext: 'tsx', why: 'bugs [16], [41]: mock factories, `import()` form, quoted keys, Object.assign' },
  { name: 'imports', ext: 'ts', why: 'bug [44]: dedupe without a dangling comma; re-exports from the package' },
  { name: 'no-equivalent', ext: 'jsx', why: 'bugs [42], [36], [51]: no-equivalent values, both props set with a constant, spreads in JS' },
  { mapping: inlineMapping, name: 'indexed-types', ext: 'tsx', why: 'bug [19]: indexed access types, Omit / Pick' },
  { mapping: inlineMapping, name: 'conflicts', ext: 'tsx', why: 'own props of a wrapper next to the ODS props' },
  { mapping: inlineMapping, name: 'move-to', ext: 'tsx', why: 'moveTo, defaults, existing target object or expression' },
  { mapping: inlineMapping, name: 'props', ext: 'tsx', why: 'always, coerce, todoUnless, stacking' },
  { mapping: inlineMapping, name: 'childless', ext: 'tsx', options: { pending: ['ODS-2336'] }, why: 'childless components, child imports' },
  { mapping: inlineMapping, name: 'drop-default', ext: 'tsx', why: 'dropDefault, extends, the import of a dropped constant' },
  { mapping: inlineMapping, name: 'fold', ext: 'tsx', why: 'bug [68]: ternary folding of remove rules, boolean attributes' },
  { mapping: inlineMapping, name: 'toast', ext: 'ts', why: 'callOptions, memberKeys' },
  { mapping: inlineMapping, name: 'removed', ext: 'tsx', options: { pending: ['ODS-2336'] }, why: 'member hints of removed exports, a removed component used as JSX' },
  { mapping: inlineMapping, name: 'v19-look', ext: 'tsx', options: { look: { 'badge-accent-filled': 'v19', 'divider-neutral-grey': 'v19' } }, why: 'v19Look' },
  { mapping: inlineMapping, name: 'v19-look', output: 'v19-look-aluminium', ext: 'tsx', why: 'v19Look ignored in Aluminium' },
];

describe('ods/v20-migration parity with the codemod', () => {
  for (const { ext, mapping, name, options, output: outputName = name, why } of cases) {
    const input = `${name}.input.${ext}`;
    const output = `${outputName}.output.${ext}`;

    it(`the codemod gives ${output} from ${input}, and nothing more on a second run`, () => {
      const codemod = (source, filename) => transformSource(source, mapping ?? realMapping, filename, { config: options, packages: ['@ovh-ux/muk'] }).output;
      assert.equal(codemod(read(input), input), read(output));
      assert.equal(codemod(read(output), output), read(output));
    });

    it(`--fix on ${input} gives ${output} without its markers (${why})`, () => {
      assert.equal(lint(read(input), { filename: input, mapping, options }).output, stripScriptMarkers(read(output)));
    });

    it(`on ${output}: nothing to fix, one report per marker and none elsewhere`, () => {
      assertReportsMatchMarkers(read(output), lint(read(output), { filename: output, fix: false, mapping, options }).messages);
    });
  }

  it('drop-default with the v19 look of the Button keeps every emphasis explicit and the v19 default of a computed value', () => {
    const options = { look: { 'button-default-emphasis': 'v19' } };
    const { output } = lint(read('drop-default.input.tsx'), { filename: 'drop-default.input.tsx', mapping: inlineMapping, options });
    assert.equal(output, read('drop-default-v19.output.tsx'));
    const { messages } = lint(output, { filename: 'v19.tsx', fix: false, mapping: inlineMapping, options });
    assert.deepEqual(messages, []);
  });

  it('childless components are left alone while their entry is pending', () => {
    const source = read('childless.input.tsx');
    const { messages, output } = lint(source, { filename: 'childless.input.tsx', mapping: inlineMapping });
    assert.equal(output, source);
    assert.deepEqual(messages, []);
  });

  it('a CRLF file stays CRLF when imports are renamed or removed (bug [57])', () => {
    const source = [
      'import {',
      '  Badge,',
      '  BADGE_COLOR,',
      '  Divider,',
      '} from \'@ovhcloud/ods-react\';',
      'import { DIVIDER_COLOR } from \'@ovhcloud/ods-react\';',
      '',
      'export const A = () => <Badge color={ BADGE_COLOR.primary } />;',
      'export const B = () => <Divider color={ DIVIDER_COLOR.primary } />;',
      '',
    ].join('\r\n');
    const { output } = lint(source, { filename: 'crlf.tsx' });
    assert.equal(output, [
      'import {',
      '  Badge,',
      '  BADGE_STATUS,',
      '  Divider,',
      '} from \'@ovhcloud/ods-react\';',
      '',
      'export const A = () => <Badge status={ BADGE_STATUS.accent } />;',
      'export const B = () => <Divider />;',
      '',
    ].join('\r\n'));
    assert.doesNotMatch(output, /[^\r]\n/);
  });
});
