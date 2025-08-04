import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Accordion rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="accordion"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="accordion-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="accordion-item"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="accordion-trigger"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const accordion = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await accordion?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });
});
