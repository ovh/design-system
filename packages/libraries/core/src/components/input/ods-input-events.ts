import { OdsInputValueChangeEventDetail } from './ods-input-value-change-event-detail';
import { OdsComponentEvents } from '../ods-component-events';


export interface OdsInputEvents extends OdsComponentEvents {
  /** the input value changed */
  odsValueChange: OdsInputValueChangeEventDetail;
  /**
   * Event triggered on input blur
   */
  odsInputFocus: void;
  odsInputBlur: void;
}
