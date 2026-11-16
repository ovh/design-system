import 'jest-puppeteer';
import { gotoStory, stubClipboardWrite } from '../../../../helpers/test';

describe('Clipboard accessibility', () => {
  beforeEach(async() => {
    await stubClipboardWrite(page);
    await gotoStory(page, 'accessibility/copy-status');
    await page.waitForSelector('[data-testid="trigger"]');
  });

  it('should render an empty status region before any copy', async() => {
    expect(await page.$eval('[role="status"]', (el) => el.textContent)).toBe('');
  });

  it('should announce the copy in the status region and keep the focus on the trigger', async() => {
    const trigger = await page.$('[data-testid="trigger"]');
    await trigger?.click();
    await page.waitForFunction(() => document.querySelector('[role="status"]')?.textContent === 'Key copied');

    expect(await page.evaluate(() => document.activeElement?.getAttribute('data-testid'))).toBe('trigger');
  });

  it('should keep the trigger name after a copy, so the success is not read twice', async() => {
    const trigger = await page.$('[data-testid="trigger"]');
    await trigger?.click();
    await page.waitForFunction(() => document.querySelector('[role="status"]')?.textContent === 'Key copied');

    expect(await trigger?.evaluate((el) => el.getAttribute('aria-label'))).toBe('Copy the key');
  });
});
