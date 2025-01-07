import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-checkbox behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isInputCheckboxChecked(checkbox: E2EElement): Promise<boolean> {
    const input = await checkbox.find('input[type="checkbox"]');
    return input.getProperty('checked');
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-checkbox');
  }

  describe('methods', () => {
    describe('clear', () => {
      it('should receive odsClear event', async() => {
        await setup('<ods-checkbox name="ods-checkbox" value="value" is-checked></ods-checkbox>');
        const odsClearSpy = await page.spyOnEvent('odsClear');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        expect(await isInputCheckboxChecked(el)).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await isInputCheckboxChecked(el)).toBe(false);
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          checked: false,
          name: 'ods-checkbox',
          validity: {},
          value: 'value',
        });
      });
    });

    describe('reset', () => {
      it('should receive odsReset event', async() => {
        await setup('<ods-checkbox name="ods-checkbox" value="value" is-checked></ods-checkbox>');
        const odsResetSpy = await page.spyOnEvent('odsReset');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        expect(await isInputCheckboxChecked(el)).toBe(true);

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await isInputCheckboxChecked(el)).toBe(true);

        expect(odsResetSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);

        expect(odsChangeSpy).toHaveReceivedEventDetail({
          checked: true,
          name: 'ods-checkbox',
          validity: {},
          value: 'value',
        });
      });

      it('should checked the checkbox with is-checked after reset', async() => {
        await setup(`<ods-checkbox name="checkbox-group" value="value1" is-checked></ods-checkbox>
        <ods-checkbox name="checkbox-group" value="value2"></ods-checkbox>
        <ods-checkbox name="checkbox-group" value="value3"></ods-checkbox>`);
        const checkboxGroup = await page.findAll('ods-checkbox');

        expect(await isInputCheckboxChecked(checkboxGroup[0])).toBe(true);

        await checkboxGroup[2].click();

        expect(await isInputCheckboxChecked(checkboxGroup[2])).toBe(true);

        await checkboxGroup[2].callMethod('reset');
        await page.waitForChanges();

        expect(await isInputCheckboxChecked(checkboxGroup[0])).toBe(true);
        expect(await isInputCheckboxChecked(checkboxGroup[2])).toBe(false);
      });

      it('should send an odsChange with correct values for each item on form reset', async() => {
        await setup(`<form method="get">
          <ods-checkbox name="checkbox-group" value="value1" is-checked></ods-checkbox>
          <ods-checkbox name="checkbox-group" value="value2" is-checked></ods-checkbox>
          <ods-checkbox name="checkbox-group" value="value3"></ods-checkbox>
          <button type="reset">Reset</button>
        </form>`);
        const resetButton = await page.find('button[type="reset"]');
        const odsResetSpy = await page.spyOnEvent('odsReset');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await resetButton.click();
        await page.waitForChanges();

        expect(odsResetSpy).toHaveReceivedEventTimes(3);
        expect(odsChangeSpy).toHaveReceivedEventTimes(3);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          checked: true,
          name: 'checkbox-group',
          validity: {},
          value: 'value1,value2',
        });
      });
    });
  });

  describe('checkbox group', () => {
    it('should select multiple checkbox', async() => {
      await setup('<ods-checkbox name="checkbox-group" value="value1" is-checked></ods-checkbox><ods-checkbox name="checkbox-group" value="value2"></ods-checkbox><ods-checkbox name="checkbox-group" value="value3"></ods-checkbox>');
      const checkboxGroup = await page.findAll('ods-checkbox');
      expect(await isInputCheckboxChecked(checkboxGroup[0])).toBe(true);

      await checkboxGroup[2].click();

      expect(await isInputCheckboxChecked(checkboxGroup[0])).toBe(true);
      expect(await isInputCheckboxChecked(checkboxGroup[2])).toBe(true);
    });
  });

  describe('events', () => {
    it('should receive event odsChange', async() => {
      await setup('<ods-checkbox value="value" name="name"></ods-checkbox>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      expect(await isInputCheckboxChecked(el)).toBe(false);
      await el.click();
      await page.waitForChanges();
      expect(await isInputCheckboxChecked(el)).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
      expect(odsChangeSpy).toHaveReceivedEventDetail({
        checked: true,
        name: 'name',
        validity: {},
        value: 'value',
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
            if (data[key]) {
              data[key] += `,${value}`;
            } else {
              data[key] = value;
            }
          }

          // @ts-ignore function is exposed manually
          window.e2eFormSubmit(data);
        });
      });
    }

    it('should get form data with button type submit', async() => {
      await setupWithinForm(`
        <ods-checkbox input-id="checkbox-form" name="name" value="coding" is-checked></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="music"></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="reading"></ods-checkbox>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      `);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForChanges();

      expect(formData).toEqual({ name: 'coding' });
    });

    it('should get form data with multiple checkbox', async() => {
      await setupWithinForm(`
        <ods-checkbox input-id="checkbox-form" name="name" value="coding" is-checked></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="music" is-checked></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="reading" is-checked></ods-checkbox>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      `);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForChanges();

      expect(formData).toEqual({ name: 'coding,music,reading' });
    });

    it('should not add the checkbox to the formData if unchecked', async() => {
      await setupWithinForm(`
        <ods-checkbox input-id="checkbox-form" name="name" value="coding"></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="music"></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="reading"></ods-checkbox>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      `);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForChanges();

      expect(formData).toEqual({});
    });

    it('should reset form with button type reset', async() => {
      await setupWithinForm(`
        <ods-checkbox input-id="checkbox-form" name="name" value="coding"></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="music"></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="reading"></ods-checkbox>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      `);
      const resetButton = await page.find('button[type="reset"]');
      const submitButton = await page.find('button[type="submit"]');

      await resetButton.click();
      await page.waitForChanges();

      await submitButton.click();
      await page.waitForChanges();

      expect(formData).toEqual({});
    });

    it('should submit form on Enter', async() => {
      await setupWithinForm('<ods-checkbox is-checked name="odsCheckbox" value="checkbox"></ods-checkbox>');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(formData).toEqual({ odsCheckbox: 'checkbox' });
    });
  });
});
