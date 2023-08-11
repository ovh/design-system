import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsCheckboxButtonAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_CHECKBOX_BUTTON_SIZES } from './constants/ods-checkbox-button-size';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';

describe('e2e:osds-checkbox-button', () => {
  let page: E2EPage;
  let el: E2EElement;
  let mainEl: E2EElement;

  async function setup({
                         attributes = {},
                         html = ``,
                         onPage
                       }: { attributes?: Partial<OdsCheckboxButtonAttribute>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCheckboxButtonAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-checkbox-button ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-checkbox-button>
    `);
    el = await page.find('osds-checkbox-button');
    mainEl = await page.find('osds-checkbox-button >>> .checkbox-button');
  }

  const noAction = {
    actionDescription: "no action",
    action: () => {}
  }

  const checkedAction = {
    actionDescription: "checked",
    action: () => el.setProperty("checked", true)
  };

  const indeterminateAction = {
    actionDescription: "indeterminate",
    action: () => el.setProperty("indeterminate", true)
  };

  const interactiveAction = {
    actionDescription: "interactive",
    action: () => el.setProperty("interactive", true)
  };

  const hasFocusAction = {
    actionDescription: "hasFocus",
    action: () => el.setProperty("hasFocus", true)
  }

  const screenshotActions = [
    noAction, {
      actionDescription: "disabled",
      action: () => el.setProperty("disabled", true)
    }, {
      actionDescription: "hover",
      action: () => el.setProperty("hover", true)
    }, {
      actionDescription: "focus",
      action: () => mainEl.setProperty("focus", true)
    },
    hasFocusAction,
    checkedAction,
    indeterminateAction,
  ];

  describe('screenshots', () => {
    // Sizes & state (checked, indeterminate)
    [noAction, checkedAction, indeterminateAction].forEach(({ actionDescription, action }) => {
      ODS_CHECKBOX_BUTTON_SIZES.forEach((size) => {
          it([size, actionDescription].join(', '), async () => {
            await setup({
              attributes: {
                size,
              }
            });
            el.removeAttribute('checking');
            action();
            await page.waitForChanges();
            const results = await page.compareScreenshot('checkbox-button', { fullPage: false, omitBackground: true });
            expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
        });
      });
    });

    // interactive & hasFocus
    [noAction, hasFocusAction].forEach(({ actionDescription, action }) => {
      it([actionDescription, interactiveAction.actionDescription].join(', '), async () => {
        await setup({});
        el.removeAttribute('checking');
        action();
        interactiveAction.action();
        await page.waitForChanges();
        const results = await page.compareScreenshot('checkbox-button', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      });
    });

    // Colors & state (hover, focus, hasFocus, disabled, checked, indeterminate)
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
            const results = await page.compareScreenshot('checkbox-button', { fullPage: false, omitBackground: true });
            expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
        });
      });
    });
  });
});
