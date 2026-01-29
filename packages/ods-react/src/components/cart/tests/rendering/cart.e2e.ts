import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Cart rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="cart"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const cart = await page.waitForSelector('[data-ods="cart"]');
      const height = await cart?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });
});
