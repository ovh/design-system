import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-combobox-item rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  function isFocused(): boolean {
    return el.classList.contains('ods-combobox-item--focused');
  }

  function isVisible(): boolean {
    return !el.classList.contains('ods-combobox-item--hidden');
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    el = await page.find('ods-combobox-item');
  }

  it('should render the web component', async() => {
    await setup('<ods-combobox-item value="value"></ods-combobox-item>');

    expect(el.shadowRoot).not.toBeNull();
  });

  it('should warn if the value is not set', async() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    await setup('<ods-combobox-item></ods-combobox-item>');

    expect(console.warn).toHaveBeenCalledTimes(1);
  });

  it('should render hidden and unfocused by default', async() => {
    await setup('<ods-combobox-item value="value"></ods-combobox-item>');

    expect(isVisible()).toBe(false);
    expect(isFocused()).toBe(false);
  });

  it('should render focused and visible', async() => {
    await setup('<ods-combobox-item is-focused is-visible value="value"></ods-combobox-item>');

    expect(isVisible()).toBe(true);
    expect(isFocused()).toBe(true);
  });

  it('should render hidden if selected', async() => {
    await setup('<ods-combobox-item is-selected is-visible value="value"></ods-combobox-item>');

    expect(isVisible()).toBe(false);
  });

  it('should render visible if isVisible is set', async() => {
    await setup('<ods-combobox-item is-visible value="value"></ods-combobox-item>');

    expect(isVisible()).toBe(true);
  });

  it('should render hidden if isVisible is set to false', async() => {
    await setup('<ods-combobox-item is-visible="false" value="value"></ods-combobox-item>');

    expect(isVisible()).toBe(false);
  });
});
