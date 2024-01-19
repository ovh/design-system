import type { OdsCommonFieldEvent, OdsCommonFieldValueChangeEventDetail } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';

interface OdsDatepickerValueChangeEventDetail extends OdsCommonFieldValueChangeEventDetail{
  formattedValue?: string;
  oldValue?: Date | null;
  value: Date | null;
}

type OdsDatepickerValueChangeEvent = CustomEvent<OdsDatepickerValueChangeEventDetail>;

interface OdsDatepickerEvent extends Omit<OdsCommonFieldEvent, 'odsValueChange'> {
  odsValueChange: EventEmitter<OdsDatepickerValueChangeEventDetail>;
}

export type {
  OdsDatepickerEvent,
  OdsDatepickerValueChangeEvent,
  OdsDatepickerValueChangeEventDetail,
};
