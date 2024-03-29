import type { OdsInputValueChangeEventDetail } from '../../../../../input/src';
import type { EventEmitter } from '@stencil/core';

interface OdsPasswordEvent {
  /**
   * Event triggered on textarea blur
   */
  odsBlur: EventEmitter<void>;
  /**
   * Event triggered on textarea focus
   */
  odsFocus: EventEmitter<void>;
  /**
   * The textarea value changed
   */
  odsValueChange: EventEmitter<OdsInputValueChangeEventDetail>;
}

export type {
  OdsPasswordEvent,
};
