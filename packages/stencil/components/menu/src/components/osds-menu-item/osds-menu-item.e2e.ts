import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsMenuItemAttributes,
  odsMenuItemDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsStringAttributes2Str,
  OdsMenuItemCreateAttributes
} from '@ovhcloud/ods-testing';

xdescribe('e2e:osds-menu-item', () => {
  let page: E2EPage;
  let el: E2EElement;
  let menuItemSlot: E2EElement

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsMenuItemAttributes>, html?: string }) {
    const minimalAttributes: OdsMenuItemAttributes = OdsMenuItemCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsMenuItemAttributes>(minimalAttributes, odsMenuItemDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-menu-item ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-menu-item>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-menu-item');
    menuItemSlot = await page.find('osds-menu-item >>> slot:not([name])');
  }

  it('should render', async () => {
    await setup({ attributes: { } });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('menu item slot', () => {
    it('should have a slot', async () => {
      await setup({ attributes: {}, html: `` });
      expect(menuItemSlot).not.toBeNull();
    });

    it('should display a menu item as a ODS button', async () => {
      const button = `<osds-button color="primary">Button</osds-button>`;
      await setup({ attributes: { }, html: button });
      expect(el.innerHTML).toBe(button);
    });
  });
});
