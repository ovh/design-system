// How long a reader waits on a cold load of a page, served as gh-pages serves it: when the page
// title shows, when the article text is there (no skeleton left), when the page answers a click,
// when the demos have rendered. Run after `pnpm build`:
//
//   node tests/perf-first-paint.mjs [runs] > timings.json
//
// CPU ×4, 150 ms RTT, 1.6 Mbps down: the values of Lighthouse's simulated mobile profile (its "slow
// 4G"), applied as is through CDP, so that the numbers say what a reader feels rather than what a
// dev machine does.
import { chromium } from 'playwright';
import { serveSite } from './ghpages-server.mjs';
import { setupSim } from './setup-sim.mjs';

const RUNS = Number(process.argv[2] ?? 5);
const PORT = Number(process.env.DOCS_TEST_PORT ?? 8127);
// Diagnostic: DOCS_PERF_NO_FONTS=1 drops the font requests, to tell their weight on the timings.
const NO_FONTS = process.env.DOCS_PERF_NO_FONTS === '1';
// [name, path, has demos]
const PAGES = [
  ['home', '/', false],
  ['component (Button)', '/components/button', true],
  ['component examples (Select)', '/components/select/examples', true],
  ['guide (Get started)', '/guides/get-started', false],
  ['guide (Migration 19 to 20)', '/guides/migration-19-to-20', false],
];

const { simRoot, version } = setupSim();
const server = await serveSite(simRoot, PORT);
const browser = await chromium.launch();
const base = `http://localhost:${PORT}/design-system/v${version}`;

async function measure(path, hasDemos) {
  const context = await browser.newContext();
  const page = await context.newPage();
  const cdp = await context.newCDPSession(page);
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: (1.6 * 1024 * 1024) / 8, uploadThroughput: (750 * 1024) / 8 });
  if (NO_FONTS) {
    await page.route(/\.woff2?$/, (route) => route.abort());
  }
  const start = Date.now();
  await page.goto(`${base}${path}`, { waitUntil: 'commit' });
  const since = () => Date.now() - start;
  const at = async (fn) => {
    try {
      await fn();
      return since();
    } catch {
      return null;
    }
  };
  // The first heading the reader sees: the homepage hero, or the first heading of the article.
  const title = await at(() => page.waitForSelector('main h1, article.doc h2', { state: 'visible', timeout: 30000 }));
  const text = await at(() => page.waitForFunction(() => {
    const article = document.querySelector('article.doc') ?? document.querySelector('main');
    return article && !article.querySelector('.doc-skeleton') && article.textContent.trim().length > 200;
  }, null, { timeout: 30000 }));
  // Hydrated: React has attached its props (and its click handler) to the version select trigger.
  const interactive = await at(async () => {
    const trigger = page.locator('[data-testid="version-select"] [data-part="trigger"]');
    await trigger.waitFor({ timeout: 30000 });
    await page.waitForFunction(() => {
      const el = document.querySelector('[data-testid="version-select"] [data-part="trigger"]');
      return el && Object.keys(el).some((key) => key.startsWith('__react'));
    }, null, { timeout: 30000 });
  });
  // The demos: every frame of the article has content (null on a page without demos).
  const demos = !hasDemos ? null : await at(() => page.waitForFunction(() => {
    const frames = [...document.querySelectorAll('article.doc iframe')];
    return frames.length > 0 && frames.every((frame) => (frame.contentDocument?.body?.children.length ?? 0) > 0);
  }, null, { timeout: 30000 }));
  await context.close();
  return { demos, interactive, text, title };
}

const median = (values) => {
  const sorted = values.filter((value) => value !== null).sort((a, b) => a - b);
  return sorted.length ? sorted[Math.floor(sorted.length / 2)] : null;
};

const results = {};
for (const [name, path, hasDemos] of PAGES) {
  const runs = [];
  for (let i = 0; i < RUNS; i++) {
    runs.push(await measure(path, hasDemos));
  }
  results[name] = Object.fromEntries(['title', 'text', 'interactive', 'demos'].map((key) => [key, median(runs.map((run) => run[key]))]));
  process.stderr.write(`${name}: ${JSON.stringify(results[name])}\n`);
}
await browser.close();
server.close();
process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
