import type { OdsValidityState } from '../validation/ods-validity-state';
import type { EventEmitter } from '@stencil/core';
import type { OdsInputValue } from '../ods-input-value';

interface OdsCommonFieldValueChangeEventDetail {
  name: string;
  validity: OdsValidityState;
  value: OdsInputValue;
  oldValue?: OdsInputValue;
}

type OdsCommonFieldValueChangeEvent = CustomEvent<OdsCommonFieldValueChangeEventDetail>;

interface OdsCommonFieldEvent {
  odsBlur: EventEmitter<void>;
  odsClear: EventEmitter<void>;
  odsFocus: EventEmitter<void>;
  odsHide: EventEmitter<void>;
  odsReset: EventEmitter<void>;
  odsValueChange: EventEmitter<OdsCommonFieldValueChangeEventDetail>;
}

export type {
  OdsCommonFieldEvent,
  OdsCommonFieldValueChangeEvent,
  OdsCommonFieldValueChangeEventDetail,
};
