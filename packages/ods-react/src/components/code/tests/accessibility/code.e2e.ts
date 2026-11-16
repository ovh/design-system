import 'jest-puppeteer';
import { gotoStory, stubClipboardWrite } from '../../../../helpers/test';

describe('Code accessibility', () => {
  describe('role', () => {
    beforeEach(async() => {
      await gotoStory(page, 'accessibility/role');
      await page.waitForSelector('[data-testid="copyable"]');
    });

    it('should render no role attribute when the code cannot be copied', async() => {
      expect(await page.$eval('[data-testid="static"]', (el) => el.hasAttribute('role'))).toBe(false);
    });

    it('should render the group role when the code can be copied', async() => {
      expect(await page.$eval('[data-testid="copyable"]', (el) => el.getAttribute('role'))).toBe('group');
    });
  });

  it('should announce the copy in a status region', async() => {
    await stubClipboardWrite(page);
    await gotoStory(page, 'accessibility/copy-status');

    const trigger = await page.waitForSelector('[data-ods="clipboard-trigger"]');
    await trigger?.click();
    await page.waitForFunction(() => document.querySelector('[role="status"]')?.textContent === 'Snippet copied');

    expect(await page.$eval('[role="status"]', (el) => el.closest('[data-ods="code"]') !== null)).toBe(true);
  });
});
