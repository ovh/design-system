import type { OdsModalAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-modal', () => {
  const baseAttribute = { color: ODS_THEME_COLOR_INTENT.info, dismissible: false, headline: '', masked: false };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsModalAttribute> }): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsModalAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-modal ${odsStringAttributes2Str(stringAttributes)}></osds-modal>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-modal');

    await page.evaluate(() => {
      const modalElement = document.querySelector('osds-modal')?.shadowRoot?.querySelector('.wrapper') as HTMLDialogElement;
      modalElement.style.setProperty('animation', 'none');
    });
  }

  it('should render', async() => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('attribute:dismissible', () => {
    it('should display a close icon/button', async() => {
      await setup({ attributes: { dismissible: true } });

      const closeIcon = await page.find('osds-modal >>> osds-icon[name="close"]');
      expect(closeIcon).not.toBeNull();
    });

    it('should not display a close icon/button', async() => {
      await setup({ attributes: { dismissible: false } });

      const closeIcon = await page.find('osds-modal >>> osds-icon[name="close"]');
      expect(closeIcon).toBeNull();
    });

    it('should set display styling to none when clicked', async() => {
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
    it('should render with a headline', async() => {
      await setup({ attributes: { headline: 'Innovation for Freedom' } });

      const headline = await page.find('osds-modal >>> .headline');
      expect(headline.innerText).toBe('Innovation for Freedom');
    });

    it('should not render with a headline', async() => {
      await setup({ attributes: {} });

      const headline = await page.find('osds-modal >>> .headline');
      expect(headline).toBeNull();
    });
  });

  describe('attribute:masked', () => {
    it('should display a modal', async() => {
      await setup({ attributes: { masked: false } });

      const display = await page.evaluate(() => {
        const modal = document.querySelector('osds-modal');
        return modal ? window.getComputedStyle(modal).display : null;
      });
      expect(display).toBe('flex');
    });

    it('should not display a modal', async() => {
      await setup({ attributes: { masked: true } });

      const display = await page.evaluate(() => {
        const modal = document.querySelector('osds-modal');
        return modal ? window.getComputedStyle(modal).display : null;
      });
      expect(display).toBe('none');
    });
  });

  describe('method:close', () => {
    it('should set hidden to true', async() => {
      await setup({ attributes: { dismissible: true, masked: false } });

      let masked = await el.getProperty('masked');
      expect(masked).toBe(false);

      await el.callMethod('close');
      await page.waitForChanges();

      masked = await el.getProperty('masked');
      expect(masked).toBe(true);
    });

    it('should set display styling to none', async() => {
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
    it('should set hidden to false', async() => {
      await setup({ attributes: { dismissible: true, masked: true } });

      let masked = await el.getProperty('masked');
      expect(masked).toBe(true);

      await el.callMethod('open');
      await page.waitForChanges();

      masked = await el.getProperty('masked');
      expect(masked).toBe(false);
    });

    it('should set display styling to flex', async() => {
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

  describe('lifecycle:disconnectCallBack', () => {
    it('should close modal on disconnect', async() => {
      await setup({ attributes: { dismissible: true, masked: true } });

      await el.callMethod('open');
      await page.waitForChanges();

      let overflow = await page.evaluate(() => {
        return document.body.style.overflow;
      });

      expect(overflow).toBe('hidden');

      await page.evaluate(() => {
        document.querySelector('osds-modal')!.remove();
      });
      await page.waitForChanges();

      overflow = await page.evaluate(() => {
        return document.body.style.overflow;
      });

      expect(overflow).toBe('');
    });
  });

  describe('Event', () => {
    it('should receive event odsModalOpen', async() => {
      await setup({ attributes: { dismissible: true, masked: true } });

      const odsModalOpen = await el.spyOnEvent('odsModalOpen');

      await el.callMethod('open');
      await page.waitForChanges();
      expect(odsModalOpen).toHaveReceivedEventTimes(1);
    });

    it('should receive event odsModalOpen', async() => {
      await setup({ attributes: { dismissible: true, masked: false } });

      const odsModalClose = await el.spyOnEvent('odsModalClose');

      await el.callMethod('close');
      await page.waitForChanges();
      expect(odsModalClose).toHaveReceivedEventTimes(1);
    });
  });

  describe('keyboard navigation', () => {
    let outsideButton: E2EElement;
    let insideModalButton1: E2EElement;
    let insideModalButton2: E2EElement;

    beforeEach(async() => {
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

      await el.callMethod('open');
      await page.waitForChanges();
      outsideButton = await page.find('#outsideButton');
      expect(outsideButton).not.toBeNull();
      insideModalButton1 = await page.find('#insideModalButton1');
      expect(insideModalButton1).not.toBeNull();
      insideModalButton2 = await page.find('#insideModalButton2');
      expect(insideModalButton2).not.toBeNull();
    });

    it('should move focus to first button inside modal on first tab press', async() => {
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElementId = await page.evaluate(() => document.activeElement?.id);
      expect(focusedElementId).toBe('insideModalButton1');
    });

    it('should return focus to the outside button if modal is closed', async() => {
      await el.callMethod('close');
      await page.waitForChanges();

      await page.click('body');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElementId = await page.evaluate(() => document.activeElement?.id);
      expect(focusedElementId).toBe('outsideButton');
    });
  });
});
