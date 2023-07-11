import { OdsComponentEvents } from '../ods-component-events';

export interface OdsSearchBarEvents extends OdsComponentEvents {
    /** Send event with the input value when click on button search ou with keyboard navigation */
    odsSearchSubmit: string
}
