import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-combobox-item rendering', () => {
  let el: E2EElement;
  let innerEl: HTMLElement;
  let page: E2EPage;

  function isFocused(): boolean {
    return innerEl.classList.contains('ods-combobox-item--focused');
  }

  function isSelected(): boolean {
    return innerEl.classList.contains('ods-combobox-item--hidden');
  }

  function isVisible(): boolean {
    return !innerEl.classList.contains('ods-combobox-item--hidden');
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    el = await page.find('ods-combobox-item');
    innerEl = el.shadowRoot!.querySelector<HTMLElement>('.ods-combobox-item')!;
  }

  it('should render the web component', async() => {
    await setup('<ods-combobox-item></ods-combobox-item>');

    expect(el.shadowRoot).not.toBeNull();
  });

  it('should render visible, unfocused and unselected by default', async() => {
    await setup('<ods-combobox-item value="value"></ods-combobox-item>');

    expect(isVisible()).toBe(true);
    expect(isFocused()).toBe(false);
    expect(isSelected()).toBe(false);
  });

  it('should render focused and visible', async() => {
    await setup('<ods-combobox-item is-focused value="value"></ods-combobox-item>');

    expect(isVisible()).toBe(true);
    expect(isFocused()).toBe(true);
  });

  it('should render hidden if selected', async() => {
    await setup('<ods-combobox-item is-selected value="value"></ods-combobox-item>');

    expect(isVisible()).toBe(false);
    expect(isSelected()).toBe(true);
  });

  it('should render hidden if isVisible is set to false', async() => {
    await setup('<ods-combobox-item is-visible="false" value="value"></ods-combobox-item>');

    expect(isVisible()).toBe(false);
  });
});
