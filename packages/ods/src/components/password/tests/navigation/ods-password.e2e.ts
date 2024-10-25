import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-password navigation', () => {
  let page: E2EPage;
  let el: E2EElement;
  let buttonClearable: E2EElement;
  let buttonToggleMask: E2EElement;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.tagName === 'ODS-PASSWORD';
    });
  }

  async function odsPasswordFocusedElementClassName(): Promise<string | undefined> {
    return await page.evaluate(() => {
      const input = document.querySelector('ods-password')?.shadowRoot?.querySelector('ods-input');
      return input?.shadowRoot?.activeElement?.className;
    });
  }

  async function getFocusedButtonIconName(): Promise<string | undefined> {
    return await page.evaluate(() => {
      const input = document.querySelector('ods-password')?.shadowRoot?.querySelector('ods-input');
      return input?.shadowRoot?.activeElement?.getAttribute('icon') || undefined;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(`${content}<button>Dummy to focus out</button>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-password');
    buttonClearable = await page.find('ods-password >>> ods-button[icon="xmark"]');
    buttonToggleMask = await page.find('ods-password >>> ods-button[icon="eye-off"]');
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

    it('should be focused on associated label click', async() => {
      await setup('<label for="ods-password">Dummy label</label><ods-password id="ods-password"></ods-password>');
      const labelElement = await page.find('label');

      expect(await isFocused()).toBe(false);

      await labelElement.click();
      await page.waitForChanges();

      expect(await isFocused()).toBe(true);
    });
  });

  describe('isClearable', () => {
    it('should not have clearable button without value', async() => {
      await setup('<ods-password is-clearable></ods-password>');

      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementClassName()).toContain('ods-input__input');

      // Masked button
      await page.keyboard.press('Tab');
      expect(await getFocusedButtonIconName()).toBe('eye-off');

      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementClassName()).toBe(undefined);
    });

    it('Button clearable should be focusable', async() => {
      await setup('<ods-password is-clearable value="value"></ods-password>');

      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementClassName()).toContain('ods-input__input');

      // Cleared button
      await page.keyboard.press('Tab');
      expect(await getFocusedButtonIconName()).toBe('xmark');

      // Masked button
      await page.keyboard.press('Tab');
      expect(await getFocusedButtonIconName()).toBe('eye-off');

      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementClassName()).toBe(undefined);
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
      expect(await odsPasswordFocusedElementClassName()).toContain('ods-input__input');
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
      expect(await odsPasswordFocusedElementClassName()).toContain('ods-input__input');
    });

    it('should clear password when click on clearable button', async() => {
      await setup('<ods-password is-clearable value="value"></ods-password>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      expect(await el.getProperty('value')).toBe('value');

      await buttonClearable.click();
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
      expect(await odsPasswordFocusedElementClassName()).toContain('ods-input__input');
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

      await buttonClearable.click();
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

      await buttonClearable.click();
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe('value');
      expect(odsClearSpy).not.toHaveReceivedEvent();
    });
  });

  describe('isMasked (default)', () => {
    it('Button masked should be focusable', async() => {
      await setup('<ods-password></ods-password>');

      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementClassName()).toContain('ods-input__input');

      // Masked Button
      await page.keyboard.press('Tab');
      expect(await getFocusedButtonIconName()).toBe('eye-off');

      await page.keyboard.press('Tab');
      expect(await odsPasswordFocusedElementClassName()).toBe(undefined);
    });

    it('should toggle masked when click on masked button', async() => {
      await setup('<ods-password is-masked value="value"></ods-password>');
      const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');

      await buttonToggleMask.click();
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

      await buttonToggleMask.click();
      await page.waitForChanges();
      expect(odsToggleMaskSpy).not.toHaveReceivedEvent();
    });

    it('should toggle masked when click on masked button with readonly', async() => {
      await setup('<ods-password value="value"></ods-password>');
      const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');

      await buttonToggleMask.click();
      await page.waitForChanges();

      expect(odsToggleMaskSpy).toHaveReceivedEventTimes(1);
    });
  });
});
