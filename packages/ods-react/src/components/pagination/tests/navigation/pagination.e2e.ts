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
