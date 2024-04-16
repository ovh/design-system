import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-input accessibility', () => {
  let el: E2EElement;
  let input: E2EElement;
  let page: E2EPage;
  let button: E2EElement;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.tagName === 'ODS-INPUT';
    });
  }

  async function odsInputFocusedElementTagName(): Promise<string | undefined> {
    return await page.evaluate(() => {
      const input = document.querySelector('ods-input');
      return input?.shadowRoot?.activeElement?.tagName;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-input');
    input = await page.find('ods-input >>> input');
    button = await page.find('ods-input >>> .ods-input__button')
  }

  beforeEach(jest.clearAllMocks);

  describe('focus', () => {
    it('should be focusable', async() => {
      await setup('<ods-input></ods-input>');
      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(true);
    });

    it('should not be focusable if disabled', async() => {
      await setup('<ods-input is-disabled></ods-input>');
      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(false);
    });
  });

  describe('isClearable', () => {
    it('Button clearable should be focusable', async() => {
      await setup('<ods-input is-clearable></ods-input>');

      await page.keyboard.press('Tab');
      expect(await odsInputFocusedElementTagName()).toBe('INPUT');

      await page.keyboard.press('Tab');
      expect(await odsInputFocusedElementTagName()).toBe('BUTTON');

      await page.keyboard.press('Tab');
      expect(await odsInputFocusedElementTagName()).not.toBe('BUTTON');
    });

    it('should clear input when Enter on clearable button', async() => {
      await setup('<ods-input is-clearable value="value"></ods-input>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      expect(await el.getProperty('value')).toBe('value');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
    });

    it('should clear input when Space on clearable button', async() => {
      await setup('<ods-input is-clearable value="value"></ods-input>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      expect(await el.getProperty('value')).toBe('value');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
    });

    it('should clear input when click on clearable button', async() => {
      await setup('<ods-input is-clearable value="value"></ods-input>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      expect(await el.getProperty('value')).toBe('value');

      await button.click()
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
    });

    it('should do nothing because of disabled', async() => {
      await setup('<ods-input is-disabled is-clearable value="value"></ods-input>');
      const odsClearSpy = await page.spyOnEvent('odsClear');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('value');
      await page.keyboard.press('Enter');
      await page.waitForChanges();
      await button.click();
      expect(await el.getProperty('value')).toBe('value');
      expect(odsClearSpy).not.toHaveReceivedEvent();
    });
  });

  describe('isMasked', () => {
    it('Button masked should be focusable', async() => {
      await setup('<ods-input is-masked></ods-input>');

      await page.keyboard.press('Tab');
      expect(await odsInputFocusedElementTagName()).toBe('INPUT');

      await page.keyboard.press('Tab');
      expect(await odsInputFocusedElementTagName()).toBe('BUTTON');

      await page.keyboard.press('Tab');
      expect(await odsInputFocusedElementTagName()).not.toBe('BUTTON');
    });

    it('should masked input when Enter on masked button', async() => {
      await setup('<ods-input is-masked value="value"></ods-input>');
      const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');
      expect(await input.getProperty('type')).toBe('password');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(await input.getProperty('type')).toBe('text');
      expect(odsToggleMaskSpy).toHaveReceivedEventTimes(1);
    });

    it('should toggle masked when Space on button', async() => {
      await setup('<ods-input is-masked value="value"></ods-input>');
      const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');
      expect(await input.getProperty('type')).toBe('password');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press(' ');
      await page.waitForChanges();

      expect(await input.getProperty('type')).toBe('text');
      expect(odsToggleMaskSpy).toHaveReceivedEventTimes(1);
    });

    it('should toggle masked when click on masked button', async() => {
      await setup('<ods-input is-masked value="value"></ods-input>');
      const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');
      expect(await input.getProperty('type')).toBe('password');

      await button.click()
      await page.waitForChanges();

      expect(await input.getProperty('type')).toBe('text');
      expect(odsToggleMaskSpy).toHaveReceivedEventTimes(1);
    });

    it('should do nothing because of disabled', async() => {
      await setup('<ods-input is-disabled is-masked value="value"></ods-input>');
      const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');
      expect(await input.getProperty('type')).toBe('password');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      await page.waitForChanges();

      expect(await input.getProperty('type')).toBe('password');

      await page.keyboard.press('Enter');
      await page.waitForChanges();
      await button.click();

      expect(await input.getProperty('type')).toBe('password');
      expect(odsToggleMaskSpy).not.toHaveReceivedEvent();
    });
  });

  it('should have 2 button focusable with masked & clearable', async() => {
    await setup('<ods-input is-masked is-clearable></ods-input>');
    await page.keyboard.press('Tab');
    expect(await odsInputFocusedElementTagName()).toBe('INPUT');

    await page.keyboard.press('Tab');
    expect(await odsInputFocusedElementTagName()).toBe('BUTTON');

    await page.keyboard.press('Tab');
    expect(await odsInputFocusedElementTagName()).toBe('BUTTON');
  });
});