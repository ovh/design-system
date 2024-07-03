import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-range behavior', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, additionalProperties?: Record<string, unknown>): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-range');

    additionalProperties && Object.entries(additionalProperties).forEach(([key, value]) => {
      el.setProperty(key, value);
    });
    await page.waitForChanges();
  }

  describe('method:clear', () => {
    it('should receive odsClear event', async() => {
      await setup('<ods-range value="value"></ods-range>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      await el.callMethod('clear');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('method:reset', () => {
    it('should receive odsReset event', async() => {
      const defaultValue = 50;
      await setup(`<ods-range value="30" default-value="${defaultValue}"></ods-range>`);
      const odsResetSpy = await page.spyOnEvent('odsReset');
      await el.callMethod('reset');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(defaultValue);
      expect(odsResetSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('event:odsChange ', () => {
    it('should receive odsChange event', async() => {
      await setup('<ods-range name="name"></ods-range>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(51);
      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
      expect(odsChangeSpy).toHaveReceivedEventDetail({
        name: 'name',
        validity: {},
        value: 51,
      });
    });

    it('should do nothing because of disabled', async() => {
      await setup('<ods-range name="name" is-disabled></ods-range>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(50);
      expect(odsChangeSpy).not.toHaveReceivedEvent();
    });
  });

  describe('change:min&max', () => {
    it('should change value with max inf value', async() => {
      await setup('<ods-range min="0" max="100" value="50"></ods-range>');
      const newMax = 40;
      await el.setProperty('max', newMax);
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(newMax);
    });

    it('should change value with min if min > value', async() => {
      await setup('<ods-range min="0" max="100" value="50"></ods-range>');
      const newMin = 60;
      await el.setProperty('min', newMin);
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(newMin);
    });

    it('should change value dual with max if max < one value', async() => {
      await setup('<ods-range min="0" max="100"></ods-range>', { value: [30, 70] });
      const newMax = 60;
      await el.setProperty('max', newMax);
      await page.waitForChanges();

      expect((await el.getProperty('value'))?.[0]).toBe(30);
      expect((await el.getProperty('value'))?.[1]).toBe(newMax);
    });

    it('should change value dual with min if min > one value', async() => {
      await setup('<ods-range min="0" max="100"></ods-range>', { value: [30, 70] });
      const newMin = 60;
      await el.setProperty('min', newMin);
      await page.waitForChanges();

      expect((await el.getProperty('value'))?.[0]).toBe(newMin);
      expect((await el.getProperty('value'))?.[1]).toBe(70);
    });

    it('should change value dual with max if max > both value', async() => {
      await setup('<ods-range min="0" max="100"></ods-range>', { value: [30, 70] });
      const newMax = 20;
      await el.setProperty('max', newMax);
      await page.waitForChanges();

      expect((await el.getProperty('value'))?.[0]).toBe(newMax);
      expect((await el.getProperty('value'))?.[1]).toBe(newMax);
    });

    it('should change value dual with min if min > both value', async() => {
      await setup('<ods-range min="0" max="100"></ods-range>', { value: [30, 50] });
      const newMin = 60;
      await el.setProperty('min', newMin);
      await page.waitForChanges();

      expect((await el.getProperty('value'))?.[0]).toBe(newMin);
      expect((await el.getProperty('value'))?.[1]).toBe(newMin);
    });
  });

  describe('Form', () => {
    it('should get form data with button type submit', async() => {
      await setup(`<form method="get">
        <ods-range name="odsRange" value="50"></ods-range>
        <input type="text" name="natifInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('odsRange')).toBe('50');
      expect(url.searchParams.get('natifInput')).toBe('');
    });

    it('should reset form with button type reset', async() => {
      await setup(`<form method="get">
        <ods-range name="odsRange" value="50"></ods-range>
        <input type="text" name="natifInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      await resetButton.click();

      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('natifInput')).toBe('');
      expect(url.searchParams.get('odsRange')).toBe('0');
    });

    it('should reset form with button type reset with default value', async() => {
      await setup(`<form method="get">
        <ods-range name="odsRange" default-value="50"></ods-range>
        <input type="text" name="natifInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      await resetButton.click();

      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('natifInput')).toBe('');
      expect(url.searchParams.get('odsRange')).toBe('50');
    });
  });
});
