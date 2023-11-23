import type { OsdsPhoneNumber } from '../osds-phone-number';
import type { ODS_COUNTRY_ISO_CODE, OdsInputValue } from '@ovhcloud/ods-common-core';
import type { PhoneNumber } from 'google-libphonenumber';
import { ODS_COUNTRY_ISO_CODES, ODS_LOCALE, ODS_LOCALES, OdsCommonFieldMethodController } from '@ovhcloud/ods-common-core';
import countriesTranslationEn from '@ovhcloud/ods-common-core/src/i18n/countries/en.json';
import countriesTranslationFr from '@ovhcloud/ods-common-core/src/i18n/countries/fr.json';
import { ODS_PHONE_NUMBER_COUNTRY_PRESET } from '../constants/phone-number-countries';

class OdsPhoneNumberController<T extends OsdsPhoneNumber> extends OdsCommonFieldMethodController<T> {

  constructor(component: T) {
    super(component);
  }

  beforeInit(): void {
    // order matter
    this.component.handlerCountries();
    this.component.isoCode = this.getDefaultIsoCode();
    this.component.locale = this.getDefaultLocale();
    this.component.handlerLocale(this.component.locale);
    if (this.component.value) {
      this.validateValue();
    }
    if (!this.component.value) {
      this.component.value = this.component.defaultValue;
    }
    this.setFormValue(this.component.value);
  }

  getCountriesList(): readonly ODS_COUNTRY_ISO_CODE[] | string {
    if (this.component.countries === ODS_PHONE_NUMBER_COUNTRY_PRESET.All) {
      return ODS_COUNTRY_ISO_CODES;
    }
    return this.component.countries || [];
  }

  getDefaultLocale(): ODS_LOCALE {
    return this.getValueOrNavigatorOrDefault({
      defaultValue: ODS_LOCALE.FR,
      guard: this.isOdsLocale,
      list: ODS_LOCALES,
      value: this.component.locale,
    });
  }

  getDefaultIsoCode(): ODS_COUNTRY_ISO_CODE {
    return this.getValueOrNavigatorOrDefault({
      defaultValue: this.component.parsedCountries[0],
      guard: this.isOdsCountryCode,
      list: ODS_COUNTRY_ISO_CODES,
      value: this.component.isoCode,
    });
  }

  private getNavigatorLang(index: number = 0): string | undefined {
    return navigator.language?.split('-')[index]?.toLocaleLowerCase();
  }

  private getValueOrNavigatorOrDefault<T>({ value, list, defaultValue, guard }: { value: T | undefined, list: readonly T[], defaultValue: T, guard: (value: T | string | undefined) => value is T }): T {
    if (guard(value)) {
      return list[list.indexOf(value)];
    }
    const navigatorLang = this.getNavigatorLang();
    if (guard(navigatorLang)) {
      return list[list.indexOf(navigatorLang)];
    }
    const navigatorLang1 = this.getNavigatorLang(1);
    if (guard(navigatorLang1)) {
      return list[list.indexOf(navigatorLang1)];
    }
    return defaultValue;
  }

  private isOdsCountryCode(value: string | ODS_COUNTRY_ISO_CODE | undefined): value is ODS_COUNTRY_ISO_CODE {
    return !!value && ODS_COUNTRY_ISO_CODES.includes(value as ODS_COUNTRY_ISO_CODE);
  }

  private isOdsLocale(value: string | ODS_LOCALE | undefined): value is ODS_LOCALE {
    return !!value && ODS_LOCALES.includes(value as ODS_LOCALE);
  }

  isValidValue(value: OdsInputValue): boolean {
    if (!value) {
      return true;
    }
    const number = this.parseNumber(value);
    if (!number) {
      return false;
    }
    return this.component.phoneUtils.isPossibleNumber(number) && this.component.phoneUtils.isValidNumberForRegion(number, this.component.isoCode);
  }

  loadTranslationFileByLocale(locale: ODS_LOCALE): { isoCode: string, name: string }[] {
    if (locale === ODS_LOCALE.EN) {
      return countriesTranslationEn;
    }
    return countriesTranslationFr;
  }

  parseCountries(countries: readonly ODS_COUNTRY_ISO_CODE[] | string): ODS_COUNTRY_ISO_CODE[] {
    if (typeof countries === 'string') {
      try {
        return JSON.parse(countries);
      } catch (err) {
        console.warn('[OsdsPhoneNumber] countries string could not be parsed.');
        return [];
      }
    }
    return [...countries];
  }

  parseNumber(number: OdsInputValue): PhoneNumber | null {
    if (!number || typeof number !== 'string') {
      return null;
    }
    try {
      return this.component.phoneUtils.parseAndKeepRawInput(number, this.component.isoCode);
    } catch {
      console.warn('[OsdsPhoneNumber] value could not be parsed as a phone number.');
      return null;
    }
  }

  setFormValue(value: OdsInputValue): void {
    this.component.internals.setFormValue(value?.toString() ?? '');
  }

  validateValue(): void {
    this.component.error = !this.isValidValue(this.component.value);
    this.setFormValue(this.component.value);
  }
}

export {
  OdsPhoneNumberController,
};
