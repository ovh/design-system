import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsDividerAttribute } from './interfaces/attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { newE2EPage } from '@stencil/core/testing';
import { ODS_DIVIDER_SIZES } from './constants/divider-size';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';


describe('e2e:osds-divider', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsDividerAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDividerAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
    <div class="container">
      <div style="background: black;height: 10px"></div>
      <osds-divider ${odsStringAttributes2Str(stringAttributes)}></osds-divider>
      <div style="background: black;height: 10px"></div>
    </div>
`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-divider');
  }

  describe('screenshots', () => {
    [() => {}, () => el.setProperty('separator', true), () => {el.setProperty('contrasted', true); el.setProperty('separator', true)}].forEach((action) => {
      ODS_THEME_COLOR_INTENTS.forEach((color) => {
        ODS_DIVIDER_SIZES.forEach((size) => {
          it([color, size, action].join(', '), async () => {
            await setup({
              attributes: {
                color,
                size,
              }
            });
            action();
            await page.waitForChanges();

            await page.evaluate(() => {
              const element = document.querySelector('osds-divider') as HTMLElement;
              return { width: element.clientWidth, height: element.clientHeight };
            });
            await page.setViewport({ width: 600, height:600 });
            const results = await page.compareScreenshot('divider', { fullPage: false });
            expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
          });
        });
      });
    });
  });
});
