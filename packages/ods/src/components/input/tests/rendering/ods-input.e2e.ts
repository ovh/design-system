import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-input rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let part: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-input');
    part = await page.find('ods-input >>> [part="input"]');
    await page.waitForChanges();
  }

  it('should render the web component', async() => {
    await setup('<ods-input></ods-input>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-input></ods-input>', 'ods-input::part(input) { width: 100px }');
      const partStyle = await part.getComputedStyle();
      expect(partStyle.getPropertyValue('width')).toBe('100px');
    });
  });

  describe('Form', () => {
    it('should get form data with button type submit', async() => {
      await setup(`<form method="get">
        <ods-input name="odsInput" value="On Vous Heberge ?"></ods-input>
        <input type="text" name="natifInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('odsInput')).toBe('On Vous Heberge ?');
      expect(url.searchParams.get('natifInput')).toBe('');
    });

    it('should reset form with button type reset', async() => {
      await setup(`<form method="get">
        <ods-input name="odsInput" value="On Vous Heberge ?"></ods-input>
        <input type="text" name="natifInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      await resetButton.click();

      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('natifInput')).toBe('');
      expect(url.searchParams.get('odsInput')).toBe('');
    });
  });

  describe('error state', () => {
    it('should render in error on form submit, before any changes, if invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-input is-required></ods-input></form>');

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      expect(hasErrorClass).toBe(true);
    });

    it('should toggle the error state on value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-input is-required></ods-input></form>');

      await el.type('abcd');
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      expect(hasErrorClass).toBe(false);

      await el.callMethod('clear');
      await page.click('body', { offset: { x: 200, y: 200 } }); // Blur
      await page.waitForChanges();

      const hasErrorClass2 = await page.evaluate(() => {
        return document.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      await page.waitForChanges();
      expect(hasErrorClass2).toBe(true);
    });

    it('should enforce the error state if has-error is set even on valid input', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-input is-required has-error value="dummy"></ods-input></form>');
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      expect(hasErrorClass).toBe(true);

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      const hasErrorClass2 = await page.evaluate(() => {
        return document.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      expect(hasErrorClass2).toBe(true);
    });
  });
});
