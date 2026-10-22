import 'jest-puppeteer';
import { getTokenColor, gotoStory } from '../../../../helpers/test';

describe('RadioGroup rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="radio"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="radio-control"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="radio-group"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="radio-label"]')).not.toBeNull();
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
});
