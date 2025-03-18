import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-input navigation', () => {
  let el: E2EElement;
  let input: E2EElement;
  let page: E2EPage;
  let buttonClearable: E2EElement;
  let buttonSearch: E2EElement;
  let buttonToggleMask: E2EElement;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.tagName === 'ODS-INPUT';
    });
  }

  async function odsInputFocusedElementClassName(): Promise<string | undefined> {
    return await page.evaluate(() => {
      const input = document.querySelector('ods-input');
      return input?.shadowRoot?.activeElement?.className;
    });
  }

  async function getFocusedButtonIconName(): Promise<string | undefined> {
    return await page.evaluate(() => {
      const input = document.querySelector('ods-input');
      return input?.shadowRoot?.activeElement?.getAttribute('icon') || undefined;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(`${content}<button>Dummy to focus out</button>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-input');
    input = await page.find('ods-input >>> input');
    buttonClearable = await page.find('ods-input >>> ods-button[icon="xmark"]');
    buttonSearch = await page.find('ods-input >>> ods-button[icon="magnifying-glass"]');
    buttonToggleMask = await page.find('ods-input >>> ods-button[icon="eye-off"]');
  }

  beforeEach(jest.clearAllMocks);

  describe('focus', () => {
    it('should be focusable', async() => {
      await setup('<ods-input></ods-input>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');

      await page.keyboard.press('Tab');

      expect(await isFocused()).toBe(true);
      expect(odsFocusSpy).toHaveReceivedEventTimes(1);
    });

    it('should not be focusable if disabled', async() => {
      await setup('<ods-input is-disabled></ods-input>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');

      await page.keyboard.press('Tab');

      expect(await isFocused()).toBe(false);
      expect(odsFocusSpy).not.toHaveReceivedEvent();
    });

    it('should be focused on associated label click', async() => {
      await setup('<label for="ods-input">Dummy label</label><ods-input id="ods-input"></ods-input>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');
      const labelElement = await page.find('label');

      await labelElement.click();
      await page.waitForChanges();

      expect(await isFocused()).toBe(true);
      expect(odsFocusSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('isClearable', () => {
    it('should not have clearable button without value', async() => {
      await setup('<ods-input is-clearable></ods-input>');

      await page.keyboard.press('Tab');
      expect(await odsInputFocusedElementClassName()).toContain('ods-input__input');

      await page.keyboard.press('Tab');
      expect(await odsInputFocusedElementClassName()).toBe(undefined);
    });

    it('Button clearable should be focusable', async() => {
      await setup('<ods-input is-clearable value="value"></ods-input>');

      await page.keyboard.press('Tab');
      expect(await odsInputFocusedElementClassName()).toContain('ods-input__input');

      await page.keyboard.press('Tab');
      expect(await getFocusedButtonIconName()).toBe('xmark');

      await page.keyboard.press('Tab');
      expect(await odsInputFocusedElementClassName()).toBe(undefined);
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
      expect(await odsInputFocusedElementClassName()).toContain('ods-input__input');
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
      expect(await odsInputFocusedElementClassName()).toContain('ods-input__input');
    });

    it('should clear input when click on clearable button', async() => {
      await setup('<ods-input is-clearable value="value"></ods-input>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      expect(await el.getProperty('value')).toBe('value');

      await buttonClearable.click();
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
      expect(await odsInputFocusedElementClassName()).toContain('ods-input__input');
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
      expect(await el.getProperty('value')).toBe('value');

      await buttonClearable.click();
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe('value');
      expect(odsClearSpy).not.toHaveReceivedEvent();
    });

    it('should do nothing because of readonly', async() => {
      await setup('<ods-input is-readonly is-clearable value="value"></ods-input>');
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

    it('should not submit form when Enter on clearable button', async() => {
      await setup('<form method="get"><ods-input name="ods-input" is-clearable value="value"></ods-input></form>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      expect(await el.getProperty('value')).toBe('value');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForChanges();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('ods-input')).toBeNull();
      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('isMasked', () => {
    it('Button masked should be focusable', async() => {
      await setup('<ods-input is-masked></ods-input>');

      await page.keyboard.press('Tab');
      expect(await odsInputFocusedElementClassName()).toContain('ods-input__input');

      await page.keyboard.press('Tab');
      expect(await getFocusedButtonIconName()).toBe('eye-off');

      await page.keyboard.press('Tab');
      expect(await odsInputFocusedElementClassName()).toBe(undefined);
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
      await page.keyboard.press('Space');
      await page.waitForChanges();

      expect(await input.getProperty('type')).toBe('text');
      expect(odsToggleMaskSpy).toHaveReceivedEventTimes(1);
    });

    it('should toggle masked when click on masked button', async() => {
      await setup('<ods-input is-masked value="value"></ods-input>');
      const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');
      expect(await input.getProperty('type')).toBe('password');

      await buttonToggleMask.click();
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
      expect(await input.getProperty('type')).toBe('password');

      await buttonToggleMask.click();
      await page.waitForChanges();
      expect(await input.getProperty('type')).toBe('password');
      expect(odsToggleMaskSpy).not.toHaveReceivedEvent();
    });

    it('should toggle masked when click on masked button with readonly', async() => {
      await setup('<ods-input is-readonly is-masked value="value"></ods-input>');
      const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');
      expect(await input.getProperty('type')).toBe('password');

      await buttonToggleMask.click();
      await page.waitForChanges();

      expect(await input.getProperty('type')).toBe('text');
      expect(odsToggleMaskSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('Search', () => {
    it('Button search should be focusable', async() => {
      await setup('<ods-input type="search"></ods-input>');

      await page.keyboard.press('Tab');
      expect(await odsInputFocusedElementClassName()).toContain('ods-input__input');

      await page.keyboard.press('Tab');
      expect(await getFocusedButtonIconName()).toBe('magnifying-glass');

      await page.keyboard.press('Tab');
      expect(await odsInputFocusedElementClassName()).toBe(undefined);
    });

    it('should do nothing because of disabled', async() => {
      await setup('<ods-input is-disabled type="search" value="value"></ods-input>');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      await page.waitForChanges();
      expect(await odsInputFocusedElementClassName()).toBe(undefined);

      await page.keyboard.press('Enter');
      await page.waitForChanges();
      expect(await odsInputFocusedElementClassName()).toBe(undefined);

      await buttonSearch.click();
      await page.waitForChanges();
      expect(await odsInputFocusedElementClassName()).toBe(undefined);
    });

    it('should do nothing because of readonly', async() => {
      await setup('<ods-input is-readonly type="search" value="value"></ods-input>');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      await page.waitForChanges();
      expect(await odsInputFocusedElementClassName()).toBe(undefined);

      await page.keyboard.press('Enter');
      await page.waitForChanges();
      expect(await odsInputFocusedElementClassName()).toBe(undefined);

      await buttonSearch.click();
      await page.waitForChanges();
      expect(await odsInputFocusedElementClassName()).toContain('ods-input__input');
    });
  });

  it('should have 2 button focusable with masked & clearable', async() => {
    await setup('<ods-input is-masked is-clearable value="value"></ods-input>');
    await page.keyboard.press('Tab');
    expect(await odsInputFocusedElementClassName()).toContain('ods-input__input');

    await page.keyboard.press('Tab');
    expect(await getFocusedButtonIconName()).toBe('xmark');

    await page.keyboard.press('Tab');
    expect(await getFocusedButtonIconName()).toBe('eye-off');
  });

  it('should have 2 button focusable with search & clearable', async() => {
    await setup('<ods-input type="search" is-clearable value="value"></ods-input>');
    await page.keyboard.press('Tab');
    expect(await odsInputFocusedElementClassName()).toContain('ods-input__input');

    await page.keyboard.press('Tab');
    expect(await getFocusedButtonIconName()).toBe('xmark');

    await page.keyboard.press('Tab');
    expect(await getFocusedButtonIconName()).toBe('magnifying-glass');
  });
});
