import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsInputAttributes,
  OdsInputType,
  OdsInputValueChangeEventDetail,
  odsInputDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsInputBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-input', () => {
  let page: E2EPage;
  let el: E2EElement;
  let inputElement: E2EElement;

  // let anotherInput: E2EElement;

  async function setup({
                         attributes = {},
                         onPage,
                       }: { attributes?: Partial<OdsInputAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsInputAttributes = OdsCreateAttributes(attributes, odsInputBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsInputAttributes>(minimalAttributes, odsInputDefaultAttributes);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-input ${OdsStringAttributes2Str(stringAttributes)}>
      </osds-input>
      <input id="anotherInput" style="visibility: hidden"/>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-input');

    inputElement = await page.find('osds-input >>> input');
    // anotherInput = await page.find('#anotherInput');
  }

  describe('defaults', () => {
    beforeEach(async () => {
      await setup();
    });

    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have a input element', async () => {
      expect(inputElement).not.toBeNull();
    });
  });

  describe('method:stepUp', () => {

    it('should stepUp by 1 by default', async () => {
      await setup({ attributes: { type: OdsInputType.number, value: 3 } });
      await el.callMethod('stepUp');
      await page.waitForChanges();
      const value = await inputElement.getProperty('value');
      expect(value).toBe('4');
    });
    it('should stepUp by number of step (5)', async () => {
      await setup({ attributes: { type: OdsInputType.number, value: 0, step: 5 } });
      await el.callMethod('stepUp');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('5');

      await el.callMethod('stepUp');
      await page.waitForChanges();
      value = await inputElement.getProperty('value');
      expect(value).toBe('10');
    });

    it('should stepUp by number of step (5) with min number at start', async () => {
      await setup({ attributes: { type: OdsInputType.number, value: 2, min: 2, step: 5 } });
      await el.callMethod('stepUp');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('7');

      await el.callMethod('stepUp');
      await page.waitForChanges();
      value = await inputElement.getProperty('value');
      expect(value).toBe('12');
    });

    it('should not stepUp by number of step (5) with when max number equal to value', async () => {
      await setup({ attributes: { type: OdsInputType.number, value: 5, max: 5, step: 5 } });
      await el.callMethod('stepUp');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('5');

      await el.callMethod('stepUp');
      await page.waitForChanges();
      value = await inputElement.getProperty('value');
      expect(value).toBe('5');
    });

    it('should have correct value on calling stepUp', async () => {
      await setup({ attributes: { type: OdsInputType.number, value: 0 } });
      await el.callMethod('stepUp');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('1');
      value = await el.getProperty('value');
      expect(value).toBe(1);
    });
  });

  describe('method:stepDown', () => {

    it('should stepDown by 1 by default', async () => {
      await setup({ attributes: { type: OdsInputType.number, value: 3 } });
      await el.callMethod('stepDown');
      await page.waitForChanges();
      const value = await inputElement.getProperty('value');
      expect(value).toBe('2');
    });

    it('should stepDown by number of step (5)', async () => {
      await setup({ attributes: { type: OdsInputType.number, value: 15, step: 5 } });
      await el.callMethod('stepDown');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('10');

      await el.callMethod('stepDown');
      await page.waitForChanges();
      value = await inputElement.getProperty('value');
      expect(value).toBe('5');
    });

    it('should stepDown by number of step (5) with max number at start', async () => {
      await setup({ attributes: { type: OdsInputType.number, value: 15, max: 15, step: 5 } });
      await el.callMethod('stepDown');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('10');

      await el.callMethod('stepDown');
      await page.waitForChanges();
      value = await inputElement.getProperty('value');
      expect(value).toBe('5');
    });

    it('should not stepDown by number of step (5) with when min number equal to value', async () => {
      await setup({ attributes: { type: OdsInputType.number, value: 5, min: 5, step: 5 } });
      await el.callMethod('stepDown');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('5');

      await el.callMethod('stepDown');
      await page.waitForChanges();
      value = await inputElement.getProperty('value');
      expect(value).toBe('5');
    });

    it('should have correct value on calling stepDown', async () => {
      await setup({ attributes: { type: OdsInputType.number, value: 2 } });
      await el.callMethod('stepDown');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('1');
      value = await el.getProperty('value');
      expect(value).toBe(1);
    });
  });

  describe('method:clear', () => {

    it('should clear the value', async () => {
      await setup({ attributes: { type: OdsInputType.number, value: 3 } });
      await el.callMethod('clear');
      await page.waitForChanges();
      const value = await inputElement.getProperty('value');
      const elValue = await el.getProperty('value');
      expect(value).toBe('');
      expect(elValue).toBe('');
    });
  });

  describe('method:reset', () => {

    it('should not reset the value because defaultValue is missing', async () => {
      await setup({ attributes: { type: OdsInputType.number, value: 3, defaultValue: undefined } });
      await el.callMethod('reset');
      await page.waitForChanges();
      const value = await inputElement.getProperty('value');
      const elValue = await el.getProperty('value');
      await page.waitForChanges();
      expect(value).toBe(`${odsInputDefaultAttributes.defaultValue}`);
      expect(elValue).toBe(`${odsInputDefaultAttributes.defaultValue}`);
    });

    it('should set the value to defaultValue', async () => {
      const defaultValue = 6;
      await setup({ attributes: { type: OdsInputType.number, value: 3, defaultValue } });
      await el.callMethod('reset');
      await page.waitForChanges();
      const value = await inputElement.getProperty('value');
      const elValue = await el.getProperty('value');
      expect(value).toBe(`${defaultValue}`);
      expect(elValue).toBe(`${defaultValue}`);
    });
  });

  describe('method:setInputTabindex', () => {

    it('should set inputTabindex to -1', async () => {
      await setup({ attributes: { type: OdsInputType.number } });
      await el.callMethod('setInputTabindex', '-1');
      await page.waitForChanges();
      const value = el.getAttribute('tabindex');
      expect(value).toBe('-1');
    });
  });

  describe('method:setFocus', () => {

    it('should set setFocus', async () => {
      await setup({ attributes: { type: OdsInputType.number } });
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
      // the value attribute of a vanilla input is only used for the initial value.
      // if you change the value of a vanilla input with some javascript, you must
      // trigger the oninput/onchange event to make the component sync

      let odsInputValueChangeEventDetailBase: OdsInputValueChangeEventDetail;

      beforeEach(() => {
        odsInputValueChangeEventDetailBase = {
          oldValue: '',
          validity: {
            invalid: false,
            stepMismatch: false,
            valid: true,
            valueMissing: false,
            customError: false,
            forbiddenValue: false,
          },
          value: '',
        };
      });

      it('should not emit odsValueChange on init', async () => {
        let odsValueChange;
        await setup({
          onPage: ({ page }) => {
            page.on('load', async() => {
              odsValueChange = await page.spyOnEvent('odsValueChange');
            })
          }
        });
        await page.waitForChanges();

        expect(odsValueChange).not.toHaveReceivedEvent();
      });

      it('should emit when user change the value', async () => {
        await setup({});
        const odsValueChange = await el.spyOnEvent('odsValueChange');

        await inputElement.click();

        // ## first tape of '4'
        await inputElement.press('4');
        await page.waitForChanges();

        let expected: OdsInputValueChangeEventDetail = {
          ...odsInputValueChangeEventDetailBase,
          oldValue: ``,
          value: `4`,
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsValueChange).toHaveReceivedEventTimes(1);
        expect(odsValueChange).toHaveNthReceivedEventDetail(0, expected);

        // ## first tape of '2'
        await inputElement.press('2');
        await page.waitForChanges();

        expected = {
          ...odsInputValueChangeEventDetailBase,
          oldValue: `4`,
          value: `42`,
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsValueChange).toHaveReceivedEventTimes(2);
        expect(odsValueChange).toHaveNthReceivedEventDetail(1, expected);
      });

      it('should emit when component value property change', async () => {
        const newValue = '42';
        await setup({});
        const odsValueChange = await el.spyOnEvent('odsValueChange');

        el.setProperty('value', `${newValue}`);
        await page.waitForChanges();

        const expected: OdsInputValueChangeEventDetail = {
          ...odsInputValueChangeEventDetailBase,
          oldValue: '',
          value: `${newValue}`,
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsValueChange).toHaveReceivedEventDetail(expected);
        expect(odsValueChange).toHaveReceivedEventTimes(1);
      });


      xit('should emit when the vanilla input is modified', async () => {
        const newValue = '42';
        await setup({});

        const odsValueChange = await el.spyOnEvent('odsValueChange');

        // todo: test it with the modification of the input. must find a way to access directly:
        //  does not work, no event fired
        /*
        await page.$eval('input',
          async (elm: any, { newValue }) => {
            logger.log('elm', elm);
            elm.value = newValue;
            elm.dispatchEvent(new Event('input'));
          },
          { newValue }
        );
        await page.waitForChanges();
        */

        // OR

        // todo: test by modifying the input directly: does not work, no event fired
        /*
        (inputElement as any).value = newValue;
        (inputElement as any).dispatchEvent(new Event('input'));
        await page.waitForChanges();
         */

        const expected: OdsInputValueChangeEventDetail = {
          ...odsInputValueChangeEventDetailBase,
          oldValue: '',
          value: `${newValue}`,
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsValueChange).toHaveReceivedEventDetail(expected);
        expect(odsValueChange).toHaveReceivedEventTimes(1);
      });


      it('should emit when the attribute changes', async () => {
        const newValue = '42';
        await setup({});
        const odsValueChange = await el.spyOnEvent('odsValueChange');

        el.setAttribute('value', `${newValue}`);
        await page.waitForChanges();

        const expected: OdsInputValueChangeEventDetail = {
          ...odsInputValueChangeEventDetailBase,
          oldValue: '',
          value: `${newValue}`,
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsValueChange).toHaveReceivedEventDetail(expected);
        expect(odsValueChange).toHaveReceivedEventTimes(1);
      });

    });
  });
});



