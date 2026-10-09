import 'jest-puppeteer';
import { gotoStory, gotoStoryAndCollectDeprecations } from '../../../../helpers/test';

describe('Modal rendering', () => {
  it('should render the web component', async() => {
    const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="modal-body"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="modal-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="modal-trigger"]')).not.toBeNull();
    expect(warnings).toEqual([]);
  });

  describe('role', () => {
    it('should be a dialog by default and respect a role override', async() => {
      await gotoStory(page, 'rendering/role');

      const dialog = await page.waitForSelector('[data-testid="default-role"]');
      const alertDialog = await page.waitForSelector('[data-testid="alertdialog-role"]');

      expect(await dialog!.evaluate((el: Element) => el.getAttribute('role'))).toBe('dialog');
      expect(await alertDialog!.evaluate((el: Element) => el.getAttribute('role'))).toBe('alertdialog');
    });
  });

  describe('deprecated color', () => {
    it('should keep the v19 alertdialog role of color critical and warn once', async() => {
      const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/deprecated-color');

      const critical = await page.waitForSelector('[data-testid="color-critical"]');
      const information = await page.waitForSelector('[data-testid="color-information"]');

      expect(await critical!.evaluate((el: Element) => el.getAttribute('role'))).toBe('alertdialog');
      expect(await information!.evaluate((el: Element) => el.getAttribute('role'))).toBe('dialog');
      expect(warnings).toEqual([
        '[DEPRECATED]: The color prop of ModalContent is deprecated and will be removed in v21, pass role="alertdialog" instead of color="critical".',
      ]);
    });
  });
});
