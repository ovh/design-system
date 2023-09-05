import { ODS_COUNTRY_ISO_CODE, ODS_COUNTRY_ISO_CODES } from '@ovhcloud/ods-common-core';
import { OsdsPhoneNumber } from '../osds-phone-number';

class OdsPhoneNumberController {

  constructor(private readonly component: OsdsPhoneNumber) { }

  setDefaultLocale(): ODS_COUNTRY_ISO_CODE {
    if (this.isOdsCountryCode(this.component.locale)) {
      return ODS_COUNTRY_ISO_CODES[ODS_COUNTRY_ISO_CODES.indexOf(this.component.locale)];
    }
    const navigatorLang = this.getNavigatorLang();
    if (navigatorLang) {
        return ODS_COUNTRY_ISO_CODES[ODS_COUNTRY_ISO_CODES.indexOf(navigatorLang)];
    }
    return ODS_COUNTRY_ISO_CODE.FR;
  }

  setDefaultIsoCode(): ODS_COUNTRY_ISO_CODE {
    if (this.isOdsCountryCode(this.component.isoCode)) {
        return ODS_COUNTRY_ISO_CODES[ODS_COUNTRY_ISO_CODES.indexOf(this.component.isoCode)];
    }
    const navigatorLang = this.getNavigatorLang();
    if (navigatorLang) {
        return ODS_COUNTRY_ISO_CODES[ODS_COUNTRY_ISO_CODES.indexOf(navigatorLang)];
    }
    return ODS_COUNTRY_ISO_CODE.AD;
  }

  getCountriesList(): ODS_COUNTRY_ISO_CODE[] {
    if (this.component.countries === 'all') {
      return ODS_COUNTRY_ISO_CODES as ODS_COUNTRY_ISO_CODE[];
    }
    return this.component.countries || [];
  }

  private getNavigatorLang(): ODS_COUNTRY_ISO_CODE | undefined {
    const language = navigator.language?.split('-')[0];
    if (language && this.isOdsCountryCode(language)) {
      return language;
    }
    const language2 = navigator.language?.split('-')[1];
    if (language2 && this.isOdsCountryCode(language2)) {
      return language2;
    }
    return undefined;
  }

  private isOdsCountryCode(value: string | ODS_COUNTRY_ISO_CODE | undefined): value is ODS_COUNTRY_ISO_CODE {
    return !!value && ODS_COUNTRY_ISO_CODES.includes(value as ODS_COUNTRY_ISO_CODE);
  }
}

export {
  OdsPhoneNumberController,
};
