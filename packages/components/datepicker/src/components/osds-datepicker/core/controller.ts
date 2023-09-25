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
      } else {
        this.component.value = newValue;
        this.component.datepickerInstance?.setDate(newValue);
        this.component.emitValueChange(newValue, oldValue);
      }
    }
  }

  onBlur() {
    this.component.hasFocus = false;
    this.component.emitBlur();
  }
}

export {
  OdsDatepickerController,
};
