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
