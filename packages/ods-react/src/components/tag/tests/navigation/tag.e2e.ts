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

    it('should be focused on tabulation when rendered as a link', async() => {
      await gotoStory(page, 'navigation/focus-link');

      const tag = await page.waitForSelector('[data-testid="focus-link"]');

      expect(await isFocused(tag)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(tag)).toBe(true);
    });

    it('should navigate on enter when rendered as a link', async() => {
      await gotoStory(page, 'navigation/focus-link');

      await page.waitForSelector('[data-testid="focus-link"]');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');

      expect(await page.evaluate(() => window.location.hash)).toBe('#dummy-target');
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
