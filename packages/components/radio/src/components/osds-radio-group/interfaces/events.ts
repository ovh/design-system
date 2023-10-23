import type {EventEmitter} from '@stencil/core';

interface OdsRadioGroupValueChangeEventDetail {
  newValue: string,
  previousValue: string
}

type OdsRadioGroupValueChangeEvent = CustomEvent<OdsRadioGroupValueChangeEventDetail>;

interface OdsRadioGroupEvent {
  odsDisabledChange: EventEmitter<{ value: boolean }>;
  /**
   * Emitted when the value has changed.
   */
  odsValueChange: EventEmitter<{ newValue?: string, previousValue?: string }>;
}

export {
  OdsRadioGroupEvent,
  OdsRadioGroupValueChangeEvent,
  OdsRadioGroupValueChangeEventDetail,
};