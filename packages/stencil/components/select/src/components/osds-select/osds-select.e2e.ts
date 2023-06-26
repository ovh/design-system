import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

import {
  OdsComponentAttributes2StringAttributes,
  OdsSelectAttributes,
  odsSelectDefaultAttributes,
  OdsSelectValueChangeEventDetail,
} from '@ovhcloud/ods-core';
import { OdsStringAttributes2Str } from '@ovhcloud/ods-testing';
import {
  OdsSelectCreateAttributes,
} from '@ovhcloud/ods-testing';

describe('e2e:osds-select', () => {
  let page: E2EPage;
  let el: E2EElement;
  let divElement: E2EElement;
  let optionElement: E2EElement;
  let optionDivElement: E2EElement;

  // let anotherSelect: E2EElement;

  async function setup({
                         attributes = {},
                         onPage,
                       }: { attributes?: Partial<OdsSelectAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsSelectAttributes = OdsSelectCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSelectAttributes>(minimalAttributes, odsSelectDefaultAttributes);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-select ${OdsStringAttributes2Str(stringAttributes)}>
        <osds-select-option value="42">value</osds-select-option>
        <osds-select-option value="43">value2</osds-select-option>
      </osds-select>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-select');
    divElement = await page.find('osds-select >>> div');
    optionElement = await page.find('osds-select > osds-select-option');
    optionDivElement = await page.find('osds-select > osds-select-option >>> div');
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

    // TODO getValidity
    // TODO getSelection

  describe('method:setInputTabindex', () => {
    it('should set inputTabindex to -1', async () => {
      await setup({ attributes: { } });
      await el.callMethod('setInputTabindex', '-1');
      await page.waitForChanges();
      const value = el.getAttribute('tabindex');
      expect(value).toBe('-1');
    });
  });

  describe('method:clear', () => {
    it('should clear the value', async () => {
      await setup({ attributes: { value: 3 } });
      await el.callMethod('clear');
      await page.waitForChanges();
      const value = await el.getProperty('value');
      expect(value).toBe('');
    });
  });

  describe('method:reset', () => {
    it('should not reset the value because defaultValue is missing', async () => {
      await setup({ attributes: { value: 3, defaultValue: undefined } });
      await el.callMethod('reset');
      await page.waitForChanges();
      const value = await el.getProperty('value');
      await page.waitForChanges();
      expect(value).toBe(`${odsSelectDefaultAttributes.defaultValue}`);
    });

    it('should set the value to defaultValue', async () => {
      const defaultValue = 6;
      await setup({ attributes: { value: 3, defaultValue } });
      await el.callMethod('reset');
      await page.waitForChanges();
      const value = await el.getProperty('value');
      expect(value).toBe(`${defaultValue}`);
    });
  });

// it should change the selection and value by clicking on a select-option
// it should change the selection if the value property changed
// it should remove the selection if the value property changed for an nonexistent option's value

  describe('events', () => {
    describe('odsValueChange', () => {
      // Note:
      // the value attribute of a vanilla input is only used for the initial value.
      // if you change the value of a vanilla input with some javascript, you must
      // trigger the oninput/onchange event to make the component sync

      let odsSelectValueChangeEventDetailBase: OdsSelectValueChangeEventDetail;

      beforeEach(() => {
        odsSelectValueChangeEventDetailBase = {
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
          selection: null,
        };
      });

      /*it('should emit value change at start', async () => {
        const value = '42';
        await setup({ attributes: { defaultValue: '32', value }});
        const odsValueChange = await el.spyOnEvent('odsValueChange');

        await page.waitForChanges();
                await page.waitForChanges();

        const expected: OdsSelectValueChangeEventDetail = {
          ...odsSelectValueChangeEventDetailBase,
          oldValue: "", // todo: have to be '' but for now the component triggers 2 events each time, so the old is equal
          value: `${value}`,
        };

        expect(odsValueChange).toHaveReceivedEventDetail(expected);
        expect(odsValueChange).toHaveReceivedEventTimes(1);
      });*/
/*
      it('should emit when user changes the value', async () => {
        const oldValue = '4';
        const newValue = '42';
        await setup({ attributes: { value: oldValue }});
        const odsValueChange = await el.spyOnEvent('odsValueChange');

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
        const expected: OdsSelectValueChangeEventDetail = {
          ...odsSelectValueChangeEventDetailBase,
          oldValue: `${oldValue}`, // todo: have to be '' but for now the component triggers 2 events each time, so the old is equal
          value: `${newValue}`,
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsValueChange).toHaveReceivedEventDetail(expected);
        expect(odsValueChange).toHaveReceivedEventTimes(1);
      });
*/
      it('should emit when component value property change', async () => {
        const newValue = '42';
        await setup({});
        const odsValueChange = await el.spyOnEvent('odsValueChange');

        el.setProperty('value', `${newValue}`);
        await page.waitForChanges();

        const expected: OdsSelectValueChangeEventDetail = {
          ...odsSelectValueChangeEventDetailBase,
          oldValue: '',
          value: `${newValue}`,
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsValueChange).toHaveReceivedEventDetail(expected);
        expect(odsValueChange).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('checkForClickOutside', () => {
    let selectElement: E2EElement

    async function isSelectOpen(): Promise<boolean> {
      return page.evaluate(() => {
        return !!document.querySelector('osds-content-addon osds-select.opened');
      });
    }

    async function setupForClickOutside() {
      const minimalAttributes: OdsSelectAttributes = OdsSelectCreateAttributes({});
      const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSelectAttributes>(minimalAttributes, odsSelectDefaultAttributes);

      page = await newE2EPage();

      await page.setContent(`
        <div>
          <osds-content-addon>
            <span slot="main">
              <osds-select ${OdsStringAttributes2Str(stringAttributes)}>
                <osds-select-option value="42">value</osds-select-option>
              </osds-select>
            </span>

            <span slot="bottom">
              <p>Inside parent element</p>
            </span>
          </osds-content-addon>
          <button>Outside element</button>
        </div>
      `);
      await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

      selectElement = await page.find('osds-content-addon osds-select')
    }

    it('should close the tooltip on outside click', async () => {
      await setupForClickOutside();
      const outsideElement = await page.find('button');

      await selectElement.click();
      expect(await isSelectOpen()).toBe(true);

      await outsideElement.click();
      expect(await isSelectOpen()).toBe(false);
    });

    it('should close the tooltip on outside click on same parent DOM', async () => {
      await setupForClickOutside();
      const outsideElement = await page.find('osds-content-addon p');

      await selectElement.click();
      expect(await isSelectOpen()).toBe(true);

      await outsideElement.click();
      expect(await isSelectOpen()).toBe(false);
    });
  });

  describe('method:handlerKeyPress', () => {
    it('should open select when Enter', async () => {
      await setup({ });
      await page.waitForChanges();
      await el.focus();
      await page.keyboard.press('Enter');
      expect(await el.getProperty('opened')).toBe(true);
    });

    it('should close select when Escape', async () => {
      await setup({ });
      await page.waitForChanges();
      await el.focus();
      await page.keyboard.press('Enter');
      await page.keyboard.press('Escape');
      expect(await el.getProperty('opened')).toBe(false);
    });

    it('should close select after focus was on option', async () => {
      await setup({ });
      await page.waitForChanges();
      await el.focus();
      await page.keyboard.press('Enter');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowUp');
      await page.keyboard.press('Enter');
      expect(await el.getProperty('opened')).toBe(false);
    });

    it('should close select after focus was on option and has an selected option', async () => {
      await setup({ });
      await page.waitForChanges();
      await el.focus();
      await page.keyboard.press('Enter');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
      await page.keyboard.press('Enter');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowUp');
      await page.keyboard.press('Enter');
      expect(await el.getProperty('opened')).toBe(false);
    });

    it('should open select when Enter & focus on first option', async () => {
      await setup({ });
      await page.waitForChanges();
      await el.focus();
      await page.keyboard.press('Enter');
      await page.keyboard.press('ArrowDown');
      expect(await optionElement.getProperty('selected')).toBe(true);
    });

    it('should open select when Enter & select option', async () => {
      await setup({ });
      await page.waitForChanges();
      await el.focus();
      await page.keyboard.press('Enter');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
      expect(await el.getProperty('value')).toBe("42");
    });

    it('should open select when Enter & select option already selected', async () => {
      await setup({ });
      await page.waitForChanges();
      await el.focus();
      await page.keyboard.press('Enter');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
      expect(await el.getProperty('opened')).toBe(false);
      expect(await el.getProperty('value')).toBe("42");
      await page.keyboard.press('Enter');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowUp');
      await page.keyboard.press('Enter');
      expect(await el.getProperty('opened')).toBe(false);
      expect(await el.getProperty('value')).toBe("42");
    });

    it('should open select when Enter & focus on first option with arrow up', async () => {
      await setup({ });
      await page.waitForChanges();
      await el.focus();
      await page.keyboard.press('Enter');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowUp');
      await page.keyboard.press('Enter');
      expect(await el.getProperty('value')).toBe("42");
    });
  });
});
