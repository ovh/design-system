import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsTextAttributes,
  OdsTextLevelList,
  OdsTextSizeList,
  odsTextDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsTextBaseAttributes } from '@ovhcloud/ods-testing';
import { OdsThemeColorHue, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';

const slotContent = `Text`;

describe('e2e:osds-text', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsTextAttributes>, html?: string }) {
    const minimalAttributes: OdsTextAttributes = OdsCreateAttributes(attributes, odsTextBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTextAttributes>(minimalAttributes, odsTextDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-text ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-text>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-text');
  }

  describe('screenshots', () => {
    [() => {}, () => el.setProperty('contrasted', true)].forEach((action) => {
      [OdsThemeColorHue._100, OdsThemeColorHue._500].forEach((hue) => {
        OdsThemeColorIntentList.forEach((color) => {
          OdsTextSizeList.forEach((size) => {
            OdsTextLevelList.forEach((level) => {
              it([color, level, size, action, hue].join(', '), async () => {
                await setup({
                  attributes: {
                    color,
                    level,
                    size,
                    hue
                  },
                  html: slotContent
                });
                action();
                await page.waitForChanges();

                await page.evaluate(() => {
                  const element = document.querySelector('osds-text') as HTMLElement;
                  return { width: element.clientWidth, height: element.clientHeight };
                });
                await page.setViewport({ width: 600, height:600 });
                const results = await page.compareScreenshot('text', { fullPage: false });
                expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
              });

            });
          });
        });
      });
    });
  });
});
