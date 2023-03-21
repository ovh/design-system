import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

import { OdsComponentAttributes2StringAttributes, OdsPaginationAttributes, odsPaginationDefaultAttributes, OdsPaginationCurrentChangeEventDetail } from '@ovhcloud/ods-core';
import { OdsStringAttributes2Str } from '@ovhcloud/ods-testing';
import { OdsPaginationCreateAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-pagination', () => {
  let page: E2EPage;
  let el: E2EElement;
  let divElement: E2EElement;
  let optionElement: E2EElement;
  let optionDivElement: E2EElement;

  // let anotherPagination: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsPaginationAttributes>; html?: string; onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsPaginationAttributes = OdsPaginationCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPaginationAttributes>(minimalAttributes, odsPaginationDefaultAttributes);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-pagination ${OdsStringAttributes2Str(stringAttributes)}>
      </osds-pagination>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-pagination');
    divElement = await page.find('osds-pagination >>> div');
  }

  describe('defaults', () => {
    beforeEach(async () => {
      await setup();
    });

    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');

      expect(optionElement).not.toBeNull();
      expect(optionElement).toHaveClass('hydrated');
    });

    it('should have a div element', async () => {
      expect(divElement).not.toBeNull();
      expect(optionDivElement).not.toBeNull();
    });
  });

  describe('method:setPageIndex', () => {
    it('should set inputTabindex to -1', async () => {
      await setup({ attributes: {} });
      await el.callMethod('setPageIndex', '-1');
      await page.waitForChanges();
      const value = el.getAttribute('tabindex');
      expect(value).toBe('-1');
    });
  });

  // it should change the selection and value by clicking on a select-option
  // it should change the selection if the value property changed
  //it should remove the selection if the value property changed for an nonexistent option's value

  describe('events', () => {
    describe('odsCurrentChange', () => {
      // Note:
      // the value attribute of a vanilla input is only used for the initial value.
      // if you change the value of a vanilla input with some javascript, you must
      // trigger the oninput/onchange event to make the component sync

      let odsPaginationCurrentChangeEventDetailBase: OdsPaginationCurrentChangeEventDetail;

      beforeEach(() => {
        odsPaginationCurrentChangeEventDetailBase = {
          oldCurrent: 1,
          current: 1,
        };
      });

      /*it('should emit value change at start', async () => {
        const value = '42';
        await setup({ attributes: { DefaultCurrent: '32', value }});
        const odsCurrentChange = await el.spyOnEvent('odsCurrentChange');

        await page.waitForChanges();
                await page.waitForChanges();

        const expected: OdsPaginationCurrentChangeEventDetail = {
          ...odsPaginationValueChangeEventDetailBase,
          oldValue: "", // todo: have to be '' but for now the component triggers 2 events each time, so the old is equal
          value: `${value}`,
        };

        expect(odsCurrentChange).toHaveReceivedEventDetail(expected);
        expect(odsCurrentChange).toHaveReceivedEventTimes(1);
      });*/
      /*
      it('should emit when user changes the value', async () => {
        const oldValue = '4';
        const newValue = '42';
        await setup({ attributes: { value: oldValue }});
        const odsCurrentChange = await el.spyOnEvent('odsCurrentChange');

        //wrapper.find('Button').props().onClick()

try {
console.log('before clicks');
        await divElement.click();
        await page.waitForChanges();
        await optionDivElement.click();
        await page.waitForChanges();
        console.log('after clicks');
} catch(e) {
  console.log('error', e);
}
        const expected: OdsPaginationCurrentChangeEventDetail = {
          ...odsPaginationValueChangeEventDetailBase,
          oldValue: `${oldValue}`, // todo: have to be '' but for now the component triggers 2 events each time, so the old is equal
          value: `${newValue}`,
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsCurrentChange).toHaveReceivedEventDetail(expected);
        expect(odsCurrentChange).toHaveReceivedEventTimes(1);
      });
*/
      it('should emit when component value property change', async () => {
        const newValue = 2;
        await setup({});
        const odsCurrentChange = await el.spyOnEvent('odsCurrentChange');

        el.setProperty('value', newValue);
        await page.waitForChanges();

        const expected: OdsPaginationCurrentChangeEventDetail = {
          ...odsPaginationCurrentChangeEventDetailBase,
          oldCurrent: 1,
          current: newValue,
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsCurrentChange).toHaveReceivedEventDetail(expected);
        expect(odsCurrentChange).toHaveReceivedEventTimes(1);
      });
    });
  });
});
