import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsTextAreaAttribute } from './interfaces/attributes';
import type { OdsTextAreaValueChangeEvent } from './interfaces/events';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-textarea', () => {
  const baseAttribute = { ariaLabel: null, hasFocus: false, spellcheck: false, value: '' }
  let page: E2EPage;
  let el: E2EElement;
  let textareaElement: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsTextAreaAttribute>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTextAreaAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-textarea ${odsStringAttributes2Str(stringAttributes)}>
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

      let odsTextAreaValueChangeEventDetailBase: OdsTextAreaValueChangeEvent;

      beforeEach(() => {
        odsTextAreaValueChangeEventDetailBase = {
          oldValue: '',
          validity: {
            valid: true,
            valueMissing: false,
            customError: false,
            invalid: false,
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

        const expected: OdsTextAreaValueChangeEvent = {
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



