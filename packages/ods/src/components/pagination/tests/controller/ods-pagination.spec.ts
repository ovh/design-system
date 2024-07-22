import { computeActualTotalPages, createPageList, getActualPage } from '../../src/controller/ods-pagination';

describe('ods-pagination controller', () => {
  beforeEach(jest.clearAllMocks);

  describe('computeActualTotalPages', () => {
    it('should return totalPages if totalItems is undefined', () => {
      const itemPerPage = 10;
      const totalItems = undefined;
      const totalPages = 5;

      const result = computeActualTotalPages(itemPerPage, totalItems, totalPages);

      expect(result).toBe(totalPages);
    });

    it('should return the correct number of total pages when totalItems is defined', () => {
      const itemPerPage = 10;
      const totalItems = 95;
      const totalPages = 5;

      const result = computeActualTotalPages(itemPerPage, totalItems, totalPages);

      expect(result).toBe(Math.ceil(totalItems / itemPerPage));
    });

    it('should handle itemPerPage being 0 or undefined', () => {
      const itemPerPage = 0;
      const totalItems = 50;
      const totalPages = 5;

      const result = computeActualTotalPages(itemPerPage, totalItems, totalPages);

      expect(result).toBe(Math.ceil(totalItems / 1));
    });

    it('should handle totalItems being 0', () => {
      const itemPerPage = 10;
      const totalItems = 0;
      const totalPages = 5;

      const result = computeActualTotalPages(itemPerPage, totalItems, totalPages);

      expect(result).toBe(totalPages);
    });

    it('should handle large numbers of totalItems and itemPerPage correctly', () => {
      const itemPerPage = 1000;
      const totalItems = 100000;
      const totalPages = 100;

      const result = computeActualTotalPages(itemPerPage, totalItems, totalPages);

      expect(result).toBe(Math.ceil(totalItems / itemPerPage));
    });

    it('should handle small numbers of totalItems and itemPerPage correctly', () => {
      const itemPerPage = 2;
      const totalItems = 5;
      const totalPages = 3;

      const result = computeActualTotalPages(itemPerPage, totalItems, totalPages);

      expect(result).toBe(Math.ceil(totalItems / itemPerPage));
    });
  });

  describe('createPageList', () => {
    it('should return all pages active when totalPages is less than or equal to MAX_VISIBLE_ITEMS', () => {
      const totalPages = 5;
      const pageSelected = 1;

      const result = createPageList(totalPages, pageSelected);

      expect(result).toHaveLength(totalPages);

      expect(result[0].active).toBe(true);
      expect(result[1].active).toBe(true);
      expect(result[2].active).toBe(true);
      expect(result[3].active).toBe(true);
      expect(result[4].active).toBe(true);
    });

    it('should activate appropriate pages when totalPages is greater than MAX_VISIBLE_ITEMS and pageSelected is in the middle', () => {
      const totalPages = 10;
      const pageSelected = 5;

      const result = createPageList(totalPages, pageSelected);

      expect(result).toHaveLength(totalPages);

      expect(result[0].active).toBe(true);
      expect(result[1].active).toBe(false);
      expect(result[2].active).toBe(false);
      expect(result[3].active).toBe(true);
      expect(result[4].active).toBe(true);
      expect(result[5].active).toBe(true);
      expect(result[6].active).toBe(false);
      expect(result[7].active).toBe(false);
      expect(result[8].active).toBe(false);
      expect(result[9].active).toBe(true);
    });

    it('should activate the first page and the range around pageSelected when it is near the start', () => {
      const totalPages = 10;
      const pageSelected = 3;

      const result = createPageList(totalPages, pageSelected);

      expect(result).toHaveLength(totalPages);

      expect(result[0].active).toBe(true);
      expect(result[1].active).toBe(true);
      expect(result[2].active).toBe(true);
      expect(result[3].active).toBe(true);
      expect(result[4].active).toBe(true);
      expect(result[5].active).toBe(false);
      expect(result[6].active).toBe(false);
      expect(result[7].active).toBe(false);
      expect(result[8].active).toBe(false);
      expect(result[9].active).toBe(true);
    });

    it('should activate the last page and the range around pageSelected when it is near the end', () => {
      const totalPages = 10;
      const pageSelected = 8;

      const result = createPageList(totalPages, pageSelected);

      expect(result).toHaveLength(totalPages);

      expect(result[0].active).toBe(true);
      expect(result[1].active).toBe(false);
      expect(result[2].active).toBe(false);
      expect(result[3].active).toBe(false);
      expect(result[4].active).toBe(false);
      expect(result[5].active).toBe(true);
      expect(result[6].active).toBe(true);
      expect(result[7].active).toBe(true);
      expect(result[8].active).toBe(true);
      expect(result[9].active).toBe(true);
    });

    it('should handle a small number of totalPages correctly', () => {
      const totalPages = 3;
      const pageSelected = 2;

      const result = createPageList(totalPages, pageSelected);

      expect(result).toHaveLength(totalPages);

      expect(result[0].active).toBe(true);
      expect(result[1].active).toBe(true);
      expect(result[2].active).toBe(true);
    });

    it('should handle a large number of totalPages correctly', () => {
      const totalPages = 100;
      const pageSelected = 50;

      const result = createPageList(totalPages, pageSelected);

      expect(result).toHaveLength(totalPages);

      expect(result[0].active).toBe(true);
      expect(result[1].active).toBe(false);
      expect(result[47].active).toBe(false);
      expect(result[48].active).toBe(true);
      expect(result[49].active).toBe(true);
      expect(result[50].active).toBe(true);
      expect(result[51].active).toBe(false);
      expect(result[98].active).toBe(false);
      expect(result[99].active).toBe(true);
    });
  });

  describe('getActualPage', () => {
    it('should return actualTotalPages if defaultCurrentPage is greater than actualTotalPages', () => {
      const defaultCurrentPage = 10;
      const actualTotalPages = 5;
      const current = 1;

      const result = getActualPage(defaultCurrentPage, actualTotalPages, current);

      expect(result).toBe(actualTotalPages);
    });

    it('should return 1 if defaultCurrentPage is less than 1', () => {
      const defaultCurrentPage = 0;
      const actualTotalPages = 5;
      const current = 1;

      const result = getActualPage(defaultCurrentPage, actualTotalPages, current);

      expect(result).toBe(1);
    });

    it('should return defaultCurrentPage if it is within the valid range', () => {
      const defaultCurrentPage = 3;
      const actualTotalPages = 5;
      const current = 1;

      const result = getActualPage(defaultCurrentPage, actualTotalPages, current);

      expect(result).toBe(defaultCurrentPage);
    });

    it('should handle defaultCurrentPage being 1 when actualTotalPages is also 1', () => {
      const defaultCurrentPage = 1;
      const actualTotalPages = 1;
      const current = 3;

      const result = getActualPage(defaultCurrentPage, actualTotalPages, current);

      expect(result).toBe(defaultCurrentPage);
    });
  });
});
