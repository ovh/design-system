import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsTextAreaAttributes,
  OdsTextAreaValueChangeEventDetail,
  odsTextAreaDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStringAttributes2Str, OdsCreateAttributes, odsTextAreaBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-textarea', () => {
  let page: E2EPage;
  let el: E2EElement;
  let textareaElement: E2EElement;

  async function setup({
                         attributes = {},
                         onPage,
                       }: { attributes?: Partial<OdsTextAreaAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsTextAreaAttributes = OdsCreateAttributes(attributes, odsTextAreaBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTextAreaAttributes>(minimalAttributes, odsTextAreaDefaultAttributes);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-textarea ${OdsStringAttributes2Str(stringAttributes)}>
      </osds-textarea>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-textarea');

    textareaElement = await page.find('osds-textarea >>> textarea');
  }

  describe('defaults', () => {
    beforeEach(async () => {
      await setup();
    });

    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have a textarea element', async () => {
      expect(textareaElement).not.toBeNull();
    });
  });

  describe('method:setFocus', () => {

    it('should set setFocus', async () => {
      await setup();
      await page.waitForChanges();
      let value = el.getAttribute('hasFocus');
      expect(value).toBeNull();

      await el.callMethod('setFocus');
      await page.waitForChanges();
      value = el.getAttribute('hasFocus');
      expect(value).toEqual('');
    });
  });

  describe('events', () => {

    describe('odsValueChange', () => {
      // Note:
      // the value attribute of a vanilla textarea is only used for the initial value.
      // if you change the value of a vanilla textarea with some javascript, you must
      // trigger the onTextArea/onchange event to make the component sync

      let odsTextAreaValueChangeEventDetailBase: OdsTextAreaValueChangeEventDetail;

      beforeEach(() => {
        odsTextAreaValueChangeEventDetailBase = {
          oldValue: '',
          validity: {
            valid: true,
            valueMissing: false,
            customError: false,
            invalid: false
          },
          value: '',
        };
      });

      it('should emit when component value property change', async () => {
        const newValue = 'Lorem ipsum';
        await setup();
        const odsValueChange = await el.spyOnEvent('odsValueChange');

        el.setProperty('value', `${newValue}`);
        await page.waitForChanges();

        const expected: OdsTextAreaValueChangeEventDetail = {
          ...odsTextAreaValueChangeEventDetailBase,
          oldValue: '',
          value: `${newValue}`,
        };

        expect(odsValueChange).toHaveReceivedEventDetail(expected);
        expect(odsValueChange).toHaveReceivedEventTimes(1);
      });

    });
  });
});



