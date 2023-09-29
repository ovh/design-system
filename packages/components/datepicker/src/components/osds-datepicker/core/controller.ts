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

  onChange(newValue: Date | undefined | null, oldValue?: Date | null): void {
    if(!this.component.disabled) {
      if (!this.validateValue(newValue)) {
        this.component.value = null;
        this.component.datepickerInstance?.setDate({ clear: true });
        this.component.emitDatepickerValueChange(null, oldValue ? oldValue : null);
      } else {
        this.component.value = newValue;
        this.component.datepickerInstance?.setDate(newValue);
        this.component.emitDatepickerValueChange(newValue, oldValue ? oldValue : null);
      }
    }
  }

  onBlur() {
    this.component.hasFocus = false;
    this.component.emitBlur();
  }

  private getMidnightDate(date: Date): Date {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  }

  private validateValue(value?: Date | null | undefined): boolean {
    if (!value || value === null || isNaN(value.getTime())) {
      return false;
    }

    const midnightValue = this.getMidnightDate(value).getTime();

    if (this.component.datesDisabled && this.component.datesDisabled.some(d => this.getMidnightDate(d).getTime() === midnightValue)) {
      return false;
    }

    if (this.component.daysOfWeekDisabled && this.component.daysOfWeekDisabled.includes(value.getDay())) {
      return false;
    }

    if (this.component.maxDate && midnightValue > this.getMidnightDate(this.component.maxDate).getTime()) {
      return false;
    }

    if (this.component.minDate && midnightValue < this.getMidnightDate(this.component.minDate).getTime()) {
      return false;
    }

    return true;
  }
}

export {
  OdsDatepickerController,
};
