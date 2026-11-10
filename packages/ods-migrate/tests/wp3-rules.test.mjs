import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import parser from '@typescript-eslint/parser';
import { Linter } from 'eslint';
import plugin, { createPlugin } from '../src/eslint-plugin.mjs';

const mapping = JSON.parse(readFileSync(new URL('./fixtures/wp3/mapping.json', import.meta.url), 'utf8'));
const linter = new Linter({ configType: 'flat' });

function config(rules, filename) {
  return [{
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: { parser, parserOptions: { ecmaFeatures: { jsx: !/\.(c|m)?ts$/.test(filename) } } },
    plugins: { ods: createPlugin({ mapping }) },
    rules,
  }];
}
const verify = (source, { filename = 'file.tsx', options = {}, rule = 'v20-migration' } = {}) => linter.verify(source, config({ [`ods/${rule}`]: ['error', options] }, filename), filename);
const ids = (messages) => messages.map((message) => `${message.line}:${message.messageId}${message.fix ? ':fix' : ''}`);

describe('plugin', () => {
  it('exposes the three rules, from the package mappings by default', () => {
    assert.deepEqual(Object.keys(plugin.rules).sort(), ['v20-default-changed', 'v20-migration', 'v20-tokens']);
    assert.equal(plugin.meta.name, 'ods-migrate');
  });

  it('accepts the config of the configurator as rule options', () => {
    const options = { look: { 'badge-accent-filled': 'v19' }, builtOnOds: ['@ovh-ux/muk'], pending: ['example-pending'] };
    assert.deepEqual(verify('const a = 1;\n', { options }), []);
    assert.deepEqual(linter.verify('const a = "x";\n', [{ plugins: { ods: plugin }, rules: { 'ods/v20-tokens': ['error', { look: {}, pending: [] }] } }], 'a.js'), []);
  });
});

describe('ods/v20-migration reports without a fix', () => {
  it('a literal two renamed types disagree on', () => {
    const messages = verify('import { type BadgeColor, type ButtonColor } from \'@ovhcloud/ods-react\';\nexport const a: BadgeColor | ButtonColor = \'primary\';\n', { filename: 'a.ts' });
    assert.deepEqual(ids(messages).filter((id) => id.startsWith('2:')), ['2:ambiguousType']);
  });

  it('a spread on a mapped component in untyped code only', () => {
    const source = 'import { Badge } from \'@ovhcloud/ods-react\';\nexport const A = (p) => <Badge { ...p } />;\n';
    assert.deepEqual(ids(verify(source, { filename: 'a.jsx' })), ['2:spreadUntyped']);
    assert.deepEqual(ids(verify(source, { filename: 'a.tsx' })), []);
    assert.deepEqual(ids(verify(`// @ts-nocheck\n${source}`, { filename: 'a.tsx' })), ['3:spreadUntyped']);
  });

  it('nothing for a computed value of a renamed prop, even in JavaScript: --check lists it', () => {
    assert.deepEqual(ids(verify('import { Badge } from \'@ovhcloud/ods-react\';\nexport const A = ({ c }) => <Badge color={ c } />;\n', { filename: 'a.jsx' })), ['2:renamedProp:fix']);
  });

  it('a removed component once per outermost element', () => {
    const source = 'import { Switch, SwitchItem } from \'@ovhcloud/ods-react\';\nexport const A = () => (\n  <Switch>\n    <SwitchItem value="a" />\n  </Switch>\n);\n';
    assert.deepEqual(ids(verify(source, { options: { pending: ['example-pending'] } })), ['1:removedImport', '3:noEquivalent']);
    assert.deepEqual(ids(verify(source)), [], 'pending entries are off by default');
  });

  it('a childless element whose label reads a missing attribute', () => {
    const source = 'import { Pagination } from \'@ovhcloud/ods-react\';\nexport const A = ({ r }) => <Pagination withPageSizeSelector renderTotalItemsLabel={ r } />;\n';
    assert.deepEqual(ids(verify(source, { options: { pending: ['example-pending'] } })), ['2:childless']);
  });

  it('never adds the v19 default of a component: ods/v20-default-changed does', () => {
    const source = 'import { Button } from \'@ovhcloud/ods-react\';\nexport const A = () => <Button>a</Button>;\n';
    assert.deepEqual(verify(source, { options: { look: { 'button-default-emphasis': 'v19' } } }), []);
  });
});

describe('ods/v20-default-changed', () => {
  const source = [
    'import { Button, Badge } from \'@ovhcloud/ods-react\';',
    'export const A = (props) => (',
    '  <>',
    '    <Button>a</Button>',
    '    <Button variant="ghost">b</Button>',
    '    <Button emphasis="low">c</Button>',
    '    <Button onClick={ props.go } { ...props }>d</Button>',
    '    <Badge>e</Badge>',
    '  </>',
    ');',
    '',
  ].join('\n');

  it('reports every element without the props that would pin its look, with a suggestion and no autofix', () => {
    const messages = verify(source, { rule: 'v20-default-changed' });
    assert.deepEqual(ids(messages), ['4:defaultChanged', '7:defaultChanged']);
    assert.equal(messages[0].message, '<Button> without variant or emphasis: renders medium in v20 (was filled in v19).');
    assert.equal(linter.verifyAndFix(source, config({ 'ods/v20-default-changed': 'error' }, 'a.tsx'), 'a.tsx').output, source);
  });

  it('suggests the v19 attributes, before the first spread so that the caller still wins', () => {
    const [first, second] = verify(source, { rule: 'v20-default-changed' });
    const apply = (message) => {
      const { fix } = message.suggestions[0];
      return source.slice(0, fix.range[0]) + fix.text + source.slice(fix.range[1]);
    };
    assert.match(apply(first), /<Button emphasis="high">a<\/Button>/);
    assert.match(apply(second), /<Button onClick=\{ props.go \} emphasis="high" \{ \.\.\.props \}>d<\/Button>/);
  });

  it('follows the packages that re-export ODS', () => {
    const muk = 'import { Button } from \'@ovh-ux/muk\';\nexport const A = () => <Button />;\n';
    assert.deepEqual(ids(verify(muk, { rule: 'v20-default-changed' })), []);
    assert.deepEqual(ids(verify(muk, { options: { builtOnOds: ['@ovh-ux/muk'] }, rule: 'v20-default-changed' })), ['2:defaultChanged']);
  });
});
