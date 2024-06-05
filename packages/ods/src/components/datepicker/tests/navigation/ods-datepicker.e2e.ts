import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-datepicker behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.tagName === 'ODS-DATEPICKER';
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-datepicker');
  }

  beforeEach(jest.clearAllMocks);

  describe('focus', () => {
    it('should be focusable', async() => {
      await setup('<ods-datepicker></ods-datepicker>');
      await el.click();
      expect(await isFocused()).toBe(true);
    });

    it('should not be focusable if disabled', async() => {
      await setup('<ods-datepicker is-disabled></ods-datepicker>');
      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(false);
    });
  });
});
