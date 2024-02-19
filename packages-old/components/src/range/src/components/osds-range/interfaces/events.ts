import type { OdsRangeValue } from './value';
import type { OdsValidityState } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';

interface OdsRangeValueChangeEventDetail {
  name?: string,
  validity: OdsValidityState;
  value?: OdsRangeValue;
  oldValue?: OdsRangeValue;
}

type OdsRangeValueChangeEvent = CustomEvent<OdsRangeValueChangeEventDetail>;

interface OdsRangeEvent {
  /**
   * Event triggered on textarea blur
   */
  odsBlur: EventEmitter<void>;
  /**
   * Event triggered on textarea focus
   */
  odsFocus: EventEmitter<void>;
  /** the range value changed */
  odsValueChange: EventEmitter<OdsRangeValueChangeEventDetail>;
}

export type {
  OdsRangeValueChangeEventDetail,
  OdsRangeValueChangeEvent,
  OdsRangeEvent,
};
