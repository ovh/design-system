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

  beforeInit(): void {
    this.logger.debug('[datepicker]', 'beforeInit', this.component.value);
    this.onChange(this.component.value);
  }

  onFocus() {
    this.component.hasFocus = true;
    this.component.emitFocus();
  }

  onChange(newValue: Date | undefined | null, value?: Date | null) {
    this.logger.debug(`[datepicker=${newValue}]`, 'value changed', { newValue, value });
    if(!this.component.disabled) {
      if (newValue === undefined || newValue === null || isNaN(newValue.getTime())) {
        this.component.value = null;
      } else {
        this.component.value = newValue;
        this.component.datepickerInstance?.setDate(newValue);
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
