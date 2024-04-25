import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-breadcrumb rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-breadcrumb');
  }

  it('should render the web component', async() => {
    await setup('<ods-breadcrumb></ods-breadcrumb>');

    expect(el.shadowRoot).not.toBeNull();
  });
});
