#!/usr/bin/env node
/*
 * Builds configurator/index.html: one self-contained page that shows, for every choice of
 * configurator/choices.json, the v19 rendering, the v20 Aluminium rendering (recommended) and the
 * v20 rendering with the v19 look kept, and downloads the ods-migrate.config.json the CLI reads.
 *
 * The renderings are real: the theme and the component styles are compiled from the repository
 * (the last v19 release and the v20 ref) with the symlinked `sass`, the way
 * scripts/build-token-mapping.mjs does, and the samples below reproduce the DOM and the CSS-module
 * classes that the components render (without the hash of the build). Each version lives in its
 * own shadow root, so that both themes declare their tokens without clashing.
 *
 * Usage: node configurator/build.mjs [--repo <path>] [--from <v19 tag>] [--ref <v20 ref>]
 *                                    [--check]
 * --check rebuilds the page in memory and fails when index.html is not up to date.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import postcss from 'postcss';

const here = dirname(fileURLToPath(import.meta.url));

/* ------------------------------------------------------------------------- CSS helpers */

/* The selectors of a document root, which a shadow root spells `:host`. */
const ROOT_SELECTOR = /(^|,\s*)(?:html:root|:root|html|body)(?=\s*(?:,|$))/g;

/** Scopes a stylesheet written for the document to the shadow host of a preview. */
function hostify(css) {
  const root = postcss.parse(css);
  root.walkRules((rule) => {
    const selector = rule.selector.replace(ROOT_SELECTOR, '$1:host');
    if (selector !== rule.selector) {
      rule.selector = selector;
    }
  });
  return root.toString();
}

/** The class names of an HTML sample. */
function classesOf(html) {
  return new Set([...html.matchAll(/\sclass=(["'])(.*?)\1/g)].flatMap(([, , value]) => value.split(/\s+/).filter(Boolean)));
}

/* The classes a selector requires, strings and attribute selectors left out. */
const selectorClasses = (selector) => [...selector.replace(/\[[^\]]*\]/g, '').replace(/(["']).*?\1/g, '').matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)].map(([, name]) => name);

/**
 * Keeps the rules whose classes are all used by the samples (the CSS modules declare hundreds of
 * icons and modifiers a preview never shows). Rules without a class, keyframes and font faces stay.
 */
function pruneCss(css, used) {
  const root = postcss.parse(css);
  root.walkRules((rule) => {
    if (rule.parent?.type === 'atrule' && /keyframes$/.test(rule.parent.name)) {
      return;
    }
    const kept = rule.selectors.filter((selector) => selectorClasses(selector).every((name) => used.has(name)));
    if (!kept.length) {
      rule.remove();
    } else if (kept.length !== rule.selectors.length) {
      rule.selectors = kept;
    }
  });
  let removed = true;
  while (removed) {
    removed = false;
    root.walkAtRules((atRule) => {
      if (atRule.nodes && atRule.nodes.length === 0) {
        atRule.remove();
        removed = true;
      }
    });
  }
  return root.toString();
}

/** The custom properties a stylesheet declares. */
const declaredProperties = (css) => new Set(css.match(/--[a-z0-9-]+(?=\s*:)/g));
/** The custom properties a stylesheet reads. */
const readProperties = (css) => [...new Set([...css.matchAll(/var\(\s*(--[a-z0-9-]+)/g)].map(([, name]) => name))];

/* ------------------------------------------------------------------------- samples */

const escapeAttr = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const cx = (...names) => names.filter(Boolean).join(' ');
const styleAttr = (style) => (style ? ` style="${escapeAttr(style)}"` : '');

/* The DOM of the components, as Button.tsx & co render it in each version. */
const v19 = {
  badge: (color, label, size = 'md') => `<span class="${cx('badge', `badge--${color}`, `badge--${size}`)}" data-ods="badge">${label}</span>`,
  button: ({ className, color = 'primary', size = 'md', variant = 'default' } = {}, content) => `<button class="${cx('button', `button--${color}`, `button--${size}`, `button--${variant}`, className)}" data-ods="button" type="button">${content}</button>`,
  card: (color, content) => `<div class="${cx('card', `card--${color}`)}" data-ods="card">${content}</div>`,
  divider: (color, style) => `<hr class="${cx('divider', color && `divider--${color}`, 'divider--horizontal', 'divider--2')}" data-ods="divider"${styleAttr(style)}>`,
  icon: (name, className, extra = '', dataOds = 'icon') => `<span class="${cx('icon', `icon--${name}`, className)}" data-ods="${dataOds}" role="presentation"${extra}></span>`,
  message: (classes, content) => `<div class="${cx('message', ...classes)}" data-ods="message">${content}</div>`,
  spinner: (classes, style) => `<span class="${cx('spinner', ...classes)}" data-ods="spinner" role="progressbar"${styleAttr(style)}>${SPINNER_SVG}</span>`,
};

const SPINNER_SVG = '<svg aria-hidden="true" class="spinner__svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="24" width="24"></rect><g transform="translate(-237.694 -93.932)"><path d="M-5236.305-4108.069h0v-2a9.011,9.011,0,0,0,9-9,9.01,9.01,0,0,0-9-9,9.01,9.01,0,0,0-9,9h-2a10.928,10.928,0,0,1,3.222-7.779,10.928,10.928,0,0,1,7.778-3.221,10.929,10.929,0,0,1,7.779,3.221,10.932,10.932,0,0,1,3.221,7.777,10.928,10.928,0,0,1-3.221,7.778A10.931,10.931,0,0,1-5236.305-4108.069Z" transform="translate(5486 4225)"></path><circle cx="1" cy="1" r="1" transform="translate(248.694 114.932)"></circle><circle cx="1" cy="1" r="1" transform="translate(238.694 104.932)"></circle></g></svg>';

const v20 = {
  badge: (status, label, { emphasis = 'medium', size = 'md' } = {}) => `<span class="${cx('badge', `badge--${status}`, emphasis !== 'medium' && `badge--${emphasis}`, `badge--${size}`)}" data-ods="badge">${label}</span>`,
  button: ({ className, emphasis = 'medium', size = 'md', status = 'brand' } = {}, content) => `<button class="${cx('button', `button--${status}`, `button--${size}`, `button--${emphasis}`, className)}" data-ods="button" type="button">${content}</button>`,
  card: (status, content) => `<div class="${cx('card', `card--${status}`)}" data-ods="card">${content}</div>`,
  divider: (style) => v19.divider(null, style),
  message: (status, emphasis, content) => `<div class="${cx('message', `message--${status}`, emphasis !== 'medium' && `message--${emphasis}`)}" data-ods="message">${content}</div>`,
  spinner: (style) => v19.spinner(['spinner--md'], style),
};

const messageContent = (closeButton) => `${v19.icon('circle-info', 'message-icon', '', 'message-icon')}<div class="message-body" data-ods="message-body">Your changes are saved.</div>${closeButton}`;

const accordion = (version) => {
  const emphasis = version === 'v20' ? 'medium' : null;
  const item = (label, open, content) => {
    const state = open ? 'open' : 'closed';
    const trigger = `<button class="${cx('accordion-trigger', emphasis && `accordion-trigger--${emphasis}`, 'accordion-trigger--expand-icon-right')}" data-ods="accordion-trigger" data-scope="accordion" data-part="item-trigger" data-state="${state}" aria-expanded="${open}" type="button"><div class="accordion-trigger__content">${label}</div>${v19.icon('chevron-right', 'accordion-trigger__icon', ` data-scope="accordion" data-part="item-indicator" data-state="${state}"`)}</button>`;
    const body = open ? `<div class="${cx('accordion-content', emphasis && `accordion-content--${emphasis}`)}" data-ods="accordion-content" data-scope="accordion" data-part="item-content" data-state="open">${content}</div>` : '';
    return `<div class="${cx('accordion-item', emphasis && `accordion-item--${emphasis}`)}" data-ods="accordion-item" data-scope="accordion" data-part="item" data-state="${state}">${trigger}${body}</div>`;
  };
  return `<div class="accordion" data-ods="accordion" data-scope="accordion" data-part="root" data-orientation="vertical">${
    item('Billing', true, 'Invoices are sent on the 1st of every month.')}${item('Contacts', false)}${item('Security', false)}</div>`;
};

/* The form fields of #1121: Input in a FormField, Select in a FormField, a Textarea. `version` is v19 or v20. */
const formFields = (version) => {
  const label = (text) => `<label class="text text--label form-field-label" data-ods="form-field-label">${text}</label>`;
  const input = '<div class="input"><input class="input__field" data-ods="input" type="text" value="Jane Doe"></div>';
  const select = `<div${version === 'v20' ? ' class="select"' : ''} data-ods="select" data-scope="select" data-part="root"><div data-scope="select" data-part="control"><button class="select-control" data-ods="select-control" data-scope="select" data-part="trigger" type="button"><span class="select-value" data-scope="select" data-part="value-text">Europe (Gravelines)</span>${v19.icon('chevron-down', 'select-control__icon', ' data-scope="select" data-part="indicator"')}</button></div></div>`;
  const field = (text, control) => `<div class="form-field" data-ods="form-field" role="group">${label(text)}${control}</div>`;
  return `${field('Name', input)}${field('Region', select)}<textarea class="textarea" data-ods="textarea" rows="2">A comment</textarea>`;
};

const panel = (pageStyle, panelStyle) => `<div class="ods-cfg-page" style="${escapeAttr(pageStyle)}"><div class="ods-cfg-panel" style="${escapeAttr(panelStyle)}">A panel on the page</div></div>`;
const cardContent = '<div class="ods-cfg-card-body"><strong>Instance b3-8</strong><br>Gravelines · 2 vCores</div>';

/* `style={{ backgroundColor: 'var(--x)' }}` in a snippet → `background-color: var(--x)`. */
function inlineStyleOf(snippet) {
  const match = snippet.match(/style=\{\{\s*(\w+):\s*'([^']+)'\s*\}\}/);
  if (!match) {
    throw new Error(`no inline style in ${snippet}`);
  }
  return `${match[1].replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}: ${match[2]}`;
}

/**
 * The three renderings of every choice. `css` names the stylesheet set: v19 (last v19 release)
 * or v20 (the v20 ref). `layout` is the flow of the sample.
 * `checks` are the computed styles the page compares between v19 and the alternative.
 */
function samples(choices) {
  const byId = Object.fromEntries(choices.map((choice) => [choice.id, choice]));
  const altStyle = (id) => inlineStyleOf(byId[id].alternative.snippet);
  return {
    'button-default-emphasis': {
      checks: [{ props: ['background-color', 'color', 'border-top-color'], selector: '[data-ods="button"]' }],
      v19: { css: 'v19', html: `${v19.button({}, 'Save')}${v19.button({ variant: 'outline' }, 'Cancel')}` },
      v20: { css: 'v20', html: `${v20.button({}, 'Save')}${v20.button({}, 'Cancel')}` },
      alt: { css: 'v20', html: `${v20.button({ emphasis: 'high' }, 'Save')}${v20.button({}, 'Cancel')}` },
    },
    'message-default-emphasis': {
      checks: [{ props: ['background-color', 'border-top-color', 'color'], selector: '[data-ods="message"]' }],
      layout: 'block',
      v19: { css: 'v19', html: v19.message(['message--information', 'message--default'], messageContent(v19.button({ className: 'message__close', color: 'neutral', size: 'xs', variant: 'ghost' }, v19.icon('xmark')))) },
      v20: { css: 'v20', html: v20.message('information', 'medium', messageContent(v20.button({ className: 'message__close', emphasis: 'low', size: 'xs', status: 'neutral' }, v19.icon('xmark')))) },
      alt: { css: 'v20', html: v20.message('information', 'high', messageContent(v20.button({ className: 'message__close', emphasis: 'low', size: 'xs', status: 'neutral' }, v19.icon('xmark')))) },
    },
    'card-default-status': {
      checks: [{ props: ['border-top-color', 'border-top-left-radius'], selector: '[data-ods="card"]' }],
      v19: { css: 'v19', html: v19.card('primary', cardContent) },
      v20: { css: 'v20', html: v20.card('neutral', cardContent) },
      alt: { css: 'v20', html: v20.card('accent', cardContent) },
    },
    'badge-accent-filled': {
      checks: [{ props: ['background-color', 'color'], selector: '[data-ods="badge"]' }],
      v19: { css: 'v19', html: v19.badge('primary', 'New') },
      v20: { css: 'v20', html: v20.badge('accent', 'New') },
      alt: { css: 'v20', html: v20.badge('accent', 'New', { emphasis: 'high' }) },
    },
    'divider-neutral-grey': {
      checks: [{ props: ['background-color'], selector: '[data-ods="divider"]' }],
      layout: 'block',
      v19: { css: 'v19', html: `<p>Above the line</p>${v19.divider('neutral')}<p>Below the line</p>` },
      v20: { css: 'v20', html: `<p>Above the line</p>${v20.divider()}<p>Below the line</p>` },
      alt: { css: 'v20', html: `<p>Above the line</p>${v20.divider(altStyle('divider-neutral-grey'))}<p>Below the line</p>` },
    },
    'spinner-neutral-grey': {
      checks: [{ props: ['fill'], selector: '[data-ods="spinner"]' }],
      v19: { css: 'v19', html: v19.spinner(['spinner--neutral', 'spinner--md']) },
      v20: { css: 'v20', html: v20.spinner() },
      alt: { css: 'v20', html: v20.spinner(altStyle('spinner-neutral-grey')) },
    },
    'page-background': {
      checks: [{ props: ['background-color'], selector: '.ods-cfg-page' }, { props: ['background-color'], selector: '.ods-cfg-panel' }],
      layout: 'block',
      v19: { css: 'v19', html: panel('background-color: var(--ods-theme-background-color)', 'background-color: var(--ods-theme-background-color)') },
      v20: { css: 'v20', html: panel('background-color: var(--ods-semantic-color-surface-page)', 'background-color: var(--ods-semantic-color-surface-raised)') },
      alt: { css: 'v20', html: panel('background-color: var(--ods-semantic-color-surface-raised)', 'background-color: var(--ods-semantic-color-surface-raised)') },
    },
    'button-radius': {
      checks: [{ props: ['border-top-left-radius'], selector: '[data-ods="button"]' }],
      v19: { css: 'v19', html: ['xs', 'sm', 'md'].map((size, i) => v19.button({ size, variant: 'outline' }, ['Extra small', 'Small', 'Medium'][i])).join('') },
      v20: { css: 'v20', html: ['xs', 'sm', 'md'].map((size, i) => v20.button({ size }, ['Extra small', 'Small', 'Medium'][i])).join('') },
      alt: { css: 'v20', extraCss: byId['button-radius'].alternative.css, html: ['xs', 'sm', 'md'].map((size, i) => v20.button({ size }, ['Extra small', 'Small', 'Medium'][i])).join('') },
    },
    'accordion-radius': {
      checks: [{ props: ['border-top-left-radius'], selector: '[data-ods="accordion-item"]:first-child' }, { props: ['border-bottom-left-radius'], selector: '[data-ods="accordion-item"]:last-child' }],
      layout: 'block',
      v19: { css: 'v19', html: accordion('v19') },
      v20: { css: 'v20', html: accordion('v20') },
      alt: { css: 'v20', extraCss: byId['accordion-radius'].alternative.css, html: accordion('v20') },
    },
    'badge-radius': {
      checks: [{ props: ['border-top-left-radius'], selector: '[data-ods="badge"]' }],
      v19: { css: 'v19', html: [['success', 'Active'], ['warning', 'Pending'], ['neutral', 'Draft']].map(([color, label]) => v19.badge(color, label)).join('') },
      v20: { css: 'v20', html: [['success', 'Active'], ['warning', 'Pending'], ['neutral', 'Draft']].map(([status, label]) => v20.badge(status, label)).join('') },
      alt: { css: 'v20', extraCss: byId['badge-radius'].alternative.css, html: [['success', 'Active'], ['warning', 'Pending'], ['neutral', 'Draft']].map(([status, label]) => v20.badge(status, label)).join('') },
    },
    'form-field-width': {
      checks: [{ props: ['width'], selector: '.input' }, { props: ['width'], selector: '[data-ods="select"]' }, { props: ['width'], selector: '[data-ods="textarea"]' }],
      layout: 'form',
      v19: { css: 'v19', html: formFields('v19') },
      v20: { css: 'v20', html: formFields('v20') },
      alt: { css: 'v20', extraCss: byId['form-field-width'].alternative.css, html: formFields('v20') },
    },
    'font-family': {
      checks: [{ props: ['font-family'], selector: '.ods-cfg-text' }],
      layout: 'block',
      v19: { css: 'v19', html: '<p class="ods-cfg-text" style="font-family: var(--ods-theme-font-family)">The quick brown fox jumps over the lazy dog. 0123456789</p>' },
      v20: { css: 'v20', html: '<p class="ods-cfg-text" style="font-family: var(--ods-semantic-font-family-body)">The quick brown fox jumps over the lazy dog. 0123456789</p>' },
      alt: { css: 'v20', extraCss: byId['font-family'].alternative.css, html: '<p class="ods-cfg-text" style="font-family: var(--ods-semantic-font-family-body)">The quick brown fox jumps over the lazy dog. 0123456789</p>' },
    },
  };
}

/* The base of a preview, as an app sets it: the theme's font, text colour and background. */
const HOST_BASE = {
  v19: ':host { background-color: var(--ods-theme-background-color); color: var(--ods-theme-text-color); font-family: var(--ods-theme-font-family); }',
  v20: ':host { background-color: var(--ods-semantic-color-surface-raised); color: var(--ods-semantic-color-content-text); font-family: var(--ods-semantic-font-family-body); }',
};

/* The component styles each preview reads, relative to packages/ods-react/src/components. */
const MODULES = [
  'accordion/src/components/accordion/accordion.module.scss',
  'accordion/src/components/accordion-content/accordionContent.module.scss',
  'accordion/src/components/accordion-item/accordionItem.module.scss',
  'accordion/src/components/accordion-trigger/accordionTrigger.module.scss',
  'badge/src/components/badge/badge.module.scss',
  'button/src/components/button/button.module.scss',
  'card/src/components/card/card.module.scss',
  'divider/src/components/divider/divider.module.scss',
  'form-field/src/components/form-field/formField.module.scss',
  'form-field/src/components/form-field-label/formFieldLabel.module.scss',
  'icon/src/components/icon/icon.module.scss',
  'input/src/components/input/input.module.scss',
  'message/src/components/message/message.module.scss',
  'message/src/components/message-body/messageBody.module.scss',
  'message/src/components/message-icon/messageIcon.module.scss',
  'select/src/components/select/select.module.scss',
  'select/src/components/select-control/selectControl.module.scss',
  'select/src/components/select-value-text/selectValue.module.scss',
  'spinner/src/components/spinner/spinner.module.scss',
  'text/src/components/text/text.module.scss',
  'textarea/src/components/textarea/textarea.module.scss',
];

/* ------------------------------------------------------------------------- build */

function compileRef(git, ref, sass) {
  const dir = mkdtempSync(join(tmpdir(), 'ods-configurator-'));
  try {
    const roots = ['packages/ods-react/src/style', 'packages/ods-react/src/components', 'packages/themes/src', 'packages/themes/assets/fonts'];
    execFileSync('tar', ['-x', '-C', dir], { input: git(['archive', ref, ...roots], null), maxBuffer: 1 << 30 });
    const options = { quietDeps: true, silenceDeprecations: ['import', 'global-builtin'] };
    // The default theme: src/default up to v19, Aluminium light once the themes stand alone (#1162).
    const entry = ['packages/themes/src/default/index.scss', 'packages/themes/src/aluminium/light.scss'].find((path) => existsSync(join(dir, path)));
    const theme = sass.compile(join(dir, entry), options).css;
    const components = [];
    for (const module of MODULES) {
      try {
        components.push(sass.compile(join(dir, 'packages/ods-react/src/components', module), options).css);
      } catch (error) {
        // A module that does not exist in this version (select.module.scss before #1121).
        if (!/no such file|ENOENT|Cannot open file/i.test(error.message)) {
          throw error;
        }
      }
    }
    const read = (path) => {
      try {
        return readFileSync(join(dir, path));
      } catch {
        return null;
      }
    };
    return {
      components: components.join('\n'),
      fonts: {
        icon: read('packages/themes/assets/fonts/ods-icon/icomoon/icomoon.woff'),
        sans: read('packages/themes/assets/fonts/source-sans-3/woff2/source-sans3-variable-custom.woff2') ?? read('packages/themes/assets/fonts/source-sans-pro/woff2/source-sans3-variable-custom.woff2'),
      },
      theme,
    };
  } finally {
    rmSync(dir, { force: true, recursive: true });
  }
}

/** The page data and the problems found while checking choices.json against the compiled styles. */
function buildData(choices, compiled, mapping) {
  const problems = [];
  const stages = samples(choices.choices);
  const css = {};
  for (const [name, styles] of Object.entries(compiled)) {
    const used = new Set(Object.values(stages).flatMap((stage) => ['v19', 'v20', 'alt'].filter((side) => stage[side].css === name).flatMap((side) => [...classesOf(stage[side].html)])));
    css[name] = hostify(`${styles.theme}\n${pruneCss(styles.components, used)}\n${HOST_BASE[name]}\n`);
    const declared = declaredProperties(`${styles.theme}\n${styles.components}`);
    for (const property of readProperties(HOST_BASE[name])) {
      if (!declared.has(property)) problems.push(`${name}: the preview base reads ${property}, which the theme does not declare`);
    }
  }
  // Every token the opt-out CSS, the alternative snippets and the samples read exists in the version they target.
  for (const choice of choices.choices) {
    const stage = stages[choice.id];
    for (const side of ['v19', 'v20', 'alt']) {
      const { css: name, extraCss = '', html } = stage[side];
      const declared = declaredProperties(`${compiled[name].theme}\n${compiled[name].components}`);
      for (const property of readProperties(`${extraCss}\n${html}`)) {
        if (!declared.has(property)) problems.push(`${choice.id}: ${side} reads ${property}, which ${name} does not declare`);
      }
      for (const property of declaredProperties(extraCss)) {
        if (!declared.has(property)) problems.push(`${choice.id}: the opt-out CSS sets ${property}, which ${name} never reads`);
      }
    }
  }
  // The font opt-out keeps the v20 stack after 'Source Sans Pro'.
  const v20Body = compiled.v20.theme.match(/--ods-semantic-font-family-body:\s*([^;]+);/)?.[1].trim();
  const fontCss = choices.choices.find(({ id }) => id === 'font-family')?.alternative.css ?? '';
  if (v20Body && !fontCss.includes(`'Source Sans Pro', ${v20Body};`)) {
    problems.push(`font-family: the opt-out CSS must be 'Source Sans Pro', ${v20Body}`);
  }
  // The v19 look of Divider and Spinner is the one the component mapping writes, once WP1's data is there.
  for (const [id, component] of [['divider-neutral-grey', 'Divider'], ['spinner-neutral-grey', 'Spinner']]) {
    const expr = mapping?.components?.[component]?.props?.color?.v19Look?.values?.neutral?.style?.expr;
    const snippet = choices.choices.find((choice) => choice.id === id)?.alternative.snippet ?? '';
    if (expr && !snippet.includes(`style={${expr}}`)) {
      problems.push(`${id}: the alternative snippet does not write the v19Look of mappings/v19-to-v20.json (${expr})`);
    }
  }
  const checks = Object.fromEntries(Object.entries(stages).map(([id, { checks: list }]) => [id, list]));
  return {
    data: {
      checks,
      choices,
      css,
      stages: Object.fromEntries(Object.entries(stages).map(([id, stage]) => [id, Object.fromEntries(['v19', 'v20', 'alt', 'layout'].filter((key) => stage[key]).map((key) => [key, stage[key]]))])),
    },
    problems,
  };
}

const json = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

function renderPage({ data, fonts, sources }) {
  const template = readFileSync(join(here, 'template.html'), 'utf8');
  return template
    .replace('/*__CONFIGURATOR_DATA__*/', () => json({ ...data, sources }))
    .replace('/*__FONT_SANS__*/', () => json(fonts.sans.toString('base64')))
    .replace('/*__FONT_ICON__*/', () => json(fonts.icon.toString('base64')));
}

async function main() {
  const { values: options } = parseArgs({
    options: {
      check: { default: false, type: 'boolean' },
      from: { type: 'string' },
      ref: { default: 'origin/master', type: 'string' },
      repo: { default: join(here, '../../..'), type: 'string' },
    },
  });
  const git = (args, encoding = 'utf8') => execFileSync('git', ['-C', options.repo, ...args], { encoding, maxBuffer: 1 << 30 });
  const resolveRef = (ref) => git(['rev-parse', '--short', ref]).trim();
  const from = options.from ?? git(['tag', '--list', 'v19.*', '--sort=-v:refname']).split('\n')[0];
  const require = createRequire(join(here, '../package.json'));
  let sass;
  try {
    sass = require('sass');
  } catch {
    console.error('sass is not installed: the configurator compiles the ODS styles with it (devDependency of ods-migrate)');
    process.exit(2);
  }
  const sources = { v19: `${from} (${resolveRef(from)})`, v20: `${options.ref} (${resolveRef(options.ref)})` };
  const compiled = { v19: compileRef(git, from, sass), v20: compileRef(git, options.ref, sass) };
  const choices = JSON.parse(readFileSync(join(here, 'choices.json'), 'utf8'));
  let mapping = null;
  try {
    mapping = JSON.parse(readFileSync(join(here, '../mappings/v19-to-v20.json'), 'utf8'));
  } catch {
    // The checks against the component mapping are skipped.
  }
  const { data, problems } = buildData(choices, compiled, mapping);
  for (const problem of problems) {
    console.error(`configurator: ${problem}`);
  }
  if (problems.length) {
    process.exit(1);
  }
  const page = renderPage({ data, fonts: compiled.v20.fonts, sources });
  const target = join(here, 'index.html');
  if (options.check) {
    let current = null;
    try {
      current = readFileSync(target, 'utf8');
    } catch {
      // Missing: stale.
    }
    if (current !== page) {
      console.error('configurator/index.html is not up to date: run node configurator/build.mjs');
      process.exit(1);
    }
    console.log('configurator/index.html is up to date');
    return;
  }
  writeFileSync(target, page);
  console.log(`configurator/index.html: ${(page.length / 1024).toFixed(0)} kB, ${choices.choices.length} choices, ${Object.entries(sources).map(([name, source]) => `${name} = ${source}`).join(', ')}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

export { buildData, classesOf, hostify, pruneCss, samples };
