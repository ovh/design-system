import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsMenuAttributes,
  odsMenuDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsStringAttributes2Str } from '@ovhcloud/ods-testing';
import {
  OdsMenuCreateAttributes,
} from '@ovhcloud/ods-testing';

describe('e2e:osds-menu', () => {
  let page: E2EPage;
  let el: E2EElement;
  let menuTitleSlot: E2EElement;
  let menuTitleContent: E2EElement;
  let menuItemsSlot: E2EElement;
  let menuItemsSlotContent: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsMenuAttributes>, html?: string }) {
    const minimalAttributes: OdsMenuAttributes = OdsMenuCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsMenuAttributes>(minimalAttributes, odsMenuDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-menu ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-menu>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-menu');
    menuTitleSlot = await page.find('osds-menu >>> slot[name="menu-title"]');
    menuTitleContent = await page.find('[slot="menu-title"]');
    menuItemsSlot = await page.find('osds-menu >>> slot:not([name])');
    menuItemsSlotContent = await page.find('osds-menu >>> ocdk-surface');
  }

  it('should render', async () => {
    await setup({ attributes: { } });
    expect(el).not.toBeNull();
  });

  describe('menu title slot', () => {
    it('should have a slot', async () => {
      await setup({ attributes: { }, html: `` });
      expect(menuTitleSlot).not.toBeNull();
    });

    it('should display a menu title as a ODS button', async () => {
      const button = `<osds-button slot="menu-title" color="primary">Button</osds-button>`;
      await setup({ attributes: { }, html: button });
      expect(menuTitleContent.outerHTML).toBe(button);
    });

    it('should display a ODS icon in the title', async () => {
      const icon = `<osds-icon name="home" size="xs"></osds-icon>`;
      const button = `<osds-button slot="menu-title" color="primary">Button ${icon}</osds-button>`;
      await setup({ attributes: { }, html: button });
      expect(menuTitleContent.outerHTML).toContain(icon);
    });

    it('should display a menu title as a ODS icon', async () => {
      const icon = `<osds-icon slot="menu-title" name="home" size="xs"></osds-icon>`;
      await setup({ attributes: { }, html: icon });
      expect(menuTitleContent.outerHTML).toBe(icon);
    });

    it('should change the display of the surface when clicked on', async () => {
      const button = `<osds-button slot="menu-title" color="primary">Button</osds-button>`;
      const surface = `<osds-menu-item><osds-link href="#" color="primary">Link</osds-link></osds-menu-item>`;
      await setup({ attributes: { }, html: button + surface });
      await menuTitleContent.click();
      expect(menuItemsSlotContent).toHaveClass('ocdk-surface--open')
    });

    xit('should change the display of the surface when enter is pressed', async () => {
      const button = `<osds-button slot="menu-title" color="primary">Button</osds-button>`;
      const surface = `<osds-menu-item><osds-link href="#" color="primary">Link</osds-link></osds-menu-item>`;
      await setup({ attributes: { }, html: button + surface });
      await menuTitleContent.press('Enter');
      expect(menuItemsSlotContent).toHaveClass('ocdk-surface--open')
    });

    xit('should change the display of the surface when space is pressed', async () => {
      const button = `<osds-button slot="menu-title" color="primary">Button</osds-button>`;
      const surface = `<osds-menu-item><osds-link href="#" color="primary">Link</osds-link></osds-menu-item>`;
      await setup({ attributes: { }, html: button + surface });
      await page.focus('[slot="menu-title"]');
      await page.keyboard.press('Space');
      expect(menuItemsSlotContent).toHaveClass('ocdk-surface--open')
    });
  });

  describe('menu items slot', () => {
    it('should have a slot', async () => {
      await setup({ attributes: { }, html: `` });
      expect(menuItemsSlot).not.toBeNull();
    });

    it('should hide the surface when a click happened outside of the surface', async () => {
      const button = `<osds-button slot="menu-title" color="primary">Button</osds-button>`;
      const surface = `<osds-menu-item><osds-link href="#" color="primary">Link</osds-link></osds-menu-item>`;
      await setup({ attributes: { }, html: button + surface });
      await menuTitleContent.click();
      await el.click();
      expect(menuItemsSlotContent).not.toHaveClass('ocdk-surface--open')
    });

    it('should display a ODS Divider', async () => {
      const button = `<osds-button slot="menu-title" color="primary">Button</osds-button>`;
      const divider = `<osds-divider color="text" separator="true"></osds-divider>`;
      await setup({ attributes: { }, html: button + divider });
      expect(el.innerHTML).toContain(divider);
    });
  });
});
