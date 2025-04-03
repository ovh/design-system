import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-radio navigation', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      // No shadow root so the input can be the activeElement
      return document.activeElement?.tagName === 'INPUT';
    });
  }

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

  describe('Radio', () => {
    describe('focus', () => {
      it('should be focusable', async() => {
        await setup('<ods-radio></ods-radio>');
        const odsFocusSpy = await page.spyOnEvent('odsFocus');
        await page.keyboard.press('Tab');
        expect(await isFocused()).toBe(true);
        expect(odsFocusSpy).toHaveReceivedEventTimes(1);
      });

      it('should not be focusable if disabled', async() => {
        await setup('<ods-radio is-disabled></ods-radio>');
        const odsFocusSpy = await page.spyOnEvent('odsFocus');
        await page.keyboard.press('Tab');
        expect(await isFocused()).toBe(false);
        expect(odsFocusSpy).not.toHaveReceivedEvent();
      });
    });

    describe('selection', () => {
      it('should be selectable on press Space', async() => {
        await setup('<ods-radio></ods-radio>');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Space');
        expect(await isInputRadioChecked(el)).toBe(true);
      });

      it('should be selectable on click', async() => {
        await setup('<ods-radio></ods-radio>');
        await el.click();
        expect(await isInputRadioChecked(el)).toBe(true);
      });

      it('should not be selectable on click if disabled', async() => {
        await setup('<ods-radio is-disabled></ods-radio>');
        await el.click();
        expect(await isInputRadioChecked(el)).toBe(false);
      });
    });
  });

  describe('Radio Group', () => {
    async function getValueActiveElement(): Promise<string | null> {
      return await page.evaluate(() => {
        return document.activeElement?.getAttribute('value') ?? null;
      });
    }

    it('should focus the radio-group', async() => {
      await setup(`
      <ods-radio name="radio-group" value="1" is-checked></ods-radio>
      <ods-radio name="radio-group" value="2"></ods-radio>
      <ods-radio name="radio-group" value="3"></ods-radio>
      <button value="button">Focused button</button>`);
      await page.keyboard.press('Tab');
      expect(await getValueActiveElement()).toBe('1');

      await page.keyboard.press('Tab');
      expect(await getValueActiveElement()).toBe('button');
    });

    it('should focus the radio-group and change focus and select with arrow up / down', async() => {
      await setup(`
      <ods-radio name="radio-group" value="1" is-checked></ods-radio>
      <ods-radio name="radio-group" value="2"></ods-radio>
      <ods-radio name="radio-group" value="3"></ods-radio>
      <button value="button">Focused button</button>`);
      const radios = await page.findAll('ods-radio');
      await page.keyboard.press('Tab');
      expect(await getValueActiveElement()).toBe('1');

      await page.keyboard.press('ArrowDown');
      expect(await getValueActiveElement()).toBe('2');
      expect(await isInputRadioChecked(radios[1])).toBe(true);

      await page.keyboard.press('ArrowDown');
      expect(await getValueActiveElement()).toBe('3');
      expect(await isInputRadioChecked(radios[2])).toBe(true);

      await page.keyboard.press('ArrowDown');
      expect(await getValueActiveElement()).toBe('1');
      expect(await isInputRadioChecked(radios[0])).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await getValueActiveElement()).toBe('3');
      expect(await isInputRadioChecked(radios[2])).toBe(true);
    });

    it('should focus the radio-group and change focus and select with arrow left / right', async() => {
      await setup(`
      <ods-radio name="radio-group" value="1" is-checked></ods-radio>
      <ods-radio name="radio-group" value="2"></ods-radio>
      <ods-radio name="radio-group" value="3"></ods-radio>
      <button value="button">Focused button</button>`);
      const radios = await page.findAll('ods-radio');
      await page.keyboard.press('Tab');
      expect(await getValueActiveElement()).toBe('1');

      await page.keyboard.press('ArrowLeft');
      expect(await getValueActiveElement()).toBe('3');
      expect(await isInputRadioChecked(radios[2])).toBe(true);

      await page.keyboard.press('ArrowLeft');
      expect(await getValueActiveElement()).toBe('2');
      expect(await isInputRadioChecked(radios[1])).toBe(true);

      await page.keyboard.press('ArrowRight');
      expect(await getValueActiveElement()).toBe('3');
      expect(await isInputRadioChecked(radios[2])).toBe(true);
    });

    it('should ignore disabled radio with arrow up / down', async() => {
      await setup(`
      <ods-radio name="radio-group" value="1" is-checked></ods-radio>
      <ods-radio name="radio-group" value="2" is-disabled></ods-radio>
      <ods-radio name="radio-group" value="3"></ods-radio>
      <button value="button">Focused button</button>`);
      const radios = await page.findAll('ods-radio');
      await page.keyboard.press('Tab');
      expect(await getValueActiveElement()).toBe('1');

      await page.keyboard.press('ArrowDown');
      expect(await getValueActiveElement()).toBe('3');
      expect(await isInputRadioChecked(radios[2])).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await getValueActiveElement()).toBe('1');
      expect(await isInputRadioChecked(radios[0])).toBe(true);
    });

    it('should ignore disabled radio with arrow left / right', async() => {
      await setup(`
      <ods-radio name="radio-group" value="1" is-checked></ods-radio>
      <ods-radio name="radio-group" value="2" is-disabled></ods-radio>
      <ods-radio name="radio-group" value="3"></ods-radio>
      <button value="button">Focused button</button>`);
      const radios = await page.findAll('ods-radio');
      await page.keyboard.press('Tab');
      expect(await getValueActiveElement()).toBe('1');

      await page.keyboard.press('ArrowRight');
      expect(await getValueActiveElement()).toBe('3');
      expect(await isInputRadioChecked(radios[2])).toBe(true);

      await page.keyboard.press('ArrowLeft');
      expect(await getValueActiveElement()).toBe('1');
      expect(await isInputRadioChecked(radios[0])).toBe(true);
    });
  });
});
