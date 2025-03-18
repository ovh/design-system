import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsDatepicker, type OdsDatepickerChangeEventDetail } from '../../src';

describe('ods-datepicker behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isDatepickerOpen(): Promise<boolean> {
    return page.evaluate(() => {
      return document.querySelector('ods-datepicker')?.shadowRoot?.querySelector('.datepicker')?.classList.contains('active') || false;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.emulateTimezone('Atlantic/Reykjavik'); // UTC+0
    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-datepicker');

    await page.waitForChanges();
  }

  beforeEach(jest.clearAllMocks);

  describe('initialization', () => {
    const dummyDefaultValue = '2000-01-02';
    const dummyFormat = 'yyyy-mm-dd';
    let odsChangeEventCount = 0;
    let odsChangeEventDetail = {};

    async function setupWithSpy(content: string): Promise<void> {
      odsChangeEventCount = 0;
      odsChangeEventDetail = {};
      page = await newE2EPage();

      // page.spyOnEvent doesn't seems to work to observe event emitted on first render, before any action happens
      // so we spy manually
      await page.exposeFunction('onOdsChangeEvent', (detail: OdsDatepickerChangeEventDetail) => {
        odsChangeEventCount++;
        odsChangeEventDetail = detail;
      });

      await page.evaluateOnNewDocument(() => {
        window.addEventListener('odsChange', (event: Event) => {
          // @ts-ignore function is exposed manually
          window.onOdsChangeEvent((event as CustomEvent<OdsDatepickerChangeEventDetail>).detail);
        });
      });

      await page.emulateTimezone('Atlantic/Reykjavik'); // UTC+0
      await page.setContent(content);
    }

    describe('with no value attribute defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-datepicker></ods-datepicker>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          formattedValue: '',
          validity: {},
          value: null,
        });
      });
    });

    describe('with empty string value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-datepicker value=""></ods-datepicker>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          formattedValue: '',
          validity: {},
          value: null,
        });
      });
    });

    describe('with no value but empty default-value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-datepicker default-value=""></ods-datepicker>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          formattedValue: '',
          validity: {},
          value: null,
        });
      });
    });

    describe('with no value but default-value defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy(`<ods-datepicker default-value="${dummyDefaultValue}" format="${dummyFormat}"></ods-datepicker>`);

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          formattedValue: dummyDefaultValue,
          validity: {},
          value: new Date(dummyDefaultValue).toISOString(),
        });
      });
    });
  });

  describe('methods', () => {
    describe('clear', () => {
      it('should emit an odsClear event', async() => {
        await setup('<ods-datepicker value="value"></ods-datepicker>');
        const odsClearSpy = await page.spyOnEvent('odsClear');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });

      it('should emit an odsClear event even if disabled', async() => {
        await setup('<ods-datepicker is-disabled value="value"></ods-datepicker>');
        const odsClearSpy = await page.spyOnEvent('odsClear');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('close', () => {
      it('should close the datepicker', async() => {
        await setup('<ods-datepicker></ods-datepicker>');
        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isDatepickerOpen()).toBe(true);

        await el.callMethod('close');
        await page.waitForChanges();

        expect(await isDatepickerOpen()).toBe(false);
      });
    });

    describe('open', () => {
      it('should open the datepicker', async() => {
        await setup('<ods-datepicker></ods-datepicker>');

        expect(await isDatepickerOpen()).toBe(false);

        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isDatepickerOpen()).toBe(true);
      });
    });

    describe('reset', () => {
      it('should emit an odsReset event', async() => {
        await setup('<ods-datepicker default-value="14/10/2024"></ods-datepicker>');
        await page.evaluate(() => {
          document.querySelector<OdsDatepicker & HTMLElement>('ods-datepicker')!.value = new Date();
        });
        await page.waitForChanges();
        const odsResetSpy = await page.spyOnEvent('odsReset');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await page.evaluate(() => document.querySelector('ods-datepicker')?.shadowRoot?.querySelector('input')?.value)).toBe('14/10/2024');
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });

      it('should emit an odsReset event even if disabled', async() => {
        await setup('<ods-datepicker is-disabled default-value="14/10/2024"></ods-datepicker>');
        await page.evaluate(() => {
          document.querySelector<OdsDatepicker & HTMLElement>('ods-datepicker')!.value = new Date();
        });
        await page.waitForChanges();
        const odsResetSpy = await page.spyOnEvent('odsReset');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await page.evaluate(() => document.querySelector('ods-datepicker')?.shadowRoot?.querySelector('input')?.value)).toBe('14/10/2024');
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('event', () => {
    describe('odsChange', () => {
      it('should emit an odsChange event', async() => {
        const value = new Date('10 May 2024');
        await setup('<ods-datepicker name="ods-datepicker"></ods-datepicker>');
        await page.evaluate((value) => {
          document.querySelector<OdsDatepicker & HTMLElement>('ods-datepicker')!.value = value;
        }, value);
        const odsOdsChangeSpy = await page.spyOnEvent('odsChange');

        await page.keyboard.press('Tab');
        await page.keyboard.type('11/05/2024');
        await page.keyboard.press('Enter');
        await page.waitForChanges();

        expect(odsOdsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsOdsChangeSpy).toHaveReceivedEventDetail({
          formattedValue: '11/05/2024',
          name: 'ods-datepicker',
          previousValue: value.toISOString(),
          validity: {},
          value: '2024-05-11T00:00:00.000Z',
        });
      });

      it('should not do an infinite loop', async() => {
        const dummyValue = '11/05/2024';
        await setup('<ods-datepicker></ods-datepicker>');
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await page.evaluate(() => {
          const odsDatepicker = document.querySelector<OdsDatepicker & HTMLElement>('ods-datepicker');
          odsDatepicker?.addEventListener('odsChange', ((event: CustomEvent): void => {
            odsDatepicker!.value = (event.detail?.value && new Date(event.detail.value.toISOString())) ?? null;
          }) as unknown as EventListener);
        });

        await page.evaluate((value) => {
          document.querySelector<OdsDatepicker & HTMLElement>('ods-datepicker')!.value = new Date(value);
        }, dummyValue);
        await page.waitForChanges();

        expect(odsValueChangeSpy).toHaveReceivedEventTimes(1);
      });
    });
  });
});
