import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Tabs rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="tab"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="tab-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="tab-list"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="tabs"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const tabs = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await tabs?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });
});
