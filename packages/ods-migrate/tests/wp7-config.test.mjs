import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, describe, it } from 'node:test';
import postcss from 'postcss';
import {
  CHOICE_IDS,
  CONFIG_FILE,
  ConfigError,
  LOOKS,
  PENDING_IDS,
  defaultConfig,
  describeConfig,
  findConfig,
  loadConfig,
  normalizeConfig,
  optOutCss,
  validateConfig,
} from '../src/config.mjs';
import { isV19Look } from '../src/shared.mjs';

const choices = JSON.parse(readFileSync(new URL('../configurator/choices.json', import.meta.url), 'utf8'));
// A pending id the mappings know; none once every change has landed (the lists below are then empty).
const PENDING_ID = PENDING_IDS[0];
const pendingList = (count) => (PENDING_ID ? Array(count).fill(PENDING_ID) : []);

/* The choices of the configurator, in page order: their ids and kinds are fixed. */
const CHOICES = [
  ['button-default-emphasis', 'codemod'],
  ['message-default-emphasis', 'codemod'],
  ['card-default-status', 'codemod'],
  ['badge-accent-filled', 'codemod'],
  ['divider-neutral-grey', 'codemod'],
  ['spinner-neutral-grey', 'codemod'],
  ['page-background', 'tokens'],
  ['button-radius', 'css'],
  ['accordion-radius', 'css'],
  ['badge-radius', 'css'],
  ['form-field-width', 'css'],
  ['font-family', 'css'],
];

const scratch = realpathSync(mkdtempSync(join(tmpdir(), 'ods-migrate-wp7-')));
after(() => rmSync(scratch, { force: true, recursive: true }));
let dirs = 0;
const dirWith = (files) => {
  const dir = join(scratch, `d${dirs++}`);
  mkdirSync(dir);
  for (const [name, content] of Object.entries(files)) {
    writeFileSync(join(dir, name), content);
  }
  return dir;
};

describe('choices.json', () => {
  it('holds exactly the choice ids of the contract, in page order, with their kind', () => {
    assert.deepEqual(choices.choices.map(({ id, kind }) => [id, kind]), CHOICES);
  });

  it('is the source of CHOICE_IDS', () => {
    assert.deepEqual(CHOICE_IDS, choices.choices.map(({ id }) => id));
    assert.deepEqual(CHOICE_IDS, CHOICES.map(([id]) => id));
  });

  it('has the shape of the contract for every choice', () => {
    assert.equal(choices.version, 1);
    for (const choice of choices.choices) {
      const where = choice.id;
      for (const key of ['id', 'title', 'component', 'kind', 'v19', 'v20', 'recommended', 'alternative', 'rendering']) {
        assert.ok(choice[key] !== undefined, `${where}: ${key} is missing`);
      }
      assert.match(choice.id, /^[a-z0-9]+(-[a-z0-9]+)*$/, where);
      assert.ok(['codemod', 'tokens', 'css', 'none'].includes(choice.kind), where);
      assert.equal(choice.recommended, 'aluminium', where);
      for (const side of ['v19', 'v20']) {
        assert.equal(typeof choice[side].snippet, 'string', `${where}: ${side}.snippet`);
        assert.ok(choice[side].snippet.trim(), `${where}: ${side}.snippet is empty`);
        assert.equal(typeof choice[side].description, 'string', `${where}: ${side}.description`);
      }
      assert.equal(typeof choice.alternative.effect, 'string', `${where}: alternative.effect`);
      assert.ok(['real', 'approximate', 'none'].includes(choice.rendering), where);
      if (choice.rendering !== 'real') {
        assert.ok(choice.renderingNote, `${where}: a rendering that is not real says why in renderingNote`);
      }
      // The opt-out CSS belongs to the css choices only, and every css choice has one.
      assert.equal(typeof choice.alternative.css === 'string', choice.kind === 'css', `${where}: alternative.css iff kind css`);
    }
  });

  it('writes opt-out CSS that parses and never targets :root alone for a component', () => {
    for (const choice of choices.choices.filter(({ kind }) => kind === 'css')) {
      const root = postcss.parse(choice.alternative.css);
      let rules = 0;
      root.walkRules((rule) => {
        rules++;
        // A component token is declared on the component itself: a :root override loses against it (BC-10).
        if (/--ods-(button|accordion|badge)-/.test(rule.toString())) {
          assert.doesNotMatch(rule.selector, /^:root$/, `${choice.id}: ${rule.selector}`);
        }
      });
      assert.ok(rules > 0, `${choice.id}: no rule`);
    }
  });

  it('puts the button radius opt-out on [data-ods="button"] (synthesis P3 §3)', () => {
    const css = choices.choices.find(({ id }) => id === 'button-radius').alternative.css;
    assert.match(css, /\[data-ods="button"\]\s*\{/);
    for (const size of ['xs', 'sm', 'md']) {
      assert.match(css, new RegExp(`--ods-button-border-radius-${size}:`));
    }
  });
});

describe('defaultConfig', () => {
  it('is Aluminium for every choice, with nothing pending', () => {
    const config = defaultConfig('/work/app');
    assert.deepEqual(config, {
      version: 1,
      look: Object.fromEntries(CHOICE_IDS.map((id) => [id, 'aluminium'])),
      optOutCss: '/work/app/ods-v19-look.css',
      pending: [],
      file: null,
    });
    assert.equal(CHOICE_IDS.some((id) => isV19Look(config, id)), false);
  });

  it('defaults to the working directory and returns a fresh object every time', () => {
    const one = defaultConfig();
    assert.equal(one.optOutCss, join(process.cwd(), 'ods-v19-look.css'));
    one.look['button-radius'] = 'v19';
    one.pending.push('ANY-1');
    const two = defaultConfig();
    assert.equal(two.look['button-radius'], 'aluminium');
    assert.deepEqual(two.pending, []);
  });

  it('exports the file name and the two looks', () => {
    assert.equal(CONFIG_FILE, 'ods-migrate.config.json');
    assert.deepEqual(LOOKS, ['aluminium', 'v19']);
  });
});

describe('validateConfig', () => {
  it('accepts an empty config, the example of the contract and an explicit full config', () => {
    assert.deepEqual(validateConfig({}), []);
    assert.deepEqual(validateConfig(undefined), []);
    assert.deepEqual(validateConfig({
      version: 1,
      look: { 'button-default-emphasis': 'v19', 'badge-accent-filled': 'v19', 'button-radius': 'v19' },
      optOutCss: 'src/ods-v19-look.css',
      pending: [],
    }), []);
    assert.deepEqual(validateConfig({ look: Object.fromEntries(CHOICE_IDS.map((id) => [id, 'aluminium'])), pending: pendingList(1) }), []);
  });

  it('rejects an unknown top-level key', () => {
    const errors = validateConfig({ looks: {} });
    assert.equal(errors.length, 1);
    assert.match(errors[0], /unknown key "looks"/);
  });

  it('rejects an unknown choice id and names the known ones', () => {
    const errors = validateConfig({ look: { 'button-color': 'v19' } });
    assert.equal(errors.length, 1);
    assert.match(errors[0], /unknown choice "button-color"/);
    assert.match(errors[0], /button-default-emphasis/);
  });

  it('rejects a look value other than the two', () => {
    for (const value of ['V19', 'blue-jeans', true, null, 19]) {
      const errors = validateConfig({ look: { 'button-radius': value } });
      assert.equal(errors.length, 1, String(value));
      assert.match(errors[0], /look\["button-radius"\] must be "aluminium" or "v19"/);
    }
  });

  it('rejects a version other than 1', () => {
    for (const version of [2, '1', 0, null]) {
      const errors = validateConfig({ version });
      assert.equal(errors.length, 1, String(version));
      assert.match(errors[0], /version must be 1/);
    }
  });

  it('rejects wrong types', () => {
    assert.match(validateConfig({ look: [] })[0], /look must be an object/);
    assert.match(validateConfig({ look: 'v19' })[0], /look must be an object/);
    assert.match(validateConfig({ look: null })[0], /look must be an object/);
    assert.match(validateConfig({ optOutCss: 3 })[0], /optOutCss must be a non-empty string/);
    assert.match(validateConfig({ optOutCss: '  ' })[0], /optOutCss must be a non-empty string/);
    assert.match(validateConfig({ pending: 'example-pending' })[0], /pending must be an array of strings/);
    assert.match(validateConfig({ pending: ['example-pending', 1] })[0], /pending must be an array of strings/);
  });

  it('rejects a config that is not an object', () => {
    for (const raw of [null, [], 'v19', 1, true]) {
      const errors = validateConfig(raw);
      assert.equal(errors.length, 1, JSON.stringify(raw));
      assert.match(errors[0], /must be a JSON object/);
    }
  });

  it('reports every error at once and never throws', () => {
    const errors = validateConfig({ version: 3, look: { nope: 'v19', 'button-radius': 'maybe' }, extra: 1, pending: {} });
    assert.equal(errors.length, 5);
    const hostile = { get look() { throw new Error('boom'); } };
    assert.doesNotThrow(() => validateConfig(hostile));
    assert.ok(validateConfig(hostile).length > 0);
    assert.doesNotThrow(() => validateConfig(Object.create(null)));
    assert.deepEqual(validateConfig(Object.create(null)), []);
  });

  it('does not take inherited keys for choice ids', () => {
    assert.match(validateConfig({ look: { constructor: 'v19' } })[0], /unknown choice "constructor"/);
    assert.match(validateConfig({ look: { __proto__: null, toString: 'v19' } })[0], /unknown choice "toString"/);
  });
});

describe('normalizeConfig', () => {
  it('fills every choice, resolves optOutCss next to the config file and keeps pending', () => {
    const config = normalizeConfig({
      version: 1,
      look: { 'button-default-emphasis': 'v19', 'badge-accent-filled': 'v19', 'button-radius': 'v19' },
      optOutCss: 'src/ods-v19-look.css',
      pending: pendingList(2),
    }, { file: '/work/app/ods-migrate.config.json' });
    assert.equal(config.version, 1);
    assert.equal(config.file, '/work/app/ods-migrate.config.json');
    assert.equal(config.optOutCss, '/work/app/src/ods-v19-look.css');
    assert.deepEqual(config.pending, pendingList(1));
    assert.deepEqual(Object.keys(config.look), CHOICE_IDS);
    assert.deepEqual(CHOICE_IDS.filter((id) => isV19Look(config, id)), ['button-default-emphasis', 'badge-accent-filled', 'button-radius']);
  });

  it('gives the default config for {} without a file', () => {
    const config = normalizeConfig({});
    assert.deepEqual(config, defaultConfig());
  });

  it('puts the default opt-out CSS next to the config file', () => {
    assert.equal(normalizeConfig({}, { file: '/a/b/ods-migrate.config.json' }).optOutCss, '/a/b/ods-v19-look.css');
    assert.equal(normalizeConfig({ optOutCss: '/abs/look.css' }, { file: '/a/b/c.json' }).optOutCss, '/abs/look.css');
  });

  it('throws a ConfigError that carries every error', () => {
    assert.throws(() => normalizeConfig({ version: 2, look: { nope: 'v19' } }, { file: '/a/ods-migrate.config.json' }), (error) => {
      assert.ok(error instanceof ConfigError);
      assert.ok(error instanceof Error);
      assert.equal(error.code, 'ODS_MIGRATE_CONFIG');
      assert.equal(error.errors.length, 2);
      assert.match(error.message, /\/a\/ods-migrate\.config\.json/);
      assert.match(error.message, /version must be 1/);
      assert.match(error.message, /unknown choice "nope"/);
      return true;
    });
  });

  it('copies its input: the normalized config shares nothing with the raw one', () => {
    const raw = { look: { 'font-family': 'v19' }, pending: pendingList(1) };
    const config = normalizeConfig(raw);
    config.look['font-family'] = 'aluminium';
    config.pending.push('Y');
    assert.deepEqual(raw, { look: { 'font-family': 'v19' }, pending: pendingList(1) });
  });
});

describe('loadConfig and findConfig', () => {
  it('reads, parses and normalizes a file', () => {
    const dir = dirWith({ [CONFIG_FILE]: JSON.stringify({ look: { 'card-default-status': 'v19' } }) });
    const config = loadConfig(join(dir, CONFIG_FILE));
    assert.equal(config.file, join(dir, CONFIG_FILE));
    assert.equal(config.look['card-default-status'], 'v19');
    assert.equal(config.optOutCss, join(dir, 'ods-v19-look.css'));
  });

  it('accepts a byte order mark', () => {
    const dir = dirWith({ [CONFIG_FILE]: `﻿${JSON.stringify({ look: { 'font-family': 'v19' } })}` });
    assert.equal(loadConfig(join(dir, CONFIG_FILE)).look['font-family'], 'v19');
  });

  it('resolves a relative path against the working directory', () => {
    const dir = dirWith({ [CONFIG_FILE]: '{}' });
    const cwd = process.cwd();
    process.chdir(dir);
    try {
      assert.equal(loadConfig(CONFIG_FILE).file, join(dir, CONFIG_FILE));
    } finally {
      process.chdir(cwd);
    }
  });

  it('throws a ConfigError for a missing file, a JSON syntax error and an invalid config', () => {
    const dir = dirWith({ 'broken.json': '{ "look": ', 'invalid.json': '{ "look": { "nope": "v19" } }', 'empty.json': '' });
    const expect = (name, pattern) => assert.throws(() => loadConfig(join(dir, name)), (error) => {
      assert.ok(error instanceof ConfigError, name);
      assert.equal(error.code, 'ODS_MIGRATE_CONFIG');
      assert.match(error.message, pattern);
      assert.ok(error.message.includes(join(dir, name)), error.message);
      return true;
    });
    expect('missing.json', /no such file/);
    expect('broken.json', /invalid JSON/);
    expect('empty.json', /invalid JSON/);
    expect('invalid.json', /unknown choice "nope"/);
  });

  it('finds the config file in a directory, and only a file', () => {
    assert.equal(findConfig(dirWith({ [CONFIG_FILE]: '{}' })), join(scratch, `d${dirs - 1}`, CONFIG_FILE));
    assert.equal(findConfig(dirWith({})), null);
    const dir = dirWith({});
    mkdirSync(join(dir, CONFIG_FILE));
    assert.equal(findConfig(dir), null);
  });
});

describe('optOutCss and describeConfig', () => {
  it('writes nothing for Aluminium', () => {
    assert.equal(optOutCss(defaultConfig()), null);
    assert.equal(optOutCss(undefined), null);
    assert.deepEqual(describeConfig(defaultConfig()), []);
  });

  it('writes nothing for a v19 choice that the codemod or the token pass applies', () => {
    const config = normalizeConfig({ look: { 'button-default-emphasis': 'v19', 'page-background': 'v19' } });
    assert.equal(optOutCss(config), null);
  });

  it('concatenates the CSS of the css choices set to v19, in page order, each under its id', () => {
    const config = normalizeConfig({ look: { 'font-family': 'v19', 'button-radius': 'v19', 'card-default-status': 'v19' } });
    const css = optOutCss(config);
    const byId = Object.fromEntries(choices.choices.map((choice) => [choice.id, choice]));
    assert.ok(css.includes(byId['button-radius'].alternative.css.trim()));
    assert.ok(css.includes(byId['font-family'].alternative.css.trim()));
    assert.ok(css.indexOf('button-radius') < css.indexOf('font-family'));
    assert.doesNotMatch(css, /accordion/);
    assert.ok(css.endsWith('\n'));
    postcss.parse(css);
    // The CLI adds its own header: the text starts with the first choice.
    assert.doesNotMatch(css, /^\/\* Generated by ods-migrate/);
  });

  it('accepts a partial plain object, like the engines do', () => {
    assert.match(optOutCss({ look: { 'accordion-radius': 'v19' } }), /--ods-accordion-border-radius/);
  });

  it('describes one line per v19 choice', () => {
    const config = normalizeConfig({ look: { 'badge-accent-filled': 'v19', 'badge-radius': 'v19', 'font-family': 'aluminium' } });
    const lines = describeConfig(config);
    assert.equal(lines.length, 2);
    assert.match(lines[0], /^badge-accent-filled: /);
    assert.match(lines[1], /^badge-radius: /);
    assert.match(lines[1], /by your v19-look stylesheet$/);
  });
});

describe('module boundaries: no engine reads the config module', () => {
  it('no engine imports src/config.mjs', () => {
    const src = new URL('../src/', import.meta.url);
    for (const file of readdirSync(src).filter((name) => name.endsWith('.mjs') && !['cli.mjs', 'config.mjs'].includes(name))) {
      assert.doesNotMatch(readFileSync(new URL(file, src), 'utf8'), /['"]\.\/config\.mjs['"]/, file);
    }
  });

  it('src/config.mjs imports only Node built-ins', () => {
    const imports = [...readFileSync(new URL('../src/config.mjs', import.meta.url), 'utf8').matchAll(/^import .* from '([^']+)';$/gm)].map(([, from]) => from);
    assert.ok(imports.length > 0);
    assert.ok(imports.every((from) => from.startsWith('node:')), imports.join(', '));
  });
});
