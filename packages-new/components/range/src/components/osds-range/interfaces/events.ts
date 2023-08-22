import type { OdsValidityState } from '@ovhcloud/ods-common-core';
import { OdsRangeValue } from './value';
import { EventEmitter } from '@stencil/core';

interface OdsRangeValueChangeEventDetail {
  validity: OdsValidityState;
  value?: OdsRangeValue;
  oldValue?: OdsRangeValue;
}

type OdsRangeValueChangeEvent = CustomEvent<OdsRangeValueChangeEventDetail>;

interface OdsRangeEvent {
  /** the range value changed */
  odsValueChange: EventEmitter<OdsRangeValueChangeEventDetail>;
}

export {
  OdsRangeValueChangeEventDetail,
  OdsRangeValueChangeEvent,
  OdsRangeEvent
}
