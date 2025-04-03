import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-checkbox rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let inputCheckbox: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-checkbox');
    inputCheckbox = await page.find('ods-checkbox > input[type="checkbox"]');
  }

  describe('CustomCss', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-checkbox is-checked></ods-checkbox>', 'ods-checkbox > input[type="checkbox"]:not(:disabled):checked { background-color: red; }');
      const inputCheckboxStyle = await inputCheckbox.getComputedStyle();
      expect(inputCheckboxStyle.getPropertyValue('background-color')).toBe('rgb(255, 0, 0)');
    });
  });

  describe('error state', () => {
    it('should render in error on form submit, before any changes, if invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-checkbox is-required></ods-checkbox></form>');

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-checkbox')?.querySelector('input')?.classList.contains('ods-checkbox__checkbox--error');
      });
      expect(hasErrorClass).toBe(true);
    });

    it('should toggle the error state on value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-checkbox is-required></ods-checkbox></form>');

      await el.click();
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-checkbox')?.querySelector('input')?.classList.contains('ods-checkbox__checkbox--error');
      });
      expect(hasErrorClass).toBe(false);

      await el.callMethod('clear');
      await page.click('body', { offset: { x: 200, y: 200 } }); // Blur
      await page.waitForChanges();

      const hasErrorClass2 = await page.evaluate(() => {
        return document.querySelector('ods-checkbox')?.querySelector('input')?.classList.contains('ods-checkbox__checkbox--error');
      });
      await page.waitForChanges();

      expect(hasErrorClass2).toBe(true);
    });

    it('should enforce the error state if has-error is set even on valid checkbox', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-checkbox is-required has-error></ods-checkbox></form>');
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-checkbox')?.querySelector('input')?.classList.contains('ods-checkbox__checkbox--error');
      });
      expect(hasErrorClass).toBe(true);

      await el.click();
      await page.waitForChanges();

      const hasErrorClass2 = await page.evaluate(() => {
        return document.querySelector('ods-checkbox')?.querySelector('input')?.classList.contains('ods-checkbox__checkbox--error');
      });
      expect(hasErrorClass2).toBe(true);
    });
  });
});
