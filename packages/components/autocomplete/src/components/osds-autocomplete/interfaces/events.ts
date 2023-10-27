import type { EventEmitter } from '@stencil/core';

interface OdsAutocompleteEvent {
  /** Triggered on blur */
  odsAutocompleteBlur: EventEmitter<void>;
  /** Triggered on focus */
  odsAutocompleteFocus: EventEmitter<void>;
}

export {
  OdsAutocompleteEvent,
};
