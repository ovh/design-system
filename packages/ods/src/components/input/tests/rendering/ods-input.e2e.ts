import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-input rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let buttonClearable: E2EElement;
  let buttonSearch: E2EElement;
  let buttonToggleMask: E2EElement;
  let loadingSpinner: E2EElement;
  let part: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-input');
    buttonClearable = await page.find('ods-input >>> ods-button[icon="xmark"]');
    buttonSearch = await page.find('ods-input >>> ods-button[icon="magnifying-glass"]');
    buttonToggleMask = await page.find('ods-input >>> ods-button[icon="eye-off"]');
    loadingSpinner = await page.find('ods-input >>> ods-spinner');
    part = await page.find('ods-input >>> [part="input"]');
    await page.waitForChanges();
  }

  beforeEach(jest.clearAllMocks);

  it('should render the web component', async() => {
    await setup('<ods-input></ods-input>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-input></ods-input>', 'ods-input::part(input) { width: 100px }');

      const partStyle = await part.getComputedStyle();
      expect(partStyle.getPropertyValue('width')).toBe('100px');
    });
  });

  describe('form', () => {
    it('should get form data with button type submit', async() => {
      await setup(`<form method="get">
        <ods-input name="odsInput" value="On Vous Heberge ?"></ods-input>
        <input type="text" name="natifInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('odsInput')).toBe('On Vous Heberge ?');
      expect(url.searchParams.get('natifInput')).toBe('');
    });

    it('should reset form with button type reset', async() => {
      await setup(`<form method="get">
        <ods-input name="odsInput" value="On Vous Heberge ?"></ods-input>
        <input type="text" name="natifInput">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);

      const resetButton = await page.find('button[type="reset"]');
      await resetButton.click();

      const submitButton = await page.find('button[type="submit"]');
      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('natifInput')).toBe('');
      expect(url.searchParams.get('odsInput')).toBe('');
    });
  });

  describe('slots', () => {
    describe('list', () => {
      beforeEach(() => {
        jest.spyOn(console, 'warn').mockImplementation(() => {});
      });

      it('should not render with datalist nodes if list prop is not set', async() => {
        await setup('<ods-input><datalist slot="list"><option value="1"></option><option value="2"></option></datalist></ods-input>');

        const innerDatalist = await page.find('ods-input >>> datalist');
        expect(innerDatalist).toBeNull();
        expect(console.warn).toHaveBeenCalledTimes(1);
      });

      it('should warn if list prop is set but without a datalist in the slot', async() => {
        await setup('<ods-input list="my-list"><p slot="list">Lorem ipsum</p></ods-input>');

        const innerDatalist = await page.find('ods-input >>> datalist');
        expect(innerDatalist).toBeNull();
        expect(console.warn).toHaveBeenCalledTimes(1);
      });

      it('should render with datalist nodes if list prop is set', async() => {
        await setup('<ods-input list="my-list"><datalist slot="list"><option value="1"></option><option value="2"></option></datalist></ods-input>');

        const innerDatalist = await page.find('ods-input >>> datalist');
        expect(innerDatalist).not.toBeNull();

        const innerDatalistOptions = await innerDatalist.findAll('option');
        expect(innerDatalistOptions.length).toBe(2);
        expect(console.warn).toHaveBeenCalledTimes(0);
      });

      describe('onSlotChange', () => {
        it('should render updated datalist', async() => {
          await setup('<ods-input list="my-list"><datalist slot="list"><option value="1"></option><option value="2"></option></datalist></ods-input>');

          el.innerHTML = '<datalist slot="list"><option value="alone"></option></datalist>';
          await page.waitForChanges();

          const innerDatalist = await page.find('ods-input >>> datalist');
          expect(innerDatalist).not.toBeNull();

          const innerDatalistOptions = await innerDatalist.findAll('option');
          expect(innerDatalistOptions.length).toBe(1);
          expect(console.warn).toHaveBeenCalledTimes(0);
        });
      });
    });
  });

  describe('error state', () => {
    it('should render in error on form submit, before any changes, if invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-input is-required></ods-input></form>');

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      expect(hasErrorClass).toBe(true);
    });

    it('should toggle the error state on value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-input is-required></ods-input></form>');

      await el.type('abcd');
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      expect(hasErrorClass).toBe(false);

      await el.callMethod('clear');
      await page.click('body', { offset: { x: 200, y: 200 } }); // Blur
      await page.waitForChanges();

      const hasErrorClass2 = await page.evaluate(() => {
        return document.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      await page.waitForChanges();
      expect(hasErrorClass2).toBe(true);
    });

    it('should enforce the error state if has-error is set even on valid input', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-input is-required has-error value="dummy"></ods-input></form>');
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      expect(hasErrorClass).toBe(true);

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      const hasErrorClass2 = await page.evaluate(() => {
        return document.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      expect(hasErrorClass2).toBe(true);
    });
  });

  describe('isMasked', () => {
    it('should render a toggle mask button', async() => {
      await setup('<ods-input is-masked></ods-input>');

      expect(buttonToggleMask).not.toBeNull();
    });

    it('should render a disabled toggle mask button when input is disabled', async() => {
      await setup('<ods-input is-disabled is-masked></ods-input>');

      expect(buttonToggleMask.getAttribute('is-disabled')).toBe('');
    });

    it('should not render a disabled toggle mask button when input is readonly', async() => {
      await setup('<ods-input is-readonly is-masked></ods-input>');

      expect(buttonToggleMask.getAttribute('is-disabled')).toBeNull();
    });

    it('should render toggle mask and clearable button', async() => {
      await setup('<ods-input is-clearable is-masked value="value"></ods-input>');

      expect(buttonClearable).not.toBeNull();
      expect(buttonToggleMask).not.toBeNull();
    });

    it('should render the loading spinner when is-masked and is-loading', async() => {
      await setup('<ods-input is-loading type="search"></ods-input>');

      expect(buttonToggleMask).toBeNull();
      expect(loadingSpinner).not.toBeNull();
    });
  });

  describe('isClearable', () => {
    it('should render a clearable button', async() => {
      await setup('<ods-input is-clearable value="clearable"></ods-input>');

      expect(buttonClearable).not.toBeNull();
    });

    it('should render a disabled clearable button when input is disabled', async() => {
      await setup('<ods-input is-disabled is-clearable value="clearable"></ods-input>');

      expect(buttonClearable.getAttribute('is-disabled')).toBe('');
    });

    it('should render a disabled clearable button when input is readonly', async() => {
      await setup('<ods-input is-readonly is-clearable value="clearable"></ods-input>');

      expect(buttonClearable.getAttribute('is-disabled')).toBe('');
    });

    it('should render a clearable button when input value wrong type', async() => {
      await setup('<ods-input is-clearable type="number" value="clearable"></ods-input>');

      expect(buttonClearable).not.toBeNull();
    });

    it('should render a clearable button when type', async() => {
      await setup('<ods-input is-clearable type="number"></ods-input>');

      await el.type('12');
      await page.waitForChanges();
      buttonClearable = await page.find('ods-input >>> ods-button[icon="xmark"]');
      expect(buttonClearable).not.toBeNull();

      await page.keyboard.press('Backspace');
      await page.keyboard.press('Backspace');
      await page.waitForChanges();

      buttonClearable = await page.find('ods-input >>> ods-button[icon="xmark"]');
      expect(buttonClearable).toBeNull();

      // Test E2E launched with chrome. Chrome don't allow to type on input type number
      // await page.keyboard.press('q');
      // await page.waitForChanges();
      // await new Promise(resolve => setTimeout(resolve, 20000));
      // buttonClearable = await page.find('ods-input >>> ods-button[icon="xmark"]');
      // expect(buttonClearable).not.toBeNull();
    });
  });

  describe('type search', () => {
    it('should render a search button', async() => {
      await setup('<ods-input type="search"></ods-input>');

      expect(await el.getProperty('type')).toBe('search');
      expect(buttonSearch).not.toBeNull();
    });

    it('should render a disabled search button when input is disabled', async() => {
      await setup('<ods-input is-disabled type="search"></ods-input>');

      expect(buttonSearch.getAttribute('is-disabled')).toBe('');
    });

    it('should render a disabled search button when input is readonly', async() => {
      await setup('<ods-input is-readonly type="search"></ods-input>');

      expect(buttonSearch.getAttribute('is-disabled')).toBe('');
    });

    it('should render search button and clearable button', async() => {
      await setup('<ods-input is-clearable type="search" value="dummy"></ods-input>');

      expect(buttonClearable).not.toBeNull();
      expect(buttonSearch).not.toBeNull();
    });

    it('should render the loading spinner when input of type search is-loading', async() => {
      await setup('<ods-input is-loading type="search"></ods-input>');

      expect(buttonSearch).toBeNull();
      expect(loadingSpinner).not.toBeNull();
    });
  });
});
