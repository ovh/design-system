import type { E2EPage } from '@stencil/core/testing';
import type { OdsDatepickerAttribute } from './interfaces/attributes';
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
  }

  const attributeConfigurations = [
    {},
    { format: `mm/dd/yyyy` },
    { error: `An error occured.` },
    { placeholder: `placeholder`, error: `An error occured.` },
  ];

  describe('screenshots', () => {
    attributeConfigurations.forEach(( attributes ) => {
      const attributeDescription = Object.keys(attributes).join(' & ');

      it(`${attributeDescription}`, async () => {
        await setup({ attributes });

        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-datepicker') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });

        await page.setViewport({ width: 600, height:600 });

        const results = await page.compareScreenshot('datepicker', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});
