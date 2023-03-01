import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

import { OdsPaginationAttributes } from '@ovhcloud/ods-core';

describe('e2e:osds-pagination', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ onPage }: { attributes?: Partial<OdsPaginationAttributes>; html?: string; onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-pagination>
        <span slot="placeholder">Pagination country</span>
        <osds-pagination-group>My group title</osds-pagination-group>
        <osds-pagination-option>Value 1</osds-pagination-option>
        <osds-pagination-option>Value 2</osds-pagination-option>
        <osds-pagination-option>Value 3</osds-pagination-option>
      </osds-pagination>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-pagination');
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
          const element = document.queryPaginationor('osds-pagination') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height: 600 });
        const results = await page.compareScreenshot('select', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});
