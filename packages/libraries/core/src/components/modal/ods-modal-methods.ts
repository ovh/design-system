import { OdsComponentMethods } from '../ods-component-methods';

export interface OdsModalMethods extends OdsComponentMethods {
    // Methods

    /** close the modal */
    close(): void;

    /** open the modal */
    open(): void;
}
