import type { OdsCommonFieldEvent, OdsCommonFieldValueChangeEventDetail } from '@ovhcloud/ods-common-core';

interface OdsDatepickerValueChangeEventDetail extends OdsCommonFieldValueChangeEventDetail {
  formattedValue?: string;
  oldValue?: Date | null;
  value: Date | null;
}

type OdsDatepickerValueChangeEvent = CustomEvent<OdsDatepickerValueChangeEventDetail>;

interface OdsDatepickerEvent extends OdsCommonFieldEvent<OdsDatepickerValueChangeEventDetail> {}

export type {
  OdsDatepickerEvent,
  OdsDatepickerValueChangeEvent,
  OdsDatepickerValueChangeEventDetail,
};
