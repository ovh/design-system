import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Switch rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="switch"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="switch-item"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const switchEl = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await switchEl?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });
});
