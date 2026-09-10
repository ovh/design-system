import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Pagination navigation', () => {
  describe('link mode', () => {
    it('should navigate when a page link is activated', async() => {
      await gotoStory(page, 'navigation/link');
      await page.waitForSelector('[data-testid="link"]');

      const target = await page.waitForSelector('[data-part="item"]:not([aria-current="page"])');
      const href = await target?.evaluate((el: Element) => el.getAttribute('href'));

      expect(href).toBe('#page-2-size-10');

      await target?.click();

      expect(await page.evaluate(() => window.location.hash)).toBe('#page-2-size-10');
    });

    it('should follow the next trigger to the page it points at', async() => {
      await gotoStory(page, 'navigation/link');
      await page.waitForSelector('[data-testid="link"]');

      const trigger = await page.waitForSelector('[data-part="next-trigger"]');
      const href = await trigger?.evaluate((el: Element) => el.getAttribute('href'));

      expect(href).toBe('#page-2-size-10');

      await trigger?.click();

      expect(await page.evaluate(() => window.location.hash)).toBe(href);
    });

    it('should walk the pages with the triggers when the page comes from the url', async() => {
      await gotoStory(page, 'navigation/link-from-url');
      await page.waitForSelector('[data-testid="link-from-url"]');

      async function activate(part: string): Promise<string | null | undefined> {
        const trigger = await page.waitForSelector(`[data-part="${part}"]`);

        await trigger?.click();

        return page.evaluate(() => window.location.hash);
      }

      expect(await activate('next-trigger')).toBe('#page-2-size-10');
      expect(await activate('next-trigger')).toBe('#page-3-size-10');
      expect(await activate('prev-trigger')).toBe('#page-2-size-10');
    });

    it('should hit a page from anywhere in its cell, not only on the digits', async() => {
      await gotoStory(page, 'navigation/link');
      await page.waitForSelector('[data-testid="link"]');

      const target = await page.waitForSelector('[data-part="item"]:not([aria-current="page"])');
      // The corner of the 40px cell: several pixels clear of the digits, on the overlay only.
      const corner = await target?.evaluate((el: Element) => {
        const { left, top } = (el.parentElement as HTMLElement).getBoundingClientRect();

        return { x: left + 2, y: top + 2 };
      });

      await page.mouse.click(corner!.x, corner!.y);

      expect(await page.evaluate(() => window.location.hash)).toBe('#page-2-size-10');
    });

    it('should hit a trigger from anywhere in its cell, not only on the chevron', async() => {
      await gotoStory(page, 'navigation/link');
      await page.waitForSelector('[data-testid="link"]');

      const trigger = await page.waitForSelector('[data-part="next-trigger"]');
      const corner = await trigger?.evaluate((el: Element) => {
        const { left, top } = (el.parentElement as HTMLElement).getBoundingClientRect();

        return { x: left + 2, y: top + 2 };
      });

      await page.mouse.click(corner!.x, corner!.y);

      expect(await page.evaluate(() => window.location.hash)).toBe('#page-2-size-10');
    });

    it('should stay silent when a link is followed, as the URL is the only signal', async() => {
      await gotoStory(page, 'navigation/link-reporting');
      await page.waitForSelector('[data-testid="link-reporting"]');

      const target = await page.waitForSelector('[data-part="item"]:not([aria-current="page"])');

      await target?.click();

      // A hash navigation keeps the document alive, so the recorder survives the click.
      expect(await page.evaluate(() => window.location.hash)).toMatch(/^#page-\d+-size-10$/);
      // Reporting here would let the application move the page during the click, which rewrites
      // the trigger href before the browser follows it and lands the user one page too far.
      expect(await page.evaluate(() => (window as unknown as { __pageChanges?: unknown[] }).__pageChanges ?? [])).toEqual([]);
    });

    it('should report the wanted page from the go-to-page form, which is not a link', async() => {
      await gotoStory(page, 'navigation/link-reporting');
      await page.waitForSelector('[data-testid="link-reporting"]');

      await page.type('[data-ods="pagination-page-selector"] input', '7');
      await page.click('[data-ods="pagination-page-selector"] button[type="submit"]');

      expect(await page.evaluate(() => (window as unknown as { __pageChanges?: unknown[] }).__pageChanges ?? []))
        .toEqual([{ page: 7, pageSize: 10 }]);
      // The form has no href to follow, so the application is the one that navigates.
      expect(await page.evaluate(() => window.location.hash)).toBe('');
    });

    it('should keep the triggers announced as links when they carry a tooltip', async() => {
      await gotoStory(page, 'navigation/link-with-tooltips');
      await page.waitForSelector('[data-testid="link-with-tooltips"]');

      const triggers = await page.evaluate(() =>
        [...document.querySelectorAll('[data-ods="tooltip-trigger"]')]
          .map((el) => ({ href: el.getAttribute('href'), role: el.getAttribute('role'), tag: el.tagName })));

      // The tooltip trigger is a Button in the default mode, and lends it its role. On an anchor
      // that role would announce a link as a button, which is what link mode exists to avoid.
      expect(triggers).toEqual([
        { href: '#page-2-size-10', role: null, tag: 'A' },
        { href: '#page-4-size-10', role: null, tag: 'A' },
      ]);
    });

    it('should report the wanted size and stay put until the application navigates', async() => {
      await gotoStory(page, 'navigation/link-size-selection');
      await page.waitForSelector('[data-testid="link-size-selection"]');

      function readBar(): Promise<{ current: string | null, next: string | null, prev: string | null, size: string }> {
        return page.evaluate(() => ({
          current: document.querySelector('[data-scope="pagination"][data-part="item"][aria-current="page"]')?.textContent ?? null,
          next: document.querySelector('[data-part="next-trigger"]')?.getAttribute('href') ?? null,
          prev: document.querySelector('[data-part="prev-trigger"]')?.getAttribute('href') ?? null,
          size: document.querySelector('[data-ods="pagination-page-size-selector"] [data-part="trigger"]')?.textContent ?? '',
        }));
      }

      const before = await readBar();

      expect(before).toEqual({ current: '18', next: '#page-19-size-10', prev: '#page-17-size-10', size: '10' });

      const trigger = await page.waitForSelector('[data-ods="pagination-page-size-selector"] [data-scope="select"][data-part="trigger"]');

      await trigger?.click();

      const option = await page.waitForSelector('[data-scope="select"][data-part="item"][data-value="100"]', { visible: true });

      await option?.click();

      expect(await page.evaluate(() => (window as unknown as { __pageSizeChanges?: unknown[] }).__pageSizeChanges ?? []))
        .toEqual([{ pageSize: 100 }]);
      // Moving on its own would rebuild every href with a size the URL does not have yet, drop
      // the active page out of the new range, and point the triggers at pages that no longer exist.
      expect(await readBar()).toEqual(before);
      expect(await page.evaluate(() => (window as unknown as { __pageChanges?: unknown[] }).__pageChanges ?? [])).toEqual([]);
    });

    it('should not navigate when the active page is activated', async() => {
      await gotoStory(page, 'navigation/link');
      await page.waitForSelector('[data-testid="link"]');

      await page.click('[data-part="item"][aria-current="page"]');

      expect(await page.evaluate(() => window.location.hash)).toBe('');
    });

    it('should not navigate when the inert previous trigger is clicked', async() => {
      await gotoStory(page, 'navigation/link');
      await page.waitForSelector('[data-testid="link"]');

      await page.click('[data-part="prev-trigger"]');

      expect(await page.evaluate(() => window.location.hash)).toBe('');
    });

    it('should keep the inert previous trigger out of the tab order', async() => {
      await gotoStory(page, 'navigation/link');

      const trigger = await page.waitForSelector('[data-part="prev-trigger"]');

      await page.keyboard.press('Tab');

      expect(await trigger?.evaluate((el: Element) => document.activeElement === el)).toBe(false);
    });

    it('should keep the active page out of the tab order, the way a current page is', async() => {
      await gotoStory(page, 'navigation/link');

      const current = await page.waitForSelector('[data-part="item"][aria-current="page"]');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

      expect(await current?.evaluate((el: Element) => document.activeElement === el)).toBe(false);
    });
  });
});
