import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-combobox-item accessibility', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    el = await page.find('ods-combobox-item');
  }

  it('should render the web component with the right role', async() => {
    await setup('<ods-combobox-item is-visible value="value"></ods-combobox-item>');

    expect(el.shadowRoot).not.toBeNull();
    expect(el.getAttribute('role')).toBe('option');
    expect(el.getAttribute('aria-hidden')).toBeNull();
    expect(el.getAttribute('aria-selected')).toBeNull();
  });

  it('should render with aria-selected if focused', async() => {
    await setup('<ods-combobox-item is-focused value="value"></ods-combobox-item>');

    expect(el.getAttribute('aria-selected')).toBe('');
  });

  it('should render with aria-hidden if not visible', async() => {
    await setup('<ods-combobox-item is-visible="false" value="value"></ods-combobox-item>');

    expect(el.getAttribute('aria-hidden')).toBe('');
  });

  it('should render with aria-hidden if selected', async() => {
    await setup('<ods-combobox-item is-selected="true" value="value"></ods-combobox-item>');

    expect(el.getAttribute('aria-hidden')).toBe('');
  });
});
