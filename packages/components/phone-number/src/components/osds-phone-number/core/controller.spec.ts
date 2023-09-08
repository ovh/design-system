import { ODS_COUNTRY_ISO_CODE, ODS_COUNTRY_ISO_CODES, ODS_LOCALE } from '@ovhcloud/ods-common-core';
import { ODS_PHONE_NUMBER_COUTRIE } from '../constants/phone-number-countries';
import { OsdsPhoneNumber } from '../osds-phone-number';
import { OdsPhoneNumberController } from './controller';

class OdsPhoneNumberMock extends OsdsPhoneNumber {
  constructor(attribute: Partial<OsdsPhoneNumber>) {
    super();
    Object.assign(this, attribute)
  }
  emitChange = jest.fn();
  emitFocus = jest.fn();
  emitBlur = jest.fn();
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
        setup({ countries: ODS_PHONE_NUMBER_COUTRIE.All });
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
    
  });
});
