import type { EventEmitter } from '@stencil/core';

interface OdsRadioCheckedChangeEventDetail {
  checked: boolean;
  value: string;
}

type OdsRadioCheckedChangeEvent = CustomEvent<OdsRadioCheckedChangeEventDetail>;

interface OdsRadioCheckingChangeEventDetail {
  checking: boolean;
  value: string;
}

type OdsRadioCheckingChangeEvent = CustomEvent<OdsRadioCheckingChangeEventDetail>;

interface OdsRadioEvent {
  /**
   * Event triggered on radio blur
   */
  odsBlur: EventEmitter<void>;
  /** the checked state changed */
  odsCheckedChange: EventEmitter<OdsRadioCheckedChangeEventDetail>;
  /** the checked state is being changed */
  odsCheckingChange: EventEmitter<OdsRadioCheckingChangeEventDetail>;
  /**
   * Event triggered on radio focus
   */
  odsFocus: EventEmitter<void>;
  /** the radio value changed */
  odsValueChange: EventEmitter<{ checked: boolean, value: string }>;
}

export {
  OdsRadioCheckedChangeEvent,
  OdsRadioCheckedChangeEventDetail,
  OdsRadioCheckingChangeEvent,
  OdsRadioCheckingChangeEventDetail,
  OdsRadioEvent,
};