import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsModalAttributes, OdsComponentAttributes2StringAttributes, odsModalDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsModalBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-modal', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsModalAttributes> }) {
    const minimalAttributes: OdsModalAttributes = OdsCreateAttributes(attributes, odsModalBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsModalAttributes>(minimalAttributes, odsModalDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-modal ${OdsStringAttributes2Str(stringAttributes)}></osds-modal>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-modal');

    await page.evaluate(() => {
      const wrapperElement = document.querySelector('osds-modal')?.shadowRoot?.querySelector('.wrapper') as HTMLElement;
      wrapperElement.style.setProperty('animation', 'none');
    });
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('attribute:dismissible', () => {
    it('should display a close icon/button', async () => {
      await setup({ attributes: { dismissible: true } });

      const closeIcon = await page.find('osds-modal >>> osds-icon[name="close"]');
      expect(closeIcon).not.toBeNull();
    });

    it('should not display a close icon/button', async () => {
      await setup({ attributes: { dismissible: false } });

      const closeIcon = await page.find('osds-modal >>> osds-icon[name="close"]');
      expect(closeIcon).toBeNull();
    });

    it('should set display styling to none when clicked', async () => {
      await setup({ attributes: { dismissible: true } });

      const closeIcon = await page.find('osds-modal >>> osds-icon[name="close"]');
      expect(closeIcon).not.toBeNull();
      await closeIcon.click();
      await page.waitForChanges();

      const display = await page.evaluate(() => {
        const modal = document.querySelector('osds-modal');
        return modal ? window.getComputedStyle(modal).display : null;
      });
      expect(display).toBe('none');
    });
  });

  describe('attribute:headline', () => {
    it('should render with a headline', async () => {
      await setup({ attributes: { headline: 'Innovation for Freedom' } });

      const headline = await page.find('osds-modal >>> .headline');
      expect(headline.innerText).toBe('Innovation for Freedom');
    });

    it('should not render with a headline', async () => {
      await setup({ attributes: {} });

      const headline = await page.find('osds-modal >>> .headline');
      expect(headline).toBeNull();
    });
  });

  describe('attribute:masked', () => {
    it('should display a modal', async () => {
      await setup({ attributes: { masked: false } });

      const display = await page.evaluate(() => {
        const modal = document.querySelector('osds-modal');
        return modal ? window.getComputedStyle(modal).display : null;
      });
      expect(display).toBe('flex');
    });

    it('should not display a modal', async () => {
      await setup({ attributes: { masked: true } });

      const display = await page.evaluate(() => {
        const modal = document.querySelector('osds-modal');
        return modal ? window.getComputedStyle(modal).display : null;
      });
      expect(display).toBe('none');
    });
  });

  describe('method:close', () => {
    it('should set hidden to true', async () => {
      await setup({ attributes: { dismissible: true, masked: false } });

      let masked = await el.getProperty('masked');
      expect(masked).toBe(false);

      await el.callMethod('close');
      await page.waitForChanges();

      masked = await el.getProperty('masked');
      expect(masked).toBe(true);
    });

    it('should set display styling to none', async () => {
      await setup({ attributes: { dismissible: true, masked: false } });

      let masked = await el.getProperty('masked');
      expect(masked).toBe(false);

      await el.callMethod('close');
      await page.waitForChanges();

      masked = await el.getProperty('masked');
      expect(masked).toBe(true);

      const display = await page.evaluate(() => {
        const modal = document.querySelector('osds-modal');
        return modal ? window.getComputedStyle(modal).display : null;
      });
      expect(display).toBe('none');
    });
  });

  describe('method:open', () => {
    it('should set hidden to false', async () => {
      await setup({ attributes: { dismissible: true, masked: true } });

      let masked = await el.getProperty('masked');
      expect(masked).toBe(true);

      await el.callMethod('open');
      await page.waitForChanges();

      masked = await el.getProperty('masked');
      expect(masked).toBe(false);
    });

    it('should set display styling to flex', async () => {
      await setup({ attributes: { dismissible: true, masked: true } });

      let masked = await el.getProperty('masked');
      expect(masked).toBe(true);

      await el.callMethod('open');
      await page.waitForChanges();

      masked = await el.getProperty('masked');
      expect(masked).toBe(false);

      const display = await page.evaluate(() => {
        const modal = document.querySelector('osds-modal');
        return modal ? window.getComputedStyle(modal).display : null;
      });
      expect(display).toBe('flex');
    });
  });

  describe('keyboard navigation', () => {
    it('should allow keyboard navigation inside modal but not outside when body has inert attribute', async () => {

      page = await newE2EPage();

      await page.setContent(`
        <button id="outsideButton">Outside Modal</button>
        <osds-modal dismissible="true">
          <button id="insideModalButton1">Inside Modal 1</button>
          <button id="insideModalButton2">Inside Modal 2</button>
        </osds-modal>
      `);

      const outsideButton = await page.find('#outsideButton');
      await outsideButton.click();
      await page.waitForChanges();

      await page.evaluate(() => {
        document.body.setAttribute('inert', '');
      });
      const inert = await page.evaluate(() => document.body.hasAttribute('inert'));
      expect(inert).toBe(true);
      await page.waitForChanges();

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      const activeElementId1 = await page.evaluate(() => document.activeElement?.id);
      expect(activeElementId1).toBe('insideModalButton1');

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      const activeElementId2 = await page.evaluate(() => document.activeElement?.id);
      expect(activeElementId2).toBe('insideModalButton2');

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      const activeElementId3 = await page.evaluate(() => document.activeElement?.id);
      expect(activeElementId3).toBe('insideModalButton1');

      await page.waitForChanges();

      await page.evaluate(() => {
        document.body.setAttribute('inert', '');
      });
      const inert2 = await page.evaluate(() => document.body.hasAttribute('inert'));
      expect(inert2).toBe(false);
      await page.waitForChanges();

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      const activeElementId4 = await page.evaluate(() => document.activeElement?.id);
      expect(activeElementId4).toBe('outsideButton');
    });

  });

});
