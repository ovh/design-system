import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-tabs accessibility', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-tabs');
  }

  it('should render the web component with the right role', async() => {
    await setup('<ods-tabs></ods-tabs>');

    expect(el.shadowRoot).not.toBeNull();
    expect(el.getAttribute('role')).toBe('tablist');
  });
});
