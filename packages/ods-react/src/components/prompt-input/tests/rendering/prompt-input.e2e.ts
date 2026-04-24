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
