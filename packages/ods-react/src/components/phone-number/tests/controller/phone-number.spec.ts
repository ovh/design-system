jest.mock('libphonenumber-js');

import { isSupportedCountry } from 'libphonenumber-js';
import { FALLBACK_ISO_CODE, getCurrentIsoCode } from '../../src/controller/phone-number';

describe('Phone Number controller', () => {
  beforeEach(jest.clearAllMocks);

  describe('getCurrentIsoCode', () => {
    beforeEach(() => {
      (isSupportedCountry as unknown as jest.Mock).mockReturnValue(true);
    });

    it('should return the given iso code if part of the supported iso codes', () => {
      expect(getCurrentIsoCode('de')).toBe('de');
      expect(isSupportedCountry).toHaveBeenCalledWith('DE');
    });

    it('should return the fallback if no iso code and no languages are passed', () => {
      expect(getCurrentIsoCode()).toBe(FALLBACK_ISO_CODE);
    });

    it('should return the fallback if the iso code is not supported and no languages are passed', () => {
      (isSupportedCountry as unknown as jest.Mock).mockReturnValue(false);

      // @ts-ignore for test purpose
      expect(getCurrentIsoCode('ww')).toBe(FALLBACK_ISO_CODE);
    });

    it('should return a matching iso code from the given languages', () => {
      // @ts-ignore for test purpose
      expect(getCurrentIsoCode('ww', ['en-US'])).toBe('us');
    });

    it('should return the first given country value if no match from languages', () => {
      // @ts-ignore for test purpose
      expect(getCurrentIsoCode('ww', ['en-US'], ['de', 'fr', 'it'])).toBe('de');
    });

    it('should return the fallback if no match from languages and countries subset', () => {
      // @ts-ignore for test purpose
      expect(getCurrentIsoCode('ww', ['en-WW'], 'all')).toBe(FALLBACK_ISO_CODE);
    });
  });
});
