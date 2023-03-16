import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsPopoverContentAttributes,
  odsPopoverContentDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsStringAttributes2Str,
  OdsPopoverContentCreateAttributes
} from '@ovhcloud/ods-testing';

xdescribe('e2e:osds-popover-content', () => {
  let page: E2EPage;
  let el: E2EElement;
  let menuItemSlot: E2EElement

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsPopoverContentAttributes>, html?: string }) {
    const minimalAttributes: OdsPopoverContentAttributes = OdsPopoverContentCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPopoverContentAttributes>(minimalAttributes, odsPopoverContentDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(``);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-popover-content');
  }

  it('should render', async () => {
    await setup({ attributes: { } });
    expect(el).not.toBeNull();
  });

});
