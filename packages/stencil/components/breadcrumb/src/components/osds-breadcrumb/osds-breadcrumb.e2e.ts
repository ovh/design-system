import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsBreadcrumbAttributes, OdsComponentAttributes2StringAttributes, odsBreadcrumbDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsBreadcrumbBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-breadcrumb', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsBreadcrumbAttributes> }) {
    const minimalAttributes: OdsBreadcrumbAttributes = OdsCreateAttributes(attributes, odsBreadcrumbBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbAttributes>(minimalAttributes, odsBreadcrumbDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-breadcrumb ${OdsStringAttributes2Str(stringAttributes)}></osds-breadcrumb>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-breadcrumb');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    // E2E testing
  });

});
