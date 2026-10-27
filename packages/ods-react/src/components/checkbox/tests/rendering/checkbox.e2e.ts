import 'jest-puppeteer';
import { getTokenColor, gotoStory } from '../../../../helpers/test';

describe('Checkbox rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="checkbox"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="checkbox-control"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="checkbox-group"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="checkbox-label"]')).not.toBeNull();
  });

  describe('checked', () => {
    it('should paint the hover with the solid control hover', async() => {
      await gotoStory(page, 'rendering/checked');

      const control = await page.waitForSelector('[data-testid="checked"]');
      const highlight = await getTokenColor(page, '--ods-semantic-color-interaction-control-solid-hover');
      const background = (): Promise<string | undefined> => control!.evaluate((el: Element) => getComputedStyle(el).backgroundColor);

      await control!.hover();
      await page.waitForFunction((el: Element, color: string) => getComputedStyle(el).backgroundColor === color, { timeout: 2000 }, control, highlight).catch(() => undefined);

      expect(await background()).toBe(highlight);
    });
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const checkbox = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await checkbox?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });
});
