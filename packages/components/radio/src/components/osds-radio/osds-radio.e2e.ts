import type { OdsRadioAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsRadioCheckedChangeEventDetail, OdsRadioCheckingChangeEventDetail } from './interfaces/events';
import type { OsdsRadio } from './osds-radio';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { newE2EPage } from '@stencil/core/testing';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { odsGetSimulatedPromise } from '@ovhcloud/ods-common-testing';
import { osdsSetPropertyFunction } from '@ovhcloud/ods-common-stencil';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';

describe('e2e:osds-radio', () => {
  let page: E2EPage;
  let el: E2EElement;
  const logger = new OdsLogger('e2e:osds-radio');
  const baseAttributes = { ariaLabel: '', checked: false, checking: false, disabled: false, value: '' };

  async function setup({ attributes = {}, html = '', htmlOutside = '' }: { attributes?: Partial<OdsRadioAttribute>, html?: string, htmlOutside?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsRadioAttribute>({ ...baseAttributes, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
    <osds-radio ${odsStringAttributes2Str(stringAttributes)} tabIndex="0">
      ${html}
    </osds-radio>
    ${htmlOutside}
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-radio');
  }
  /**
   * trigger a toggle with a click and wait for changes
   */
  async function toggleByClick() {
    // toggle it
    await page.evaluate(() => {
      (document.querySelector('osds-radio') as HTMLElement)?.click();
    });
    await page.waitForChanges();
  }

  /**
   * create a save callback with simulated time response
   * @param withError - with error or not
   */
  function getSaveCbk(withError: boolean) {
    const cbk: OsdsRadio['save'] = ({ checked, value }) => {
      return odsGetSimulatedPromise(withError, () => {
        logger.log(`simulated promise result. withError=${withError}, checked=${checked}, value=${value}`);
      });
    };
    return cbk;
  }

  it('should render', async() => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
  });

  describe('events', () => {
    describe('odsCheckedChange', () => {
      it('should emit when user has checked the radio', async() => {
        const expected: OdsRadioCheckedChangeEventDetail = {
          checked: true,
          value: '42',
        };
        await setup({ attributes: { checked: false, value: '42' } });
        const odsCheckedChange = await el.spyOnEvent('odsCheckedChange');
        await toggleByClick();

        expect(odsCheckedChange).toHaveReceivedEventDetail(expected);
      });
    });

    describe('odsCheckingChange', () => {
      it('should emit when checked state is being updated', async() => {
        const expected: OdsRadioCheckingChangeEventDetail = {
          checking: true,
          value: '42',
        };
        await setup({ attributes: { checking: false, value: '42' } });
        const odsCheckingChange = await el.spyOnEvent('odsCheckingChange');
        await osdsSetPropertyFunction<OdsRadioAttribute>(page, 'osds-radio', 'save', getSaveCbk(false));
        await toggleByClick();

        expect(odsCheckingChange).toHaveReceivedEventTimes(2);
        expect(odsCheckingChange).toHaveNthReceivedEventDetail(0, { ...expected, checking: true });
        expect(odsCheckingChange).toHaveNthReceivedEventDetail(1, { ...expected, checking: false });
      });
    });

    describe('odsFocus', () => {
      it('should emit on focus', async() => {
        await setup({ attributes: { disabled: false }, html: 'test focus' });
        const odsFocus = await el.spyOnEvent('odsFocus');
        await el.focus();
        await page.keyboard.press('Tab');
        await page.waitForChanges();
        expect(odsFocus).toHaveReceivedEventTimes(1);
      });
    });

    describe('odsBlur', () => {
      it('should emit on blur', async() => {
        await setup({
          attributes: { disabled: false },
          htmlOutside: '<input type="text" id="another" value="another thing to focus"/>',
        });
        const odsBlur = await el.spyOnEvent('odsBlur');
        await el.focus();
        await page.keyboard.press('Tab');
        await page.waitForChanges();
        const another = await page.find('#another');
        await another?.focus();
        await page.waitForChanges();

        expect(odsBlur).toHaveReceivedEvent();
      });
    });
  });
});

