import type { OdsPaginationChangedEventDetail, OdsPaginationItemPerPageChangedEventDetail } from '../../src/interfaces/events';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-pagination navigation', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();
    await page.setContent(content);
    el = await page.find('ods-pagination');
  }

  it('should change page when clicking on buttons', async() => {
    await setup('<ods-pagination default-current-page="2" total-pages="5"></ods-pagination>');
    const buttonList = await page.findAll('ods-pagination >>> li >>> ods-button');
    await buttonList[1].click();
    await page.waitForChanges();
    const current = await el.callMethod('getCurrentPage');
    expect(current).toEqual(1);
  });

  it('should emit event when current page changes', async() => {
    await setup('<ods-pagination default-current-page="2" total-pages="5"></ods-pagination>');
    const buttonList = await page.findAll('ods-pagination >>> li >>> ods-button');
    const odsChange = await el.spyOnEvent('odsChange');

    // There is the "previous" arrow that also counts as a button
    await buttonList[4].click();
    await page.waitForChanges();

    const expected: OdsPaginationChangedEventDetail = {
      current: 4,
      itemPerPage: 10,
      oldCurrent: 2,
    };

    expect(odsChange).toHaveReceivedEventDetail(expected);
    expect(odsChange).toHaveReceivedEventTimes(1);
  });

  it('should not allow to go to next page if current page is the last one', async() => {
    await setup('<ods-pagination default-current-page="3" total-items="30"></ods-pagination>');
    const allArrows = await page.findAll('ods-pagination >>> .ods-pagination__list__arrow');
    await allArrows[1].click();
    await page.waitForChanges();
    let current = await el.callMethod('getCurrentPage');
    expect(current).toBe(3);

    await allArrows[1].click();
    await page.waitForChanges();
    current = await el.callMethod('getCurrentPage');
    expect(current).toBe(3);
  });

  it('should change items per page and emit event', async() => {
    await setup('<ods-pagination default-current-page="2" total-items="60"></ods-pagination>');
    const perPageSelectElement = await page.find('ods-pagination >>> ods-select');
    const odsItemPerPageChange = await el.spyOnEvent('odsItemPerPageChange');
    perPageSelectElement.setAttribute('value', '50');
    await page.waitForChanges();

    const expected: OdsPaginationItemPerPageChangedEventDetail = {
      current: 50,
      currentPage: 1,
      totalPages: 2,
    };

    expect(odsItemPerPageChange).toHaveReceivedEventDetail(expected);
    expect(odsItemPerPageChange).toHaveReceivedEventTimes(1);
  });

  it('should change items per page and emit event even in large items scenario', async() => {
    await setup('<ods-pagination default-current-page="2" total-items="6000000"></ods-pagination>');
    const perPageSelectElement = await page.find('ods-pagination >>> ods-select');
    const odsItemPerPageChange = await el.spyOnEvent('odsItemPerPageChange');
    perPageSelectElement.setAttribute('value', '50');
    await page.waitForChanges();

    const expected: OdsPaginationItemPerPageChangedEventDetail = {
      current: 50,
      currentPage: 1,
      totalPages: 120000,
    };

    expect(odsItemPerPageChange).toHaveReceivedEventDetail(expected);
    expect(odsItemPerPageChange).toHaveReceivedEventTimes(1);
  });
});
