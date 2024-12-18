import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
// import { type OdsCombobox } from '../../src/';

describe('ods-combobox rendering', () => {
  let el: E2EElement;
  let innerSelect: HTMLSelectElement;
  let page: E2EPage;
  let selectComponent: HTMLElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-combobox');
    innerSelect = el.shadowRoot!.querySelector('select')!;
    selectComponent = el.shadowRoot!.querySelector('.ts-wrapper')!;
  }

  it('should render the web component', async() => {
    await setup('<ods-combobox><option value="1">Value 1</option></ods-combobox>');

    expect(el.shadowRoot).not.toBeNull();
    expect(innerSelect).not.toBeNull();
    expect(selectComponent).not.toBeNull();
  });

  it('should move the slot content to the inner select', async() => {
    await setup('<ods-combobox><option value="1">1</option></ods-combobox>');

    expect(innerSelect.innerHTML).toBe('<option value=""></option><option value="1">1</option>');
  });

  it('should render a placeholder', async() => {
    const dummyPlaceholder = 'dummy placeholder';
    await setup(`<ods-combobox placeholder="${dummyPlaceholder}"><option value="1">Value 1</option></ods-combobox>`);

    expect(await page.evaluate(() => {
      const input = document.querySelector('ods-combobox')?.shadowRoot?.querySelector<HTMLElement>('.ts-control > input');
      return (input as HTMLInputElement)?.placeholder;
    })).toBe(dummyPlaceholder);
  });

  it('should render with an option disabled', async() => {
    await setup('<ods-combobox><option value="1">Value 1</option><option disabled value="2">Value 2</option></ods-combobox>');
    await el.callMethod('open');
    await page.waitForChanges();

    const disabledStates = await page.evaluate(() => {
      const options = document.querySelector('ods-combobox')?.shadowRoot?.querySelectorAll<HTMLElement>('.ts-wrapper .option');
      return (Array.from(options || [])).map((option) => option.getAttribute('aria-disabled'));
    }) || [];

    expect(disabledStates[0]).toBeNull();
    expect(disabledStates[1]).toBe('true');
  });

  it('should render with an optgroup', async() => {
    const dummyLabel = 'dummy optgroup';
    await setup(`<ods-combobox><optgroup label="${dummyLabel}"><option value="1">1</option></optgroup></ods-combobox>`);
    await el.callMethod('open');
    await page.waitForChanges();

    expect(await page.evaluate(() => {
      return !!document.querySelector('ods-combobox')?.shadowRoot?.querySelector('.ts-wrapper .optgroup');
    })).toBe(true);
    expect(await page.evaluate(() => {
      return document.querySelector('ods-combobox')?.shadowRoot?.querySelector<HTMLElement>('.ts-wrapper .optgroup-header')?.innerText;
    })).toBe(dummyLabel);
  });

  it('should render with a whole optgroup disabled', async() => {
    await setup('<ods-combobox><optgroup disabled label="group"><option value="1">1</option></optgroup></ods-combobox>');
    await el.callMethod('open');
    await page.waitForChanges();

    expect(await page.evaluate(() => {
      return document.querySelector('ods-combobox')?.shadowRoot?.querySelector('.ts-wrapper .optgroup')?.hasAttribute('data-disabled');
    })).toBe(true);
  });

  it('should render with is-disabled', async() => {
    await setup('<ods-combobox is-disabled><option value="1">Value 1</option></ods-combobox>');

    expect(selectComponent.classList.contains('disabled')).toBe(true);
  });

  it('should render the web component without options', async() => {
    await setup('<ods-combobox></ods-combobox>');

    expect(innerSelect).toHaveClass('tomselected');
    expect(selectComponent).toBeDefined();
  });

  describe('watchers', () => {
    describe('isDisabled', () => {
      it('should disable the component', async() => {
        await setup('<ods-combobox><option value="1">1</option></ods-combobox>');
        expect(selectComponent.classList.contains('disabled')).toBe(false);

        el.setAttribute('is-disabled', true);
        await page.waitForChanges();

        expect(await page.evaluate(() => {
          return document.querySelector('ods-combobox')?.shadowRoot?.querySelector('.ts-wrapper')?.classList.contains('disabled') || false;
        })).toBe(true);
      });
    });

    describe('onSlotChange', () => {
      it('should render 2 options after slot change', async() => {
        await setup('<ods-combobox><option value="1">Value 1</option></ods-combobox>');

        el.innerHTML = '<option value="1">Value 1</option><option value="2">Value 2</option>';
        await page.waitForChanges();

        const optionsNumber = [...innerSelect.children].filter((child) => child.tagName === 'OPTION').length;
        expect(optionsNumber).toBe(2);
      });

      it('should change options but not the selected one', async() => {
        const value = '1';
        await setup(`<ods-combobox value="${value}"><option value="${value}">Value 1</option></ods-combobox>`);

        el.innerHTML = `<option value="${value}">Value 1</option><option value="2">Value 2</option>`;
        await page.waitForChanges();

        const selectedOption = selectComponent.querySelector('.ts-control')?.querySelector(`[data-value="${value}"]`);
        expect(selectedOption).toBeDefined();
      });
    });
  });
});
