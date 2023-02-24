import { OdsComponentEvents } from '../ods-component-events';
import { OdsRadioCheckedChangeEventDetail } from '../radio-group/ods-radio-checked-change-event-detail';
import { OdsRadioCheckingChangeEventDetail } from '../radio-group/ods-radio-checking-change-event-detail';

export interface OdsRadioEvents extends OdsComponentEvents {
  /** the radio value changed */
  odsValueChange: { checked: boolean, value: string };
  /** the checked state changed */
  odsCheckedChange: OdsRadioCheckedChangeEventDetail;
  /** the checked state is being changed */
  odsCheckingChange: OdsRadioCheckingChangeEventDetail;
  /**
   * Event triggered on radio focus
   */
  odsFocus: void;
  /**
   * Event triggered on radio blur
   */
  odsBlur: void;
}
