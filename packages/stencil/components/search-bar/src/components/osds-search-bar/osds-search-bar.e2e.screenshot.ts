import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsSearchBarAttributes,
  OdsComponentAttributes2StringAttributes,
  odsSearchBarDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str } from '@ovhcloud/ods-testing';

describe('e2e:osds-search-bar', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsSearchBarAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsSearchBarAttributes = OdsCreateAttributes(attributes, odsSearchBarDefaultAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSearchBarAttributes>(minimalAttributes, odsSearchBarDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-search-bar ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-search-bar>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-search-bar');
  }

  describe('screenshots', () => {
    const options = [{ label: 'options1', value: '1' }, { label: 'options2', value: '2' }];
    [true, false].forEach((contrasted) => {
      [true, false].forEach((disabled) => {
        [true, false].forEach((loading) => {
          [undefined, [], options].forEach((options) => {
            [undefined, 'Input value'].forEach((value) => {
              [undefined, 'Placeholder'].forEach((placeholder) => {
              it([`contrasted ${contrasted}`, `disabled ${disabled}`, `loading ${loading}`, `placeholder ${placeholder}`, `options ${options}`, `value ${value}`].join(', '), async () => {
                await setup({
                  attributes: { contrasted, disabled, loading, placeholder, options, value },
                });
                await page.waitForChanges();
                const results = await page.compareScreenshot('search-bar', { fullPage: false, omitBackground: true });
                expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
              });
            });
          });
        });
      });
    });
  });
  });
});
