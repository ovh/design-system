import type { OdsInput } from '../../../input/src';
import { type PhoneNumber, PhoneNumberFormat, type PhoneNumberUtil } from 'google-libphonenumber';
import { setInternalsValidityFromOdsComponent } from '../../../../utils/dom';
import { ODS_PHONE_NUMBER_COUNTRY_ISO_CODE, ODS_PHONE_NUMBER_COUNTRY_ISO_CODES, type OdsPhoneNumberCountryIsoCode } from '../constants/phone-number-country-iso-code';
import { ODS_PHONE_NUMBER_COUNTRY_PRESET, type OdsPhoneNumberCountryPreset } from '../constants/phone-number-country-preset';
import { ODS_PHONE_NUMBER_LOCALE, ODS_PHONE_NUMBER_LOCALES, type OdsPhoneNumberLocale } from '../constants/phone-number-locale';
import countriesTranslationDe from '../i18n/countries-de';
import countriesTranslationEn from '../i18n/countries-en';
import countriesTranslationEs from '../i18n/countries-es';
import countriesTranslationFr from '../i18n/countries-fr';
import countriesTranslationIt from '../i18n/countries-it';
import countriesTranslationNl from '../i18n/countries-nl';
import countriesTranslationPl from '../i18n/countries-pl';
import countriesTranslationPt from '../i18n/countries-pt';

type TranslatedCountryMap = Map<OdsPhoneNumberCountryIsoCode, { isoCode: OdsPhoneNumberCountryIsoCode , name: string, phoneCode?: number }>;
const VALUE_DEFAULT_VALUE = null;

function formatPhoneNumber(value: string | null, isoCode: OdsPhoneNumberCountryIsoCode | undefined, phoneUtils: PhoneNumberUtil): string | null {
  if (value === '') {
    return '';
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

  return getBrowserIsoCodes<ODS_PHONE_NUMBER_COUNTRY_ISO_CODE>().find((browserIsoCode) => {
    return ODS_PHONE_NUMBER_COUNTRY_ISO_CODES.indexOf(browserIsoCode) >= 0;
  }) || defaultValue || ODS_PHONE_NUMBER_COUNTRY_ISO_CODE.fr;
}

function getCurrentLocale(locale?: OdsPhoneNumberLocale): OdsPhoneNumberLocale {
  if (locale && ODS_PHONE_NUMBER_LOCALES.indexOf(locale as ODS_PHONE_NUMBER_LOCALE) >= 0) {
    return locale;
  }

  return getBrowserIsoCodes<ODS_PHONE_NUMBER_LOCALE>().find((browserIsoCode) => {
    return ODS_PHONE_NUMBER_LOCALES.indexOf(browserIsoCode) >= 0;
  }) || ODS_PHONE_NUMBER_LOCALE.en;
}

function getInitialValue(value: string | null, defaultValue?: string): string | null {
  if (defaultValue !== undefined && value === VALUE_DEFAULT_VALUE) {
    return defaultValue;
  }

  return value;
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
    case ODS_PHONE_NUMBER_LOCALE.de:
      return countriesTranslationDe;
    case ODS_PHONE_NUMBER_LOCALE.en:
      return countriesTranslationEn;
    case ODS_PHONE_NUMBER_LOCALE.es:
      return countriesTranslationEs;
    case ODS_PHONE_NUMBER_LOCALE.fr:
      return countriesTranslationFr;
    case ODS_PHONE_NUMBER_LOCALE.it:
      return countriesTranslationIt;
    case ODS_PHONE_NUMBER_LOCALE.nl:
      return countriesTranslationNl;
    case ODS_PHONE_NUMBER_LOCALE.pl:
      return countriesTranslationPl;
    case ODS_PHONE_NUMBER_LOCALE.pt:
      return countriesTranslationPt;
    default:
      return countriesTranslationEn;
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

function isSingleLetter(value: string): boolean {
  return /^[a-zA-Z]{1}$/.test(value);
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

async function updateInternals(internals: ElementInternals, value: string | null, inputEl?: HTMLElement & OdsInput): Promise<void> {
  internals.setFormValue(value?.toString() ?? '');

  if (inputEl) {
    await setInternalsValidityFromOdsComponent(inputEl, internals);
  }
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
  getInitialValue,
  getNationalPhoneNumberExample,
  getTranslatedCountryMap,
  isSingleLetter,
  isValidPhoneNumber,
  parseCountries,
  parsePhoneNumber,
  updateInternals,
  sortCountriesByName,
  VALUE_DEFAULT_VALUE,
};
