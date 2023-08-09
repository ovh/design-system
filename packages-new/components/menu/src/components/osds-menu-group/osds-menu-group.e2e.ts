import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-menu-group', () => {
  let page: E2EPage;
  let el: E2EElement;
  let menuGroupSlot: E2EElement

  async function setup({ html = `` }: { html?: string }) {
    page = await newE2EPage();
    await page.setContent(`<osds-menu-group>${html}</osds-menu-group>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-menu-group');
    menuGroupSlot = await page.find('osds-menu-group >>> slot:not([name])');
  }

  it('should render', async () => {
    await setup({ });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('menu group slot', () => {
    it('should have a slot', async () => {
      await setup({ html: `` });
      expect(menuGroupSlot).not.toBeNull();
    });

    it('should display a menu group as a ODS text', async () => {
      const text = `<osds-text color="default" size="100" level="body" hue="500" class="hydrated" style="--osds-text-color-specific-hue: var(--ods-color-default-500);">Menu group</osds-text>`;
      await setup({ html: text });
      expect(el.innerHTML).toBe(text);
    });
  });
});
