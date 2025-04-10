import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('OdsTable rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const odsTable = await page.waitForSelector('[data-testid="custom-style"]');
      const backgroundColor = await odsTable?.evaluate((el) => getComputedStyle(el).backgroundColor);

      expect(backgroundColor).toBe('rgb(255, 0, 0)');
    });
  });
});
