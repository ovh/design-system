import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

import {
  OdsComponentAttributes2StringAttributes,
  OdsMenuItemAttributes,
  odsMenuItemDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsMenuItemCreateAttributes,
  OdsStringAttributes2Str,
} from '@ovhcloud/ods-testing';

describe('e2e:osds-menu-item', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({
                         attributes = {},
                         onPage,
                       }: { attributes?: Partial<OdsMenuItemAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsMenuItemAttributes = OdsMenuItemCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsMenuItemAttributes>(minimalAttributes, odsMenuItemDefaultAttributes);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-menu-item ${OdsStringAttributes2Str(stringAttributes)}>
        <osds-button size="sm" href="#" variant="ghost">Action</osds-button>
      </osds-menu-item>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-menu-item');
  }

  const screenshotActions = [
    {
      actionDescription: 'no action',
      action: () => {
        // noop
      },
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
        it([actionDescription, behaviourDescription].join(', '), async () => {
          await setup({});
          action();
          await behaviour();
          await page.waitForChanges();

          await page.evaluate(() => {
            const element = document.querySelector('osds-menu-item') as HTMLElement;
            return { width: element.clientWidth, height: element.clientHeight };
          });
          await page.setViewport({ width: 600, height:600 });
          const results = await page.compareScreenshot('menu-item', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    });
  });
});
