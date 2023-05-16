import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsTooltipContentAttributes, OdsComponentAttributes2StringAttributes, odsTooltipContentDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsTooltipContentBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-tooltip-content', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes, html }: { attributes: Partial<OdsTooltipContentAttributes>, html?: string }) {
    const minimalAttributes: OdsTooltipContentAttributes = OdsCreateAttributes(attributes, odsTooltipContentBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTooltipContentAttributes>(minimalAttributes, odsTooltipContentDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-tooltip-content ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-tooltip-content>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-tooltip-content');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('default slot', () => {
    it('should display a text', async () => {
      const slot = '<span>Dummy text</span>'
      await setup({ attributes: {}, html: slot });
      expect(el.innerHTML).toBe(slot);
    })
  });
});
