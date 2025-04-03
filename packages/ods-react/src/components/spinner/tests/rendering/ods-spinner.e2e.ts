import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('OdsSpinner rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const odsSpinner = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await odsSpinner?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('sizes', () => {
    it('should respect increase order (xs < sm < md < lg)', async() => {
      await gotoStory(page, 'rendering/sizes');

      const xsSpinner = await page.waitForSelector('[data-testid="size-xs"]');
      const smSpinner = await page.waitForSelector('[data-testid="size-sm"]');
      const mdSpinner = await page.waitForSelector('[data-testid="size-md"]');
      const lgSpinner = await page.waitForSelector('[data-testid="size-lg"]');

      const xsHeight = await xsSpinner!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const smHeight = await smSpinner!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const mdHeight = await mdSpinner!.evaluate((el: Element) => el.getBoundingClientRect().height);
      const lgHeight = await lgSpinner!.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(xsHeight).toBeLessThan(smHeight);
      expect(xsHeight).toBeLessThan(mdHeight);
      expect(xsHeight).toBeLessThan(lgHeight);
      expect(smHeight).toBeLessThan(mdHeight);
      expect(smHeight).toBeLessThan(lgHeight);
      expect(smHeight).toBeGreaterThan(xsHeight);
      expect(mdHeight).toBeLessThan(lgHeight);
      expect(mdHeight).toBeGreaterThan(xsHeight);
      expect(mdHeight).toBeGreaterThan(smHeight);
      expect(lgHeight).toBeGreaterThan(xsHeight);
      expect(lgHeight).toBeGreaterThan(smHeight);
      expect(lgHeight).toBeGreaterThan(mdHeight);
    });
  });
});
