import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-checkbox behavior', () => {
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

  describe('Methods', () => {
    describe('method:clear', () => {
      it('should receive odsClear event', async() => {
        await setup('<ods-checkbox value="value" is-checked></ods-checkbox>');
        const odsClearSpy = await page.spyOnEvent('odsClear');
        expect(await isInputCheckboxChecked(el)).toBe(true);
        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await isInputCheckboxChecked(el)).toBe(false);
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('method:reset', () => {
      it('should checked the checkbox with is-checked after reset', async() => {
        await setup(`<ods-checkbox name="checkbox-group" value="value1" is-checked></ods-checkbox>
        <ods-checkbox name="checkbox-group" value="value2"></ods-checkbox>
        <ods-checkbox name="checkbox-group" value="value3"></ods-checkbox>`);
        const checkboxGroup = await page.findAll('ods-checkbox');
        const odsResetSpy = await page.spyOnEvent('odsReset');
        expect(await isInputCheckboxChecked(checkboxGroup[0])).toBe(true);

        await checkboxGroup[2].click();
        expect(await isInputCheckboxChecked(checkboxGroup[2])).toBe(true);

        await checkboxGroup[2].callMethod('reset');
        await page.waitForChanges();

        expect(await isInputCheckboxChecked(checkboxGroup[0])).toBe(true);
        expect(await isInputCheckboxChecked(checkboxGroup[2])).toBe(false);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('Checkbox group', () => {
    it('should select multiple checkbox', async() => {
      await setup('<ods-checkbox name="checkbox-group" value="value1" is-checked></ods-checkbox><ods-checkbox name="checkbox-group" value="value2"></ods-checkbox><ods-checkbox name="checkbox-group" value="value3"></ods-checkbox>');
      const checkboxGroup = await page.findAll('ods-checkbox');
      expect(await isInputCheckboxChecked(checkboxGroup[0])).toBe(true);

      await checkboxGroup[2].click();

      expect(await isInputCheckboxChecked(checkboxGroup[0])).toBe(true);
      expect(await isInputCheckboxChecked(checkboxGroup[2])).toBe(true);
    });
  });

  describe('Event', () => {
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

  describe('Form', () => {
    it('should get form data with button type submit', async() => {
      await setup(`<form method="get">
        <ods-checkbox input-id="checkbox-form" name="name" value="coding" is-checked></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="music"></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="reading"></ods-checkbox>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.getAll('name')).toEqual(['coding']);
    });

    it('should get form data with multiple checkbox', async() => {
      await setup(`<form method="get">
        <ods-checkbox input-id="checkbox-form" name="name" value="coding" is-checked></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="music" is-checked></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="reading" is-checked></ods-checkbox>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.getAll('name')).toEqual(['coding', 'music', 'reading']);
    });

    it('should not add the checkbox to the formData if unchecked', async() => {
      await setup(`<form method="get">
        <ods-checkbox input-id="checkbox-form" name="name" value="coding"></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="music"></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="reading"></ods-checkbox>
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
        <ods-checkbox input-id="checkbox-form" name="name" value="coding"></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="music"></ods-checkbox>
        <ods-checkbox input-id="checkbox-form" name="name" value="reading"></ods-checkbox>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      await resetButton.click();

      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('name')).toBeNull();
    });
  });
});
