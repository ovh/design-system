import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsDatepicker } from '../../src';

describe('ods-datepicker rendering', () => {
  let el: E2EElement;
  let inputElement: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-datepicker');
    inputElement = await page.find('ods-datepicker >>> input');
  }

  it('should render the web component', async() => {
    await setup('<ods-datepicker></ods-datepicker>');

    expect(el.shadowRoot).not.toBeNull();
    expect(inputElement).not.toBeNull();
  });

  it('should render a placeholder', async() => {
    const dummyPlaceholder = 'dummy placeholder';
    await setup(`<ods-datepicker placeholder="${dummyPlaceholder}"></ods-datepicker>`);

    expect(await inputElement.getProperty('placeholder')).toBe(dummyPlaceholder);
  });

  it('should render disabled', async() => {
    await setup('<ods-datepicker is-disabled></ods-datepicker>');

    expect(await inputElement.getProperty('disabled')).toBe(true);
  });

  it('should render with given format', async() => {
    await setup('<ods-datepicker format="yyyy-mm-dd"></ods-datepicker>');

    await page.evaluate(() => {
      document.querySelector<OdsDatepicker & HTMLElement>('ods-datepicker')!.value = new Date('10 May 2024');
    });
    await page.waitForChanges();

    expect(await inputElement.getProperty('value')).toBe('2024-05-10');
  });

  it('should disable dates before min and after max', async() => {
    await setup('<ods-datepicker></ods-datepicker>');
    await page.evaluate(() => {
      const datepicker = document.querySelector<OdsDatepicker & HTMLElement>('ods-datepicker');
      datepicker!.min = new Date('1 May 2024');
      datepicker!.max = new Date('31 May 2024');
    });
    await page.waitForChanges();
    await el.click();

    const allDisabled = await page.evaluate(() => {
      const prevButtons = document.querySelector('ods-datepicker')?.shadowRoot?.querySelectorAll('.datepicker-cell.prev');
      const nextButtons = document.querySelector('ods-datepicker')?.shadowRoot?.querySelectorAll('.datepicker-cell.next');

      return prevButtons && nextButtons &&
        Array.from(prevButtons).every((btn) => btn.classList.contains('disabled')) &&
        Array.from(nextButtons).every((btn) => btn.classList.contains('disabled'));
    });
    expect(allDisabled).toBe(true);
  });

  describe('error state', () => {
    it('should render in error on form submit, before any changes, if invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-datepicker is-required></ods-datepicker></form>');

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-datepicker')?.shadowRoot?.querySelector('input')?.classList.contains('ods-datepicker__input--error');
      });
      expect(hasErrorClass).toBe(true);
    });

    it('should toggle the error state on value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-datepicker is-required></ods-datepicker></form>');

      await page.evaluate(() => {
        document.querySelector<OdsDatepicker & HTMLElement>('ods-datepicker')!.value = new Date('10 May 2024');
      });
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-datepicker')?.shadowRoot?.querySelector('input')?.classList.contains('ods-datepicker__input--error');
      });
      expect(hasErrorClass).toBe(false);

      await el.callMethod('clear');
      await page.click('body', { offset: { x: 400, y: 400 } }); // Blur
      await page.waitForChanges();

      const hasErrorClass2 = await page.evaluate(() => {
        return document.querySelector('ods-datepicker')?.shadowRoot?.querySelector('input')?.classList.contains('ods-datepicker__input--error');
      });
      await page.waitForChanges();
      expect(hasErrorClass2).toBe(true);
    });

    it('should enforce the error state if has-error is set even on valid datepicker', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-datepicker is-required has-error value="dummy"></ods-datepicker></form>');
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-datepicker')?.shadowRoot?.querySelector('input')?.classList.contains('ods-datepicker__input--error');
      });
      expect(hasErrorClass).toBe(true);

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      const hasErrorClass2 = await page.evaluate(() => {
        return document.querySelector('ods-datepicker')?.shadowRoot?.querySelector('input')?.classList.contains('ods-datepicker__input--error');
      });
      expect(hasErrorClass2).toBe(true);
    });
  });
});
