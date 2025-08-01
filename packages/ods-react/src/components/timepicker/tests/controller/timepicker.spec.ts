import { TIMEZONES } from '../../src/constants/timepicker-timezones';
import { FALLBACK_TIMEZONE, getCurrentTimezone, getTimezoneList } from '../../src/controller/timepicker';

describe('Timepicker controller', () => {
  beforeEach(jest.clearAllMocks);

  describe('getCurrentTimezone', () => {
    it('should return the given timezone if part of the supported timezones', () => {
      expect(getCurrentTimezone('UTC+3')).toBe('UTC+3');
    });

    it('should return the first given timezone if no match from browser', () => {
      // @ts-ignore for test purpose
      expect(getCurrentTimezone('XXX', ['UTC+1', 'UTC+11'])).toBe('UTC+1');
    });

    it('should return the fallback if no match from browser and timezones subset', () => {
      // @ts-ignore for test purpose
      expect(getCurrentTimezone('XXX', ['YYY'])).toBe(FALLBACK_TIMEZONE);
    });
  });

  describe('getTimezoneList', () => {
    it('should return all timezones if none are passed', () => {
      expect(getTimezoneList()).toEqual(TIMEZONES);
    });

    it('should return all timezones if all preset is passed', () => {
      expect(getTimezoneList('all')).toEqual(TIMEZONES);
    });

    it('should return fallback if given timezone are not supported', () => {
      // @ts-ignore for test purpose
      expect(getTimezoneList(['a', 'b'])).toEqual([FALLBACK_TIMEZONE]);
    });

    it('should return given timezones if all are valids', () => {
      expect(getTimezoneList(['UTC+3', 'UTC+6'])).toEqual(['UTC+3', 'UTC+6']);
    });
  });
});
