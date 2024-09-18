jest.mock('vanillajs-datepicker', () => ({
  Datepicker: {
    formatDate: jest.fn().mockReturnValue('formatted date'),
  },
}));

import { Datepicker } from 'vanillajs-datepicker';
import { formatDate, updateInternals } from '../../src/controller/ods-datepicker';

describe('ods-datepicker controller', () => {
  beforeEach(jest.clearAllMocks);

  describe('formatDate', () => {
    const dummyFormat = 'dd/mm/yyyy';

    it('should return an empty string if no date is passed', () => {
      // @ts-ignore for test purpose
      expect(formatDate(undefined, dummyFormat)).toBe('');
      expect(formatDate(null, dummyFormat)).toBe('');
    });

    it('should return an empty string if the date is not a correct Date', () => {
      // @ts-ignore for test purpose
      expect(formatDate('I am not a date', dummyFormat)).toBe('');
      // @ts-ignore for test purpose
      expect(formatDate(true, dummyFormat)).toBe('');
      // @ts-ignore for test purpose
      expect(formatDate({ dummy: 'date' }, dummyFormat)).toBe('');
      // @ts-ignore for test purpose
      expect(formatDate([new Date()], dummyFormat)).toBe('');
    });

    it('should return a formatted date', () => {
      const dummyDate = new Date();

      expect(formatDate(dummyDate, dummyFormat)).toBe('formatted date');
      expect(Datepicker.formatDate).toHaveBeenCalledTimes(1);
      expect(Datepicker.formatDate).toHaveBeenCalledWith(dummyDate, dummyFormat);
    });
  });

  describe('updateInternals', () => {
    const dummyInternal = {
      setFormValue: jest.fn(),
    } as unknown as ElementInternals;

    it('should set internal value with empty string', () => {
      // @ts-ignore for test purpose
      updateInternals(dummyInternal);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');

      // @ts-ignore for test purpose
      updateInternals(dummyInternal, undefined);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');

      updateInternals(dummyInternal, null);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');
    });

    it('should set internal value with string value', () => {
      const dummyValue = 'dummy value';

      updateInternals(dummyInternal, dummyValue);

      expect(dummyInternal.setFormValue).toHaveBeenCalledWith(dummyValue);
    });
  });
});
