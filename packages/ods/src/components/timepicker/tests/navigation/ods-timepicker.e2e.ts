import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-timepicker navigation', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.tagName === 'ODS-TIMEPICKER';
    });
  }

  async function odsTimepickerFocusedElementClassName(): Promise<string | undefined> {
    return await page.evaluate(() => {
      const input = document.querySelector('ods-timepicker');
      return input?.shadowRoot?.activeElement?.className;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(`${content}<button>Dummy to focus out</button>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-timepicker');
  }

  describe('focus', () => {
    it('should be focusable on input', async() => {
      await setup('<ods-timepicker></ods-timepicker>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');
      const odsBlurSpy = await page.spyOnEvent('odsBlur');
      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(true);
      expect(await odsTimepickerFocusedElementClassName()).toContain('ods-timepicker__time');
      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(true);
      expect(await odsTimepickerFocusedElementClassName()).toContain('ods-timepicker__time');
      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(true);
      expect(await odsTimepickerFocusedElementClassName()).toContain('ods-timepicker__time');
      expect(odsFocusSpy).toHaveReceivedEventTimes(1);

      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(false);
      expect(odsBlurSpy).toHaveReceivedEventTimes(1);
    });

    it('should be focusable on select', async() => {
      await setup('<ods-timepicker timezones="all"></ods-timepicker>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');
      const odsBlurSpy = await page.spyOnEvent('odsBlur');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(true);
      expect(await odsTimepickerFocusedElementClassName()).toContain('ods-timepicker__timezones');
      expect(odsFocusSpy).toHaveReceivedEventTimes(2);

      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(false);
      expect(odsBlurSpy).toHaveReceivedEventTimes(2);
    });

    it('should not be focusable if disabled', async() => {
      await setup('<ods-timepicker is-disabled></ods-timepicker>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');
      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(false);
      expect(odsFocusSpy).not.toHaveReceivedEvent();
    });
  });

  describe('arrow', () => {
    it('should increment value with arrow up', async() => {
      await setup('<ods-timepicker value="11:11:00" with-seconds></ods-timepicker>');
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowUp');
      expect(await el.getProperty('value')).toBe('12:11:00');
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowUp');
      expect(await el.getProperty('value')).toBe('12:12:00');
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowUp');
      expect(await el.getProperty('value')).toBe('12:12:01');
    });

    it('should decrement value with arrow down', async() => {
      await setup('<ods-timepicker value="11:11:00" with-seconds></ods-timepicker>');
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowDown');
      expect(await el.getProperty('value')).toBe('10:11:00');
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowDown');
      expect(await el.getProperty('value')).toBe('10:10:00');
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowDown');
      expect(await el.getProperty('value')).toBe('10:10:59');
    });

    it('should switch from hour to minute to seconds using Arrow Left/Right', async() => {
      await setup('<ods-timepicker value="11:11:00" with-seconds></ods-timepicker>');
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowUp');
      expect(await el.getProperty('value')).toBe('12:11:00');
      await page.keyboard.press('ArrowRight');
      await page.keyboard.press('ArrowUp');
      expect(await el.getProperty('value')).toBe('12:12:00');
      await page.keyboard.press('ArrowRight');
      await page.keyboard.press('ArrowUp');
      expect(await el.getProperty('value')).toBe('12:12:01');
      await page.keyboard.press('ArrowLeft');
      await page.keyboard.press('ArrowUp');
      expect(await el.getProperty('value')).toBe('12:13:01');
      await page.keyboard.press('ArrowLeft');
      await page.keyboard.press('ArrowUp');
      expect(await el.getProperty('value')).toBe('13:13:01');
    });
  });
});
