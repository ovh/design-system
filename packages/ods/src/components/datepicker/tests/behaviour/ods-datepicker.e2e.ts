import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-datepicker behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-datepicker');

    await page.waitForChanges();
  }

  beforeEach(jest.clearAllMocks);

  describe('method:clear', () => {
    it('should clear value', async() => {
      const value = new Date('01/02/2024');
      await setup('<ods-datepicker></ods-datepicker>');

      await el.setProperty('value',  value)
      await el.callMethod('clear');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBeNull();
    });
  });

  describe('method:reset', () => {
    it('should reset value to default value', async() => {
      const defaultValue = new Date('01/01/2024');
      const value = new Date('01/02/2024');
      await setup(`<ods-datepicker default-value="${defaultValue.toString()}"></ods-datepicker>`);

      await el.setProperty('value',  value);
      await el.callMethod('reset');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(defaultValue);
    });
  });

  describe('event', () => {
    it('should receive odsClear event', async() => {
      await setup('<ods-datepicker></ods-datepicker>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      await el.callMethod('clear');
      await page.waitForChanges();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
    });

    it('should receive odsReset event', async() => {
      await setup(`<ods-datepicker></ods-datepicker>`);
      const odsResetSpy = await page.spyOnEvent('odsReset');
      await el.callMethod('reset');
      await page.waitForChanges();
      expect(odsResetSpy).toHaveReceivedEventTimes(1);
    });

    it('should receive odsFocus event', async() => {
      await setup('<ods-datepicker></ods-datepicker>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(odsFocusSpy).toHaveReceivedEventTimes(1);
    });

    it('should receive odsBlur event', async() => {
      await setup('<ods-datepicker></ods-datepicker>');
      const odsBlurSpy = await page.spyOnEvent('odsBlur');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(odsBlurSpy).toHaveReceivedEventTimes(1);
    });

    it('should receive odsChange event', async() => {
      await setup('<ods-datepicker></ods-datepicker>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      await page.keyboard.press('0');
      await page.waitForChanges();

      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
    });
  });

});
