import type { EventEmitter } from '@stencil/core';
import type { OdsInputValue } from '../ods-input-value';
import type { OdsCommonFieldValidityState } from './attributes';

interface OdsCommonFieldValueChangeEventDetail {
  name: string;
  oldValue?: OdsInputValue;
  validity?: OdsCommonFieldValidityState;
  value: OdsInputValue;
}

type OdsCommonFieldValueChangeEvent = CustomEvent<OdsCommonFieldValueChangeEventDetail>;

interface OdsCommonFieldEvent<T extends OdsCommonFieldValueChangeEventDetail = OdsCommonFieldValueChangeEventDetail> {
  odsBlur: EventEmitter<void>;
  odsClear: EventEmitter<void>;
  odsFocus: EventEmitter<void>;
  odsReset: EventEmitter<void>;
  odsValueChange: EventEmitter<T>;
}

export type {
  OdsCommonFieldEvent,
  OdsCommonFieldValueChangeEvent,
  OdsCommonFieldValueChangeEventDetail,
};
