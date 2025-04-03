import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';
import { type OdsRangeChangeEventDetail } from '../../src/interfaces/event';

describe('ods-range behaviour', () => {
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

  describe('initialization', () => {
    let odsChangeEventCount = 0;
    let odsChangeEventDetail = {};

    async function setupWithSpy(content: string): Promise<void> {
      odsChangeEventCount = 0;
      odsChangeEventDetail = {};
      page = await newE2EPage();

      // page.spyOnEvent doesn't seems to work to observe event emitted on first render, before any action happens
      // so we spy manually
      await page.exposeFunction('onOdsChangeEvent', (detail: OdsRangeChangeEventDetail) => {
        odsChangeEventCount++;
        odsChangeEventDetail = detail;
      });

      await page.evaluateOnNewDocument(() => {
        window.addEventListener('odsChange', (event: Event) => {
          // @ts-ignore function is exposed manually
          window.onOdsChangeEvent((event as CustomEvent<OdsRangeChangeEventDetail>).detail);
        });
      });

      await page.setContent(content);
    }

    describe('with no value attribute defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-range></ods-range>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 50,
        });
      });

      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-range min="50" max="200"></ods-range>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 125,
        });
      });
    });

    describe('with empty string value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-range value=""></ods-range>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: null,
        });
      });
    });

    describe('with no value but empty default-value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-range default-value=""></ods-range>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: null,
        });
      });
    });

    describe('with no value but default-value defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-range default-value="40"></ods-range>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 40,
        });
      });
    });

    describe('with defined value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-range value="45"></ods-range>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 45,
        });
      });
    });

    describe('with defined value and default value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-range default-value="40" value="50"></ods-range>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 50,
        });
      });
    });
  });

  describe('method:clear', () => {
    it('should receive odsClear event', async() => {
      await setup('<ods-range name="ods-range" value="50"></ods-range>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await el.callMethod('clear');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
      expect(odsChangeSpy).toHaveReceivedEventDetail({
        name: 'ods-range',
        validity: {},
        value: null,
      });
    });

    it('should receive odsClear event on dual', async() => {
      await setup('<ods-range name="ods-range"></ods-range>', { value: [50, 70] });
      const odsClearSpy = await page.spyOnEvent('odsClear');
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await el.callMethod('clear');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toEqual([null, null]);
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
      expect(odsChangeSpy).toHaveReceivedEventDetail({
        name: 'ods-range',
        validity: {},
        value: [null, null],
      });
    });
  });

  describe('method:reset', () => {
    it('should receive odsReset event', async() => {
      const defaultValue = 50;
      await setup(`<ods-range name="ods-range" value="30" default-value="${defaultValue}"></ods-range>`);
      const odsResetSpy = await page.spyOnEvent('odsReset');
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await el.callMethod('reset');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(defaultValue);
      expect(odsResetSpy).toHaveReceivedEventTimes(1);
      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
      expect(odsChangeSpy).toHaveReceivedEventDetail({
        name: 'ods-range',
        validity: {},
        value: defaultValue,
      });
    });

    it('should receive odsReset event on dual', async() => {
      const defaultValue = [50, 70];
      await setup('<ods-range name="ods-range"></ods-range>', { defaultValue });
      const odsResetSpy = await page.spyOnEvent('odsReset');
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await el.callMethod('reset');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toEqual(defaultValue);
      expect(odsResetSpy).toHaveReceivedEventTimes(1);
      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
      expect(odsChangeSpy).toHaveReceivedEventDetail({
        name: 'ods-range',
        validity: {},
        value: defaultValue,
      });
    });

    it('should receive odsReset event on dual without default value', async() => {
      await setup('<ods-range name="ods-range"></ods-range>', { value: [50, 70] });
      const odsResetSpy = await page.spyOnEvent('odsReset');
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await el.callMethod('reset');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toEqual([null, null]);
      expect(odsResetSpy).toHaveReceivedEventTimes(1);
      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
      expect(odsChangeSpy).toHaveReceivedEventDetail({
        name: 'ods-range',
        validity: {},
        value: [null, null],
      });
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

  describe('values overtake', () => {
    it('should change value on dual but not lower then primary value', async() => {
      const primaryValue = 70;
      await setup('<ods-range></ods-range>', { value: [primaryValue - 1, primaryValue] });

      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowUp');
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect((await el.getProperty('value'))?.[0]).toBe(primaryValue - 1);
      expect((await el.getProperty('value'))?.[1]).toBe(primaryValue);
    });

    it('should change value on dual but not upper then secondary value', async() => {
      const secondaryValue = 70;
      await setup('<ods-range></ods-range>', { value: [secondaryValue, secondaryValue + 1] });
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect((await el.getProperty('value'))?.[0]).toBe(secondaryValue);
      expect((await el.getProperty('value'))?.[1]).toBe(secondaryValue + 1);
    });

    it('should change value with step on dual but not upper then secondary value', async() => {
      const secondaryValue = 70;
      const step = 10;
      await setup(`<ods-range step="${step}"></ods-range>`, { value: [secondaryValue, secondaryValue + (step * 2)] });
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect((await el.getProperty('value'))?.[0]).toBe(secondaryValue);
      expect((await el.getProperty('value'))?.[1]).toBe(secondaryValue + step);
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

      expect((await el.getProperty('value'))?.[0]).toBe(newMax - 1);
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
      await page.waitForChanges();

      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('natifInput')).toBe('');
      expect(url.searchParams.get('odsRange')).toBe('');
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
