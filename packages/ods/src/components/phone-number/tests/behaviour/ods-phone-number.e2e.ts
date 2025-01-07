import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsPhoneNumberChangeEventDetail } from '../../src';

describe('ods-phone-number behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-phone-number');
  }

  beforeEach(jest.clearAllMocks);

  it('should reset input value on country change', async() => {
    await setup('<ods-phone-number iso-code="zw" countries="all" value="0123456789"></ods-phone-number>');

    const selectElement = await page.find('ods-phone-number >>> ods-select');
    await selectElement.click();
    await page.waitForChanges();
    await page.evaluate(() => {
      document.querySelector('ods-phone-number')
        ?.shadowRoot?.querySelector('ods-select')
        ?.shadowRoot?.querySelector<HTMLElement>('.option')?.click();
    });
    await page.waitForChanges();
    await page.waitForChanges();

    expect(await page.evaluate(() => document.querySelector('ods-phone-number')?.getAttribute('value'))).toBe('');
  });

  describe('initialization', () => {
    let odsChangeEventCount = 0;
    let odsChangeEventDetail = {};

    async function setupWithSpy(content: string): Promise<void> {
      odsChangeEventCount = 0;
      odsChangeEventDetail = {};
      page = await newE2EPage();

      // page.spyOnEvent doesn't seems to work to observe event emitted on first render, before any action happens
      // so we spy manually
      await page.exposeFunction('onOdsChangeEvent', (detail: OdsPhoneNumberChangeEventDetail) => {
        odsChangeEventCount++;
        odsChangeEventDetail = detail;
      });

      await page.evaluateOnNewDocument(() => {
        window.addEventListener('odsChange', (event: Event) => {
          // @ts-ignore function is exposed manually
          window.onOdsChangeEvent((event as CustomEvent<OdsPhoneNumberChangeEventDetail>).detail);
        });
      });

      await page.setContent(content);
    }

    describe('with no value attribute defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-phone-number iso-code="fr"></ods-phone-number>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          isoCode: 'fr',
          previousValue: null,
          validity: {},
          value: null,
        });
      });
    });

    describe('with empty string value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-phone-number iso-code="fr" value=""></ods-phone-number>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          isoCode: 'fr',
          previousValue: null,
          validity: {},
          value: '',
        });
      });
    });

    describe('with no value but empty default-value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-phone-number iso-code="fr" default-value=""></ods-phone-number>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          isoCode: 'fr',
          previousValue: null,
          validity: {},
          value: '',
        });
      });
    });

    describe('with no value but default-value defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-phone-number iso-code="fr" default-value="0123456789"></ods-phone-number>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          isoCode: 'fr',
          previousValue: null,
          validity: {},
          value: '+33123456789',
        });
      });
    });

    describe('with defined value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-phone-number iso-code="fr" value="0123456789"></ods-phone-number>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          isoCode: 'fr',
          previousValue: null,
          validity: {},
          value: '+33123456789',
        });
      });
    });

    describe('with defined value and default value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-phone-number iso-code="fr" default-value="0123456789" value="0987654321"></ods-phone-number>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          isoCode: 'fr',
          previousValue: null,
          validity: {},
          value: '+33987654321',
        });
      });
    });
  });

  describe('form', () => {
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
    }

    it('should get form data when submit button is triggered', async() => {
      await setupWithinForm(`
        <ods-phone-number iso-code="fr" name="odsPhoneNumber" value="0123456789"></ods-phone-number>
        <button type="submit">Submit</button>
      `);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForChanges();

      expect(formData).toEqual({ odsPhoneNumber: '+33123456789' });
    });

    it('should reset form when reset button is triggered', async() => {
      await setupWithinForm(`
        <ods-phone-number name="odsPhoneNumber" value="0123456789"></ods-phone-number>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      `);
      const resetButton = await page.find('button[type="reset"]');
      const submitButton = await page.find('button[type="submit"]');

      await resetButton.click();
      await page.waitForChanges();

      await submitButton.click();
      await page.waitForChanges();

      expect(formData).toEqual({ odsPhoneNumber: '' });
    });

    it('should submit form on Enter', async() => {
      await setupWithinForm('<ods-phone-number iso-code="fr" name="odsPhoneNumber" value="0123456789"></ods-phone-number>');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(formData).toEqual({ odsPhoneNumber: '+33123456789' });
    });
  });

  describe('methods', () => {
    describe('clear', () => {
      it('should emit an odsClear event', async() => {
        await setup('<ods-phone-number value="0123456789"></ods-phone-number>');
        const odsClearSpy = await page.spyOnEvent('odsClear');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });

      it('should emit an odsClear event even if disabled', async() => {
        await setup('<ods-phone-number is-disabled value="0123456789"></ods-phone-number>');
        const odsClearSpy = await page.spyOnEvent('odsClear');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('reset', () => {
      it('should emit an odsReset event', async() => {
        const dummyDefaultValue = '0123456789';
        await setup(`<ods-phone-number value="value" default-value="${dummyDefaultValue}"></ods-phone-number>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });

      it('should emit an odsReset event even if disabled', async() => {
        const dummyDefaultValue = '0123456789';
        await setup(`<ods-phone-number is-disabled value="value" default-value="${dummyDefaultValue}"></ods-phone-number>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('event', () => {
    describe('odsChange', () => {
      it('should emit an odsChange event', async() => {
        await setup('<ods-phone-number name="ods-phone-number" iso-code="fr"></ods-phone-number>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');
        const newValue = '0987654321';

        await el.type(newValue, { delay: 100 });
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(newValue);
        expect(odsChangeSpy).toHaveReceivedEventTimes(newValue.length);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          isoCode: 'fr',
          name: 'ods-phone-number',
          previousValue: newValue.slice(0, -1),
          validity: {},
          value: `+33${newValue.substring(1)}`,
        });
      });

      it('should not emit an odsChange event if disabled', async() => {
        await setup('<ods-phone-number is-disabled name="ods-phone-number" iso-code="fr"></ods-phone-number>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        const newValue = '0987654321';
        await page.keyboard.press('Tab');
        await page.keyboard.type(newValue);
        await page.waitForChanges();

        expect(odsChangeSpy).toHaveReceivedEventTimes(0);
      });

      it('should not do an infinite loop', async() => {
        const dummyValue = '+33123456789';
        await setup('<ods-phone-number iso-code="fr"></ods-phone-number>');
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await page.evaluate(() => {
          const odsPhoneNumber = document.querySelector('ods-phone-number');
          odsPhoneNumber?.addEventListener('odsChange', ((event: CustomEvent): void => {
            odsPhoneNumber.setAttribute('value', event.detail.value?.toString() ?? '');
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
