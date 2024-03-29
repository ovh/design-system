import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-input rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let part: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }


    el = await page.find('ods-input');
    part = await page.find('ods-input >>> [part="input"]');
    await page.waitForChanges();
  }

  it('should render the web component', async() => {
    await setup('<ods-input></ods-input>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-input></ods-input>', 'ods-input::part(input) { width: 100px }');
      const partStyle = await part.getComputedStyle();
      expect(partStyle.getPropertyValue('width')).toBe('100px');
    });
  });

  describe('method:clear', () => {
    it('should receive odsClear event', async() => {
      await setup('<ods-input value="value"></ods-input>');
      const odsClearSpy = await page.spyOnEvent('odsClear');
      await el.callMethod('clear');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBeNull();
      expect(odsClearSpy).toHaveReceivedEventTimes(1);
    });

    it('should do nothing because of disabled', async() => {
      const value = 'value';
      await setup(`<ods-input is-disabled value="${value}"></ods-input>`);
      const odsClearSpy = await page.spyOnEvent('odsClear');
      await el.callMethod('clear');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(value);
      expect(odsClearSpy).not.toHaveReceivedEvent();
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

    it('should do nothing because of disabled', async() => {
      const value = 'value';
      await setup(`<ods-input is-disabled value="${value}" default-value="defaultValue"></ods-input>`);
      const odsResetSpy = await page.spyOnEvent('odsReset');
      await el.callMethod('reset');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe(value);
      expect(odsResetSpy).not.toHaveReceivedEvent();
    });
  });

  describe('method:toggleMask', () => {
    it('should toggle mask', async() => {
      await setup(`<ods-input is-masked></ods-input>`);
      const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');
      await el.callMethod('toggleMask');
      await page.waitForChanges();
      expect(await el.getProperty('isMasked')).toBe(false);

      await el.callMethod('toggleMask');
      await page.waitForChanges();
      expect(await el.getProperty('isMasked')).toBe(true);
      expect(odsToggleMaskSpy).toHaveReceivedEventTimes(2);
    });

    it('should do nothing because of disabled', async() => {
      await setup(`<ods-input is-masked is-disabled></ods-input>`);
      const odsToggleMaskSpy = await page.spyOnEvent('odsToggleMask');
      await el.callMethod('toggleMask');
      await page.waitForChanges();

      expect(await el.getProperty('isMasked')).toBe(true);
      expect(odsToggleMaskSpy).not.toHaveReceivedEvent();
    });
  });

  describe('event:odsValueChange', () => {
    it('should receive odsValueChange event', async() => {
      const typeValue = 'some text';
      await setup(`<ods-input></ods-input>`);
      const odsValueChangeSpy = await page.spyOnEvent('odsValueChange');

      await part.type(typeValue)
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(typeValue);
      expect(odsValueChangeSpy).toHaveReceivedEventTimes(typeValue.length);
    });

    it('should do nothing because of disabled', async() => {
      await setup(`<ods-input is-disabled></ods-input>`);
      const odsValueChangeSpy = await page.spyOnEvent('odsValueChange');

      await part.type('some text')
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(undefined);
      expect(odsValueChangeSpy).not.toHaveReceivedEvent();
    });
  });

  describe('Form', () => {
    it('should get form data with button type submit', async() => {
      await setup(`<form method="get">
        <ods-input name="odsInput" value="On Vous Heberge ?"></ods-input>
        <input type="text" name="natifInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();
      const url = new URL(page.url());
      expect(url.searchParams.get('odsInput')).toBe('On Vous Heberge ?');
      expect(url.searchParams.get('natifInput')).toBe('');
    });

    it('should reset form with button type reset', async() => {
      await setup(`<form method="get">
        <ods-input name="odsInput" value="On Vous Heberge ?"></ods-input>
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
      expect(url.searchParams.get('odsInput')).toBe('');
    });
  });
});
