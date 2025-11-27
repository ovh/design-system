import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Kbd rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const kbd = await page.waitForSelector('[data-testid="custom-style"]');
      const color = await kbd?.evaluate((el: Element) => getComputedStyle(el).getPropertyValue('color'));

      expect(color).toBe('rgb(255, 0, 0)');
    });
  });
});
