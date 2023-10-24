import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-popover', () => {
  let page: E2EPage;
  let el: E2EElement;
  let popoverContentHeaderSlot: E2EElement;
  let popoverContentFooterSlot: E2EElement;
  let popoverContentSlot: E2EElement;
  let popoverContentHeaderSlotContent: E2EElement;
  let popoverContentFooterSlotContent: E2EElement;
  let popoverContentSlotContent: E2EElement;

  async function setup({ html = '' }: { html?: string } = {}) {
    page = await newE2EPage();
    await page.setContent(`<osds-popover-content>${html}</osds-popover-content>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-popover-content');
    popoverContentHeaderSlot = await page.find('osds-popover-content >>> slot[name="popover-header"]');
    popoverContentHeaderSlotContent = await page.find('[slot="popover-header"]');
    popoverContentSlot = await page.find('osds-popover-content >>> slot:not([name])');
    popoverContentSlotContent = await page.find('osds-popover-content > *:not([slot])');
    popoverContentFooterSlot = await page.find('osds-popover-content >>> slot[name="popover-footer"]');
    popoverContentFooterSlotContent = await page.find('[slot="popover-footer"]');
  }

  it('should render', async() => {
    await setup();
    expect(el).not.toBeNull();
  });

  describe('popover header slot', () => {
    it('should have a slot', async() => {
      await setup();
      expect(popoverContentHeaderSlot).not.toBeNull();
    });

    it('should display a text in Popover Header Slot', async() => {
      const text = '<p>Text</p>';
      const slot = `<span slot="popover-header">${text}</span>`;
      await setup({ html: slot });
      expect(popoverContentHeaderSlotContent.outerHTML).toContain(text);
    });

    it('should display a Button in Popover Header Slot', async() => {
      const button = '<button>Button</button>';
      const slot = `<span slot="popover-header">${button}</span>`;
      await setup({ html: slot });
      expect(popoverContentHeaderSlotContent.outerHTML).toContain(button);
    });
  });

  describe('popover no named slot', () => {
    it('should have a slot', async() => {
      await setup();
      expect(popoverContentSlot).not.toBeNull();
    });

    it('should display a text in Popover no named Slot', async() => {
      const text = '<p>Text</p>';
      await setup({ html: text });
      expect(popoverContentSlotContent.outerHTML).toContain(text);
    });

    it('should display a Button in Popover no named Slot', async() => {
      const button = '<button>Button</button>';
      await setup({ html: button });
      expect(popoverContentSlotContent.outerHTML).toContain(button);
    });
  });

  describe('popover footer slot', () => {
    it('should have a slot', async() => {
      await setup();
      expect(popoverContentFooterSlot).not.toBeNull();
    });

    it('should display a text in Popover Footer Slot', async() => {
      const text = '<p>Text</p>';
      const slot = `<span slot="popover-footer">${text}</span>`;
      await setup({ html: slot });
      expect(popoverContentFooterSlotContent.outerHTML).toContain(text);
    });

    it('should display a Button in Popover Footer Slot', async() => {
      const button = '<button>Button</button>';
      const slot = `<span slot="popover-footer">${button}</span>`;
      await setup({ html: slot });
      expect(popoverContentFooterSlotContent.outerHTML).toContain(button);
    });
  });
});
