import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsPasswordChangeEventDetail } from '../../src';

describe('ods-password behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-password');
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
      await page.exposeFunction('onOdsChangeEvent', (detail: OdsPasswordChangeEventDetail) => {
        odsChangeEventCount++;
        odsChangeEventDetail = detail;
      });

      await page.evaluateOnNewDocument(() => {
        window.addEventListener('odsChange', (event: Event) => {
          // @ts-ignore function is exposed manually
          window.onOdsChangeEvent((event as CustomEvent<OdsPasswordChangeEventDetail>).detail);
        });
      });

      await page.setContent(content);
    }

    describe('with no value attribute defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-password></ods-password>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: null,
        });
      });
    });

    describe('with empty string value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-password value=""></ods-password>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: '',
        });
      });
    });

    describe('with no value but empty default-value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-password default-value=""></ods-password>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: '',
        });
      });
    });

    describe('with no value but default-value defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-password default-value="default"></ods-password>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 'default',
        });
      });
    });

    describe('with defined value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-password value="value"></ods-password>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 'value',
        });
      });
    });

    describe('with defined value and default value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-password default-value="default" value="value"></ods-password>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 'value',
        });
      });
    });
  });

  describe('methods', () => {
    describe('clear', () => {
      it('should receive odsClear event', async() => {
        await setup('<ods-password value="value"></ods-password>');
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
        await setup(`<ods-password value="value" default-value="${defaultValue}"></ods-password>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');
        await el.callMethod('reset');
        await page.waitForChanges();
        expect(await el.getProperty('value')).toBe(defaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('toggleMask', () => {
      it('should toggle mask', async() => {
        await setup('<ods-password is-masked></ods-password>');
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
        await setup('<ods-password name="ods-password"></ods-password>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await page.keyboard.press('Tab');
        await page.keyboard.type(typeValue, { delay: 100 });
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(typeValue);
        expect(odsChangeSpy).toHaveReceivedEventTimes(typeValue.length);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-password',
          previousValue: 'some tex',
          validity: {},
          value: 'some text',
        });
      });

      it('should do nothing because of disabled', async() => {
        await setup('<ods-password is-disabled></ods-password>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await page.keyboard.press('Tab');
        await page.keyboard.type('some text', { delay: 100 });
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(null);
        expect(odsChangeSpy).not.toHaveReceivedEvent();
      });

      it('should not do an infinite loop', async() => {
        const dummyValue = 'dummy value';
        await setup('<ods-password></ods-password>');
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await page.evaluate(() => {
          const odsPassword = document.querySelector('ods-password');
          odsPassword?.addEventListener('odsChange', ((event: CustomEvent): void => {
            odsPassword.setAttribute('value', event.detail.value?.toString() ?? '');
          }) as unknown as EventListener);
        });

        await el.setAttribute('value', dummyValue);
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyValue);
        expect(odsValueChangeSpy).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('Form', () => {
    it('should get form data with button type submit', async() => {
      await setup(`<form method="get">
        <ods-password name="odsPassword" value="On Vous Heberge ?"></ods-password>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('odsPassword')).toBe('On Vous Heberge ?');
    });

    it('should reset form with button type reset', async() => {
      await setup(`<form method="get">
        <ods-password name="odsPassword" value="On Vous Heberge ?"></ods-password>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      await resetButton.click();

      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('odsPassword')).toBe('');
    });

    it('should submit form on Enter', async() => {
      await setup(`<form method="get">
        <ods-password name="odsPassword" value="password"></ods-password>
      </form>`);

      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('odsPassword')).toBe('password');
    });
  });
});
