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
    await page.waitForFunction(() => document.body.textContent?.includes('--ods-semantic-'), { timeout: 20000 });
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
  await check('edited ramp reaches a brand Button inside the frame', async () => {
    const marked = await page.evaluate(() => {
      const f = [...document.querySelectorAll('iframe')].find((el) => el.contentDocument?.body?.textContent?.includes('Theme previews'));
      const doc = f.contentDocument;
      const view = doc.defaultView;
      const hex = view.getComputedStyle(doc.documentElement).getPropertyValue('--ods-palette-brand-500').trim();
      const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
      const button = [...doc.querySelectorAll('[data-ods="button"]')].find((el) => view.getComputedStyle(el).backgroundColor === `rgb(${r}, ${g}, ${b})`);
      button?.setAttribute('data-themegen-probe', '');
      return !!button;
    });
    if (!marked) {
      throw new Error('no Button painted with --ods-palette-brand-500');
    }
    await page.click('text=JSON');
    await page.waitForSelector('textarea', { timeout: 5000 });
    const vars = JSON.parse(await page.inputValue('textarea'));
    if (Object.keys(vars).length) {
      throw new Error(`the export starts with ${Object.keys(vars).length} entries`);
    }
    vars['--ods-palette-brand-500'] = '#ff0044';
    await page.fill('textarea', JSON.stringify(vars));
    await page.getByRole('button', { exact: true, name: 'Apply' }).click();
    await page.waitForTimeout(800);
    const applied = await page.evaluate(() => {
      const f = [...document.querySelectorAll('iframe')].find((el) => el.contentDocument?.body?.textContent?.includes('Theme previews'));
      const doc = f.contentDocument;
      const view = doc.defaultView;
      return {
        background: view.getComputedStyle(doc.querySelector('[data-themegen-probe]')).backgroundColor,
        ramp: view.getComputedStyle(doc.documentElement).getPropertyValue('--ods-palette-brand-500').trim(),
      };
    });
    if (applied.ramp !== '#ff0044') {
      throw new Error(`--ods-palette-brand-500 = ${applied.ramp}`);
    }
    if (applied.background !== 'rgb(255, 0, 68)') {
      throw new Error(`brand Button background = ${applied.background}`);
    }
  });
  await check('JSON export holds only the edited entries', async () => {
    await page.click('text=JSON');
    await page.waitForSelector('textarea', { timeout: 5000 });
    const keys = Object.keys(JSON.parse(await page.inputValue('textarea')));
    await page.getByRole('button', { exact: true, name: 'Close' }).click();
    if (keys.join() !== '--ods-palette-brand-500') {
      throw new Error(`exported ${keys.length} entries: ${keys.slice(0, 3).join(', ')}`);
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
