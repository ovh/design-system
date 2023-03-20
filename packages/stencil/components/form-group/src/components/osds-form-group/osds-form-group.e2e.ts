import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsFormGroupAttributes, OdsComponentAttributes2StringAttributes, odsFormGroupDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsFormGroupBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-form-group', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsFormGroupAttributes> }) {
    const minimalAttributes: OdsFormGroupAttributes = OdsCreateAttributes(attributes, odsFormGroupBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsFormGroupAttributes>(minimalAttributes, odsFormGroupDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-form-group ${OdsStringAttributes2Str(stringAttributes)}></osds-form-group>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-form-group');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    // E2E testing
  });

});
