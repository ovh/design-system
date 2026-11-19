// The pre-rendered pages (scripts/prerender.mjs): every page of the navigation has its HTML, which
// shows the page text before any script runs, serves under every prefix, and hydrates in place.
// In production React says nothing of a mismatched attribute, and a mismatched text or element
// only as a page error (#418) before it renders the page over: the checks below look at the nodes.
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { makeChecker } from './helpers.mjs';

const dist = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

// Pages of each kind, and the tools whose HTML is their skeleton.
const PAGES = ['/', '/guides/get-started', '/guides/accessibility', '/components/button', '/components/button/technical', '/components/select/examples', '/components/icon/gallery', '/helpers/format-price', '/recipes/components', '/guides/changelog', '/tools/sandbox'];

async function suite(browser, { base, version }) {
  const results = [];
  const check = makeChecker(results);

  await check('every page of the navigation has its pre-rendered HTML', async () => {
    const search = JSON.parse(readFileSync(join(dist, 'search-index.json'), 'utf8'));
    // Each entry of the search index is a section of a page: its route, without the #anchor.
    const paths = [...new Set(search.map((entry) => entry.r.split('#')[0]))];
    if (paths.length < 100) {
      throw new Error(`only ${paths.length} paths in the search index: its shape changed`);
    }
    const missing = paths.filter((path) => !existsSync(join(dist, ...path.split('/').filter(Boolean), 'index.html')));
    if (missing.length) {
      throw new Error(`no HTML for ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? ` and ${missing.length - 5} more` : ''}`);
    }
  });

  await check('a page shows its text without any script', async () => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    try {
      await page.goto(`${base}/v${version}/components/button`, { waitUntil: 'domcontentloaded' });
      const text = await page.locator('article.doc').textContent();
      if (!/A Button component aims to initiate an action/.test(text ?? '')) {
        throw new Error('no article text');
      }
      if (await page.locator('article.doc .doc-skeleton').count()) {
        throw new Error('the article shows its skeleton');
      }
      // Its stylesheets load from the page's own folder.
      const font = await page.locator('article.doc').evaluate((el) => getComputedStyle(el).fontFamily);
      if (!/Source Sans/i.test(font)) {
        throw new Error(`unstyled article (font ${font})`);
      }
    } finally {
      await context.close();
    }
  });

  for (const prefix of [`v${version}`, 'latest']) {
    await check(`pages hydrate in place under /${prefix}/, on another platform than the build's`, async () => {
      const problems = [];
      // The pages are built on any platform (a Mac, a Linux runner): the reader's must not matter.
      const context = await browser.newContext();
      await context.addInitScript(() => Object.defineProperty(Navigator.prototype, 'platform', { get: () => 'Win32' }));
      for (const path of PAGES) {
        const page = await context.newPage();
        // The page chunks come late: a boundary hydrated before its chunk must keep its HTML.
        await page.route(/\/assets\/(?!index-|react|rolldown)[^/]+\.js$/, async (route) => {
          await new Promise((resolveDelay) => setTimeout(resolveDelay, 300));
          await route.continue();
        });
        // The server nodes, marked before any script runs: hydration keeps them, a render over them does not.
        await page.addInitScript(() => document.addEventListener('readystatechange', () => {
          if (document.readyState === 'interactive') {
            document.querySelectorAll('#root .shell, #root main, #root article').forEach((node) => {
              node.ssr = true;
            });
          }
        }));
        const skeletons = [];
        await page.exposeFunction('reportSkeleton', () => skeletons.push(path));
        await page.addInitScript(() => new MutationObserver(() => {
          if (document.querySelector('#root article .doc-skeleton')) {
            window.reportSkeleton();
          }
        }).observe(document, { childList: true, subtree: true }));
        page.on('pageerror', (error) => problems.push(`${path}: ${String(error).slice(0, 100)}`));
        page.on('response', (response) => {
          if (response.status() >= 400 && new URL(response.url()).pathname.includes('/assets/')) {
            problems.push(`${path}: ${response.status()} ${new URL(response.url()).pathname}`);
          }
        });
        await page.goto(`${base}/${prefix}${path}`, { waitUntil: 'load' });
        // Hydrated: React holds the version select.
        await page.waitForFunction(() => {
          const trigger = document.querySelector('[data-testid="version-select"] [data-part="trigger"]');
          return trigger && Object.keys(trigger).some((key) => key.startsWith('__react'));
        }, null, { timeout: 15000 });
        await page.waitForTimeout(1000);
        const replaced = await page.evaluate(() => [...document.querySelectorAll('#root .shell, #root main, #root article')]
          .filter((node) => !node.ssr).map((node) => node.tagName.toLowerCase() + (node.className ? `.${String(node.className).split(' ')[0]}` : '')));
        if (replaced.length) {
          problems.push(`${path}: rendered over ${replaced.join(', ')}`);
        }
        if (skeletons.length) {
          problems.push(`${path}: its article showed a skeleton`);
        }
        // Every link of the app is absolute, under the prefix it is served from.
        const links = await page.evaluate(() => [...document.querySelectorAll('#root a[href]')].map((anchor) => anchor.getAttribute('href')));
        const root = `/design-system/${prefix}`;
        const wrong = links.find((href) => href.startsWith('.') || (href.startsWith('/') && href !== root && !href.startsWith(`${root}/`)));
        if (wrong) {
          problems.push(`${path}: link ${wrong}`);
        }
        await page.close();
      }
      await context.close();
      if (problems.length) {
        throw new Error(problems.slice(0, 3).join(' | '));
      }
    });
  }

  await check('a deep link bounced off the 404 page renders its own page', async () => {
    const page = await browser.newPage();
    try {
      await page.goto(`${base}/v${version}/?p=/components/button`, { waitUntil: 'domcontentloaded' });
      await page.waitForURL(`**/v${version}/components/button`, { timeout: 10000 });
      await page.getByRole('heading', { level: 1, name: 'Button' }).waitFor({ timeout: 10000 });
    } finally {
      await page.close();
    }
  });

  await check('the stored dark scheme is painted before the scripts run', async () => {
    // A light system: the dark scheme comes from the reader's choice, kept in the storage.
    const context = await browser.newContext({ colorScheme: 'light' });
    await context.addInitScript(() => localStorage.setItem('ods-doc-theme', JSON.stringify('dark')));
    const page = await context.newPage();
    try {
      // No script loads: what shows is the HTML and its boot script alone.
      await page.route('**/assets/*.js', (route) => route.abort());
      await page.goto(`${base}/v${version}/guides/get-started`, { waitUntil: 'load' });
      await page.waitForFunction(() => document.styleSheets.length > 0 && document.getElementById('ods-doc-theme-boot')?.sheet);
      const ground = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
      const [r, g, b] = ground.match(/\d+/g).map(Number);
      if (r + g + b > 200) {
        throw new Error(`light ground ${ground}`);
      }
    } finally {
      await context.close();
    }
  });

  return results;
}

export { suite };
