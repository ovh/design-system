import 'jest-puppeteer';
import { type ElementHandle } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('OdsButton navigation', () => {
  describe('focus', () => {
    async function isFocused(element: ElementHandle | null): Promise<boolean | undefined> {
      return element?.evaluate((el: Element) => document.activeElement === el);
    }

    it('should be focused on tabulation', async() => {
      await gotoStory(page, 'navigation/focus');

      const odsButton = await page.waitForSelector('[data-testid="focus"]');

      expect(await isFocused(odsButton)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(odsButton)).toBe(true);
    });

    it('should not be focusable if disabled', async() => {
      await gotoStory(page, 'navigation/disabled');

      const odsButton = await page.waitForSelector('[data-testid="disabled"]');

      expect(await isFocused(odsButton)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(odsButton)).toBe(false);
    });

    it('should not be focusable if is-loading is set', async() => {
      await gotoStory(page, 'navigation/is-loading');

      const odsButton = await page.waitForSelector('[data-testid="is-loading"]');

      expect(await isFocused(odsButton)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(odsButton)).toBe(false);
    });
  });
});
