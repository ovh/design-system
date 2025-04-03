import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { ODS_BUTTON_COLOR } from '../../../button/src';

describe('ods-quantity rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let input: E2EElement;
  let buttonMinus: E2EElement;
  let buttonAdd: E2EElement;

  async function getButtonColor(part: string): Promise<string | null | undefined> {
    return await page.evaluate((part: string) => {
      const quantity = document.querySelector('ods-quantity');
      const button = quantity?.shadowRoot?.querySelector(`[exportparts="button:${part}"]`)?.shadowRoot?.querySelector('.ods-button__button');
      return button && getComputedStyle(button)?.color;
    }, part);
  }

  async function isInErrorState(): Promise<boolean | undefined> {
    return await page.evaluate(() => {
      return document.querySelector('ods-quantity')?.shadowRoot?.querySelector('.ods-quantity__input')?.shadowRoot?.querySelector('.ods-input__input')?.classList.contains('ods-input__input--error');
    });
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-quantity');
    input = await page.find('ods-quantity >>> .ods-quantity__input');
    buttonMinus = await page.find('ods-quantity >>> [exportparts="button:button-minus"]');
    buttonAdd = await page.find('ods-quantity >>> [exportparts="button:button-plus"]');
  }

  it('should render the web component', async() => {
    await setup('<ods-quantity></ods-quantity>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-quantity class="my-quantity"></ods-quantity>', '.my-quantity::part(input) { width: 200px; } .my-quantity::part(button-minus) { color: #00ff00; } .my-quantity::part(button-plus) { color: #ff0000; }');
      const inputStyle = await input.getComputedStyle();
      expect(inputStyle.getPropertyValue('width')).toBe('200px');

      const buttonMinusColor = await getButtonColor('button-minus');
      expect(buttonMinusColor).toBe('rgb(0, 255, 0)');

      const buttonAddColor = await getButtonColor('button-plus');
      expect(buttonAddColor).toBe('rgb(255, 0, 0)');
    });
  });

  describe('disabled', () => {
    it('should render the web component with is-disabled', async() => {
      await setup('<ods-quantity is-disabled></ods-quantity>');

      expect(input.getAttribute('is-disabled')).toBe('');
      expect(buttonMinus.getAttribute('is-disabled')).toBe('');
      expect(buttonAdd.getAttribute('is-disabled')).toBe('');
    });

    it('should disabled minus button with min', async() => {
      await setup('<ods-quantity min="0" value="0"></ods-quantity>');

      expect(buttonMinus.getAttribute('is-disabled')).toBe('');
    });

    it('should disabled add button with max', async() => {
      await setup('<ods-quantity max="10" value="10"></ods-quantity>');

      expect(buttonAdd.getAttribute('is-disabled')).toBe('');
    });
  });

  describe('readonly', () => {
    it('should render the web component with is-readonly', async() => {
      await setup('<ods-quantity is-readonly></ods-quantity>');

      expect(buttonMinus.getAttribute('is-disabled')).toBe('');
      expect(buttonAdd.getAttribute('is-disabled')).toBe('');
    });
  });

  describe('hasError', () => {
    it('should render the web component with has-error', async() => {
      await setup('<ods-quantity has-error></ods-quantity>');

      expect(input.getAttribute('has-error')).toBe('');
      expect(buttonMinus.getAttribute('color')).toBe(ODS_BUTTON_COLOR.critical);
      expect(buttonAdd.getAttribute('color')).toBe(ODS_BUTTON_COLOR.critical);
    });
  });

  describe('error state', () => {
    it('should render in error on form submit, before any changes, if invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-quantity is-required></ods-quantity></form>');

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);
    });

    it('should toggle the error state on value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-quantity is-required></ods-quantity></form>');

      await el.type('0');
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(false);

      await el.callMethod('clear');
      await page.click('body', { offset: { x: 400, y: 400 } }); // Blur
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);
    });

    it('should enforce the error state if has-error is set even on valid quantity', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-quantity is-required has-error value="0"></ods-quantity></form>');
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);
    });

    it('should update error state on odsInvalid event', async() => {
      await setup('<ods-quantity></ods-quantity>');

      expect(await isInErrorState()).toBe(false);

      input.triggerEvent('odsInvalid', { detail: { isInvalid: true } });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);

      input.triggerEvent('odsInvalid', { detail: { isInvalid: false } });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(false);
    });

    it('should update error state on plus button', async() => {
      await setup(`<form method="get">
        <ods-quantity is-required name="odsQuantity"></ods-quantity>
      </form>`);
      expect(await isInErrorState()).toBe(false);

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();
      expect(await isInErrorState()).toBe(true);

      await buttonAdd.click();
      expect(await isInErrorState()).toBe(true);

      await input.focus(); // Blur

      expect(await isInErrorState()).toBe(false);
    });
  });
});
