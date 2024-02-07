import type { OdsInputValue } from '@ovhcloud/ods-common-core';
import type { OsdsDatepicker } from '../osds-datepicker';

class OdsDatepickerController {
  private readonly component: OsdsDatepicker;

  constructor(component: OsdsDatepicker) {
    this.component = component;
  }

  beforeInit() {
    if (!this.component.value) {
      this.component.value = this.component.defaultValue;
    }
    this.component.internals.setFormValue(this.component.formatDate(this.component.value) ?? '');
  }

  onFocus(): void {
    if (!this.component.disabled) {
      this.component.hasFocus = true;
      this.component.emitFocus();
    }
  }

  onChange(newValue: Date | undefined | null, oldValue?: Date | null): void {
    if(!this.component.disabled) {
      if (!this.validateValue(newValue)) {
        this.component.value = null;
        this.component.datepickerInstanceAccessor?.setDate({ clear: true });
        this.component.emitDatepickerValueChange(null, oldValue ? oldValue : null);
        this.component.internals.setFormValue('');
      } else {
        this.component.value = newValue as OdsInputValue;
        this.component.datepickerInstanceAccessor?.setDate(newValue);
        this.component.emitDatepickerValueChange(newValue, oldValue ? oldValue : null);
        this.component.internals.setFormValue(this.component.formatDate(newValue) ?? '');
      }
      this.component.hasFocus = false;
    }
  }

  onBlur(): void {
    this.component.hasFocus = false;
    this.component.emitBlur();
  }

  onClick(): void {
    this.component.hasFocus = true;
  }

  private getMidnightDate(date: Date): Date {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  }

  private validateValue(value?: Date | null | undefined): boolean {
    if (!value || value === null || isNaN(value.getTime())) {
      return false;
    }

    const midnightValue = this.getMidnightDate(value).getTime();

    if (this.component.datesDisabled && this.component.datesDisabled.some((d) => this.getMidnightDate(d).getTime() === midnightValue)) {
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
