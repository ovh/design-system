import { OdsPagination } from './ods-pagination';
import { OdsPaginationController } from './ods-pagination-controller';
import { OdsPaginationEvents } from './ods-pagination-events';
import { OdsPaginationMethods } from './ods-pagination-methods';
import { OdsPaginationChangedEventDetail } from './ods-pagination-current-change-event-detail';

export class OdsPaginationMock implements OdsPagination<OdsPaginationMethods, OdsPaginationEvents> {
  disabled = false;
  current = 1;
  total = 1;

  odsPaginationChanged!: OdsPaginationChangedEventDetail;

  controller: OdsPaginationController = jest.fn() as unknown as OdsPaginationController;

  setPageIndex = jest.fn();

  onKeyup = jest.fn();

  emitChange = jest.fn();
}
