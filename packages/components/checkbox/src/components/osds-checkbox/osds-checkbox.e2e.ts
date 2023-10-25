import { OdsLogger } from '@ovhcloud/ods-common-core';
import { osdsSetPropertyFunction } from '@ovhcloud/ods-common-stencil';
import { odsComponentAttributes2StringAttributes, odsGetSimulatedPromise, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import type { E2EElement, E2EPage, EventSpy } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import type { OdsCheckboxAttribute } from './interfaces/attributes';
import type {
  OdsCheckboxCheckedChangeEventDetail,
  OdsCheckboxEvent,
  OdsCheckboxFocusChangeEventDetail,
  OdsCheckboxUpdatingChangeEventDetail,
} from './interfaces/events';
import type { OsdsCheckbox } from './osds-checkbox';


describe('e2e:osds-checkbox', () => {
  let page: E2EPage;
  let el: E2EElement;
  let inputElement: E2EElement;
  let checkboxableElement: E2EElement;
  let checkedProperty: boolean;
  let hasFocusProperty: boolean;
  let hasFocusPropertyOnChild: boolean;
  let inputCheckedProperty: boolean;
  let activeElementId: string | undefined;
  const logger = new OdsLogger('e2e:osds-checkbox');
  const spyEvent = async(eventName: keyof OdsCheckboxEvent) => await el.spyOnEvent(eventName);
  const baseAttribute = { ariaLabel: '', checked: false, disabled: false, hasFocus: false, updating: false, value: '' };

  async function setup({
    attributes = {},
    nativeAttributes = {},
    html = '',
    htmlOutside = '',
    onPage,
  }: { attributes?: Partial<OdsCheckboxAttribute>, html?: string, htmlOutside?: string, nativeAttributes?: Partial<HTMLElement>, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCheckboxAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);
    const nativeStringAttributes = odsComponentAttributes2StringAttributes<Partial<HTMLElement>>(nativeAttributes, {});

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-checkbox ${odsStringAttributes2Str(stringAttributes)} ${odsStringAttributes2Str(nativeStringAttributes)}>
      ${html}
      </osds-checkbox>
      ${htmlOutside}
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-checkbox');
    checkboxableElement = await page.find('osds-checkbox:first-child');
    inputElement = await page.find('osds-checkbox >>> input[type="checkbox"]');
  }

  /**
   * trigger a toggle with a click and wait for changes
   */
  async function toggleByClick() {
    // toggle it
    await page.evaluate(() => {
      (document.querySelector('osds-checkbox'))?.shadowRoot?.querySelector('label')?.click();
    });
    await page.waitForChanges();
  }

  /**
   * updates references to elements and properties
   */
  async function updateReferences() {
    checkedProperty = await el.getProperty('checked');
    inputCheckedProperty = await inputElement.getProperty('checked');
    hasFocusProperty = await el.getProperty('hasFocus');
    hasFocusPropertyOnChild = await checkboxableElement.getProperty('hasFocus');
    activeElementId = await page.evaluate(() => document.activeElement?.id);
  }

  /**
   * create a save callback with simulated time response
   * @param withError - with error or not
   */
  function getSaveCbk(withError: boolean) {
    const cbk: OsdsCheckbox['save'] = ({ checked, value }) => {
      return odsGetSimulatedPromise(withError, () => {
        logger.log(`simulated promise result. withError=${withError}, checked=${checked}, value=${value}`);
      });
    };
    return cbk;
  }

  fit('should render', async() => {
    await setup();
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('methods', () => {
    describe('setButtonTabindex', () => {
      it('should set setButtonTabindex to -1', async() => {
        await setup({ attributes: {} });
        await el.callMethod('setTabindex', '-1');
        await page.waitForChanges();
        const value = el.getAttribute('tabindex');
        expect(value).toBe('-1');
      });
    });

    describe('setFocus', () => {
      it('should set focus', async() => {
        await setup({ attributes: { hasFocus: false } });
        await page.waitForChanges();
        await updateReferences();
        expect(hasFocusProperty).toEqual(false);
        expect(hasFocusPropertyOnChild).toEqual(false);

        await el.callMethod('setFocus');
        await page.waitForChanges();
        await updateReferences();
        expect(hasFocusProperty).toEqual(true);
        expect(hasFocusPropertyOnChild).toEqual(true);
      });
    });
  });


  describe('focusing', () => {
    it('should be focusable', async() => {
      const options = { attributes: { hasFocus: false, disabled: false }, nativeAttributes: { id: 'my-id' } };
      await setup(options);
      await page.waitForChanges();
      await updateReferences();
      expect(hasFocusProperty).toEqual(false);
      expect(hasFocusPropertyOnChild).toEqual(false);
      expect(activeElementId).toEqual('');

      await el.focus();
      await page.waitForChanges();
      await updateReferences();
      expect(hasFocusProperty).toEqual(true);
      expect(hasFocusPropertyOnChild).toEqual(true);
      expect(activeElementId).toEqual(options.nativeAttributes.id);
    });

    it('should NOT be focusable if disabled', async() => {
      const options = { attributes: { hasFocus: false, disabled: true }, nativeAttributes: { id: 'my-id' } };
      await setup(options);
      await page.waitForChanges();

      await el.focus();
      await page.waitForChanges();
      await updateReferences();
      expect(hasFocusProperty).toEqual(false);
      expect(hasFocusPropertyOnChild).toEqual(false);
    });

    xit('should be focusable with tab', async() => {
      const options = { attributes: { hasFocus: false, disabled: false }, nativeAttributes: { id: 'my-id' } };
      await setup(options);
      await page.waitForChanges();

      // todo cannot focus with tab key
      await el.press('Tab');
      await page.waitForChanges();
      await updateReferences();

      expect(hasFocusProperty).toEqual(true);
      expect(hasFocusPropertyOnChild).toEqual(true);
      expect(activeElementId).toEqual(options.nativeAttributes.id);
    });
  });

  describe('checking', () => {
    it('should check or uncheck and its child on click', async() => {
      await setup({ attributes: { checked: false } });
      await page.waitForChanges();

      // should be checked after click
      await toggleByClick();
      await updateReferences();
      expect(checkedProperty).toEqual(true);
      expect(inputCheckedProperty).toEqual(true);

      // should NOT be checked after a second click
      await toggleByClick();
      await updateReferences();
      expect(checkedProperty).toEqual(false);
      expect(inputCheckedProperty).toEqual(false);
    });

    it('should check or uncheck and its child on keyboard event', async() => {
      await setup({ attributes: { checked: false } });
      await page.waitForChanges();

      // should be checked after key event
      await el.press('Enter');
      await page.waitForChanges();
      await updateReferences();
      expect(checkedProperty).toEqual(true);
      expect(inputCheckedProperty).toEqual(true);

      // should NOT be checked after key event
      await el.press('Space');
      await page.waitForChanges();
      await updateReferences();
      expect(checkedProperty).toEqual(false);
      expect(inputCheckedProperty).toEqual(false);
    });
  });


  describe('events', () => {
    describe('odsCheckedChange', () => {
      it('should emit when user has checked the checkbox', async() => {
        const expected: OdsCheckboxCheckedChangeEventDetail = {
          checked: true,
          value: '42',
        };

        await setup({ attributes: { checked: false, value: '42' } });
        const odsCheckedChange: EventSpy = await spyEvent('odsCheckedChange');
        await page.waitForChanges();

        await toggleByClick();
        expect(odsCheckedChange).toHaveReceivedEventDetail(expected);
      });
    });

    describe('odsUpdatingChange', () => {
      it('should emit when checked state is being updated', async() => {
        const eventDetailBase: OdsCheckboxUpdatingChangeEventDetail = {
          updating: false,
          value: 'oles',
        };

        await setup({ attributes: { value: eventDetailBase.value } });
        const odsUpdatingChange = await spyEvent('odsUpdatingChange');
        await page.waitForChanges();

        await osdsSetPropertyFunction<OdsCheckboxAttribute>(page, 'osds-checkbox', 'save', getSaveCbk(false));
        await page.waitForChanges();

        await toggleByClick();
        expect(odsUpdatingChange).toHaveReceivedEventTimes(2);
        expect(odsUpdatingChange).toHaveNthReceivedEventDetail(0, { ...eventDetailBase, updating: true });
        expect(odsUpdatingChange).toHaveNthReceivedEventDetail(1, { ...eventDetailBase, updating: false });
      });
    });

    describe('odsFocus', () => {

      it('should emit on focus', async() => {
        const expected: OdsCheckboxFocusChangeEventDetail = {
          focus: true,
          value: '42',
        };

        await setup({ attributes: { disabled: false, value: expected.value } });
        const odsFocus: EventSpy = await spyEvent('odsFocus');
        await page.waitForChanges();

        await el.focus();
        await page.waitForChanges();
        await updateReferences();
        expect(odsFocus).toHaveReceivedEventDetail(expected);
      });

    });

    describe('odsBlur', () => {

      it('should emit on blur', async() => {
        const expected: OdsCheckboxFocusChangeEventDetail = {
          focus: false,
          value: '42',
        };

        await setup({
          attributes: { disabled: false, value: expected.value },
          htmlOutside: '<input type="text" id="another" value="another thing to focus"/>',
        });
        const odsFocus: EventSpy = await spyEvent('odsBlur');
        await page.waitForChanges();

        await el.focus();
        await page.waitForChanges();

        // focus another thing in order to trigger blur on previous
        const another = await page.find('#another');
        await another?.focus();
        await page.waitForChanges();

        await updateReferences();
        expect(odsFocus).toHaveReceivedEventDetail(expected);
      });

    });

  });

});

