import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Logo rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="logo"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const logo = await page.waitForSelector('[data-ods="logo"]');
      const height = await logo?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(80);
    });
  });
});
