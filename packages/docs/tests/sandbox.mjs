// Every "Open in sandbox" snippet must compile and render. Two phases:
// harvest — window.open is stubbed and every sandbox button clicked, on the
// Examples tabs plus the Canvas-bearing helper/guide pages; replay — one
// single sandbox instance, snippets injected through the Monaco input
// (select-all + insertText), then wait for the ts error count and the
// runtime boundary. ~1s per snippet: minutes-long by design, run it
// explicitly with `node tests/run.mjs sandbox`.
import lz from 'lz-string';
const { decompressFromEncodedURIComponent } = lz;
import { readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const COMPONENTS = readdirSync(resolve(dirname(fileURLToPath(import.meta.url)), '../src/content/components'), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

async function suite(browser, { base, version }) {
  const results = [];
  const context = await browser.newContext();
  await context.addInitScript(() => {
    window.__opened = [];
    window.open = (url) => {
      window.__opened.push(String(url));
      return null;
    };
  });

  // ——— phase 1 : récolte
  const harvestPage = await context.newPage();
  const pages = [
    ...COMPONENTS.map((c) => `/components/${c}/examples`),
    '/helpers/format-price', '/helpers/format-relative-time',
    '/guides/forms', '/guides/accessibility',
  ];
  const snippets = new Map();
  for (const route of pages) {
    try {
      await harvestPage.goto(`${base}/v${version}${route}`, { timeout: 30000, waitUntil: 'domcontentloaded' });
      await harvestPage.waitForSelector('#root *', { timeout: 15000 });
      await harvestPage.waitForTimeout(500);
      const buttons = harvestPage.locator('button[aria-label="Open this example in the sandbox (new tab)"]');
      const count = await buttons.count();
      for (let i = 0; i < count; i++) {
        await buttons.nth(i).click();
      }
      const urls = await harvestPage.evaluate(() => window.__opened.splice(0));
      for (const url of urls) {
        const code = new URL(url).searchParams.get('code');
        const source = code && decompressFromEncodedURIComponent(code);
        if (source) {
          snippets.set(`${route}#${snippets.size}`, source);
        }
      }
    } catch (err) {
      results.push(`KO  récolte ${route} — ${String(err).split('\n')[0].slice(0, 90)}`);
    }
  }
  await harvestPage.close();
  results.push(`OK  récolte: ${snippets.size} snippets sur ${pages.length} pages`);

  // ——— phase 2 : rejeu dans une seule instance du sandbox.
  // Le sandbox expose window.__sandbox { editor, model } et trace ses étapes
  // de compile dans window.__compileState ('done' | 'failed:…') : injection
  // par model.setValue, synchronisation déterministe sur la trace.
  const page = await context.newPage();
  await page.goto(`${base}/v${version}/?p=/tools/sandbox&code=`, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.__sandbox && ['done'].includes(window.__compileState) , { timeout: 90000 });

  let ok = 0;
  const failures = [];
  for (const [key, source] of snippets) {
    try {
      await page.evaluate((code) => {
        window.__compileState = 'test-pending';
        window.__sandbox.model.setValue(code);
      }, source);
      await page.waitForFunction(() => window.__compileState === 'done' || String(window.__compileState).startsWith('failed'), { polling: 100, timeout: 30000 });
      await page.waitForTimeout(250); // laisser React poser ts-errors + boundary
      const verdict = await page.evaluate(() => ({
        state: window.__compileState,
        tsErrors: document.querySelector('[data-testid="ts-errors"]')?.textContent,
        runtime: document.querySelector('[data-testid="runtime-error"]')?.textContent ?? null,
        rendered: !!document.querySelector('.sandbox__preview iframe')?.contentDocument?.querySelector('#mount *'),
      }));
      if (verdict.state === 'done' && verdict.tsErrors === '0' && !verdict.runtime && verdict.rendered) {
        ok++;
      } else {
        failures.push(`KO  ${key} — state:${verdict.state} ts:${verdict.tsErrors} runtime:${(verdict.runtime ?? '').slice(0, 60)} rendered:${verdict.rendered}`);
      }
    } catch (err) {
      failures.push(`KO  ${key} — ${String(err).split('\n')[0].slice(0, 90)}`);
    }
  }
  results.push(...failures);
  results.push(`${failures.length === 0 ? 'OK ' : 'KO '} rejeu sandbox: ${ok}/${snippets.size} snippets compilent et rendent`);
  await page.close();
  await context.close();
  return results;
}

export { suite };
