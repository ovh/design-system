import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsTextAttribute } from './interfaces/attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_HUE, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { newE2EPage } from '@stencil/core/testing';
import { ODS_TEXT_LEVELS } from './constants/text-level';
import { ODS_TEXT_SIZES } from './constants/text-size';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

const slotContent = 'Text';

describe('e2e:osds-text', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsTextAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTextAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-text ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-text>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-text');
  }

  describe('screenshots', () => {
    [() => {}, () => el.setProperty('contrasted', true)].forEach((action) => {
      [ODS_THEME_COLOR_HUE._100, ODS_THEME_COLOR_HUE._500].forEach((hue) => {
        ODS_THEME_COLOR_INTENTS.forEach((color) => {
          ODS_TEXT_SIZES.forEach((size) => {
            ODS_TEXT_LEVELS.forEach((level) => {
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
