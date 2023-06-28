import { OdsComponentController } from '../ods-component-controller';
import { OdsPagination } from './ods-pagination';
import { OdsPaginationPageList } from './ods-pagination-page-list';

/**
 * common controller logic for pagination component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsPaginationController extends OdsComponentController<OdsPagination> {
  constructor(component: OdsPagination) {
    super(component);
  }

  /**
    Creates a list of pages for pagination with given number of total pages and selected page.
    @param total - Total number of pages.
    @param pageSelected - Selected page number.
    @returns An array of objects representing pages with an array of the size of the number of pages and 'active' (displayed page) properties.
  */
  createPageList(total: number, pageSelected: number) {
    const pageList: OdsPaginationPageList = [];

    // Create initial pageList with 'active' property set to false for each page.
    for (let i = 1; i <= total; i++) {
      pageList.push({ active: false });
    }

    let startIndex = Math.max(pageSelected - 2, 1);
    const endIndex = Math.min(startIndex + 4, total);

    // If there are less than or equal to 5 pages, set all pages as active (all displayed).
    if (total <= 5) {
      for (let i = 0; i < pageList.length; i++) {
        pageList[i].active = true;
      }
    } else {
      // If there are more than 5 pages, set only some of them as active (not all displayed).
      if (total - pageSelected < 2) {
        // If selected page is one of the last pages of a long list, show the last 5 pages.
        startIndex = total - 4;
      }

      for (let i = startIndex; i <= endIndex; i++) {
        // If i is two pages away from the selected page, skip it if it is between 4 and total-2.
        if (i == pageSelected - 2 && pageSelected < total - 1 && pageSelected > 4 && pageSelected < total - 2) {
          continue;
        }
        // If i is two pages away from the selected page, skip it if it is greater than 5.
        if (i == pageSelected + 2 && pageSelected < total - 3 && i > 5) {
          continue;
        }
        pageList[i - 1].active = true;
      }

      if (startIndex > 1) {
        // If startIndex is not 1, show the first page as active.
        pageList[0].active = true;
      }

      if (endIndex < total) {
        // If endIndex is not equal to total, show the last page as active.
        pageList[total - 1].active = true;
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
    if (this.component.current > 1) this.onKeyDown(event, page - 1);
  }
  handleNextKeyDown(event: KeyboardEvent, page: number, pageList: OdsPaginationPageList) {
    if (this.component.current < pageList.length) this.onKeyDown(event, page + 1);
  }
  handlePageKeyDown(event: KeyboardEvent, page: number) {
    this.onKeyDown(event, page);
  }
  onKeyDown(event: KeyboardEvent, page: number) {
    if (event.keyCode === 13 || event.keyCode === 32) this.setPageIndex(page);
  }

  // setPageIndex set the page

  setPageIndex(current: number) {
    this.component.current = current;
  }
}
