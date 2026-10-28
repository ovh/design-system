import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

const CONTENT = '[data-ods="drawer-content"]';

async function isFocusInDrawer(page: Page): Promise<boolean> {
  return page.evaluate((selector) => !!document.querySelector(selector)?.contains(document.activeElement), CONTENT);
}

async function waitForFocus(page: Page, testId: string): Promise<void> {
  await page.waitForFunction((id) => document.activeElement?.getAttribute('data-testid') === id, {}, testId);
}

async function waitForHidden(page: Page): Promise<void> {
  await page.waitForFunction((selector) => document.querySelector(selector)?.hasAttribute('hidden'), {}, CONTENT);
}

describe('Drawer navigation', () => {
  describe.each([
    ['with backdrop', 'navigation/with-backdrop'],
    ['without backdrop', 'navigation/without-backdrop'],
  ])('%s', (_, story) => {
    it('should not reach the closed drawer with Tab', async() => {
      await gotoStory(page, story);
      await page.waitForSelector('[data-testid="after"]');
      await waitForHidden(page);

      await page.focus('[data-testid="after"]');
      await page.keyboard.press('Tab');

      expect(await isFocusInDrawer(page)).toBe(false);
    });

    it('should not reach the drawer with Tab once closed', async() => {
      await gotoStory(page, story);
      await page.waitForSelector('[data-testid="trigger"]');

      await page.click('[data-testid="trigger"]');
      await waitForFocus(page, 'first');
      await page.keyboard.press('Escape');
      await waitForHidden(page);

      await page.focus('[data-testid="after"]');
      await page.keyboard.press('Tab');

      expect(await isFocusInDrawer(page)).toBe(false);
    });

    it('should play the close animation before hiding the content', async() => {
      await gotoStory(page, story);
      await page.waitForSelector('[data-testid="trigger"]');

      await page.click('[data-testid="trigger"]');
      await waitForFocus(page, 'first');
      await page.keyboard.press('Escape');

      await page.waitForFunction((selector) => document.querySelector(selector)?.getAttribute('data-state') === 'closed', {}, CONTENT);
      expect(await page.$eval(CONTENT, (el) => ({
        display: getComputedStyle(el).display,
        hasRunningAnimation: el.getAnimations().some((animation) => animation.playState === 'running'),
        isHidden: el.hasAttribute('hidden'),
      }))).toEqual({ display: 'block', hasRunningAnimation: true, isHidden: false });

      await waitForHidden(page);
      expect(await page.$eval(CONTENT, (el) => getComputedStyle(el).display)).toBe('none');
    });
  });
});
