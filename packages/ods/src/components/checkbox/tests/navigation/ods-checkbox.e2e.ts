import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-checkbox navigation', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      // No shadow root so the input can be the activeElement
      return document.activeElement?.tagName === 'INPUT';
    });
  }

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

  describe('Checkbox', () => {
    describe('focus', () => {
      it('should be focusable', async() => {
        await setup('<ods-checkbox></ods-checkbox>');
        const odsFocusSpy = await page.spyOnEvent('odsFocus');
        await page.keyboard.press('Tab');
        expect(await isFocused()).toBe(true);
        expect(odsFocusSpy).toHaveReceivedEventTimes(1);
      });

      it('should not be focusable if disabled', async() => {
        await setup('<ods-checkbox is-disabled></ods-checkbox>');
        const odsFocusSpy = await page.spyOnEvent('odsFocus');
        await page.keyboard.press('Tab');
        expect(await isFocused()).toBe(false);
        expect(odsFocusSpy).not.toHaveReceivedEvent();
      });
    });

    describe('selection', () => {
      it('should be selectable on press Space', async() => {
        await setup('<ods-checkbox></ods-checkbox>');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Space');
        expect(await isInputCheckboxChecked(el)).toBe(true);
      });

      it('should be selectable on click', async() => {
        await setup('<ods-checkbox></ods-checkbox>');
        await el.click();
        expect(await isInputCheckboxChecked(el)).toBe(true);
      });

      it('should not be selectable on click if disabled', async() => {
        await setup('<ods-checkbox is-disabled></ods-checkbox>');
        await el.click();
        expect(await isInputCheckboxChecked(el)).toBe(false);
      });
    });
  });

  describe('Checkbox Group', () => {
    async function getValueActiveElement(): Promise<string | null> {
      return await page.evaluate(() => {
        return document.activeElement?.getAttribute('value') ?? null;
      });
    }

    it('should focus the checkbox-group', async() => {
      await setup(`
      <ods-checkbox name="checkbox-group" value="1" is-checked></ods-checkbox>
      <ods-checkbox name="checkbox-group" value="2"></ods-checkbox>
      <ods-checkbox name="checkbox-group" value="3"></ods-checkbox>
      <button value="button">Focused button</button>`);
      await page.keyboard.press('Tab');
      expect(await getValueActiveElement()).toBe('1');

      await page.keyboard.press('Tab');
      expect(await getValueActiveElement()).toBe('2');

      await page.keyboard.press('Tab');
      expect(await getValueActiveElement()).toBe('3');

      await page.keyboard.press('Tab');
      expect(await getValueActiveElement()).toBe('button');
    });
  });
});
