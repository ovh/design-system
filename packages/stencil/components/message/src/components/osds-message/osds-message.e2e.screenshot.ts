import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsMessageAttributes,
  OdsMessageTypeList,
  odsMessageDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsMessageBaseAttributes } from '@ovhcloud/ods-testing';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';

describe('e2e:osds-message', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsMessageAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsMessageAttributes = OdsCreateAttributes(attributes, odsMessageBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsMessageAttributes>(minimalAttributes, odsMessageDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-message ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-message>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-message');
  }

  describe('screenshots', () => {
    [() => {}, () => el.setProperty('contrasted', true)].forEach((contrast) => {
      [() => {}, () => el.setProperty('removable', true)].forEach((remove) => {
        [undefined, OdsThemeColorIntent.primary].forEach((color) => {
          OdsMessageTypeList.forEach((type) => {
            [undefined, ODS_ICON_NAME.CHECK].forEach((icon) => {
              it([color, type, icon, contrast, remove].join(', '), async () => {
                await setup({
                  attributes: {
                    color,
                    type,
                    icon
                  },
                  html: `Message`
                });
                contrast();
                remove();
                await page.waitForChanges();

                await page.evaluate(() => {
                  const element = document.querySelector('osds-message') as HTMLElement;
                  return { width: element.clientWidth, height: element.clientHeight };
                });
                await page.setViewport({ width: 600, height:600 });
                const results = await page.compareScreenshot('message', { fullPage: false, omitBackground: true });
                expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
              });
            });
          });
        });
      });
    });
  });
});
