import { OdsComponentEvents } from '../../ods-component-events';
import { EventEmitter } from '@stencil/core';

export interface OdsFileItemEvents extends OdsComponentEvents {
    cancel: EventEmitter<void>;
}
