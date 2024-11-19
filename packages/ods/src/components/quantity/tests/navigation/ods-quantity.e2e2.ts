import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-quantity navigation', () => {
  let el: E2EElement;
  let input: E2EElement;
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.tagName === 'ODS-QUANTITY';
    });
  }

  async function odsQuantityFocusedElementTagName(): Promise<string | undefined> {
    return await page.evaluate(() => {
      const quantity = document.querySelector('ods-quantity');
      return quantity?.shadowRoot?.activeElement?.tagName;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-quantity');
    input = await page.find('ods-quantity >>> .ods-quantity__input');
  }

  describe('focus', () => {
    it('should be focusable', async() => {
      await setup('<ods-quantity></ods-quantity>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

      expect(await isFocused()).toBe(true);
      expect(odsFocusSpy).toHaveReceivedEventTimes(1);
    });

    it('should not be focusable if disabled', async() => {
      await setup('<ods-quantity is-disabled></ods-quantity>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');

      await page.keyboard.press('Tab');

      expect(await isFocused()).toBe(false);
      expect(odsFocusSpy).not.toHaveReceivedEvent();
    });

    it('should be focused on associated label click', async() => {
      await setup('<label for="ods-quantity">Dummy label</label><ods-quantity id="ods-quantity"></ods-quantity>');
      const labelElement = await page.find('label');

      expect(await isFocused()).toBe(false);

      await labelElement.click();
      await page.waitForChanges();

      expect(await isFocused()).toBe(true);
    });
  });

  describe('navigation', () => {
    it('should navigate between button & input', async() => {
      await setup('<ods-quantity></ods-quantity><button>Dummy to focus out</button>');

      await page.keyboard.press('Tab');
      expect(await odsQuantityFocusedElementTagName()).toBe('ODS-BUTTON');

      await page.keyboard.press('Tab');
      expect(await odsQuantityFocusedElementTagName()).toBe('ODS-INPUT');

      await page.keyboard.press('Tab');
      expect(await odsQuantityFocusedElementTagName()).toBe('ODS-BUTTON');

      await page.keyboard.press('Tab');
      const lastFocusedElement = await odsQuantityFocusedElementTagName();
      expect(lastFocusedElement).not.toBe('ODS-BUTTON');
      expect(lastFocusedElement).not.toBe('ODS-INPUT');
    });
  });

  describe('deletions', () => {
    it('should emptying input in one delete', async() => {
      await setup('<ods-quantity value="1"></ods-quantity>');

      expect(await el.getProperty('value')).toBe(1);

      await input.focus();
      await page.keyboard.press('Backspace');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBeNull();
    });
  });
});
