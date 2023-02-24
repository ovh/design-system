import { OdsRangeValueChangeEventDetail } from './ods-range-value-change-event-detail';
import { OdsComponentEvents } from '../ods-component-events';

export interface OdsRangeEvents extends OdsComponentEvents {
  /** the range value changed */
  odsValueChange: OdsRangeValueChangeEventDetail;
}
