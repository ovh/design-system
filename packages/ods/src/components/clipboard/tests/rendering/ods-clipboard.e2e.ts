import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-clipboard rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let tooltip: HTMLElement | null;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-clipboard');
    tooltip = await el.shadowRoot.querySelector<HTMLElement>('ods-tooltip');
  }

  it('should render the web component', async() => {
    await setup('<ods-clipboard></ods-clipboard>');

    expect(el.shadowRoot).not.toBeNull();
    expect(tooltip).not.toBeNull();
  });

  it('should render the web component without a tooltip if disabled', async() => {
    await setup('<ods-clipboard is-disabled></ods-clipboard>');

    expect(el.shadowRoot).not.toBeNull();
    expect(tooltip).toBeNull();
  });
});
