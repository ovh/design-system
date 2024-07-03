import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-range rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-range');
  }

  it('should render the web component', async() => {
    await setup('<ods-range></ods-range>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('defaultValue', () => {
    it('get defaultValue with props', async() => {
      const defaultValue = 40;
      await setup(`<ods-range default-value="${defaultValue}"></ods-range>`);

      expect(await el.getProperty('value')).toBe(defaultValue);
    });

    it('get defaultValue with midpoint max and min', async() => {
      await setup('<ods-range min="0" max="50"></ods-range>');

      expect(await el.getProperty('value')).toBe(25);
    });
  });
});
