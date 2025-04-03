import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-pagination accessibility', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);

    el = await page.find('ods-pagination');
  }

  it('should not allow for a defaultCurrentPage lower than 1', async() => {
    await setup('<ods-pagination default-current-page="-5" total-pages="5"></ods-pagination>');

    const current = await el.callMethod('getCurrentPage');

    expect(current).toBe(1);
  });

  it('should not allow for a defaultCurrentPage higher than total number of pages', async() => {
    await setup('<ods-pagination default-current-page="10" total-pages="5"></ods-pagination>');

    const current = await el.callMethod('getCurrentPage');

    expect(current).toBe(5);
  });

  it('should show both slots and the totalItems number', async() => {
    await setup(`
      <ods-pagination default-current-page="1" total-items="5">
        <span slot="before-total-items">of&nbsp;</span>
        <span slot="after-total-items">&nbsp;results</span>
      </ods-pagination>
    `);

    const totalItemsTextElement = await page.find('ods-pagination >>> .ods-pagination__results__label');

    expect(totalItemsTextElement).toBeDefined();
    expect(totalItemsTextElement.innerText).toContain('5');

    const textSlotElements = await totalItemsTextElement.findAll('slot');

    expect(textSlotElements.length).toBe(2);
  });
});
