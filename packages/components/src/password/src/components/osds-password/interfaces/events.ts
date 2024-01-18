import type { OdsCommonFieldEvent, OdsCommonFieldValueChangeEvent, OdsCommonFieldValueChangeEventDetail } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';

interface OdsPasswordEvent extends OdsCommonFieldEvent {
  odsHide: EventEmitter<void>;
}

export type {
  OdsPasswordEvent,
  OdsCommonFieldValueChangeEvent as OdsPasswordValueChangeEvent,
  OdsCommonFieldValueChangeEventDetail as OdsPasswordValueChangeEventDetail,
};
