import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsDatepicker } from '../../src';

describe('ods-datepicker behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isDatepickerOpen(): Promise<boolean> {
    return page.evaluate(() => {
      return document.querySelector('ods-datepicker')?.shadowRoot?.querySelector('.datepicker')?.classList.contains('active') || false;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-datepicker');

    await page.waitForChanges();
  }

  beforeEach(jest.clearAllMocks);

  describe('methods', () => {
    describe('clear', () => {
      it('should emit an odsClear event', async() => {
        await setup('<ods-datepicker value="value"></ods-datepicker>');
        const odsClearSpy = await page.spyOnEvent('odsClear');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });

      it('should emit an odsClear event even if disabled', async() => {
        await setup('<ods-datepicker is-disabled value="value"></ods-datepicker>');
        const odsClearSpy = await page.spyOnEvent('odsClear');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('close', () => {
      it('should close the datepicker', async() => {
        await setup('<ods-datepicker></ods-datepicker>');
        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isDatepickerOpen()).toBe(true);

        await el.callMethod('close');
        await page.waitForChanges();

        expect(await isDatepickerOpen()).toBe(false);
      });
    });

    describe('open', () => {
      it('should open the datepicker', async() => {
        await setup('<ods-datepicker></ods-datepicker>');

        expect(await isDatepickerOpen()).toBe(false);

        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isDatepickerOpen()).toBe(true);
      });
    });

    describe('reset', () => {
      it('should emit an odsReset event', async() => {
        await setup('<ods-datepicker></ods-datepicker>');
        await page.evaluate(() => {
          document.querySelector<OdsDatepicker & HTMLElement>('ods-datepicker')!.defaultValue = new Date(0);
          document.querySelector<OdsDatepicker & HTMLElement>('ods-datepicker')!.value = new Date();
        });
        await page.waitForChanges();
        const odsResetSpy = await page.spyOnEvent('odsReset');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await page.evaluate(() => document.querySelector('ods-datepicker')?.shadowRoot?.querySelector('input')?.value)).toBe('01/01/1970');
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });

      it('should emit an odsReset event even if disabled', async() => {
        await setup('<ods-datepicker is-disabled></ods-datepicker>');
        await page.evaluate(() => {
          document.querySelector<OdsDatepicker & HTMLElement>('ods-datepicker')!.defaultValue = new Date(0);
          document.querySelector<OdsDatepicker & HTMLElement>('ods-datepicker')!.value = new Date();
        });
        await page.waitForChanges();
        const odsResetSpy = await page.spyOnEvent('odsReset');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await page.evaluate(() => document.querySelector('ods-datepicker')?.shadowRoot?.querySelector('input')?.value)).toBe('01/01/1970');
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });
    });
  });
});
