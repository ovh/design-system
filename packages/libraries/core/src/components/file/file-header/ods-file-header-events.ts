import { OdsComponentEvents } from '../../ods-component-events';
import { EventEmitter } from '@stencil/core';

export interface OdsFileHeaderEvents extends OdsComponentEvents {
    filesSelected: EventEmitter<File[]>;
}
