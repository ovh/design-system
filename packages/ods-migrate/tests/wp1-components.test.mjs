import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { describe, it } from 'node:test';
import { Lang, parse } from '@ast-grep/napi';
import parser from '@typescript-eslint/parser';
import { Linter } from 'eslint';
import plugin from '../src/eslint-plugin.mjs';
import { guideBullets, guideComponents, guideEntry } from '../src/guide.mjs';
import { resolveMapping, stripScriptMarkers } from '../src/shared.mjs';
import { transformSource } from '../src/transform.mjs';

const mapping = JSON.parse(readFileSync(new URL('../mappings/v19-to-v20.json', import.meta.url), 'utf8'));
const fixtures = new URL('./fixtures/wp1/', import.meta.url);
const read = (name) => readFileSync(new URL(name, fixtures), 'utf8');
const inputs = readdirSync(fixtures).filter((name) => name.includes('.input.'));
const options = { packages: ['@ovh-ux/muk'] };
// v19-look: every codemod choice of the configurator set to the v19 look.
const V19_LOOK = { look: Object.fromEntries(['badge-accent-filled', 'button-default-emphasis', 'card-default-status', 'divider-neutral-grey', 'message-default-emphasis', 'spinner-neutral-grey'].map((id) => [id, 'v19'])) };
const optionsOf = (name) => (name.startsWith('v19-look') ? { ...options, config: V19_LOOK, from: 19 } : options);


const linter = new Linter({ configType: 'flat' });
const lintConfig = [{
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: { parser, parserOptions: { ecmaFeatures: { jsx: true } } },
  plugins: { ods: plugin },
  rules: { 'ods/v20-migration': ['error', { builtOnOds: ['@ovh-ux/muk'] }] },
}];
const hasErrorNode = (source, name) => parse(/\.(c|m)?ts$/.test(name) ? Lang.TypeScript : Lang.Tsx, source).root().find({ rule: { kind: 'ERROR' } }) !== null;

describe('wp1 codemod fixtures', () => {
  for (const input of inputs) {
    const output = input.replace('.input.', '.output.');

    it(`migrates ${input}`, () => {
      assert.equal(transformSource(read(input), mapping, input, optionsOf(input)).output, read(output));
    });

    it(`is idempotent on ${output}`, () => {
      assert.equal(transformSource(read(output), mapping, output, optionsOf(output)).output, read(output));
    });

    it(`${output} parses without error`, () => {
      assert.equal(hasErrorNode(read(output), output), false);
    });
  }

  it('migrates the Button wrappers once extends is resolved', () => {
    for (const input of ['wrappers.input.tsx', 'wrappers.input.jsx']) {
      assert.equal(transformSource(read(input), resolveMapping(mapping), input, options).output, read(input.replace('.input.', '.output.')));
    }
  });

  it('leaves the v18 BUTTON_VARIANT of @ovhcloud/ods-components alone', () => {
    const { output } = transformSource(read('button-variant-v18.input.tsx'), mapping, 'button-variant-v18.input.tsx', options);
    assert.match(output, /BUTTON_VARIANT\.flat/);
    assert.match(output, /import \{ BUTTON_VARIANT, OsdsButton \} from '@ovhcloud\/ods-components\/react';/);
  });

  it('notes that MESSAGE_EMPHASES lists one more value than MESSAGE_VARIANTS', () => {
    const { notes } = transformSource(read('message-variant.input.tsx'), mapping, 'message-variant.input.tsx', options);
    assert.deepEqual(notes.filter((note) => note.message.includes('MESSAGE_EMPHASES')).map((note) => note.line), [14]);
  });

  it('lists a computed variant of an untyped file instead of marking it', () => {
    const { todos, untyped } = transformSource(read('button-variant.input.jsx'), mapping, 'button-variant.input.jsx', options);
    assert.deepEqual(todos, []);
    assert.deepEqual(untyped.map((site) => site.line), [8]);
  });
});

describe('wp1 eslint parity', () => {
  for (const input of inputs.filter((name) => !name.startsWith('v19-look'))) {
    const output = input.replace('.input.', '.output.');

    it(`--fix on ${input} gives the codemod output, without the markers`, () => {
      assert.equal(linter.verifyAndFix(read(input), lintConfig, input).output, stripScriptMarkers(read(output)));
    });

    if (!read(output).includes('TODO(ods-v20)')) {
      it(`reports nothing on ${output}`, () => {
        assert.deepEqual(linter.verify(read(output), lintConfig, output), []);
      });
    }
  }
});

describe('wp1 guide', () => {
  it('has no entry for the components without an example, and lists them under Button', () => {
    assert.ok(!guideComponents().includes('CartAction'));
    assert.ok(guideComponents().includes('Table'));
    assert.match(guideBullets('Button').join('\n'), /The components built on Button \(CartAction, .* and QueryFilterClear\) take the same changes: `color` becomes `status` and `variant` becomes `emphasis`\./);
    assert.doesNotThrow(() => guideEntry('CartAction'));
    assert.doesNotMatch(guideEntry('CartAction'), /\*\*before\*\*/);
  });

  it('says which values are dropped as the v20 default', () => {
    const button = guideBullets('Button');
    assert.ok(button.includes('- `color="primary"`: remove it, `brand` is the v20 default.'));
    assert.ok(button.includes('- `variant="outline"`: remove it, `medium` is the v20 default.'));
    assert.ok(button.includes('- `variant="default"`: use `emphasis="high"`.'));
    assert.ok(guideBullets('Message').includes('- `variant="light"`: remove it, `medium` is the v20 default.'));
  });

  it('prints a boolean attribute as a bare name', () => {
    const table = guideBullets('Table');
    assert.ok(table.includes('- `variant="striped"`: replace it with `striped`.'));
    assert.ok(!table.join('\n').includes('striped="true"'));
  });

  it('prints the notes, the per-member hints and the v19 look', () => {
    assert.ok(guideBullets('Message').includes('- `MESSAGE_EMPHASES` now lists 3 values (high, low, medium): check the lists built from it.'));
    assert.ok(guideBullets('Divider').includes('- `DIVIDER_COLOR.primary`: primary is the default and only color of the v20 Divider: delete it.'));
    assert.ok(guideBullets('Table').includes('- `TableVariant`: use `TableProp[\'striped\']` (a boolean).'));
    assert.ok(guideBullets('Spinner').includes('- To keep the v19 look of `color="neutral"`, add `style={{ fill: \'var(--ods-semantic-color-surface-neutral)\' }}`.'));
    assert.match(guideBullets('Button').join('\n'), /- Without `variant` or `emphasis`: a Button without `variant` was filled in v19/);
  });

  it('prints the after snippet of Button with the defaults dropped', () => {
    const after = guideEntry('Button').split('**after**\n```tsx\n')[1].split('\n```')[0];
    assert.equal(after, [
      'import { BUTTON_STATUS, BUTTON_EMPHASIS, Button } from \'@ovhcloud/ods-react\';',
      '',
      '<Button>Save</Button>',
      '<Button emphasis={ BUTTON_EMPHASIS.low }>Cancel</Button>',
      '<Button status={ BUTTON_STATUS.critical } emphasis={ BUTTON_EMPHASIS.high }>Delete</Button>',
    ].join('\n'));
  });
});
