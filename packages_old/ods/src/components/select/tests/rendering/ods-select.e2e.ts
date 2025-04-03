import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsSelect } from '../../src/';

describe('ods-select rendering', () => {
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

    el = await page.find('ods-select');
    innerSelect = el.shadowRoot!.querySelector('select')!;
    selectComponent = el.shadowRoot!.querySelector('.ts-wrapper')!;
  }

  it('should render the web component', async() => {
    await setup('<ods-select><option value="1">Value 1</option></ods-select>');

    expect(el.shadowRoot).not.toBeNull();
    expect(innerSelect).not.toBeNull();
    expect(selectComponent).not.toBeNull();
  });

  it('should move the slot content to the inner select', async() => {
    await setup('<ods-select><option value="1">1</option></ods-select>');

    expect(innerSelect.innerHTML).toBe('<option value=""></option><option value="1">1</option>');
  });

  it('should render a placeholder', async() => {
    const dummyPlaceholder = 'dummy placeholder';
    await setup(`<ods-select placeholder="${dummyPlaceholder}"><option value="1">Value 1</option></ods-select>`);

    expect(await page.evaluate(() => {
      return document.querySelector('ods-select')?.shadowRoot?.querySelector<HTMLElement>('.ts-control')?.innerText;
    })).toBe(dummyPlaceholder);
  });

  it('should render with an option disabled', async() => {
    await setup('<ods-select><option value="1">Value 1</option><option disabled value="2">Value 2</option></ods-select>');
    await el.callMethod('open');
    await page.waitForChanges();

    const disabledStates = await page.evaluate(() => {
      const options = document.querySelector('ods-select')?.shadowRoot?.querySelectorAll<HTMLElement>('.ts-wrapper .option');
      return (Array.from(options || [])).map((option) => option.getAttribute('aria-disabled'));
    }) || [];

    expect(disabledStates[0]).toBeNull();
    expect(disabledStates[1]).toBe('true');
  });

  it('should render with an optgroup', async() => {
    const dummyLabel = 'dummy optgroup';
    await setup(`<ods-select><optgroup label="${dummyLabel}"><option value="1">1</option></optgroup></ods-select>`);
    await el.callMethod('open');
    await page.waitForChanges();

    expect(await page.evaluate(() => {
      return !!document.querySelector('ods-select')?.shadowRoot?.querySelector('.ts-wrapper .optgroup');
    })).toBe(true);
    expect(await page.evaluate(() => {
      return document.querySelector('ods-select')?.shadowRoot?.querySelector<HTMLElement>('.ts-wrapper .optgroup-header')?.innerText;
    })).toBe(dummyLabel);
  });

  it('should render with a whole optgroup disabled', async() => {
    await setup('<ods-select><optgroup disabled label="group"><option value="1">1</option></optgroup></ods-select>');
    await el.callMethod('open');
    await page.waitForChanges();

    expect(await page.evaluate(() => {
      return document.querySelector('ods-select')?.shadowRoot?.querySelector('.ts-wrapper .optgroup')?.hasAttribute('data-disabled');
    })).toBe(true);
  });

  it('should render with checkboxes if multiple', async() => {
    await setup('<ods-select allow-multiple><option value="1">1</option></ods-select>');
    await el.callMethod('open');
    await page.waitForChanges();

    expect(await page.evaluate(() => {
      return !!document.querySelector('ods-select')?.shadowRoot?.querySelector('.ts-wrapper .option [type="checkbox"]');
    })).toBe(true);
  });

  it('should render with a custom renderer', async() => {
    await setup('<ods-select><option value="1">1</option></ods-select>');
    await page.evaluate(() => {
      const select = document.querySelector<OdsSelect & HTMLElement>('ods-select');
      select!.customRenderer = {
        option: ({ text }: { text: string }): string => {
          return `<div>>>> ${text} <<<</div>`;
        },
      };
      select!.updateCustomRenderer();
    });

    await el.callMethod('open');
    await page.waitForChanges();

    expect(await page.evaluate(() => {
      return document.querySelector('ods-select')?.shadowRoot?.querySelector<HTMLElement>('.ts-wrapper .option')?.innerText;
    })).toBe('>>> 1 <<<');
  });

  it('should render with is-disabled', async() => {
    await setup('<ods-select is-disabled><option value="1">Value 1</option></ods-select>');

    expect(selectComponent.classList.contains('disabled')).toBe(true);
  });

  it('should render the web component without options', async() => {
    await setup('<ods-select></ods-select>');

    expect(innerSelect).toHaveClass('tomselected');
    expect(selectComponent).toBeDefined();
  });

  describe('watchers', () => {
    describe('isDisabled', () => {
      it('should disable the select component', async() => {
        await setup('<ods-select><option value="1">1</option></ods-select>');
        expect(selectComponent.classList.contains('disabled')).toBe(false);

        el.setAttribute('is-disabled', true);
        await page.waitForChanges();

        expect(await page.evaluate(() => {
          return document.querySelector('ods-select')?.shadowRoot?.querySelector('.ts-wrapper')?.classList.contains('disabled') || false;
        })).toBe(true);
      });
    });

    describe('onSlotChange', () => {
      it('should render 2 options after slot change', async() => {
        await setup('<ods-select><option value="1">Value 1</option></ods-select>');

        el.innerHTML = '<option value="1">Value 1</option><option value="2">Value 2</option>';
        await page.waitForChanges();

        const optionsNumber = [...innerSelect.children].filter((child) => child.tagName === 'OPTION').length;
        expect(optionsNumber).toBe(2);
      });

      it('should change options but not the selected one', async() => {
        const value = '1';
        await setup(`<ods-select value="${value}"><option value="${value}">Value 1</option></ods-select>`);

        el.innerHTML = `<option value="${value}">Value 1</option><option value="2">Value 2</option>`;
        await page.waitForChanges();

        const selectedOption = selectComponent.querySelector('.ts-control')?.querySelector(`[data-value="${value}"]`);
        expect(selectedOption).toBeDefined();
      });
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

      el = await page.find('ods-select');

      await el.click();
      await page.waitForChanges();
    }

    it('should position regarding dialog element (thus not at the right place) in absolute strategy', async() => {
      await setupModal('<ods-select><option value="1">1</option><option value="2">2</option></ods-select>');

      const hasScroll = await page.evaluate(() => {
        const dialogContent = document.querySelector('ods-modal')?.shadowRoot?.querySelector('.ods-modal__dialog__content');
        return dialogContent && dialogContent.scrollHeight > dialogContent.clientHeight;
      });

      expect(hasScroll).toBe(true);
    });

    it('should position regarding viewport (thus at the right place) in fixed strategy', async() => {
      await setupModal('<ods-select strategy="fixed"><option value="1">1</option><option value="2">2</option></ods-select>');

      const hasScroll = await page.evaluate(() => {
        const dialogContent = document.querySelector('ods-modal')?.shadowRoot?.querySelector('.ods-modal__dialog__content');
        return dialogContent && dialogContent.scrollHeight > dialogContent.clientHeight;
      });

      expect(hasScroll).toBe(false);
    });
  });
});
