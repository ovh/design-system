import type { OdsCommonFieldValueChangeEventDetail, ODS_COUNTRY_ISO_CODE } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';

interface OdsPhoneNumberValueChangeEventDetail extends OdsCommonFieldValueChangeEventDetail {
  isoCode?: ODS_COUNTRY_ISO_CODE
}

interface OdsPhoneNumberEvent {
  /** Send event with the input & the selected isoCode when the select value or the input value change */
  odsValueChange: EventEmitter<OdsPhoneNumberValueChangeEventDetail>,
}

export {
  OdsPhoneNumberEvent,
  OdsPhoneNumberValueChangeEventDetail,
};
