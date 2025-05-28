import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Pagination rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const pagination = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await pagination?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });
});
