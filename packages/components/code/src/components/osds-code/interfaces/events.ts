import type {EventEmitter} from '@stencil/core';

interface OdsCodeEvent {
  /**
   * Event triggered on code content copy
   */
  odsCodeCopy: EventEmitter<void>;
}

export {
  OdsCodeEvent,
};
