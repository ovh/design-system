import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { Ods<%= componentName %>Attributes, OdsComponentAttributes2StringAttributes, ods<%= componentName %>DefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, ods<%= componentName %>BaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-<%= name %>', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<Ods<%= componentName %>Attributes> }) {
    const minimalAttributes: Ods<%= componentName %>Attributes = OdsCreateAttributes(attributes, ods<%= componentName %>BaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<Ods<%= componentName %>Attributes>(minimalAttributes, ods<%= componentName %>DefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-<%= name %> ${OdsStringAttributes2Str(stringAttributes)}></osds-<%= name %>>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-<%= name %>');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    // E2E testing
  });

});
