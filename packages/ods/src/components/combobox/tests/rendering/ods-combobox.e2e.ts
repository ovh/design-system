import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-combobox rendering', () => {
  let el: E2EElement;
  let innerOdsInput: HTMLInputElement;
  let input: E2EElement;
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
    input = await page.find('ods-combobox >>> ods-input');
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

  describe('error state', () => {
    async function hasErrorClass(): Promise<boolean> {
      return await page.evaluate(() => {
        return !!document.querySelector('ods-combobox')?.shadowRoot?.querySelector('.ods-combobox__search--error');
      });
    }

    it('should render in error on form submit, before any changes, if invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-combobox is-required></ods-combobox></form>');

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      expect(await hasErrorClass()).toBe(true);
    });

    it('should toggle the error state on value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-combobox is-required><ods-combobox-item value="value">Value</ods-combobox-item></ods-combobox></form>');
      await (await page.find('ods-combobox >>> ods-input')).click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      await (await page.find('ods-combobox-item')).click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await hasErrorClass()).toBe(false);
    });

    it('should enforce the error state if has-error is set even on valid combobox', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-combobox is-required has-error value="dummy"></ods-combobox></form>');
      await page.waitForChanges();

      expect(await hasErrorClass()).toBe(true);

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      expect(await hasErrorClass()).toBe(true);
    });
  });

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

    describe('highlightResults', () => {
      async function getHighlightedContent(): Promise<string | null | undefined> {
        return page.evaluate(() => {
          return document.querySelector('ods-combobox-item > .ods-combobox-item--highlighted')?.textContent;
        });
      }

      it('should add/remove marker around the matching part of the item', async() => {
        await setup('<ods-combobox highlight-results><ods-combobox-item value="dummy">Dummy</ods-combobox-item></ods-combobox>');
        await (await page.find('ods-combobox >>> ods-input')).click();
        await page.waitForChanges();

        expect(await isOpen()).toBe(true);
        expect(await getHighlightedContent()).toBe(undefined);

        await input.type('D', { delay: 200 });
        await page.waitForChanges();

        expect(await getHighlightedContent()).toBe('D');

        el.removeAttribute('highlight-results');
        await page.waitForChanges();

        expect(await getHighlightedContent()).toBe(undefined);
      });
    });

    describe('onSlotChange', () => {
      it('should change items but not the selected one', async() => {
        // TODO
        expect(true).toBe(true);
      });
    });
  });
});
