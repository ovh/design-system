import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-button accessibility', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    el = await page.find('ods-button');
  }

  it('should render the web component with the right default attributes', async() => {
    await setup('<ods-button></ods-button>');

    expect(el.shadowRoot).not.toBeNull();
    expect(el.getAttribute('aria-busy')).toBeNull();
    expect(el.getAttribute('aria-live')).toBeNull();
  });

  it('should render the web component with the right aria attributes', async() => {
    await setup('<ods-button is-loading></ods-button>');

    expect(el.shadowRoot).not.toBeNull();
    expect(el.getAttribute('aria-busy')).toBe('true');
    expect(el.getAttribute('aria-live')).toBe('polite');
  });
});
