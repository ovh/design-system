import type { EventEmitter } from '@stencil/core';

interface OdsDatepickerValueChangeEventDetail {
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
  odsDatepickerValueChange: EventEmitter<OdsDatepickerValueChangeEventDetail>;
}

export {
  OdsDatepickerEvent,
  OdsDatepickerValueChangeEvent,
  OdsDatepickerValueChangeEventDetail,
};
