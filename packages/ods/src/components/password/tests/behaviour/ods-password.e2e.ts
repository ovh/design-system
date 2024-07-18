import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-password behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-password');
  }

  beforeEach(jest.clearAllMocks);

  describe('method:clear', () => {
    it('should receive odsClear event', async() => {
      await setup('<ods-password value="value"></ods-password>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      await el.callMethod('clear');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('method:reset', () => {
    it('should receive odsReset event', async() => {
      const defaultValue = 'defaultValue';
      await setup(`<ods-password value="value" default-value="${defaultValue}"></ods-password>`);
      const odsResetSpy = await page.spyOnEvent('odsReset');
      await el.callMethod('reset');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(defaultValue);
      expect(odsResetSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('method:toggleMask', () => {
    it('should toggle mask', async() => {
      await setup('<ods-password is-masked></ods-password>');
      const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');
      await el.callMethod('toggleMask');
      await page.waitForChanges();
      expect(await el.getProperty('isMasked')).toBe(false);

      await el.callMethod('toggleMask');
      await page.waitForChanges();
      expect(await el.getProperty('isMasked')).toBe(true);
      expect(odsToggleMaskSpy).toHaveReceivedEventTimes(2);
    });
  });

  describe('event:odsChange ', () => {
    it('should receive odsChange event', async() => {
      const typeValue = 'some text';
      await setup('<ods-password name="ods-password"></ods-password>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await page.keyboard.press('Tab');
      await page.keyboard.type(typeValue);
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(typeValue);
      expect(odsChangeSpy).toHaveReceivedEventTimes(typeValue.length);
      expect(odsChangeSpy).toHaveReceivedEventDetail({
        name: 'ods-password',
        oldValue: 'some tex',
        validity: {},
        value: 'some text',
      });
    });

    it('should do nothing because of disabled', async() => {
      await setup('<ods-password is-disabled></ods-password>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await page.keyboard.press('Tab');
      await page.keyboard.type('some text');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(null);
      expect(odsChangeSpy).not.toHaveReceivedEvent();
    });
  });

  describe('Form', () => {
    it('should get form data with button type submit', async() => {
      await setup(`<form method="get">
        <ods-password name="odsPassword" value="On Vous Heberge ?"></ods-password>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('odsPassword')).toBe('On Vous Heberge ?');
    });

    it('should reset form with button type reset', async() => {
      await setup(`<form method="get">
        <ods-password name="odsPassword" value="On Vous Heberge ?"></ods-password>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      await resetButton.click();

      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('odsPassword')).toBe('');
    });
  });
});
