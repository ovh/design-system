import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Divider rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="divider"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const divider = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await divider?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('classes', () => {
    it('should not render any undefined class', async() => {
      await gotoStory(page, 'rendering/render');

      const divider = await page.waitForSelector('[data-testid="render"]');
      const className = await divider!.evaluate((el: Element) => el.className);

      expect(className).not.toContain('undefined');
    });
  });
});
