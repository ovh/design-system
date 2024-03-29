import type { E2EElement, E2EPage } from '@stencil/core/testing';

import { newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-popover', () => {
  let page: E2EPage;
  let el: E2EElement;
  let popoverTriggerSlot: E2EElement;
  let popoverTriggerContent: E2EElement;
  let popoverContentSlot: E2EElement;
  let popoverContentSlotContent: E2EElement;

  async function setup({ html = '' }: { html?: string } = {}) {
    page = await newE2EPage();
    await page.setContent(`<osds-popover>${html}</osds-popover>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-popover');
    popoverTriggerSlot = await page.find('osds-popover >>> slot[name="popover-trigger"]');
    popoverTriggerContent = await page.find('[slot="popover-trigger"]');
    popoverContentSlot = await page.find('osds-popover >>> slot:not([name])');
    popoverContentSlotContent = await page.find('osds-popover >>> ocdk-surface');
  }

  it('should render', async() => {
    await setup();
    expect(el).not.toBeNull();
  });

  describe('popover trigger slot', () => {
    it('should have a slot', async() => {
      await setup();
      expect(popoverTriggerSlot).not.toBeNull();
    });

    it('should display a popover trigger as a button', async() => {
      const button = '<button slot="popover-trigger" color="primary">Button</button>';
      await setup({ html: button });
      expect(popoverTriggerContent.outerHTML).toBe(button);
    });

    it('should change the display of the surface when clicked on', async() => {
      const button = '<osds-button slot="popover-trigger" color="primary">Button</osds-button>';
      const surface = '<osds-popover-content><osds-text>Text</osds-text></osds-popover-content>';
      await setup({ html: button + surface });
      await popoverTriggerContent.click();
      expect(popoverContentSlotContent).toHaveClass('ocdk-surface--open');
    });

    xit('should change the display of the surface when enter is pressed', async() => {
      const button = '<osds-button slot="popover-trigger" color="primary">Button</osds-button>';
      const surface = '<osds-popover-content><osds-text>Text</osds-text></osds-popover-content>';
      await setup({ html: button + surface });
      await popoverTriggerContent.press('Enter');
      expect(popoverContentSlotContent).toHaveClass('ocdk-surface--open');
    });

    xit('should change the display of the surface when space is pressed', async() => {
      const button = '<osds-button slot="popover-trigger" color="primary">Button</osds-button>';
      const surface = '<osds-popover-content><osds-text>Text</osds-text></osds-popover-content>';
      await setup({ html: button + surface });
      await page.focus('[slot="popover-trigger"]');
      await page.keyboard.press('Space');
      expect(popoverContentSlotContent).toHaveClass('ocdk-surface--open');
    });
  });

  describe('popover content slot', () => {
    it('should have a slot', async() => {
      await setup();
      expect(popoverContentSlot).not.toBeNull();
    });

    it('should hide the surface when a click happened outside of the surface', async() => {
      const button = '<osds-button slot="popover-trigger" color="primary">Button</osds-button>';
      const surface = '<osds-popover-content><osds-text>Text</osds-text></osds-popover-content>';
      await setup({ html: button + surface });
      await popoverTriggerContent.click();
      await el.click();
      expect(popoverContentSlotContent).not.toHaveClass('ocdk-surface--open');
    });
  });
});
