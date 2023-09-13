import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsDatepickerAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-datepicker', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsDatepickerAttribute> }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatepickerAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-datepicker ${odsStringAttributes2Str(stringAttributes)}></osds-datepicker>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-datepicker');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should display a datepicker when focused', async () => {
    await setup({ attributes: {} });
    await el.click();
    const datepicker = await page.find('osds-datepicker >>> .datepicker');
    expect(datepicker).not.toBeNull();
  });

  it('should allow datepicker to be cleared when clearable is true', async () => {
    await setup({ attributes: { clearable: true, value: new Date('2023-09-11') } });
    await el.click();
    const clearButton = await page.find('osds-datepicker >>> osds-input >>> osds-icon[name="close"]');
    await clearButton.click();
    expect(await el.getProperty('value')).toBe(undefined);
  });

  it('should be disabled when disabled attribute is true', async () => {
    await setup({ attributes: { disabled: true } });
    const input = await page.find('osds-datepicker >>> osds-input');
    expect(input).toHaveAttribute('disabled');
  });

  it('should update the value when date is selected', async () => {
    await setup({ attributes: {} });
    let value = await el.getProperty('value');
    expect(value).toBe(undefined);
    await el.click();
    await page.waitForChanges();
    const dateButton = await page.find('osds-datepicker >>> .datepicker .datepicker-grid .datepicker-cell:first-child');
    await dateButton.click();
    await page.waitForChanges();
    value = await el.getProperty('value');
    expect(value).not.toBe(undefined);
  });

  it('should format date according to format attribute', async () => {
    await setup({ attributes: { format: 'yyyy/mm/dd' } });
    await el.click();
    await page.waitForChanges();
    const dateButton = await page.find('osds-datepicker >>> .datepicker .datepicker-grid .datepicker-cell:first-child');
    await dateButton.click();
    await page.waitForChanges();
    const inputElement = await page.find('osds-datepicker >>> osds-input');
    const inputValue = await inputElement.getProperty('value');
    expect(inputValue).toMatch(/^\d{4}\/\d{2}\/\d{2}$/);
  });
});
