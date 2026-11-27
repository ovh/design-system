// The pre-rendered pages (scripts/prerender.mjs): every page of the search index has its HTML, which
// shows the page text before any script runs, serves under every prefix, and hydrates in place.
// It also serves without its trailing slash.
// In production React says nothing of a mismatched attribute, and a mismatched text or element
// only as a page error (#418) before it renders the page over: the checks below look at the nodes.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { makeChecker, waitHydrated } from './helpers.mjs';

const dist = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

// Pages of each kind, and the tools whose HTML is their skeleton: the pages checked under every
// prefix. Under the version prefix, every page is.
const PAGES = ['/', '/guides/get-started', '/guides/accessibility', '/components/button', '/components/button/technical', '/components/select/examples', '/components/icon/gallery', '/helpers/format-price', '/recipes/components', '/guides/changelog', '/tools/sandbox'];
// Pages hydrating at once: enough to check every page within a few minutes.
const CONCURRENCY = 6;
// The nodes hydration must keep: the page, and its table of contents.
const SERVER_NODES = '#root .shell, #root main, #root article, #root .doc-layout__aside > *';

// Every pre-rendered page: each folder of dist holding an index.html, the assets and llms aside.
const builtPages = (folder = dist) => readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
  if (!entry.isDirectory() || (folder === dist && ['assets', 'llms'].includes(entry.name))) {
    return [];
  }
  const inner = join(folder, entry.name);
  return [
    ...(existsSync(join(inner, 'index.html')) ? [`/${relative(dist, inner).split(sep).join('/')}`] : []),
    ...builtPages(inner),
  ];
});

async function suite(browser, { base, version }) {
  const results = [];
  const check = makeChecker(results);

  await check('every page of the search index has its pre-rendered HTML', async () => {
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

  await check('every heading id of a pre-rendered page is unique, its anchor with it', async () => {
    const repeated = builtPages().flatMap((path) => {
      const html = readFileSync(join(dist, ...path.split('/').filter(Boolean), 'index.html'), 'utf8');
      const ids = [...html.matchAll(/<h[2-6]\b[^>]*\sid="([^"]+)"/g)].map((match) => match[1]);
      const anchors = [...html.matchAll(/class="doc__anchor"[^>]*\shref="#([^"]+)"|\shref="#([^"]+)"[^>]*class="doc__anchor"/g)].map((match) => match[1] ?? match[2]);
      const twice = ids.filter((id, index) => ids.indexOf(id) !== index);
      const orphan = anchors.filter((id) => !ids.includes(id));
      return twice.length || orphan.length ? [`${path} ${[...twice, ...orphan.map((id) => `#${id}`)].slice(0, 3).join(' ')}`] : [];
    });
    // The fixture: the Accessibility guide repeats "Related Sources".
    const accessibility = readFileSync(join(dist, 'guides', 'accessibility', 'index.html'), 'utf8');
    if (!accessibility.includes('id="related-sources-2"')) {
      throw new Error('the Accessibility guide no longer repeats a heading: find another fixture');
    }
    if (repeated.length) {
      throw new Error(repeated.slice(0, 5).join(', '));
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

  const every = ['/', ...builtPages().sort()];
  if (every.length < 200) {
    throw new Error(`only ${every.length} pre-rendered pages in dist: run pnpm build first`);
  }
  for (const [prefix, paths] of [[`v${version}`, every], ['latest', PAGES]]) {
    await check(`${paths === every ? `all ${paths.length} pages` : 'pages'} hydrate in place under /${prefix}/, on another platform than the build's`, async () => {
      const problems = [];
      // The pages are built on any platform (a Mac, a Linux runner): the reader's must not matter.
      const context = await browser.newContext();
      await context.addInitScript(() => Object.defineProperty(Navigator.prototype, 'platform', { get: () => 'Win32' }));
      const queue = [...paths];
      const hydrate = async (page, path) => {
        // The page chunks come late: a boundary hydrated before its chunk must keep its HTML. Only the
        // entry file, React and the runtime skip the delay (by their name).
        await page.route(/\/assets\/(?!index-|react|rolldown)[^/]+\.js$/, async (route) => {
          await new Promise((resolveDelay) => setTimeout(resolveDelay, 300));
          await route.continue();
        });
        // The server nodes, marked before any script runs: hydration keeps them, a render over them does
        // not. The table of contents too: rendered over, it drops the focus of a keyboard reader.
        await page.addInitScript((selector) => document.addEventListener('readystatechange', () => {
          if (document.readyState === 'interactive') {
            document.querySelectorAll(selector).forEach((node) => {
              node.ssr = true;
            });
          }
        }), SERVER_NODES);
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
        await waitHydrated(page);
        // A boundary late to resolve renders within it: one rendered over shows below.
        await page.waitForTimeout(1000);
        const replaced = await page.evaluate((selector) => [...document.querySelectorAll(selector)]
          .filter((node) => !node.ssr).map((node) => node.tagName.toLowerCase() + (node.className ? `.${String(node.className).split(' ')[0]}` : '')), SERVER_NODES);
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
      };
      await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
        while (queue.length) {
          const path = queue.shift();
          const page = await context.newPage();
          await hydrate(page, path)
            .catch((error) => problems.push(`${path}: ${String(error).split('\n')[0].slice(0, 100)}`))
            .finally(() => page.close());
        }
      }));
      await context.close();
      if (problems.length) {
        throw new Error(problems.slice(0, 3).join(' | '));
      }
    });
  }

  await check('a page served without its trailing slash loads its assets and hydrates in place', async () => {
    const page = await browser.newPage();
    const failed = [];
    const url = `${base}/v${version}/components/button`;
    // The browser reads ahead of the base the page sets: those requests, one folder up, fail.
    page.on('response', (response) => response.status() >= 400 && response.url().startsWith(`${base}/v${version}/`) && failed.push(new URL(response.url()).pathname));
    page.on('pageerror', (error) => failed.push(String(error).slice(0, 100)));
    try {
      // A host that does not redirect (`npx serve`) or strips the slash: the folder's page at <route>.
      await page.route(url, async (route) => route.fulfill({ response: await route.fetch({ url: `${url}/` }) }));
      await page.goto(url, { waitUntil: 'load' });
      await waitHydrated(page);
      if (page.url() !== url || failed.length) {
        throw new Error(`${page.url()} ${failed.slice(0, 3).join(', ')}`);
      }
      // The heading anchors resolve against the page, not against its folder.
      const anchor = await page.locator('.doc__anchor').first().evaluate((link) => link.href);
      if (!anchor.startsWith(`${url}#`)) {
        throw new Error(`anchor ${anchor}`);
      }
    } finally {
      await page.close();
    }
  });

  await check('without its trailing slash, an in-page link stays on the page before the scripts', async () => {
    const page = await browser.newPage();
    const url = `${base}/v${version}/guides/accessibility`;
    try {
      await page.route(url, async (route) => route.fulfill({ response: await route.fetch({ url: `${url}/` }) }));
      await page.route('**/assets/*.js', (route) => route.abort());
      await page.goto(url, { waitUntil: 'load' });
      // The base the page sets resolves #related-sources-2 against its folder, another URL.
      await page.evaluate(() => {
        window.samePage = true;
      });
      await page.locator('.doc__anchor[href="#related-sources-2"]').evaluate((link) => link.click());
      await page.waitForURL(`${url}#related-sources-2`, { timeout: 5000 });
      if (!await page.evaluate(() => window.samePage)) {
        throw new Error('the page loaded again');
      }
      const top = await page.locator('#related-sources-2').evaluate((heading) => heading.getBoundingClientRect().top);
      if (top < 0 || top > 200) {
        throw new Error(`the heading is at ${top}px`);
      }
    } finally {
      await page.close();
    }
  });

  await check('a page served at a path starting with // keeps its base on its own origin', async () => {
    const page = await browser.newPage();
    // A host with an SPA fallback serves a page for any path: //host/x would make the base, and so
    // every script of the page, those of another host.
    const url = `${base}//evil.example/x`;
    const outside = [];
    page.on('request', (request) => !request.url().startsWith(base) && outside.push(request.url()));
    try {
      await page.route(url, async (route) => route.fulfill({ response: await route.fetch({ url: `${base}/v${version}/components/button/` }) }));
      await page.route((target) => !target.href.startsWith(base), (route) => route.abort());
      await page.goto(url, { waitUntil: 'domcontentloaded' });
      const baseUri = await page.evaluate(() => document.baseURI);
      if (!baseUri.startsWith(base) || outside.length) {
        throw new Error(`base ${baseUri}, ${outside.length} request(s) elsewhere: ${outside[0] ?? ''}`);
      }
    } finally {
      await page.close();
    }
  });

  await check('a deep link bounced off the 404 page renders its own page, never the homepage first', async () => {
    const page = await browser.newPage();
    try {
      // Sampled from the first paint: the root page holds the homepage HTML.
      await page.addInitScript(() => {
        window.shown = [];
        const sample = () => {
          const root = document.getElementById('root');
          const heading = root && getComputedStyle(root).visibility !== 'hidden' ? document.querySelector('h1')?.textContent : null;
          if (heading && window.shown.at(-1) !== heading) {
            window.shown.push(heading);
          }
          requestAnimationFrame(sample);
        };
        requestAnimationFrame(sample);
      });
      await page.goto(`${base}/v${version}/?p=/components/button`, { waitUntil: 'domcontentloaded' });
      await page.waitForURL(`**/v${version}/components/button`, { timeout: 10000 });
      await page.getByRole('heading', { level: 1, name: 'Button' }).waitFor({ timeout: 10000 });
      const shown = await page.evaluate(() => window.shown);
      if (shown.some((heading) => heading !== 'Button')) {
        throw new Error(`shown: ${shown.join(' then ')}`);
      }
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
      // A dark ground, whatever the brand: the light ones are near white.
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
