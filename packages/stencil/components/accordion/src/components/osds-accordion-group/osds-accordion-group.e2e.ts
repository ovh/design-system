import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe('e2e:osds-accordion-group', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ html = '' }: { html?: string } = {}) {
    page = await newE2EPage();
    await page.setContent(`
      <osds-accordion-group>
      ${html}
      </osds-accordion-group>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-accordion-group');
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

  describe('accordions', () => {
    it('should add new accordion', async () => {
      await setup({ html: '<osds-accordion></osds-accordion>' });
      const accordion = await el.find('osds-accordion');
      expect(accordion).not.toBeNull();
    });

    it('should close opened accordions on toggle', async () => {
      let firstOpened: string;
      await setup({ html: '<osds-accordion opened></osds-accordion><osds-accordion></osds-accordion>' });

      const accordions = await el.findAll('osds-accordion');
      firstOpened = await accordions[0].getProperty('opened');
      expect(firstOpened).toBe(true);

      await accordions[1].click();
      firstOpened = await accordions[0].getProperty('opened');
      expect(firstOpened).toBe(false);
    });
  });

});