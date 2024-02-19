import type { OdsValidityState } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';

interface OdsInputValueChangeEventDetail {
  name?: string,
  validity: OdsValidityState;
  value: string | undefined | null;
  oldValue?: string | undefined | null;
}

type OdsInputValueChangeEvent = CustomEvent<OdsInputValueChangeEventDetail>;

interface OdsInputEvent {
  odsInputBlur: EventEmitter<void>;
  odsInputFocus: EventEmitter<void>;
  /** the input value changed */
  odsValueChange: EventEmitter<OdsInputValueChangeEventDetail>;
}

export {
  OdsInputEvent,
  OdsInputValueChangeEvent,
  OdsInputValueChangeEventDetail,
};
