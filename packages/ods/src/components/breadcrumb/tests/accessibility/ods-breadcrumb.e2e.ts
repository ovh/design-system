import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-breadcrumb accessibility', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-breadcrumb');
  }

  it('should render the web component with the right role', async() => {
    await setup('<ods-breadcrumb></ods-breadcrumb>');

    expect(el.shadowRoot).not.toBeNull();
    expect(el.getAttribute('role')).toBe('navigation');
  });

  it('should render the last item with aria-current set', async() => {
    await setup(`
<ods-breadcrumb>
  <ods-breadcrumb-item id="first" label="First">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item id="last" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
    `);

    const firstItem = await page.find('ods-breadcrumb > #first');
    const lastItem = await page.find('ods-breadcrumb > #last');

    expect(firstItem?.shadowRoot?.querySelector('[aria-current]')).toBeNull();
    expect(lastItem?.shadowRoot?.querySelector('[aria-current]')).not.toBeNull();
  });
});
