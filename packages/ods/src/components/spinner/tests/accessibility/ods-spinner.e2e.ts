import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-spinner accessibility', () => {
  let container: E2EElement;
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    el = await page.find('ods-spinner');
    container = await page.find('ods-spinner >>> .ods-spinner__container');
  }

  it('should render the web component with the right role', async() => {
    await setup('<ods-spinner></ods-spinner>');

    expect(el.shadowRoot).not.toBeNull();
    expect(el.getAttribute('role')).toBe('progressbar');
    expect(container.getAttribute('aria-hidden')).toBe('true');
  });
});
