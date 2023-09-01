import type { ODS_COUNTRY_ISO_CODE } from "@ovhcloud/ods-common-core";

interface OdsPhoneNumberAttribute {
  /** Ability to clear the phone number value */
  clearable?: boolean;
  /** A specific subset of countries to display in the select instead of the whole list  */
  countries?: ODS_COUNTRY_ISO_CODE[] | 'all';
  disabled?: boolean;
  /** Indicates if the phone number shows error or not */
  error?: boolean;
  /** Select value */
  isoCode?: ODS_COUNTRY_ISO_CODE;
  /** This is the locale to use to translate the countries names */
  locale?: ODS_COUNTRY_ISO_CODE;
  /** Current value of the phone number */
  value: string | null;
}

export {
  OdsPhoneNumberAttribute,
};
