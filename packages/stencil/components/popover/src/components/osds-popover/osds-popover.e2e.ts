import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsPopoverAttributes,
  odsPopoverDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsStringAttributes2Str,
  OdsPopoverCreateAttributes
} from '@ovhcloud/ods-testing';

xdescribe('e2e:osds-popover', () => {
  let page: E2EPage;
  let el: E2EElement;
  let menuItemSlot: E2EElement

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsPopoverAttributes>, html?: string }) {
    const minimalAttributes: OdsPopoverAttributes = OdsPopoverCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPopoverAttributes>(minimalAttributes, odsPopoverDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(``);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-popover');
  }

  it('should render', async () => {
    await setup({ attributes: { } });
    expect(el).not.toBeNull();
  });

});
