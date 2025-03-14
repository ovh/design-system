import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-combobox accessibility', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    el = await page.find('ods-combobox');
  }

  it('should render the web component with the right role', async() => {
    await setup('<ods-combobox></ods-combobox>');

    expect(el.shadowRoot).not.toBeNull();
    expect(el.getAttribute('role')).toBe('combobox');
  });
});
