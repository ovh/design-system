import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-pagination rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();
    await page.setContent(content);
    el = await page.find('ods-pagination');
  }

  it('should render the web component', async() => {
    await setup('<ods-pagination default-current-page="4" total-pages="10"></ods-pagination>');
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should have arrows, right and left', async() => {
    await setup('<ods-pagination default-current-page="4" total-pages="10"></ods-pagination>');
    const allArrows = await page.findAll('ods-pagination >>> .ods-pagination__list__arrow');
    expect(allArrows).toBeTruthy();
    expect(allArrows.length).toBe(2);
  });

  it('should have page list with ods-buttons', async() => {
    await setup('<ods-pagination default-current-page="4" total-pages="10"></ods-pagination>');
    const osdsButtonPaginationPageButtonElement = await page.find('ods-pagination >>> ul > li > ods-button');
    expect(osdsButtonPaginationPageButtonElement).not.toBeNull();
  });

  it('arrows should have ods-icons', async() => {
    await setup('<ods-pagination default-current-page="4" total-pages="10"></ods-pagination>');
    const icons = await page.find('ods-pagination >>> ul > li > ods-button >>> ods-icon');
    expect(icons).not.toBeNull();
  });

  it('should render with totalItems set', async() => {
    await setup('<ods-pagination default-current-page="1" total-items="500"></ods-pagination>');
    const perPageSelectElement = await page.find('ods-pagination >>> ods-select');
    expect(perPageSelectElement).toBeDefined();
  });

  it('should show correct number of steps for total pages', async() => {
    await setup('<ods-pagination default-current-page="1" total-pages="7"></ods-pagination>');
    const buttonList = await page.findAll('ods-pagination >>> li >>> ods-button');
    expect(buttonList.length).toBe(9);
  });
});
