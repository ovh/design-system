import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-range behavior', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-range');
    await page.waitForChanges();
  }

  describe('method:clear', () => {
    it('should receive odsClear event', async() => {
      await setup('<ods-range value="value"></ods-range>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      await el.callMethod('clear');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('method:reset', () => {
    it('should receive odsReset event', async() => {
      const defaultValue = 50;
      await setup(`<ods-range value="30" default-value="${defaultValue}"></ods-range>`);
      const odsResetSpy = await page.spyOnEvent('odsReset');
      await el.callMethod('reset');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(defaultValue);
      expect(odsResetSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('event:odsChange ', () => {
    it('should receive odsChange event', async() => {
      await setup('<ods-range name="name"></ods-range>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(1);
      expect(odsChangeSpy).toHaveReceivedEventTimes(1);
      expect(odsChangeSpy).toHaveReceivedEventDetail({
        name: 'name',
        validity: {},
        value: 1,
      });
    });

    it('should do nothing because of disabled', async() => {
      await setup('<ods-range name="name" is-disabled></ods-range>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(0);
      expect(odsChangeSpy).not.toHaveReceivedEvent();
    });
  });

  describe('Form', () => {
    it('should get form data with button type submit', async() => {
      await setup(`<form method="get">
        <ods-range name="odsRange" value="50"></ods-range>
        <input type="text" name="natifInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('odsRange')).toBe('50');
      expect(url.searchParams.get('natifInput')).toBe('');
    });

    it('should reset form with button type reset', async() => {
      await setup(`<form method="get">
        <ods-range name="odsRange" value="50"></ods-range>
        <input type="text" name="natifInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      await resetButton.click();

      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('natifInput')).toBe('');
      expect(url.searchParams.get('odsRange')).toBe('0');
    });

    it('should reset form with button type reset with default value', async() => {
      await setup(`<form method="get">
        <ods-range name="odsRange" default-value="50"></ods-range>
        <input type="text" name="natifInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      await resetButton.click();

      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('natifInput')).toBe('');
      expect(url.searchParams.get('odsRange')).toBe('50');
    });
  });
});
