import type { OdsMessageAttribute } from './interfaces/attributes';
import type { E2EPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_MESSAGE_TYPES } from './constants/message-type';



describe('e2e:osds-message', () => {
  let page: E2EPage;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsMessageAttribute>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsMessageAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`<osds-message ${odsStringAttributes2Str(stringAttributes)}></osds-message>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
  }

  describe('screenshots', () => {
    [false, true].forEach((contrasted) => {
      [false, true].forEach((removable) => {
        [undefined, ODS_THEME_COLOR_INTENT.primary].forEach((color) => {
          ODS_MESSAGE_TYPES.forEach((type) => {
            [undefined, ODS_ICON_NAME.CHECK].forEach((icon) => {
              it([color, type, icon, contrasted && 'contrasted', removable && 'removable'].join(', '), async() => {
                await setup({
                  attributes: {
                    color,
                    type,
                    icon,
                    contrasted,
                    removable,
                  },
                  html: 'Message',
                });
                await page.waitForChanges();

                await page.evaluate(() => {
                  const element = document.querySelector('osds-message') as HTMLElement;
                  return { width: element.clientWidth, height: element.clientHeight };
                });
                await page.setViewport({ width: 600, height:600 });
                const results = await page.compareScreenshot('message', { fullPage: false, omitBackground: true });
                expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
              });
            });
          });
        });
      });
    });
  });
});
