import { OdsComponentEvents } from '../ods-component-events';
import { EventEmitter } from '@stencil/core';

export interface OdsFileEvents extends OdsComponentEvents {
    odsFilesChange: EventEmitter<File[]>;
    odsCancel: EventEmitter<File>
    odsRejectedFile: EventEmitter<File>;
    odsMaxFilesReached: EventEmitter<void>;
}
