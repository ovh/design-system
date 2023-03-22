import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsPopoverAttributes, OdsComponentAttributes2StringAttributes, odsPopoverDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsPopoverBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-popover', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsPopoverAttributes> }) {
    const minimalAttributes: OdsPopoverAttributes = OdsCreateAttributes(attributes, odsPopoverBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPopoverAttributes>(minimalAttributes, odsPopoverDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-popover ${OdsStringAttributes2Str(stringAttributes)}></osds-popover>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-popover');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    // E2E testing
  });

});
