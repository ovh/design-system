import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsClipboardAttributes, OdsComponentAttributes2StringAttributes, odsClipboardDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsClipboardBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-clipboard', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsClipboardAttributes> }) {
    const minimalAttributes: OdsClipboardAttributes = OdsCreateAttributes(attributes, odsClipboardBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsClipboardAttributes>(minimalAttributes, odsClipboardDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-clipboard ${OdsStringAttributes2Str(stringAttributes)}></osds-clipboard>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-clipboard');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    // E2E testing
  });

});
