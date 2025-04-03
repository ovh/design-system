import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-code accessibility', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    el = await page.find('ods-code');
  }

  it('should render the web component with a unique generated id', async() => {
    await setup(`
      <ods-code></ods-code>
      <ods-code></ods-code>
      <ods-code></ods-code>
    `);

    const codes = await page.findAll('ods-code');

    expect(el.shadowRoot).not.toBeNull();
    expect(codes.length).toBe(3);
    expect(codes[0].id).not.toBe(codes[1].id);
    expect(codes[0].id).not.toBe(codes[2].id);
    expect(codes[1].id).not.toBe(codes[0].id);
    expect(codes[1].id).not.toBe(codes[2].id);
    expect(codes[2].id).not.toBe(codes[0].id);
    expect(codes[2].id).not.toBe(codes[1].id);
  });
});
