// Writes the HTML of every page into dist, after `vite build`: <route>/index.html holds the page as
// the app renders it (the navigation, the article text, the skeletons of the demos), so a reader
// sees the page before the scripts have loaded, and the scripts hydrate it (src/main.tsx).
//
// One build serves under every prefix (/design-system/vX.Y.Z/, /latest/, the CI previews): the
// pages are rendered under a placeholder base (PRERENDER_BASE, src/appBase.ts), which becomes the
// path from each page to the deploy root ('./', '../', '../../'). src/main.tsx resolves those
// relative URLs back to absolute ones before hydrating, so that they match what the router renders.
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'node_modules', '.prerender');
const BASE = '/__ods_docs_base__';

// The page vite build wrote, kept aside: this script writes over dist/index.html (the homepage), and
// a run again on the same dist starts from the kept one.
const templatePath = join(root, 'node_modules', '.prerender-template.html');
const built = readFileSync(join(dist, 'index.html'), 'utf8');
if (built.includes('<div id="root"></div>')) {
  writeFileSync(templatePath, built);
} else if (!existsSync(templatePath)) {
  throw new Error('prerender: dist/index.html is already pre-rendered and its template is gone: run vite build first');
}
const template = readFileSync(templatePath, 'utf8');
for (const marker of ['<title>OVHcloud Design System</title>', '<div id="root"></div>', '</head>']) {
  if (!template.includes(marker)) {
    throw new Error(`prerender: index.html has no ${marker}`);
  }
}

// The server entry, bundled with its dependencies: a few of them (react-shiki, which imports CSS)
// cannot be loaded by Node as they ship. Its asset URLs (images) start with the placeholder base
// too, made relative below.
await build({
  base: `${BASE}/`,
  build: { emptyOutDir: true, outDir: ssrDir, ssr: 'src/entry-server.tsx' },
  configFile: join(root, 'vite.config.ts'),
  logLevel: 'warn',
  root,
  ssr: { noExternal: true },
});
const { PRERENDER_BASE, THEME_FILES, paths, render, themeBootScript } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);
if (PRERENDER_BASE !== BASE) {
  throw new Error(`prerender: the asset base above must be PRERENDER_BASE (${PRERENDER_BASE})`);
}

// The dark and brand themes, as files the boot script (src/shell/themeBoot.ts) loads before the
// first paint.
const require = createRequire(join(root, 'package.json'));
mkdirSync(join(dist, 'assets', 'themes'), { recursive: true });
for (const [file, entry] of Object.entries(THEME_FILES)) {
  cpSync(require.resolve(entry), join(dist, 'assets', 'themes', `${file}.css`));
}

// The assets of a page are relative to its folder: served at <route> rather than <route>/ (a host
// that does not redirect, such as `npx serve`, or one that strips the trailing slash), the page would
// load none of them. Before anything loads, such a page sets its folder as the base of its URLs;
// src/main.tsx resolves the relative URLs against it, then removes it. The browser has already asked
// for the assets once, from the folder above (it reads ahead of the script): a host that redirects
// <route> to <route>/ spares those requests. A URL ending in .html is in its folder already.
// The base is absolute on the page's origin: a path the host serves a page for (an SPA fallback)
// can start with //, which would make it a URL of another host, its scripts run on this origin.
// The base would also resolve an in-page link (#main-content, a heading anchor) against the folder,
// another URL, which the browser loads: until src/main.tsx removes the base, such a click scrolls
// to its target on the page as served.
const SLASH_BASE = `<script>(function(){var p=location.pathname;
if(!/(\\/|\\.html)$/.test(p)){document.write('<base href="'+(location.origin+p.replace(/^\\/+/,'/')).replace(/"/g,'%22')+'/">');
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');
if(a&&document.querySelector('head > base')&&!e.defaultPrevented){e.preventDefault();location.hash=a.getAttribute('href');}});}})();</script>`.replaceAll('\n', '');

// The root page is where a deep link bounces off the 404 page (?p=) and where the Storybook links
// land (?path=): its HTML is the homepage, the app then renders the page of the link. Hidden until
// then (src/main.tsx removes this style), so that the reader does not read and click the homepage
// in the meantime. Not for ?p=/, the homepage itself.
const BOUNCE_HIDE = `<script>(function(){if(/[?&](p=(?!%2F(&|$)|\\/(&|$))|path=)/i.test(location.search)){
document.write('<style id="ods-doc-bounce">#root{visibility:hidden}</style>');}})();</script>`.replaceAll('\n', '');

const escapeHtml = (text) => text.replace(/[&<>"']/g, (char) => ({ '"': '&quot;', '&': '&amp;', '\'': '&#39;', '<': '&lt;', '>': '&gt;' })[char]);
// The root link of the router is BASENAME without a trailing slash: the slash after the placeholder
// is optional.
const placeholder = new RegExp(`${PRERENDER_BASE}/?`, 'g');

let written = 0;
for (const path of paths()) {
  const depth = path.split('/').filter(Boolean).length;
  const base = depth ? '../'.repeat(depth) : './';
  const { html, title } = await render(path);
  // Function replacements: the page text may hold $& or $' that a replacement string would expand.
  const page = template
    .replace('<title>OVHcloud Design System</title>', () => `${depth ? '' : BOUNCE_HIDE}${SLASH_BASE}<title>${escapeHtml(title)}</title>`)
    .replaceAll('"./assets/', () => `"${base}assets/`)
    // Last in the head: the boot theme overrides the default one the stylesheets load.
    .replace('</head>', () => `  ${themeBootScript(base)}\n  </head>`)
    // data-path tells src/main.tsx which page the HTML is, to hydrate it only on that URL.
    .replace('<div id="root"></div>', () => `<div data-path="${escapeHtml(path)}" id="root">${html.replace(placeholder, () => base)}</div>`);
  if (/class="doc-skeleton"/.test(page.slice(page.indexOf('<article'), page.indexOf('</article>')))) {
    throw new Error(`prerender: ${path} holds a skeleton in place of its article`);
  }
  const target = join(dist, ...path.split('/').filter(Boolean), 'index.html');
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, page);
  written++;
}
rmSync(ssrDir, { force: true, recursive: true });
console.log(`prerender: ${written} pages written into dist`);
