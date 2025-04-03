import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-range navigation', () => {
  let el: E2EElement;
  let inputRange: E2EElement;
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.tagName === 'ODS-RANGE';
    });
  }

  async function setup(content: string, additionalProperties?: Record<string, unknown>): Promise<void> {
    page = await newE2EPage();

    await page.setContent(`${content}<button>Dummy to focus out</button>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-range');
    inputRange = await page.find('ods-range >>> .ods-range__range');

    additionalProperties && Object.entries(additionalProperties).forEach(([key, value]) => {
      el.setProperty(key, value);
    });
    await page.waitForChanges();
  }

  describe('focus', () => {
    it('should be focusable', async() => {
      await setup('<ods-range ></ods-range>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');

      await page.keyboard.press('Tab');

      expect(await isFocused()).toBe(true);
      expect(odsFocusSpy).toHaveReceivedEventTimes(1);
    });

    it('should not be focusable if disabled', async() => {
      await setup('<ods-range is-disabled></ods-range>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');

      await page.keyboard.press('Tab');

      expect(await isFocused()).toBe(false);
      expect(odsFocusSpy).not.toHaveReceivedEvent();
    });

    it('should be focused on associated label click', async() => {
      await setup('<label for="ods-range">Dummy label</label><ods-range id="ods-range"></ods-range>');
      const labelElement = await page.find('label');

      expect(await isFocused()).toBe(false);

      await labelElement.click();
      await page.waitForChanges();

      expect(await isFocused()).toBe(true);
    });
  });

  describe('Arrow navigation', () => {
    it('should step up value with arrow up / arrow right', async() => {
      await setup('<ods-range value="50"></ods-range>');
      await page.keyboard.press('Tab');

      expect(await inputRange.getProperty('value')).toBe('50');
      await page.keyboard.press('ArrowUp');
      expect(await inputRange.getProperty('value')).toBe('51');
      await page.keyboard.press('ArrowRight');
      expect(await inputRange.getProperty('value')).toBe('52');
    });

    it('should step down value with arrow down / arrow left', async() => {
      await setup('<ods-range value="50"></ods-range>');
      await page.keyboard.press('Tab');

      expect(await inputRange.getProperty('value')).toBe('50');
      await page.keyboard.press('ArrowDown');
      expect(await inputRange.getProperty('value')).toBe('49');
      await page.keyboard.press('ArrowLeft');
      expect(await inputRange.getProperty('value')).toBe('48');
    });
  });

  describe('Range dual', () => {
    it('should be focusable', async() => {
      await setup('<ods-range></ods-range>', { value: [30, 70] });
      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(true);
      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(true);
      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(false);
    });

    it('should step down value with arrow down / arrow left', async() => {
      await setup('<ods-range></ods-range>', { value: [30, 70] });
      await page.keyboard.press('Tab');
      expect(await el.getProperty('value')).toEqual([30, 70]);
      await page.keyboard.press('ArrowDown');
      expect(await el.getProperty('value')).toEqual([29, 70]);
      await page.keyboard.press('ArrowLeft');
      expect(await el.getProperty('value')).toEqual([28, 70]);
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowDown');
      expect(await el.getProperty('value')).toEqual([28, 69]);
      await page.keyboard.press('ArrowLeft');
      expect(await el.getProperty('value')).toEqual([28, 68]);
    });

    it('should step up value with arrow up / arrow right', async() => {
      await setup('<ods-range></ods-range>', { value: [30, 70] });
      await page.keyboard.press('Tab');
      expect(await el.getProperty('value')).toEqual([30, 70]);
      await page.keyboard.press('ArrowUp');
      expect(await el.getProperty('value')).toEqual([31, 70]);
      await page.keyboard.press('ArrowRight');
      expect(await el.getProperty('value')).toEqual([32, 70]);
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowUp');
      expect(await el.getProperty('value')).toEqual([32, 71]);
      await page.keyboard.press('ArrowRight');
      expect(await el.getProperty('value')).toEqual([32, 72]);
    });
  });
});
