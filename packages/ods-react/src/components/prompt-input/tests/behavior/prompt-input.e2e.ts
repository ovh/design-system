import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

async function expectSendButtonDisabled(page: Page, disabled: boolean): Promise<void> {
  await page.waitForFunction(
    (d) => document.querySelector('[data-ods="prompt-input-send-button"]')?.hasAttribute('disabled') === d,
    {},
    disabled,
  );
}

describe('PromptInput behaviour', () => {
  describe('send button', () => {
    it('should enable when a file is added', async() => {
      await gotoStory(page, 'behavior/add-file');

      await page.waitForSelector('[data-ods="prompt-input-send-button"]');
      await expectSendButtonDisabled(page, true);

      const fileInput = await page.waitForSelector('input[type="file"]');
      await fileInput?.uploadFile(__filename);

      await expectSendButtonDisabled(page, false);
    });

    it('should enable when text is typed', async() => {
      await gotoStory(page, 'behavior/type-text');

      await page.waitForSelector('[data-ods="prompt-input-send-button"]');
      await expectSendButtonDisabled(page, true);

      await page.type('[data-ods="prompt-input-text-control"]', 'abc');

      await expectSendButtonDisabled(page, false);
    });

    it('should disable when text is cleared', async() => {
      await gotoStory(page, 'behavior/clear-text');

      await page.waitForSelector('[data-ods="prompt-input-send-button"]');
      await expectSendButtonDisabled(page, false);

      await page.click('[data-ods="prompt-input-text-control"]');
      await page.$eval('[data-ods="prompt-input-text-control"]', (el) => (el as HTMLTextAreaElement).select());
      await page.keyboard.press('Backspace');

      await expectSendButtonDisabled(page, true);
    });

    it('should disable when the file is removed', async() => {
      await gotoStory(page, 'behavior/remove-file');

      await page.waitForSelector('[data-ods="prompt-input-send-button"]');
      await expectSendButtonDisabled(page, false);

      await page.click('[data-ods="file-thumbnail"] button');

      await expectSendButtonDisabled(page, true);
    });
  });
});
