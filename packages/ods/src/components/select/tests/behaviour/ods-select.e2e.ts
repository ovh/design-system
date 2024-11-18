import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsSelect, type OdsSelectChangeEventDetail } from '../../src';

describe('ods-select behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;
  let selectComponent: HTMLElement;

  async function isSelectOpen(): Promise<boolean> {
    return page.evaluate(() => {
      return document.querySelector('ods-select')?.shadowRoot?.querySelector('.ts-wrapper')?.classList.contains('dropdown-active') || false;
    });
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-select');
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
      await page.exposeFunction('onOdsChangeEvent', (detail: OdsSelectChangeEventDetail) => {
        odsChangeEventCount++;
        odsChangeEventDetail = detail;
      });

      await page.evaluateOnNewDocument(() => {
        window.addEventListener('odsChange', (event: Event) => {
          // @ts-ignore function is exposed manually
          window.onOdsChangeEvent((event as CustomEvent<OdsSelectChangeEventDetail>).detail);
        });
      });

      await page.setContent(content);
    }

    describe('with no value attribute defined', () => {
      it('should trigger a uniq odsChange event', async() => {
        await setupWithSpy('<ods-select><option value="1">Value 1</option><option value="2">Value 2</option></ods-select>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: null,
        });
      });

      it('should trigger a uniq odsChange event when multiple is allowed', async() => {
        await setupWithSpy('<ods-select allow-multiple><option value="1">Value 1</option><option value="2">Value 2</option></ods-select>');

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
        await setupWithSpy('<ods-select value=""><option value="1">Value 1</option><option value="2">Value 2</option></ods-select>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '',
        });
      });

      it('should trigger a uniq odsChange event when multiple is allowed', async() => {
        await setupWithSpy('<ods-select allow-multiple value=""><option value="1">Value 1</option><option value="2">Value 2</option></ods-select>');

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
        await setupWithSpy('<ods-select default-value=""><option value="1">Value 1</option><option value="2">Value 2</option></ods-select>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '',
        });
      });

      it('should trigger a uniq odsChange event when multiple is allowed', async() => {
        await setupWithSpy('<ods-select allow-multiple default-value=""><option value="1">Value 1</option><option value="2">Value 2</option></ods-select>');

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
        await setupWithSpy('<ods-select default-value="2"><option value="1">Value 1</option><option value="2">Value 2</option></ods-select>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '2',
        });
      });

      it('should trigger a uniq odsChange event when multiple is allowed', async() => {
        await setupWithSpy('<ods-select allow-multiple default-value="2"><option value="1">Value 1</option><option value="2">Value 2</option></ods-select>');

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
        await setupWithSpy('<ods-select value="2"><option value="1">Value 1</option><option value="2">Value 2</option></ods-select>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '2',
        });
      });

      it('should trigger a uniq odsChange event when multiple is allowed', async() => {
        await setupWithSpy('<ods-select allow-multiple value="2"><option value="1">Value 1</option><option value="2">Value 2</option></ods-select>');

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
        await setupWithSpy('<ods-select default-value="1" value="2"><option value="1">Value 1</option><option value="2">Value 2</option></ods-select>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          previousValue: null,
          validity: {},
          value: '2',
        });
      });

      it('should trigger a uniq odsChange event when multiple is allowed', async() => {
        await setupWithSpy('<ods-select allow-multiple default-value="1" value="2"><option value="1">Value 1</option><option value="2">Value 2</option></ods-select>');

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
        <ods-select name="odsSelect" value="1"><option value="1">1</option></ods-select>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('odsSelect')).toBe('1');
    });

    it('should reset form when reset button is triggered', async() => {
      await setup(`<form method="get">
        <ods-select name="odsSelect" value="1"><option value="1">1</option></ods-select>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      const submitButton = await page.find('button[type="submit"]');

      await resetButton.click();
      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('odsSelect')).toBe('');
    });
  });

  describe('methods', () => {
    describe('clear', () => {
      it('should emit an odsClear event', async() => {
        await setup('<ods-select name="ods-select" value="value"></ods-select>');
        const odsClearSpy = await page.spyOnEvent('odsClear');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-select',
          previousValue: 'value',
          validity: {},
          value: null,
        });
      });

      it('should emit an odsClear event even if disabled', async() => {
        await setup('<ods-select name="ods-select" is-disabled value="value"></ods-select>');
        const odsClearSpy = await page.spyOnEvent('odsClear');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-select',
          previousValue: 'value',
          validity: {},
          value: null,
        });
      });
    });

    describe('close', () => {
      it('should close the select dropdown', async() => {
        await setup('<ods-select><option>Value 1</option></ods-select>');
        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isSelectOpen()).toBe(true);

        await el.callMethod('close');
        await page.waitForChanges();

        expect(await isSelectOpen()).toBe(false);
      });
    });

    describe('open', () => {
      it('should open the select dropdown', async() => {
        await setup('<ods-select><option>Value 1</option></ods-select>');

        expect(await isSelectOpen()).toBe(false);

        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isSelectOpen()).toBe(true);
      });
    });

    describe('reset', () => {
      it('should emit an odsReset event', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        await setup(`<ods-select name="ods-select" value="value" default-value="${dummyDefaultValue}"></ods-select>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-select',
          previousValue: 'value',
          validity: {},
          value: dummyDefaultValue,
        });
      });

      it('should emit an odsReset event even if disabled', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        await setup(`<ods-select name="ods-select" is-disabled value="value" default-value="${dummyDefaultValue}"></ods-select>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-select',
          previousValue: 'value',
          validity: {},
          value: dummyDefaultValue,
        });
      });

      it('should emit an odsReset event without defaultValue', async() => {
        await setup('<ods-select name="ods-select" is-disabled value="value"></ods-select>');
        const odsResetSpy = await page.spyOnEvent('odsReset');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-select',
          previousValue: 'value',
          validity: {},
          value: null,
        });
      });
    });

    describe('updateCustomRenderer', () => {
      it('should update custom renderer', async() => {
        await setup('<ods-select><option value="1">1</option></ods-select>');
        await page.evaluate(() => {
          const select = document.querySelector<OdsSelect & HTMLElement>('ods-select');
          select!.customRenderer = {
            option: ({ text }: { text: string }): string => {
              return `<div>>>> ${text} <<<</div>`;
            },
          };
        });

        await el.callMethod('open');
        await page.waitForChanges();

        expect(await page.evaluate(() => {
          return document.querySelector('ods-select')?.shadowRoot?.querySelector<HTMLElement>('.ts-wrapper .option')?.innerText;
        })).toBe('1');

        await el.callMethod('updateCustomRenderer');
        await page.waitForChanges();
        await el.callMethod('open');
        await page.waitForChanges();

        expect(await page.evaluate(() => {
          return document.querySelector('ods-select')?.shadowRoot?.querySelector<HTMLElement>('.ts-wrapper .option')?.innerText;
        })).toBe('>>> 1 <<<');
      });
    });
  });

  describe('watchers', () => {
    describe('on value change', () => {
      it('should emit an odsChange event', async() => {
        const dummyValue = 'dummy value';
        await setup(`<ods-select><option value="${dummyValue}">Value 1</option></ods-select>`);
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('open');
        await page.evaluate(() => {
          document.querySelector('ods-select')?.shadowRoot?.querySelector<HTMLElement>('[role="option"]')?.click();
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
        await setup(`<ods-select><option value="${dummyValue}">Value 1</option></ods-select>`);
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await page.evaluate(() => {
          const odsSelect = document.querySelector('ods-select');
          odsSelect?.addEventListener('odsChange', ((event: CustomEvent): void => {
            odsSelect.setAttribute('value', event.detail.value);
          }) as unknown as EventListener);
        });

        await el.setAttribute('value', dummyValue);
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyValue);
        expect(odsValueChangeSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('readonly', () => {
      it('should not open select if readonly', async() => {
        const dummyValue = 'dummy value';
        await setup(`<ods-select is-readonly><option value="${dummyValue}">Value 1</option></ods-select>`);
        expect(await isSelectOpen()).toBe(false);

        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isSelectOpen()).toBe(false);
      });
    });

    describe('on slot change', () => {
      it('should render with is-disabled', async() => {
        await setup('<ods-select is-disabled><option value="1">Value 1</option></ods-select>');
        expect(selectComponent.classList.contains('disabled')).toBe(true);
        el.innerHTML = '<option value="1">Value 1</option><option value="2">Value 2</option>';
        el.setProperty('isDisabled', false);
        await page.waitForChanges();

        expect(await page.evaluate(() => {
          return document.querySelector('ods-select')?.shadowRoot?.querySelector('.ts-wrapper')?.classList.contains('disabled');
        })).toBe(false);
      });
    });
  });
});
