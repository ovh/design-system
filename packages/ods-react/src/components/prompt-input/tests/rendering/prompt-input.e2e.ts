import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('PromptInput rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="prompt-input"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const promptInput = await page.waitForSelector('[data-ods="prompt-input"]');
      const height = await promptInput?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });
});
