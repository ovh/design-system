import type {
  OdsCommonFieldEvent,
  OdsCommonFieldValueChangeEvent,
  OdsCommonFieldValueChangeEventDetail,
} from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';

interface OdsInputEvent extends OdsCommonFieldEvent {
  odsHide: EventEmitter<void>;
}

export type {
  OdsInputEvent,
  OdsCommonFieldValueChangeEvent as OdsInputValueChangeEvent,
  OdsCommonFieldValueChangeEventDetail as OdsInputValueChangeEventDetail,
};
