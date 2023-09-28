import type { OsdsDatepicker } from '../osds-datepicker';

/**
 * common controller logic for input component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsDatepickerController {
  private readonly component: OsdsDatepicker;

  constructor(component: OsdsDatepicker) {
    this.component = component;
  }

  onFocus() {
    if (!this.component.disabled) {
      this.component.hasFocus = true;
      this.component.emitFocus();
    }
  }

  onChange(newValue: Date | undefined | null, oldValue?: Date | null) {
    if(!this.component.disabled) {
      if (newValue === undefined || newValue === null || isNaN(newValue.getTime())) {
        this.component.value = null;
        this.component.datepickerInstance?.setDate({ clear: true });
        this.component.emitDatepickerValueChange(null, oldValue);
      } else {
        if (this.validateValue(newValue)) {
          this.component.value = newValue;
          this.component.datepickerInstance?.setDate(newValue);
          this.component.emitDatepickerValueChange(newValue, oldValue);
        } else {
          this.component.value = null;
          this.component.datepickerInstance?.setDate({ clear: true });
          this.component.emitDatepickerValueChange(null, oldValue);
        }
      }
    }
  }

  onBlur() {
    this.component.hasFocus = false;
    this.component.emitBlur();
  }

  private getMidnightDate(date: Date) {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  }

  private validateValue(value?: Date) {
    if (value) {
      if (!this.component.maxDate || this.getMidnightDate(value).getTime() <= this.getMidnightDate(this.component.maxDate).getTime() ) {
        if (!this.component.minDate || this.getMidnightDate(value).getTime() >= this.getMidnightDate(this.component.minDate).getTime() ) {
          if (!this.component.daysOfWeekDisabled || !this.component.daysOfWeekDisabled.includes(value.getDay())) {
            // Checking if the datesDisabled array exists, and if so checking if it contains the value
            if (!this.component.datesDisabled || !this.component.datesDisabled.some(d => this.getMidnightDate(d).getTime() === this.getMidnightDate(value).getTime())) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}

export {
  OdsDatepickerController,
};
