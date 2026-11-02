import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('FileUpload rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="file-upload"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="file-upload-item"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="file-upload-list"]')).not.toBeNull();
  });

  describe('error hover', () => {
    const getErrorInks = (): Promise<string[]> => page.$$eval(
      '[data-testid="error-hover"] [data-part="item-name"], [data-testid="error-hover"] [role="alert"]',
      (elements) => elements.map((el) => getComputedStyle(el).color),
    );

    beforeEach(async() => {
      await gotoStory(page, 'rendering/error-hover');
      await page.waitForSelector('[data-testid="error-hover"]');
    });

    it('should draw the error name and message with content-critical at rest', async() => {
      expect(await getErrorInks()).toEqual(['rgb(4, 5, 6)', 'rgb(4, 5, 6)']);
    });

    it('should draw them with the hover ink when the row is hovered', async() => {
      await page.hover('[data-testid="error-hover"] [data-part="item-name"]');

      expect(await getErrorInks()).toEqual(['rgb(1, 2, 3)', 'rgb(1, 2, 3)']);
    });

    it('should keep content-critical while the delete button is hovered', async() => {
      await page.hover('[data-testid="error-hover"] [data-part="item-delete-trigger"]');

      expect(await getErrorInks()).toEqual(['rgb(4, 5, 6)', 'rgb(4, 5, 6)']);
    });
  });
});
