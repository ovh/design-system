import { DATEPICKER_VIEW } from '../../src/constants/datepicker-view';
import { getDefaultView } from '../../src/controller/datepicker';

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
});
