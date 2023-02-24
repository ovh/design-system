import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

import {
  OdsSelectAttributes,
} from '@ovhcloud/ods-core';

describe('e2e:osds-select', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({
                         onPage,
                       }: { attributes?: Partial<OdsSelectAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-select>
        <span slot="placeholder">Select country</span>
        <osds-select-group>My group title</osds-select-group>
        <osds-select-option>Value 1</osds-select-option>
        <osds-select-option>Value 2</osds-select-option>
        <osds-select-option>Value 3</osds-select-option>
      </osds-select>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-select');
  }

  const screenshotActions = [
    {
      actionDescription: 'no action',
      action: () => {
        // noop
      },
    },
  ];

  describe('screenshots', () => {
    // Todo : add active behaviour on top of hover and focus
    screenshotActions.forEach(({ actionDescription, action }) => {
      it(actionDescription, async () => {
        await setup({});
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-select') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('select', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});
