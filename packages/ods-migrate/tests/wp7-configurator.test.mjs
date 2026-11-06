import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import vm from 'node:vm';
import { classesOf, hostify, pruneCss } from '../configurator/build.mjs';
import { CHOICE_IDS, CONFIG_FILE, defaultConfig, normalizeConfig, optOutCss, validateConfig } from '../src/config.mjs';

const page = readFileSync(new URL('../configurator/index.html', import.meta.url), 'utf8');
const choices = JSON.parse(readFileSync(new URL('../configurator/choices.json', import.meta.url), 'utf8'));
const scriptById = (id) => {
  const match = page.match(new RegExp(`<script[^>]*id="${id}"[^>]*>([\\s\\S]*?)</script>`));
  assert.ok(match, `no <script id="${id}"> in index.html`);
  return match[1];
};
const data = JSON.parse(scriptById('configurator-data'));

/* Runs the page's config builder (a plain script without DOM access) the way the browser does. */
function builder() {
  const context = vm.createContext({});
  vm.runInContext(scriptById('config-builder'), context);
  return context;
}

describe('configurator page', () => {
  it('is self-contained: no external script, stylesheet or import', () => {
    assert.doesNotMatch(page, /<script[^>]+src=/);
    assert.doesNotMatch(page, /<link[^>]+rel="stylesheet"/);
    assert.doesNotMatch(page, /@import/);
    assert.doesNotMatch(page, /url\(\s*['"]?(https?:)?\/\//);
  });

  it('embeds the current choices.json (rebuild it with configurator/build.mjs after an edit)', () => {
    assert.deepEqual(data.choices, choices);
  });

  it('renders every choice: before (v19), after (v20 Aluminium) and the alternative', () => {
    assert.deepEqual(Object.keys(data.stages), CHOICE_IDS);
    for (const choice of choices.choices) {
      const stage = data.stages[choice.id];
      if (choice.rendering === 'none') {
        continue;
      }
      for (const side of ['v19', 'v20', 'alt']) {
        assert.equal(typeof stage[side]?.html, 'string', `${choice.id}: ${side}`);
        assert.ok(stage[side].html.trim(), `${choice.id}: ${side} is empty`);
        assert.ok(data.css[stage[side].css], `${choice.id}: ${side} reads an unknown stylesheet ${stage[side].css}`);
      }
      // The alternative stage applies exactly the opt-out CSS that ods-migrate writes.
      assert.equal(stage.alt.extraCss ?? null, choice.kind === 'css' ? choice.alternative.css : null, choice.id);
    }
  });

  it('marks Aluminium as recommended and downloads ods-migrate.config.json', () => {
    assert.match(page, /[Rr]ecommended/);
    assert.ok(page.includes(CONFIG_FILE));
  });

  it('says where the rendering is not real', () => {
    for (const choice of choices.choices.filter(({ rendering }) => rendering !== 'real')) {
      assert.ok(data.choices.choices.find(({ id }) => id === choice.id).renderingNote, choice.id);
    }
  });

  it('builds the compiled stylesheets of both versions, scoped to the preview hosts', () => {
    for (const [name, css] of Object.entries(data.css)) {
      assert.doesNotMatch(css, /(^|[\s,}]):root\b/, name);
      assert.match(css, /:host/, name);
    }
    assert.match(data.css.v19, /--ods-theme-background-color/);
    assert.match(data.css.v20, /--ods-semantic-color-surface-page/);
  });
});

describe('config builder of the page', () => {
  it('writes every choice explicitly, and Aluminium normalizes to the default config', () => {
    const { buildConfig } = builder();
    const selection = Object.fromEntries(CHOICE_IDS.map((id) => [id, 'aluminium']));
    const raw = JSON.parse(JSON.stringify(buildConfig(selection, '')));
    assert.deepEqual(validateConfig(raw), []);
    assert.deepEqual(raw, { version: 1, look: selection });
    assert.deepEqual(normalizeConfig(raw), defaultConfig());
  });

  it('writes a valid config with v19 choices and a custom opt-out path', () => {
    const { buildConfig } = builder();
    const selection = Object.fromEntries(CHOICE_IDS.map((id) => [id, ['button-radius', 'badge-accent-filled'].includes(id) ? 'v19' : 'aluminium']));
    const raw = JSON.parse(JSON.stringify(buildConfig(selection, ' src/styles/ods-v19-look.css ')));
    assert.deepEqual(validateConfig(raw), []);
    assert.equal(raw.optOutCss, 'src/styles/ods-v19-look.css');
    assert.equal(raw.look['button-radius'], 'v19');
    assert.equal(raw.pending, undefined);
  });

  it('previews the same opt-out CSS as the one the CLI writes', () => {
    const { optOutCssOf } = builder();
    for (const ids of [[], ['button-radius'], ['font-family', 'button-default-emphasis', 'accordion-radius'], CHOICE_IDS]) {
      const look = Object.fromEntries(CHOICE_IDS.map((id) => [id, ids.includes(id) ? 'v19' : 'aluminium']));
      assert.equal(optOutCssOf(choices.choices, look), optOutCss(normalizeConfig({ look })), ids.join(','));
    }
  });

  it('reads back a config file into a selection, ignoring what it does not know', () => {
    const { readSelection } = builder();
    const selection = JSON.parse(JSON.stringify(readSelection({ look: { 'font-family': 'v19', nope: 'v19', 'card-default-status': 'blue' }, optOutCss: 'x.css' }, CHOICE_IDS)));
    assert.equal(selection.look['font-family'], 'v19');
    assert.equal(selection.look['card-default-status'], 'aluminium');
    assert.equal(selection.look.nope, undefined);
    assert.equal(selection.optOutCss, 'x.css');
    assert.deepEqual(selection.ignored, ['nope', 'card-default-status']);
  });
});

describe('build helpers', () => {
  it('scopes the theme to the preview host', () => {
    assert.equal(hostify(':root{--a:1}'), ':host{--a:1}');
    assert.equal(hostify(':root, [data-theme] { --a: 1 }'), ':host, [data-theme] { --a: 1 }');
    assert.equal(hostify('html:root { --a: 1 } body { margin: 0 }'), ':host { --a: 1 } :host { margin: 0 }');
    assert.equal(hostify('.root:root-ish { }'), '.root:root-ish { }');
  });

  it('lists the classes of an HTML sample', () => {
    assert.deepEqual([...classesOf('<b class="button button--md"></b><i class=\'icon  icon--xmark\'></i>')].sort(), ['button', 'button--md', 'icon', 'icon--xmark']);
  });

  it('keeps only the rules whose classes the samples use, inside layers and at-rules', () => {
    const css = '@layer a { .icon { x: 1 } .icon--xmark::before { c: 1 } .icon--bell::before { c: 2 } .button.button--high, .button--low { y: 1 } }'
      + ' @keyframes rotate { from { t: 0 } } :host { --z: 1 } [data-ods=button] { r: 1 }';
    const pruned = pruneCss(css, new Set(['icon', 'icon--xmark', 'button', 'button--high']));
    assert.match(pruned, /\.icon \{/);
    assert.match(pruned, /icon--xmark/);
    assert.doesNotMatch(pruned, /icon--bell/);
    assert.match(pruned, /\.button\.button--high \{/);
    assert.doesNotMatch(pruned, /button--low/);
    assert.match(pruned, /@keyframes rotate/);
    assert.match(pruned, /:host/);
    assert.match(pruned, /\[data-ods=button\]/);
  });
});
