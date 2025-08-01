import { DATEPICKER_VIEW } from '../../src/constants/datepicker-view';
import { getDefaultView, parseDateFormat } from '../../src/controller/datepicker';

describe('Datepicker controller', () => {
  describe('getDefaultView', () => {
    describe('with only one arg defined', () => {
      it('should return undefined if none are set', () => {
        expect(getDefaultView()).toBeUndefined();
      });

      it('should return min view if no default', () => {
        expect(getDefaultView(undefined, DATEPICKER_VIEW.year, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(undefined, undefined, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.month);
      });

      it('should return max view if no default and no min', () => {
        expect(getDefaultView(undefined, DATEPICKER_VIEW.year, undefined)).toBe(DATEPICKER_VIEW.year);
      });

      it('should return max view if no default and no min', () => {
        expect(getDefaultView(undefined, DATEPICKER_VIEW.year, undefined)).toBe(DATEPICKER_VIEW.year);
      });
    });

    describe('with default and min', () => {
      it('should return default if not less than min', () => {
        expect(getDefaultView(DATEPICKER_VIEW.day, undefined, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.day);
        expect(getDefaultView(DATEPICKER_VIEW.month, undefined, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(DATEPICKER_VIEW.year, undefined, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(DATEPICKER_VIEW.year, undefined, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.year);
      });

      it('should return min if default is less than min', () => {
        expect(getDefaultView(DATEPICKER_VIEW.day, undefined, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(DATEPICKER_VIEW.month, undefined, DATEPICKER_VIEW.year)).toBe(DATEPICKER_VIEW.year);
      });
    });

    describe('with default and max', () => {
      it('should return default if not more than max', () => {
        expect(getDefaultView(DATEPICKER_VIEW.day, DATEPICKER_VIEW.month, undefined)).toBe(DATEPICKER_VIEW.day);
        expect(getDefaultView(DATEPICKER_VIEW.day, DATEPICKER_VIEW.year, undefined)).toBe(DATEPICKER_VIEW.day);
        expect(getDefaultView(DATEPICKER_VIEW.month, DATEPICKER_VIEW.year, undefined)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(DATEPICKER_VIEW.year, DATEPICKER_VIEW.year, undefined)).toBe(DATEPICKER_VIEW.year);
      });

      it('should return max if default is more than max', () => {
        expect(getDefaultView(DATEPICKER_VIEW.month, DATEPICKER_VIEW.day, undefined)).toBe(DATEPICKER_VIEW.day);
        expect(getDefaultView(DATEPICKER_VIEW.year, DATEPICKER_VIEW.month, undefined)).toBe(DATEPICKER_VIEW.month);
      });
    });

    describe('with min and max', () => {
      it('should always return min', () => {
        expect(getDefaultView(undefined, DATEPICKER_VIEW.day, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.day);
        expect(getDefaultView(undefined, DATEPICKER_VIEW.day, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(undefined, DATEPICKER_VIEW.day, DATEPICKER_VIEW.year)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(undefined, DATEPICKER_VIEW.month, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.day);
        expect(getDefaultView(undefined, DATEPICKER_VIEW.month, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(undefined, DATEPICKER_VIEW.month, DATEPICKER_VIEW.year)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(undefined, DATEPICKER_VIEW.year, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.day);
        expect(getDefaultView(undefined, DATEPICKER_VIEW.year, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(undefined, DATEPICKER_VIEW.year, DATEPICKER_VIEW.year)).toBe(DATEPICKER_VIEW.year);
      });
    });

    describe('with default, min and max', () => {
      it('should return min if default is less than min, default otherwise', () => {
        expect(getDefaultView(DATEPICKER_VIEW.day, DATEPICKER_VIEW.day, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.day);
        expect(getDefaultView(DATEPICKER_VIEW.day, DATEPICKER_VIEW.day, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(DATEPICKER_VIEW.day, DATEPICKER_VIEW.day, DATEPICKER_VIEW.year)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(DATEPICKER_VIEW.day, DATEPICKER_VIEW.month, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.day);
        expect(getDefaultView(DATEPICKER_VIEW.day, DATEPICKER_VIEW.month, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(DATEPICKER_VIEW.day, DATEPICKER_VIEW.month, DATEPICKER_VIEW.year)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(DATEPICKER_VIEW.day, DATEPICKER_VIEW.year, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.day);
        expect(getDefaultView(DATEPICKER_VIEW.day, DATEPICKER_VIEW.year, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(DATEPICKER_VIEW.day, DATEPICKER_VIEW.year, DATEPICKER_VIEW.year)).toBe(DATEPICKER_VIEW.year);

        expect(getDefaultView(DATEPICKER_VIEW.month, DATEPICKER_VIEW.day, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(DATEPICKER_VIEW.month, DATEPICKER_VIEW.day, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(DATEPICKER_VIEW.month, DATEPICKER_VIEW.day, DATEPICKER_VIEW.year)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(DATEPICKER_VIEW.month, DATEPICKER_VIEW.month, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(DATEPICKER_VIEW.month, DATEPICKER_VIEW.month, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(DATEPICKER_VIEW.month, DATEPICKER_VIEW.month, DATEPICKER_VIEW.year)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(DATEPICKER_VIEW.month, DATEPICKER_VIEW.year, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(DATEPICKER_VIEW.month, DATEPICKER_VIEW.year, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.month);
        expect(getDefaultView(DATEPICKER_VIEW.month, DATEPICKER_VIEW.year, DATEPICKER_VIEW.year)).toBe(DATEPICKER_VIEW.year);

        expect(getDefaultView(DATEPICKER_VIEW.year, DATEPICKER_VIEW.day, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(DATEPICKER_VIEW.year, DATEPICKER_VIEW.day, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(DATEPICKER_VIEW.year, DATEPICKER_VIEW.day, DATEPICKER_VIEW.year)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(DATEPICKER_VIEW.year, DATEPICKER_VIEW.month, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(DATEPICKER_VIEW.year, DATEPICKER_VIEW.month, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(DATEPICKER_VIEW.year, DATEPICKER_VIEW.month, DATEPICKER_VIEW.year)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(DATEPICKER_VIEW.year, DATEPICKER_VIEW.year, DATEPICKER_VIEW.day)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(DATEPICKER_VIEW.year, DATEPICKER_VIEW.year, DATEPICKER_VIEW.month)).toBe(DATEPICKER_VIEW.year);
        expect(getDefaultView(DATEPICKER_VIEW.year, DATEPICKER_VIEW.year, DATEPICKER_VIEW.year)).toBe(DATEPICKER_VIEW.year);
      });
    });
  });

  describe('parseDateFormat', () => {
    const testDate = new Date(2023, 11, 25); // December 25, 2023

    it('should format date with dd/MM/yyyy pattern', () => {
      expect(parseDateFormat(testDate, 'dd/MM/yyyy')).toBe('25/12/2023');
    });

    it('should format date with dd-MM-yyyy pattern', () => {
      expect(parseDateFormat(testDate, 'dd-MM-yyyy')).toBe('25-12-2023');
    });

    it('should format date with yyyy-MM-dd pattern', () => {
      expect(parseDateFormat(testDate, 'yyyy-MM-dd')).toBe('2023-12-25');
    });

    it('should format date with MM/dd/yyyy pattern', () => {
      expect(parseDateFormat(testDate, 'MM/dd/yyyy')).toBe('12/25/2023');
    });

    it('should format date with d/m/yyyy pattern (no padding)', () => {
      expect(parseDateFormat(testDate, 'd/m/yyyy')).toBe('25/12/2023');
    });

    it('should format date with yy pattern (2-digit year)', () => {
      expect(parseDateFormat(testDate, 'dd/MM/yy')).toBe('25/12/23');
    });

    it('should handle single digit day and month', () => {
      const singleDigitDate = new Date(2023, 0, 5); // January 5, 2023
      expect(parseDateFormat(singleDigitDate, 'dd/MM/yyyy')).toBe('05/01/2023');
      expect(parseDateFormat(singleDigitDate, 'd/m/yyyy')).toBe('5/1/2023');
    });

    it('should handle custom separators', () => {
      expect(parseDateFormat(testDate, 'dd.mm.yyyy')).toBe('25.12.2023');
      expect(parseDateFormat(testDate, 'dd mm yyyy')).toBe('25 12 2023');
    });

    it('should handle mixed patterns', () => {
      expect(parseDateFormat(testDate, 'dd-mm-yy')).toBe('25-12-23');
      expect(parseDateFormat(testDate, 'd-mm-yyyy')).toBe('25-12-2023');
    });

    it('should handle invalid format gracefully', () => {
      expect(parseDateFormat(testDate, '')).toBe('25/12/2023'); // fallback
      expect(parseDateFormat(testDate, 'xyz')).toBe('25/12/2023'); // fallback
    });
  });
});
