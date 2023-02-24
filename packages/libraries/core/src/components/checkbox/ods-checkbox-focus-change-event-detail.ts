import { OdsFocusChangeEventDetail } from '../ods-focus-change-event-detail';

/**
 * event detail of checkbox when focusing and blurring
 */
export interface OdsCheckboxFocusChangeEventDetail extends OdsFocusChangeEventDetail {
  value: string;
}
