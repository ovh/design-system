import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsSwitchChangeEventDetail } from '../../src';

describe('ods-switch behaviour', () => {
  let page: E2EPage;
  let switchElement: E2EElement;
  let switchItems: E2EElement[];

  async function isInputRadioChecked(switchItem: E2EElement): Promise<boolean> {
    const input = await switchItem.find('input[type="radio"]');
    return input.getProperty('checked');
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));
    await page.waitForChanges();

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    switchElement = await page.find('ods-switch');
    switchItems = await page.findAll('ods-switch-item');
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
      await page.exposeFunction('onOdsChangeEvent', (detail: OdsSwitchChangeEventDetail) => {
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

    describe('with no items defined', () => {
      it('should trigger a uniq odsChange event with valid state if not required', async() => {
        await setupWithSpy('<ods-switch name="switch-radio"></ods-switch>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          name: 'switch-radio',
          validity: {
            badInput: false,
            customError: false,
            patternMismatch: false,
            rangeOverflow: false,
            rangeUnderflow: false,
            stepMismatch: false,
            tooLong: false,
            tooShort: false,
            typeMismatch: false,
            valid: true,
            valueMissing: false,
          },
          value: null,
        });
      });

      it('should trigger a uniq odsChange event with invalid state if required', async() => {
        await setupWithSpy('<ods-switch is-required name="switch-radio"></ods-switch>');

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          name: 'switch-radio',
          validity: {
            badInput: false,
            customError: false,
            patternMismatch: false,
            rangeOverflow: false,
            rangeUnderflow: false,
            stepMismatch: false,
            tooLong: false,
            tooShort: false,
            typeMismatch: false,
            valid: false,
            valueMissing: true,
          },
          value: null,
        });
      });
    });

    describe('with items defined', () => {
      it('should trigger a uniq odsChange event with valid state if not required', async() => {
        await setupWithSpy(`<ods-switch name="switch-radio">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          name: 'switch-radio',
          validity: {
            badInput: false,
            customError: false,
            patternMismatch: false,
            rangeOverflow: false,
            rangeUnderflow: false,
            stepMismatch: false,
            tooLong: false,
            tooShort: false,
            typeMismatch: false,
            valid: true,
            valueMissing: false,
          },
          value: null,
        });
      });

      it('should trigger a uniq odsChange event with valid state if required and one item checked', async() => {
        await setupWithSpy(`<ods-switch name="switch-radio" is-required>
          <ods-switch-item is-checked value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          name: 'switch-radio',
          validity: {
            badInput: false,
            customError: false,
            patternMismatch: false,
            rangeOverflow: false,
            rangeUnderflow: false,
            stepMismatch: false,
            tooLong: false,
            tooShort: false,
            typeMismatch: false,
            valid: true,
            valueMissing: false,
          },
          value: '1',
        });
      });

      it('should trigger a uniq odsChange event with invalid state if required', async() => {
        await setupWithSpy(`<ods-switch name="switch-radio" is-required>
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);

        expect(odsChangeEventCount).toBe(1);
        expect(odsChangeEventDetail).toEqual({
          name: 'switch-radio',
          validity: {
            badInput: false,
            customError: false,
            patternMismatch: false,
            rangeOverflow: false,
            rangeUnderflow: false,
            stepMismatch: false,
            tooLong: false,
            tooShort: false,
            typeMismatch: false,
            valid: false,
            valueMissing: true,
          },
          value: null,
        });
      });
    });
  });

  describe('propagation', () => {
    it('should propagate isDisabled to the switch-item', async() => {
      await setup(`<ods-switch is-disabled name="switch-radio">
        <ods-switch-item value="1">label1</ods-switch-item>
        <ods-switch-item value="2">label2</ods-switch-item>
        <ods-switch-item value="3">label3</ods-switch-item>
      </ods-switch>`);

      switchItems.forEach((item) => {
        expect(item.getAttribute('is-disabled')).toBe('');
      });
    });

    it('should propagate name to the switch-item', async() => {
      const name = 'switch-radio';
      await setup(`<ods-switch size="sm" name="${name}">
        <ods-switch-item value="1">label1</ods-switch-item>
        <ods-switch-item value="2">label2</ods-switch-item>
        <ods-switch-item value="3">label3</ods-switch-item>
      </ods-switch>`);

      switchItems.forEach((item) => {
        expect(item.getAttribute('name')).toBe(name);
      });
    });

    it('should generate & propagate inputId to the switch-item', async() => {
      const name = 'switch-radio';
      await setup(`<ods-switch size="sm" name="${name}">
        <ods-switch-item value="1">label1</ods-switch-item>
        <ods-switch-item value="2">label2</ods-switch-item>
        <ods-switch-item value="3">label3</ods-switch-item>
      </ods-switch>`);

      switchItems.forEach((item, index) => {
        expect(item.getAttribute('input-id')).toBe(`${name}-${index}`);
      });
    });
  });

  describe('methods', () => {
    describe('clear', () => {
      it('should uncheck all items and trigger an odsClear event', async() => {
        await setup(`<ods-switch name="switch">
          <ods-switch-item value="1" is-checked>label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        const odsClearSpy = await page.spyOnEvent('odsClear');

        await switchElement.callMethod('clear');
        await page.waitForChanges();

        expect(odsClearSpy).toHaveReceivedEventTimes(1);
        expect(await isInputRadioChecked(switchItems[0])).toBe(false);
        expect(await isInputRadioChecked(switchItems[1])).toBe(false);
        expect(await isInputRadioChecked(switchItems[2])).toBe(false);
      });
    });

    describe('reset', () => {
      it('should reset all items to their original checked state and trigger an odsReset event', async() => {
        await setup(`<ods-switch name="switch">
          <ods-switch-item value="1" is-checked>label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');

        await switchItems[1].click();
        await page.waitForChanges();

        expect(await isInputRadioChecked(switchItems[0])).toBe(false);
        expect(await isInputRadioChecked(switchItems[1])).toBe(true);
        expect(await isInputRadioChecked(switchItems[2])).toBe(false);

        await switchElement.callMethod('reset');
        await page.waitForChanges();

        expect(odsResetSpy).toHaveReceivedEventTimes(1);
        expect(await isInputRadioChecked(switchItems[0])).toBe(true);
        expect(await isInputRadioChecked(switchItems[1])).toBe(false);
        expect(await isInputRadioChecked(switchItems[2])).toBe(false);
      });
    });
  });

  describe('form', () => {
    it('should get null if no item checked on form data when submit button is triggered', async() => {
      await setup(`<form method="get">
        <ods-switch name="switch">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('switch')).toBe(null);
    });

    it('should get checked item in form data when submit button is triggered', async() => {
      await setup(`<form method="get">
        <ods-switch name="switch">
          <ods-switch-item value="1" is-checked>label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('switch')).toBe('1');
    });

    it('should reset to null if no value is checked when form reset button is triggered', async() => {
      await setup(`<form method="get">
        <ods-switch name="switch">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      const submitButton = await page.find('button[type="submit"]');

      await resetButton.click();
      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('switch')).toBe(null);
    });

    it('should reset to checked value when form reset button is triggered', async() => {
      await setup(`<form method="get">
        <ods-switch name="switch">
          <ods-switch-item value="1" is-checked>label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      const submitButton = await page.find('button[type="submit"]');

      await resetButton.click();
      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('switch')).toBe('1');
    });
  });
});
