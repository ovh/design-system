import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-clipboard accessibility', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-clipboard');
  }

  it('should render the web component with a unique generated id', async() => {
    await setup(`
      <ods-clipboard></ods-clipboard>
      <ods-clipboard></ods-clipboard>
      <ods-clipboard></ods-clipboard>
    `);

    const clipboards = await page.findAll('ods-clipboard');

    expect(el.shadowRoot).not.toBeNull();
    expect(clipboards.length).toBe(3);
    expect(clipboards[0].id).not.toBe(clipboards[1].id);
    expect(clipboards[0].id).not.toBe(clipboards[2].id);
    expect(clipboards[1].id).not.toBe(clipboards[0].id);
    expect(clipboards[1].id).not.toBe(clipboards[2].id);
    expect(clipboards[2].id).not.toBe(clipboards[0].id);
    expect(clipboards[2].id).not.toBe(clipboards[1].id);
  });
});
