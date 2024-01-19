import type { OdsDatepickerAttribute } from './interfaces/attributes';
import type { OsdsDatepicker } from './osds-datepicker';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { ODS_DATEPICKER_DAY } from './constants/datepicker-day';
import { ODS_DATEPICKER_LOCALE } from './constants/datepicker-locale';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-datepicker', () => {
  const baseAttribute = { ariaLabel: null, defaultValue: null, disabled: false, error: false, name: '', value: null };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsDatepickerAttribute> }): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatepickerAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-datepicker ${odsStringAttributes2Str(stringAttributes)}></osds-datepicker>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    await page.evaluate(() => {
      const pickerElement = document.querySelector('osds-datepicker')?.shadowRoot?.querySelector('.datepicker') as HTMLElement;
      pickerElement.style.setProperty('animation', 'none');
    });

    el = await page.find('osds-datepicker');
    await page.emulateTimezone('Europe/London');

    await page.evaluate(
      (datesDisabledJSON, daysOfWeekDisabledJSON, maxDateJSON, minDateJSON, valueJSON) => { // eslint-disable-line max-params
        const datepicker = document.querySelector('osds-datepicker') as unknown as OsdsDatepicker;
        datesDisabledJSON && (datepicker.datesDisabled = JSON.parse(datesDisabledJSON).map((str: string) => new Date(str)));
        daysOfWeekDisabledJSON && (datepicker.daysOfWeekDisabled = JSON.parse(daysOfWeekDisabledJSON));
        maxDateJSON && (datepicker.maxDate = new Date(JSON.parse(maxDateJSON)));
        minDateJSON && (datepicker.minDate = new Date(JSON.parse(minDateJSON)));
        valueJSON && (datepicker.value = new Date(JSON.parse(valueJSON)));
      },
      JSON.stringify(attributes.datesDisabled?.map((date) => date.toISOString())),
      JSON.stringify(attributes.daysOfWeekDisabled),
      JSON.stringify(attributes.maxDate?.toISOString()),
      JSON.stringify(attributes.minDate?.toISOString()),
      JSON.stringify((attributes.value as Date)?.toISOString()),
    );
  }

  async function getDatepickerValue(): Promise<Date | null> {
    const value = await page.evaluate(() => {
      const datepicker = document.querySelector('osds-datepicker') as unknown as OsdsDatepicker;
      return (datepicker.value as Date)?.toISOString();
    });
    return value ? new Date(value) : null;
  }

  it('should render', async() => {
    await setup({ attributes: {} });
    await page.waitForChanges();

    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should render with a value', async() => {
    const date = new Date('1999-11-02');
    await setup({ attributes: { value: date } });
    await page.waitForChanges();

    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    const value = await getDatepickerValue();
    expect(value).toEqual(date);
  });

  it('should display a datepicker when focused', async() => {
    await setup({ attributes: {} });

    await el.click();
    await page.waitForChanges();

    const datepicker = await page.find('osds-datepicker >>> .datepicker');
    expect(datepicker).not.toBeNull();
  });

  it('should allow datepicker to be cleared when clearable is true', async() => {
    const date = new Date('1999-11-02');
    await setup({ attributes: { clearable: true, value: date } });
    await el.click();
    await page.waitForChanges();

    let value = await getDatepickerValue();
    expect(value).toEqual(date);

    const clearButton = await page.find('osds-datepicker >>> osds-input >>> osds-icon[name="close"]');
    await clearButton.click();
    await page.waitForChanges();

    value = await getDatepickerValue();
    expect(value).toEqual(date);
  });

  it('should be disabled when disabled attribute is true', async() => {
    await setup({ attributes: { disabled: true } });
    const datepicker = await page.find('osds-datepicker');
    await page.waitForChanges();
    expect(datepicker).toHaveAttribute('disabled');
  });

  it('should update the value when date is selected from the datepicker', async() => {
    await setup({ attributes: {} });
    await page.waitForChanges();

    let value = await getDatepickerValue();
    expect(value).toBe(null);

    await el.click();
    await page.waitForChanges();

    const dateButton = await page.find('osds-datepicker >>> .datepicker .datepicker-grid .datepicker-cell:first-child');
    await dateButton.click();
    await page.waitForChanges();

    value = await getDatepickerValue();
    expect(value).toBeInstanceOf(Date);
  });

  it('should format date according to format attribute', async() => {
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

  it('should display a datepicker with a selected date when value is updated', async() => {
    await setup({ attributes: {} });
    await el.click();
    await page.waitForChanges();

    const dateButton = await page.find('osds-datepicker >>> .datepicker .datepicker-grid .datepicker-cell:first-child');
    await dateButton.click();
    await page.waitForChanges();

    const selectedDate = await page.find('osds-datepicker >>> .datepicker .datepicker-grid .datepicker-cell.selected');
    expect(selectedDate).not.toBeNull();
  });

  it('should display the months grid when the view is switched', async() => {
    await setup({ attributes: {} });
    await el.click();
    await page.waitForChanges();

    const viewSwitch = await page.find('osds-datepicker >>> .datepicker .datepicker-controls .view-switch');
    await viewSwitch.click();
    await page.waitForChanges();

    const monthGrid = await page.find('osds-datepicker >>> .datepicker .months');
    expect(monthGrid).not.toBeNull();
  });

  it('should display the years grid when the view is switched', async() => {
    await setup({ attributes: {} });
    await el.click();
    await page.waitForChanges();

    const viewSwitch = await page.find('osds-datepicker >>> .datepicker .datepicker-controls .view-switch');
    await viewSwitch.click();
    await page.waitForChanges();

    await viewSwitch.click();
    await page.waitForChanges();

    const yearGrid = await page.find('osds-datepicker >>> .datepicker .years');
    expect(yearGrid).not.toBeNull();
  });

  it('should *not* display the decade grid when the view is switched', async() => {
    await setup({ attributes: {} });
    await el.click();
    await page.waitForChanges();

    const viewSwitch = await page.find('osds-datepicker >>> .datepicker .datepicker-controls .view-switch');
    await viewSwitch.click();
    await page.waitForChanges();

    await viewSwitch.click();
    await page.waitForChanges();

    await viewSwitch.click();
    await page.waitForChanges();

    const decadeGrid = await page.find('osds-datepicker >>> .datepicker .decades');
    expect(decadeGrid).toBeNull();
  });

  it('should disable the desired days of the week', async() => {
    await setup({ attributes: { daysOfWeekDisabled: [ODS_DATEPICKER_DAY.saturday, ODS_DATEPICKER_DAY.sunday] } });
    await el.click();
    await page.waitForChanges();

    let dateButton = await page.find('osds-datepicker >>> .datepicker .datepicker-grid .datepicker-cell:nth-child(3)');
    expect(dateButton).not.toHaveClass('disabled');

    dateButton = await page.find('osds-datepicker >>> .datepicker .datepicker-grid .datepicker-cell:first-child');
    expect(dateButton).toHaveClass('disabled');
  });

  it('should *not* allow to select out of scope date', async() => {
    const date = new Date('2024-01-15');
    await setup({ attributes: {
      datesDisabled: [new Date('2024-01-11'), new Date('2024-01-17')],
      daysOfWeekDisabled: [ODS_DATEPICKER_DAY.saturday, ODS_DATEPICKER_DAY.sunday],
      maxDate: new Date('2024-01-25'),
      minDate: new Date('2024-01-10'),
      value: date,
    } });
    await page.waitForChanges();

    await el.click();
    await page.waitForChanges();

    let value = await getDatepickerValue();
    expect(value).toEqual(date);

    const dateButton = await page.find('osds-datepicker >>> .datepicker .datepicker-grid .datepicker-cell:nth-child(7)');
    expect(dateButton).toHaveClass('disabled');

    await dateButton.click();
    await page.waitForChanges();

    value = await getDatepickerValue();
    expect(value).toEqual(date);
  });

  it('should allow to select inside of scope date', async() => {
    const date = new Date('2024-01-15');
    await setup({ attributes: {
      datesDisabled: [new Date('2024-01-11'), new Date('2024-01-17')],
      daysOfWeekDisabled: [ODS_DATEPICKER_DAY.saturday, ODS_DATEPICKER_DAY.sunday],
      maxDate: new Date('2024-01-25'),
      minDate: new Date('2024-01-10'),
      value: date,
    } });
    await page.waitForChanges();

    await el.click();
    await page.waitForChanges();

    let value = await getDatepickerValue();
    expect(value).toEqual(date);

    const dateButton = await page.find('osds-datepicker >>> .datepicker .datepicker-grid .datepicker-cell:nth-child(17)');
    expect(dateButton).not.toHaveClass('disabled');

    await dateButton.click();
    await page.waitForChanges();

    value = await getDatepickerValue();
    expect(value).toEqual(new Date('2024-01-16'));
  });

  it('should disable dates before the minDate', async() => {
    await setup({ attributes: { minDate: new Date('2023-10-02'), value: new Date('2023-10-15') } });

    await el.click();
    await page.waitForChanges();

    const beforeMinDateButton = await page.find('osds-datepicker >>> .datepicker .datepicker-grid .datepicker-cell:first-child');
    expect(beforeMinDateButton).toHaveClass('disabled');
  });

  it('should disable dates after the maxDate', async() => {
    await setup({ attributes: { maxDate: new Date('2023-05-20'), value: new Date('2023-05-15') } });

    await el.click();
    await page.waitForChanges();

    const afterMaxDateButton = await page.find('osds-datepicker >>> .datepicker .datepicker-grid .datepicker-cell:last-child');
    expect(afterMaxDateButton).toHaveClass('disabled');
  });

  it('should change the displayed locale', async() => {
    await setup({ attributes: { locale: ODS_DATEPICKER_LOCALE.FR, value: new Date('2023-05-15') } });

    await el.click();
    await page.waitForChanges();

    const monthSelector = await page.find('osds-datepicker >>> .datepicker-controls .view-switch');
    expect(monthSelector.innerText).toBe('mai 2023');
  });

  it('should displayed sibling month days', async() => {
    await setup({ attributes: { showSiblingsMonthDays: true, value: new Date('2023-05-15') } });

    await el.click();
    await page.waitForChanges();

    const datepickerNextDays = await page.findAll('osds-datepicker >>> .datepicker-grid .day.next');
    expect(datepickerNextDays).not.toHaveLength(0);

    const datepickerPrevDays = await page.findAll('osds-datepicker >>> .datepicker-grid .day.prev');
    expect(datepickerPrevDays).not.toHaveLength(0);
  });

  it('should not displayed sibling month days', async() => {
    await setup({ attributes: { showSiblingsMonthDays: false, value: new Date('2023-05-15') } });

    await el.click();
    await page.waitForChanges();

    const datepickerNextDays = await page.findAll('osds-datepicker >>> .datepicker-grid .day.next');
    const datepickerNextDaysNotDisplayed = datepickerNextDays.every((day) => day.classList.contains('no-displayed'));
    expect(datepickerNextDaysNotDisplayed).toBe(true);

    const datepickerPrevDays = await page.findAll('osds-datepicker >>> .datepicker-grid .day.prev');
    const datepickerPrevDaysNotDisplayed = datepickerPrevDays.every((day) => day.classList.contains('no-displayed'));
    expect(datepickerPrevDaysNotDisplayed).toBe(true);
  });

  it('should not displayed sibling month days after updating datepicker', async() => {
    await setup({ attributes: { showSiblingsMonthDays: false, value: new Date('2023-05-15') } });

    await el.click();
    await page.waitForChanges();
    await el.setProperty('daysOfWeekDisabled', [ODS_DATEPICKER_DAY.saturday, ODS_DATEPICKER_DAY.sunday]);

    const datepickerNextDays = await page.findAll('osds-datepicker >>> .datepicker-grid .day.next');
    const datepickerNextDaysNotDisplayed = datepickerNextDays.every((day) => day.classList.contains('no-displayed'));
    expect(datepickerNextDaysNotDisplayed).toBe(true);

    const datepickerPrevDays = await page.findAll('osds-datepicker >>> .datepicker-grid .day.prev');
    const datepickerPrevDaysNotDisplayed = datepickerPrevDays.every((day) => day.classList.contains('no-displayed'));
    expect(datepickerPrevDaysNotDisplayed).toBe(true);
  });

  it('should not navigate on hidden sibling month days', async() => {
    await setup({ attributes: { showSiblingsMonthDays: false, value: new Date('2023-05-15') } });

    await el.click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    const value = await getDatepickerValue();
    expect(value).toEqual(new Date('2023-04-30T23:00:00.000Z'));
  });
});
