import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { ODS_ICON_NAME } from '../../src';

describe('ods-icon rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-icon');
  }

  it('should render the web component', async() => {
    await setup('<ods-icon></ods-icon>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      const customHeight = 200;

      await setup(`<ods-icon name="${ODS_ICON_NAME.plus}"></ods-icon>`, `ods-icon { height: ${customHeight}px; }`);

      const elStyle = await el.getComputedStyle();
      expect(parseInt(elStyle.getPropertyValue('height'), 10)).toBe(customHeight);
    });
  });
});
