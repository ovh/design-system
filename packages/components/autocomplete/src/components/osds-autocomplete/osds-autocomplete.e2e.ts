import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsAutocompleteAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-autocomplete', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes, content }: { attributes: Partial<OdsAutocompleteAttribute>, content: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsAutocompleteAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-autocomplete ${odsStringAttributes2Str(stringAttributes)}>
        ${content}
      </osds-autocomplete>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-autocomplete');
  }

  it('should render', async () => {
    await setup({ attributes: {}, content: '' });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should add focus on the autocomplete when clicked', async () => {
    await setup({ attributes: { value: 'test' }, content: '' });
    await el.click();
    await page.waitForChanges();
    const hasFocus = await el.getProperty('hasFocus');
    expect(hasFocus).toBeTruthy();
  });

  it('should display surface when input value meets minimum number of characters', async () => {
    await setup({ attributes: { minimumNumberOfCharacters: 3 }, content: '' });
    const input = await page.find('osds-autocomplete >>> osds-input');
    await input.type('test');
    await page.waitForChanges();
    const surface = await page.find('ocdk-surface');
    expect(surface).not.toBeNull();
  });

  it('should handle value changes on input', async () => {
    await setup({ attributes: {}, content: '' });
    const input = await page.find('osds-input');
    await input.type('testing');
    await page.waitForChanges();
    const inputValue = await input.getProperty('value');
    expect(inputValue).toBe('testing');
  });

  it('should handle option click from the slot', async () => {
    await setup({ attributes: {}, content: '<osds-option value="option1">Option 1</osds-option>' });
    const option = await page.find('osds-option');
    const optionClickSpy = await el.spyOnEvent('odsSelectOptionClick');
    await option.click();
    expect(optionClickSpy).toHaveReceivedEventDetail({ value: 'option1' });
  });

  it('should handle clearable functionality', async () => {
    await setup({ attributes: { clearable: true, value: 'testing' }, content: '' });
    const clearButton = await page.find('osds-input >>> .clear-button');
    await clearButton.click();
    const inputValue = await el.getProperty('value');
    expect(inputValue).toBe('');
  });
});
