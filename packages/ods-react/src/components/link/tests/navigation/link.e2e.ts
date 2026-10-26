import 'jest-puppeteer';
import { type ElementHandle } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Link navigation', () => {
  describe('click', () => {
    it('should not throw when clicked without an onClick', async() => {
      const errors: Error[] = [];
      const onPageError = (error: Error): void => {
        errors.push(error);
      };
      page.on('pageerror', onPageError);

      await gotoStory(page, 'navigation/without-on-click');

      const link = await page.waitForSelector('[data-testid="without-on-click"]');
      await link?.click();
      // The click resolves before the page reports the error it threw: a round trip lets it land.
      await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(resolve)));
      page.off('pageerror', onPageError);

      expect(errors).toEqual([]);
    });
  });

  describe('focus', () => {
    async function isFocused(element: ElementHandle | null): Promise<boolean | undefined> {
      return element?.evaluate((el: Element) => document.activeElement === el);
    }

    it('should be focused on tabulation', async() => {
      await gotoStory(page, 'navigation/focus');

      const link = await page.waitForSelector('[data-testid="focus"]');

      expect(await isFocused(link)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(link)).toBe(true);
    });

    it('should not be focusable if disabled', async() => {
      await gotoStory(page, 'navigation/disabled');

      const link = await page.waitForSelector('[data-testid="disabled"]');

      expect(await isFocused(link)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(link)).toBe(false);
    });
  });
});
