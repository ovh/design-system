import type { OdsGenericFieldValidityState } from './interfaces/attributes';
import type { OdsGenericFormMethod } from './interfaces/methods';
import type { ODS_INPUT_TYPE } from './constants/ods-input-type';
import type { OdsFormForbiddenValues } from './validation/ods-form-forbidden-values';
import type { OdsInputValue } from './ods-input-value';
import { OdsGetValidityState } from './validation/ods-get-validity-state';

interface GenericFormComponent {
  defaultValue?: OdsInputValue | string | Date | HTMLInputElement['value'];
  disabled?: boolean;  
  emitFocus?: () => void;
  forbiddenValues?: OdsFormForbiddenValues;
  hasFocus?: boolean
  inputEl?: HTMLInputElement;
  masked?: boolean;
  tabindex?: number;
  type?: ODS_INPUT_TYPE;
  value?: OdsInputValue | string | Date | HTMLInputElement['value'];
}

class OdsGenericFormMethodController implements OdsGenericFormMethod {

  constructor(private readonly component: GenericFormComponent) { }

  /**
   * empty the value
   */
  async clear(): Promise<void> {
    if (this.component.disabled) {
      return;
    }
    this.component.value = '';
    if (this.component.inputEl) {
      this.component.inputEl.value = '';
    }
  }

  /**
   * active the focus on the input in order to let the user write something
   */
  async setFocus(): Promise<void> {
    if (this.component.disabled) {
      return;
    }
    this.component.inputEl?.focus();
    this.component.hasFocus = true;
    this.component?.emitFocus?.();
  }

  /**
   * hide or display the value
   */
  async hide(): Promise<void> {
    if (this.component.disabled) {
      return;
    }
    this.component.masked = !this.component.masked;
  }

  /**
   * restore the value to the initial state
   */
  async reset(): Promise<void> {
    this.component.value = this.component.defaultValue ? this.component.defaultValue.toString() : '';
  }

  async setTabindex(value: number): Promise<void> {
    this.component.tabindex = value;
  }

  async getValidity(): Promise<OdsGenericFieldValidityState> {
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
      return this.component.forbiddenValues?.some((forbiddenValue: number | { min: number, max: number }) => {
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

  private hasMinMax(value: number | { min: number, max: number }): value is { min: number, max: number } {
    return typeof value !== 'number' && 'min' in value && 'max' in value;
  }
} 

export {
    OdsGenericFormMethodController,
    GenericFormComponent,
}
  