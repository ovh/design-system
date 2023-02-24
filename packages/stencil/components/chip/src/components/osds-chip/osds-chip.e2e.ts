import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsChipAttributes, OdsComponentAttributes2StringAttributes, odsChipDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsChipBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-chip', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsChipAttributes> }) {
    const minimalAttributes: OdsChipAttributes = OdsCreateAttributes(attributes, odsChipBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsChipAttributes>(minimalAttributes, odsChipDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-chip ${OdsStringAttributes2Str(stringAttributes)}></osds-chip>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-chip');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

});
