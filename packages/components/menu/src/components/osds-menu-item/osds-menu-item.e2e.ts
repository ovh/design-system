import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-menu-item', () => {
  let page: E2EPage;
  let el: E2EElement;
  let menuItemSlot: E2EElement;

  async function setup({ html = '' }: { html?: string }) {
    page = await newE2EPage();
    await page.setContent(`<osds-menu-item>${html}</osds-menu-item>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-menu-item');
    menuItemSlot = await page.find('osds-menu-item >>> slot:not([name])');
  }

  it('should render', async() => {
    await setup({ });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('menu item slot', () => {
    it('should have a slot', async() => {
      await setup({ html: '' });
      expect(menuItemSlot).not.toBeNull();
    });

    it('should display a menu item as a ODS button', async() => {
      const button = '<osds-button color="primary" tabindex="0" size="md" type="button" variant="flat" class="hydrated" text-align="center">Button</osds-button>';
      await setup({ html: button });
      expect(el.innerHTML).toBe(button);
    });
  });
});
