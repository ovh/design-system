import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { ODS_PHONE_NUMBER_COUNTRY_ISO_CODES } from '../../src';

describe('ods-phone-number rendering', () => {
  let buttonClearable: E2EElement;
  let el: E2EElement;
  let inputElement: HTMLElement;
  let page: E2EPage;
  let selectElement: HTMLElement;

  async function getCountriesCodes(): Promise<string[]> {
    return page.evaluate(() => {
      const options = document.querySelector('ods-phone-number')
        ?.shadowRoot?.querySelector('ods-select')
        ?.shadowRoot?.querySelectorAll<HTMLElement>('option');

      return Array.from(options || []).map((option) => option.getAttribute('value')!);
    });
  }

  async function isInErrorState(): Promise<boolean | undefined> {
    return await page.evaluate(() => {
      return document.querySelector('ods-phone-number')?.shadowRoot?.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
    });
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-phone-number');
    buttonClearable = await page.find('ods-phone-number >>> ods-button[icon="xmark"]');
    inputElement = el.shadowRoot!.querySelector('ods-input')!;
    selectElement = el.shadowRoot!.querySelector('ods-select')!;
  }

  it('should render the web component without country selector', async() => {
    await setup('<ods-phone-number></ods-phone-number>');

    expect(el.shadowRoot).not.toBeNull();
    expect(inputElement).not.toBeNull();
    expect(selectElement).toBeNull();
  });

  it('should render the web component with all countries', async() => {
    await setup('<ods-phone-number countries="all"></ods-phone-number>');

    expect(el.shadowRoot).not.toBeNull();
    expect(inputElement).not.toBeNull();
    expect(selectElement).not.toBeNull();
    expect((await getCountriesCodes()).length).toBe(ODS_PHONE_NUMBER_COUNTRY_ISO_CODES.length + 1); // +1 for the added empty option in the select
  });

  it('should render the web component with a subset of countries', async() => {
    await setup('<ods-phone-number countries=\'["fr", "be"]\'></ods-phone-number>');
    const countriesCodes = await getCountriesCodes();

    expect(el.shadowRoot).not.toBeNull();
    expect(inputElement).not.toBeNull();
    expect(selectElement).not.toBeNull();
    expect(countriesCodes.length).toBe(3); // +1 for the added empty option in the select
    expect(countriesCodes.sort()).toEqual(['', 'be', 'fr']);
  });

  it('should render disabled', async() => {
    await setup('<ods-phone-number countries="all" is-disabled></ods-phone-number>');

    expect(inputElement.getAttribute('is-disabled')).not.toBeNull();
    expect(selectElement.getAttribute('is-disabled')).not.toBeNull();
  });

  it('should render the web component with the given value', async() => {
    const dummyValue = '012345678';

    await setup(`<ods-phone-number value="${dummyValue}"></ods-phone-number>`);

    expect(inputElement).not.toBeNull();
    expect(inputElement.getAttribute('value')).toBe(dummyValue);
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-phone-number countries="all"></ods-phone-number>', 'ods-phone-number::part(input) { width: 100px } ods-phone-number::part(select) { width: 100px }');

      const inputStyle = await (await page.find('ods-phone-number >>> ods-input')).getComputedStyle();
      const selectStyle = await (await page.find('ods-phone-number >>> ods-select')).getComputedStyle();

      expect(inputStyle.getPropertyValue('width')).toBe('100px');
      expect(selectStyle.getPropertyValue('width')).toBe('100px');
    });
  });

  describe('isClearable', () => {
    it('should render a clearable button', async() => {
      await setup('<ods-phone-number is-clearable value="clearable"></ods-phone-number>');

      expect(buttonClearable).not.toBeNull();
    });

    it('should render a disabled clearable button when phone-number is disabled', async() => {
      await setup('<ods-phone-number is-disabled is-clearable value="clearable"></ods-phone-number>');

      expect(buttonClearable.getAttribute('is-disabled')).toBe('');
    });

    it('should render a disabled clearable button when phone-number is readonly', async() => {
      await setup('<ods-phone-number is-readonly is-clearable value="clearable"></ods-phone-number>');

      expect(buttonClearable.getAttribute('is-disabled')).toBe('');
    });

    it('should render a clearable button when phone-number value wrong type', async() => {
      await setup('<ods-phone-number is-clearable value="clearable"></ods-phone-number>');

      expect(buttonClearable).not.toBeNull();
    });
  });

  describe('error state', () => {
    it('should not render in error state on first render even if required', async() => {
      await setup('<ods-phone-number is-required></ods-phone-number>');

      expect(await isInErrorState()).toBe(false);
    });

    it('should render in error on form submit, before any changes, if invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-phone-number is-required></ods-phone-number></form>');

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);
    });

    it('should toggle the error state on value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-phone-number is-required></ods-phone-number></form>');

      await el.type('abcd');
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(false);

      await el.callMethod('clear');
      await page.click('body', { offset: { x: 200, y: 200 } }); // Blur
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);
    });

    it('should enforce the error state if has-error is set even on valid phone-number', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-phone-number is-required has-error value="+18444629181"></ods-phone-number></form>');
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);
    });

    it('should update error state on odsInvalid event', async() => {
      await setup('<ods-phone-number></ods-phone-number>');
      const input = await page.find('ods-phone-number >>> ods-input');

      expect(await isInErrorState()).toBe(false);

      input.triggerEvent('odsInvalid', { detail: { isInvalid: true } });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);

      input.triggerEvent('odsInvalid', { detail: { isInvalid: false } });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(false);
    });
  });
});
