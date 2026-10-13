/**
 * Server-side rendering smoke test of the built @ovhcloud/ods-react bundle.
 *
 * Runs in plain Node (no DOM) against dist/ and checks that:
 *   1. every entry point (dist/index.js and each dist/components/<name>/index.js)
 *      can be imported without touching `document` / `window` at load time;
 *   2. a few components render with react-dom/server `renderToString`.
 *
 * CSS imports injected by vite-plugin-lib-inject-css are neutralized by a
 * module loader hook, as a server bundler would do.
 *
 * Usage: node scripts/test-ssr.mjs   (from packages/ods-react, after build:prod)
 */
import { readdirSync } from 'node:fs';
import { register } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const cssHook = `
export async function load(url, context, nextLoad) {
  if (url.endsWith('.css')) {
    return { format: 'module', shortCircuit: true, source: '' };
  }
  return nextLoad(url, context);
}`;
register(`data:text/javascript,${encodeURIComponent(cssHook)}`);

const DIST = resolve(dirname(fileURLToPath(import.meta.url)), '../dist');
const failures = [];

// The entry list is long: repeat the failures last, so they survive a log truncated to its tail.
function exitWithFailures(summary) {
  console.error(`\n✗ ${summary}`);
  failures.forEach((failure) => console.error(`  - ${failure}`));
  process.exit(1);
}

function check(condition, message) {
  if (condition) {
    console.log(`  ok   ${message}`);
  } else {
    console.log(`  FAIL ${message}`);
    failures.push(message);
  }
}

console.log('▶ import of every dist entry point in Node');
const entries = [
  'index.js',
  ...readdirSync(resolve(DIST, 'components')).sort().map((name) => `components/${name}/index.js`),
];
for (const entry of entries) {
  try {
    await import(pathToFileURL(resolve(DIST, entry)).href);
    check(true, entry);
  } catch (error) {
    check(false, `${entry}: ${error.message}`);
  }
}

if (failures.length) {
  exitWithFailures(`${failures.length} entry point(s) cannot be imported in Node`);
}

console.log('\n▶ renderToString');
const { createElement: h } = await import('react');
const { renderToString } = await import('react-dom/server');
const { Button, Markdown, Tab, TabContent, TabList, Tabs, Text } = await import(pathToFileURL(resolve(DIST, 'index.js')).href);

const button = renderToString(h(Button, null, 'Click me'));
check(/<button[^>]*>.*Click me/.test(button), 'Button renders a <button>');

const text = renderToString(h(Text, { preset: 'heading-1' }, 'Title'));
check(/<h1[^>]*>Title<\/h1>/.test(text), 'Text heading-1 renders an <h1>');

const markdown = renderToString(h(Markdown, { content: '# Heading\n\nCopyright &copy; OVHcloud' }));
check(/<h1[^>]*>Heading<\/h1>/.test(markdown), 'Markdown renders its heading');
check(markdown.includes('Copyright © OVHcloud'), 'Markdown decodes named character references (&copy; → ©)');

const tabs = renderToString(
  h(Tabs, { defaultValue: 'tab1' },
    h(TabList, null, h(Tab, { value: 'tab1' }, 'Tab 1'), h(Tab, { value: 'tab2' }, 'Tab 2')),
    h(TabContent, { value: 'tab1' }, 'First panel content'),
    h(TabContent, { value: 'tab2' }, 'Second panel content'),
  ),
);
const panelTag = (content) => tabs.match(new RegExp(`<div[^>]*>${content}</div>`))?.[0] ?? '';
check(tabs.includes('First panel content'), 'Tabs: active panel content is in the HTML');
check(tabs.includes('Second panel content'), 'Tabs: inactive panel content is in the HTML');
check(!/\shidden(=|\s|>)/.test(panelTag('First panel content')), 'Tabs: active panel is not hidden');
check(/\shidden(=|\s|>)/.test(panelTag('Second panel content')), 'Tabs: inactive panel is hidden');

if (failures.length) {
  exitWithFailures(`${failures.length} SSR check(s) failed`);
}
console.log(`\n✓ ${entries.length} entry points import in Node and render on the server`);
