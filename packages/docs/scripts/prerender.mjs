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
// that does not redirect, such as `npx serve`), the page would load none of them. Before anything
// loads, such a URL goes to its folder; src/main.tsx then drops the trailing slash again.
const SLASH_GUARD = '<script>if(!/\\/$/.test(location.pathname)){location.replace(location.pathname+\'/\'+location.search+location.hash);}</script>';

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
    .replace('<title>OVHcloud Design System</title>', () => `${depth ? SLASH_GUARD : ''}<title>${escapeHtml(title)}</title>`)
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
