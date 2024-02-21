import type { OdsPaginationAttribute } from './interfaces/attributes';
import type { OdsPaginationChangedEventDetail, OdsPaginationItemPerPageChangedEventDetail } from './interfaces/events';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_PAGINATION_PER_PAGE_OPTIONS } from './constants/pagination-per-page';

describe('e2e:osds-pagination', () => {
  const baseAttribute = { defaultCurrentPage: 0, disabled: false, labelTooltipNext: '', labelTooltipPrevious: '', totalPages: 0 };
  let page: E2EPage;
  let el: E2EElement;
  let osdsButtonPaginationPageButtonElement: E2EElement;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsPaginationAttribute>, html?: string } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsPaginationAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();

    await page.setContent(`
      <osds-pagination ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-pagination>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-pagination');
  }

  describe('defaults', () => {
    beforeEach(async() => {
      await setup({ attributes: { defaultCurrentPage: 4, totalPages: 10 } });
    });

    it('should render', async() => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have arrows, right and left', async() => {
      // we list the buttons of arrows
      const allArrows = await page.findAll('osds-pagination >>> .arrows >>> osds-button');
      expect(allArrows).toBeTruthy();
      // we should have two arrows, right and left
      expect(allArrows.length).toBe(2);
    });

    it('should have page list with osds-buttons', async() => {
      osdsButtonPaginationPageButtonElement = await page.find('osds-pagination >>> ul > li > osds-button');
      expect(osdsButtonPaginationPageButtonElement).not.toBeNull();
    });

    it('arrows should have osds-icons', async() => {
      const icons = await page.find('osds-pagination >>> ul > li > osds-button >>> osds-icons');
      expect(icons).not.toBeNull();
    });
  });

  describe('check the pagination structure', () => {
    it('< 1 2 > should have 4 osds-button', async() => {
      await setup({ attributes: { defaultCurrentPage: 1, totalPages: 2 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(4);
    });

    it('< 1 2 3 > should have 5 osds-button', async() => {
      await setup({ attributes: { defaultCurrentPage: 1, totalPages: 3 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(5);
    });

    it('< 1 2 3 4 > should have 6 osds-button', async() => {
      await setup({ attributes: { defaultCurrentPage: 1, totalPages: 4 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(6);
    });

    it('< 1 2 3 4 5 > should have 7 osds-button', async() => {
      await setup({ attributes: { defaultCurrentPage: 1, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(7);
    });

    it('< 1 2 3 4 5 6 > should have 8 osds-button', async() => {
      await setup({ attributes: { defaultCurrentPage: 1, totalPages: 6 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(8);
    });

    it('< 1 2 3 4 5 … 7 > should have 9 osds-button', async() => {
      await setup({ attributes: { defaultCurrentPage: 1, totalPages: 7 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(9);
    });

    it('< 1 2 3 4 5 … 8 > should have 9 osds-button', async() => {
      await setup({ attributes: { defaultCurrentPage: 1, totalPages: 8 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(9);
    });

    it('< 1 … 4 5 6 … 21 > should have 9 osds-button', async() => {
      await setup({ attributes: { defaultCurrentPage: 5, totalPages: 21 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(9);
    });

    it('< 1 … 4 5 6 … 9000 > should have 9 osds-button', async() => {
      await setup({ attributes: { defaultCurrentPage: 5, totalPages: 9000 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(9);
    });

    it('should not allow for a defaultCurrentPage lower than 1', async() => {
      await setup({ attributes: { defaultCurrentPage: -5, totalPages: 5 } });

      const current = await el.callMethod('getCurrentPage');
      expect(current).toEqual(1);
    });

    it('should not allow for a defaultCurrentPage higher than total number of pages', async() => {
      await setup({ attributes: { defaultCurrentPage: 10, totalPages: 5 } });

      const current = await el.callMethod('getCurrentPage');
      expect(current).toEqual(5);
    });
  });

  describe('should change page if we click', () => {
    it('switch current page from 2 to 1 by button click', async() => {
      await setup({ attributes: { defaultCurrentPage: 2, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');

      const indexBeforeClick = await el.callMethod('getCurrentPage');
      expect(indexBeforeClick).toEqual(2);

      await buttonList[1].click();

      await page.waitForChanges();

      const current = await el.callMethod('getCurrentPage');
      expect(current).toEqual(1);
    });

    it('switch current page from 2 to 3 by button click', async() => {
      await setup({ attributes: { defaultCurrentPage: 2, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');

      const indexBeforeClick = await el.callMethod('getCurrentPage');
      expect(indexBeforeClick).toEqual(2);

      await buttonList[3].click();

      await page.waitForChanges();

      const current = await el.callMethod('getCurrentPage');
      expect(current).toEqual(3);
    });

    it('switch current page from 2 to 4 by button click', async() => {
      await setup({ attributes: { defaultCurrentPage: 2, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');

      const indexBeforeClick = await el.callMethod('getCurrentPage');
      expect(indexBeforeClick).toEqual(2);

      await buttonList[4].click();

      await page.waitForChanges();

      const current = await el.callMethod('getCurrentPage');
      expect(current).toEqual(4);
    });

    it('switch current page from 2 to 5 by button click', async() => {
      await setup({ attributes: { defaultCurrentPage: 2, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');

      const indexBeforeClick = await el.callMethod('getCurrentPage');
      expect(indexBeforeClick).toEqual(2);

      await buttonList[5].click();

      await page.waitForChanges();

      const current = await el.callMethod('getCurrentPage');
      expect(current).toEqual(5);
    });

    it('should emit when current page changes', async() => {
      await setup({ attributes: { defaultCurrentPage: 2, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');

      const odsPaginationChanged = await el.spyOnEvent('odsPaginationChanged');

      await buttonList[5].click();

      await page.waitForChanges();

      const expected: OdsPaginationChangedEventDetail = {
        current: 5,
        itemPerPage: 10,
        oldCurrent: 2,
      };

      expect(odsPaginationChanged).toHaveReceivedEventDetail(expected);
      expect(odsPaginationChanged).toHaveReceivedEventTimes(1);
    });
  });

  describe('render with totalItems set', () => {
    let perPageSelectElement: E2EElement;

    it('should show all the default step', async() => {
      await setup({ attributes: { defaultCurrentPage: 1, totalItems: 500 } });

      perPageSelectElement = await page.find('osds-pagination >>> osds-select');
      expect(perPageSelectElement).toBeDefined();
      expect(perPageSelectElement.getAttribute('value')).toBe(ODS_PAGINATION_PER_PAGE_OPTIONS[0].toString());

      const perPageSelectItemElements = await perPageSelectElement.findAll('osds-select-option');
      expect(perPageSelectItemElements.length).toBe(ODS_PAGINATION_PER_PAGE_OPTIONS.length);

      const selectValues = perPageSelectItemElements
        .map((el) => el.getAttribute('value'))
        .map((attr) => parseInt(attr, 10));
      expect(selectValues).toEqual(ODS_PAGINATION_PER_PAGE_OPTIONS);
    });

    it('should emit when the itemPerPage attribute changes', async() => {
      await setup({ attributes: { defaultCurrentPage: 2, totalItems: 60 } });

      const odsPaginationItemPerPageChanged = await el.spyOnEvent('odsPaginationItemPerPageChanged');

      perPageSelectElement = await page.find('osds-pagination >>> osds-select');
      perPageSelectElement.setAttribute('value', 50);

      await page.waitForChanges();

      const expected: OdsPaginationItemPerPageChangedEventDetail = {
        current: 50,
        currentPage: 1,
        totalPages: 2,
      };

      expect(odsPaginationItemPerPageChanged).toHaveReceivedEventDetail(expected);
      expect(odsPaginationItemPerPageChanged).toHaveReceivedEventTimes(1);
    });
  });

  // FIXME seems like testing slot text content is not possible for now as assignedNodes function is not available
  //  (see https://github.com/ionic-team/stencil/issues/2830)
  describe('render with total items slots set', () => {
    const dummyTotalItems = 5;

    it('should show both slots and the totalItems number', async() => {
      await setup({
        attributes: { defaultCurrentPage: 1, totalItems: dummyTotalItems },
        html: `
          <span slot="before-total-items">of&nbsp;</span>
          <span slot="after-total-items">&nbsp;results</span>
        `,
      });

      const totalItemsTextElement = await page.find('osds-pagination >>> osds-text');
      expect(totalItemsTextElement).toBeDefined();
      expect(totalItemsTextElement.innerText).toBe(dummyTotalItems.toString());

      const textSlotElements = await totalItemsTextElement.findAll('slot');
      expect(textSlotElements.length).toBe(2);
    });
  });

  describe('per page change', () => {
    let pageItemElements: E2EElement[];

    it('should have a default step of 10', async() => {
      await setup({ attributes: { defaultCurrentPage: 1, totalItems: 20 } });

      pageItemElements = await page.findAll('osds-pagination >>> ul > li:not([class="arrows"])');
      expect(pageItemElements.length).toBe(2);
    });

    it('should adapt to default step of 25 if defaultItemsPerPage', async() => {
      await setup({ attributes: { defaultCurrentPage: 1, defaultItemsPerPage: 25 , totalItems: 30 } });

      pageItemElements = await page.findAll('osds-pagination >>> ul > li:not([class="arrows"])');
      expect(pageItemElements.length).toBe(2);
    });

    it('should change the totalPages according to the selected step', async() => {
      await setup({ attributes: { defaultCurrentPage: 1, totalItems: 30 } });

      pageItemElements = await page.findAll('osds-pagination >>> ul > li:not([class="arrows"])');
      expect(pageItemElements.length).toBe(3);

      const selectElement = await page.find('osds-pagination >>> osds-select');
      selectElement.setProperty('value', 20);
      await page.waitForChanges();

      pageItemElements = await page.findAll('osds-pagination >>> ul > li:not([class="arrows"])');
      expect(pageItemElements.length).toBe(2);
    });

    it('should not allow to go to next page if the current page is the last one', async() => {
      await setup({ attributes: { defaultCurrentPage: 2, totalItems: 30 } });

      const allArrows = await page.findAll('osds-pagination >>> .arrows >>> osds-button');

      allArrows[1].click();
      await page.waitForChanges();

      let current = await el.callMethod('getCurrentPage');
      expect(current).toBe(3);

      allArrows[1].click();
      await page.waitForChanges();

      current = await el.callMethod('getCurrentPage');
      expect(current).toBe(3);
    });

    it('should not allow to go to previous page if the current page is the first one', async() => {
      await setup({ attributes: { defaultCurrentPage: 2, totalItems: 30 } });

      await page.waitForChanges();

      const allArrows = await page.findAll('osds-pagination >>> .arrows >>> osds-button');

      allArrows[0].click();
      await page.waitForChanges();

      let current = await el.callMethod('getCurrentPage');
      await page.waitForChanges();
      expect(current).toBe(1);

      allArrows[0].click();
      await page.waitForChanges();

      current = await el.callMethod('getCurrentPage');
      await page.waitForChanges();
      expect(current).toBe(1);
    });
  });
});
