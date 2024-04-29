import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-toggle accessibility', () => {
  let el: E2EElement;
  let input: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-toggle');
    input = await page.find('ods-toggle >>> input');
  }

  it('should render the web component with the right role', async() => {
    await setup('<ods-toggle></ods-toggle>');

    expect(el.shadowRoot).not.toBeNull();
    expect(input.getAttribute('role')).toBe('switch');
  });
});
