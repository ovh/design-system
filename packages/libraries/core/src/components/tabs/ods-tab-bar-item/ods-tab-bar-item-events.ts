import { OdsComponentEvents } from '../../ods-component-events';
import { OdsTabItemSelectEventDetail } from '../ods-tab-item-select-event-detail';

export interface OdsTabBarItemEvents extends OdsComponentEvents {
  odsTabItemSelectEvent: OdsTabItemSelectEventDetail;
}
