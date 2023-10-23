import type {EventEmitter} from '@stencil/core';
import type {OdsValidityState} from '@ovhcloud/ods-common-core';

interface OdsInputValueChangeEventDetail {
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
