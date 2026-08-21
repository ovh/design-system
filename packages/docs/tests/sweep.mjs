// Every route of the app: content renders, URL kept, zero pageerror.
// waitUntil is domcontentloaded on purpose: networkidle never settles on
// frame-heavy pages (staggered frame loads + idle sandbox preload).
const GUIDES = ['get-started', 'accessibility', 'internationalization', 'forms', 'charts',
  'apply-ods-style', 'style-customization', 'design-tokens', 'tailwind',
  'whats-new', 'changelog', 'migration-to-v19', 'migration-12-to-13', 'migration-13-to-14',
  'migration-14-to-15', 'migration-15-to-16', 'migration-16-to-17', 'migration-17-to-18',
  'faq', 'roadmap', 'llm-documentation'];
// derived from the migrated content: grows with every imported component
import { readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const COMPONENTS = readdirSync(resolve(dirname(fileURLToPath(import.meta.url)), '../src/content/components'), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

async function suite(browser, { base, version }) {
  const routes = [
    '/',
    ...GUIDES.map((g) => `/guides/${g}`),
    '/helpers/format-price', '/helpers/format-relative-time',
    '/recipes/components',
    ...COMPONENTS.flatMap((c) => [`/components/${c}`, `/components/${c}/technical`, `/components/${c}/examples`]),
    '/components/icon/gallery',
    '/tools/sandbox', '/tools/theme-generator',
  ];
  const results = [];
  const page = await browser.newPage();
  for (const route of routes) {
    const errs = [];
    const handler = (e) => errs.push(String(e));
    page.on('pageerror', handler);
    try {
      await page.goto(`${base}/v${version}${route}`, { timeout: 30000, waitUntil: 'domcontentloaded' });
      await page.waitForSelector('#root *', { timeout: 15000 });
      await page.waitForTimeout(400);
      const text = ((await page.textContent('#root')) ?? '').replace(/\s+/g, ' ');
      const finalPath = new URL(page.url()).pathname;
      const kept = finalPath.endsWith(route === '/' ? `/v${version}/` : route);
      const filled = text.length > 300;
      results.push(`${errs.length === 0 && kept && filled ? 'OK ' : 'KO '} ${route}${errs[0] ? ` — ${errs[0].slice(0, 80)}` : ''}${kept ? '' : ' — redirigé'}${filled ? '' : ' — page vide'}`);
    } catch (err) {
      results.push(`KO  ${route} — ${String(err).split('\n')[0].slice(0, 90)}`);
    }
    page.off('pageerror', handler);
  }
  await page.close();
  return results;
}

export { suite };
