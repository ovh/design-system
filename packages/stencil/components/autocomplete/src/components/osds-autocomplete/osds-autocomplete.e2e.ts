import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsAutocompleteAttributes, OdsComponentAttributes2StringAttributes, odsAutocompleteDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsAutocompleteBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-autocomplete', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsAutocompleteAttributes> }) {
    const minimalAttributes: OdsAutocompleteAttributes = OdsCreateAttributes(attributes, odsAutocompleteBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsAutocompleteAttributes>(minimalAttributes, odsAutocompleteDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-autocomplete ${OdsStringAttributes2Str(stringAttributes)}></osds-autocomplete>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-autocomplete');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    // E2E testing
  });

});
