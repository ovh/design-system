import { OdsDatepickerController } from './controller';
import { OsdsDatepicker } from '../osds-datepicker';

class OsdsDatepickerMock {
  constructor(attribute: Partial<OsdsDatepicker>) {
    Object.assign(this, attribute);
  }

  emitFocus = jest.fn();
  emitBlur = jest.fn();
  emitDatepickerValueChange = jest.fn();
  formatDate = jest.fn();

  internals = {
    setFormValue: jest.fn()
  };
}

describe('spec:ods-datepicker-controller', () => {
  let controller: OdsDatepickerController;
  let component: OsdsDatepicker;

  function setup(attributes: Partial<OsdsDatepicker> = {}) {
    component = new OsdsDatepickerMock(attributes) as unknown as OsdsDatepicker;
    controller = new OdsDatepickerController(component);
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('methods:onFocus', () => {
      it('should set hasFocus to true and call emitFocus if component is not disabled', () => {
        setup();
        controller.onFocus();
        expect(component.hasFocus).toBe(true);
        expect(component.emitFocus).toHaveBeenCalledTimes(1);
      });

      it('should not change hasFocus and not call emitFocus if component is disabled', () => {
        setup({ disabled: true });
        controller.onFocus();
        expect(component.hasFocus).toBeFalsy();
        expect(component.emitFocus).not.toHaveBeenCalled();
      });
    });

    describe('methods:onBlur', () => {
      it('should set hasFocus to false and call emitBlur', () => {
        setup();
        controller.onBlur();
        expect(component.hasFocus).toBe(false);
        expect(component.emitBlur).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:onChange', () => {
      it('should reset value and call emitDatepickerValueChange with null if value is not valid', () => {
        setup();
        const oldValue = new Date('2022-01-01');
        const newValue = new Date(NaN);
        controller.onChange(newValue, oldValue);
        expect(component.value).toBeNull();
        expect(component.emitDatepickerValueChange).toHaveBeenCalledWith(null, oldValue);
      });

      it('should set new value and call emitDatepickerValueChange with new value if value is valid', () => {
        setup();
        const oldValue = new Date('2022-01-01');
        const newValue = new Date('2023-01-01');
        controller.onChange(newValue, oldValue);
        expect(component.value).toEqual(newValue);
        expect(component.emitDatepickerValueChange).toHaveBeenCalledWith(newValue, oldValue);
      });

      it('should reset value if date is disabled', () => {
        const disabledDate = new Date('2023-05-05');
        setup({ datesDisabled: [disabledDate] });
        controller.onChange(disabledDate);
        expect(component.value).toBeNull();
        expect(component.emitDatepickerValueChange).toHaveBeenCalledWith(null, null);
      });

      it('should reset value if day of the week is disabled', () => {
        const sunday = new Date('2023-10-01'); // 1st of October 2023 is a sunday
        setup({ daysOfWeekDisabled: [0] });
        controller.onChange(sunday);
        expect(component.value).toBeNull();
        expect(component.emitDatepickerValueChange).toHaveBeenCalledWith(null, null);
      });

      it('should reset value if date is greater than maxDate', () => {
        const maxDate = new Date('2023-05-05');
        const dateAboveMax = new Date('2023-05-06');
        setup({ maxDate: maxDate });
        controller.onChange(dateAboveMax);
        expect(component.value).toBeNull();
        expect(component.emitDatepickerValueChange).toHaveBeenCalledWith(null, null);
      });

      it('should reset value if date is less than minDate', () => {
        const minDate = new Date('2023-05-05');
        const dateBelowMin = new Date('2023-05-04');
        setup({ minDate: minDate });
        controller.onChange(dateBelowMin);
        expect(component.value).toBeNull();
        expect(component.emitDatepickerValueChange).toHaveBeenCalledWith(null, null);
      });
    });
  });
});
