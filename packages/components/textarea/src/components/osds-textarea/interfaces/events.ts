import type { OdsTextAreaValidityState } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';

interface OdsTextAreaValueChangeEvent {
  oldValue?: string | null;
  validity?: OdsTextAreaValidityState;
  value?: string | null;
}

interface OdsTextAreaEvent {
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
  odsValueChange: EventEmitter<OdsTextAreaValueChangeEvent>;
}

export {
  OdsTextAreaEvent,
  OdsTextAreaValueChangeEvent,
};
