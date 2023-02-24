import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsTileAttributes,
  OdsTileSizeList,
  OdsTileVariantList,
  odsTileDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsTileBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming/src';

describe('e2e:osds-tile', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({
                         attributes = {},
                         html = ``,
                         onPage
                       }: { attributes?: Partial<OdsTileAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsTileAttributes = OdsCreateAttributes(attributes, odsTileBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTileAttributes>(minimalAttributes, odsTileDefaultAttributes);

    page = await newE2EPage();
    onPage && await onPage({ page });

    await page.setContent(`
      <osds-tile ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-tile>
    `);
    el = await page.find('osds-tile');
  }

  const screenshotActions = [
    {
      actionDescription: "no action",
      action: () => {}
    }, {
      actionDescription: "disabled",
      action: () => el.setProperty("disabled", true)
    }, {
      actionDescription: "interactive",
      action: () => el.setProperty("interactive", true)
    },
    // TODO: don't test screenshot animated screen without freeze it
    // {
    //   actionDescription: "checking",
    //   action: () => el.setProperty("checking", true)
    // },
    {
      actionDescription: "checked",
      action: () => el.setProperty("checked", true)
    }
  ];

  describe('screenshots', () => {
    screenshotActions.forEach(({ actionDescription, action }) => {
        OdsThemeColorIntentList.forEach((color) => {
          OdsTileSizeList.forEach((size) => {
            OdsTileVariantList.forEach((variant) => {
            it([color, size, variant, actionDescription].join(', '), async () => {
              await setup({
                attributes: {
                  color,
                  size,
                  variant,
                }
              });
              el.removeAttribute('checking');
              action();
              await page.waitForChanges();
              const results = await page.compareScreenshot('tile', { fullPage: false, omitBackground: true });
              expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
            });
          });
        });
      });
    });

    it('should not be a rounded tile screenshot', async () => {
      await setup({ attributes: {}, html: `` });
      el.removeAttribute('rounded');
      await page.waitForChanges();
      const results = await page.compareScreenshot('not rounded tile', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });
  });
});



