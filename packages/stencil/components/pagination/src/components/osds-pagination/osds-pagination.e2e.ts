import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

import { OdsComponentAttributes2StringAttributes, OdsPaginationAttributes, odsPaginationDefaultAttributes, OdsPaginationChangedEventDetail } from '@ovhcloud/ods-core';
import { OdsStringAttributes2Str, OdsCreateAttributes, odsPaginationBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-pagination', () => {
  let page: E2EPage;
  let el: E2EElement;
  let osdsButtonPaginationPageButtonElement: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsPaginationAttributes>; html?: string; onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsPaginationAttributes = OdsCreateAttributes(attributes, odsPaginationBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPaginationAttributes>(minimalAttributes, odsPaginationDefaultAttributes);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-pagination ${OdsStringAttributes2Str(stringAttributes)}>
      </osds-pagination>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-pagination');
  }

  describe('defaults', () => {
    beforeEach(async () => {
      await setup({ attributes: { totalPages: 10, current: 4 } });
    });

    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have arrows, right and left', async () => {
      // we list the buttons of arrows
      const allArrows = await page.findAll('osds-pagination >>> .arrows >>> osds-button');
      expect(allArrows).toBeTruthy();
      // we should have two arrows, right and left
      expect(allArrows.length).toBe(2);
    });

    it('should have page list with osds-buttons', async () => {
      osdsButtonPaginationPageButtonElement = await page.find('osds-pagination >>> ul > li > osds-button');
      expect(osdsButtonPaginationPageButtonElement).not.toBeNull();
    });

    it('arrows should have osds-icons', async () => {
      const icons = await page.find('osds-pagination >>> ul > li > osds-button >>> osds-icons');
      expect(icons).not.toBeNull();
    });
  });

  describe('check the pagination structure', () => {
    it('should not render if total pages is less than 2', async () => {
      await setup({ attributes: { current: 1, totalPages: 1 } });
      expect(el.shadowRoot.innerHTML).toBe('');
    });

    it('< 1 2 > should have 4 osds-button', async () => {
      await setup({ attributes: { current: 1, totalPages: 2 } });

      const buttonList = await page.findAll('osds-pagination >>> li > osds-button');
      expect(buttonList.length).toBe(4);
    });

    it('< 1 2 3 > should have 5 osds-button', async () => {
      await setup({ attributes: { current: 1, totalPages: 3 } });

      const buttonList = await page.findAll('osds-pagination >>> li > osds-button');
      expect(buttonList.length).toBe(5);
    });

    it('< 1 2 3 4 > should have 6 osds-button', async () => {
      await setup({ attributes: { current: 1, totalPages: 4 } });

      const buttonList = await page.findAll('osds-pagination >>> li > osds-button');
      expect(buttonList.length).toBe(6);
    });

    it('< 1 2 3 4 5 > should have 7 osds-button', async () => {
      await setup({ attributes: { current: 1, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li > osds-button');
      expect(buttonList.length).toBe(7);
    });

    it('< 1 2 3 4 5 6 > should have 8 osds-button', async () => {
      await setup({ attributes: { current: 1, totalPages: 6 } });

      const buttonList = await page.findAll('osds-pagination >>> li > osds-button');
      expect(buttonList.length).toBe(8);
    });

    it('< 1 2 3 4 5 … 7 > should have 9 osds-button', async () => {
      await setup({ attributes: { current: 1, totalPages: 7 } });

      const buttonList = await page.findAll('osds-pagination >>> li > osds-button');
      expect(buttonList.length).toBe(9);
    });

    it('< 1 2 3 4 5 … 8 > should have 9 osds-button', async () => {
      await setup({ attributes: { current: 1, totalPages: 8 } });

      const buttonList = await page.findAll('osds-pagination >>> li > osds-button');
      expect(buttonList.length).toBe(9);
    });

    it('< 1 … 4 5 6 … 21 > should have 9 osds-button', async () => {
      await setup({ attributes: { current: 5, totalPages: 21 } });

      const buttonList = await page.findAll('osds-pagination >>> li > osds-button');
      expect(buttonList.length).toBe(9);
    });

    it('< 1 … 4 5 6 … 9000 > should have 9 osds-button', async () => {
      await setup({ attributes: { current: 5, totalPages: 9000 } });

      const buttonList = await page.findAll('osds-pagination >>> li > osds-button');
      expect(buttonList.length).toBe(9);
    });
  });

  describe('should change page if we click', () => {
    it('current from 2 to 1 by button click', async () => {
      await setup({ attributes: { current: 2, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li > osds-button');

      const indexBeforeClick = Number(el.getAttribute('current'));
      expect(indexBeforeClick).toEqual(2);

      await buttonList[1].click();

      await page.waitForChanges();

      const current = Number(el.getAttribute('current'));
      expect(current).toEqual(1);
    });

    it('current from 2 to 3 by button click', async () => {
      await setup({ attributes: { current: 2, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li > osds-button');

      const indexBeforeClick = Number(el.getAttribute('current'));
      expect(indexBeforeClick).toEqual(2);

      await buttonList[3].click();

      await page.waitForChanges();

      const current = Number(el.getAttribute('current'));
      expect(current).toEqual(3);
    });

    it('current from 2 to 4 by button click', async () => {
      await setup({ attributes: { current: 2, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li > osds-button');

      const indexBeforeClick = Number(el.getAttribute('current'));
      expect(indexBeforeClick).toEqual(2);

      await buttonList[4].click();

      await page.waitForChanges();

      const current = Number(el.getAttribute('current'));
      expect(current).toEqual(4);
    });

    it('current from 2 to 5 by button click', async () => {
      await setup({ attributes: { current: 2, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li > osds-button');

      const indexBeforeClick = Number(el.getAttribute('current'));
      expect(indexBeforeClick).toEqual(2);

      await buttonList[5].click();

      await page.waitForChanges();

      const current = Number(el.getAttribute('current'));
      expect(current).toEqual(5);
    });

    it('should emit when the attribute changes', async () => {
      await setup({ attributes: { current: 2, totalPages: 5 } });

      const odsPaginationChanged = await el.spyOnEvent('odsPaginationChanged');

      el.setAttribute('current', 5);

      await page.waitForChanges();

      const expected: OdsPaginationChangedEventDetail = {
        oldCurrent: 2,
        current: 5,
      };

      expect(odsPaginationChanged).toHaveReceivedEventDetail(expected);
      expect(odsPaginationChanged).toHaveReceivedEventTimes(1);
    });
  });
});
