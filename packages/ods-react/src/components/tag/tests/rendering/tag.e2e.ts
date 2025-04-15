import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Tag rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const tag = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await tag?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('sizes', () => {
    it('should respect increase order ( md < lg)', async() => {
      await gotoStory(page, 'rendering/sizes');

      const mdTag = await page.waitForSelector('[data-testid="size-md"]');
      const lgTag = await page.waitForSelector('[data-testid="size-lg"]');

      const mdHeight = await mdTag!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const lgHeight = await lgTag!.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(mdHeight).toBeLessThan(lgHeight);
      expect(lgHeight).toBeGreaterThan(mdHeight);
    });
  });

});
