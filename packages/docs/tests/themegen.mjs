// Theme generator: token tree, framed previews, hot token application.
import { makeChecker } from './helpers.mjs';

async function suite(browser, { base, version }) {
  const results = [];
  const check = makeChecker(results);
  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', (err) => pageErrors.push(String(err)));

  await page.goto(`${base}/v${version}/tools/theme-generator`, { waitUntil: 'domcontentloaded' });
  await check('token tree renders', async () => {
    await page.waitForURL('**/tools/theme-generator', { timeout: 10000 });
    await page.waitForFunction(() => document.body.textContent?.includes('--ods-theme-'), { timeout: 20000 });
  });
  await check('component previews render inside the frame', async () => {
    const count = await page.waitForFunction(() => {
      const f = [...document.querySelectorAll('iframe')].find((el) => el.contentDocument?.body?.textContent?.includes('Theme previews'));
      return f ? f.contentDocument.querySelectorAll('h4').length : 0;
    }, { timeout: 40000 }).then((h) => h.jsonValue());
    if (count < 40) {
      throw new Error(`${count} sections`);
    }
  });
  await check('edited token applies hot inside the frame', async () => {
    await page.click('text=JSON');
    await page.waitForSelector('textarea', { timeout: 5000 });
    const vars = JSON.parse(await page.inputValue('textarea'));
    vars['--ods-color-primary-500'] = '#ff0044';
    await page.fill('textarea', JSON.stringify(vars));
    await page.getByRole('button', { exact: true, name: 'Apply' }).click();
    await page.waitForTimeout(800);
    const applied = await page.evaluate(() => {
      const f = [...document.querySelectorAll('iframe')].find((el) => el.contentDocument?.body?.textContent?.includes('Theme previews'));
      const doc = f?.contentDocument;
      const probe = doc.createElement('div');
      doc.body.appendChild(probe);
      const value = doc.defaultView.getComputedStyle(probe).getPropertyValue('--ods-color-primary-500').trim();
      probe.remove();
      return value;
    });
    if (applied !== '#ff0044') {
      throw new Error(`--ods-color-primary-500 = ${applied}`);
    }
  });
  await check('closed drawers stay inert in previews', async () => {
    const hit = await page.evaluate(() => {
      const f = [...document.querySelectorAll('iframe')].find((el) => el.contentDocument?.body?.textContent?.includes('Theme previews'));
      const el = f.contentDocument.elementFromPoint(200, 300);
      return el ? { part: el.getAttribute('data-part'), state: el.getAttribute('data-state'), tag: el.tagName } : null;
    });
    if (!hit || (hit.part === 'content' && hit.state === 'closed')) {
      throw new Error(`intercepté par ${JSON.stringify(hit)}`);
    }
  });
  results.push(pageErrors.length === 0 ? 'OK  zero pageerror' : `KO  ${pageErrors.length} pageerror(s)`);
  await page.close();
  return results;
}

export { suite };
