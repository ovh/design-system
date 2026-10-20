// Icon gallery: deep link, alias + case-insensitive filtering, detail drawer.
// Component gallery: the category filter, the toolbar and the card grid on a phone screen, and the
// previews.
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

  await page.goto(`${base}/v${version}/tools/component-gallery`, { waitUntil: 'domcontentloaded' });
  const category = page.locator('#component-gallery-category');
  await check('the category filter input is named', async () => {
    await category.waitFor({ timeout: 15000 });
    const name = await page.getByRole('combobox', { name: 'Filter by category' }).count();
    if (name !== 1) {
      throw new Error(`${name} combobox named "Filter by category"`);
    }
  });
  await check('the category filter offers no custom value', async () => {
    await category.fill('form');
    // Scoped: the search palette and the sidebar selects hold options too.
    const option = page.locator('[data-ods="combobox-content"] [role="option"]');
    await option.first().waitFor({ timeout: 5000 });
    const options = await option.allTextContents();
    if (options.some((text) => /^\s*Add\b/.test(text)) || !options.some((text) => /Form/.test(text))) {
      throw new Error(options.join(' | '));
    }
  });
  await check('the gallery cards fit a 375px screen', async () => {
    await page.setViewportSize({ height: 800, width: 375 });
    await page.goto(`${base}/v${version}/tools/component-gallery`, { waitUntil: 'domcontentloaded' });
    const frame = page.frameLocator('iframe').first();
    await frame.locator('li').first().waitFor({ timeout: 15000 });
    const overflow = await frame.locator('ul').first().evaluate((grid) => grid.scrollWidth - grid.clientWidth);
    if (overflow > 0) {
      throw new Error(`the grid overflows by ${overflow}px`);
    }
    // The toolbar wraps rather than squeezing its controls: the name filter keeps its 320px.
    const filterWidth = await page.locator('input[type=search]').first().evaluate((input) => input.closest('[class*="component-gallery__filter"]')?.getBoundingClientRect().width ?? 0);
    if (filterWidth < 320) {
      throw new Error(`the name filter is squeezed to ${Math.round(filterWidth)}px`);
    }
  });
  await check('every gallery preview is visible, in flow, and starts within reach of its scroll', async () => {
    const frame = page.frameLocator('iframe').first();
    const previews = await frame.locator('[class*="component-gallery__preview"]').evaluateAll((all) => all.map((preview) => {
      const children = [...preview.children];
      const start = children[0]?.getBoundingClientRect();
      const box = preview.getBoundingClientRect();
      return {
        clipped: !!start && (start.left < box.left - 1 || start.top < box.top - 1),
        // Several root elements (Markdown) stack in document flow, not as columns.
        columns: children.length > 1 && getComputedStyle(preview).display !== 'block',
        title: preview.closest('li')?.querySelector('h2')?.textContent?.trim(),
        zeroWidth: children.some((child) => child.getBoundingClientRect().width === 0),
      };
    }));
    const failing = (key) => previews.filter((preview) => preview[key]).map((preview) => preview.title).join(', ');
    const errors = ['clipped', 'columns', 'zeroWidth'].map((key) => failing(key) && `${key}: ${failing(key)}`).filter(Boolean);
    if (!previews.length || errors.length) {
      throw new Error(errors.join(' | ') || 'no preview');
    }
  });

  results.push(pageErrors.length === 0 ? 'OK  zero pageerror' : `KO  ${pageErrors.length} pageerror(s)`);
  await page.close();
  return results;
}

export { suite };
