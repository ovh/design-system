import type { OdsPaginationPageList } from '../interfaces/pagination-page-list';

function computeActualTotalPages(itemPerPage: number, totalItems: number | undefined, totalPages: number): number {
  if (!totalItems) {
    return totalPages;
  }

  return Math.ceil(totalItems / (itemPerPage || 1));
}

function createPageList(totalPages: number, pageSelected: number): OdsPaginationPageList {
  const pageList: OdsPaginationPageList = [];

  // Create initial pageList with 'active' property set to false for each page.
  for (let i = 1; i <= totalPages; i++) {
    pageList.push({ active: false });
  }

  let startIndex = Math.max(pageSelected - 2, 1);
  const endIndex = Math.min(startIndex + 4, totalPages);

  // If there are less than or equal to 5 pages, set all pages as active (all displayed).
  if (totalPages <= 5) {
    for (let i = 0; i < pageList.length; i++) {
      pageList[i].active = true;
    }
  } else {
    // If there are more than 5 pages, set only some of them as active (not all displayed).
    if (totalPages - pageSelected < 2) {
      // If selected page is one of the last pages of a long list, show the last 5 pages.
      startIndex = totalPages - 4;
    }

    for (let i = startIndex; i <= endIndex; i++) {
      // If i is two pages away from the selected page, skip it if it is between 4 and totalPages-2.
      if (i == pageSelected - 2 && pageSelected < totalPages - 1 && pageSelected > 4 && pageSelected < totalPages - 2) {
        continue;
      }
      // If i is two pages away from the selected page, skip it if it is greater than 5.
      if (i == pageSelected + 2 && pageSelected < totalPages - 3 && i > 5) {
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
  } else if (defaultCurrentPage < 1) {
    return 1;
  } else {
    return defaultCurrentPage || current;
  }
}

export {
  computeActualTotalPages,
  createPageList,
  getActualPage,
};