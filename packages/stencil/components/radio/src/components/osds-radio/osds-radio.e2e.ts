import { E2EElement, E2EPage, EventSpy, newE2EPage } from '@stencil/core/testing';
import {
  OdsRadio,
  OdsComponentAttributes2StringAttributes,
  OdsLogger,
  OdsRadioAttributes,
  OdsRadioCheckedChangeEventDetail,
  OdsRadioCheckingChangeEventDetail,
  odsRadioDefaultAttributes,
  OdsRadioEvents
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsRadioBaseAttributes, odsGetSimulatedPromise } from '@ovhcloud/ods-testing';
import { osdsSetPropertyFunction } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('e2e:osds-radio', () => {
  let page: E2EPage;
  let el: E2EElement;
  const logger = new OdsLogger('e2e:osds-radio');

  async function setup({ attributes = {}, html = ``, htmlOutside = '' }: { attributes?: Partial<OdsRadioAttributes>, html?: string, htmlOutside?: string }) {
    const minimalAttributes: OdsRadioAttributes = OdsCreateAttributes(attributes, odsRadioBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsRadioAttributes>(minimalAttributes, odsRadioDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
    <osds-radio ${OdsStringAttributes2Str(stringAttributes)} tabIndex="0">
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
    const cbk: OdsRadio['save'] = ({ checked, value }) => {
      return odsGetSimulatedPromise(withError, () => {
        logger.log(`simulated promise result. withError=${withError}, checked=${checked}, value=${value}`);
      });
    };
    return cbk;
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
  });

  describe('events', () => {
    describe('odsCheckedChange', () => {
      it('should emit when user has checked the radio', async () => {
        const expected: OdsRadioCheckedChangeEventDetail = {
          checked: true,
          value: '42'
        };
        await setup({ attributes: { checked: false, value: '42' } });
        const odsCheckedChange = await el.spyOnEvent('odsCheckedChange');
        await toggleByClick();

        expect(odsCheckedChange).toHaveReceivedEventDetail(expected);
      });
    });

    describe('odsCheckingChange', () => {
      it('should emit when checked state is being updated', async () => {
        const expected: OdsRadioCheckingChangeEventDetail = {
          checking: true,
          value: '42'
        };
        await setup({ attributes: { checking: false, value: '42' } });
        const odsCheckingChange = await el.spyOnEvent('odsCheckingChange');
        await osdsSetPropertyFunction<OdsRadioAttributes>(page, 'osds-radio', 'save', getSaveCbk(false));
        await toggleByClick();

        expect(odsCheckingChange).toHaveReceivedEventTimes(2);
        expect(odsCheckingChange).toHaveNthReceivedEventDetail(0, { ...expected, checking: true });
        expect(odsCheckingChange).toHaveNthReceivedEventDetail(1, { ...expected, checking: false });
      });
    });

    describe('odsFocus', () => {
      it('should emit on focus', async () => {
        await setup({ attributes: { disabled: false }, html: 'test focus' });
        const odsFocus = await el.spyOnEvent('odsFocus');
        await el.focus();
        await page.keyboard.press('Tab');
        await page.waitForChanges();
        expect(odsFocus).toHaveReceivedEventTimes(1);
      });
    });

    describe('odsBlur', () => {
      it('should emit on blur', async () => {
        await setup({
          attributes: { disabled: false },
          htmlOutside: `<input type="text" id="another" value="another thing to focus"/>`
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

