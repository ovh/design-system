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
    let outsideButton;

    beforeEach(async () => {
      page = await newE2EPage();
      await page.setContent(`
        <button id="outsideButton">Outside Modal</button>
        <osds-modal>
          <button id="insideModalButton1" slot="actions">Inside Modal 1</button>
          <button id="insideModalButton2" slot="actions">Inside Modal 2</button>
        </osds-modal>
      `);

      await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

      el = await page.find('osds-modal');
      outsideButton = await page.find('#outsideButton');

      await page.waitForChanges();
    });

    it('should have inert attribute on outsideButton when modal is active', async () => {
      const inert = await outsideButton.getAttribute('inert');
      expect(inert).not.toBeNull();
    });

    it('should not have inert attribute on outsideButton when modal is closed', async () => {
      await el.callMethod('close');
      await page.waitForChanges();

      const inert = await outsideButton.getAttribute('inert');
      expect(inert).toBeNull();
    });
  });

});
