import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsPasswordAttributes,
  OdsComponentAttributes2StringAttributes,
  odsPasswordDefaultAttributes,
  OdsInputSizeList,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsPasswordBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming/src';

describe('e2e:osds-password', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({
                         attributes = {},
                         onPage,
                       }: { attributes?: Partial<OdsPasswordAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsPasswordAttributes = OdsCreateAttributes(attributes, odsPasswordBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPasswordAttributes>(minimalAttributes, odsPasswordDefaultAttributes);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`<osds-password ${OdsStringAttributes2Str(stringAttributes)}></osds-password>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-password');
  }

  const stopSpinnerAnimation = async (page: E2EPage) => {
    await page.evaluate(() => {
      const spinnerEl = document.querySelector('osds-password')?.shadowRoot?.querySelector('osds-input')?.shadowRoot?.querySelector('osds-spinner')?.shadowRoot?.querySelector('.spinner > svg') as HTMLElement;
      spinnerEl.style.setProperty('animation', 'none');
    });
  }

  const screenshotActions = [
    {
      // Will display the default input
      actionDescription: 'no action',
      action: () => {
        // nothing
      },
    }, {
      // Will display the input with a cross icon to clear the input
      actionDescription: 'clearable',
      action: () => el.setProperty('clearable', true),
    }, {
      // Will display the input taking full width
      actionDescription: 'flex',
      action: () => el.setProperty('flex', true),
    }, {
      // Will contrast the colors of the input
      actionDescription: 'contrasted',
      action: () => el.setProperty('contrasted', true),
    }, {
      // Will display the input with its type password
      actionDescription: 'masked',
      action: () => el.setProperty('masked', true),
    }, {
      // Will display the input with its text
      actionDescription: 'not masked',
      action: () => el.setProperty('masked', false),
    }, {
      // Will display the input with a spinner
      actionDescription: 'loading',
      action: async () => {
        await Promise.all([
          el.setProperty('loading', true),
          page.waitForChanges()
        ]);

        await stopSpinnerAnimation(page);
      },
    }, {
      // Will display a disabled input with contrasted colors
      actionDescription: 'disabled',
      action: () => el.setProperty('disabled', true),
    }, {
      // Will display a disabled input with a spinner
      actionDescription: 'loading & disabled',
      action: async () => {
        await Promise.all([
          el.setProperty('disabled', true),
          el.setProperty('loading', true),
          page.waitForChanges()
        ]);

        await stopSpinnerAnimation(page);
      },
    }, {
      // Will display a disabled input with contrasted colors
      actionDescription: 'contrasted & disabled',
      action: () => {
        el.setProperty('contrasted', true);
        el.setProperty('disabled', true);
      },
    }, {
      // Will display a disabled input with contrasted colors
      actionDescription: 'disabled & clearable',
      action: () => {
        el.setProperty('disabled', true);
        el.setProperty('clearable', true);
      },
    }, {
      // Will display an input with an error and an icon
      actionDescription: 'placeholder',
      action: () => el.setProperty('placeholder', 'placeholder'),
    },
  ];

  describe('screenshots', () => {
    screenshotActions.forEach(({ actionDescription, action }) => {
      OdsThemeColorIntentList.forEach((color) => {
        OdsInputSizeList.forEach((size) => {
          const name = [color, size, actionDescription].join(', ');
          it(name, async () => {
            await setup({
              attributes: {
                color,
                size
              },
            });
            action();
            await page.waitForChanges();

            await page.evaluate(() => {
              const element = document.querySelector('osds-password') as HTMLElement;
              return { width: element.clientWidth, height: element.clientHeight };
            });
            await page.setViewport({ width: 600, height:600 });

            const results = await page.compareScreenshot('password', { fullPage: false, omitBackground: true });

            expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
          });
        });
      });
    });
  });
});
