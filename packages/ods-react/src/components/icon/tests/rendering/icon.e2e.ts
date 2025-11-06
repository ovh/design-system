import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Icon rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="icon"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const icon = await page.waitForSelector('[data-ods="icon"]');
      const color = await icon?.evaluate((el: Element) => window.getComputedStyle(el).color);

      expect(color).toBe('rgb(255, 0, 0)');
    });
  });
});
