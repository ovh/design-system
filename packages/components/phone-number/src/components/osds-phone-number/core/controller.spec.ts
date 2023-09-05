import { ODS_COUNTRY_ISO_CODE, ODS_COUNTRY_ISO_CODES } from '@ovhcloud/ods-common-core';
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
    describe('methods:setDefaultIsoCode', () => {
      it('should get the default iso code', () => {
        setup();
        const isoCode = controller.setDefaultIsoCode();
        expect(isoCode).toBe(ODS_COUNTRY_ISO_CODE.AD);
      });

      it('should get the component iso code', () => {
        setup({ isoCode: ODS_COUNTRY_ISO_CODE.FR });
        const isoCode = controller.setDefaultIsoCode();
        expect(isoCode).toBe(ODS_COUNTRY_ISO_CODE.FR);
      });

      it('should get the navigator iso code', () => {
        setup({ }, 'fr-FR');
        const isoCode = controller.setDefaultIsoCode();
        expect(isoCode).toBe(ODS_COUNTRY_ISO_CODE.FR);
      });

      it('should get the navigator iso code with the second language', () => {
        setup({ }, 'en-us');
        const isoCode = controller.setDefaultIsoCode();
        expect(isoCode).toBe(ODS_COUNTRY_ISO_CODE.US);
      });

      it('should not get the navigator iso code because of a wrong isoCode', () => {
        setup({ }, 'en');
        const isoCode = controller.setDefaultIsoCode();
        expect(isoCode).toBe(ODS_COUNTRY_ISO_CODE.AD);
      });

      it('should not get the component iso code because of a wrong isoCode', () => {
        setup({ isoCode: 'fake' as ODS_COUNTRY_ISO_CODE });
        const isoCode = controller.setDefaultIsoCode();
        expect(isoCode).toBe(ODS_COUNTRY_ISO_CODE.AD);
      });
    });
    
    describe('methods:setDefaultLocale', () => {
      it('should get the default locale', () => {
        setup();
        const locale = controller.setDefaultLocale();
        expect(locale).toBe(ODS_COUNTRY_ISO_CODE.FR);
      });

      it('should get the component locale', () => {
        setup({ locale: ODS_COUNTRY_ISO_CODE.GB });
        const locale = controller.setDefaultLocale();
        expect(locale).toBe(ODS_COUNTRY_ISO_CODE.GB);
      });

      it('should get the navigator locale', () => {
        setup({ }, 'fr-FR');
        const locale = controller.setDefaultLocale();
        expect(locale).toBe(ODS_COUNTRY_ISO_CODE.FR);
      });

      it('should get the navigator locale with the second language', () => {
        setup({ }, 'en-us');
        const isoCode = controller.setDefaultIsoCode();
        expect(isoCode).toBe(ODS_COUNTRY_ISO_CODE.US);
      });

      it('should not get the navigator locale because of a wrong isoCode', () => {
        setup({ }, 'en-UK');
        const locale = controller.setDefaultLocale();
        expect(locale).toBe(ODS_COUNTRY_ISO_CODE.FR);
      });

      it('should not get the component locale because of a wrong isoCode', () => {
        setup({ locale: 'fake' as ODS_COUNTRY_ISO_CODE });
        const locale = controller.setDefaultLocale();
        expect(locale).toBe(ODS_COUNTRY_ISO_CODE.FR);
      });
    });

    describe('methods:getCountriesList', () => {
      it('should get all countries', () => {
        setup({ countries: 'all' });
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
