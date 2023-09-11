import type { EventEmitter } from '@stencil/core';
import type { ODS_COUNTRY_ISO_CODE } from '@ovhcloud/ods-common-core';
import type { OdsInputValueChangeEventDetail } from '@ovhcloud/ods-component-input';

interface OdsInputPhoneNumberValueChangeEventDetail extends OdsInputValueChangeEventDetail {
  isoCode?: ODS_COUNTRY_ISO_CODE
}

interface OdsPhoneNumberEvent {
  /** Send event with the input & the selected isoCode when le select value or the input value change */
  odsValueChange: EventEmitter<OdsInputPhoneNumberValueChangeEventDetail>,
}

export {
  OdsPhoneNumberEvent,
  OdsInputPhoneNumberValueChangeEventDetail
}