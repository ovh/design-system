import { OdsComponentEvents } from '../ods-component-events';
import { OdsPaginationChangedEventDetail } from './ods-pagination-current-change-event-detail';

export interface OdsPaginationEvents extends OdsComponentEvents {
  /**
   * Emitted when the value has changed
   */
  odsPaginationChanged: OdsPaginationChangedEventDetail;
}
