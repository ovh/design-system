import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsSwitchAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_SWITCH_SIZES } from './constants/switch-size';

describe('e2e:osds-switch', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSwitchAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSwitchAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-switch ${odsStringAttributes2Str(stringAttributes)}>
        <osds-switch-item value="1" id="1" checked>Item 1</osds-switch-item>
        <osds-switch-item value="2" id="2">Item 2</osds-switch-item>
        <osds-switch-item value="3" id="3">Item 3</osds-switch-item>
      </osds-switch>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-switch');
  }

  describe('screenshots', () => {
    [() => { }, () => el.setProperty('disabled', true)].forEach((setDisabled) => {
      [() => { }, () => el.setProperty('contrasted', true)].forEach((setContrasted) => {
        [undefined, OdsThemeColorIntent.primary].forEach((color) => {
          [undefined, 'Switch content'].forEach((content) => {
            ODS_SWITCH_SIZES.forEach((size) => {
              it([color, content, size, setDisabled, setContrasted].join(', '), async () => {
                await setup({
                  attributes: {
                    color,
                    size
                  },
                });
                setDisabled();
                setContrasted();
                await page.waitForChanges();

                await page.evaluate(() => {
                  const element = document.querySelector('osds-switch') as HTMLElement;
                  return { width: element.clientWidth, height: element.clientHeight };
                });
                await page.setViewport({ width: 600, height:600 });
                const results = await page.compareScreenshot('switch', { fullPage: false, omitBackground: true });
                expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
              });
            });
          });
        });
      });
    });
  });
});
