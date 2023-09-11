import { ODS_COUNTRY_ISO_CODE, ODS_COUNTRY_ISO_CODES, ODS_LOCALE } from '@ovhcloud/ods-common-core';
import { ODS_PHONE_NUMBER_COUNTRY_PRESET } from '../constants/phone-number-countries';
import { OsdsPhoneNumber } from '../osds-phone-number';
import { OdsPhoneNumberController } from './controller';
import countriesTranslationEn from '@ovhcloud/ods-common-core/src/i18n/countries/en.json'
import countriesTranslationFr from '@ovhcloud/ods-common-core/src/i18n/countries/fr.json'

class OdsPhoneNumberMock extends OsdsPhoneNumber {
  constructor(attribute: Partial<OsdsPhoneNumber>) {
    super();
    Object.assign(this, attribute)
  }
  emitChange = jest.fn();
  emitFocus = jest.fn();
  emitBlur = jest.fn();
  parsedCountries = ODS_COUNTRY_ISO_CODES as ODS_COUNTRY_ISO_CODE[];
}

describe('spec:ods-phone-number-controller', () => {
  let controller: OdsPhoneNumberController;
  let component: OsdsPhoneNumber;

  function setup(attributes: Partial<OsdsPhoneNumber> = {}, language?: string) {
    component = new OdsPhoneNumberMock(attributes);
    controller = new OdsPhoneNumberController(component);
    global.navigator = {
      ...global.navigator,
      language,
    }    
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('methods:getDefaultIsoCode', () => {
      it('should get the default iso code', () => {
        setup();
        const isoCode = controller.getDefaultIsoCode();
        expect(isoCode).toBe(ODS_COUNTRY_ISO_CODE.AD);
      });

      it('should get the component iso code', () => {
        setup({ isoCode: ODS_COUNTRY_ISO_CODE.FR });
        const isoCode = controller.getDefaultIsoCode();
        expect(isoCode).toBe(ODS_COUNTRY_ISO_CODE.FR);
      });

      it('should get the navigator iso code', () => {
        setup({ }, 'fr-FR');
        const isoCode = controller.getDefaultIsoCode();
        expect(isoCode).toBe(ODS_COUNTRY_ISO_CODE.FR);
      });

      it('should not get the navigator iso code because of a wrong isoCode', () => {
        setup({ }, 'en');
        const isoCode = controller.getDefaultIsoCode();
        expect(isoCode).toBe(ODS_COUNTRY_ISO_CODE.AD);
      });

      it('should not get the component iso code because of a wrong isoCode', () => {
        setup({ isoCode: 'fake' as ODS_COUNTRY_ISO_CODE });
        const isoCode = controller.getDefaultIsoCode();
        expect(isoCode).toBe(ODS_COUNTRY_ISO_CODE.AD);
      });

      it('should get the first element of parsedCountries as isoCode', () => {
        setup({ parsedCountries: [ODS_COUNTRY_ISO_CODE.CH, ODS_COUNTRY_ISO_CODE.AD, ODS_COUNTRY_ISO_CODE.AE]});
        const isoCode = controller.getDefaultIsoCode();
        expect(isoCode).toBe(ODS_COUNTRY_ISO_CODE.CH);
      });
    });
    
    describe('methods:getDefaultLocale', () => {
      it('should get the default locale', () => {
        setup();
        const locale = controller.getDefaultLocale();
        expect(locale).toBe(ODS_LOCALE.FR);
      });

      it('should get the component locale', () => {
        setup({ locale: ODS_LOCALE.EN });
        const locale = controller.getDefaultLocale();
        expect(locale).toBe(ODS_LOCALE.EN);
      });

      it('should get the navigator locale', () => {
        setup({ }, 'fr-FR');
        const locale = controller.getDefaultLocale();
        expect(locale).toBe(ODS_COUNTRY_ISO_CODE.FR);
      });

      it('should not get the navigator locale because of a wrong navigator language', () => {
        setup({ }, 'af');
        const locale = controller.getDefaultLocale();
        expect(locale).toBe(ODS_LOCALE.FR);
      });

      it('should not get the component locale because of a wrong locale', () => {
        setup({ locale: 'fake' as ODS_LOCALE });
        const locale = controller.getDefaultLocale();
        expect(locale).toBe(ODS_LOCALE.FR);
      });
    });

    describe('methods:getCountriesList', () => {
      it('should get all countries', () => {
        setup({ countries: ODS_PHONE_NUMBER_COUNTRY_PRESET.All });
        const countries = controller.getCountriesList();
        expect(countries).toEqual(ODS_COUNTRY_ISO_CODES);
      });

      it('should get no countries', () => {
        setup({ });
        const countries = controller.getCountriesList();
        expect(countries).toEqual([]);
      });

      it('should get a list countries', () => {
        const countries = [ODS_COUNTRY_ISO_CODE.FR, ODS_COUNTRY_ISO_CODE.GB]
        setup({ countries });
        expect(controller.getCountriesList()).toEqual(countries);
      });
    });
    
    describe('methods:loadTranslationFileByLocale', () => {
      it('should get translationFile by locale EN', async () => {
        await setup({ });
        const file = await controller.loadTranslationFileByLocale(ODS_LOCALE.FR);
        expect(file).toEqual(countriesTranslationFr);
      });

      it('should get translationFile by locale FR', async () => {
        await setup({ });
        const file = await controller.loadTranslationFileByLocale(ODS_LOCALE.EN);
        expect(file).toEqual(countriesTranslationEn);
      });

      it('should get translationFile FR by default', async () => {
        await setup({ });
        const file = await controller.loadTranslationFileByLocale(ODS_LOCALE.AR);
        expect(file).toEqual(countriesTranslationFr);
      });
    });
    
  });
});
