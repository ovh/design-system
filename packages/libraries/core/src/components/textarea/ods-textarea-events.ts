import { OdsTextAreaValueChangeEventDetail } from './ods-textarea-value-change-event-detail';
import { OdsComponentEvents } from '../ods-component-events';


export interface OdsTextAreaEvents extends OdsComponentEvents {
  /** the textarea value changed */
  odsValueChange: OdsTextAreaValueChangeEventDetail;
  /**
   * Event triggered on textarea blur
   */
  odsBlur: void;
  /**
   * Event triggered on textarea focus
   */
   odsFocus: void;
}
