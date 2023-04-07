import { OdsComponentEvents } from '../../ods-component-events';
import { OdsTabsChangeEventDetail } from '../ods-tabs-change-event-detail';

export interface OdsTabsEvents extends OdsComponentEvents {
  odsTabsChanged: OdsTabsChangeEventDetail;
}
