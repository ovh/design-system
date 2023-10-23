import type {OsdsPagination} from '../osds-pagination';
import type {OdsPaginationPageList} from '../interfaces/attributes';

class OdsPaginationController {
  private component: OsdsPagination;

  constructor(component: OsdsPagination) {
    this.component = component;
  }

  /**
   * Compute the number of pages to display as it may vary if a total item to display is set.
   * @param itemPerPage - Number of item per page.
   * @returns The number of pages.
   */
  computeActualTotalPages(itemPerPage: number) {
    if (!this.component.totalItems) {
      return this.component.totalPages;
    }

    return Math.ceil(this.component.totalItems / (itemPerPage || 1));
  }

  /**
    Creates a list of pages for pagination with given number of total pages and selected page.
    @param totalPages - Total number of pages.
    @param pageSelected - Selected page number.
    @returns An array of objects representing pages with an array of the size of the number of pages and 'active' (displayed page) properties.
  */
  createPageList(totalPages: number, pageSelected: number) {
    const pageList: OdsPaginationPageList = [];

    // Create initial pageList with 'active' property set to false for each page.
    for (let i = 1; i <= totalPages; i++) {
      pageList.push({active: false});
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

  // click events

  handlePreviousClick(page: number) {
    this.setPageIndex(page - 1);
  }

  handleNextClick(page: number) {
    this.setPageIndex(page + 1);
  }

  handlePageClick(page: number) {
    this.setPageIndex(page);
  }

  // key events

  handlePreviousKeyDown(event: KeyboardEvent, page: number) {
    if (this.component.current > 1) {
      this.onKeyDown(event, page - 1);
    }
  }

  handleNextKeyDown(event: KeyboardEvent, page: number, pageList: OdsPaginationPageList) {
    if (this.component.current < pageList.length) {
      this.onKeyDown(event, page + 1);
    }
  }

  handlePageKeyDown(event: KeyboardEvent, page: number) {
    this.onKeyDown(event, page);
  }

  onKeyDown(event: KeyboardEvent, page: number) {
    if (event.code === 'Enter' || event.code === 'Space') {
      event.preventDefault(); // to avoid space scrolling the page
      this.setPageIndex(page);
    }
  }

  // setPageIndex set the page
  setPageIndex(current: number) {
    this.component.current = current;
  }
}

export {
  OdsPaginationController,
};
