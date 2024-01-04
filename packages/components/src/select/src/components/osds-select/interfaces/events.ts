import type { OsdsSelectOption } from '../../osds-select-option/osds-select-option';
import type { EventEmitter } from '@stencil/core';
import type { OdsCommonFieldEvent, OdsCommonFieldValueChangeEventDetail } from '@ovhcloud/ods-common-core';


interface OdsSelectValueChangeEventDetail extends OdsCommonFieldValueChangeEventDetail {
  selection: OsdsSelectOption | null,
}

type OdsSelectValueChangeEvent = CustomEvent<OdsSelectValueChangeEventDetail>;

type OdsSelectEvent = Omit<OdsCommonFieldEvent, 'odsValueChange' | 'odsHide'> & {
  odsValueChange: EventEmitter<OdsSelectValueChangeEventDetail>;
}

export type {
  OdsSelectEvent,
  OdsSelectValueChangeEvent,
  OdsSelectValueChangeEventDetail,
};
