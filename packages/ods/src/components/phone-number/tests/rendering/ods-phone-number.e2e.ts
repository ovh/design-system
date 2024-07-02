import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { ODS_PHONE_NUMBER_COUNTRY_ISO_CODES } from '../../src';

describe('ods-phone-number rendering', () => {
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

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-phone-number');
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

  describe('part', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-phone-number countries="all"></ods-phone-number>', 'ods-phone-number::part(input) { width: 100px } ods-phone-number::part(select) { width: 100px }');

      const inputStyle = await (await page.find('ods-phone-number >>> ods-input')).getComputedStyle();
      const selectStyle = await (await page.find('ods-phone-number >>> ods-select')).getComputedStyle();

      expect(inputStyle.getPropertyValue('width')).toBe('100px');
      expect(selectStyle.getPropertyValue('width')).toBe('100px');
    });
  });
});
