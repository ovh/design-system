import { type CountryCode, ParseError, getCountryCallingCode, isSupportedCountry, isValidPhoneNumber, parsePhoneNumberWithError, getExampleNumber as vendorGetExample } from 'libphonenumber-js';
import examples from 'libphonenumber-js/mobile/examples';
import { PHONE_NUMBER_COUNTRY_ISO_CODE, PHONE_NUMBER_COUNTRY_ISO_CODES, type PhoneNumberCountryIsoCode } from '../constants/phone-number-country-iso-code';
import { PHONE_NUMBER_COUNTRY_PRESET, type PhoneNumberCountryPreset } from '../constants/phone-number-country-preset';
import { PHONE_NUMBER_PARSING_ERROR } from '../constants/phone-number-error';

const FALLBACK_ISO_CODE = PHONE_NUMBER_COUNTRY_ISO_CODE.fr;

function formatPhoneNumber(value: string, isoCode?: PhoneNumberCountryIsoCode): { error?: string, phoneNumber?: string } {
  try {
    const phoneNumber = parsePhoneNumberWithError(value, isoCode?.toUpperCase() as CountryCode);
    return { phoneNumber: phoneNumber.number };
  } catch (error) {
    if (error instanceof ParseError) {
      return { error: mapErrorCode(error.message) };
    } else {
      throw error;
    }
  }
}

function getBrowserIsoCodes(languages: readonly string[]): string[] {
  return languages
    .map((language) => language.toLowerCase().split('-'))
    .flat()
    .filter((e, i, self) => i === self.indexOf(e));
}

function getCallingCode(isoCode: PhoneNumberCountryIsoCode): string {
  return getCountryCallingCode(isoCode.toUpperCase() as CountryCode);
}

function getCurrentIsoCode(isoCode?: PhoneNumberCountryIsoCode, languages?: readonly string[], countries?: PhoneNumberCountryIsoCode[] | PhoneNumberCountryPreset): PhoneNumberCountryIsoCode {
  if (isoCode && PHONE_NUMBER_COUNTRY_ISO_CODES.indexOf(isoCode as PHONE_NUMBER_COUNTRY_ISO_CODE) >= 0 && isSupportedCountry(isoCode.toUpperCase())) {
    return isoCode;
  }

  if (!languages) {
    return FALLBACK_ISO_CODE;
  }

  const isoCodeList = getIsoCodeList(countries);
  const defaultValue = countries === PHONE_NUMBER_COUNTRY_PRESET.all ? FALLBACK_ISO_CODE : (countries || [])[0];

  return getBrowserIsoCodes(languages).find((browserIsoCode): browserIsoCode is PhoneNumberCountryIsoCode => {
    return isoCodeList.indexOf(browserIsoCode as PHONE_NUMBER_COUNTRY_ISO_CODE) >= 0 &&
      isSupportedCountry(browserIsoCode.toUpperCase());
  }) || defaultValue;
}

function getExampleNumber(isoCode?: PhoneNumberCountryIsoCode): string {
  if (isoCode) {
    const phoneNumber = vendorGetExample(isoCode.toUpperCase() as CountryCode, examples);
    return phoneNumber?.formatNational() || '';
  }
  return '';
}

function getIsoCodeList(countries?: PhoneNumberCountryIsoCode[] | PhoneNumberCountryPreset): readonly PhoneNumberCountryIsoCode[] {
  if (!countries || countries === PHONE_NUMBER_COUNTRY_PRESET.all) {
    return PHONE_NUMBER_COUNTRY_ISO_CODES;
  }
  return countries;
}

function isValid(value: string, isoCode?: PhoneNumberCountryIsoCode): boolean {
  return isValidPhoneNumber(value, isoCode?.toUpperCase() as CountryCode);
}

// Map internal libphonenumber error code with ODS parsing error
function mapErrorCode(error: string): PHONE_NUMBER_PARSING_ERROR {
  switch (error) {
    case 'INVALID_COUNTRY':
      return PHONE_NUMBER_PARSING_ERROR.invalidCountry;
    case 'INVALID_LENGTH':
      return PHONE_NUMBER_PARSING_ERROR.invalidLength;
    case 'NOT_A_NUMBER':
      return PHONE_NUMBER_PARSING_ERROR.notANumber;
    case 'TOO_LONG':
      return PHONE_NUMBER_PARSING_ERROR.tooLong;
    case 'TOO_SHORT':
      return PHONE_NUMBER_PARSING_ERROR.tooShort;
    default:
      return PHONE_NUMBER_PARSING_ERROR.unknownError;
  }
}

export {
  FALLBACK_ISO_CODE,
  formatPhoneNumber,
  getCallingCode,
  getCurrentIsoCode,
  getExampleNumber,
  getIsoCodeList,
  isValid,
};
