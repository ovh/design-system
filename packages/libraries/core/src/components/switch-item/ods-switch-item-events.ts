import { OdsComponentEvents } from '../ods-component-events';

export interface OdsSwitchItemEvents extends OdsComponentEvents {
    odsSwitchItemClick: { value: string };
}
