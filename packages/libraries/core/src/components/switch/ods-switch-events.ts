import { OdsComponentEvents } from '../ods-component-events';
import { OdsSwitchChangedEventDetail } from './ods-switch-change-event-detail';

export interface OdsSwitchEvents extends OdsComponentEvents {
    /**
     * Event triggered on switch toggle
     */
    odsSwitchChanged: OdsSwitchChangedEventDetail;
}
