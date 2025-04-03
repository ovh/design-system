import 'jest-puppeteer';
import { type ElementHandle } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('OdsLink navigation', () => {
  describe('focus', () => {
    async function isFocused(element: ElementHandle | null): Promise<boolean | undefined> {
      return element?.evaluate((el: Element) => document.activeElement === el);
    }

    it('should be focused on tabulation', async() => {
      await gotoStory(page, 'navigation/focus');

      const odsLink = await page.waitForSelector('[data-testid="focus"]');

      expect(await isFocused(odsLink)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(odsLink)).toBe(true);
    });

    it('should not be focusable if disabled', async() => {
      await gotoStory(page, 'navigation/disabled');

      const odsLink = await page.waitForSelector('[data-testid="disabled"]');

      expect(await isFocused(odsLink)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(odsLink)).toBe(false);
    });
  });
});
