import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-medium rendering', () => {
  let el: E2EElement;
  let medium: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-medium');
    medium = await page.find('ods-medium >>> img');
  }

  it('should render the web component', async() => {
    await setup('<ods-medium></ods-medium>');

    expect(el.shadowRoot).not.toBeNull();
    expect(medium).not.toBeNull();
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      const customMaxHeight = '50px';
      await setup('<ods-medium></ods-medium>', `ods-medium::part(image) { max-height: ${customMaxHeight}; }`);

      const tagStyle = await medium.getComputedStyle();

      expect(tagStyle.getPropertyValue('max-height')).toBe(customMaxHeight);
    });
  });
});
