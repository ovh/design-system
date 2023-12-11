import type { OsdsTextArea } from '../osds-textarea';
import type { OdsTextAreaValidityState } from '@ovhcloud/ods-common-core';

import { OdsFormControl, OdsLogger, OdsTextAreaGetValidityState } from '@ovhcloud/ods-common-core';


/**
 * common controller logic for textarea component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsTextAreaController {
  private readonly logger = new OdsLogger('OdsTextAreaController');
  protected component: OsdsTextArea;

  constructor(component: OsdsTextArea) {
    this.component = component;
  }

  /**
   * handle the change of value from the vanilla textarea.
   * @param newValue - value of the HTML textarea
   */
  handleTextAreaValue(newValue: HTMLTextAreaElement['value']): void {
    if(!this.component.disabled) {
      this.component.value = newValue;
    }
  }

  /**
   * get the validity object properties of the component.
   * it is based on the validity state of the vanilla textarea.
   * in case of no vanilla textarea passed, it returns the default value for each property
   * @param textAreaEl - vanilla textarea to analyze (may undefined if not already in the DOM during initialization)
   */
  getTextAreaValidity(textAreaEl?: HTMLTextAreaElement): OdsTextAreaValidityState {
    return {
      ...(textAreaEl ? {
        ...OdsTextAreaGetValidityState(textAreaEl.validity),
        invalid: !textAreaEl.validity.valid,
      } : {
        valid: true,
        valueMissing: false,
        invalid: false,
        customError: false,
      }),
    };
  }

  onInput(event: Event): void {
    event.preventDefault();
    this.logger.debug('oninput', this.component.textInputEl?.value);
    this.component.textInputEl && this.handleTextAreaValue(this.component.textInputEl.value);
  }

  onBlur(): void {
    this.component.emitBlur();
    this.component.hasFocus = false;
  }

  onFocus(): void {
    this.component.emitFocus();
  }

  onChange(): void {
    this.logger.debug('onChange', this.component.textInputEl?.value);
  }

  registerFormControl(formControl?: OdsFormControl<OdsTextAreaValidityState>): void {
    this.logger.log(`[textarea=${this.component.value}]`, 'onFormControlChange', formControl, formControl && formControl.id);
    if (formControl) {
      formControl.register(this.component);
    }
  }

  emitValue(value: HTMLTextAreaElement['value'], oldValue?: HTMLTextAreaElement['value']): void {
    this.logger.debug(`[textarea=${this.component.value}]`, 'value changed', { value, oldValue });
    this.component.emitChange(value, oldValue);
  }

  onDefaultValueChange(defaultValue?: HTMLTextAreaElement['defaultValue']) {
    this.logger.debug(`[textarea=${this.component.value}]`, 'defaultValue', defaultValue);
  }

  setFocus(): void {
    const el = this.component.textInputEl;

    if (el && !this.component.disabled) {
      el.focus();
      this.onFocus();
    }
  }

  setValue(value = ''): void {
    if (this.component.textInputEl) {
      this.component.textInputEl.value = value;
    }
    this.component.value = value;
  }

  hasError(): boolean {
    return this.component.error || this.getTextAreaValidity().invalid;
  }

  beforeInit(): void {
    this.registerFormControl(this.component.formControl);
    this.emitValue(this.component.value);
    this.onDefaultValueChange(this.component.defaultValue);
    if (!this.component.value) {
      this.component.value = this.component.defaultValue || '';
    }
  }

  setTextAreaTabindex(value: number): void {
    this.component.textInputTabIndex = value;
  }
}

export {
  OdsTextAreaController,
};
