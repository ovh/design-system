import type { OdsValidityState } from '../validation/ods-validity-state';
import type { EventEmitter } from '@stencil/core';

interface OdsCommonFieldValueChangeEventDetail {
  validity: OdsValidityState;
  value: string | undefined | null;
  oldValue?: string | undefined | null;
}

type OdsCommonFieldValueChangeEvent = CustomEvent<OdsCommonFieldValueChangeEventDetail>;

interface OdsCommonFieldEvent {
  odsBlur?: EventEmitter<void>;
  odsClear?: EventEmitter<void>;
  odsFocus?: EventEmitter<void>;
  odsHide?: EventEmitter<void>;
  odsReset?: EventEmitter<void>;
  odsValueChange?: EventEmitter<OdsCommonFieldValueChangeEventDetail>;
}

export type {
  OdsCommonFieldEvent,
  OdsCommonFieldValueChangeEvent,
  OdsCommonFieldValueChangeEventDetail,
};
