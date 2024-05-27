import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-checkbox rendering', () => {
  let page: E2EPage;
  let inputCheckbox: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    inputCheckbox = await page.find('ods-checkbox > input[type="checkbox"]');
  }

  describe('CustomCss', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-checkbox is-checked></ods-checkbox>', 'ods-checkbox > input[type="checkbox"]:not(:disabled):checked { background-color: red; }');
      const inputCheckboxStyle = await inputCheckbox.getComputedStyle();
      expect(inputCheckboxStyle.getPropertyValue('background-color')).toBe('rgb(255, 0, 0)');
    });
  });
});
