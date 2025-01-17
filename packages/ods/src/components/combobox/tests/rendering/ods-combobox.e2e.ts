import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-combobox rendering', () => {
  let el: E2EElement;
  let innerOdsInput: HTMLInputElement;
  let page: E2EPage;

  async function isOpen(): Promise<boolean> {
    return await page.evaluate(() => {
      return !!document.querySelector('ods-combobox')?.shadowRoot?.querySelector<HTMLElement>('.ods-combobox__results--open');
    });
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-combobox');
    innerOdsInput = el.shadowRoot!.querySelector<HTMLInputElement>('ods-input')!;
  }

  it('should render the web component', async() => {
    await setup('<ods-combobox></ods-combobox>');

    expect(el.shadowRoot).not.toBeNull();
  });

  it('should render a placeholder', async() => {
    const dummyPlaceholder = 'dummy placeholder';
    await setup(`<ods-combobox placeholder="${dummyPlaceholder}"></ods-combobox>`);

    expect(innerOdsInput.getAttribute('placeholder')).toBe(dummyPlaceholder);
  });

  it('should render disabled', async() => {
    await setup('<ods-combobox is-disabled></ods-combobox>');

    expect(innerOdsInput.hasAttribute('is-disabled')).toBe(true);
  });

  it('should render readonly', async() => {
    await setup('<ods-combobox is-readonly></ods-combobox>');

    expect(innerOdsInput.hasAttribute('is-readonly')).toBe(true);
  });

  // TODO see textarea rendering
  // describe('error state', () => {
  //
  // })

  describe('watchers', () => {
    describe('isDisabled', () => {
      it('should disable the combobox component and close the dropdown', async() => {
        await setup('<ods-combobox><ods-combobox-item value="dummy">Dummy</ods-combobox-item></ods-combobox>');
        await el.callMethod('open');
        await page.waitForChanges();

        expect(innerOdsInput.hasAttribute('is-disabled')).toBe(false);
        expect(await isOpen()).toBe(true);

        el.setAttribute('is-disabled', true);
        await page.waitForChanges();

        expect(await page.evaluate(() => {
          return document.querySelector('ods-combobox')?.shadowRoot?.querySelector('ods-input')?.hasAttribute('is-disabled');
        })).toBe(true);
        expect(await isOpen()).toBe(false);
      });
    });

    describe('onSlotChange', () => {
      it('should change items but not the selected one', async() => {
        //TODO
        expect(true).toBe(true);
      });
    });
  });
});
