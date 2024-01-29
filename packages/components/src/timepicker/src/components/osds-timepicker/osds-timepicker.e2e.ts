import type { OdsTimepickerAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TIMEZONE } from './constants/timezones';

describe('e2e:osds-timepicker', () => {
  const baseAttribute = {
    ariaLabel: '',
    defaultValue: '',
    disabled: false,
    error: false,
    forbiddenValues: [],
    name: 'odsTimepicker',
    value: null,
  };

  let page: E2EPage;
  let el: E2EElement;
  let input: E2EElement;
  let select: E2EElement;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsTimepickerAttribute> } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTimepickerAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);
    page = await newE2EPage();
    await page.setContent(`<osds-timepicker ${odsStringAttributes2Str(stringAttributes)}></osds-timepicker>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    await page.waitForChanges();

    el = await page.find('osds-timepicker');
    await page.waitForChanges();

    input = await page.find('osds-timepicker >>> osds-input');
    await page.waitForChanges();
  }

  it('should render', async() => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    expect(input).not.toBeNull();
    expect(input).toHaveClass('hydrated');
  });

  it('should render a select if there is timezones', async() => {
    await setup({ attributes: { currentTimezone : ODS_TIMEZONE.UTC } });

    select = await page.find('osds-timepicker >>> osds-select');
    await page.waitForChanges();

    expect(select).not.toBeNull();
    expect(select).toHaveClass('hydrated');
  });

  it('should get default attributes', async() => {
    await setup({ attributes: {} });
    expect(await el.getProperty('clearable')).toBe(DEFAULT_ATTRIBUTE.clearable);
    expect(await el.getProperty('currentTimezone')).toBe(DEFAULT_ATTRIBUTE.currentTimezone);
    expect(await el.getProperty('disabled')).toBe(DEFAULT_ATTRIBUTE.disabled);
    expect(await el.getProperty('error')).toBe(DEFAULT_ATTRIBUTE.error);
    expect(await el.getProperty('inline')).toBe(DEFAULT_ATTRIBUTE.inline);
    expect(await el.getProperty('timezones')).toBe(DEFAULT_ATTRIBUTE.timezones);
    expect(await el.getProperty('value')).toBe(DEFAULT_ATTRIBUTE.value);
    expect(await el.getProperty('withSeconds')).toBe(DEFAULT_ATTRIBUTE.withSeconds);
  });

  describe('Events', () => {
    it('should receive event odsValueChange', async() => {
      await setup({ attributes: {} });

      const odsValueChange = await el.spyOnEvent('odsValueChange');

      input.setProperty('value', '11:11');
      await page.waitForChanges();
      expect(odsValueChange).toHaveReceivedEventTimes(1);
    });

    it('should call clear', async() => {
      await setup({ attributes: { value: '11:11' } });
      const clearSpy = await page.spyOnEvent('odsClear');
      await el.callMethod('clear');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe(null);
      expect(clearSpy).toHaveReceivedEventTimes(1);
    });

    it('should not call clear because of disabled', async() => {
      await setup({ attributes: { disabled: true, value: '11:11' } });
      const clearSpy = await page.spyOnEvent('odsClear');
      await el.callMethod('clear');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('11:11');
      expect(clearSpy).toHaveReceivedEventTimes(0);
    });

    it('should call reset', async() => {
      await setup({ attributes: { defaultValue: '11:11' } });
      const resetSpy = await page.spyOnEvent('odsReset');
      await el.type('22:22');
      await el.callMethod('reset');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('11:11');
      expect(resetSpy).toHaveReceivedEventTimes(1);
    });

    it('should not call reset because of disabled', async() => {
      await setup({ attributes: { defaultValue: '11:11', disabled: true } });
      const resetSpy = await page.spyOnEvent('odsReset');
      await el.callMethod('reset');
      await page.waitForChanges();

      expect(await el.getProperty('value')).toBe('11:11');
      expect(resetSpy).toHaveReceivedEventTimes(0);
    });
  });
});
