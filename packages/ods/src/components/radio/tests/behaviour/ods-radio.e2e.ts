import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-radio behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isInputRadioChecked(radio: E2EElement): Promise<boolean> {
    const input = await radio.find('input[type="radio"]');
    return input.getProperty('checked');
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-radio');
  }

  describe('methods', () => {
    describe('clear', () => {
      it('should receive odsClear event', async() => {
        await setup('<ods-radio name="ods-radio" value="value" is-checked></ods-radio>');
        const odsClearSpy = await page.spyOnEvent('odsClear');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        expect(await isInputRadioChecked(el)).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await isInputRadioChecked(el)).toBe(false);
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          checked: false,
          name: 'ods-radio',
          validity: {},
          value: 'value',
        });
      });
    });

    describe('reset', () => {
      it('should receive odsReset event', async() => {
        await setup('<ods-radio name="ods-radio" value="value" is-checked></ods-radio>');
        const odsResetSpy = await page.spyOnEvent('odsReset');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        expect(await isInputRadioChecked(el)).toBe(true);

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await isInputRadioChecked(el)).toBe(true);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          checked: true,
          name: 'ods-radio',
          validity: {},
          value: 'value',
        });
      });

      it('should checked the radio with is-checked after reset', async() => {
        await setup(`<ods-radio name="radio-group" value="value1" is-checked></ods-radio>
        <ods-radio name="radio-group" value="value2"></ods-radio>
        <ods-radio name="radio-group" value="value3"></ods-radio>`);
        const radios = await page.findAll('ods-radio');

        expect(await isInputRadioChecked(radios[0])).toBe(true);

        await radios[2].click();

        expect(await isInputRadioChecked(radios[2])).toBe(true);

        await radios[2].callMethod('reset');

        expect(await isInputRadioChecked(radios[0])).toBe(true);
      });

      it('should send odsChange event with the checked item value', async() => {
        await setup(`<ods-radio name="radio-group" value="value1"></ods-radio>
        <ods-radio name="radio-group" value="value2" is-checked></ods-radio>
        <ods-radio name="radio-group" value="value3"></ods-radio>`);
        const radios = await page.findAll('ods-radio');
        const odsResetSpy = await page.spyOnEvent('odsReset');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await radios[0].callMethod('reset');

        expect(await isInputRadioChecked(radios[1])).toBe(true);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          checked: true,
          name: 'radio-group',
          validity: {},
          value: 'value2',
        });
      });
    });

    describe('select', () => {
      it('should select radio', async() => {
        await setup('<ods-radio value="value"></ods-radio>');

        expect(await isInputRadioChecked(el)).toBe(false);

        await el.callMethod('select');
        await page.waitForChanges();

        expect(await isInputRadioChecked(el)).toBe(true);
      });
    });
  });

  describe('radio group', () => {
    async function isInputRadioChecked(radio: E2EElement): Promise<boolean> {
      const input = await radio.find('input[type="radio"]');
      return input.getProperty('checked');
    }

    it('should select only one radio with the same name', async() => {
      await setup('<ods-radio name="radio-group" value="value1" is-checked></ods-radio><ods-radio name="radio-group" value="value2"></ods-radio><ods-radio name="radio-group" value="value3"></ods-radio>');
      const radios = await page.findAll('ods-radio');

      expect(await isInputRadioChecked(radios[0])).toBe(true);

      await radios[2].click();

      expect(await isInputRadioChecked(radios[0])).toBe(false);
      expect(await isInputRadioChecked(radios[2])).toBe(true);
    });

    it('should select only one radio with the same name', async() => {
      await setup(`<ods-radio name="radio-group" value="value1" is-checked></ods-radio><ods-radio name="radio-group" value="value2"></ods-radio><ods-radio name="radio-group" value="value3"></ods-radio>
      <ods-radio name="radio-group2" value="value1"></ods-radio><ods-radio name="radio-group2" value="value2"></ods-radio><ods-radio name="radio-group2" value="value3"></ods-radio>`);
      const radiosGroup = await page.findAll('ods-radio[name="radio-group"]');
      const radiosGroup2 = await page.findAll('ods-radio[name="radio-group2"]');

      expect(await isInputRadioChecked(radiosGroup[0])).toBe(true);
      expect(await isInputRadioChecked(radiosGroup2[0])).toBe(false);

      await radiosGroup[2].click();

      expect(await isInputRadioChecked(radiosGroup[0])).toBe(false);
      expect(await isInputRadioChecked(radiosGroup[2])).toBe(true);
      expect(await isInputRadioChecked(radiosGroup2[2])).toBe(false);
    });
  });

  describe('form', () => {
    it('should get form data with button type submit', async() => {
      await setup(`<form method="get">
        <ods-radio input-id="huey-form" name="name" value="huey" is-checked></ods-radio>
        <ods-radio input-id="dewey-form" name="name" value="dewey"></ods-radio>
        <ods-radio input-id="louie-form" name="name" value="louie"></ods-radio>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('name')).toBe('huey');
    });

    it('should not add the radio to the formData if unchecked', async() => {
      await setup(`<form method="get">
        <ods-radio input-id="huey-form" name="name" value="huey"></ods-radio>
        <ods-radio input-id="dewey-form" name="name" value="dewey"></ods-radio>
        <ods-radio input-id="louie-form" name="name" value="louie"></ods-radio>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('name')).toBeNull();
    });

    it('should reset form with button type reset', async() => {
      await setup(`<form method="get">
        <ods-radio input-id="huey-form" name="name" value="huey" is-checked></ods-radio>
        <ods-radio input-id="dewey-form" name="name" value="dewey"></ods-radio>
        <ods-radio input-id="louie-form" name="name" value="louie"></ods-radio>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      const submitButton = await page.find('button[type="submit"]');

      await resetButton.click();
      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('name')).toBe('huey');
    });

    it('should submit form on Enter', async() => {
      await setup(`<form method="get">
        <ods-radio is-checked name="odsRadio" value="radio"></ods-radio>
      </form>`);

      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('odsRadio')).toBe('radio');
    });
  });
});
