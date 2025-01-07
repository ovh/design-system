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

  describe('props', () => {
    describe('step', () => {
      it('should allow decimal with step any', async() => {
        await setup('<ods-input type="number" step="any" value="9.99"></ods-input>');

        await el.press('ArrowUp');

        expect(await el.getProperty('value')).toBe(10.99);
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
      it('should receive odsChange event with text value', async() => {
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

      it('should receive odsChange event with number value', async() => {
        const typeValue = 123;
        await setup('<ods-input name="ods-input" type="number"></ods-input>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await part.type(typeValue.toString(), { delay: 200 });
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(typeValue);
        expect(odsChangeSpy).toHaveReceivedEventTimes(typeValue.toString().length);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-input',
          previousValue: 12,
          validity: {},
          value: 123,
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

      it('should not do an infinite loop with string', async() => {
        const dummyValue = 'dummy value';
        await setup('<ods-input></ods-input>');
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await page.evaluate(() => {
          const odsInput = document.querySelector('ods-input');
          odsInput?.addEventListener('odsChange', ((event: CustomEvent): void => {
            odsInput.setAttribute('value', event.detail.value?.toString() ?? '');
          }) as unknown as EventListener);
        });

        await el.setAttribute('value', dummyValue);
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyValue);
        expect(odsValueChangeSpy).toHaveReceivedEventTimes(1);
      });

      it('should not do an infinite loop with number', async() => {
        const dummyValue = 2;
        await setup('<ods-input></ods-input>');
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await page.evaluate(() => {
          const odsInput = document.querySelector('ods-input');
          odsInput?.addEventListener('odsChange', ((event: CustomEvent): void => {
            odsInput.setAttribute('value', event.detail.value?.toString() ?? '');
          }) as unknown as EventListener);
        });

        await el.setAttribute('value', dummyValue);
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyValue.toString());
        expect(odsValueChangeSpy).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('form', () => {
    let buttonSearch: E2EElement;
    let formData: Record<string, FormDataEntryValue> = {};

    async function setupWithinForm(content: string): Promise<void> {
      formData = {};
      page = await newE2EPage();

      await page.exposeFunction('e2eFormSubmit', (data: Record<string, FormDataEntryValue>) => {
        formData = data;
      });

      await page.setContent(`<form method="get" onsubmit="return false;">${content}</form>`);

      await page.evaluate(() => {
        const form = document.querySelector('form');

        form?.addEventListener('submit', () => {
          const formData = new FormData(form);
          const data: Record<string, FormDataEntryValue> = {};

          for (const [key, value] of formData) {
            data[key] = value;
          }

          // @ts-ignore function is exposed manually
          window.e2eFormSubmit(data);
        });
      });

      el = await page.find('ods-input');
      buttonSearch = await page.find('ods-input >>> ods-button[icon="magnifying-glass"]');
    }

    it('should get form data with button type submit', async() => {
      await setupWithinForm(`
        <ods-input name="odsInput" value="On Vous Heberge ?"></ods-input>
        <input type="text" name="nativeInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      `);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForChanges();

      expect(formData).toEqual({ nativeInput: '', odsInput: 'On Vous Heberge ?' });
    });

    it('should reset form with button type reset', async() => {
      await setupWithinForm(`
        <ods-input name="odsInput" value="On Vous Heberge ?"></ods-input>
        <input type="text" name="nativeInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      `);
      const resetButton = await page.find('button[type="reset"]');
      const submitButton = await page.find('button[type="submit"]');

      await resetButton.click();
      await page.waitForChanges();

      await submitButton.click();
      await page.waitForChanges();

      expect(formData).toEqual({ nativeInput: '', odsInput: '' });
    });

    it('should submit form on Enter', async() => {
      await setupWithinForm('<ods-input name="odsInput" value="text"></ods-input>');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(formData).toEqual({ odsInput: 'text' });
    });

    it('should submit form on search button Enter', async() => {
      await setupWithinForm('<ods-input name="odsInput" type="search" value="text"></ods-input>');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(formData).toEqual({ odsInput: 'text' });
    });

    it('should submit form on search button space', async() => {
      await setupWithinForm('<ods-input name="odsInput" type="search" value="text"></ods-input>');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      await page.waitForChanges();

      expect(formData).toEqual({ odsInput: 'text' });
    });

    it('should submit form on search button click', async() => {
      await setupWithinForm('<ods-input name="odsInput" type="search" value="text"></ods-input>');

      await buttonSearch.click();
      await page.waitForChanges();

      expect(formData).toEqual({ odsInput: 'text' });
    });

    it('should not submit form when Enter on clearable button', async() => {
      await setupWithinForm('<ods-input name="ods-input" is-clearable value="value"></ods-input>');
      const odsClearSpy = await page.spyOnEvent('odsClear');

      expect(await el.getProperty('value')).toBe('value');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(formData).toEqual({});
      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
    });
  });
});
