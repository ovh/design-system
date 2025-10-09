import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Tabs behavior', () => {
  describe('keyboard navigation (no initial selection)', () => {
    it('should not set data-focus on tabs when no initial selection', async() => {
      await gotoStory(page, 'behavior/keyboard-navigation');
      await page.waitForSelector('[data-ods="tab-list"]');

      await page.keyboard.press('Tab');

      expect(await page.$eval('[data-ods="tab"]:nth-child(1)', (el) => el.getAttribute('data-focus') || null)).toBeNull();
      expect(await page.$eval('[data-ods="tab"]:nth-child(2)', (el) => el.getAttribute('data-focus') || null)).toBeNull();
      expect(await page.$eval('[data-ods="tab"]:nth-child(3)', (el) => el.getAttribute('data-focus') || null)).toBeNull();

      await page.keyboard.press('ArrowRight');
      expect(await page.$eval('[data-ods="tab"]:nth-child(1)', (el) => el.getAttribute('data-focus') || null)).toBeNull();
      expect(await page.$eval('[data-ods="tab"]:nth-child(2)', (el) => el.getAttribute('data-focus') || null)).toBeNull();
      expect(await page.$eval('[data-ods="tab"]:nth-child(3)', (el) => el.getAttribute('data-focus') || null)).toBeNull();
    });
  });

  describe('controlled mode', () => {
    it('should update value on click and reflect in test id', async() => {
      await gotoStory(page, 'behavior/controlled');
      await page.waitForSelector('[data-testid="controlled-value"]');

      expect(await page.$eval('[data-testid="controlled-value"]', (el) => el.textContent || '')).toBe('tab1');

      await page.click('[data-ods="tab"]:nth-child(2)');
      expect(await page.$eval('[data-testid="controlled-value"]', (el) => el.textContent || '')).toBe('tab2');
    });
  });

  describe('disabled tabs', () => {
    it('should skip disabled tabs on ArrowRight and not activate on click', async() => {
      await gotoStory(page, 'behavior/disabled');
      await page.waitForSelector('[data-ods="tab-list"]');

      await page.keyboard.press('Tab');
      const disabledSecondHasDataFocusInitially = await page.$eval('[data-ods="tab"]:nth-child(2)', (el) => el.getAttribute('data-focus') || null);
      expect(disabledSecondHasDataFocusInitially).toBeNull();

      await page.keyboard.press('ArrowRight');
      const disabledSecondHasDataFocusAfterArrow = await page.$eval('[data-ods="tab"]:nth-child(2)', (el) => el.getAttribute('data-focus') || null);
      expect(disabledSecondHasDataFocusAfterArrow).toBeNull();

      await page.click('[data-ods="tab"]:nth-child(2)');
      const ariaSelectedSecond = await page.$eval('[data-ods="tab"]:nth-child(2)', (el) => el.getAttribute('aria-selected'));
      expect(ariaSelectedSecond).not.toBe('true');
    });
  });
});
