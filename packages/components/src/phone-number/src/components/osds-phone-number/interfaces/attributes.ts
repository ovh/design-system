import type { ODS_PHONE_NUMBER_COUNTRY_PRESET } from '../constants/phone-number-countries';
import type { ODS_COUNTRY_ISO_CODE, ODS_LOCALE, OdsCommonFieldAttribute } from '@ovhcloud/ods-common-core';

interface OdsPhoneNumberAttribute extends Omit<OdsCommonFieldAttribute, 'step'> {
  /** A specific subset of countries to display in the select instead of the whole list  */
  countries?: ODS_COUNTRY_ISO_CODE[] | ODS_PHONE_NUMBER_COUNTRY_PRESET | string;
  /** Select value */
  isoCode?: ODS_COUNTRY_ISO_CODE;
  /** This is the locale to use to translate the countries names */
  locale?: ODS_LOCALE;
}

export type {
  OdsPhoneNumberAttribute,
};
