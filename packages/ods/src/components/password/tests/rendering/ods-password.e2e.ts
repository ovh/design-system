import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-password rendering', () => {
  let page: E2EPage;
  let part: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    part = await page.find('ods-password >>> [exportparts="input"]');
  }

  describe('part', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-password></ods-password>', 'ods-password::part(input) { width: 100px }');
      const partStyle = await part.getComputedStyle();
      expect(partStyle.getPropertyValue('width')).toBe('100px');
    });
  });
});
