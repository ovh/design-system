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

  createPageList(totalPages: number, pageSelected: number) {
    let pageList = [];
    for (let i = 1; i <= totalPages; i++) {
      pageList.push({ id: i, active: false });
    }

    let startIndex = Math.max(pageSelected - 2, 1);
    let endIndex = Math.min(startIndex + 4, totalPages);

    if (totalPages <= 5) {
      for (let i = 0; i < pageList.length; i++) {
        pageList[i].active = true;
      }
    } else {
      // >6
      if (totalPages - pageSelected < 2) {
        // last pages of a long list
        startIndex = totalPages - 4;
      }
      if (totalPages > 5 && endIndex - startIndex < 4) {
        if (startIndex === 1) {
          endIndex = Math.min(startIndex + 5, totalPages);
        } else if (endIndex === totalPages) {
          startIndex = Math.max(endIndex - 5, 1);
        }
      }

      for (let i = startIndex; i <= endIndex; i++) {
        if (i == pageSelected - 2 && pageSelected < totalPages - 1 && pageSelected > 4 && pageSelected < totalPages - 2) {
          continue;
        }
        if (i == pageSelected + 2 && pageSelected < totalPages - 3 && i > 5) {
          continue;
        }
        pageList[i - 1].active = true;
      }

      if (startIndex > 1) {
        pageList[0].active = true;
      }

      if (endIndex < totalPages) {
        pageList[totalPages - 1].active = true;
      }
    }
    return pageList;
  }
}
