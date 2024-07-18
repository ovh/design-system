import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-input behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;
  let part: E2EElement;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-input');
    part = await page.find('ods-input >>> [part="input"]');
    await page.waitForChanges();
  }

  beforeEach(jest.clearAllMocks);

  describe('method:clear', () => {
    it('should receive odsClear event', async() => {
      await setup('<ods-input value="value"></ods-input>');
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
      await setup(`<ods-input value="value" default-value="${defaultValue}"></ods-input>`);
      const odsResetSpy = await page.spyOnEvent('odsReset');
      await el.callMethod('reset');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(defaultValue);
      expect(odsResetSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('method:toggleMask', () => {
    it('should toggle mask', async() => {
      await setup('<ods-input is-masked></ods-input>');
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
      await setup('<ods-input name="ods-input"></ods-input>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await part.type(typeValue);
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(typeValue);
      expect(odsChangeSpy).toHaveReceivedEventTimes(typeValue.length);
      expect(odsChangeSpy).toHaveReceivedEventDetail({
        name: 'ods-input',
        previousValue: 'some tex',
        validity: {},
        value: 'some text',
      });
    });

    it('should do nothing because of disabled', async() => {
      await setup('<ods-input is-disabled></ods-input>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');

      await part.type('some text');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(null);
      expect(odsChangeSpy).not.toHaveReceivedEvent();
    });
  });
});
