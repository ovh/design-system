import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsChipAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { ODS_CHIP_SIZES } from './constants/chip-size';
import { ODS_CHIP_VARIANTS } from './constants/chip-variant';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-chip', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsChipAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsChipAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-chip ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-chip>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-chip');
  }

  describe('screenshots', () => {
    // Todo : add active behaviour on top of hover and focus
    [
      () => {},
      () => el.setProperty('contrasted', true),
      () => el.setProperty('disabled', true),
      () => {el.setProperty('contrasted', true); el.setProperty('disabled', true)}
    ].forEach((action) => {
      [
        () => {},
        () => {el.setProperty('selectable', true); el.hover()},
        () => {el.setProperty('selectable', true); el.focus()}
      ].forEach((behaviour) => {
        ODS_THEME_COLOR_INTENTS.forEach((color) => {
          ODS_CHIP_SIZES.forEach((size) => {
            ODS_CHIP_VARIANTS.forEach((variant) => {
              it([color, variant, size, action, behaviour].join(', '), async () => {
                await setup({
                  attributes: {
                    color,
                    size,
                    variant,
                  },
                  html: `Chip`
                });
                action();
                await behaviour();
                await page.waitForChanges();

                await page.evaluate(() => {
                  const element = document.querySelector('osds-chip') as HTMLElement;
                  return { width: element.clientWidth, height: element.clientHeight };
                });
                await page.setViewport({ width: 600, height:600 });
                const results = await page.compareScreenshot('chip', { fullPage: false, omitBackground: true });
                expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
              });
            });
          });
        });
      });
    });
  });
});
