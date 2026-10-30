import 'jest-puppeteer';
import { getTokenColor, gotoStory } from '../../../../helpers/test';

describe('Toggle rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="toggle"]')).not.toBeNull();
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

  describe('state roles', () => {
    // The ON label is the first span after the thumb; it only shows when checked.
    async function getColors(testId: string): Promise<{ label: string | undefined, thumb: string | undefined }> {
      const control = await page.waitForSelector(`[data-testid="${testId}"]`);

      return control!.evaluate((el: Element) => {
        const thumb = el.querySelector('[data-part="thumb"]');
        const label = thumb?.nextElementSibling?.firstElementChild;

        return {
          label: label ? getComputedStyle(label).color : undefined,
          thumb: thumb ? getComputedStyle(thumb).backgroundColor : undefined,
        };
      });
    }

    beforeEach(async() => {
      await gotoStory(page, 'rendering/state-roles');
    });

    it('should paint the unchecked thumb with surface-thumb', async() => {
      expect((await getColors('unchecked')).thumb).toBe('rgb(1, 2, 3)');
    });

    it('should paint the checked thumb and ON label with content-on-control-solid', async() => {
      expect(await getColors('checked-labelled')).toEqual({ label: 'rgb(4, 5, 6)', thumb: 'rgb(4, 5, 6)' });
    });

    it('should paint the checked invalid thumb and ON label with content-on-critical-solid', async() => {
      expect(await getColors('checked-invalid')).toEqual({ label: 'rgb(7, 8, 9)', thumb: 'rgb(7, 8, 9)' });
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
