// Recipe pages: the README cases the page lays out (Do's & don'ts, a README opening on a
// sub-heading, a TODO placeholder), the components and source sections, the preview on a phone,
// the gallery filters, the scroll position when a gallery card opens its page and back, the card
// headings on a component page, and the feature list tooltip triggers.
import { makeChecker } from './helpers.mjs';

async function suite(browser, { base, version }) {
  const results = [];
  const check = makeChecker(results);
  const root = `${base}/v${version}`;
  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', (err) => pageErrors.push(String(err)));

  // The one-line summary is the paragraph right before the preview block.
  const hasSummary = () => page.evaluate(() => {
    const previous = document.querySelector('[class*="recipe-page__block"]')?.previousElementSibling;
    return previous?.tagName === 'P' && !!previous.querySelector('em');
  });

  const open = async (key) => {
    await page.goto(`${root}/recipes/${key}`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#source-code', { state: 'attached', timeout: 15000 });
  };

  await check('a README with Do\'s & don\'ts shows them as two lists (chat)', async () => {
    await open('chat');
    await page.waitForSelector('#dos-don-ts', { state: 'attached' });
    const dos = await page.locator('.doc__best-practices-col:first-child li').count();
    const donts = await page.locator('.doc__best-practices-col:last-child li').count();
    if (dos !== 5 || donts !== 5 || !(await hasSummary())) {
      throw new Error(`${dos} do, ${donts} don't (README: 5 and 5), summary ${await hasSummary()}`);
    }
  });

  await check('the components used link to their pages (chat)', async () => {
    const links = page.locator('ul[class*="recipe-page__components"] a');
    const hrefs = await links.evaluateAll((all) => all.map((link) => new URL(link.href).pathname));
    if (!hrefs.length || hrefs.some((href) => !/\/components\/[a-z-]+$/.test(href))) {
      throw new Error(hrefs.join(', ') || 'no link');
    }
    await links.first().click();
    await page.waitForURL(`**${hrefs[0]}`, { timeout: 10000 });
  });

  await check('the source code shows its tabs and code (chat)', async () => {
    await open('chat');
    const source = page.locator('[class*="recipe-page__block"]').last();
    await source.locator('pre').first().waitFor({ timeout: 15000 }).catch(() => {});
    const tabs = await source.locator('[role="tab"]').count();
    const code = await source.locator('pre').count();
    if (!tabs || !code) {
      throw new Error(`${tabs} tab(s), ${code} code block(s)`);
    }
  });

  await check('a README opening on a sub-heading has no summary, its sections stay (status-modal)', async () => {
    await open('status-modal');
    const summary = await hasSummary();
    const overview = await page.locator('#overview').count();
    const variants = await page.locator('#variants').count();
    if (summary || !overview || !variants) {
      throw new Error(`summary ${summary}, overview ${overview}, variants ${variants}`);
    }
  });

  await check('a TODO README shows no overview (data-grid-with-query-filter)', async () => {
    await open('data-grid-with-query-filter');
    if (await page.locator('#overview').count()) {
      throw new Error('an Overview section is shown');
    }
  });

  await check('a preview wider than a phone scrolls instead of being cut (data-grid-with-query-filter)', async () => {
    await page.setViewportSize({ height: 800, width: 375 });
    await open('data-grid-with-query-filter');
    const canvas = page.locator('[class*="recipe-card__inner__canvas"]').first();
    await canvas.waitFor({ timeout: 15000 });
    await page.waitForTimeout(1500);
    const state = await canvas.evaluate((el) => ({
      overflowX: getComputedStyle(el).overflowX,
      overflows: el.scrollWidth > el.clientWidth,
    }));
    if (state.overflows && state.overflowX === 'hidden') {
      throw new Error('the preview overflows its card and is cut');
    }
    await page.setViewportSize({ height: 800, width: 1280 });
  });

  await check('the gallery combines its category with a name or tag search, and counts what it shows', async () => {
    await page.goto(`${root}/recipes/components`, { waitUntil: 'domcontentloaded' });
    const names = page.locator('[class*="recipe-card__inner__header"] a');
    await names.first().waitFor({ timeout: 15000 });
    const total = await names.count();
    const count = page.locator('[class*="gallery-toolbar__count"]');
    const search = page.getByRole('searchbox', { name: 'Filter recipes' });
    const shows = async (term, expected) => {
      await search.fill(term);
      const shown = (await names.allTextContents()).sort();
      const counted = (await count.textContent())?.replace(/\s+/g, ' ').trim();
      const empty = await page.getByText('No recipe matches your filters').count();
      if (shown.join() !== expected.join() || counted !== `${expected.length} / ${total}` || empty !== (expected.length ? 0 : 1)) {
        throw new Error(`"${term}": ${shown.join(', ') || 'none'}, count ${counted}, empty state ${empty}`);
      }
    };
    const category = page.getByRole('combobox', { name: 'Filter by category' });
    await category.fill('Commerce');
    await page.locator('[data-ods="combobox-content"] [role="option"]', { hasText: 'Commerce' }).click();
    await shows('', ['Feature List Product Card', 'Media Product Card', 'Order Button']);
    // "cart" is a tag of two Commerce recipes, in neither name.
    await shows('cart', ['Feature List Product Card', 'Order Button']);
    await shows('media', ['Media Product Card']);
    await shows('chat', []);
  });

  await check('a gallery card opens its recipe at the top of the page', async () => {
    await page.goto(`${root}/recipes/components`, { waitUntil: 'domcontentloaded' });
    const links = page.locator('[class*="recipe-card__inner__header"] a');
    await links.last().waitFor({ timeout: 15000 });
    await links.last().scrollIntoViewIfNeeded();
    const before = await page.evaluate(() => document.querySelector('.shell__content')?.scrollTop ?? 0);
    const href = await links.last().evaluate((link) => new URL(link.href).pathname);
    await links.last().click();
    await page.waitForURL(`**${href}`, { timeout: 10000 });
    await page.waitForSelector('#source-code', { state: 'attached', timeout: 15000 });
    const after = await page.evaluate(() => document.querySelector('.shell__content')?.scrollTop ?? 0);
    if (before === 0 || after !== 0) {
      throw new Error(`scrollTop ${before} on the gallery, ${after} on the recipe`);
    }
    await page.goBack();
    await page.waitForURL('**/recipes/components', { timeout: 10000 });
    await page.waitForFunction((top) => Math.abs((document.querySelector('.shell__content')?.scrollTop ?? 0) - top) <= 1, before, { timeout: 5000 })
      .catch(async () => {
        const back = await page.evaluate(() => document.querySelector('.shell__content')?.scrollTop ?? 0);
        throw new Error(`back on the gallery at scrollTop ${back}, left at ${before}`);
      });
  });

  await check('a component page left after using its table of contents comes back to its position', async () => {
    // Reached in-app, as a reader would: its history entry carries a router key, unlike a page load.
    await open('chat');
    const link = page.locator('ul[class*="recipe-page__components"] a').first();
    const href = await link.evaluate((el) => new URL(el.href).pathname);
    await link.evaluate((el) => el.click());
    await page.waitForURL(`**${href}`, { timeout: 10000 });
    const toc = page.locator('.doc-layout__toc-node').nth(2);
    await toc.waitFor({ timeout: 15000 });
    await toc.click();
    // Once the smooth scroll to the section is over, the reader scrolls on.
    const left = await page.evaluate(async () => {
      const pane = document.querySelector('.shell__content');
      const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      for (let previous = -1; previous !== pane.scrollTop; await wait(200)) {
        previous = pane.scrollTop;
      }
      pane.scrollTop += 400;
      await wait(200);
      return pane.scrollTop;
    });
    await page.locator('.shell__sidebar').getByText('Datepicker', { exact: true }).click();
    await page.waitForFunction(() => document.title.startsWith('Datepicker —'), null, { timeout: 10000 });
    await page.goBack();
    await page.waitForURL(`**${href}#*`, { timeout: 10000 });
    // The demos of the page size themselves above the position: it must hold once they have.
    await page.waitForTimeout(2500);
    const back = await page.evaluate(() => document.querySelector('.shell__content')?.scrollTop ?? 0);
    if (Math.abs(back - left) > 1) {
      throw new Error(`back on ${href} at scrollTop ${back}, left at ${left}`);
    }
  });

  await check('the recipes of a component page are h3 cards under its "Recipes" h2 (tooltip)', async () => {
    await page.goto(`${root}/components/tooltip/examples`, { waitUntil: 'domcontentloaded' });
    const titles = page.locator('[class*="recipe-card__inner__header"]');
    await titles.first().waitFor({ timeout: 15000 });
    const tags = [...new Set(await titles.evaluateAll((all) => all.map((title) => title.tagName)))];
    const recipes = await page.locator('h2#recipes').count();
    if (tags.join() !== 'H3' || !recipes) {
      throw new Error(`card titles ${tags.join(', ')}, "Recipes" h2 ${recipes}`);
    }
  });

  await check('the feature list tooltip icons are named buttons (feature-list)', async () => {
    await open('feature-list');
    const triggers = page.locator('[data-ods="tooltip-trigger"][aria-label^="More information about"]');
    await triggers.first().waitFor({ state: 'attached', timeout: 15000 });
    const roles = [...new Set(await triggers.evaluateAll((all) => all.map((trigger) => trigger.getAttribute('role'))))];
    if (roles.join() !== 'button') {
      throw new Error(`role ${roles.join(', ')}`);
    }
  });

  results.push(pageErrors.length === 0 ? 'OK  zero pageerror' : `KO  ${pageErrors.length} pageerror(s)`);
  await page.close();
  return results;
}

export { suite };
