import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsCollapsibleAttributes, OdsComponentAttributes2StringAttributes, odsCollapsibleDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str } from '@ovhcloud/ods-testing';

describe('e2e:osds-collapsible', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsCollapsibleAttributes> }) {
    const minimalAttributes: OdsCollapsibleAttributes = OdsCreateAttributes(attributes, odsCollapsibleDefaultAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCollapsibleAttributes>(minimalAttributes, odsCollapsibleDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-collapsible ${OdsStringAttributes2Str(stringAttributes)}></osds-collapsible>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-collapsible');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('toggle', () => {
    it('should sync opened property and details open attribute', async () => {
      let componentOpened: boolean;
      await setup({attributes: { opened: false }});

      componentOpened = await el.getProperty('opened');
      expect(componentOpened).toBe(false);

      el.setProperty('opened', true);
      await page.waitForChanges();

      componentOpened = await el.getProperty('opened');
      expect(componentOpened).toBe(true);
    });
  });

});
