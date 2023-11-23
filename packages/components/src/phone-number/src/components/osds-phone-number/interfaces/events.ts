import type { ODS_COUNTRY_ISO_CODE, OdsCommonFieldEvent, OdsCommonFieldValueChangeEventDetail } from '@ovhcloud/ods-common-core';

interface OdsPhoneNumberValueChangeEventDetail extends OdsCommonFieldValueChangeEventDetail {
  isoCode?: ODS_COUNTRY_ISO_CODE
}

interface OdsPhoneNumberEvent extends OdsCommonFieldEvent<OdsPhoneNumberValueChangeEventDetail> {}

export type {
  OdsPhoneNumberEvent,
  OdsPhoneNumberValueChangeEventDetail,
};
