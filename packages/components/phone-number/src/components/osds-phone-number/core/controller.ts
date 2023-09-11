import type { OsdsPhoneNumber } from '../osds-phone-number';
import { ODS_COUNTRY_ISO_CODE, ODS_COUNTRY_ISO_CODES, ODS_LOCALE, ODS_LOCALES } from '@ovhcloud/ods-common-core';
import { ODS_PHONE_NUMBER_COUNTRY_PRESET } from '../constants/phone-number-countries';
import countriesTranslationEn from '@ovhcloud/ods-common-core/src/i18n/countries/en.json'
import countriesTranslationFr from '@ovhcloud/ods-common-core/src/i18n/countries/fr.json'

class OdsPhoneNumberController {

  constructor(private readonly component: OsdsPhoneNumber) { }

  getDefaultLocale(): ODS_LOCALE {
    return this.getValueOrNavigatorOrDefault({
      value: this.component.locale,
      list: ODS_LOCALES,
      defaultValue: ODS_LOCALE.FR,
      guard: this.isOdsLocale,
    });
  }

  getDefaultIsoCode(): ODS_COUNTRY_ISO_CODE {
    return this.getValueOrNavigatorOrDefault({
      value: this.component.isoCode,
      list: ODS_COUNTRY_ISO_CODES,
      defaultValue: this.component.parsedCountries[0],
      guard: this.isOdsCountryCode,
    });
  }

  getCountriesList(): readonly ODS_COUNTRY_ISO_CODE[] | string {
    if (this.component.countries === ODS_PHONE_NUMBER_COUNTRY_PRESET.All) {
      return ODS_COUNTRY_ISO_CODES;
    }
    return this.component.countries || [];
  }

  loadTranslationFileByLocale(locale: ODS_LOCALE): { isoCode: string, name: string }[] {
    if (locale === ODS_LOCALE.EN) {
      return countriesTranslationEn;
    }
    return countriesTranslationFr;
  }

  private getValueOrNavigatorOrDefault<T>({ value, list, defaultValue, guard }: { value: T | undefined, list: readonly T[], defaultValue: T, guard: (value: T | string | undefined) => value is T }): T {
    if (guard(value)) {
      return list[list.indexOf(value)];
    }
    const navigatorLang = this.getNavigatorLang();
    if (guard(navigatorLang)) {
        return list[list.indexOf(navigatorLang)];
    }
    return defaultValue;
  }

  private getNavigatorLang(): string | undefined {
    return navigator.language?.split('-')[0];
  }

  private isOdsCountryCode(value: string | ODS_COUNTRY_ISO_CODE | undefined): value is ODS_COUNTRY_ISO_CODE {
    return !!value && ODS_COUNTRY_ISO_CODES.includes(value as ODS_COUNTRY_ISO_CODE);
  }

  private isOdsLocale(value: string | ODS_LOCALE | undefined): value is ODS_LOCALE {
    return !!value && ODS_LOCALES.includes(value as ODS_LOCALE);
  }
}

export {
  OdsPhoneNumberController,
};
