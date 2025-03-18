import type { OdsPaginationPageList } from '../interfaces/pagination-page-list';

const DEFAULT_PAGE_OFFSET = 2;
const ELLIPSIS_THRESHOLD = 4;
const MAX_VISIBLE_ITEMS = 7;
const MINIMUM_PAGE = 1;

function computeActualTotalPages(itemPerPage: number, totalItems: number | undefined, totalPages: number): number {
  if (!totalItems) {
    return totalPages;
  }

  return Math.ceil(totalItems / (itemPerPage || 1));
}

function createPageList(totalPages: number, pageSelected: number): OdsPaginationPageList {
  const pageList: OdsPaginationPageList = Array.from({ length: totalPages }, () => ({ active: false }));

  let startIndex = Math.max(pageSelected - DEFAULT_PAGE_OFFSET, 1);
  const endIndex = Math.min(startIndex + ELLIPSIS_THRESHOLD, totalPages);

  // If there are less than or equal to 5 pages, set all pages as active (all displayed).
  if (totalPages <= (MAX_VISIBLE_ITEMS - DEFAULT_PAGE_OFFSET)) {
    for (let i = 0; i < pageList.length; i++) {
      pageList[i].active = true;
    }
  } else {
    // If there are more than 5 pages, set only some of them as active (not all displayed).
    if (totalPages - pageSelected < DEFAULT_PAGE_OFFSET) {
      // If selected page is one of the last pages of a long list, show the last 5 pages.
      startIndex = totalPages - ELLIPSIS_THRESHOLD;
    }

    for (let i = startIndex; i <= endIndex; i++) {
      // If i is two pages away from the selected page, skip it if it is between 4 and totalPages-2.
      if (i == pageSelected - DEFAULT_PAGE_OFFSET && pageSelected < totalPages - 1 && pageSelected > ELLIPSIS_THRESHOLD && pageSelected < totalPages - DEFAULT_PAGE_OFFSET) {
        continue;
      }
      // If i is two pages away from the selected page, skip it if it is greater than 5.
      if (i == pageSelected + DEFAULT_PAGE_OFFSET && pageSelected < totalPages - (DEFAULT_PAGE_OFFSET + MINIMUM_PAGE) && i > (MAX_VISIBLE_ITEMS - DEFAULT_PAGE_OFFSET)) {
        continue;
      }
      pageList[i - 1].active = true;
    }

    if (startIndex > 1) {
      // If startIndex is not 1, show the first page as active.
      pageList[0].active = true;
    }

    if (endIndex < totalPages) {
      // If endIndex is not equal to totalPages, show the last page as active.
      pageList[totalPages - 1].active = true;
    }
  }

  return pageList;
}

function getActualPage(defaultCurrentPage: number, actualTotalPages: number, current: number): number {
  if (defaultCurrentPage > actualTotalPages) {
    return actualTotalPages;
  }

  if (defaultCurrentPage < 1) {
    return 1;
  }

  return defaultCurrentPage || current;
}

export {
  DEFAULT_PAGE_OFFSET,
  ELLIPSIS_THRESHOLD,
  MAX_VISIBLE_ITEMS,
  MINIMUM_PAGE,
  computeActualTotalPages,
  createPageList,
  getActualPage,
};
