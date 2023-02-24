import { OdsComponentEvents } from '../../ods-component-events';
import { OdsSelectOptionClickEventDetail } from './ods-select-option-click-event-detail';

export interface OdsSelectOptionEvents extends OdsComponentEvents {
  /** the select value changed */
  odsSelectOptionClick: OdsSelectOptionClickEventDetail;
}
