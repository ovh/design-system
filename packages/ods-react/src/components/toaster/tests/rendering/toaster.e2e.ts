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
});
