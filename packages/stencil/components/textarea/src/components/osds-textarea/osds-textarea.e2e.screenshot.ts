import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsTextAreaAttributes,
  odsTextAreaDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStringAttributes2Str, OdsCreateAttributes, odsTextAreaBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming/src';

describe('e2e:osds-textarea', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({
                         attributes = {},
                         onPage,
                       }: { attributes?: Partial<OdsTextAreaAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsTextAreaAttributes = OdsCreateAttributes(attributes, odsTextAreaBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTextAreaAttributes>(minimalAttributes, odsTextAreaDefaultAttributes);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-textarea ${OdsStringAttributes2Str(stringAttributes)}>
      </osds-textarea>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-textarea');
  }

  const screenshotActions = [
    {
      actionDescription: 'no action',
      action: () => {
        // noop
      },
    }, {
      actionDescription: 'contrasted',
      action: () => el.setProperty('contrasted', true),
    }, {
      actionDescription: 'disabled',
      action: () => el.setProperty('disabled', true),
    }, {
      actionDescription: 'contrasted and disabled',
      action: () => {
        el.setProperty('contrasted', true);
        el.setProperty('disabled', true);
      },
    }, {
      actionDescription: 'error',
      action: () => el.setProperty('error', true),
    }, {
      actionDescription: 'placeholder',
      action: () => el.setProperty('placeholder', 'placeholder'),
    },
  ];

  const screenshotBehaviours = [
    {
      behaviourDescription: 'no behaviour',
      behaviour: () => {
        // noop
      },
    }, {
      behaviourDescription: 'hover',
      behaviour: () => el.hover(),
    }, {
      behaviourDescription: 'focus',
      behaviour: () => el.focus(),
    },
  ];

  describe('screenshots', () => {
    // Todo : add active behaviour on top of hover and focus
    screenshotActions.forEach(({ actionDescription, action }) => {
      screenshotBehaviours.forEach(({ behaviourDescription, behaviour }) => {
        OdsThemeColorIntentList.forEach((color) => {
          it([color, actionDescription, behaviourDescription].join(', '), async () => {
            await setup({
              attributes: {
                color
              },
            });
            action();
            behaviour();
            await page.waitForChanges();

            await page.evaluate(() => {
              const element = document.querySelector('osds-textarea') as HTMLElement;
              return { width: element.clientWidth, height: element.clientHeight };
            });
            await page.setViewport({ width: 600, height:600 });
            const results = await page.compareScreenshot('textarea', { fullPage: false, omitBackground: true });
            expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
          });
        });
      });
    });
  });
});



