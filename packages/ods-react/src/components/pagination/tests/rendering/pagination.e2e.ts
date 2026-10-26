import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Pagination rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="pagination"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const pagination = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await pagination?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('cascade layers', () => {
    it('should let an unlayered rule of the integrator win over the page items', async() => {
      await gotoStory(page, 'rendering/unlayered-rule');

      const item = await page.waitForSelector('[data-testid="unlayered-rule"] [data-part="item"]');
      const width = await item?.evaluate((el: Element) => el.getBoundingClientRect().width);

      expect(width).toBe(52);
    });
  });
});
