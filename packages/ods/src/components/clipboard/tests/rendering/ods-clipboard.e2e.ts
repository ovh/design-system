import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-clipboard rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let tooltip: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-clipboard');
    tooltip = await page.find('ods-clipboard >>> [part="tooltip"]');
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

  describe('part', () => {
    it('should render with custom style applied to the tooltip', async() => {
      const customWidth = '200px';
      await setup('<ods-clipboard></ods-clipboard>', `ods-clipboard::part(tooltip) { width: ${customWidth}; }`);

      const tooltipStyle = await tooltip.getComputedStyle();
      expect(tooltipStyle.getPropertyValue('width')).toBe(customWidth);
    });
  });
});
