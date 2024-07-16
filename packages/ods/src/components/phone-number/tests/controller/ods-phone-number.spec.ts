import { PhoneNumberFormat, type PhoneNumberUtil } from 'google-libphonenumber';
import { ODS_PHONE_NUMBER_COUNTRY_ISO_CODES, type OdsPhoneNumberCountryIsoCode } from '../../src';
import { formatPhoneNumber, getCurrentIsoCode, getCurrentLocale, getNationalPhoneNumberExample, getTranslatedCountryMap, getValidityState, isValidPhoneNumber, parseCountries, parsePhoneNumber, setFormValue, sortCountriesByName } from '../../src/controller/ods-phone-number';
import countriesTranslationEn from '../../src/i18n/countries-en.json';
import countriesTranslationFr from '../../src/i18n/countries-fr.json';

describe('ods-phone-number controller', () => {
  const mockPhoneUtils = {
    format: jest.fn(),
    getCountryCodeForRegion: jest.fn(),
    getExampleNumber: jest.fn(),
    isPossibleNumber: jest.fn(),
    isValidNumberForRegion: jest.fn(),
    parseAndKeepRawInput: jest.fn(), //=>
  } as unknown as PhoneNumberUtil;

  beforeEach(jest.clearAllMocks);

  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  describe('formatPhoneNumber', () => {
    it('should return null if hasError is true', () => {
      expect(formatPhoneNumber('num', true, 'fr', mockPhoneUtils)).toBeNull();
      expect(mockPhoneUtils.parseAndKeepRawInput).not.toHaveBeenCalled();
      expect(mockPhoneUtils.format).not.toHaveBeenCalled();
    });

    it('should return null if the number cannot be parsed', () => {
      const dummyIsoCode = 'fr';
      const dummyNumber = '0123456789';
      (mockPhoneUtils.parseAndKeepRawInput as jest.Mock).mockReturnValue('');

      expect(formatPhoneNumber(dummyNumber, false, dummyIsoCode, mockPhoneUtils)).toBeNull();
      expect(mockPhoneUtils.parseAndKeepRawInput).toHaveBeenCalledTimes(1);
      expect(mockPhoneUtils.parseAndKeepRawInput).toHaveBeenCalledWith(dummyNumber, dummyIsoCode);
      expect(mockPhoneUtils.format).not.toHaveBeenCalled();
    });

    it('should return the formatted number', () => {
      const dummyIsoCode = 'fr';
      const dummyFormattedNumber = '+33123456789';
      const dummyNumber = '01 23 45 67 89';
      const dummyParsedNumber = '0123456789';
      (mockPhoneUtils.format as jest.Mock).mockReturnValue(dummyFormattedNumber);
      (mockPhoneUtils.parseAndKeepRawInput as jest.Mock).mockReturnValue(dummyParsedNumber);

      expect(formatPhoneNumber(dummyNumber, false, dummyIsoCode, mockPhoneUtils)).toBe(dummyFormattedNumber);
      expect(mockPhoneUtils.parseAndKeepRawInput).toHaveBeenCalledTimes(1);
      expect(mockPhoneUtils.parseAndKeepRawInput).toHaveBeenCalledWith(dummyNumber, dummyIsoCode);
      expect(mockPhoneUtils.format).toHaveBeenCalledTimes(1);
      expect(mockPhoneUtils.format).toHaveBeenCalledWith(dummyParsedNumber, PhoneNumberFormat.E164);
    });
  });

  describe('getCurrentIsoCode', () => {
    it('should return the given iso code if part of the supported iso codes', () => {
      expect(getCurrentIsoCode('fr')).toBe('fr');
    });

    it('should return a matching iso code from the navigator language', () => {
      // @ts-ignore for test purpose
      global.navigator = { language: 'en-US' };

      // @ts-ignore for test purpose
      expect(getCurrentIsoCode('aa')).toBe('us');
    });

    it('should return the given default value if no match from navigator language', () => {
      // @ts-ignore for test purpose
      global.navigator = { language: 'xx-XX' };
      const dummyDefault = 'de';

      // @ts-ignore for test purpose
      expect(getCurrentIsoCode('aa', dummyDefault)).toBe(dummyDefault);
    });

    it('should return the default iso code if no match from navigator language', () => {
      // @ts-ignore for test purpose
      global.navigator = { language: 'xx-XX' };

      // @ts-ignore for test purpose
      expect(getCurrentIsoCode('aa')).toBe('fr');
    });
  });

  describe('getCurrentLocale', () => {
    it('should return the given locale if part of the supported locales', () => {
      expect(getCurrentLocale('fr')).toBe('fr');
    });

    it('should return a matching locale from the navigator language', () => {
      // @ts-ignore for test purpose
      global.navigator = { language: 'en-US' };

      // @ts-ignore for test purpose
      expect(getCurrentLocale('zw')).toBe('en');
    });

    it('should return the default locale if no match from navigator language', () => {
      // @ts-ignore for test purpose
      global.navigator = { language: 'zh-gan' };

      // @ts-ignore for test purpose
      expect(getCurrentLocale('zw')).toBe('fr');
    });
  });

  describe('getNationalPhoneNumberExample', () => {
    it('should return an empty string if number example cannot be generated', () => {
      expect(getNationalPhoneNumberExample(undefined, mockPhoneUtils)).toBe('');
      expect(mockPhoneUtils.getExampleNumber).not.toHaveBeenCalled();
      expect(mockPhoneUtils.format).not.toHaveBeenCalled();
    });

    it('should return an formatted number', () => {
      const dummyExample = '0123456789';
      const dummyFormattedNumber = '+33123456789';
      const dummyIsoCode = 'fr';
      (mockPhoneUtils.getExampleNumber as jest.Mock).mockReturnValue(dummyExample);
      (mockPhoneUtils.format as jest.Mock).mockReturnValue(dummyFormattedNumber);

      expect(getNationalPhoneNumberExample(dummyIsoCode, mockPhoneUtils)).toBe(dummyFormattedNumber);
      expect(mockPhoneUtils.getExampleNumber).toHaveBeenCalledTimes(1);
      expect(mockPhoneUtils.getExampleNumber).toHaveBeenCalledWith(dummyIsoCode);
      expect(mockPhoneUtils.format).toHaveBeenCalledTimes(1);
      expect(mockPhoneUtils.format).toHaveBeenCalledWith(dummyExample, PhoneNumberFormat.NATIONAL);
    });
  });

  describe('getTranslatedCountryMap', () => {
    const getCountryCodeSpy = jest.fn();

    beforeEach(() => {
      (mockPhoneUtils.getExampleNumber as jest.Mock).mockReturnValue({
        getCountryCode: getCountryCodeSpy,
      });
    });

    it('should return the en map of country object', () => {
      const enMap = getTranslatedCountryMap('en', mockPhoneUtils);

      expect(enMap.size).toBe(countriesTranslationEn.length);
      expect(enMap.values().next().value.name).toBe('Andorra');
      expect(mockPhoneUtils.getExampleNumber).toHaveBeenCalledTimes(countriesTranslationEn.length);
      expect(getCountryCodeSpy).toHaveBeenCalledTimes(countriesTranslationEn.length);
    });

    it('should return the fr map of country object', () => {
      const frMap = getTranslatedCountryMap('fr', mockPhoneUtils);

      expect(frMap.size).toBe(countriesTranslationFr.length);
      expect(frMap.values().next().value.name).toBe('Andorre');
      expect(mockPhoneUtils.getExampleNumber).toHaveBeenCalledTimes(countriesTranslationFr.length);
      expect(getCountryCodeSpy).toHaveBeenCalledTimes(countriesTranslationFr.length);
    });

    it('should return the default map of country if no matching locale', () => {
      // @ts-ignore for test purpose
      const defaultMap = getTranslatedCountryMap('zw', mockPhoneUtils);

      expect(defaultMap.size).toBe(countriesTranslationFr.length);
      expect(defaultMap.values().next().value.name).toBe('Andorre');
      expect(mockPhoneUtils.getExampleNumber).toHaveBeenCalledTimes(countriesTranslationFr.length);
      expect(getCountryCodeSpy).toHaveBeenCalledTimes(countriesTranslationFr.length);
    });
  });

  describe('getValidityState', () => {
    it('should return default validity state object', () => {
      expect(getValidityState(true)).toEqual({
        badInput: false,
        customError: false,
        patternMismatch: false,
        rangeOverflow: false,
        rangeUnderflow: false,
        stepMismatch: false,
        tooLong: false,
        tooShort: false,
        typeMismatch: false,
        valid: false,
        valueMissing: false,
      });
    });

    it('should return given input validity state with the input valid value if false', () => {
      const dummyValidityState = {
        badInput: true,
        customError: true,
        patternMismatch: true,
        rangeOverflow: true,
        rangeUnderflow: true,
        stepMismatch: true,
        tooLong: true,
        tooShort: true,
        typeMismatch: true,
        valid: false,
        valueMissing: true,
      };

      expect(getValidityState(false, dummyValidityState)).toEqual({
        badInput: dummyValidityState.badInput,
        customError: dummyValidityState.customError,
        patternMismatch: dummyValidityState.patternMismatch,
        rangeOverflow: dummyValidityState.rangeOverflow,
        rangeUnderflow: dummyValidityState.rangeUnderflow,
        stepMismatch: dummyValidityState.stepMismatch,
        tooLong: dummyValidityState.tooLong,
        tooShort: dummyValidityState.tooShort,
        typeMismatch: dummyValidityState.typeMismatch,
        valid: false,
        valueMissing: dummyValidityState.valueMissing,
      });
    });

    it('should return given input validity state object with custom valid property if input is valid', () => {
      const dummyValidityState = {
        badInput: true,
        customError: true,
        patternMismatch: true,
        rangeOverflow: true,
        rangeUnderflow: true,
        stepMismatch: true,
        tooLong: true,
        tooShort: true,
        typeMismatch: true,
        valid: true,
        valueMissing: true,
      };

      expect(getValidityState(true, dummyValidityState)).toEqual({
        badInput: dummyValidityState.badInput,
        customError: dummyValidityState.customError,
        patternMismatch: dummyValidityState.patternMismatch,
        rangeOverflow: dummyValidityState.rangeOverflow,
        rangeUnderflow: dummyValidityState.rangeUnderflow,
        stepMismatch: dummyValidityState.stepMismatch,
        tooLong: dummyValidityState.tooLong,
        tooShort: dummyValidityState.tooShort,
        typeMismatch: dummyValidityState.typeMismatch,
        valid: false,
        valueMissing: dummyValidityState.valueMissing,
      });
    });
  });

  describe('isValidPhoneNumber', () => {
    it('should return true if no value or no iso code', () => {
      // @ts-ignore for test purpose
      expect(isValidPhoneNumber()).toBe(true);
      // @ts-ignore for test purpose
      expect(isValidPhoneNumber(null)).toBe(true);
      // @ts-ignore for test purpose
      expect(isValidPhoneNumber('1234')).toBe(true);
    });

    it('should return false if number cannot be parsed', () => {
      const dummyNumber = '0009';
      (mockPhoneUtils.parseAndKeepRawInput as jest.Mock).mockReturnValue('');

      expect(isValidPhoneNumber(dummyNumber, 'fr', mockPhoneUtils)).toBe(false);
      expect(mockPhoneUtils.isPossibleNumber).not.toHaveBeenCalled();
      expect(mockPhoneUtils.isValidNumberForRegion).not.toHaveBeenCalled();
    });

    it('should return false if parsed number is not a possible number', () => {
      const dummyNumber = '0123456789';
      (mockPhoneUtils.isPossibleNumber as jest.Mock).mockReturnValue(false);
      (mockPhoneUtils.parseAndKeepRawInput as jest.Mock).mockReturnValue(dummyNumber);

      expect(isValidPhoneNumber(dummyNumber, 'fr', mockPhoneUtils)).toBe(false);
      expect(mockPhoneUtils.isPossibleNumber).toHaveBeenCalledTimes(1);
      expect(mockPhoneUtils.isPossibleNumber).toHaveBeenCalledWith(dummyNumber);
      expect(mockPhoneUtils.isValidNumberForRegion).not.toHaveBeenCalled();
    });

    it('should return false if parsed number is not a valid number', () => {
      const dummyIsoCode = 'fr';
      const dummyNumber = '0123456789';
      (mockPhoneUtils.isPossibleNumber as jest.Mock).mockReturnValue(true);
      (mockPhoneUtils.isValidNumberForRegion as jest.Mock).mockReturnValue(false);
      (mockPhoneUtils.parseAndKeepRawInput as jest.Mock).mockReturnValue(dummyNumber);

      expect(isValidPhoneNumber(dummyNumber, dummyIsoCode, mockPhoneUtils)).toBe(false);
      expect(mockPhoneUtils.isPossibleNumber).toHaveBeenCalledTimes(1);
      expect(mockPhoneUtils.isPossibleNumber).toHaveBeenCalledWith(dummyNumber);
      expect(mockPhoneUtils.isValidNumberForRegion).toHaveBeenCalledTimes(1);
      expect(mockPhoneUtils.isValidNumberForRegion).toHaveBeenCalledWith(dummyNumber, dummyIsoCode);
    });

    it('should return true if number is valid', () => {
      const dummyIsoCode = 'fr';
      const dummyNumber = '0123456789';
      (mockPhoneUtils.isPossibleNumber as jest.Mock).mockReturnValue(true);
      (mockPhoneUtils.isValidNumberForRegion as jest.Mock).mockReturnValue(true);
      (mockPhoneUtils.parseAndKeepRawInput as jest.Mock).mockReturnValue(dummyNumber);

      expect(isValidPhoneNumber(dummyNumber, dummyIsoCode, mockPhoneUtils)).toBe(true);
      expect(mockPhoneUtils.isPossibleNumber).toHaveBeenCalledTimes(1);
      expect(mockPhoneUtils.isPossibleNumber).toHaveBeenCalledWith(dummyNumber);
      expect(mockPhoneUtils.isValidNumberForRegion).toHaveBeenCalledTimes(1);
      expect(mockPhoneUtils.isValidNumberForRegion).toHaveBeenCalledWith(dummyNumber, dummyIsoCode);
    });
  });

  describe('parseCountries', () => {
    beforeEach(() => {
      (mockPhoneUtils.getCountryCodeForRegion as jest.Mock).mockImplementation((arg) => arg);
    });

    it('should return an empty array and warn if the string cannot be parsed', () => {
      expect(parseCountries('dummy', mockPhoneUtils)).toEqual([]);
      expect(console.warn).toHaveBeenCalledTimes(1);
    });

    it('should return the parsed array if json is valid', () => {
      const dummyCountryCodes = ['be', 'fr'];

      expect(parseCountries(JSON.stringify(dummyCountryCodes), mockPhoneUtils)).toEqual(dummyCountryCodes);
      expect(console.warn).not.toHaveBeenCalled();
      expect(mockPhoneUtils.getCountryCodeForRegion).toHaveBeenCalledTimes(dummyCountryCodes.length);
    });

    it('should return the array if not a string', () => {
      const dummyCountryCodes: OdsPhoneNumberCountryIsoCode[] = ['be', 'fr'];

      expect(parseCountries(dummyCountryCodes, mockPhoneUtils)).toEqual(dummyCountryCodes);
      expect(console.warn).not.toHaveBeenCalled();
      expect(mockPhoneUtils.getCountryCodeForRegion).toHaveBeenCalledTimes(dummyCountryCodes.length);
    });

    it('should return all iso codes if preset all', () => {
      expect(parseCountries('all', mockPhoneUtils)).toEqual(ODS_PHONE_NUMBER_COUNTRY_ISO_CODES);
      expect(console.warn).not.toHaveBeenCalled();
      expect(mockPhoneUtils.getCountryCodeForRegion).toHaveBeenCalledTimes(ODS_PHONE_NUMBER_COUNTRY_ISO_CODES.length);
    });
  });

  describe('parsePhoneNumber', () => {
    it('should return null if no phone number or no iso code', () => {
      expect(parsePhoneNumber(null, 'fr', mockPhoneUtils)).toBeNull();
      expect(parsePhoneNumber('0123456789', undefined, mockPhoneUtils)).toBeNull();
      expect(mockPhoneUtils.parseAndKeepRawInput).not.toHaveBeenCalled();
    });

    it('should return the parsed result', () => {
      const dummyPhoneNumber = '0123456789';
      const dummyIsoCode = 'fr';
      const dummyResult = 'dummy result';
      (mockPhoneUtils.parseAndKeepRawInput as jest.Mock).mockReturnValue(dummyResult);

      expect(parsePhoneNumber(dummyPhoneNumber, dummyIsoCode, mockPhoneUtils)).toBe(dummyResult);
      expect(mockPhoneUtils.parseAndKeepRawInput).toHaveBeenCalledTimes(1);
      expect(mockPhoneUtils.parseAndKeepRawInput).toHaveBeenCalledWith(dummyPhoneNumber, dummyIsoCode);
    });
  });

  describe('setFormValue', () => {
    const dummyInternal = {
      setFormValue: jest.fn(),
    } as unknown as ElementInternals;

    it('should set internal value with empty string', () => {
      // @ts-ignore for test purpose
      setFormValue(dummyInternal);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');

      // @ts-ignore for test purpose
      setFormValue(dummyInternal, undefined);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');

      setFormValue(dummyInternal, null);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');
    });

    it('should set internal value with string value', () => {
      const dummyValue = 'dummy value';

      setFormValue(dummyInternal, dummyValue);

      expect(dummyInternal.setFormValue).toHaveBeenCalledWith(dummyValue);
    });
  });

  describe('sortCountriesByName', () => {
    it('should return the array alphabetically sorted using given Map', () => {
      const dummyCountryCodes: OdsPhoneNumberCountryIsoCode[] = ['be', 'zw', 'fr', 'ad'];
      const dummyMap = new Map();
      dummyMap.set('be', { isoCode: 'be', name: 'Belgique', phoneCode: 1 });
      dummyMap.set('zw', { isoCode: 'zw', name: 'Zimbabwe', phoneCode: 2 });
      dummyMap.set('fr', { isoCode: 'fr', name: 'France', phoneCode: 3 });
      dummyMap.set('ad', { isoCode: 'ad', name: 'Andorre', phoneCode: 4 });

      expect(sortCountriesByName(dummyCountryCodes, dummyMap)).toEqual([
        'ad', 'be', 'fr', 'zw',
      ]);
    });
  });
});
