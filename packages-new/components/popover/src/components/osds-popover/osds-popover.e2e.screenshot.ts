import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-popover', () => {
  let page: E2EPage;
  let anchor: E2EElement;

  async function setup() {
    page = await newE2EPage();

    await page.setContent(`
      <osds-popover>
          <span slot="popover-trigger">
            <osds-text>[Trigger Text]</osds-text>
          </span>
        <osds-popover-content>
          <span slot="popover-header">My popover title</span>
          <osds-text>Lorem ipsum dolor sit amet</osds-text>
          <span slot="popover-footer">
            <osds-button>Dismiss</osds-button>
            <osds-button>Action</osds-button>
          </span>
        </osds-popover-content>
      </osds-popover>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    anchor = await page.find('[slot="popover-trigger"]');
  }

  const screenshotActions = [
    {
      actionDescription: 'no action',
      action: () => { /* nothing */ },
    },
    {
      actionDescription: 'surface visible',
      action: () => anchor.click(),
    },
  ];

  describe('screenshots', () => {
    screenshotActions.forEach(({ actionDescription, action }) => {
      it(actionDescription, async () => {
        await setup();
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-popover') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('menu', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});
