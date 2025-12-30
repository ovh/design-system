import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Text rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="text"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const text = await page.waitForSelector('[data-ods="text"]');
      const color = await text?.evaluate((el: Element) => getComputedStyle(el).getPropertyValue('color'));

      expect(color).toBe('rgb(255, 0, 0)');
    });
  });

  describe('custom tag', () => {
    it('should render with custom HTML tag', async() => {
      await gotoStory(page, 'rendering/custom-tag');

      const text = await page.waitForSelector('[data-ods="text"]');
      const tagName = await text?.evaluate((el: Element) => el.tagName.toLowerCase());

      expect(tagName).toBe('span');
    });
  });
});
