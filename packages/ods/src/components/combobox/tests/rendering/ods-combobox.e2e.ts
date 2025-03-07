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
        const dummyValue1 = 'dummy value 1';
        const dummyValue2 = 'dummy value 2';
        await setup(`<ods-combobox allow-multiple><ods-combobox-item value="${dummyValue1}">Dummy 1</ods-combobox-item></ods-combobox>`);
        await (await page.find('ods-combobox >>> ods-input')).click();
        await page.waitForChanges();

        expect(await isOpen()).toBe(true);
        expect((await page.find('ods-combobox-item')).textContent).toBe('Dummy 1');

        await (await page.find('ods-combobox-item')).click();
        await page.waitForChanges();

        expect(await isOpen()).toBe(false);
        expect(await el.getProperty('value')).toBe(dummyValue1);

        await page.evaluate((value) => {
          document.querySelector('ods-combobox')!.innerHTML = `<ods-combobox-item value="${value}">Dummy 2</ods-combobox-item>`;
        }, dummyValue2);
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyValue1);

        await (await page.find('ods-combobox >>> ods-input')).click();
        await page.waitForChanges();

        expect(await isOpen()).toBe(true);
        expect((await page.find('ods-combobox-item')).textContent).toBe('Dummy 2');

        await (await page.find('ods-combobox-item')).click();
        await page.waitForChanges();

        expect(await isOpen()).toBe(false);
        expect(await el.getProperty('value')).toBe(`${dummyValue1},${dummyValue2}`);
      });
    });
  });

  describe('dropdown positioning', () => {
    it('should position the dropdown correctly on first render', async() => {
      await setup(`<div>
        <div style="height: 100vh;">
        </div>
        <ods-combobox>
          <ods-combobox-item value="item1">Item 1</ods-combobox-item>
          <ods-combobox-item value="item2">Item 2</ods-combobox-item>
          <ods-combobox-item value="item3">Item 3</ods-combobox-item>
          <ods-combobox-item value="item4">Item 4</ods-combobox-item>
          <ods-combobox-item value="item5">Item 5</ods-combobox-item>
        </ods-combobox>
        </div>
    `);

      const inputEl = await page.find('ods-combobox >>> ods-input');
      await inputEl.click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      const isPositionedTop = await page.evaluate(() => {
        const results = document.querySelector('ods-combobox')?.shadowRoot?.querySelector('.ods-combobox__results');
        const searchEl = document.querySelector('ods-combobox')?.shadowRoot?.querySelector('.ods-combobox__search');
        return results?.classList.contains('ods-combobox__results--top') &&
             searchEl?.classList.contains('ods-combobox__search--top');
      });

      expect(isPositionedTop).toBe(true);
    });

    it('should maintain correct positioning when reopening the dropdown', async() => {
      await setup(`<div>
        <div style="height: 100vh;">
        </div>
        <ods-combobox>
          <ods-combobox-item value="item1">Item 1</ods-combobox-item>
          <ods-combobox-item value="item2">Item 2</ods-combobox-item>
          <ods-combobox-item value="item3">Item 3</ods-combobox-item>
          <ods-combobox-item value="item4">Item 4</ods-combobox-item>
          <ods-combobox-item value="item5">Item 5</ods-combobox-item>
        </ods-combobox>
        </div>
    `);

      const inputEl = await page.find('ods-combobox >>> ods-input');
      await inputEl.click();
      await page.waitForChanges();

      let isPositionedTop = await page.evaluate(() => {
        const results = document.querySelector('ods-combobox')?.shadowRoot?.querySelector('.ods-combobox__results');
        return results?.classList.contains('ods-combobox__results--top');
      });
      expect(isPositionedTop).toBe(true);

      await page.keyboard.press('Escape');
      await page.waitForChanges();

      await inputEl.click();
      await page.waitForChanges();

      isPositionedTop = await page.evaluate(() => {
        const results = document.querySelector('ods-combobox')?.shadowRoot?.querySelector('.ods-combobox__results');
        return results?.classList.contains('ods-combobox__results--top');
      });
      expect(isPositionedTop).toBe(true);
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

      el = await page.find('ods-combobox');

      await el.click();
      await page.waitForChanges();
    }

    it('should position regarding dialog element (thus not at the right place) in absolute strategy', async() => {
      await setupModal('<ods-combobox><ods-combobox-item value="dummy1">Dummy 1</ods-combobox-item><ods-combobox-item value="dummy2">Dummy 2</ods-combobox-item></ods-combobox>');

      const hasScroll = await page.evaluate(() => {
        const dialogContent = document.querySelector('ods-modal')?.shadowRoot?.querySelector('.ods-modal__dialog__content');
        return dialogContent && dialogContent.scrollHeight > dialogContent.clientHeight;
      });

      expect(hasScroll).toBe(true);
    });

    it('should position regarding viewport (thus at the right place) in fixed strategy', async() => {
      await setupModal('<ods-combobox strategy="fixed"><ods-combobox-item value="dummy1">Dummy 1</ods-combobox-item><ods-combobox-item value="dummy2">Dummy 2</ods-combobox-item></ods-combobox>');

      const hasScroll = await page.evaluate(() => {
        const dialogContent = document.querySelector('ods-modal')?.shadowRoot?.querySelector('.ods-modal__dialog__content');
        return dialogContent && dialogContent.scrollHeight > dialogContent.clientHeight;
      });

      expect(hasScroll).toBe(false);
    });
  });
});
