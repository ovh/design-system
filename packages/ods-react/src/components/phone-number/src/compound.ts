import { type PhoneNumberProp, PhoneNumber as PhoneNumberRoot } from './components/phone-number/PhoneNumber';
import { PhoneNumberControl, type PhoneNumberControlProp } from './components/phone-number-control/PhoneNumberControl';
import { PhoneNumberCountryList, type PhoneNumberCountryListProp } from './components/phone-number-country-list/PhoneNumberCountryList';

const PhoneNumber = {
  Control: PhoneNumberControl,
  CountryList: PhoneNumberCountryList,
  Root: PhoneNumberRoot,
};

export { PhoneNumber };
export type { PhoneNumberProp, PhoneNumberControlProp, PhoneNumberCountryListProp };
export { PHONE_NUMBER_COUNTRY_ISO_CODE, PHONE_NUMBER_COUNTRY_ISO_CODES, type PhoneNumberCountryIsoCode } from './constants/phone-number-country-iso-code';
export { PHONE_NUMBER_COUNTRIES_PRESET, PHONE_NUMBER_COUNTRIES_PRESETS, type PhoneNumberCountriesPreset } from './constants/phone-number-country-preset';
export { PHONE_NUMBER_PARSING_ERROR, PHONE_NUMBER_PARSING_ERRORS, type PhoneNumberParsingError } from './constants/phone-number-error';
export { PHONE_NUMBER_I18N } from './constants/phone-number-i18n';
export { type PhoneNumberCountryChangeDetail, type PhoneNumberValueChangeDetail } from './contexts/usePhoneNumber';
