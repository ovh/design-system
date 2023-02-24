import {
  OdsComponentAttributes2StringAttributes,
  OdsRadioButtonAttributes,
  OdsRadioButtonSizeList,
  odsRadioButtonDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsThemeColorIntentList,
} from '@ovhcloud/ods-theming';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsRadioButtonBaseAttributes,
} from '@ovhcloud/ods-testing';
import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-radio-button', () => {
  let page: E2EPage;
  let el: E2EElement;
  let mainEl: E2EElement;

  async function setup({
                         attributes = {},
                         html = ``,
                         onPage
                       }: { attributes?: Partial<OdsRadioButtonAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsRadioButtonAttributes = OdsCreateAttributes(attributes, odsRadioButtonBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsRadioButtonAttributes>(minimalAttributes, odsRadioButtonDefaultAttributes);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-radio-button ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-radio-button>
    `);
    el = await page.find('osds-radio-button');
    mainEl = await page.find('osds-radio-button >>> .radio-button');
  }

  const noAction = {
    actionDescription: "no action",
    action: () => {}
  };

  const checkedAction = {
    actionDescription: "checked",
    action: () => el.setProperty("checked", true)
  };

  const screenshotActions = [
    noAction, {
      actionDescription: "disabled",
      action: () => el.setProperty("disabled", true)
    }, {
      actionDescription: "hover",
      action: () => el.setProperty("hover", true)
    }, {
      actionDescription: "hasFocus",
      action: () => mainEl.setProperty("hasFocus", true)
    },
    checkedAction,
  ];

  describe('screenshots', () => {
    // Sizes & checked
    [noAction, checkedAction].forEach(({ actionDescription, action }) => {
        OdsRadioButtonSizeList.forEach((size) => {
          it([size, actionDescription].join(', '), async () => {
            await setup({
              attributes: {
                size,
              }
            });
            el.removeAttribute('checking');
            action();
            await page.waitForChanges();
            const results = await page.compareScreenshot('radio-button', { fullPage: false, omitBackground: true });
            expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
        });
      });
    });

    // Colors & state (hover, focus, disabled, checked)
    screenshotActions.forEach(({ actionDescription, action }) => {
        OdsThemeColorIntentList.forEach((color) => {
          it([color, actionDescription].join(', '), async () => {
            await setup({
              attributes: {
                color,
              }
            });
            el.removeAttribute('checking');
            action();
            await page.waitForChanges();
            const results = await page.compareScreenshot('radio-button', { fullPage: false, omitBackground: true });
            expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
        });
      });
    });
  });
});
