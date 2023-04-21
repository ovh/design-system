import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

import {
  OdsMenuGroupAttributes,
} from '@ovhcloud/ods-core';

describe('e2e:osds-menu-group', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ onPage }: { attributes?: Partial<OdsMenuGroupAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    page = await newE2EPage();

    onPage && onPage({ page });

    await page.setContent(`
      <osds-menu-group></osds-menu-group>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-menu-group');
  }

  const screenshotActions = [
    {
      actionDescription: 'displays osds-text',
      action: () => {
        el.innerHTML = "<osds-text>Group title</osds-text>";
      },
    },
  ];

  describe('screenshots', () => {
    screenshotActions.forEach(({ actionDescription, action }) => {
      it(actionDescription, async () => {
        await setup({});
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-menu-group') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('menu-group', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});
