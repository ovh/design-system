import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsComboboxChangeEventDetail } from '../../src';

// TODO add to behaviour the filter on type + clear on clearable press + reset on focus out

describe('ods-combobox behaviour', () => {
  let el: E2EElement;
  let input: E2EElement;
  let page: E2EPage;

  async function isOpen(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.querySelector('ods-combobox')?.getAttribute('aria-expanded') === 'true';
    });
  }

  async function openList(): Promise<void> {
    await input.click();
    await page.waitForChanges();
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    el = await page.find('ods-combobox');
    input = await page.find('ods-combobox >>> ods-input');
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
        await setupWithSpy('<ods-combobox></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: '',
        });
      });
    });

    describe('with empty string value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-combobox value=""></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: '',
        });
      });
    });

    describe('with no value but empty default-value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-combobox default-value=""></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: '',
        });
      });
    });

    describe('with no value but default-value defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-combobox default-value="default"></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 'default',
        });
      });
    });

    describe('with defined value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-combobox value="value"></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 'value',
        });
      });
    });

    describe('with defined value and default value', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-combobox default-value="default" value="value"></ods-combobox>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          validity: {},
          value: 'value',
        });
      });
    });
  });

  describe('methods', () => {
    async function countTag(): Promise<number> {
      return (await page.findAll('ods-combobox >>> ods-tag')).length;
    }

    describe('clear', () => {
      it('should send odsClear event and clear input on single selection mode', async() => {
        const dummyValue = 'value';
        await setup(`<ods-combobox value="${dummyValue}"></ods-combobox>`);
        const odsClearSpy = await page.spyOnEvent('odsClear');

        expect(await el.getProperty('value')).toBe(dummyValue);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });

      it('should send odsClear event, clear selection and input on multiple selection mode', async() => {
        const dummyValue = 'value 1,value 2';
        await setup(`<ods-combobox allow-multiple value="${dummyValue}"></ods-combobox>`);
        const odsClearSpy = await page.spyOnEvent('odsClear');

        expect(await el.getProperty('value')).toBe(dummyValue);
        expect(await countTag()).toBe(2);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(await countTag()).toBe(0);
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('close', () => {
      it('should close the dropdown', async() => {
        await setup('<ods-combobox><ods-combobox-item>Value 1</ods-combobox-item></ods-combobox>');
        await openList();

        expect(await isOpen()).toBe(true);

        await el.callMethod('close');
        await page.waitForChanges();

        expect(await isOpen()).toBe(false);
      });
    });

    describe('open', () => {
      it('should open the dropdown', async() => {
        await setup('<ods-combobox><ods-combobox-item>Value 1</ods-combobox-item></ods-combobox>');

        expect(await isOpen()).toBe(false);

        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isOpen()).toBe(true);
      });

      it('should not open the dropdown if disabled', async() => {
        await setup('<ods-combobox is-disabled><ods-combobox-item>Value 1</ods-combobox-item></ods-combobox>');

        expect(await isOpen()).toBe(false);

        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isOpen()).toBe(false);
      });

      it('should not open the dropdown if readonly', async() => {
        await setup('<ods-combobox is-readonly><ods-combobox-item>Value 1</ods-combobox-item></ods-combobox>');

        expect(await isOpen()).toBe(false);

        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isOpen()).toBe(false);
      });
    });

    describe('reset', () => {
      describe('single', () => {
        it('should send odsReset event and clear if no default value ', async() => {
          const dummyValue = 'value';
          await setup(`<ods-combobox value="${dummyValue}"></ods-combobox>`);
          const odsResetSpy = await page.spyOnEvent('odsReset');

          expect(await el.getProperty('value')).toBe(dummyValue);

          await el.callMethod('reset');
          await page.waitForChanges();

          expect(await el.getProperty('value')).toBeNull();
          expect(odsResetSpy).toHaveReceivedEventTimes(1);
        });

        it('should send odsReset event and put back default value ', async() => {
          const dummyDefaultValue = 'default value';
          const dummyValue = 'value';
          await setup(`<ods-combobox value="${dummyValue}" default-value="${dummyDefaultValue}"></ods-combobox>`);
          const odsResetSpy = await page.spyOnEvent('odsReset');

          expect(await el.getProperty('value')).toBe(dummyValue);

          await el.callMethod('reset');
          await page.waitForChanges();

          expect(await el.getProperty('value')).toBe(dummyDefaultValue);
          expect(odsResetSpy).toHaveReceivedEventTimes(1);
        });
      });

      describe('multiple', () => {
        it('should send odsReset event and clear if no default value ', async() => {
          const dummyValue = 'value 1,value 2';
          await setup(`<ods-combobox allow-multiple value="${dummyValue}"></ods-combobox>`);
          const odsResetSpy = await page.spyOnEvent('odsReset');

          expect(await el.getProperty('value')).toBe(dummyValue);
          expect(await countTag()).toBe(2);

          await el.callMethod('reset');
          await page.waitForChanges();

          expect(await el.getProperty('value')).toBeNull();
          expect(await countTag()).toBe(0);
          expect(odsResetSpy).toHaveReceivedEventTimes(1);
        });

        it('should send odsReset event and put back default value ', async() => {
          const dummyDefaultValue = 'default value';
          const dummyValue = 'value1,value2';
          await setup(`<ods-combobox allow-multiple value="${dummyValue}" default-value="${dummyDefaultValue}"></ods-combobox>`);
          const odsResetSpy = await page.spyOnEvent('odsReset');

          expect(await el.getProperty('value')).toBe(dummyValue);
          expect(await countTag()).toBe(2);

          await el.callMethod('reset');
          await page.waitForEvent('odsChange');

          expect(await el.getProperty('value')).toBe(dummyDefaultValue);
          expect(await countTag()).toBe(1);
          expect(odsResetSpy).toHaveReceivedEventTimes(1);
        });
      });
    });
  });

  describe('events', () => {
    describe('odsBlur', () => {
      it('should send odsBlur event on component blur', async() => {
        await setup('<ods-combobox><ods-combobox-item>Value</ods-combobox-item></ods-combobox><button>Focusable element</button>');
        const odsBlurSpy = await page.spyOnEvent('odsBlur');
        await openList();

        expect(odsBlurSpy).toHaveReceivedEventTimes(0);

        await page.keyboard.press('Tab', { delay: 100 });
        await page.waitForChanges();

        expect(odsBlurSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('odsChange', () => {
      it('should not send odsChange event while typing in the input', async() => {
        await setup('<ods-combobox><ods-combobox-item>Value</ods-combobox-item></ods-combobox>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await input.type('Val', { delay: 20 });
        await page.waitForChanges();

        expect(odsChangeSpy).toHaveReceivedEventTimes(0);
      });

      it('should send odsChange event when selecting an item', async() => {
        await setup('<ods-combobox><ods-combobox-item value="value">Value</ods-combobox-item></ods-combobox>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');
        await openList();

        expect(await isOpen()).toBe(true);

        await (await page.find('ods-combobox-item')).click();
        await page.waitForChanges();

        expect(await isOpen()).toBe(false);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          previousValue: null,
          validity: {},
          value: 'value',
        });
      });

      it('should send odsChange event when removing a tag', async() => {
        await setup('<ods-combobox allow-multiple value="Value 1,Value 2"></ods-combobox>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await (await page.find('ods-combobox >>> ods-tag')).click();
        await page.waitForChanges();

        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          previousValue: 'Value 1,Value 2',
          validity: {},
          value: 'Value 2',
        });
      });

      it('should not loop when updating value on odsChange', async() => {
        const dummyValue = 'dummy value';
        await setup('<ods-combobox><ods-combobox-item value="value 1">Value 1</ods-combobox-item></ods-combobox>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await page.evaluate(() => {
          const combobox = document.querySelector('ods-combobox');
          combobox?.addEventListener('odsChange', ((event: CustomEvent): void => {
            combobox.setAttribute('value', event.detail.value?.toString() ?? '');
          }) as unknown as EventListener);
        });

        await el.setAttribute('value', dummyValue);
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyValue);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('odsFocus', () => {
      it('should send odsFocus event on component focus', async() => {
        await setup('<ods-combobox><ods-combobox-item>Value</ods-combobox-item></ods-combobox>');
        const odsFocusSpy = await page.spyOnEvent('odsFocus');

        expect(odsFocusSpy).toHaveReceivedEventTimes(0);

        await page.keyboard.press('Tab', { delay: 100 });
        await page.waitForChanges();

        expect(odsFocusSpy).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('on blur', () => {
    it('should close the dropdown', async() => {
      await setup('<ods-combobox><ods-combobox-item>Value</ods-combobox-item></ods-combobox>');
      await openList();

      expect(await isOpen()).toBe(true);

      await page.keyboard.press('Tab', { delay: 100 });
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
    });

    it('should reset to the latest selected value if not empty', async() => {
      const actualValue = 'actual value';
      await setup(`<ods-combobox value="${actualValue}"><ods-combobox-item>Value</ods-combobox-item></ods-combobox>`);
      await openList();

      await input.type('Dummy', { delay: 20 });
      await page.waitForChanges();
      await page.keyboard.press('Tab', { delay: 100 });
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(actualValue);
    });

    it('should clear the value if empty', async() => {
      await setup('<ods-combobox value="v"><ods-combobox-item>Value</ods-combobox-item></ods-combobox>');
      await openList();

      expect(await el.getProperty('value')).toBe('v');

      await page.keyboard.press('Backspace', { delay: 100 });
      await page.waitForChanges();
      await page.keyboard.press('Tab', { delay: 100 });
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBeNull();
    });
  });

  describe('form', () => {
    it('should submit form on Enter', async() => {
      await setup(`<form method="get">
        <ods-combobox name="odsCombobox" value="value"></ods-combobox>
      </form>`);

      await input.click();
      await page.keyboard.press('Enter');
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('odsCombobox')).toBe('value');
    });
  });
});
