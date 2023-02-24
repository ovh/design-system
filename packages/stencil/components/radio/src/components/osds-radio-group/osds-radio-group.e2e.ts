import { E2EElement, E2EPage, EventSpy, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsRadioGroupAttributes,
  odsRadioGroupDefaultAttributes,
  OdsRadioGroupEvents,
  OdsRadioGroupValueChangeEventDetail
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsRadioGroupBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-radio-group', () => {
  let page: E2EPage;
  let el: E2EElement;
  const spyEvent = async (eventName: keyof OdsRadioGroupEvents) => await el.spyOnEvent(eventName);

  async function setup({ attributes = {}, html = ``, htmlOutside = '' }: { attributes?: Partial<OdsRadioGroupAttributes>, html?: string, htmlOutside?: string }) {
    const minimalAttributes: OdsRadioGroupAttributes = OdsCreateAttributes(attributes, odsRadioGroupBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsRadioGroupAttributes>(minimalAttributes, odsRadioGroupDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
    <osds-radio-group ${OdsStringAttributes2Str(stringAttributes)}>
    ${html}
    </osds-radio-group>
    ${htmlOutside}
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-radio-group');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
  });

  describe('events', () => {
    describe('odsValueChange', () => {
      xit('should emit when user check a radio', async () => {
        const expected: OdsRadioGroupValueChangeEventDetail = {
          newValue: '42',
          previousValue: ''
        };
        await setup({
          attributes: { value: expected.previousValue },
          html: `<osds-radio value="${expected.newValue}"></osds-radio>`
        });
        const odsValueChange: EventSpy = await spyEvent('odsValueChange');
        await page.evaluate(() => {
          const radio = document.querySelector('osds-radio');
          (radio as HTMLElement).click();
        })
        await page.waitForChanges();

        expect(odsValueChange).toHaveReceivedEventDetail(expected);
      });
    });

    describe('odsDisabledChange', () => {
      it('should emit when disabled property change', async () => {
        await setup({ attributes: { disabled: false } });
        const odsDisabledChange: EventSpy = await spyEvent('odsDisabledChange');
        el.setProperty('disabled', true);
        await page.waitForChanges();

        expect(odsDisabledChange).toHaveReceivedEventDetail({ value: true });
      });
    });
  });
});

