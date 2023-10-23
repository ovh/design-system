import {E2EElement, E2EPage, newE2EPage} from '@stencil/core/testing';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';

describe('e2e:osds-menu', () => {
  let page: E2EPage;
  let el: E2EElement;
  let anchor: E2EElement;

  async function setup({onPage}: { attributes?: Partial<DEFAULT_ATTRIBUTE>, html?: string, onPage?: ({page}: { page: E2EPage }) => void } = {}) {
    page = await newE2EPage();

    onPage && onPage({page});

    await page.setContent(`
      <osds-menu>
        <osds-button slot="menu-title" color="primary">Button <osds-icon name='home' size='xs'></osds-icon></osds-button>
        <osds-menu-group>
          <osds-text>Group 1</osds-text>
        </osds-menu-group>
        <osds-menu-item>
          <osds-button size="sm" href="#" variant="ghost">Button </osds-button>
        </osds-menu-item>
        <osds-divider color="text" separator="true"></osds-divider>
        <osds-menu-group>
          <osds-text>Group 2</osds-text>
        </osds-menu-group>
        <osds-menu-item>
          <osds-button size="sm" href="#" variant="ghost">Button </osds-button>
        </osds-menu-item>
      </osds-menu>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-menu');
    anchor = await page.find('[slot="menu-title"]');
  }

  const screenshotActions = [
    {
      actionDescription: 'no action',
      action: () => { /* nothing */ },
    },
    {
      actionDescription: 'disabled',
      action: () => el.setProperty('disabled', true),
    },
    {
      actionDescription: 'surface visible',
      action: () => anchor.click(),
    },
    {
      actionDescription: 'hovered',
      action: () => anchor.hover(),
    },
  ];

  describe('screenshots', () => {
    screenshotActions.forEach(({actionDescription, action}) => {
      it(actionDescription, async() => {
        await setup({});
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-menu') as HTMLElement;
          return {width: element.clientWidth, height: element.clientHeight};
        });
        await page.setViewport({width: 600, height:600});
        const results = await page.compareScreenshot('menu', {fullPage: false, omitBackground: true});
        expect(results).toMatchScreenshot({allowableMismatchedRatio: 0});
      });
    });
  });
});
