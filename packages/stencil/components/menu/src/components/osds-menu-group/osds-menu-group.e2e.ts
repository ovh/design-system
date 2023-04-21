import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsMenuGroupAttributes,
  odsMenuGroupDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsStringAttributes2Str,
  OdsMenuGroupCreateAttributes
} from '@ovhcloud/ods-testing';

xdescribe('e2e:osds-menu-group', () => {
  let page: E2EPage;
  let el: E2EElement;
  let menuGroupSlot: E2EElement

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsMenuGroupAttributes>, html?: string }) {
    const minimalAttributes: OdsMenuGroupAttributes = OdsMenuGroupCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsMenuGroupAttributes>(minimalAttributes, odsMenuGroupDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-menu-group ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-menu-group>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-menu-group');
    menuGroupSlot = await page.find('osds-menu-group >>> slot:not([name])');
  }

  it('should render', async () => {
    await setup({ attributes: { } });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('menu group slot', () => {
    it('should have a slot', async () => {
      await setup({ attributes: {}, html: `` });
      expect(menuGroupSlot).not.toBeNull();
    });

    it('should display a menu group as a ODS text', async () => {
      const text = `<osds-text>Menu group</osds-text>`;
      await setup({ attributes: { }, html: text });
      expect(el.innerHTML).toBe(text);
    });
  });
});
