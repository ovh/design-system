import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsComboboxChangeEventDetail } from '../../src';

describe('ods-combobox behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;
  let selectComponent: HTMLElement;

  async function isComboboxOpen(): Promise<boolean> {
    return page.evaluate(() => {
      return document.querySelector('ods-combobox')?.shadowRoot?.querySelector('.ts-wrapper')?.classList.contains('dropdown-active') || false;
    });
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-combobox');
    selectComponent = el.shadowRoot!.querySelector('.ts-wrapper')!;
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
      await page.exposeFunction('onOdsChangeEvent', (detail: OdsComboboxChangeEventDetail) => {
        odsChangeEventCount++;
        odsChangeEventDetail = detail;
      });

      await page.evaluateOnNewDocument(() => {
        window.addEventListener('odsChange', (event: Event) => {
          // @ts-ignore function is exposed manually
          window.onOdsChangeEvent((event as CustomEvent<OdsComboboxChangeEventDetail>).detail);
        });
      });

      await page.setContent(content);
    }

    describe('with no value attribute defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-combobox><option value="1">Value 1</option><option value="2">Value 2</option></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: null,
        });
      });

      it('should trigger a uniq odsChange event when multiple is allowed', async() => {
        await setupWithSpy('<ods-combobox allow-multiple><option value="1">Value 1</option><option value="2">Value 2</option></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: null,
        });
      });
    });

    describe('with empty string value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-combobox value=""><option value="1">Value 1</option><option value="2">Value 2</option></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '',
        });
      });

      it('should trigger a uniq odsChange event when multiple is allowed', async() => {
        await setupWithSpy('<ods-combobox allow-multiple value=""><option value="1">Value 1</option><option value="2">Value 2</option></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '',
        });
      });
    });

    describe('with no value but empty default-value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-combobox default-value=""><option value="1">Value 1</option><option value="2">Value 2</option></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '',
        });
      });

      it('should trigger a uniq odsChange event when multiple is allowed', async() => {
        await setupWithSpy('<ods-combobox allow-multiple default-value=""><option value="1">Value 1</option><option value="2">Value 2</option></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '',
        });
      });
    });

    describe('with no value but default-value defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-combobox default-value="2"><option value="1">Value 1</option><option value="2">Value 2</option></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '2',
        });
      });

      it('should trigger a uniq odsChange event when multiple is allowed', async() => {
        await setupWithSpy('<ods-combobox allow-multiple default-value="2"><option value="1">Value 1</option><option value="2">Value 2</option></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '2',
        });
      });
    });

    describe('with defined value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-combobox value="2"><option value="1">Value 1</option><option value="2">Value 2</option></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '2',
        });
      });

      it('should trigger a uniq odsChange event when multiple is allowed', async() => {
        await setupWithSpy('<ods-combobox allow-multiple value="2"><option value="1">Value 1</option><option value="2">Value 2</option></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '2',
        });
      });
    });

    describe('with defined value and default value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-combobox default-value="1" value="2"><option value="1">Value 1</option><option value="2">Value 2</option></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '2',
        });
      });

      it('should trigger a uniq odsChange event when multiple is allowed', async() => {
        await setupWithSpy('<ods-combobox allow-multiple default-value="1" value="2"><option value="1">Value 1</option><option value="2">Value 2</option></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '2',
        });
      });
    });
  });

  describe('form', () => {
    it('should get form data when submit button is triggered', async() => {
      await setup(`<form method="get">
        <ods-combobox name="ods-combobox" value="1"><option value="1">1</option></ods-combobox>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('ods-combobox')).toBe('1');
    });

    it('should reset form when reset button is triggered', async() => {
      await setup(`<form method="get">
        <ods-combobox name="ods-combobox" value="1"><option value="1">1</option></ods-combobox>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      const submitButton = await page.find('button[type="submit"]');

      await resetButton.click();
      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('ods-combobox')).toBe('');
    });
  });

  describe('methods', () => {
    describe('clear', () => {
      it('should emit an odsClear event', async() => {
        await setup('<ods-combobox name="ods-combobox" value="value"></ods-combobox>');
        const odsClearSpy = await page.spyOnEvent('odsClear');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-combobox',
          previousValue: 'value',
          validity: {},
          value: null,
        });
      });

      it('should emit an odsClear event even if disabled', async() => {
        await setup('<ods-combobox name="ods-combobox" is-disabled value="value"></ods-combobox>');
        const odsClearSpy = await page.spyOnEvent('odsClear');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-combobox',
          previousValue: 'value',
          validity: {},
          value: null,
        });
      });
    });

    describe('close', () => {
      it('should close the combobox dropdown', async() => {
        await setup('<ods-combobox><option>Value 1</option></ods-combobox>');
        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isComboboxOpen()).toBe(true);

        await el.callMethod('close');
        await page.waitForChanges();

        expect(await isComboboxOpen()).toBe(false);
      });
    });

    describe('open', () => {
      it('should open the combobox dropdown', async() => {
        await setup('<ods-combobox><option>Value 1</option></ods-combobox>');

        expect(await isComboboxOpen()).toBe(false);

        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isComboboxOpen()).toBe(true);
      });
    });

    describe('reset', () => {
      it('should emit an odsReset event', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        await setup(`<ods-combobox name="ods-combobox" value="value" default-value="${dummyDefaultValue}"></ods-combobox>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-combobox',
          previousValue: 'value',
          validity: {},
          value: dummyDefaultValue,
        });
      });

      it('should emit an odsReset event even if disabled', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        await setup(`<ods-combobox name="ods-combobox" is-disabled value="value" default-value="${dummyDefaultValue}"></ods-combobox>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-combobox',
          previousValue: 'value',
          validity: {},
          value: dummyDefaultValue,
        });
      });

      it('should emit an odsReset event without defaultValue', async() => {
        await setup('<ods-combobox name="ods-combobox" is-disabled value="value"></ods-combobox>');
        const odsResetSpy = await page.spyOnEvent('odsReset');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-combobox',
          previousValue: 'value',
          validity: {},
          value: null,
        });
      });
    });
  });

  describe('watchers', () => {
    describe('on value change', () => {
      it('should emit an odsChange event', async() => {
        const dummyValue = 'dummy value';
        await setup(`<ods-combobox><option value="${dummyValue}">Value 1</option></ods-combobox>`);
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('open');
        await page.evaluate(() => {
          document.querySelector('ods-combobox')?.shadowRoot?.querySelector<HTMLElement>('[role="option"]')?.click();
        });
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyValue);
        expect(odsValueChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsValueChangeSpy).toHaveReceivedEventDetail({
          previousValue: null,
          validity: {},
          value: dummyValue,
        });
      });

      it('should not do an infinite loop', async() => {
        const dummyValue = 'dummy value';
        await setup(`<ods-combobox><option value="${dummyValue}">Value 1</option></ods-combobox>`);
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await page.evaluate(() => {
          const odsCombobox = document.querySelector('ods-combobox');
          odsCombobox?.addEventListener('odsChange', ((event: CustomEvent): void => {
            odsCombobox.setAttribute('value', event.detail.value);
          }) as unknown as EventListener);
        });

        await el.setAttribute('value', dummyValue);
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyValue);
        expect(odsValueChangeSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('readonly', () => {
      it('should not open combobox if readonly', async() => {
        const dummyValue = 'dummy value';
        await setup(`<ods-combobox is-readonly><option value="${dummyValue}">Value 1</option></ods-combobox>`);
        expect(await isComboboxOpen()).toBe(false);

        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isComboboxOpen()).toBe(false);
      });
    });

    describe('on slot change', () => {
      it('should render with is-disabled', async() => {
        await setup('<ods-combobox is-disabled><option value="1">Value 1</option></ods-combobox>');
        expect(selectComponent.classList.contains('disabled')).toBe(true);
        el.innerHTML = '<option value="1">Value 1</option><option value="2">Value 2</option>';
        el.setProperty('isDisabled', false);
        await page.waitForChanges();

        expect(await page.evaluate(() => {
          return document.querySelector('ods-combobox')?.shadowRoot?.querySelector('.ts-wrapper')?.classList.contains('disabled');
        })).toBe(false);
      });
    });
  });
});
