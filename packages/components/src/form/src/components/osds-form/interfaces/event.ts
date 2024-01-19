import type { OdsInputValue } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';

interface OdsFormEvent {
    /**
     * Event trigger when the form is submit
     */
    odsOnSubmit: EventEmitter<Record<string, OdsInputValue>>;
    /**
     * Event trigger when the form is reset
     */
    odsOnReset: EventEmitter<void>,
}

export type {
  OdsFormEvent,
};
