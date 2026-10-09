import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

async function triggerToast(page: Page): Promise<void> {
  await page.click('#trigger');
}

describe('Toaster rendering', () => {
  it('should render a toast on trigger click', async() => {
    await gotoStory(page, 'rendering/default');
    await page.waitForSelector('[data-ods="toaster"]');

    await triggerToast(page);

    expect(await page.waitForSelector('[data-ods="message"]')).not.toBeNull();
  });

  describe('status', () => {
    it('should announce a critical toast as an alert and the others as a status', async() => {
      await gotoStory(page, 'rendering/status');
      await page.waitForSelector('[data-ods="toaster"]');

      await page.click('#trigger-critical');
      await page.click('#trigger-accent');

      expect(await page.waitForSelector('[role="alert"] [data-ods="message"]')).not.toBeNull();
      expect(await page.waitForSelector('[role="status"] [data-ods="message"]')).not.toBeNull();
    });
  });
});
