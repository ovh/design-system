import type { OsdsDatepicker } from '../osds-datepicker';
import { OdsLogger } from '@ovhcloud/ods-common-core';

/**
 * common controller logic for input component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsDatepickerController {
  private readonly component: OsdsDatepicker;
  private readonly logger = new OdsLogger('OdsDatepickerController');

  constructor(component: OsdsDatepicker) {
    this.component = component;
  }

  onFocus() {
    this.component.hasFocus = true;
    this.component.emitFocus();
  }

  onChange(newValue: Date | undefined, value?: Date) {
    this.logger.debug(`[datepicker=${newValue}]`, 'value changed', { newValue, value });
    if(!this.component.disabled) {
      if (newValue === undefined || isNaN(newValue.getTime())) {
        this.component.value = undefined;
      } else {
        this.component.value = newValue;
      }
    }
  }

  onBlur() {
    this.component.hasFocus = false;
    this.component.emitBlur();
  }

  onValueChange(value: Date, oldValue?: Date): void {
    this.logger.debug(`[datepicker=${this.component.value}]`, 'value changed', { value, oldValue });
    this.validateValue();
  }

  private validateValue() {
    return true
  }
}

export {
  OdsDatepickerController,
};
