// Icon gallery: deep link, alias + case-insensitive filtering, detail drawer.
import { makeChecker } from './helpers.mjs';

async function suite(browser, { base, version }) {
  const results = [];
  const check = makeChecker(results);
  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', (err) => pageErrors.push(String(err)));

  await page.goto(`${base}/v${version}/components/icon/gallery`, { waitUntil: 'domcontentloaded' });
  await check('gallery renders via deep link', async () => {
    await page.waitForURL('**/components/icon/gallery', { timeout: 10000 });
    await page.waitForSelector('input[type=search]', { timeout: 15000 });
    if (await page.locator('ul li').count() < 200) {
      throw new Error('few icons');
    }
  });
  await check('alias filtering (a11y)', async () => {
    await page.fill('input[type=search]', 'a11y');
    await page.waitForTimeout(300);
    const n = await page.locator('ul li').count();
    if (n < 1 || n > 10) {
      throw new Error(`${n} results`);
    }
  });
  await check('case-insensitive filtering', async () => {
    await page.fill('input[type=search]', 'Home');
    await page.waitForTimeout(300);
    if (await page.locator('ul li').count() < 1) {
      throw new Error('no result');
    }
  });
  await check('detail drawer opens with snippets', async () => {
    await page.locator('ul li button').first().click();
    await page.waitForFunction(() => /ICON_NAME\.\w+/.test(document.body.textContent ?? ''), { timeout: 8000 });
  });
  await check('drawer closes on Escape', async () => {
    await page.keyboard.press('Escape');
    await page.waitForTimeout(400);
    if (/import { ICON_NAME, Icon }/.test(await page.textContent('body'))) {
      throw new Error('still open');
    }
  });
  results.push(pageErrors.length === 0 ? 'OK  zero pageerror' : `KO  ${pageErrors.length} pageerror(s)`);
  await page.close();
  return results;
}

export { suite };
