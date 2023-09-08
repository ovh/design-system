import type { OsdsPhoneNumber } from '../osds-phone-number';
import { ODS_COUNTRY_ISO_CODE, ODS_COUNTRY_ISO_CODES, ODS_LOCALE, ODS_LOCALES } from '@ovhcloud/ods-common-core';
import { ODS_PHONE_NUMBER_COUTRIE } from '../constants/phone-number-countries';

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
      defaultValue: ODS_COUNTRY_ISO_CODE.AD,
      guard: this.isOdsCountryCode,
    });
  }

  getCountriesList(): readonly ODS_COUNTRY_ISO_CODE[] {
    if (this.component.countries === ODS_PHONE_NUMBER_COUTRIE.All) {
      return ODS_COUNTRY_ISO_CODES;
    }
    return this.component.countries || [];
  }

  async loadTranslationFileByLocale(locale: ODS_LOCALE): Promise<{ isoCode: string, name: string }[]> {
    console.log('locale', locale)
    try {
      const { default: file } = await import(`../../../assets/countries/${locale}.json`);
      return file;
    } catch (error) {
      if (error instanceof Error && error.message.includes('error loading dynamically imported module')) {
        const { default: file } = await import(`../../../assets/countries/en.json`);
        return file;
      }
      throw error;
    }
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
