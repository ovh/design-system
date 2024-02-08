import type { EventEmitter } from '@stencil/core';

interface OdsDatepickerValueChangeEventDetail {
  name?: string;
  formattedValue?: string;
  oldValue?: Date | null;
  value?: Date | null;
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

export type {
  OdsDatepickerEvent,
  OdsDatepickerValueChangeEvent,
  OdsDatepickerValueChangeEventDetail,
};
