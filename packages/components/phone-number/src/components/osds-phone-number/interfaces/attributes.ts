import type { ODS_COUNTRY_ISO_CODE, ODS_LOCALE } from "@ovhcloud/ods-common-core";
import { ODS_PHONE_NUMBER_COUNTRY_PRESET } from "../constants/phone-number-countries";

interface OdsPhoneNumberAttribute {
  /** Ability to clear the phone number value */
  clearable?: boolean;
  /** A specific subset of countries to display in the select instead of the whole list  */
  countries?: ODS_COUNTRY_ISO_CODE[] | ODS_PHONE_NUMBER_COUNTRY_PRESET | string;
  disabled?: boolean;
  /** Indicates if the phone number shows error or not */
  error?: boolean;
  /** Select value */
  isoCode?: ODS_COUNTRY_ISO_CODE;
  /** This is the locale to use to translate the countries names */
  locale?: ODS_LOCALE;
  /** Current value of the phone number */
  value: string | null;
}

export {
  OdsPhoneNumberAttribute,
};
