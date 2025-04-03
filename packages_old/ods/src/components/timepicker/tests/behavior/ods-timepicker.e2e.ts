
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';
import { type OdsTimepickerChangeEventDetail } from '../../src/interfaces/event';

describe('ods-timepicker behavior', () => {
  let el: E2EElement;
  let page: E2EPage;
  let select: E2EElement;

  async function findSelect(): Promise<void> {
    select = await page.find('ods-timepicker >>> .ods-timepicker__timezones');
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(`${content}<button>Dummy to focus out</button>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-timepicker');
    await findSelect();
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
      await page.exposeFunction('onOdsChangeEvent', (detail: OdsTimepickerChangeEventDetail) => {
        odsChangeEventCount++;
        odsChangeEventDetail = detail;
      });

      await page.evaluateOnNewDocument(() => {
        window.addEventListener('odsChange', (event: Event) => {
          // @ts-ignore function is exposed manually
          window.onOdsChangeEvent((event as CustomEvent<OdsTimepickerChangeEventDetail>).detail);
        });
      });

      await page.setContent(content);
    }

    describe('with no value attribute defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-timepicker></ods-timepicker>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: null,
        });
      });
    });

    describe('with empty string value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-timepicker value=""></ods-timepicker>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: '',
        });
      });
    });

    describe('with no value but empty default-value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-timepicker default-value=""></ods-timepicker>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: '',
        });
      });
    });

    describe('with no value but default-value defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-timepicker default-value="11:11"></ods-timepicker>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: '11:11',
          validity: {},
          value: '11:11',
        });
      });
    });

    describe('with defined value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-timepicker value="11:11"></ods-timepicker>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: '11:11',
          validity: {},
          value: '11:11',
        });
      });
    });

    describe('with defined value and default value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-timepicker default-value="24:24" value="11:11"></ods-timepicker>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: '11:11',
          validity: {},
          value: '11:11',
        });
      });
    });
  });

  describe('methods', () => {
    describe('clear', () => {
      it('should receive odsClear event', async() => {
        await setup('<ods-timepicker value="value"></ods-timepicker>');
        const odsClearSpy = await page.spyOnEvent('odsClear');
        await el.callMethod('clear');
        await page.waitForChanges();
        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });

      it('should receive odsClear event with select', async() => {
        await setup('<ods-timepicker timezones="all" value="value"></ods-timepicker>');
        const odsClearSpy = await page.spyOnEvent('odsClear');
        await el.callMethod('clear');
        await page.waitForChanges();
        expect(await el.getProperty('value')).toBeNull();
        expect(await el.getProperty('currentTimezone')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('reset', () => {
      it('should receive odsReset event', async() => {
        const defaultValue = '11:11';
        const value = '15:00';
        await setup(`<ods-timepicker value="${value}" default-value="${defaultValue}"></ods-timepicker>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');
        expect(await el.getProperty('value')).toBe(value);
        await el.callMethod('reset');
        await page.waitForChanges();
        expect(await el.getProperty('value')).toBe(defaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });

      it('should receive odsReset event with select', async() => {
        const defaultValue = '11:11';
        const currentTimezoneValueValue = '11:11';
        const value = '15:00';
        await setup(`<ods-timepicker timezones="all" value="${value}" default-value="${defaultValue}" current-timezone="${currentTimezoneValueValue}"></ods-timepicker>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');
        expect(await el.getProperty('value')).toBe(value);
        await el.callMethod('reset');
        await page.waitForChanges();
        expect(await el.getProperty('value')).toBe(defaultValue);
        expect(await el.getProperty('currentTimezone')).toBe(currentTimezoneValueValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('watchers', () => {
    describe('on timezones change', () => {
      it('should display select on timezones change', async() => {
        const timezonesValue = 'all';
        await setup('<ods-timepicker></ods-timepicker>');

        expect(select).toBeNull();

        await el.setProperty('timezones', timezonesValue);
        await page.waitForChanges();

        expect(await el.getProperty('timezones')).toBe(timezonesValue);

        await findSelect();

        expect(select).not.toBeNull();
      });
    });
  });

  describe('events', () => {
    it('should call odsChange event', async() => {
      const newValue = '12:12';
      const value = '11:11';
      await setup(`<ods-timepicker name="ods-timepicker" value="${value}"></ods-timepicker>`);
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await el.setProperty('value', newValue);
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(newValue);
      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
      expect(odsChangeSpy).toHaveReceivedEventDetail({
        name: 'ods-timepicker',
        previousValue: value,
        validity: {},
        value: newValue,
      });
    });

    it('should not do an infinite loop', async() => {
      const dummyValue = '11:11';
      await setup('<ods-timepicker></ods-timepicker>');
      const odsValueChangeSpy = await page.spyOnEvent('odsChange');

      await page.evaluate(() => {
        const odsTimepicker = document.querySelector('ods-timepicker');
        odsTimepicker?.addEventListener('odsChange', ((event: CustomEvent): void => {
          odsTimepicker.setAttribute('value', event.detail.value ?? '');
        }) as unknown as EventListener);
      });

      await el.setAttribute('value', dummyValue);
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(dummyValue);
      expect(odsValueChangeSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('form', () => {
    it('should get form data when submit button is triggered', async() => {
      await setup(`<form method="get">
        <ods-timepicker name="odsTimepicker" value="12:42"></ods-timepicker>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('odsTimepicker')).toBe('12:42');
    });

    it('should submit form on Enter', async() => {
      await setup(`<form method="get">
        <ods-timepicker name="odsTimepicker" value="12:42"></ods-timepicker>
      </form>`);

      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('odsTimepicker')).toBe('12:42');
    });
  });
});
