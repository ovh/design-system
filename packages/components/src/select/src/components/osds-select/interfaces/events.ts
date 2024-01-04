import type { OsdsSelectOption } from '../../osds-select-option/osds-select-option';
import type { OdsCommonFieldEvent, OdsCommonFieldValueChangeEventDetail } from '@ovhcloud/ods-common-core';


interface OdsSelectValueChangeEventDetail extends OdsCommonFieldValueChangeEventDetail {
  selection: OsdsSelectOption | null,
}

type OdsSelectValueChangeEvent = CustomEvent<OdsSelectValueChangeEventDetail>;

type OdsSelectEvent = OdsCommonFieldEvent<OdsSelectValueChangeEventDetail>;

export type {
  OdsSelectEvent,
  OdsSelectValueChangeEvent,
  OdsSelectValueChangeEventDetail,
};
