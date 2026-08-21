// Platform smoke: subpath deploy, 404 bounce, frames, fonts, search palette.
import { makeChecker } from './helpers.mjs';

async function suite(browser, { base, version }) {
  const results = [];
  const check = makeChecker(results);
  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', (err) => pageErrors.push(String(err)));
  const V = `${base}/v${version}`;

  await check('homepage renders under the version subpath', async () => {
    await page.goto(`${V}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#root *', { timeout: 10000 });
    if (!/Design System/i.test(await page.textContent('body'))) {
      throw new Error('no app content');
    }
  });
  await check('deep link bounces off 404.html and restores the URL', async () => {
    await page.goto(`${V}/components/button`, { waitUntil: 'domcontentloaded' });
    await page.waitForURL(`**/v${version}/components/button`, { timeout: 10000 });
    await page.waitForSelector('#root *', { timeout: 10000 });
  });
  await check('demos render inside styled iframes', async () => {
    await page.waitForFunction(() => {
      const doc = document.querySelector('iframe')?.contentDocument;
      return doc && doc.querySelector('[data-ods]') && doc.querySelector('style, link[rel=stylesheet]');
    }, { timeout: 20000 });
  });
  await check('client-side navigation between components', async () => {
    await page.click('text=Datepicker');
    await page.waitForURL(`**/v${version}/components/datepicker`, { timeout: 10000 });
  });
  await check('deep link under the latest symlink', async () => {
    await page.goto(`${base}/latest/guides/get-started`, { waitUntil: 'domcontentloaded' });
    await page.waitForURL('**/latest/guides/get-started', { timeout: 10000 });
    await page.waitForSelector('#root *', { timeout: 10000 });
  });
  await check('sandbox share round-trip (?p= + code)', async () => {
    await page.goto(`${V}/?p=/tools/sandbox&code=`, { waitUntil: 'domcontentloaded' });
    await page.waitForURL(`**/v${version}/tools/sandbox**`, { timeout: 10000 });
  });
  await check('root llms.txt served with resolving links', async () => {
    const res = await page.request.get(`${base}/llms.txt`);
    if (res.status() !== 200) {
      throw new Error(`status ${res.status()}`);
    }
    const inner = await page.request.get(`${base}/latest/llms/llms.txt`);
    if (inner.status() !== 200) {
      throw new Error('latest llms unreachable');
    }
  });
  await check('search palette: components first, icons, section hints', async () => {
    await page.goto(`${V}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#root *', { timeout: 10000 });
    await page.keyboard.press('Meta+k');
    await page.waitForSelector('[data-ods="command-content"]', { timeout: 8000 });
    const ok = await page.evaluate(() => {
      const headings = [...document.querySelectorAll('[data-ods="command-content"] [class*="command-group__heading"]')].map((h) => h.textContent.trim());
      return headings[0] === 'Components'
        && !!document.querySelector('.shell__search-option-icon')
        && [...document.querySelectorAll('.shell__search-option-hint')].some((h) => h.textContent.includes('Build'));
    });
    if (!ok) {
      throw new Error('unexpected palette structure');
    }
  });
  results.push(pageErrors.length === 0 ? 'OK  zero pageerror' : `KO  ${pageErrors.length} pageerror(s): ${pageErrors[0]}`);
  await page.close();
  return results;
}

export { suite };
