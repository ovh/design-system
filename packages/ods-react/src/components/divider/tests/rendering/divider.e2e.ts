import 'jest-puppeteer';
import { gotoStory, gotoStoryAndCollectDeprecations } from '../../../../helpers/test';

describe('Divider rendering', () => {
  it('should render the web component', async() => {
    const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="divider"]')).not.toBeNull();
    expect(warnings).toEqual([]);
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

  describe('deprecated color', () => {
    it('should keep the v19 rendering of the deprecated color prop and warn once', async() => {
      const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/deprecated-color');

      const getBackground = async(testId: string): Promise<string> => {
        const divider = await page.waitForSelector(`[data-testid="${testId}"]`);
        return divider!.evaluate((el: Element) => getComputedStyle(el).backgroundColor);
      };

      expect(await getBackground('color-primary')).toBe(await getBackground('default'));
      expect(await getBackground('color-neutral')).not.toBe(await getBackground('default'));
      expect(warnings).toEqual([
        '[DEPRECATED]: The color prop of Divider is deprecated and will be removed in v21, override the background-color in CSS instead.',
      ]);
    });
  });
});
