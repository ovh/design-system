import type { ODS_COUNTRY_ISO_CODE } from '@ovhcloud/ods-common-core';
import type { OdsInputValueChangeEventDetail } from '../../../../../input/src';
import type { EventEmitter } from '@stencil/core';

interface OdsPhoneNumberValueChangeEventDetail extends OdsInputValueChangeEventDetail {
  isoCode?: ODS_COUNTRY_ISO_CODE
}

interface OdsPhoneNumberEvent {
  /**
   * Event triggered on textarea blur
   */
  odsBlur: EventEmitter<void>;
  /**
   * Event triggered on textarea focus
   */
  odsFocus: EventEmitter<void>;
  /** Send event with the input & the selected isoCode when the select value or the input value change */
  odsValueChange: EventEmitter<OdsPhoneNumberValueChangeEventDetail>,
}

export {
  OdsPhoneNumberEvent,
  OdsPhoneNumberValueChangeEventDetail,
};
