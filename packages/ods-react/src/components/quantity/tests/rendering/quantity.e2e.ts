import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Quantity rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="quantity"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="quantity-control"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="quantity-input"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const quantity = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await quantity?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });
});
