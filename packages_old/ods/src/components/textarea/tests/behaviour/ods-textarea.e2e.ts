import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsTextareaChangeEventDetail } from '../../src';

describe('ods-textarea behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;
  let textarea: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-textarea');
    textarea = await page.find('ods-textarea >>> .ods-textarea__textarea');
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
      await page.exposeFunction('onOdsChangeEvent', (detail: OdsTextareaChangeEventDetail) => {
        odsChangeEventCount++;
        odsChangeEventDetail = detail;
      });

      await page.evaluateOnNewDocument(() => {
        window.addEventListener('odsChange', (event: Event) => {
          // @ts-ignore function is exposed manually
          window.onOdsChangeEvent((event as CustomEvent<OdsTextareaChangeEventDetail>).detail);
        });
      });

      await page.setContent(content);
    }

    describe('with no value attribute defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-textarea></ods-textarea>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: null,
        });
      });
    });

    describe('with empty string value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-textarea value=""></ods-textarea>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: '',
        });
      });
    });

    describe('with no value but empty default-value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-textarea default-value=""></ods-textarea>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: '',
        });
      });
    });

    describe('with no value but default-value defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-textarea default-value="default"></ods-textarea>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 'default',
        });
      });
    });

    describe('with defined value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-textarea value="value"></ods-textarea>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 'value',
        });
      });
    });

    describe('with defined value and default value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-textarea default-value="default" value="value"></ods-textarea>');

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
      it('should emit an odsClear event', async() => {
        await setup('<ods-textarea value="value"></ods-textarea>');
        const odsClearSpy = await page.spyOnEvent('odsClear');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });

      it('should emit an odsClear event even if disabled', async() => {
        await setup('<ods-textarea is-disabled value="value"></ods-textarea>');
        const odsClearSpy = await page.spyOnEvent('odsClear');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('reset', () => {
      it('should emit an odsReset event', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        await setup(`<ods-textarea value="value" default-value="${dummyDefaultValue}"></ods-textarea>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });

      it('should emit an odsReset event even if disabled', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        await setup(`<ods-textarea is-disabled value="value" default-value="${dummyDefaultValue}"></ods-textarea>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('watchers', () => {
    describe('on value change', () => {
      it('should emit an odsChange event', async() => {
        const dummyValue = 'dummy value';
        await setup('<ods-textarea name="ods-textarea"></ods-textarea>');
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await textarea.type(dummyValue, { delay: 100 });
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyValue);
        expect(odsValueChangeSpy).toHaveReceivedEventTimes(dummyValue.length);
        expect(odsValueChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-textarea',
          previousValue: dummyValue.slice(0, -1),
          validity: {},
          value: dummyValue,
        });
      });

      it('should do nothing if disabled', async() => {
        await setup('<ods-textarea is-disabled></ods-textarea>');
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await textarea.type('dummy value');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(null);
        expect(odsValueChangeSpy).not.toHaveReceivedEvent();
      });

      it('should not do an infinite loop', async() => {
        const dummyValue = 'dummy value';
        await setup('<ods-textarea></ods-textarea>');
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await page.evaluate(() => {
          const odsTextarea = document.querySelector('ods-textarea');
          odsTextarea?.addEventListener('odsChange', ((event: CustomEvent): void => {
            odsTextarea.setAttribute('value', event.detail.value ?? '');
          }) as unknown as EventListener);
        });

        await el.setAttribute('value', dummyValue);
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyValue);
        expect(odsValueChangeSpy).toHaveReceivedEventTimes(1);
      });
    });
  });
});
