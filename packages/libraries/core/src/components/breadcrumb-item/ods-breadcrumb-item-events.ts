import { OdsComponentEvents } from '../ods-component-events';
import { OdsBreadcrumbItemCurrentChangeEventDetail } from './ods-breadcrumb-item-change-event-detail';
export interface OdsBreadcrumbItemEvents extends OdsComponentEvents {
  /**
   * Emitted when the value has changed
   */
  odsCurrentChange: OdsBreadcrumbItemCurrentChangeEventDetail;
  /**
   * Event triggered on select focus
   */
  odsFocus: void;
  /**
   * Event triggered on select blur
   */
  odsBlur: void;
}
