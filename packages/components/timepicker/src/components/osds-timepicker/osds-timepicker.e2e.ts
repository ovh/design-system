import type { OdsTimepickerAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TIMEZONE } from './constants/timezones';

describe('e2e:osds-timepicker', () => {
  let page: E2EPage;
  let el: E2EElement;
  let input: E2EElement;
  let select: E2EElement;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsTimepickerAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTimepickerAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-timepicker ${odsStringAttributes2Str(stringAttributes)}></osds-timepicker>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    await page.waitForChanges();

    el = await page.find('osds-timepicker');
    await page.waitForChanges();

    input = await page.find('osds-timepicker >>> osds-input');
    await page.waitForChanges();
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    expect(input).not.toBeNull();
    expect(input).toHaveClass('hydrated');
  });

  it('should render a select if there is timezones', async () => {
    await setup({ attributes: { currentTimezone : ODS_TIMEZONE.UTC } });

    select = await page.find('osds-timepicker >>> osds-select');
    await page.waitForChanges();

    expect(select).not.toBeNull();
    expect(select).toHaveClass('hydrated');
  });

  it('should get default attributes', async () => {
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

  describe('Event', () => {
    it('should receive event odsValueChange', async () => {
      await setup({ attributes: {} });

      const odsValueChange = await el.spyOnEvent('odsValueChange');

      await input.setProperty('value', '11:11');
      await page.waitForChanges();
      expect(odsValueChange).toHaveReceivedEventTimes(1);
    });
  });
});
