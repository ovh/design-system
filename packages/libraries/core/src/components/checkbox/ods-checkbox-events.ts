import { OdsComponentEvents } from '../ods-component-events';
import { OdsCheckboxCheckedChangeEventDetail } from './ods-checkbox-checked-change-event-detail';
import { OdsCheckboxUpdatingChangeEventDetail } from './ods-checkbox-updating-change-event-detail';
import { OdsCheckboxFocusChangeEventDetail } from './ods-checkbox-focus-change-event-detail';

export interface OdsCheckboxEvents extends OdsComponentEvents {
  /**
   * Event triggered on checkbox blur
   * @see OdsCheckboxBehavior.onBlur
   * @see OdsCheckboxBehavior.emitBlur
   */
  odsBlur: OdsCheckboxFocusChangeEventDetail;
  /**
   * the checked state changed
   * @see OdsCheckboxBehavior.emitChecked
   */
  odsCheckedChange: OdsCheckboxCheckedChangeEventDetail;
  /**
   * Event triggered on checkbox focus
   * @see OdsCheckboxBehavior.onFocus
   * @see OdsCheckboxBehavior.emitFocus
   */
  odsFocus: OdsCheckboxFocusChangeEventDetail;
  /**
   * the checked state is being changed
   * @see OdsCheckboxBehavior.emitUpdating
   */
  odsUpdatingChange: OdsCheckboxUpdatingChangeEventDetail;
}
