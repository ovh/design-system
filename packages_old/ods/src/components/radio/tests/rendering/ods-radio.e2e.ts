import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-radio rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let inputRadio: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-radio');
    inputRadio = await page.find('ods-radio > input[type="radio"]');
  }

  describe('CustomCss', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-radio is-checked></ods-radio>', 'ods-radio > input[type="radio"]:not(:disabled):checked { background-color: red; }');
      const inputRadioStyle = await inputRadio.getComputedStyle();
      expect(inputRadioStyle.getPropertyValue('background-color')).toBe('rgb(255, 0, 0)');
    });
  });

  describe('error state', () => {
    it('should render in error on form submit, before any changes, if invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-radio name="error-state" is-required></ods-radio></form>');

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-radio')?.querySelector('input')?.classList.contains('ods-radio__radio--error');
      });
      expect(hasErrorClass).toBe(true);
    });

    it('should toggle the error state on value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-radio name="error-state" is-required></ods-radio></form>');

      await el.click();
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-radio')?.querySelector('input')?.classList.contains('ods-radio__radio--error');
      });
      expect(hasErrorClass).toBe(false);

      await el.callMethod('clear');
      await page.click('body', { offset: { x: 200, y: 200 } }); // Blur
      await page.waitForChanges();

      const hasErrorClass2 = await page.evaluate(() => {
        return document.querySelector('ods-radio')?.querySelector('input')?.classList.contains('ods-radio__radio--error');
      });
      await page.waitForChanges();

      expect(hasErrorClass2).toBe(true);
    });

    it('should enforce the error state if has-error is set even on valid radio', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-radio name="error-state" is-required has-error></ods-radio></form>');
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-radio')?.querySelector('input')?.classList.contains('ods-radio__radio--error');
      });
      expect(hasErrorClass).toBe(true);

      await el.click();
      await page.waitForChanges();

      const hasErrorClass2 = await page.evaluate(() => {
        return document.querySelector('ods-radio')?.querySelector('input')?.classList.contains('ods-radio__radio--error');
      });
      expect(hasErrorClass2).toBe(true);
    });
  });
});
