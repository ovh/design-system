import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-password navigation', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.tagName === 'ODS-PASSWORD';
    });
  }

  async function clickOnInputButton(buttonSelector: string): Promise<void> {
    return await page.evaluate((selector) => {
      const input = document.querySelector('ods-password')?.shadowRoot?.querySelector('ods-input');
      const buttonClearable = input?.shadowRoot?.querySelector<HTMLElement>(selector);
      buttonClearable?.click();
    }, buttonSelector);
  }

  async function odsPasswordFocusedElementTagName(): Promise<string | undefined> {
    return await page.evaluate(() => {
      const input = document.querySelector('ods-password')?.shadowRoot?.querySelector('ods-input');
      return input?.shadowRoot?.activeElement?.tagName;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-password');
  }

  beforeEach(jest.clearAllMocks);

  describe('focus', () => {
    it('should be focusable', async() => {
      await setup('<ods-password></ods-password>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');
      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(true);
      expect(odsFocusSpy).toHaveReceivedEventTimes(1);
    });

    it('should not be focusable if disabled', async() => {
      await setup('<ods-password is-disabled></ods-password>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');
      await page.keyboard.press('Tab');
      expect(await isFocused()).toBe(false);
      expect(odsFocusSpy).not.toHaveReceivedEvent();
    });
  });

  describe('isClearable', () => {
    it('should not have clearable button without value', async() => {
      await setup('<ods-password is-clearable></ods-password>');

      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementTagName()).toBe('INPUT');

      // Masked button
      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementTagName()).toBe('BUTTON');

      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementTagName()).not.toBe('BUTTON');
    });

    it('Button clearable should be focusable', async() => {
      await setup('<ods-password is-clearable value="value"></ods-password>');

      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementTagName()).toBe('INPUT');

      // Cleared button
      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementTagName()).toBe('BUTTON');

      // Masked button
      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementTagName()).toBe('BUTTON');

      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementTagName()).not.toBe('BUTTON');
    });

    it('should clear password when Enter on clearable button', async() => {
      await setup('<ods-password is-clearable value="value"></ods-password>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      expect(await el.getProperty('value')).toBe('value');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
      expect(await odsPasswordFocusedElementTagName()).toBe('INPUT');
    });

    it('should clear password when Space on clearable button', async() => {
      await setup('<ods-password is-clearable value="value"></ods-password>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      expect(await el.getProperty('value')).toBe('value');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
      expect(await odsPasswordFocusedElementTagName()).toBe('INPUT');
    });

    it('should clear password when click on clearable button', async() => {
      await setup('<ods-password is-clearable value="value"></ods-password>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      expect(await el.getProperty('value')).toBe('value');

      await clickOnInputButton('.ods-input__actions__clearable');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
      expect(await odsPasswordFocusedElementTagName()).toBe('INPUT');
    });

    it('should do nothing because of disabled', async() => {
      await setup('<ods-password is-disabled is-clearable value="value"></ods-password>');
      const odsClearSpy = await page.spyOnEvent('odsClear');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe('value');

      await page.keyboard.press('Enter');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe('value');

      await clickOnInputButton('.ods-input__actions__clearable');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe('value');
      expect(odsClearSpy).not.toHaveReceivedEvent();
    });

    it('should do nothing because of readonly', async() => {
      await setup('<ods-password is-readonly is-clearable value="value"></ods-password>');
      const odsClearSpy = await page.spyOnEvent('odsClear');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe('value');

      await page.keyboard.press('Enter');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe('value');

      await clickOnInputButton('.ods-input__actions__clearable');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe('value');
      expect(odsClearSpy).not.toHaveReceivedEvent();
    });
  });

  describe('isMasked (default)', () => {
    it('Button masked should be focusable', async() => {
      await setup('<ods-password></ods-password>');

      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementTagName()).toBe('INPUT');

      // Masked Button
      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementTagName()).toBe('BUTTON');

      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementTagName()).not.toBe('BUTTON');
    });

    it('should toggle masked when click on masked button', async() => {
      await setup('<ods-password is-masked value="value"></ods-password>');
      const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');

      await clickOnInputButton('.ods-input__actions__toggle-mask');
      await page.waitForChanges();

      expect(odsToggleMaskSpy).toHaveReceivedEventTimes(1);
    });

    it('should do nothing because of disabled', async() => {
      await setup('<ods-password is-disabled value="value"></ods-password>');
      const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      await page.waitForChanges();

      await page.keyboard.press('Enter');
      await page.waitForChanges();

      await clickOnInputButton('.ods-input__actions__toggle-mask');
      await page.waitForChanges();
      expect(odsToggleMaskSpy).not.toHaveReceivedEvent();
    });

    it('should do nothing because of readonly', async() => {
      await setup('<ods-password is-readonly value="value"></ods-password>');
      const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      await page.waitForChanges();

      await page.keyboard.press('Enter');
      await page.waitForChanges();

      await clickOnInputButton('.ods-input__actions__toggle-mask');
      await page.waitForChanges();
      expect(odsToggleMaskSpy).not.toHaveReceivedEvent();
    });
  });
});
