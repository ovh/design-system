import type { OsdsTextArea } from '../osds-textarea';
import type { OdsTextAreaValidityState } from '@ovhcloud/ods-common-core';
import { OdsFormControl, OdsTextAreaGetValidityState } from '@ovhcloud/ods-common-core';

class OdsTextAreaController {
  protected component: OsdsTextArea;

  constructor(component: OsdsTextArea) {
    this.component = component;
  }

  /**
   * handle the change of value from the vanilla textarea.
   * @param newValue - value of the HTML textarea
   */
  handleTextAreaValue(newValue: HTMLTextAreaElement['value']): void {
    if (!this.component.disabled) {
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
    this.component.textInputEl && this.handleTextAreaValue(this.component.textInputEl.value);
  }

  onBlur(): void {
    this.component.emitBlur();
    this.component.hasFocus = false;
  }

  onFocus(): void {
    this.component.emitFocus();
  }

  registerFormControl(formControl?: OdsFormControl<OdsTextAreaValidityState>): void {
    if (formControl) {
      formControl.register(this.component);
    }
  }

  emitValue(value: HTMLTextAreaElement['value'], oldValue?: HTMLTextAreaElement['value']): void {
    this.component.emitChange(value, oldValue);
  }

  setFocus(): void {
    const el = this.component.textInputEl;

    if (el && !this.component.disabled) {
      el.focus();
      this.onFocus();
    }
  }

  reset() {
    this.component.value = this.component.defaultValue ? `${this.component.defaultValue}` : '';
  }

  clear() {
    if (!this.component.disabled) {
      this.component.value = '';
      if (this.component.textInputEl) {
        this.component.textInputEl.value = '';
      }
    }
  }

  hasError(): boolean {
    return this.component.error || this.getTextAreaValidity().invalid;
  }

  beforeInit(): void {
    this.registerFormControl(this.component.formControl);
    if (!this.component.value) {
      this.component.value = this.component.defaultValue || '';
    }
    this.component.internals.setFormValue(this.component.value?.toString() ?? '');
  }

  setTextAreaTabindex(value: number): void {
    this.component.textInputTabIndex = value;
  }

  onValueChange(value: string, oldValue?: string): void {
    this.component.internals.setFormValue(value?.toString() ?? '');
    this.component.emitChange(value, oldValue);
  }
}

export {
  OdsTextAreaController,
};
