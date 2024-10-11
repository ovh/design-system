import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-timepicker navigation', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isInputFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.tagName === 'ODS-TIMEPICKER' &&
        document.activeElement?.shadowRoot?.activeElement?.tagName === 'ODS-INPUT';
    });
  }

  async function isSelectFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.tagName === 'ODS-TIMEPICKER' &&
        document.activeElement?.shadowRoot?.activeElement?.tagName === 'ODS-SELECT';
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(`${content}<button>Dummy to focus out</button>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-timepicker');
  }

  describe('focus', () => {
    it('should focus each input part on tabulation', async() => {
      await setup('<ods-timepicker with-seconds></ods-timepicker>');

      expect(await isInputFocused()).toBe(false);

      await page.keyboard.press('Tab'); // hours
      await page.waitForChanges();

      expect(await isInputFocused()).toBe(true);

      await page.keyboard.press('Tab'); // minutes
      await page.waitForChanges();

      expect(await isInputFocused()).toBe(true);

      await page.keyboard.press('Tab'); // seconds
      await page.waitForChanges();

      expect(await isInputFocused()).toBe(true);
    });

    // FIXME Test does not work when executed on CI, but is ok locally
    xit('should focus input then select on tabulation if timezones are set', async() => {
      await setup('<ods-timepicker timezones="all" with-seconds></ods-timepicker>');

      expect(await isInputFocused()).toBe(false);
      expect(await isSelectFocused()).toBe(false);

      await page.keyboard.press('Tab'); // hours
      await page.waitForChanges();
      await page.keyboard.press('Tab'); // minutes
      await page.waitForChanges();
      await page.keyboard.press('Tab'); // seconds
      await page.waitForChanges();
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(await isInputFocused()).toBe(false);
      expect(await isSelectFocused()).toBe(true);
    });

    it('should not be focusable if disabled', async() => {
      await setup('<ods-timepicker is-disabled></ods-timepicker>');

      expect(await isInputFocused()).toBe(false);

      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(await isInputFocused()).toBe(false);
    });

    it('should be focused on associated label click', async() => {
      await setup('<label for="ods-timepicker">Dummy label</label><ods-timepicker id="ods-timepicker"></ods-timepicker>');
      const labelElement = await page.find('label');

      expect(await isInputFocused()).toBe(false);

      await labelElement.click();
      await page.waitForChanges();

      expect(await isInputFocused()).toBe(true);
    });
  });

  describe('arrow', () => {
    it('should increment value with arrow up', async() => {
      await setup('<ods-timepicker value="11:11:00" with-seconds></ods-timepicker>');

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('12:11:00');

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('12:12:00');

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('12:12:01');
    });

    it('should decrement value with arrow down', async() => {
      await setup('<ods-timepicker value="11:11:00" with-seconds></ods-timepicker>');

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('10:11:00');

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('10:10:00');

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('10:10:59');
    });

    it('should switch from hour to minute to seconds using Arrow Left/Right', async() => {
      await setup('<ods-timepicker value="11:11:00" with-seconds></ods-timepicker>');

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('12:11:00');

      await page.keyboard.press('ArrowRight');
      await page.waitForChanges();
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('12:12:00');

      await page.keyboard.press('ArrowRight');
      await page.waitForChanges();
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('12:12:01');

      await page.keyboard.press('ArrowLeft');
      await page.waitForChanges();
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('12:13:01');

      await page.keyboard.press('ArrowLeft');
      await page.waitForChanges();
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('13:13:01');
    });
  });
});
