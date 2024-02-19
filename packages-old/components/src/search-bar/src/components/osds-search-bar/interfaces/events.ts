import type { OdsInputValueChangeEventDetail } from '../../../../../input/src';
import type { EventEmitter } from '@stencil/core';

interface OdsSearchBarEvent {
  /**
   * Event triggered on textarea blur
   */
  odsBlur: EventEmitter<void>;
  /**
   * Event triggered on textarea focus
   */
  odsFocus: EventEmitter<void>;
  /** Send event with the input value when click on button search ou with keyboard navigation */
  odsSearchSubmit: EventEmitter<{ optionValue: string; inputValue: string }>,
  /**
   * The textarea value changed
   */
  odsValueChange: EventEmitter<OdsInputValueChangeEventDetail>;
}

export type {
  OdsSearchBarEvent,
};
