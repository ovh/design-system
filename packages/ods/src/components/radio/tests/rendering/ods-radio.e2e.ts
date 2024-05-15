import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-radio rendering', () => {
  let page: E2EPage;
  let inputRadio: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    inputRadio = await page.find('ods-radio > input[type="radio"]');
  }

  describe('CustomCss', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-radio is-checked></ods-radio>', 'ods-radio > input[type="radio"]:not(:disabled):checked { background-color: red; }');
      const inputRadioStyle = await inputRadio.getComputedStyle();
      expect(inputRadioStyle.getPropertyValue('background-color')).toBe('rgb(255, 0, 0)');
    });
  });
});
