import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-textarea accessibility', () => {
  let el: E2EElement;
  let textareaElement: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-textarea');
    textareaElement = await page.find('ods-textarea >>> textarea');
  }

  it('should render the web component with the right default attributes', async() => {
    await setup('<ods-textarea></ods-textarea>');

    expect(el.shadowRoot).not.toBeNull();
    expect(textareaElement.getAttribute('aria-label')).toBeNull();
    expect(textareaElement.getAttribute('aria-labelledby')).toBeNull();
    expect(textareaElement.getAttribute('aria-multiline')).toBe('');
    expect(textareaElement.getAttribute('role')).toBe('textbox');
  });

  it('should render the web component with the right aria attributes', async() => {
    const dummyAriaLabel = 'dummy aria label';
    const dummyAriaLabelledby = 'dummy element';

    await setup(`<ods-textarea aria-label="${dummyAriaLabel}" aria-labelledby="${dummyAriaLabelledby}"></ods-textarea>`);

    expect(el.shadowRoot).not.toBeNull();
    expect(textareaElement.getAttribute('aria-label')).toBe(dummyAriaLabel);
    expect(textareaElement.getAttribute('aria-labelledby')).toBe(dummyAriaLabelledby);
    expect(textareaElement.getAttribute('aria-multiline')).toBe('');
    expect(textareaElement.getAttribute('role')).toBe('textbox');
  });
});
