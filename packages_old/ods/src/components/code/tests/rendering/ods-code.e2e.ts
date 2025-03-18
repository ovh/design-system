import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-code rendering', () => {
  let el: E2EElement;
  let copyButton: E2EElement;
  let page: E2EPage;
  let tooltip: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-code');
    copyButton = await page.find('ods-code >>> ods-button');
    tooltip = await page.find('ods-code >>> [part="tooltip"]');
  }

  it('should render the web component', async() => {
    await setup('<ods-code></ods-code>');

    expect(el.shadowRoot).not.toBeNull();
    expect(copyButton).toBeNull();
  });

  it('should render the web component without a tooltip if canCopy is false', async() => {
    await setup('<ods-code></ods-code>');

    expect(el.shadowRoot).not.toBeNull();
    expect(tooltip).toBeNull();
  });

  it('should render the copy button and the tooltip if canCopy is true', async() => {
    await setup('<ods-code can-copy></ods-code>');

    expect(el.shadowRoot).not.toBeNull();
    expect(copyButton).not.toBeNull();
    expect(tooltip).not.toBeNull();
  });
});
