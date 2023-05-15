import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsTooltipAttributes, OdsComponentAttributes2StringAttributes, odsTooltipDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsTooltipBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-tooltip', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsTooltipAttributes> }) {
    const minimalAttributes: OdsTooltipAttributes = OdsCreateAttributes(attributes, odsTooltipBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTooltipAttributes>(minimalAttributes, odsTooltipDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-tooltip ${OdsStringAttributes2Str(stringAttributes)}></osds-tooltip>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-tooltip');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    // E2E testing
  });

});
