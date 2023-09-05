import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsToggleAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsCombinationName, odsCreateCombinationContext, odsCreateCombinationPropertyAction, odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-toggle', () => {
  const baseAttributes = {
    contrasted: false,
    checked: false,
    checking: false,
    color: ODS_THEME_COLOR_INTENT.primary,
    disabled: false,
    interactive: true
  };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsToggleAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsToggleAttribute>({ ...baseAttributes, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <style>
      :root {
        --ods-toggle-transition-slider: none;
        --ods-toggle-animation-checking-shadow: none;
      }
      </style>
      <osds-toggle ${odsStringAttributes2Str(stringAttributes)}>
      </osds-toggle>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-toggle');
  }

  const createPropAction = (p: string, v: unknown) =>
    odsCreateCombinationPropertyAction(p, v, (property, value) => el.setProperty(property, value));

  describe('screenshots', () => {
    // Todo : add active behaviour on top of hover and focus
    createPropAction('contrasted', true).forEach((contrast) => {
      createPropAction('disabled', true).forEach((disabled) => {
        createPropAction('checked', true).forEach((checked) => {
          createPropAction('checking', true).forEach((checking) => {
            odsCreateCombinationContext('color',[ODS_THEME_COLOR_INTENT.info]).forEach((color) => {
              it(odsCombinationName([color, contrast, disabled, checked, checking]), async () => {
                await setup({
                  attributes: {
                    color: color.value,
                  }
                });
                contrast.action();
                disabled.action();
                checked.action();
                checking.action();
                await page.waitForChanges();

                await page.evaluate(() => {
                  const element = document.querySelector('osds-toggle') as HTMLElement;
                  return { width: element.clientWidth + 16, height: element.clientHeight + 16 };
                });
                await page.setViewport({ width: 600, height:600 });
                const results = await page.compareScreenshot('toggle', { fullPage: false, omitBackground: true });
                expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
              });
            });
          });
        });
      });
    });
  });
});
