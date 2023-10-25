import type { OdsRadioGroupAttribute } from './interfaces/attributes';
import type { OdsRadioGroupEvent, OdsRadioGroupValueChangeEventDetail } from './interfaces/events';
import type { E2EElement, E2EPage, EventSpy } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';



describe('e2e:osds-radio-group', () => {
  let page: E2EPage;
  let el: E2EElement;
  const spyEvent = async(eventName: keyof OdsRadioGroupEvent) => await el.spyOnEvent(eventName);
  const baseAttributes = { disabled: false, value: '' };

  async function setup({ attributes = {}, html = '', htmlOutside = '' }: { attributes?: Partial<OdsRadioGroupAttribute>, html?: string, htmlOutside?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsRadioGroupAttribute>({ ...baseAttributes, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
    <osds-radio-group ${odsStringAttributes2Str(stringAttributes)}>
    ${html}
    </osds-radio-group>
    ${htmlOutside}
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-radio-group');
  }

  it('should render', async() => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
  });

  describe('events', () => {
    describe('odsValueChange', () => {
      xit('should emit when user check a radio', async() => {
        const expected: OdsRadioGroupValueChangeEventDetail = {
          newValue: '42',
          previousValue: '',
        };
        await setup({
          attributes: { value: expected.previousValue },
          html: `<osds-radio value="${expected.newValue}"></osds-radio>`,
        });
        const odsValueChange: EventSpy = await spyEvent('odsValueChange');
        await page.evaluate(() => {
          const radio = document.querySelector('osds-radio');
          (radio as HTMLElement).click();
        });
        await page.waitForChanges();

        expect(odsValueChange).toHaveReceivedEventDetail(expected);
      });
    });

    describe('odsDisabledChange', () => {
      it('should emit when disabled property change', async() => {
        await setup({ attributes: { disabled: false } });
        const odsDisabledChange: EventSpy = await spyEvent('odsDisabledChange');
        el.setProperty('disabled', true);
        await page.waitForChanges();

        expect(odsDisabledChange).toHaveReceivedEventDetail({ value: true });
      });
    });
  });
});

