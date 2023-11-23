import type { OdsInputAttribute } from './interfaces/attributes';
import type { OdsInputValueChangeEventDetail } from './interfaces/events';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { ODS_INPUT_TYPE } from './constants/input-type';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-input', () => {
  const baseAttribute = { ariaLabel: null, defaultValue: '', forbiddenValues: [], type: ODS_INPUT_TYPE.text, value: '' };
  let page: E2EPage;
  let el: E2EElement;
  let inputElement: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsInputAttribute>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsInputAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-input inline ${odsStringAttributes2Str(stringAttributes)}>
      </osds-input>
      <input id="anotherInput" style="visibility: hidden"/>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-input');

    inputElement = await page.find('osds-input >>> input');
  }

  describe('defaults', () => {
    beforeEach(async() => {
      await setup();
    });

    it('should render', async() => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have a input element', async() => {
      expect(inputElement).not.toBeNull();
    });
  });

  describe('attribute:clearable', () => {

    it('should display cross icon/button', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.text, value: 'Just ODS being ahead', clearable: true } });

      // Verify eye icon/button is visible
      const crossIcon = await page.find('osds-input >>> osds-icon[name="close"]');
      expect(crossIcon).not.toBeNull();
    });

    it('should clear the input value when clicked', async() => {
      // Setup component with clearable attribute and some initial value
      await setup({ attributes: { type: ODS_INPUT_TYPE.text, value: 'Just ODS being ahead', clearable: true } });

      // Click cross icon/button
      const crossIcon = await page.find('osds-input >>> osds-icon[name="close"]');
      expect(crossIcon).not.toBeNull();
      await crossIcon.click();
      await page.waitForChanges();

      // Verify input value is cleared
      const value = await inputElement.getProperty('value');
      expect(value).toBe('');
    });

    it('should not clear the input value when clicked if the input is disabled', async() => {
      // Setup component with clearable attribute and some initial value
      await setup({ attributes: { type: ODS_INPUT_TYPE.text, value: 'Just ODS being ahead', clearable: true, disabled: true } });

      // Click cross icon/button
      const crossIcon = await page.find('osds-input >>> osds-icon[name="close"]');
      expect(crossIcon).not.toBeNull();
      await crossIcon.click();
      await page.waitForChanges();

      // Verify input value is cleared
      const value = await inputElement.getProperty('value');
      expect(value).toBe('Just ODS being ahead');
    });
  });

  describe('attribute:masked', () => {

    it('should change input type to password when masked is set', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.password, value: 'Just ODS being ahead' } });

      const type = await inputElement.getProperty('type');
      expect(type).toBe(ODS_INPUT_TYPE.password);
    });

    it('should change input type to text when masked is set to false', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.password, value: 'Just ODS being ahead', masked: false } });

      const type = await inputElement.getProperty('type');
      expect(type).toBe(ODS_INPUT_TYPE.text);
    });

    it('should display masked icon/button (eye open)', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.password, value: 'Just ODS being ahead' } });

      const eyeIcon = await page.find('osds-input >>> osds-icon[name="eye-open"]');
      expect(eyeIcon).not.toBeNull();
    });

    it('should hide the input value when clicked', async() => {
      // Setup component with password type and some initial value
      await setup({ attributes: { type: ODS_INPUT_TYPE.password, value: 'Just ODS being ahead', masked: false } });

      // Click eye icon/button
      const eyeIcon = await page.find('osds-input >>> osds-icon[name="eye-closed"]');
      expect(eyeIcon).not.toBeNull();
      await eyeIcon.click();
      await page.waitForChanges();

      const type = await inputElement.getProperty('type');
      expect(type).toBe(ODS_INPUT_TYPE.password);
    });

    it('should not hide the input value when clicked if the input is disabled', async() => {
      // Setup component with password type and some initial value
      await setup({ attributes: { type: ODS_INPUT_TYPE.password, value: 'Just ODS being ahead', disabled: true, masked: false } });

      // Click eye icon/button
      const eyeIcon = await page.find('osds-input >>> osds-icon[name="eye-closed"]');
      expect(eyeIcon).not.toBeNull();
      await eyeIcon.click();
      await page.waitForChanges();

      const type = await inputElement.getProperty('type');
      expect(type).toBe(ODS_INPUT_TYPE.text);
    });
  });

  describe('method:stepUp', () => {

    it('should stepUp by 1 by default', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 3 } });
      await el.callMethod('stepUp');
      await page.waitForChanges();
      const value = await inputElement.getProperty('value');
      expect(value).toBe('4');
    });
    it('should stepUp by number of step (5)', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 0, step: 5 } });
      await el.callMethod('stepUp');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('5');

      await el.callMethod('stepUp');
      await page.waitForChanges();
      value = await inputElement.getProperty('value');
      expect(value).toBe('10');
    });

    it('should stepUp by number of step (5) with min number at start', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 2, min: 2, step: 5 } });
      await el.callMethod('stepUp');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('7');

      await el.callMethod('stepUp');
      await page.waitForChanges();
      value = await inputElement.getProperty('value');
      expect(value).toBe('12');
    });

    it('should not stepUp by number of step (5) with when max number equal to value', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 5, max: 5, step: 5 } });
      await el.callMethod('stepUp');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('5');

      await el.callMethod('stepUp');
      await page.waitForChanges();
      value = await inputElement.getProperty('value');
      expect(value).toBe('5');
    });

    it('should have correct value on calling stepUp', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 0 } });
      await el.callMethod('stepUp');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('1');
      value = await el.getProperty('value');
      expect(value).toBe(1);
    });
  });

  describe('method:stepDown', () => {

    it('should stepDown by 1 by default', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 3 } });
      await el.callMethod('stepDown');
      await page.waitForChanges();
      const value = await inputElement.getProperty('value');
      expect(value).toBe('2');
    });

    it('should stepDown by number of step (5)', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 15, step: 5 } });
      await el.callMethod('stepDown');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('10');

      await el.callMethod('stepDown');
      await page.waitForChanges();
      value = await inputElement.getProperty('value');
      expect(value).toBe('5');
    });

    it('should stepDown by number of step (5) with max number at start', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 15, max: 15, step: 5 } });
      await el.callMethod('stepDown');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('10');

      await el.callMethod('stepDown');
      await page.waitForChanges();
      value = await inputElement.getProperty('value');
      expect(value).toBe('5');
    });

    it('should not stepDown by number of step (5) with when min number equal to value', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 5, min: 5, step: 5 } });
      await el.callMethod('stepDown');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('5');

      await el.callMethod('stepDown');
      await page.waitForChanges();
      value = await inputElement.getProperty('value');
      expect(value).toBe('5');
    });

    it('should have correct value on calling stepDown', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 2 } });
      await el.callMethod('stepDown');
      await page.waitForChanges();
      let value = await inputElement.getProperty('value');
      expect(value).toBe('1');
      value = await el.getProperty('value');
      expect(value).toBe(1);
    });
  });

  describe('method:clear', () => {

    it('should clear the value', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 3 } });
      await el.callMethod('clear');
      await page.waitForChanges();
      const value = await inputElement.getProperty('value');
      const elValue = await el.getProperty('value');
      expect(value).toBe('');
      expect(elValue).toBe('');
    });
  });

  describe('method:hide', () => {

    it('should switch input type between password and text', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.password, value: 'why-is-ods-so-awesome17' } });

      // Check initial type of the input
      let type = await inputElement.getProperty('type');
      expect(type).toBe('password');

      // Call hide method and check the type
      await el.callMethod('hide');
      await page.waitForChanges();

      type = await inputElement.getProperty('type');
      expect(type).toBe('text');

      await el.callMethod('hide');
      await page.waitForChanges();

      type = await inputElement.getProperty('type');
      expect(type).toBe('password');
    });
  });

  describe('method:reset', () => {

    it('should not reset the value because defaultValue is missing', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 3, defaultValue: undefined } });
      await el.callMethod('reset');
      await page.waitForChanges();
      const value = await inputElement.getProperty('value');
      const elValue = await el.getProperty('value');
      await page.waitForChanges();
      expect(value).toBe(`${DEFAULT_ATTRIBUTE.defaultValue}`);
      expect(elValue).toBe(`${DEFAULT_ATTRIBUTE.defaultValue}`);
    });

    it('should set the value to defaultValue', async() => {
      const defaultValue = 6;
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, value: 3, defaultValue } });
      await el.callMethod('reset');
      await page.waitForChanges();
      const value = await inputElement.getProperty('value');
      const elValue = await el.getProperty('value');
      expect(value).toBe(`${defaultValue}`);
      expect(elValue).toBe(`${defaultValue}`);
    });
  });

  describe('method:setTabindex', () => {

    it('should set tabindex to -1', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number } });
      await el.callMethod('setTabindex', '-1');
      await page.waitForChanges();
      const value = el.getAttribute('tabindex');
      expect(value).toBe('-1');
    });
  });

  describe('method:setFocus', () => {
    it('should be focusable', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number } });
      await page.waitForChanges();

      await el.callMethod('setFocus');
      await page.waitForChanges();

      const isFocused = await page.evaluate(() => {
        const element = document.querySelector('osds-input');
        return document.activeElement === element;
      });
      expect(isFocused).toBe(true);
    });

    it('should be focusable with tab', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number } });
      await page.waitForChanges();

      // First, we set the focus to another element
      await page.focus('#anotherInput');

      // Then we simulate pressing 'Tab' to move focus to the next focusable element
      await page.keyboard.press('Tab');

      // We can now check if the input is focused
      const isFocused = await page.evaluate(() => {
        const element = document.querySelector('osds-input');
        return document.activeElement === element;
      });

      expect(isFocused).toBe(true);
    });

    it('should not be focusable when disabled', async() => {
      await setup({ attributes: { type: ODS_INPUT_TYPE.number, disabled: true } });
      await page.waitForChanges();

      await el.callMethod('setFocus');
      await page.waitForChanges();

      const isFocused = await page.evaluate(() => {
        const element = document.querySelector('osds-input');
        return document.activeElement === element;
      });
      expect(isFocused).toBe(false);
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

      it('should emit when user change the value', async() => {
        await setup({});
        const odsValueChangeSpy = await el.spyOnEvent('odsValueChange');

        await inputElement.click();

        // ## first tape of '4'
        // await inputElement.press('4');
        await page.keyboard.press('4');
        await page.waitForChanges();

        let expected: OdsInputValueChangeEventDetail = {
          ...odsInputValueChangeEventDetailBase,
          oldValue: '',
          value: '4',
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsValueChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsValueChangeSpy).toHaveNthReceivedEventDetail(0, expected);

        // ## then tape '2'
        await inputElement.press('2');
        await page.waitForChanges();

        expected = {
          ...odsInputValueChangeEventDetailBase,
          oldValue: '4',
          value: '42',
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsValueChangeSpy).toHaveReceivedEventTimes(2);
        expect(odsValueChangeSpy).toHaveNthReceivedEventDetail(1, expected);
      });

      it('should emit when component value property change', async() => {
        const newValue = '42';
        await setup({});
        const odsValueChange = await el.spyOnEvent('odsValueChange');

        el.setProperty('value', newValue);
        await page.waitForChanges();

        const expected: OdsInputValueChangeEventDetail = {
          ...odsInputValueChangeEventDetailBase,
          oldValue: '',
          value: newValue,
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsValueChange).toHaveReceivedEventDetail(expected);
        expect(odsValueChange).toHaveReceivedEventTimes(1);
      });


      xit('should emit when the vanilla input is modified', async() => {
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
          value: newValue,
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsValueChange).toHaveReceivedEventDetail(expected);
        expect(odsValueChange).toHaveReceivedEventTimes(1);
      });


      it('should emit when the attribute changes', async() => {
        const newValue = '42';
        await setup({});
        const odsValueChange = await el.spyOnEvent('odsValueChange');

        el.setAttribute('value', newValue);
        await page.waitForChanges();

        const expected: OdsInputValueChangeEventDetail = {
          ...odsInputValueChangeEventDetailBase,
          oldValue: '',
          value: newValue,
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsValueChange).toHaveReceivedEventDetail(expected);
        expect(odsValueChange).toHaveReceivedEventTimes(1);
      });
    });
  });
});
