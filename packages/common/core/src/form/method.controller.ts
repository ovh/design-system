import type { OdsCommonFieldValidityState, OdsCommonFieldAttribute } from './interfaces/attributes';
import type { OdsCommonFieldMethod } from './interfaces/methods';
import type { OdsCommonFieldEvent } from './interfaces/events';
import { OdsGetValidityState } from './validation/ods-get-validity-state';

type OdsCommonFieldComponent = OdsCommonFieldAttribute & Partial<OdsCommonFieldEvent> & {
  el: HTMLElement;
  inputEl?: HTMLInputElement;
}

class OdsCommonFieldMethodController implements OdsCommonFieldMethod {

  constructor(private readonly component: OdsCommonFieldComponent) { }

  /**
   * empty the value
   */
  async clear(): Promise<void> {
    if (this.component.disabled) {
      return;
    }
    this.component.value = null;
    if (this.component.inputEl) {
      this.component.inputEl.value = '';
    }
    this.component.odsClear?.emit();
  }

  /**
   * active the focus on the input in order to let the user write something
   */
  async setFocus(): Promise<void> {
    if (this.component.disabled) {
      return;
    }
    if (this.component.inputEl) {
      this.component.inputEl.focus();
    } else {
      this.component.el.focus();
    }
    this.component.odsFocus?.emit();
  }

  /**
   * hide or display the value
   */
  async hide(): Promise<void> {
    if (this.component.disabled) {
      return;
    }
    this.component.masked = !this.component.masked;
    this.component.odsHide?.emit();
  }

  /**
   * restore the value to the initial state
   */
  async reset(): Promise<void> {
    this.component.value = this.component.defaultValue ? this.component.defaultValue : null;
    this.component.odsReset?.emit();
  }

  async setTabindex(value: number): Promise<void> {
    this.component.tabindex = value;
  }

  async getValidity(): Promise<OdsCommonFieldValidityState> {
    const forbiddenValue = this.hasForbiddenValue();
    return {
      ...(this.component.inputEl ? {
          ...OdsGetValidityState(this.component.inputEl.validity),
          forbiddenValue,
          invalid: forbiddenValue || !this.component.inputEl.validity.valid,
          valid: forbiddenValue ? false : this.component.inputEl.validity.valid,
      } : {
          customError: forbiddenValue,
          forbiddenValue,
          invalid: forbiddenValue,
          stepMismatch: false,
          valid: !forbiddenValue,
          valueMissing: false,
      }),
    };
  }

  /**
   * is the value of the component is a non-authorized value.
   * it returns true if the value is found in the list of forbidden values.
   * it returns true if the value is between a min/max from the forbidden values.
   */
  hasForbiddenValue(): boolean {
    switch (this.component.type) {
    case 'number':
      return this.component.forbiddenValues?.some((forbiddenValue:  string | number | { min: number, max: number }) => {
        if (typeof forbiddenValue === 'number') {
          return forbiddenValue.toString() === this.component.value?.toString();
        }
        if (this.component.value && typeof this.component.value === 'number' && this.hasMinMax(forbiddenValue)) {
          return this.component.value >= forbiddenValue.min && this.component.value <= forbiddenValue.max;
        }
        return false;
      }) || false;
    default:
      return this.component.forbiddenValues?.some((forbiddenValue: string | unknown) => {
        if (typeof forbiddenValue === 'string') {
          return forbiddenValue === this.component.value;
        }
        return false;
      }) || false;
    }
  }

  private hasMinMax(value: string | number | { min: number, max: number }): value is { min: number, max: number } {
    return typeof value !== 'string' && typeof value !== 'number' && 'min' in value && 'max' in value;
  }
} 

export {
    OdsCommonFieldMethodController,
    OdsCommonFieldComponent,
}