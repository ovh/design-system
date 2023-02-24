import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";
import { OdsAccordionAttributes, OdsComponentAttributes2StringAttributes, odsAccordionDefaultAttributes } from "@ovhcloud/ods-core";
import { OdsCreateAttributes, OdsStringAttributes2Str, odsAccordionBaseAttributes } from "@ovhcloud/ods-testing";

describe('e2e:osds-accordion', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsAccordionAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsAccordionAttributes = OdsCreateAttributes(attributes, odsAccordionBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsAccordionAttributes>(minimalAttributes, odsAccordionDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-accordion ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-accordion>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-accordion');
  }

  describe('defaults', () => {
    beforeEach(async () => {
      await setup();
    });

    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });
  });

  describe('toggle', () => {
    it('should sync opened property and details open attribute', async () => {
      let componentOpened: boolean,
      details: HTMLDetailsElement | null;
      await setup({attributes: { opened: false }});

      details = el.shadowRoot.querySelector('details');
      componentOpened = await el.getProperty('opened');
      expect(details?.getAttribute('open')).toBe(null);
      expect(componentOpened).toBe(false);

      el.setProperty('opened', true);
      await page.waitForChanges();

      details = el.shadowRoot.querySelector('details');
      componentOpened = await el.getProperty('opened');
      expect(details?.getAttribute('open')).toBe('');
      expect(componentOpened).toBe(true);
    });
  });
});
