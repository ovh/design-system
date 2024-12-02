jest.mock('vanillajs-datepicker', () => ({
  Datepicker: {
    formatDate: jest.fn().mockReturnValue('formatted date'),
    parseDate: jest.fn().mockReturnValue('2000-01-02'),
  },
}));
jest.mock('../../../../utils/dom');

import { Datepicker } from 'vanillajs-datepicker';
import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';
import { formatDate, getInitialValue, parseDate, updateInternals } from '../../src/controller/ods-datepicker';

describe('ods-datepicker controller', () => {
  beforeEach(jest.clearAllMocks);

  describe('formatDate', () => {
    const dummyFormat = 'dd/mm/yyyy';

    it('should return an empty string if no date is passed', () => {
      // @ts-ignore for test purpose
      expect(formatDate(undefined, dummyFormat)).toBe('');
      expect(formatDate(null, dummyFormat)).toBe('');
    });

    it('should return a formatted date', () => {
      const dummyDate = new Date();

      expect(formatDate(dummyDate, dummyFormat)).toBe('formatted date');
      expect(Datepicker.formatDate).toHaveBeenCalledTimes(1);
      expect(Datepicker.formatDate).toHaveBeenCalledWith(dummyDate, dummyFormat);
    });
  });

  describe('getInitialValue', () => {
    const dummyFormat = 'dummy format';

    it('should return null if value is null and no default value', () => {
      expect(getInitialValue(null, dummyFormat)).toBe(null);
    });

    it('should return date if value is set regarding of default value', () => {
      expect(getInitialValue(new Date(0), dummyFormat)).toEqual(new Date(0));
      expect(getInitialValue(new Date(0), dummyFormat, '2000-01-02')).toEqual(new Date(0));
    });

    it('should return default value if value is null', () => {
      expect(getInitialValue(null, dummyFormat, 'default')).toEqual(new Date('2000-01-02'));
      expect(Datepicker.parseDate).toHaveBeenCalledWith('default', dummyFormat);
    });
  });

  describe('parseDate', () => {
    const dummyFormat = 'dd/mm/yyyy';

    it('should return null if no value is passed', () => {
      // @ts-ignore for test purpose
      expect(parseDate(undefined, dummyFormat)).toBeNull();
      // @ts-ignore for test purpose
      expect(parseDate(null, dummyFormat)).toBeNull();
    });

    it('should return a date object', () => {
      const dummyStr = '01/02/2004';

      expect(parseDate(dummyStr, dummyFormat)?.toISOString()).toBe('2000-01-02T00:00:00.000Z');
      expect(Datepicker.parseDate).toHaveBeenCalledTimes(1);
      expect(Datepicker.parseDate).toHaveBeenCalledWith(dummyStr, dummyFormat);
    });
  });

  describe('updateInternals', () => {
    const dummyInput = { dummy: 'input' };
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

    it('should not set internal validity if no input element is defined', () => {
      updateInternals(dummyInternal, 'dummyValue');

      expect(setInternalsValidityFromHtmlElement).not.toHaveBeenCalled();
    });

    it('should set internal validity if input element is defined', () => {
      updateInternals(dummyInternal, 'dummyValue', dummyInput as unknown as HTMLInputElement);

      expect(setInternalsValidityFromHtmlElement).toHaveBeenCalledWith(dummyInput, dummyInternal);
    });
  });
});
