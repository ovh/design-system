import { OdsComponentEvents } from '../ods-component-events';

export interface OdsMessageEvents extends OdsComponentEvents {
    /** 
     * Event triggered on removable icon click
     */
     odsRemoveClick: void;
}
