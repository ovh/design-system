import 'jest-puppeteer';
import { type ElementHandle } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Button navigation', () => {
  describe('focus', () => {
    async function isFocused(element: ElementHandle | null): Promise<boolean | undefined> {
      return element?.evaluate((el: Element) => document.activeElement === el);
    }

    it('should be focused on tabulation', async() => {
      await gotoStory(page, 'navigation/focus');

      const button = await page.waitForSelector('[data-testid="focus"]');

      expect(await isFocused(button)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(button)).toBe(true);
    });

    it('should be focused on tabulation when rendered as a link', async() => {
      await gotoStory(page, 'navigation/focus-link');

      const button = await page.waitForSelector('[data-testid="focus-link"]');

      expect(await isFocused(button)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(button)).toBe(true);
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

      const button = await page.waitForSelector('[data-testid="disabled"]');

      expect(await isFocused(button)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(button)).toBe(false);
    });

    it('should not be focusable if a disabled link', async() => {
      await gotoStory(page, 'navigation/disabled-link');

      const button = await page.waitForSelector('[data-testid="disabled-link"]');

      expect(await isFocused(button)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(button)).toBe(false);
    });

    it('should not navigate on click if a disabled link', async() => {
      await gotoStory(page, 'navigation/disabled-link');

      await page.waitForSelector('[data-testid="disabled-link"]');
      await page.click('[data-testid="disabled-link"]');

      expect(await page.evaluate(() => window.location.hash)).toBe('');
    });

    it('should not be focusable if is-loading is set', async() => {
      await gotoStory(page, 'navigation/is-loading');

      const button = await page.waitForSelector('[data-testid="is-loading"]');

      expect(await isFocused(button)).toBe(false);

      await page.keyboard.press('Tab');

      expect(await isFocused(button)).toBe(false);
    });
  });
});
