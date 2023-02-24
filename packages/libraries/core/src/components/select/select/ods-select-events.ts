import { OdsComponentEvents } from '../../ods-component-events';
import { OdsSelectValueChangeEventDetail } from './ods-select-value-change-event-detail';

export interface OdsSelectEvents extends OdsComponentEvents {
  /**
   * Emitted when the value has changed
   */
  odsValueChange: OdsSelectValueChangeEventDetail;
  /**
   * Event triggered on select focus
   */
  odsFocus: void;
  /**
   * Event triggered on select blur
   */
  odsBlur: void;
}
