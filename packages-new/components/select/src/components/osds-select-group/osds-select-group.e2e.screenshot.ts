import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-select-group', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ onPage }: { onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-select-group>
        My-group
      </osds-select-group>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-select-group');
  }

  const screenshotActions = [
    {
      actionDescription: 'no action',
      action: () => {
        // noop
      },
    }, {
      actionDescription: 'displays osds-text',
      action: () => {
        el.innerHTML = "<osds-text>My group title</osds-text>";
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
          const element = document.querySelector('osds-select-group') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('select-group', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});
