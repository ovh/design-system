import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Avatar rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="avatar"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const avatar = await page.waitForSelector('[data-ods="avatar"]');
      const height = await avatar?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });
});
