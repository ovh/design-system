import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Menu rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render-trigger"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="prompt-input-files"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="prompt-input-controls"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="prompt-input-file-upload-button"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="prompt-input-text-control"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="prompt-input-send-button"]')).not.toBeNull();
  });
});

describe('Send button disabled state', () => {
  it('should be disabled if no text and no files', async() => {
    await gotoStory(page, 'rendering/send-button-disabled-no-text-no-file');

    const sendButton = await page.waitForSelector('[data-ods="prompt-input-send-button"]');
    expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(true);
  });

  it('should be enabled if text and no file', async() => {
    await gotoStory(page, 'rendering/send-button-enabled-with-text');

    const sendButton = await page.waitForSelector('[data-ods="prompt-input-send-button"]');
    expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(false);
  });

  it('should be enabled if file and no text', async() => {
    await gotoStory(page, 'rendering/send-button-enabled-with-file');

    const sendButton = await page.waitForSelector('[data-ods="prompt-input-send-button"]');
    expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(false);
  });

  it('should be enabled if file and text', async() => {
    await gotoStory(page, 'rendering/send-button-enabled-with-text-and-file');

    const sendButton = await page.waitForSelector('[data-ods="prompt-input-send-button"]');
    expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(false);
  });
});

describe('Send button state changes on interaction', () => {
  it('should enable the button when a file is added', async() => {
    await gotoStory(page, 'rendering/send-button-enables-on-file-add');

    const sendButton = await page.waitForSelector('[data-ods="prompt-input-send-button"]');
    expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(true);

    const fileInput = await page.waitForSelector('input[type="file"]');
    await fileInput?.uploadFile(__filename);

    expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(false);
  });

  it('should enable the button when text is typed', async() => {
    await gotoStory(page, 'rendering/send-button-disabled-no-text-no-file');

    const sendButton = await page.waitForSelector('[data-ods="prompt-input-send-button"]');
    expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(true);

    await page.type('[data-ods="prompt-input-text-control"]', 'Hello');

    expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(false);
  });

  it('should disable the button when text is cleared', async() => {
    await gotoStory(page, 'rendering/send-button-enabled-with-text');

    const sendButton = await page.waitForSelector('[data-ods="prompt-input-send-button"]');
    expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(false);

    await page.click('[data-ods="prompt-input-text-control"]', { clickCount: 3 });
    await page.keyboard.press('Backspace');

    expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(true);
  });

  it('should disable the button when the file is removed', async() => {
    await gotoStory(page, 'rendering/send-button-disables-on-file-remove');

    const sendButton = await page.waitForSelector('[data-ods="prompt-input-send-button"]');
    expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(false);

    await page.click('[data-ods="file-thumbnail"] button');

    expect(await sendButton?.evaluate((el) => el.hasAttribute('disabled'))).toBe(true);
  });
});
