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
  const pageList: OdsPaginationPageList = [];

  let startIndex = Math.max(pageSelected - DEFAULT_PAGE_OFFSET, 1);
  const endIndex = Math.min(startIndex + ELLIPSIS_THRESHOLD, totalPages);

  // If there are less than or equal to 5 pages, set all pages as active (all displayed).
  if (totalPages <= (MAX_VISIBLE_ITEMS - DEFAULT_PAGE_OFFSET)) {
    for (let i = 0; i < totalPages; i++) {
      pageList.push({ active: true, pageId: i + 1 });
    }
    return pageList;
  }

  // If there are more than 5 pages, set only some of them as active (not all displayed).
  if (totalPages - pageSelected < DEFAULT_PAGE_OFFSET) {
    // If selected page is one of the last pages of a long list, show the last 5 pages.
    startIndex = totalPages - ELLIPSIS_THRESHOLD;
  }

  if (startIndex > 1) {
    // If startIndex is not 1, show the first page as active.
    pageList.push({ active: true, pageId: 1 });
  }

  let adjustedStartIndex = startIndex;
  let adjustedEndIndex = endIndex;

  // get the start range of pages to show
  if (pageSelected > ELLIPSIS_THRESHOLD && pageSelected < totalPages - DEFAULT_PAGE_OFFSET) {
    adjustedStartIndex = Math.max(adjustedStartIndex, pageSelected - DEFAULT_PAGE_OFFSET + 1);
  }
  // get the end range of pages to show
  if (pageSelected < totalPages - (DEFAULT_PAGE_OFFSET + MINIMUM_PAGE) && pageSelected > MAX_VISIBLE_ITEMS - DEFAULT_PAGE_OFFSET) {
    adjustedEndIndex = Math.min(adjustedEndIndex, pageSelected + DEFAULT_PAGE_OFFSET - 1);
  }

  for (let i = adjustedStartIndex; i <= adjustedEndIndex; i++) {
    pageList.push({ active: true, pageId: i });
  }

  if (endIndex < totalPages) {
    // If endIndex is not equal to totalPages, show the last page as active.
    pageList.push({ active: true, pageId: totalPages + 1 });
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
