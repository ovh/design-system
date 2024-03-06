import type { OsdsDatepicker } from '../osds-datepicker';
import { OdsDatepickerController } from './controller';
import { ODS_DATEPICKER_DAY } from '../constants/datepicker-day';

class OsdsDatepickerMock {
  constructor(attribute: Partial<OsdsDatepicker>) {
    Object.assign(this, attribute);
  }

  datepickerInstanceAccessor = {
    setDate: jest.fn(),
  };

  emitFocus = jest.fn();
  emitBlur = jest.fn();
  emitDatepickerValueChange = jest.fn();
  formatDate = jest.fn();
  getValidity = jest.fn();

  internals = {
    setFormValue: jest.fn(),
  };
}

describe('spec:ods-datepicker-controller', () => {
  let controller: OdsDatepickerController<OsdsDatepicker>;
  let component: OsdsDatepicker;

  function setup(attributes: Partial<OsdsDatepicker> = {}): void {
    component = new OsdsDatepickerMock(attributes) as unknown as OsdsDatepicker;
    controller = new OdsDatepickerController(component);
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('beforeInit', () => {
      it('should set value with defaultValue if value is undefined', () => {
        const defaultValue = new Date(0);
        const dummyFormat = 'dd/mm/yyyy';
        setup({ defaultValue, format: dummyFormat });

        controller.beforeInit();

        expect(component.value).toBe(defaultValue);
        expect(component.internals.setFormValue).toHaveBeenCalledTimes(1);
      });

      it('should set value as null if value and defaultValue are undefined', () => {
        setup();

        controller.beforeInit();

        expect(component.value).toBe(undefined);
        expect(component.internals.setFormValue).toHaveBeenCalledWith('');
      });
    });

    describe('getPattern', () => {
      it('should get patter', () => {
        setup();

        const patternEmpty = controller.getPattern();
        expect(patternEmpty).toBe(undefined);

        const patternEmpty2 = controller.getPattern('');
        expect(patternEmpty2).toBe(undefined);

        const pattern1 = controller.getPattern('d/m/y');
        expect(pattern1).toBe('[0-9]{1,2}/[0-9]{1,2}/[1-9]([0-9]{1,3})?');

        const pattern2 = controller.getPattern('dd-mm-yy');
        expect(pattern2).toBe('[0-9]{2}-[0-9]{2}-[0-9]{2}');

        const pattern3 = controller.getPattern('D M yyyy');
        expect(pattern3).toBe('[A-Za-z]{3} [A-Za-z]{3} [0-9]{4}');

        const pattern4 = controller.getPattern('MM/DD/yyyy');
        expect(pattern4).toBe('[A-Za-z]*/[A-Za-z]*/[0-9]{4}');

        const pattern5 = controller.getPattern('MM/DD/yyyy');
        expect(pattern5).toBe('[A-Za-z]*/[A-Za-z]*/[0-9]{4}');

        const pattern6 = controller.getPattern('dd/mm-yyyy');
        expect(pattern6).toBe('[0-9]{2}/[0-9]{2}-[0-9]{4}');

        // bug in the lib ? It's work because of the 'y'
        const pattern7 = controller.getPattern('azerty');
        expect(pattern7).toBe('azert[1-9]([0-9]{1,3})?');
      });
    });

    describe('formatDate', () => {
      const dummyFormat = 'dd/mm/yyyy';

      it('should return empty string if the date is not a valid date', () => {
        setup();

        // @ts-ignore for test purpose
        expect(controller.formatDate(null, dummyFormat)).toBe('');
        // @ts-ignore for test purpose
        expect(controller.formatDate(undefined, dummyFormat)).toBe('');
        // @ts-ignore for test purpose
        expect(controller.formatDate(42, dummyFormat)).toBe('');
        // @ts-ignore for test purpose
        expect(controller.formatDate('42', dummyFormat)).toBe('');
        // @ts-ignore for test purpose
        expect(controller.formatDate('2024-01-01', dummyFormat)).toBe('');
        expect(controller.formatDate(new Date('dummy date'), dummyFormat)).toBe('');
      });

      it('should return empty string if the format is not set', () => {
        setup();

        expect(controller.formatDate(new Date())).toBe('');
      });

      it('should return the formatted date if it is a valid date', () => {
        const dummyDate = new Date('2024-01-01');

        setup();

        expect(controller.formatDate(dummyDate, dummyFormat)).toBe(`${dummyDate} ${dummyFormat}`); // see stub
      });
    });

    describe('formatDates', () => {
      it('should return undefined if there are no dates', () => {
        setup();

        expect(controller.formatDates()).toBe(undefined);
      });

      it('should return an empty array if no dates are valid Date object', () => {
        const dummyDates = ['dummy', 42, null, undefined, new Date('dummy date')];
        setup();

        // @ts-ignore for test purpose
        expect(controller.formatDates(dummyDates)).toEqual([]);
      });

      it('should return formatted dates if they are valid Date object', () => {
        const dummyDate1 = new Date(0);
        const dummyDate2 = new Date('2024-01-01');
        setup();

        expect(controller.formatDates([dummyDate1, dummyDate2])).toEqual([
          `${dummyDate1} dd/mm/yyyy`,
          `${dummyDate2} dd/mm/yyyy`,
        ]); // see stub
      });
    });

    describe('isDate', () => {
      it('should return false if the date is not a valid date', () => {
        setup();

        // @ts-ignore for test purpose
        expect(controller.isDate()).toBe(false);
        // @ts-ignore for test purpose
        expect(controller.isDate(null)).toBe(false);
        // @ts-ignore for test purpose
        expect(controller.isDate(undefined)).toBe(false);
        // @ts-ignore for test purpose
        expect(controller.isDate(42)).toBe(false);
        // @ts-ignore for test purpose
        expect(controller.isDate('42')).toBe(false);
        // @ts-ignore for test purpose
        expect(controller.isDate('2024-01-01')).toBe(false);
        expect(controller.isDate(new Date('dummy date'))).toBe(false);
      });

      it('should return true if the date is a valid date', () => {
        setup();

        expect(controller.isDate(new Date())).toBe(true);
        expect(controller.isDate(new Date('2024-01-01'))).toBe(true);
      });
    });

    describe('onChange', () => {
      const dummyValue = new Date('2024-01-01');

      it('should do nothing if disabled', () => {
        setup({ disabled: true });

        controller.onChange(dummyValue);

        expect(component.value).toBe(undefined);
        expect(component.datepickerInstanceAccessor?.setDate).not.toHaveBeenCalled();
      });

      it('should reset value if new value is undefined', () => {
        setup();

        // @ts-ignore for test purpose
        controller.onChange();

        expect(component.value).toBe(null);
        expect(component.datepickerInstanceAccessor?.setDate).toHaveBeenCalledWith({ clear: true });
      });

      it('should reset value if new value is not a valid date', () => {
        setup();

        controller.onChange(new Date('dummy date'));

        expect(component.value).toBe(null);
        expect(component.datepickerInstanceAccessor?.setDate).toHaveBeenCalledWith({ clear: true });
      });

      it('should reset value if it is one of the disabled dates', () => {
        setup({ datesDisabled: [dummyValue] });

        controller.onChange(dummyValue);

        expect(component.value).toBe(null);
        expect(component.datepickerInstanceAccessor?.setDate).toHaveBeenCalledWith({ clear: true });
      });

      it('should reset value if it is one of the disabled days of week', () => {
        setup({ daysOfWeekDisabled: [ODS_DATEPICKER_DAY.monday] });

        controller.onChange(dummyValue);

        expect(component.value).toBe(null);
        expect(component.datepickerInstanceAccessor?.setDate).toHaveBeenCalledWith({ clear: true });
      });

      it('should reset value if it is later than the maxDate', () => {
        setup({ maxDate: new Date(0) });

        controller.onChange(dummyValue);

        expect(component.value).toBe(null);
        expect(component.datepickerInstanceAccessor?.setDate).toHaveBeenCalledWith({ clear: true });
      });

      it('should reset value if it is sooner than the minDate', () => {
        setup({ minDate: new Date() });

        controller.onChange(dummyValue);

        expect(component.value).toBe(null);
        expect(component.datepickerInstanceAccessor?.setDate).toHaveBeenCalledWith({ clear: true });
      });

      it('should set new value if it is valid', () => {
        setup();

        controller.onChange(dummyValue);

        expect(component.value).toBe(dummyValue);
        expect(component.datepickerInstanceAccessor?.setDate).toHaveBeenCalledWith(dummyValue);
      });
    });

    describe('onOdsValueChange', () => {
      it('should set internal form value', async() => {
        const dummyValue = '01/01/2024';
        setup();

        await controller.onOdsValueChange({ name: 'odsDatepicker', value: dummyValue });

        expect(component.internals.setFormValue).toHaveBeenCalledWith(dummyValue);
      });
    });
  });
});
