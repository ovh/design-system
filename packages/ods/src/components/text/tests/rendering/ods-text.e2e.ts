import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-text', () => {
  let page: E2EPage;
  let el: E2EElement;

  //async function setup({ attributes= {}, html = '' }: { attributes?: Partial<any>, html?: string }): Promise<void> {
  async function setup({ html = '' }: { html?: string }): Promise<void> {
    // const stringAttributes = odsComponentAttributes2StringAttributes<OdsTextAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    // await page.setContent(`<osds-text ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-text>`);
    await page.setContent(`<osds-text>${html}</osds-text>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-text');
  }

  it('should render', async() => {
    await setup({});
    expect(el).not.toBeNull();
  });
});
