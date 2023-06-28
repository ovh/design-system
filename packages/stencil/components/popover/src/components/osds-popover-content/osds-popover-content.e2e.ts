import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsPopoverContentAttributes,
  odsPopoverContentDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsPopoverContentBaseAttributes,
} from '@ovhcloud/ods-testing';

describe('e2e:osds-popover', () => {
  let page: E2EPage;
  let el: E2EElement;
  let popoverContentHeaderSlot: E2EElement;
  let popoverContentFooterSlot: E2EElement;
  let popoverContentSlot: E2EElement;
  let popoverContentHeaderSlotContent: E2EElement;
  let popoverContentFooterSlotContent: E2EElement;
  let popoverContentSlotContent: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsPopoverContentAttributes>, html?: string }) {
    const minimalAttributes: OdsPopoverContentAttributes = OdsCreateAttributes(attributes, odsPopoverContentBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPopoverContentAttributes>(minimalAttributes, odsPopoverContentDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-popover-content ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-popover-content>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-popover-content');
    popoverContentHeaderSlot = await page.find('osds-popover-content >>> slot[name="popover-header"]');
    popoverContentHeaderSlotContent = await page.find('[slot="popover-header"]');
    popoverContentSlot = await page.find('osds-popover-content >>> slot:not([name])');
    popoverContentSlotContent = await page.find('osds-popover-content > *:not([slot])');
    popoverContentFooterSlot = await page.find('osds-popover-content >>> slot[name="popover-footer"]');
    popoverContentFooterSlotContent = await page.find('[slot="popover-footer"]');
  }

  it('should render', async () => {
    await setup({ attributes: { } });
    expect(el).not.toBeNull();
  });

  describe('popover header slot', () => {
    it('should have a slot', async () => {
      await setup({ attributes: { }, html: `` });
      expect(popoverContentHeaderSlot).not.toBeNull();
    });

    it('should display a ODS text in Popover Header Slot', async () => {
      const text = `<osds-text>Text</osds-text>`;
      const slot = `<span slot="popover-header">${text}</span>`;
      await setup({ attributes: { }, html: slot });
      expect(popoverContentHeaderSlotContent.outerHTML).toContain(text);
    })

    it('should display a ODS Button in Popover Header Slot', async () => {
      const button = `<osds-button>Button</osds-button>`;
      const slot = `<span slot="popover-header">${button}</span>`;
      await setup({ attributes: { }, html: slot });
      expect(popoverContentHeaderSlotContent.outerHTML).toContain(button);
    });
  });

  describe('popover no named slot', () => {
    it('should have a slot', async () => {
      await setup({ attributes: { }, html: `` });
      expect(popoverContentSlot).not.toBeNull();
    });

    it('should display a ODS text in Popover no named Slot', async () => {
      const text = `<osds-text>Text</osds-text>`;
      await setup({ attributes: { }, html: text });
      expect(popoverContentSlotContent.outerHTML).toContain(text);
    })

    it('should display a ODS Button in Popover no named Slot', async () => {
      const button = `<osds-button>Button</osds-button>`;
      await setup({ attributes: { }, html: button });
      expect(popoverContentSlotContent.outerHTML).toContain(button);
    });
  });

  describe('popover footer slot', () => {
    it('should have a slot', async () => {
      await setup({ attributes: { }, html: `` });
      expect(popoverContentFooterSlot).not.toBeNull();
    });

    it('should display a ODS text in Popover Footer Slot', async () => {
      const text = `<osds-text>Text</osds-text>`;
      const slot = `<span slot="popover-footer">${text}</span>`;
      await setup({ attributes: { }, html: slot });
      expect(popoverContentFooterSlotContent.outerHTML).toContain(text);
    })

    it('should display a ODS Button in Popover Footer Slot', async () => {
      const button = `<osds-button>Button</osds-button>`;
      const slot = `<span slot="popover-footer">${button}</span>`;
      await setup({ attributes: { }, html: slot });
      expect(popoverContentFooterSlotContent.outerHTML).toContain(button);
    });
  });

});
