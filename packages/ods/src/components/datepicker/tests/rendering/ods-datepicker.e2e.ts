import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsDatepicker } from '../../src';

describe('ods-datepicker rendering', () => {
  let buttonClearable: E2EElement;
  let el: E2EElement;
  let inputElement: E2EElement;
  let page: E2EPage;

  async function isInErrorState(): Promise<boolean | undefined> {
    return await page.evaluate(() => {
      return document.querySelector('ods-datepicker')?.shadowRoot?.querySelector('input')?.classList.contains('ods-datepicker__input--error');
    });
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-datepicker');
    inputElement = await page.find('ods-datepicker >>> input');
    buttonClearable = await page.find('ods-datepicker >>> ods-button[icon="xmark"]');
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

      expect(await isInErrorState()).toBe(true);
    });

    it('should toggle the error state on value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-datepicker is-required></ods-datepicker></form>');

      await page.evaluate(() => {
        document.querySelector<OdsDatepicker & HTMLElement>('ods-datepicker')!.value = new Date('10 May 2024');
      });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(false);

      await el.callMethod('clear');
      await page.click('body', { offset: { x: 400, y: 400 } }); // Blur
      await page.waitForChanges();

      await page.waitForChanges();
      expect(await isInErrorState()).toBe(true);
    });

    it('should toggle the error state on manual value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-datepicker is-required></ods-datepicker></form>');

      await page.evaluate(() => {
        document.querySelector<OdsDatepicker & HTMLElement>('ods-datepicker')!.value = new Date('10 May 2024');
      });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(false);

      await el.press('Backspace');
      await page.click('body', { offset: { x: 400, y: 400 } }); // Blur
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);
    });

    it('should enforce the error state if has-error is set even on valid datepicker', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-datepicker is-required has-error value="dummy"></ods-datepicker></form>');
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);
    });
  });

  describe('in a fixed context (like ods-modal)', () => {
    async function setupModal(content: string): Promise<void> {
      page = await newE2EPage();

      await page.setContent(`
        <ods-modal is-open>
          ${content}
        </ods-modal>
      `);

      await page.evaluate(() => {
        const dialog = document.querySelector('ods-modal')?.shadowRoot?.querySelector('dialog');
        dialog?.style.setProperty('animation', 'none');
      });

      el = await page.find('ods-datepicker');

      await el.click();
      await page.waitForChanges();
    }

    it('should position regarding dialog element (thus not at the right place) in absolute strategy', async() => {
      await setupModal('<ods-datepicker></ods-datepicker>');

      const hasScroll = await page.evaluate(() => {
        const dialogContent = document.querySelector('ods-modal')?.shadowRoot?.querySelector('.ods-modal__dialog__content');
        return dialogContent && dialogContent.scrollHeight > dialogContent.clientHeight;
      });

      expect(hasScroll).toBe(true);
    });

    it('should position regarding viewport (thus at the right place) in fixed strategy', async() => {
      await setupModal('<ods-datepicker strategy="fixed"></ods-datepicker>');

      const hasScroll = await page.evaluate(() => {
        const dialogContent = document.querySelector('ods-modal')?.shadowRoot?.querySelector('.ods-modal__dialog__content');
        return dialogContent && dialogContent.scrollHeight > dialogContent.clientHeight;
      });

      expect(hasScroll).toBe(false);
    });
  });

  describe('isClearable', () => {
    it('should render a clearable button', async() => {
      await setup('<ods-datepicker is-clearable value="clearable"></ods-datepicker>');

      expect(buttonClearable).not.toBeNull();
    });

    it('should render a disabled clearable button when input is disabled', async() => {
      await setup('<ods-datepicker is-disabled is-clearable value="clearable"></ods-datepicker>');

      expect(buttonClearable.getAttribute('is-disabled')).toBe('');
    });

    it('should render a disabled clearable button when input is readonly', async() => {
      await setup('<ods-datepicker is-readonly is-clearable value="clearable"></ods-datepicker>');

      expect(buttonClearable.getAttribute('is-disabled')).toBe('');
    });

    it('should render a clearable button when input value wrong type', async() => {
      await setup('<ods-datepicker is-clearable type="number" value="clearable"></ods-datepicker>');

      expect(buttonClearable).not.toBeNull();
    });
  });
});
