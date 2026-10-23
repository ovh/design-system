import 'jest-puppeteer';
import { getTokenColor, gotoStory } from '../../../../helpers/test';

describe('Toggle rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="toggle"]')).not.toBeNull();
  });

  describe('checked', () => {
    it('should paint the hover with the selection highlight', async() => {
      await gotoStory(page, 'rendering/checked');

      const control = await page.waitForSelector('[data-testid="checked"]');
      const highlight = await getTokenColor(page, '--ods-semantic-color-interaction-selected-solid-highlight');
      const background = (): Promise<string | undefined> => control!.evaluate((el: Element) => getComputedStyle(el).backgroundColor);

      await control!.hover();
      await page.waitForFunction((el: Element, color: string) => getComputedStyle(el).backgroundColor === color, { timeout: 2000 }, control, highlight).catch(() => undefined);

      expect(await background()).toBe(highlight);
    });
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const toggle = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await toggle?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });
});
