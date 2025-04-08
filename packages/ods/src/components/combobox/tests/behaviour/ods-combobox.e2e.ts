import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsInput } from '../../../input/src';
import { type OdsComboboxChangeEventDetail, type OdsComboboxItem } from '../../src';
import { CREATE_NEW_ID } from '../../src/controller/ods-combobox';

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

  describe('new entry', () => {
    async function isCreateNewVisible(): Promise<boolean | undefined> {
      return await page.evaluate((newElementId) => {
        return document.querySelector('ods-combobox')?.shadowRoot?.querySelector<OdsComboboxItem & HTMLElement>(`#${newElementId}`)?.isVisible;
      }, CREATE_NEW_ID);
    }

    describe('single', () => {
      it('should add the add entry option if typed value is not found', async() => {
        await setup('<ods-combobox><ods-combobox-item value="dummy">Dummy value</ods-combobox-item></ods-combobox>');
        await openList();

        expect(await isCreateNewVisible()).toBe(false);

        await input.type('Zz', { delay: 200 });
        await page.waitForChanges();

        expect(await isCreateNewVisible()).toBe(true);
      });

      it('should add the add entry option if the combobox has no items', async() => {
        await setup('<ods-combobox allow-new-element></ods-combobox>');
        await openList();

        expect(await isCreateNewVisible()).toBe(false);

        await input.type('Zz', { delay: 200 });
        await page.waitForChanges();

        expect(await isCreateNewVisible()).toBe(true);
      });
    });

    describe('multiple', () => {
      it('should keep the add entry option every time typed value is not found', async() => {
        await setup('<ods-combobox><ods-combobox-item value="dummy">Dummy value</ods-combobox-item></ods-combobox>');
        await openList();

        expect(await isOpen()).toBe(true);
        expect(await isCreateNewVisible()).toBe(false);

        await input.type('Zz', { delay: 200 });
        await page.waitForChanges();

        expect(await isOpen()).toBe(true);
        expect(await isCreateNewVisible()).toBe(true);

        await (await page.find(`ods-combobox >>> #${CREATE_NEW_ID}`)).click();
        await page.waitForChanges();

        expect(await isOpen()).toBe(false);

        await input.type('Ww', { delay: 200 });
        await page.waitForChanges();

        expect(await isOpen()).toBe(true);
        expect(await isCreateNewVisible()).toBe(true);
      });
    });
  });

  describe('filtering', () => {
    async function countVisibleItem(): Promise<number> {
      return (await page.findAll('ods-combobox-item:not([aria-hidden])')).length;
    }

    it('should hide non matching item on input typing', async() => {
      await setup(`
        <ods-combobox>
          <ods-combobox-item value="dummy">Dummy value</ods-combobox-item>
          <ods-combobox-item value="random">Random value</ods-combobox-item>
          <ods-combobox-item value="something">Something else</ods-combobox-item>
          <ods-combobox-item value="dummy-again">Dummy value again</ods-combobox-item>
        </ods-combobox>
      `);
      await openList();

      expect(await countVisibleItem()).toBe(4);

      await input.type('Val', { delay: 200 });
      await page.waitForChanges();

      expect(await countVisibleItem()).toBe(3);
      expect((await page.find('ods-combobox >>> #ods-internal-create-new-id:not([aria-hidden])'))).not.toBeNull();
      expect(await page.find('ods-combobox >>> .ods-combobox__results__empty')).toBeNull();
    });

    it('should display empty result label if nothing match', async() => {
      await setup(`
        <ods-combobox>
          <ods-combobox-item value="dummy">Dummy value</ods-combobox-item>
          <ods-combobox-item value="random">Random value</ods-combobox-item>
          <ods-combobox-item value="something">Something else</ods-combobox-item>
          <ods-combobox-item value="dummy-again">Dummy value again</ods-combobox-item>
        </ods-combobox>
      `);
      await openList();

      expect(await countVisibleItem()).toBe(4);

      await input.type('Dkj', { delay: 200 });
      await page.waitForChanges();

      expect(await countVisibleItem()).toBe(0);
      expect((await page.find('ods-combobox >>> #ods-internal-create-new-id:not([aria-hidden])'))).not.toBeNull();
      expect(await page.find('ods-combobox >>> .ods-combobox__results__empty')).not.toBeNull();
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
        await setup('<ods-combobox><ods-combobox-item value="value">Value 1</ods-combobox-item></ods-combobox>');
        await openList();

        expect(await isOpen()).toBe(true);

        await el.callMethod('close');
        await page.waitForChanges();

        expect(await isOpen()).toBe(false);
      });
    });

    describe('open', () => {
      it('should open the dropdown', async() => {
        await setup('<ods-combobox><ods-combobox-item value="value">Value 1</ods-combobox-item></ods-combobox>');

        expect(await isOpen()).toBe(false);

        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isOpen()).toBe(true);
      });

      it('should not open the dropdown if disabled', async() => {
        await setup('<ods-combobox is-disabled><ods-combobox-item value="value">Value 1</ods-combobox-item></ods-combobox>');

        expect(await isOpen()).toBe(false);

        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isOpen()).toBe(false);
      });

      it('should not open the dropdown if readonly', async() => {
        await setup('<ods-combobox is-readonly><ods-combobox-item value="value">Value 1</ods-combobox-item></ods-combobox>');

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
          await page.waitForChanges();
          await page.waitForChanges();

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
        await setup('<ods-combobox><ods-combobox-item value="value">Value</ods-combobox-item></ods-combobox><button>Focusable element</button>');
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
        await setup('<ods-combobox><ods-combobox-item value="value">Value</ods-combobox-item></ods-combobox>');
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

    describe('odsClear', () => {
      async function getInputValue(): Promise<string | number | null | undefined> {
        return await page.evaluate(() => {
          return document.querySelector('ods-combobox')?.shadowRoot?.querySelector<OdsInput & HTMLElement>('ods-input')?.value;
        });
      }

      it('should send odsClear event and clear the input when pressing the clearable button on single mode', async() => {
        const dummyValue = 'dummy value';
        await setup(`<ods-combobox is-clearable value="${dummyValue}"></ods-combobox>`);
        const odsClearSpy = await page.spyOnEvent('odsClear');

        expect(await el.getProperty('value')).toBe(dummyValue);

        await page.keyboard.press('Tab', { delay: 100 });
        await page.waitForChanges();
        await page.keyboard.press('Tab', { delay: 100 });
        await page.waitForChanges();
        await page.keyboard.press('Enter', { delay: 100 });
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });

      it('should not send odsClear event but only clear the input when pressing the clearable button on multiple mode', async() => {
        const dummyValue = 'dummy,value';
        await setup(`<ods-combobox allow-multiple is-clearable value="${dummyValue}"></ods-combobox>`);
        const odsClearSpy = await page.spyOnEvent('odsClear');

        expect(await el.getProperty('value')).toBe(dummyValue);
        expect(await getInputValue()).toBe('');

        await page.keyboard.press('Tab', { delay: 100 });
        await page.waitForChanges();
        await page.keyboard.press('E', { delay: 100 });
        await page.waitForChanges();

        expect(await getInputValue()).toBe('E');

        await page.keyboard.press('Tab', { delay: 100 });
        await page.waitForChanges();
        await page.keyboard.press('Enter', { delay: 100 });
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyValue);
        expect(await getInputValue()).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(0);
      });
    });

    describe('odsFilter', () => {
      it('should send odsFilter event while filtering the list', async() => {
        await setup('<ods-combobox><ods-combobox-item value="value">Value</ods-combobox-item></ods-combobox>');
        const odsFilterSpy = await page.spyOnEvent('odsFilter');
        await openList();

        expect(odsFilterSpy).toHaveReceivedEventTimes(1);
        expect(odsFilterSpy).toHaveReceivedEventDetail({
          filterValue: '',
          hasNoResults: false,
        });

        await input.type('V', { delay: 100 });
        await page.waitForChanges();

        expect(odsFilterSpy).toHaveReceivedEventTimes(2);
        expect(odsFilterSpy).toHaveReceivedEventDetail({
          filterValue: 'V',
          hasNoResults: false,
        });

        await input.type('z', { delay: 100 });
        await page.waitForChanges();

        expect(odsFilterSpy).toHaveReceivedEventTimes(3);
        expect(odsFilterSpy).toHaveReceivedEventDetail({
          filterValue: 'Vz',
          hasNoResults: true,
        });
      });
    });

    describe('odsFocus', () => {
      it('should send odsFocus event on component focus', async() => {
        await setup('<ods-combobox><ods-combobox-item value="value">Value</ods-combobox-item></ods-combobox>');
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
      await setup('<ods-combobox><ods-combobox-item value="value">Value</ods-combobox-item></ods-combobox>');
      await openList();

      expect(await isOpen()).toBe(true);

      await page.keyboard.press('Tab', { delay: 100 });
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
    });

    it('should reset to the latest selected value if not empty', async() => {
      const actualValue = 'actual value';
      await setup(`<ods-combobox value="${actualValue}"><ods-combobox-item value="value">Value</ods-combobox-item></ods-combobox>`);
      await openList();

      await input.type('Dummy', { delay: 20 });
      await page.waitForChanges();
      await page.keyboard.press('Tab', { delay: 100 });
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(actualValue);
    });

    it('should clear the value if empty', async() => {
      await setup('<ods-combobox value="v"><ods-combobox-item value="value">Value</ods-combobox-item></ods-combobox>');
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

  describe('keyboard navigation', () => {
    it('should allow to select a value, delete it with keyboard and reselect it in single mode', async() => {
      await setup(`
        <ods-combobox allow-new-element="false">
          <ods-combobox-item value="test">Test value</ods-combobox-item>
        </ods-combobox>
      `);
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await openList();
      await input.press('ArrowDown');
      await input.press('Enter');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('test');
      expect(await input.getProperty('value')).toBe('Test value');
      expect(odsChangeSpy).toHaveReceivedEventTimes(1);

      await input.press('Backspace');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('test');
      expect(await input.getProperty('value')).toBe('Test valu');

      await openList();
      await input.press('ArrowDown');
      await input.press('Enter');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('test');
      expect(await input.getProperty('value')).toBe('Test value');
    });
  });
});
