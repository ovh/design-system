import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('OdsBadge rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const odsBadge = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await odsBadge?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('sizes', () => {
    it('should respect increase order (sm < md < lg)', async() => {
      await gotoStory(page, 'rendering/sizes');

      const smBadge = await page.waitForSelector('[data-testid="size-sm"]');
      const mdBadge = await page.waitForSelector('[data-testid="size-md"]');
      const lgBadge = await page.waitForSelector('[data-testid="size-lg"]');

      const smHeight = await smBadge!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const mdHeight = await mdBadge!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const lgHeight = await lgBadge!.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(smHeight).toBeLessThan(mdHeight);
      expect(smHeight).toBeLessThan(lgHeight);
      expect(mdHeight).toBeLessThan(lgHeight);
      expect(mdHeight).toBeGreaterThan(smHeight);
      expect(lgHeight).toBeGreaterThan(smHeight);
      expect(lgHeight).toBeGreaterThan(mdHeight);
    });
  });
});
