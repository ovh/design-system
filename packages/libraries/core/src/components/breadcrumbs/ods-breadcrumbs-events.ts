import { OdsComponentEvents } from '../ods-component-events';
import { OdsBreadcrumbsCurrentChangeEventDetail } from './osds-breadrcrumbs-change-event-detail';
export interface OdsBreadcrumbsEvents extends OdsComponentEvents {
  /**
   * Emitted when the value has changed
   */
  odsCurrentChange: OdsBreadcrumbsCurrentChangeEventDetail;
  /**
   * Event triggered on select focus
   */
  odsFocus: void;
  /**
   * Event triggered on select blur
   */
  odsBlur: void;
}
