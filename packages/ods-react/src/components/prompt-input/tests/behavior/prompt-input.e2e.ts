import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('PromptInput behaviour', () => {
  describe('send button', () => {
    it('should enable when a file is added', async() => {
      await gotoStory(page, 'behavior/add-file');

      const sendButton = await page.waitForSelector('[data-ods="prompt-input-send-button"]');
      expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(true);

      const fileInput = await page.waitForSelector('input[type="file"]');
      await fileInput?.uploadFile(__filename);

      expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(false);
    });

    it('should enable when text is typed', async() => {
      await gotoStory(page, 'behavior/type-text');

      const sendButton = await page.waitForSelector('[data-ods="prompt-input-send-button"]');
      expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(true);

      await page.type('[data-ods="prompt-input-text-control"]', 'abc');

      expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(false);
    });

    it('should disable when text is cleared', async() => {
      await gotoStory(page, 'behavior/clear-text');

      const sendButton = await page.waitForSelector('[data-ods="prompt-input-send-button"]');
      expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(false);

      await page.click('[data-ods="prompt-input-text-control"]', { clickCount: 3 });
      await page.keyboard.press('Backspace');

      expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(true);
    });

    it('should disable when the file is removed', async() => {
      await gotoStory(page, 'behavior/remove-file');

      const sendButton = await page.waitForSelector('[data-ods="prompt-input-send-button"]');
      expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(false);

      await page.click('[data-ods="file-thumbnail"] button');

      expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(true);
    });
  });
});
