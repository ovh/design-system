import { ODS_TIMEZONE, ODS_TIMEZONES, ODS_TIMEZONES_PRESET, type OdsTimezone } from '../../src';
import { formatValue, getCurrentTimezone, getInitialValue, parseTimezones } from '../../src/controller/ods-timepicker';

describe('ods-timepicker controller', () => {
  describe('formatValue', () => {
    it('should format value without seconds correctly', () => {
      expect(formatValue('12:34:56', false)).toBe('12:34');
    });

    it('should format value without seconds correctly', () => {
      expect(formatValue('12:34', false)).toBe('12:34');
    });

    it('should format value with seconds correctly', () => {
      expect(formatValue('12:34', true)).toBe('12:34:00');
    });

    it('should return value with seconds correctly', () => {
      expect(formatValue('12:34:56', true)).toBe('12:34:56');
    });

    it('should handle undefined value gracefully', () => {
      expect(formatValue(undefined, false)).toBe('');
    });

    it('should handle undefined withSeconds parameter gracefully', () => {
      expect(formatValue('12:34:56')).toBe('12:34');
    });

    it('should return empty string for invalid value', () => {
      expect(formatValue('invalid-time-format', true)).toBe('');
    });
  });

  describe('getCurrentTimezone', () => {
    it('should return browser timezone when currentTimezone is undefined', () => {
      const dateMock = {
        getTimezoneOffset: jest.fn(() => -5 * 60), // Simulate UTC+5
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      global.Date = jest.fn(() => dateMock as any) as any;

      expect(getCurrentTimezone(undefined, ODS_TIMEZONES as OdsTimezone[])).toBe(ODS_TIMEZONE.UTC5);
    });

    it('should return currentTimezone when provided', () => {
      const currentTimezoneMock = 'UTC+1';

      expect(getCurrentTimezone(currentTimezoneMock, ODS_TIMEZONES as OdsTimezone[])).toBe(currentTimezoneMock);
    });
  });

  describe('getInitialValue', () => {
    it('should return null if value is null and no default value', () => {
      expect(getInitialValue(null)).toBe(null);
    });

    it('should return string or number if value is set regarding of default value', () => {
      expect(getInitialValue('')).toBe('');
      expect(getInitialValue('value')).toBe('value');
      expect(getInitialValue('value', 'default')).toBe('value');
      // @ts-ignore for test purpose
      expect(getInitialValue('value', null)).toBe('value');
    });

    it('should return default value if value is null', () => {
      expect(getInitialValue(null, '')).toBe('');
      expect(getInitialValue(null, 'default')).toBe('default');
    });
  });

  describe('parseTimezones', () => {
    it('should return an empty array if no arg', () => {
      expect(parseTimezones()).toEqual([]);
    });

    it('should return all timezones when ODS_TIMEZONES_PRESET.all', () => {
      expect(parseTimezones(ODS_TIMEZONES_PRESET.all)).toEqual(ODS_TIMEZONES);
    });

    it('should parse a valid JSON string of timezones', () => {
      const inputTimezones = '["UTC+1","UTC-5","UTC+8"]';
      expect(parseTimezones(inputTimezones)).toEqual(['UTC+1', 'UTC-5', 'UTC+8']);
    });

    it('should parse a valid JSON string of timezones and remove unknown timezones', () => {
      const inputTimezones = '["UTC+1","UTC-5","UTC+8","UTC+30"]';
      expect(parseTimezones(inputTimezones)).toEqual(['UTC+1', 'UTC-5', 'UTC+8']);
    });

    it('should handle invalid JSON string gracefully', () => {
      const invalidInput = 'invalid-json';
      console.warn = jest.fn();

      expect(parseTimezones(invalidInput)).toEqual([]);
      expect(console.warn).toHaveBeenCalled();
    });
  });
});
