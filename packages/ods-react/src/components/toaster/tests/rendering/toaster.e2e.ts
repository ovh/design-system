import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { getTokenColor, gotoStory } from '../../../../helpers/test';

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

  it('should render a toast with the medium emphasis of Message', async() => {
    await gotoStory(page, 'rendering/default');
    await page.waitForSelector('[data-ods="toaster"]');

    await triggerToast(page);

    const message = await page.waitForSelector('[data-ods="message"]');
    const style = await message!.evaluate((el: Element) => {
      const computed = getComputedStyle(el);
      return [computed.backgroundColor, computed.borderTopWidth, computed.borderTopStyle, computed.borderTopColor, computed.color];
    });

    // Information medium: raised surface, subtle information border, information text.
    const [background, border, text] = await Promise.all(['surface-raised', 'border-information-subtle', 'content-information']
      .map((role) => getTokenColor(page, `--ods-semantic-color-${role}`)));
    expect(style).toEqual([background, '1px', 'solid', border, text]);
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
