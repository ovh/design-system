import type {EventEmitter} from '@stencil/core';

interface OdsSearchBarEvent {
    /** Send event with the input value when click on button search ou with keyboard navigation */
    odsSearchSubmit: EventEmitter<{ optionValue: string; inputValue: string }>,
}

export {
  OdsSearchBarEvent,
};