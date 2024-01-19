import type { OdsDatepickerAttribute } from './interfaces/attributes';
import type { OsdsDatepicker } from './osds-datepicker';
import type { E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { ODS_DATEPICKER_DAY } from './constants/datepicker-day';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-datepicker', () => {
  const baseAttribute = { ariaLabel: null, defaultValue: null, disabled: false, error: false, name: '', value: null };
  let page: E2EPage;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsDatepickerAttribute>, html?: string } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatepickerAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-datepicker ${odsStringAttributes2Str(stringAttributes)}></osds-datepicker>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    await page.evaluate(() => {
      const pickerElement = document.querySelector('osds-datepicker')?.shadowRoot?.querySelector('.datepicker') as HTMLElement;
      pickerElement.style.setProperty('animation', 'none');
    });

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
      JSON.stringify(attributes.value?.toISOString()),
    );
  }

  const attributeConfigurations = [
    { name: 'clearable', options: [true, false] },
    { name: 'daysOfWeekDisabled', options: [[], [ODS_DATEPICKER_DAY.saturday, ODS_DATEPICKER_DAY.sunday]] },
    { name: 'disabled', options: [true, false] },
    { name: 'error', options: [false, true] },
    { name: 'format', options: ['dd/mm/yyyy', 'mm/dd/yyyy'] },
    { name: 'inline', options: [true, false] },
    { name: 'placeholder', options: ['', 'placeholder message'] },
    { name: 'value', options: [null, new Date('1999-11-02')] },
  ];

  function generateCombinations(attributes: typeof attributeConfigurations): Array<Partial<OdsDatepickerAttribute>> {
    if (attributes.length === 0) {
      return [{}];
    }

    const attribute = attributes[0];
    const rest = attributes.slice(1);

    const combinationsOfRest = generateCombinations(rest);
    return attribute.options.flatMap((option) => combinationsOfRest.map((combination) => ({
      ...combination,
      [attribute.name]: option,
    })));
  }

  const allAttributeCombinations = generateCombinations(attributeConfigurations);

  describe('screenshots', () => {
    [true, false].forEach((displayDatepicker) => {
      allAttributeCombinations.forEach((attributes) => {
        const attributeDescription = Object.entries(attributes)
          .map(([key, value]) => value ? `${key}=${value}` : '')
          .filter((attr) => attr)
          .join(', ');

        const composedName = [
          attributeDescription,
          displayDatepicker ? 'datepicker displayed' : '',
        ].filter(Boolean).join(', ');

        it(composedName, async() => {
          await setup({ attributes });

          await page.waitForChanges();
          const datepicker = await page.find('osds-datepicker');
          if (displayDatepicker) {
            await datepicker.click();
          }

          await page.waitForChanges();

          await page.setViewport({ height: 600, width: 600 });

          const results = await page.compareScreenshot('datepicker', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    });
  });
});
