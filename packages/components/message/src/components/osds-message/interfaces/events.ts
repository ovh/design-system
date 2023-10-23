import type {EventEmitter} from '@stencil/core';

interface OdsMessageEvent {
    /**
     * Event triggered on removable icon click
     */
    odsRemoveClick: EventEmitter<void>;
}

export {
  OdsMessageEvent,
};
