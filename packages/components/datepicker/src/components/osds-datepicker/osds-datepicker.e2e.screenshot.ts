import type { E2EPage } from '@stencil/core/testing';
import type { OdsDatepickerAttribute } from './interfaces/attributes';
import type { OsdsDatepicker } from './osds-datepicker';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-datepicker', () => {
  let page: E2EPage;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsDatepickerAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatepickerAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-datepicker ${odsStringAttributes2Str(stringAttributes)}></osds-datepicker>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    await page.evaluate(() => {
      const pickerElement = document.querySelector('osds-datepicker')?.shadowRoot?.querySelector('.datepicker') as HTMLElement;
      pickerElement.style.setProperty('animation', 'none');
    });

    if (attributes.value) {
      const dateStr = attributes.value.toISOString();
      await page.evaluate((dateStr) => {
          const datepicker = document.querySelector('osds-datepicker') as unknown as OsdsDatepicker;
          datepicker.value = new Date(dateStr);
      }, dateStr);
    }
  }

  const attributeConfigurations = [
    { name: 'clearable', options: [true, false] },
    { name: 'disabled', options: [true, false] },
    { name: 'error', options: [false, true] },
    { name: 'format', options: ['dd/mm/yyyy', 'mm/dd/yyyy'] },
    { name: 'inline', options: [true, false] },
    { name: 'placeholder', options: ['', 'placeholder message'] },
    { name: 'value', options: ['', new Date('1999-11-02')] },
  ];

  function generateCombinations(attributes: typeof attributeConfigurations): Array<Partial<OdsDatepickerAttribute>> {
    if (attributes.length === 0) return [{}];

    const attribute = attributes[0];
    const rest = attributes.slice(1);

    const combinationsOfRest = generateCombinations(rest);
    return attribute.options.flatMap(option => combinationsOfRest.map(combination => ({
      ...combination,
      [attribute.name]: option
    })));
  }

  const allAttributeCombinations = generateCombinations(attributeConfigurations);

  describe('screenshots', () => {
    [true, false].forEach(displayDatepicker => {
      allAttributeCombinations.forEach(attributes => {
        const attributeDescription = Object.entries(attributes)
        .map(([key, value]) => value ? `${key}=${value}` : '')
        .filter(attr => attr)
        .join(', ');

        const composedName = [
          attributeDescription,
          displayDatepicker ? 'datepicker displayed' : ''
        ].filter(Boolean).join(', ');

        it(composedName, async () => {
          await setup({ attributes });

          await page.waitForChanges();
          const datepicker = await page.find('osds-datepicker');
          if (displayDatepicker) {
            await datepicker.click();
          }

          await page.waitForChanges();

          await page.setViewport({ width: 600, height: 600 });

          const results = await page.compareScreenshot('datepicker', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    });
  });
});
