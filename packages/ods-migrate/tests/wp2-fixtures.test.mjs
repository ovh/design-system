import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { describe, it } from 'node:test';
import { Lang, parse } from '@ast-grep/napi';
import { transformSource } from '../src/transform.mjs';

// Reproductions of the confirmed bugs of the review swarm, run with the real mapping.
const mapping = JSON.parse(readFileSync(new URL('../mappings/v19-to-v20.json', import.meta.url), 'utf8'));
const fixtures = new URL('./fixtures/wp2/', import.meta.url);
const read = (name) => readFileSync(new URL(name, fixtures), 'utf8');
const options = { packages: ['@ovh-ux/muk'] };
const errors = (source, name) => parse(/\.(c|m)?ts$/.test(name) ? Lang.TypeScript : Lang.Tsx, source).root().findAll({ rule: { kind: 'ERROR' } }).length;

describe('codemod: bug reproductions', () => {
  for (const input of readdirSync(fixtures).filter((name) => name.includes('.input.'))) {
    const output = input.replace('.input.', '.output.');

    it(`migrates ${input}`, () => {
      assert.equal(transformSource(read(input), mapping, input, options).output, read(output));
    });

    it(`is idempotent on ${output}`, () => {
      assert.equal(transformSource(read(output), mapping, output, options).output, read(output));
    });

    it(`adds no parse error to ${output}`, () => {
      assert.equal(errors(read(output), output), errors(read(input), input));
    });
  }

  it('rewrites a value typed by its own position only, never a label next to it (bug 11)', () => {
    const { output } = transformSource(read('typed-siblings.input.ts'), mapping, 'typed-siblings.input.ts');
    assert.match(output, /i18nKey: 'primary', color: 'accent'/);
    assert.match(output, /trackingId: 'primary'/);
    assert.match(output, /primary: 'primary',/);
  });

  it('marks a literal that two renamed types map differently, and rewrites it once when they agree (bugs 5, 17)', () => {
    const { output, todos } = transformSource(read('two-types.input.tsx'), mapping, 'two-types.input.tsx');
    assert.match(output, /AGREE: Record<string, MessageStatus \| BadgeStatus> = \{ info: 'accent' \}/);
    assert.equal(todos.length, 1);
    assert.match(todos[0].message, /ButtonColor and BadgeColor/);
  });

  it('keeps the line endings of a CRLF file and removes a whole import line (bug 57)', () => {
    const { output } = transformSource(read('crlf.input.tsx'), mapping, 'crlf.input.tsx');
    assert.equal(output.replace(/\r\n/g, '').includes('\n'), false);
    assert.doesNotMatch(output, /DIVIDER_COLOR/);
  });
});
