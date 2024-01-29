import type { OdsPasswordAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_INPUT_TYPE } from '../../../../input/src';

describe('e2e:osds-password', () => {
  const baseAttribute = {
    ariaLabel: '',
    defaultValue: '',
    disabled: false,
    error: false,
    forbiddenValues: [],
    name: 'odsPassword',
    value: '',
  };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsPasswordAttribute> }): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsPasswordAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-password ${odsStringAttributes2Str(stringAttributes)}></osds-password>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-password');
    await page.waitForChanges();
  }

  it('should render', async() => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('attribute:masked', () => {

    it('should change input type to password when masked is true', async() => {
      await setup({ attributes: { masked: true } });

      const osdsInput = await page.find('osds-password >>> osds-input');
      const input = osdsInput.shadowRoot?.querySelector('input') as HTMLInputElement;
      const type = input.getAttribute('type');
      expect(type).toBe(ODS_INPUT_TYPE.password);
    });

    it('should change input type to text when masked is false', async() => {
      await setup({ attributes: { masked: false } });

      const osdsInput = await page.find('osds-password >>> osds-input');
      const input = osdsInput.shadowRoot?.querySelector('input') as HTMLInputElement;
      const type = input.getAttribute('type');
      expect(type).toBe(ODS_INPUT_TYPE.text);
    });

    it('should display eye open icon when masked is true', async() => {
      await setup({ attributes: { masked: true } });

      const eyeIcon = await page.find('osds-password >>> osds-input >>> osds-icon[name="eye-open"]');
      expect(eyeIcon).not.toBeNull();
    });

    it('should display eye close icon when masked is false', async() => {
      await setup({ attributes: { masked: false } });

      const eyeIcon = await page.find('osds-password >>> osds-input >>> osds-icon[name="eye-close"]');
      expect(eyeIcon).not.toBeNull();
    });
  });

  describe('Events', () => {
    it('should call clear', async() => {
      await setup({ attributes: { value: 'myPassword' } });
      const clearSpy = await page.spyOnEvent('odsClear');
      await el.callMethod('clear');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(null);
      expect(clearSpy).toHaveReceivedEventTimes(1);
    });

    it('should not call clear because of disabled', async() => {
      await setup({ attributes: { disabled: true, value: 'myPassword' } });
      const clearSpy = await page.spyOnEvent('odsClear');
      await el.callMethod('clear');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('myPassword');
      expect(clearSpy).toHaveReceivedEventTimes(0);
    });

    it('should call reset', async() => {
      await setup({ attributes: { defaultValue: 'myPassword' } });
      const resetSpy = await page.spyOnEvent('odsReset');
      await el.type('newPassword');
      await el.callMethod('reset');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('myPassword');
      expect(resetSpy).toHaveReceivedEventTimes(1);
    });

    it('should not call reset because of disabled', async() => {
      await setup({ attributes: { defaultValue: 'myPassword', disabled: true } });
      const resetSpy = await page.spyOnEvent('odsReset');
      await el.callMethod('reset');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('myPassword');
      expect(resetSpy).toHaveReceivedEventTimes(0);
    });

    it('should call setFocus', async() => {
      await setup({ attributes: { } });
      const focusSpy = await page.spyOnEvent('odsFocus');
      await el.callMethod('setFocus');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('');
      expect(focusSpy).toHaveReceivedEventTimes(1);
    });

    it('should call hide', async() => {
      await setup({ attributes: { masked: true } });
      const hideSpy = await page.spyOnEvent('odsHide');
      await el.callMethod('hide');
      await page.waitForChanges();

      expect(await el.getProperty('masked')).toBe(false);
      expect(hideSpy).toHaveReceivedEventTimes(1);
    });

    it('should not call hide because of disabled', async() => {
      await setup({ attributes: { disabled: true, masked: true } });
      const hideSpy = await page.spyOnEvent('odsHide');
      await el.callMethod('hide');
      await page.waitForChanges();

      expect(await el.getProperty('masked')).toBe(true);
      expect(hideSpy).toHaveReceivedEventTimes(0);
    });
  });
});
