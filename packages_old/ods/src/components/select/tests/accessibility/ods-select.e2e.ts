import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-select accessibility', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-select');
  }

  it('should render the web component with the right default attributes', async() => {
    await setup('<ods-select></ods-select>');

    expect(el.shadowRoot).not.toBeNull();
    expect(el.getAttribute('aria-label')).toBeNull();
    expect(el.getAttribute('aria-labelledby')).toBeNull();
  });

  it('should render the web component with the right aria attributes', async() => {
    const dummyAriaLabel = 'dummy aria label';
    const dummyAriaLabelledby = 'dummy element';

    await setup(`<ods-select aria-label="${dummyAriaLabel}" aria-labelledby="${dummyAriaLabelledby}"></ods-select>`);

    expect(el.shadowRoot).not.toBeNull();
    expect(el.getAttribute('aria-label')).toBe(dummyAriaLabel);
    expect(el.getAttribute('aria-labelledby')).toBe(dummyAriaLabelledby);
  });
});
