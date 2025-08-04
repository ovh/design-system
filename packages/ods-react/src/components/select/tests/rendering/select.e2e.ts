import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Select rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="select"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="select-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="select-control"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const select = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await select?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });
});
