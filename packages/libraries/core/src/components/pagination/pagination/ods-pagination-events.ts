import { OdsComponentEvents } from '../../ods-component-events';
import { OdsPaginationCurrentChangeEventDetail } from './ods-pagination-current-change-event-detail';

export interface OdsPaginationEvents extends OdsComponentEvents {
  /**
   * Emitted when the value has changed
   */
  odsCurrentChange: OdsPaginationCurrentChangeEventDetail;
  /**
   * Event triggered on select focus
   */
  odsFocus: void;
  /**
   * Event triggered on select blur
   */
  odsBlur: void;
}
