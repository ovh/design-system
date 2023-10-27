import type { E2EPage } from '@stencil/core/testing';
import type { OdsAutocompleteAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-autocomplete', () => {
  let page: E2EPage;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsAutocompleteAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsAutocompleteAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-autocomplete ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-autocomplete>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  const screenshotConfigurations = [
    { description: `no configuration`, html: `` },
  ];

  const slotConfigurations = [
    { description: `no slot`, html: `` },
  ];

  const attributeConfigurations = [
    {},
  ];

  describe('screenshots', () => {
    screenshotConfigurations.forEach(( screenshotConfiguration ) => {
      slotConfigurations.forEach(( slotConfiguration ) => {
        attributeConfigurations.forEach(( attributes ) => {
          const attributeDescription = Object.keys(attributes).join(' & ');

          it(`${slotConfiguration.description} with ${screenshotConfiguration.description} and ${attributeDescription}`, async () => {
            const html = `${slotConfiguration.html}${screenshotConfiguration.html}`;
            await setup({ attributes, html });

            await page.waitForChanges();

            await page.evaluate(() => {
              const element = document.querySelector('osds-autocomplete') as HTMLElement;
              return { width: element.clientWidth, height: element.clientHeight };
            });

            await page.setViewport({ width: 600, height:600 });

            const results = await page.compareScreenshot('autocomplete', { fullPage: false, omitBackground: true });
            expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
          });
        });
      });
    });
  });
});
