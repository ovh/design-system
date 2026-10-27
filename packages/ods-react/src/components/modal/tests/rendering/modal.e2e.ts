import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Modal rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="modal-body"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="modal-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="modal-trigger"]')).not.toBeNull();
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
});
