import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsToggleAttributes,
  odsToggleDefaultAttributes
} from '@ovhcloud/ods-core';
import {
  odsCombinationName,
  OdsCreateAttributes, odsCreateCombinationContext,
  odsCreateCombinationPropertyAction,
  OdsStringAttributes2Str,
  odsToggleBaseAttributes
} from '@ovhcloud/ods-testing';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

describe('e2e:osds-toggle', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}}: { attributes?: Partial<OdsToggleAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsToggleAttributes = OdsCreateAttributes(attributes, odsToggleBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsToggleAttributes>(minimalAttributes, odsToggleDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <style>
      :root {
        --ods-toggle-transition-slider: none;
        --ods-toggle-animation-checking-shadow: none;
      }
      </style>
      <osds-toggle ${OdsStringAttributes2Str(stringAttributes)}>
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
            odsCreateCombinationContext('color',[OdsThemeColorIntent.info]).forEach((color) => {
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
