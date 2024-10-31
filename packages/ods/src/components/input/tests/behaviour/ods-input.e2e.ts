import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsInputChangeEventDetail } from '../../src';

describe('ods-input behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;
  let part: E2EElement;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-input');
    part = await page.find('ods-input >>> [part="input"]');
    await page.waitForChanges();
  }

  beforeEach(jest.clearAllMocks);

  describe('initialization', () => {
    let odsChangeEventCount = 0;
    let odsChangeEventDetail = {};

    async function setupWithSpy(content: string): Promise<void> {
      odsChangeEventCount = 0;
      odsChangeEventDetail = {};
      page = await newE2EPage();

      // page.spyOnEvent doesn't seems to work to observe event emitted on first render, before any action happens
      // so we spy manually
      await page.exposeFunction('onOdsChangeEvent', (detail: OdsInputChangeEventDetail) => {
        odsChangeEventCount++;
        odsChangeEventDetail = detail;
      });

      await page.evaluateOnNewDocument(() => {
        window.addEventListener('odsChange', (event: Event) => {
          // @ts-ignore function is exposed manually
          window.onOdsChangeEvent((event as CustomEvent<OdsInputChangeEventDetail>).detail);
        });
      });

      await page.setContent(content);
    }

    describe('with no value attribute defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-input></ods-input>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: null,
        });
      });
    });

    describe('with empty string value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-input value=""></ods-input>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: '',
        });
      });
    });

    describe('with no value but empty default-value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-input default-value=""></ods-input>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: '',
        });
      });
    });

    describe('with no value but default-value defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-input default-value="default"></ods-input>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 'default',
        });
      });

      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-input default-value="33"></ods-input>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: '33',
        });
      });
    });

    describe('with defined value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-input value="value"></ods-input>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 'value',
        });
      });

      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-input value="42"></ods-input>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: '42',
        });
      });
    });

    describe('with defined value and default value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-input default-value="default" value="value"></ods-input>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 'value',
        });
      });

      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-input default-value="33" value="42"></ods-input>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: '42',
        });
      });
    });
  });

  describe('methods', () => {
    describe('clear', () => {
      it('should receive odsClear event', async() => {
        await setup('<ods-input value="value"></ods-input>');
        const odsClearSpy = await page.spyOnEvent('odsClear');
        await el.callMethod('clear');
        await page.waitForChanges();
        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('reset', () => {
      it('should receive odsReset event', async() => {
        const defaultValue = 'defaultValue';
        await setup(`<ods-input value="value" default-value="${defaultValue}"></ods-input>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');
        await el.callMethod('reset');
        await page.waitForChanges();
        expect(await el.getProperty('value')).toBe(defaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('toggleMask', () => {
      it('should toggle mask', async() => {
        await setup('<ods-input is-masked></ods-input>');
        const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');
        await el.callMethod('toggleMask');
        await page.waitForChanges();
        expect(await el.getProperty('isMasked')).toBe(false);

        await el.callMethod('toggleMask');
        await page.waitForChanges();
        expect(await el.getProperty('isMasked')).toBe(true);
        expect(odsToggleMaskSpy).toHaveReceivedEventTimes(2);
      });
    });
  });

  describe('events', () => {
    describe('odsChange', () => {
      it('should receive odsChange event', async() => {
        const typeValue = 'some text';
        await setup('<ods-input name="ods-input"></ods-input>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await part.type(typeValue, { delay: 200 });
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(typeValue);
        expect(odsChangeSpy).toHaveReceivedEventTimes(typeValue.length);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-input',
          previousValue: 'some tex',
          validity: {},
          value: 'some text',
        });
      });

      it('should do nothing because of disabled', async() => {
        await setup('<ods-input is-disabled></ods-input>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await part.type('some text');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(null);
        expect(odsChangeSpy).not.toHaveReceivedEvent();
      });
    });
  });

  describe('form', () => {
    it('should submit form on Enter', async() => {
      await setup(`<form method="get">
        <ods-input name="odsInput" value="text"></ods-input>
      </form>`);

      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('odsInput')).toBe('text');
    });
  });
});
