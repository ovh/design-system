import { OdsPagination } from './ods-pagination';
import { OdsPaginationController } from './ods-pagination-controller';
import { OdsPaginationEvents } from './ods-pagination-events';
import { OdsPaginationMethods } from './ods-pagination-methods';
import { OdsPaginationCurrentChangeEventDetail } from './ods-pagination-current-change-event-detail';

export class OdsPaginationMock implements OdsPagination<OdsPaginationMethods, OdsPaginationEvents> {
  disabled: boolean = false;
  defaultCurrent?: number;
  current: number = 1;
  totalPages: number = 1;

  odsCurrentChange!: OdsPaginationCurrentChangeEventDetail;

  controller: OdsPaginationController = jest.fn() as unknown as OdsPaginationController;

  setPageIndex = jest.fn();

  onKeyup = jest.fn();

  emitChange = jest.fn();
}
