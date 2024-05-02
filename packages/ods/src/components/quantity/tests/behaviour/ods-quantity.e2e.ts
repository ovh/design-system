import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-quantity behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;
  let buttonMinus: E2EElement;
  let buttonAdd: E2EElement;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-quantity');
    buttonMinus = await page.find('ods-quantity >>> [exportparts="button:button-minus"]');
    buttonAdd = await page.find('ods-quantity >>> [exportparts="button:button-plus"]');

    await page.waitForChanges();
  }

  beforeEach(jest.clearAllMocks);

  describe('method:clear', () => {
    it('should receive odsClear event', async() => {
      await setup('<ods-quantity value="0"></ods-quantity>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      await el.callMethod('clear');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('method:reset', () => {
    it('should receive odsReset event', async() => {
      const defaultValue = 5;
      await setup(`<ods-quantity value="8" default-value="${defaultValue}"></ods-quantity>`);
      const odsResetSpy = await page.spyOnEvent('odsReset');
      await el.callMethod('reset');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(defaultValue);
      expect(odsResetSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('button minus', () => {
    it('should decrement value', async() => {
      await setup('<ods-quantity value="0"></ods-quantity>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await buttonMinus.click();
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(-1);
      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
    });

    it('should decrement value with step', async() => {
      await setup('<ods-quantity value="0" step="10"></ods-quantity>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await buttonMinus.click();
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(-10);
      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
    });

    it('should not decrement value with is-disabled', async() => {
      await setup('<ods-quantity value="0" is-disabled></ods-quantity>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await buttonMinus.click();
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(0);
      expect(odsChangeSpy).toHaveReceivedEventTimes(0);
    });

    it('should not decrement value with is-readonly', async() => {
      await setup('<ods-quantity value="0" is-readonly></ods-quantity>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await buttonMinus.click();
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(0);
      expect(odsChangeSpy).toHaveReceivedEventTimes(0);
    });

    it('should not decrement value with min equal to value', async() => {
      await setup('<ods-quantity value="0" min="0"></ods-quantity>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await buttonMinus.click();
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(0);
      expect(odsChangeSpy).toHaveReceivedEventTimes(0);
    });

    it('should not decrement value with value inferior to min', async() => {
      await setup('<ods-quantity value="4" min="5"></ods-quantity>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await buttonMinus.click();
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(4);
      expect(odsChangeSpy).toHaveReceivedEventTimes(0);
    });
  });

  describe('button add', () => {
    it('should increment value', async() => {
      await setup('<ods-quantity value="0"></ods-quantity>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await buttonAdd.click();
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(1);
      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
    });

    it('should increment value with step', async() => {
      await setup('<ods-quantity value="0" step="10"></ods-quantity>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await buttonAdd.click();
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(10);
      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
    });

    it('should not increment value with is-disabled', async() => {
      await setup('<ods-quantity value="0" is-disabled></ods-quantity>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await buttonAdd.click();
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(0);
      expect(odsChangeSpy).toHaveReceivedEventTimes(0);
    });

    it('should not increment value with is-readonly', async() => {
      await setup('<ods-quantity value="0" is-readonly></ods-quantity>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await buttonAdd.click();
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(0);
      expect(odsChangeSpy).toHaveReceivedEventTimes(0);
    });

    it('should not increment value with max equal to value', async() => {
      await setup('<ods-quantity value="10" max="10"></ods-quantity>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await buttonAdd.click();
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(10);
      expect(odsChangeSpy).toHaveReceivedEventTimes(0);
    });

    it('should not increment value with value superior to max', async() => {
      await setup('<ods-quantity value="11" max="10"></ods-quantity>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await buttonAdd.click();
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(11);
      expect(odsChangeSpy).toHaveReceivedEventTimes(0);
    });
  });

  describe('Form', () => {
    it('should get form data with button type submit  after increment quantity', async() => {
      await setup(`<form method="get">
        <ods-quantity name="ods-quantity" value="0"></ods-quantity>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      await buttonAdd.click();
      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('ods-quantity')).toBe('1');
    });

    it('should get form data with button type submit', async() => {
      await setup(`<form method="get">
        <ods-quantity name="ods-quantity" value="0"></ods-quantity>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('ods-quantity')).toBe('0');
    });

    it('should reset form with button type reset', async() => {
      await setup(`<form method="get">
        <ods-quantity name="ods-quantity" value="0"></ods-quantity>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      await resetButton.click();

      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('ods-quantity')).toBe('0');
    });
  });
});
