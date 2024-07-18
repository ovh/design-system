import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-phone-number behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-phone-number');
  }

  beforeEach(jest.clearAllMocks);

  it('should reset input value on country change', async() => {
    await setup('<ods-phone-number iso-code="zw" countries="all" value="0123456789"></ods-phone-number>');

    const selectElement = await page.find('ods-phone-number >>> ods-select');
    await selectElement.click();
    await page.waitForChanges();
    await page.evaluate(() => {
      document.querySelector('ods-phone-number')
        ?.shadowRoot?.querySelector('ods-select')
        ?.shadowRoot?.querySelector<HTMLElement>('.option')?.click();
    });
    await page.waitForChanges();

    expect(await page.evaluate(() => document.querySelector('ods-phone-number')?.getAttribute('value'))).toBe('');
  });

  describe('form', () => {
    it('should get form data when submit button is triggered', async() => {
      await setup(`<form method="get">
        <ods-phone-number iso-code="fr" name="odsPhoneNumber" value="0123456789"></ods-phone-number>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('odsPhoneNumber')).toBe('+33123456789');
    });

    it('should reset form when reset button is triggered', async() => {
      await setup(`<form method="get">
        <ods-phone-number name="odsPhoneNumber" value="0123456789"></ods-phone-number>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      const submitButton = await page.find('button[type="submit"]');

      await resetButton.click();
      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('odsPhoneNumber')).toBe('');
    });
  });

  describe('methods', () => {
    describe('clear', () => {
      it('should emit an odsClear event', async() => {
        await setup('<ods-phone-number value="0123456789"></ods-phone-number>');
        const odsClearSpy = await page.spyOnEvent('odsClear');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });

      it('should emit an odsClear event even if disabled', async() => {
        await setup('<ods-phone-number is-disabled value="0123456789"></ods-phone-number>');
        const odsClearSpy = await page.spyOnEvent('odsClear');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('reset', () => {
      it('should emit an odsReset event', async() => {
        const dummyDefaultValue = '0123456789';
        await setup(`<ods-phone-number value="value" default-value="${dummyDefaultValue}"></ods-phone-number>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });

      it('should emit an odsReset event even if disabled', async() => {
        const dummyDefaultValue = '0123456789';
        await setup(`<ods-phone-number is-disabled value="value" default-value="${dummyDefaultValue}"></ods-phone-number>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('event', () => {
    describe('odsChange', () => {
      it('should emit an odsChange event', async() => {
        await setup('<ods-phone-number name="ods-phone-number" iso-code="fr"></ods-phone-number>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        const newValue = '0987654321';
        await page.keyboard.press('Tab');
        await page.keyboard.type(newValue);
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(newValue);
        expect(odsChangeSpy).toHaveReceivedEventTimes(newValue.length);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          isoCode: 'fr',
          name: 'ods-phone-number',
          previousValue: newValue.slice(0, -1),
          validity: {
            badInput: false,
            customError: false,
            patternMismatch: false,
            rangeOverflow: false,
            rangeUnderflow: false,
            stepMismatch: false,
            tooLong: false,
            tooShort: false,
            typeMismatch: false,
            valid: true,
            valueMissing: false,
          },
          value: `+33${newValue.substring(1)}`,
        });
      });

      it('should not emit an odsChange event if disabled', async() => {
        await setup('<ods-phone-number is-disabled name="ods-phone-number" iso-code="fr"></ods-phone-number>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        const newValue = '0987654321';
        await page.keyboard.press('Tab');
        await page.keyboard.type(newValue);
        await page.waitForChanges();

        expect(odsChangeSpy).toHaveReceivedEventTimes(0);
      });
    });
  });
});
