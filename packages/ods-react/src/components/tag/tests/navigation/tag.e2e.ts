import 'jest-puppeteer';
import { type ElementHandle } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Tag navigation', () => {
  describe('focus', () => {
    async function isFocused(element: ElementHandle | null): Promise<boolean | undefined> {
      return element?.evaluate((el: Element) => document.activeElement === el);
    }

    it('should be focused on tabulation', async() => {
      await gotoStory(page, 'navigation/focus');

      const tag = await page.waitForSelector('[data-testid="focus"]');

      expect(await isFocused(tag)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(tag)).toBe(true);
    });

    it('should not be focusable if disabled', async() => {
      await gotoStory(page, 'navigation/disabled');

      const tag = await page.waitForSelector('[data-testid="disabled"]');

      expect(await isFocused(tag)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(tag)).toBe(false);
    });

  });
});
