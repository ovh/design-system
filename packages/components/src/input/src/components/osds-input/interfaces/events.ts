import type { OdsCommonFieldEvent, OdsCommonFieldValueChangeEvent as OdsInputValueChangeEvent, OdsCommonFieldValueChangeEventDetail as OdsInputValueChangeEventDetail } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';

interface OdsInputEvent extends OdsCommonFieldEvent {
  odsBlur: EventEmitter<void>;
  odsFocus: EventEmitter<void>;
  /** the input value changed */
  odsValueChange: EventEmitter<OdsInputValueChangeEventDetail>;
}

export type {
  OdsInputEvent,
  OdsInputValueChangeEvent,
  OdsInputValueChangeEventDetail,
};
