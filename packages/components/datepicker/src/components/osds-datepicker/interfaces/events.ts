import type { EventEmitter } from '@stencil/core';
import type { OdsValidityState } from '@ovhcloud/ods-common-core';

interface OdsDatepickerValueChangeEventDetail {
  validity: OdsValidityState;
  value: Date | undefined | null;
  oldValue?: Date | undefined | null;
}

type OdsDatepickerValueChangeEvent = CustomEvent<OdsDatepickerValueChangeEventDetail>;

interface OdsDatepickerEvent {
  /** Triggered on blur */
  odsDatepickerBlur: EventEmitter<void>;
  /** Triggered on focus */
  odsDatepickerFocus: EventEmitter<void>;
  /** Triggered on value change */
  odsValueChange: EventEmitter<OdsDatepickerValueChangeEventDetail>;
}

export {
  OdsDatepickerEvent,
  OdsDatepickerValueChangeEvent,
  OdsDatepickerValueChangeEventDetail,
};
