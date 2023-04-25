import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

import { OdsComponentAttributes2StringAttributes, OdsPaginationAttributes, odsPaginationDefaultAttributes, OdsPaginationChangedEventDetail } from '@ovhcloud/ods-core';
import { OdsStringAttributes2Str, OdsCreateAttributes, odsPaginationBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-pagination', () => {
  let page: E2EPage;
  let el: E2EElement;
  let divElement: E2EElement;
  let liPaginationPageButtonElement: E2EElement;
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
    divElement = await page.find('osds-pagination >>> div');
    liPaginationPageButtonElement = await page.find('osds-pagination >>> div > ul > li');
  }

  describe('defaults', () => {
    beforeEach(async () => {
      await setup({ attributes: { totalPages: 10, current: 4 } });
    });

    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });
    it('should have arrows', async () => {
      expect(liPaginationPageButtonElement).toHaveClass('arrows');
    });
    it('should have page list', async () => {
      expect(liPaginationPageButtonElement).not.toBeNull();
    });
    it('should have page list with osds-buttons', async () => {
      osdsButtonPaginationPageButtonElement = await page.find('osds-pagination >>> div > ul > li > osds-button');
      expect(osdsButtonPaginationPageButtonElement).not.toBeNull();
    });
    it('arrows should have osds-icons', async () => {
      let icons = await page.find('osds-pagination >>> div > ul > li > osds-button >>> osds-icons');
      expect(icons).not.toBeNull();
    });
  });

  describe('check the pagination structure', () => {
    it('< 1 > should have 3 li', async () => {
      await setup({ attributes: { current: 1, totalPages: 1 } });

      const linkList = await page.findAll('osds-pagination >>> li');
      expect(linkList.length).toBe(3);
    });

    it('< 1 2 > should have 4 li', async () => {
      await setup({ attributes: { current: 1, totalPages: 2 } });

      const linkList = await page.findAll('osds-pagination >>> li');
      expect(linkList.length).toBe(4);
    });

    it('< 1 2 3 > should have 5 li', async () => {
      await setup({ attributes: { current: 1, totalPages: 3 } });

      const linkList = await page.findAll('osds-pagination >>> li');
      expect(linkList.length).toBe(5);
    });

    it('< 1 2 3 4 > should have 6 li', async () => {
      await setup({ attributes: { current: 1, totalPages: 4 } });

      const linkList = await page.findAll('osds-pagination >>> li');
      expect(linkList.length).toBe(6);
    });

    it('< 1 2 3 4 5 > should have 7 li', async () => {
      await setup({ attributes: { current: 1, totalPages: 5 } });

      const linkList = await page.findAll('osds-pagination >>> li');
      expect(linkList.length).toBe(7);
    });

    it('< 1 2 3 4 5 6 > should have 8 li', async () => {
      await setup({ attributes: { current: 1, totalPages: 6 } });

      const linkList = await page.findAll('osds-pagination >>> li');
      expect(linkList.length).toBe(8);
    });

    it('< 1 2 3 4 5 … 7 > should have 8 li', async () => {
      await setup({ attributes: { current: 1, totalPages: 7 } });

      const linkList = await page.findAll('osds-pagination >>> li');
      expect(linkList.length).toBe(9);
    });

    it('< 1 2 3 4 5 … 8 > should have 8 li', async () => {
      await setup({ attributes: { current: 1, totalPages: 8 } });

      const linkList = await page.findAll('osds-pagination >>> li');
      expect(linkList.length).toBe(9);
    });

    it('< 1 … 4 5 6 … 21 > should have 9 li', async () => {
      await setup({ attributes: { current: 5, totalPages: 21 } });

      const linkList = await page.findAll('osds-pagination >>> li');
      expect(linkList.length).toBe(9);
    });

    it('< 1 … 4 5 6 … 9000 > should have 9 li', async () => {
      await setup({ attributes: { current: 5, totalPages: 9000 } });

      const linkList = await page.findAll('osds-pagination >>> li');
      expect(linkList.length).toBe(9);
    });
  });

  describe('should change page if we click', () => {
    it('current from 1 to 4 by button click', async () => {
      await setup({ attributes: { current: 2, totalPages: 5 } });

      const linkList = await page.findAll('osds-pagination >>> li');

      const indexBeforeClick = Number(el.getAttribute('current'));
      expect(indexBeforeClick).toEqual(2);

      await linkList[1].click();

      await page.waitForChanges();

      const current = Number(el.getAttribute('current'));
      expect(current).toEqual(1);
    });

    it('current from 2 to 3 by button click', async () => {
      await setup({ attributes: { current: 2, totalPages: 5 } });

      const linkList = await page.findAll('osds-pagination >>> li');

      const indexBeforeClick = Number(el.getAttribute('current'));
      expect(indexBeforeClick).toEqual(2);

      await linkList[3].click();

      await page.waitForChanges();

      const current = Number(el.getAttribute('current'));
      expect(current).toEqual(3);
    });

    it('current from 2 to 4 by button click', async () => {
      await setup({ attributes: { current: 2, totalPages: 5 } });

      const linkList = await page.findAll('osds-pagination >>> li');

      const indexBeforeClick = Number(el.getAttribute('current'));
      expect(indexBeforeClick).toEqual(2);

      await linkList[4].click();

      await page.waitForChanges();

      const current = Number(el.getAttribute('current'));
      expect(current).toEqual(4);
    });

    it('current from 2 to 5 by button click', async () => {
      await setup({ attributes: { current: 2, totalPages: 5 } });

      const linkList = await page.findAll('osds-pagination >>> li');

      const indexBeforeClick = Number(el.getAttribute('current'));
      expect(indexBeforeClick).toEqual(2);

      await linkList[5].click();

      await page.waitForChanges();

      const current = Number(el.getAttribute('current'));
      expect(current).toEqual(5);
    });
  });
});
