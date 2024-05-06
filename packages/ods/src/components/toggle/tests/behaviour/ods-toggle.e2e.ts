import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-toggle behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;
  let slider: E2EElement;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-toggle');
    slider = await page.find('ods-toggle >>> .ods-toggle__container__slider');
  }

  it('should toggle value', async() => {
    await setup('<ods-toggle></ods-toggle>');
    const odsChangeSpy = await page.spyOnEvent('odsChange');

    expect(await el.getProperty('value')).toBeNull();
    expect(slider).not.toHaveClass('ods-toggle__container__slider--checked');

    await el.click();
    await page.waitForChanges();

    const sliderHasClassCheck = await page.evaluate(() => {
      const slider = document.querySelector('ods-toggle')?.shadowRoot?.querySelector('.ods-toggle__container__slider');
      return slider?.classList.contains('ods-toggle__container__slider--checked');
    });
    expect(await el.getProperty('value')).toBe(true);
    expect(sliderHasClassCheck).toBe(true);
    expect(odsChangeSpy).toHaveReceivedEventTimes(1);
  });

  it('should not toggle value if disabled', async() => {
    await setup('<ods-toggle is-disabled></ods-toggle>');
    const odsChangeSpy = await page.spyOnEvent('odsChange');

    expect(await el.getProperty('value')).toBeNull();
    expect(slider).not.toHaveClass('ods-toggle__container__slider--checked');

    await el.click();
    await page.waitForChanges();

    expect(await el.getProperty('value')).toBeNull();
    expect(slider).not.toHaveClass('ods-toggle__container__slider--checked');
    expect(odsChangeSpy).toHaveReceivedEventTimes(0);
  });

  describe('methods:clear', () => {
    it('should call clear', async() => {
      await setup('<ods-toggle value></ods-toggle>');
      const odsClearSpy = await page.spyOnEvent('odsClear');

      expect(await el.getProperty('value')).toBe(true);

      await el.callMethod('clear');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
    });

    it('should call clear with disabled', async() => {
      await setup('<ods-toggle value is-disabled></ods-toggle>');
      const odsClearSpy = await page.spyOnEvent('odsClear');

      expect(await el.getProperty('value')).toBe(true);

      await el.callMethod('clear');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('methods:reset', () => {
    it('should call reset', async() => {
      await setup('<ods-toggle default-value="true"></ods-toggle>');
      const odsResetSpy = await page.spyOnEvent('odsReset');

      expect(await el.getProperty('value')).toBe(true);

      await el.setProperty('value', false);
      await el.callMethod('reset');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(true);
      expect(odsResetSpy).toHaveReceivedEventTimes(1);
    });

    it('should call reset with disabled', async() => {
      await setup('<ods-toggle default-value="true" is-disabled></ods-toggle>');
      const odsResetSpy = await page.spyOnEvent('odsReset');

      expect(await el.getProperty('value')).toBe(true);

      await el.setProperty('value', false);
      await el.callMethod('reset');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(true);
      expect(odsResetSpy).toHaveReceivedEventTimes(1);
    });
  });
});
