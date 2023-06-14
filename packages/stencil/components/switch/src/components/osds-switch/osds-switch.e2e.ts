import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsSwitchAttributes, OdsComponentAttributes2StringAttributes, odsSwitchDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsSwitchBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-switch', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsSwitchAttributes> }) {
    const minimalAttributes: OdsSwitchAttributes = OdsCreateAttributes(attributes, odsSwitchBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSwitchAttributes>(minimalAttributes, odsSwitchDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-switch ${OdsStringAttributes2Str(stringAttributes)}></osds-switch>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-switch');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

});
