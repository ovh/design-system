import { OdsComponentController } from '../ods-component-controller';
import { OdsPagination } from './ods-pagination';

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
    @param totalPages - Total number of pages.
    @param pageSelected - Selected page number.
    @returns An array of objects representing pages with 'id' (page number) and 'active' (displayed page) properties.
  */
  createPageList(totalPages: number, pageSelected: number) {
    const pageList: Array<{ active: boolean; id: number }> = [];

    // Create initial pageList with 'active' property set to false for each page.
    for (let i = 1; i <= totalPages; i++) {
      pageList.push({ id: i, active: false });
    }

    let startIndex = Math.max(pageSelected - 2, 1);
    let endIndex = Math.min(startIndex + 4, totalPages);

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
      if (totalPages > 5 && endIndex - startIndex < 4) {
        // If there are fewer than 4 pages between startIndex and endIndex, adjust them.
        if (startIndex === 1) {
          endIndex = Math.min(startIndex + 5, totalPages);
        } else if (endIndex === totalPages) {
          startIndex = Math.max(endIndex - 5, 1);
        }
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
}
