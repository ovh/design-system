import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-ods-meter rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();
    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }
    el = await page.find('ods-ods-meter');
  }
  it('should render the web component', async() => {
    await setup('<ods-ods-meter></ods-ods-meter>');
    expect(el.shadowRoot).not.toBeNull();
  });

  it('should render the web component with the right role', async() => {
    await setup('<ods-ods-meter></ods-ods-meter>');
    expect(el.shadowRoot).not.toBeNull();
    expect(el.getAttribute('role')).toBe('article');
  });

  it('should render the web component with the right label', async() => {
    await setup('<ods-ods-meter label="test"></ods-ods-meter>');
    expect(el.shadowRoot).not.toBeNull();
    expect(el.getAttribute('aria-label')).toBe('test');
  });
});
