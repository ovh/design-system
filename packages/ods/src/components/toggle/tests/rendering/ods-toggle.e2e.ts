import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-toggle rendering', () => {
  let el: E2EElement;
  let input: E2EElement;
  let label: E2EElement;
  let page: E2EPage;
  let slider: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-toggle');
    input = await page.find('ods-toggle >>> input');
    label = await page.find('ods-toggle >>> .ods-toggle__container__slider__label');
    slider = await page.find('ods-toggle >>> .ods-toggle__container__slider');
  }

  it('should render the web component', async() => {
    await setup('<ods-toggle></ods-toggle>');

    expect(el.shadowRoot).not.toBeNull();
    const inputStyle = await input.getComputedStyle();
    expect(inputStyle.height).toBe('0px');
    expect(inputStyle.width).toBe('0px');
    expect(inputStyle.opacity).toBe('0');
  });

  describe('disabled', () => {
    it('should render the web component disabled', async() => {
      await setup('<ods-toggle is-disabled></ods-toggle>');

      expect(input.getAttribute('disabled')).toBe('');
      expect(slider.classList.contains('ods-toggle__container__slider--disabled')).toBe(true);
    });
  });

  describe('withLabel', () => {
    it('should render the web component with label', async() => {
      await setup('<ods-toggle with-label></ods-toggle>');

      expect(label).toEqualText('OFF');
      await el.click();
      await page.waitForChanges();
      const text = await page.evaluate(() => {
        const label = document.querySelector('ods-toggle')?.shadowRoot?.querySelector('.ods-toggle__container__slider__label');
        return label?.innerHTML;
      });
      expect(text).toEqualText('ON');
    });
  });
});
