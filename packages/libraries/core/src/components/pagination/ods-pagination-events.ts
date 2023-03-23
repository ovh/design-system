import { OdsComponentEvents } from '../ods-component-events';
import { OdsPaginationCurrentChangeEventDetail } from './ods-pagination-current-change-event-detail';

export interface OdsPaginationEvents extends OdsComponentEvents {
  /**
   * Emitted when the value has changed
   */
  odsCurrentChange: OdsPaginationCurrentChangeEventDetail;
}
