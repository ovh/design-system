import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-skeleton rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let part: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-skeleton');
    part = await page.find('ods-skeleton >>> [part="skeleton"]');
  }

  it('should render the web component', async() => {
    await setup('<ods-skeleton></ods-skeleton>');
    const partStyle = await part.getComputedStyle();

    expect(el.shadowRoot).not.toBeNull();
    expect(partStyle.getPropertyValue('height')).toBeDefined();
    expect(partStyle.getPropertyValue('width')).toBeDefined();
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      const customHeight = 200;
      await setup('<ods-skeleton>some text</ods-skeleton>', `ods-skeleton::part(skeleton) { height: ${customHeight}px }`);
      const partStyle = await part.getComputedStyle();

      expect(parseInt(partStyle.getPropertyValue('height'), 10)).toBe(customHeight);
    });
  });
});
