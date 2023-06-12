import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsSwitchItemAttributes, OdsComponentAttributes2StringAttributes, odsSwitchItemDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsSwitchItemBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-switch', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsSwitchItemAttributes> }) {
    const minimalAttributes: OdsSwitchItemAttributes = OdsCreateAttributes(attributes, odsSwitchItemBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSwitchItemAttributes>(minimalAttributes, odsSwitchItemDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-switch ${OdsStringAttributes2Str(stringAttributes)}></osds-switch>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-switch');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    // E2E testing
  });

});
