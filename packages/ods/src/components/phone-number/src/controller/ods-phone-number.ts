import { type PhoneNumber, PhoneNumberFormat, type PhoneNumberUtil } from 'google-libphonenumber';
import { ODS_PHONE_NUMBER_COUNTRY_ISO_CODE, ODS_PHONE_NUMBER_COUNTRY_ISO_CODES, type OdsPhoneNumberCountryIsoCode } from '../constants/phone-number-country-iso-code';
import { ODS_PHONE_NUMBER_COUNTRY_PRESET, type OdsPhoneNumberCountryPreset } from '../constants/phone-number-country-preset';
import { ODS_PHONE_NUMBER_LOCALE, ODS_PHONE_NUMBER_LOCALES, type OdsPhoneNumberLocale } from '../constants/phone-number-locale';
import countriesTranslationEn from '../i18n/countries-en.json';
import countriesTranslationFr from '../i18n/countries-fr.json';

type TranslatedCountryMap = Map<OdsPhoneNumberCountryIsoCode, { isoCode: OdsPhoneNumberCountryIsoCode , name: string, phoneCode?: number }>;

function formatPhoneNumber(value: string | null, hasError: boolean, isoCode: OdsPhoneNumberCountryIsoCode | undefined, phoneUtils: PhoneNumberUtil): string | null {
  if (hasError) {
    return null;
  }

  const phoneNumber = parsePhoneNumber(value, isoCode, phoneUtils);

  if (!phoneNumber) {
    return null;
  }

  return phoneUtils.format(phoneNumber, PhoneNumberFormat.E164);
}

function getBrowserIsoCodes<T>(): T[] {
  return navigator.language?.split('-').map<T>((browserIsoCode) => browserIsoCode.toLowerCase() as T);
}

function getCurrentIsoCode(isoCode: OdsPhoneNumberCountryIsoCode | undefined, defaultValue?: OdsPhoneNumberCountryIsoCode): OdsPhoneNumberCountryIsoCode {
  if (isoCode && ODS_PHONE_NUMBER_COUNTRY_ISO_CODES.indexOf(isoCode as ODS_PHONE_NUMBER_COUNTRY_ISO_CODE) >= 0) {
    return isoCode;
  }

  return getBrowserIsoCodes<ODS_PHONE_NUMBER_COUNTRY_ISO_CODE>().filter((browserIsoCode) => {
    return ODS_PHONE_NUMBER_COUNTRY_ISO_CODES.indexOf(browserIsoCode) >= 0;
  })[0] || defaultValue || ODS_PHONE_NUMBER_COUNTRY_ISO_CODE.fr;
}

function getCurrentLocale(locale?: OdsPhoneNumberLocale): OdsPhoneNumberLocale {
  if (locale && ODS_PHONE_NUMBER_LOCALES.indexOf(locale as ODS_PHONE_NUMBER_LOCALE) >= 0) {
    return locale;
  }

  return getBrowserIsoCodes<ODS_PHONE_NUMBER_LOCALE>().filter((browserIsoCode) => {
    return ODS_PHONE_NUMBER_LOCALES.indexOf(browserIsoCode) >= 0;
  })[0] || ODS_PHONE_NUMBER_LOCALE.fr;
}

function getNationalPhoneNumberExample(isoCode: OdsPhoneNumberCountryIsoCode | undefined, phoneUtils: PhoneNumberUtil): string {
  const exampleNumber = getPhoneNumberExample(isoCode, phoneUtils);
  return exampleNumber && phoneUtils.format(exampleNumber, PhoneNumberFormat.NATIONAL) || '';
}

function getPhoneNumberExample(isoCode: OdsPhoneNumberCountryIsoCode | undefined, phoneUtils: PhoneNumberUtil): PhoneNumber | undefined {
  return isoCode && phoneUtils.getExampleNumber(isoCode);
}

function getTranslatedCountries(locale: OdsPhoneNumberLocale): { isoCode: string, name: string }[] {
  switch (locale) {
    case ODS_PHONE_NUMBER_LOCALE.en:
      return countriesTranslationEn;
    case ODS_PHONE_NUMBER_LOCALE.fr:
    default:
      return countriesTranslationFr;
  }
}

function getTranslatedCountryMap(locale: OdsPhoneNumberLocale, phoneUtils: PhoneNumberUtil): TranslatedCountryMap {
  return getTranslatedCountries(locale).reduce((map, country) => {
    map.set(country.isoCode, {
      phoneCode: phoneUtils.getExampleNumber(country.isoCode)?.getCountryCode(),
      ...country,
    });
    return map;
  }, new Map());
}

function getValidityState(hasError: boolean, inputValidity?: ValidityState): ValidityState {
  return {
    badInput: inputValidity?.badInput || false,
    customError: inputValidity?.customError || false,
    patternMismatch: inputValidity?.patternMismatch || false,
    rangeOverflow: inputValidity?.rangeOverflow || false,
    rangeUnderflow: inputValidity?.rangeUnderflow || false,
    stepMismatch: inputValidity?.stepMismatch || false,
    tooLong: inputValidity?.tooLong || false,
    tooShort: inputValidity?.tooShort || false,
    typeMismatch: inputValidity?.typeMismatch || false,
    valid: inputValidity?.valid === false ? inputValidity?.valid : !hasError,
    valueMissing: inputValidity?.valueMissing || false,
  };
}

function isValidPhoneNumber(phoneNumber: string | null, isoCode: OdsPhoneNumberCountryIsoCode | undefined, phoneUtils: PhoneNumberUtil): boolean {
  if (!phoneNumber || !isoCode) {
    return true;
  }

  const number = parsePhoneNumber(phoneNumber, isoCode, phoneUtils);

  if (!number) {
    return false;
  }
  return phoneUtils.isPossibleNumber(number) && phoneUtils.isValidNumberForRegion(number, isoCode);
}

function parseCountries(countries: OdsPhoneNumberCountryIsoCode[] | OdsPhoneNumberCountryPreset | string | undefined, phoneUtils: PhoneNumberUtil): OdsPhoneNumberCountryIsoCode[] {
  let parsedCountries: OdsPhoneNumberCountryIsoCode[] = [];

  if (typeof countries === 'string') {
    if (countries === ODS_PHONE_NUMBER_COUNTRY_PRESET.all) {
      parsedCountries = [...ODS_PHONE_NUMBER_COUNTRY_ISO_CODES];
    } else {
      try {
        parsedCountries = JSON.parse(countries);
      } catch (err) {
        console.warn('[OdsPhoneNumber] countries string could not be parsed.');
        parsedCountries = [];
      }
    }
  } else {
    parsedCountries = countries || [];
  }

  return parsedCountries.filter((country) => !!phoneUtils.getCountryCodeForRegion(country));
}

function parsePhoneNumber(phoneNumber: string | null, isoCode: OdsPhoneNumberCountryIsoCode | undefined, phoneUtils: PhoneNumberUtil): PhoneNumber | null {
  if (!phoneNumber || !isoCode) {
    return null;
  }

  try {
    return phoneUtils.parseAndKeepRawInput(phoneNumber, isoCode);
  } catch {
    return null;
  }
}

function setFormValue(internals: ElementInternals, value: string | null): void {
  internals.setFormValue(value?.toString() ?? '');
}

function sortCountriesByName(countryCodes: OdsPhoneNumberCountryIsoCode[], countriesMap: TranslatedCountryMap): OdsPhoneNumberCountryIsoCode[] {
  return countryCodes.sort((isoCodeA, isoCodeB) => {
    const nameA = countriesMap?.has(isoCodeA) && countriesMap.get(isoCodeA)!.name;
    const nameB = countriesMap?.has(isoCodeB) && countriesMap.get(isoCodeB)!.name;

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}

export {
  type TranslatedCountryMap,
  formatPhoneNumber,
  getCurrentIsoCode,
  getCurrentLocale,
  getNationalPhoneNumberExample,
  getTranslatedCountryMap,
  getValidityState,
  isValidPhoneNumber,
  parseCountries,
  parsePhoneNumber,
  setFormValue,
  sortCountriesByName,
};
