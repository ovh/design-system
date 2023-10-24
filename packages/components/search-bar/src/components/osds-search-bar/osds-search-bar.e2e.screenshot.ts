import type { OdsSearchBarAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';

describe('e2e:osds-search-bar', () => {
  let page: E2EPage;
  let el: E2EElement;
  const baseAttribute = { value: '' };

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsSearchBarAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSearchBarAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-search-bar ${odsStringAttributes2Str(stringAttributes)}>
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
                it([`contrasted ${contrasted}`, `disabled ${disabled}`, `loading ${loading}`, `placeholder ${placeholder}`, `options ${options}`, `value ${value}`].join(', '), async() => {
                  await setup({
                    attributes: { contrasted, disabled, loading, placeholder, options, value },
                  });
                  await page.waitForChanges();
                  const results = await page.compareScreenshot('search-bar', { fullPage: false, omitBackground: true });
                  expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
                });
              });
            });
          });
        });
      });
    });
  });
});
