import type { OdsGenericFormFieldValidityState } from './interfaces/attributes';
import type { OdsGenericFormMethod } from './interfaces/methods';
// import type { OsdsInput } from '@ovhcloud/ods-component-input';
import { OdsGetValidityState } from './validation/ods-get-validity-state';

class OdsGenericFormMethodController implements OdsGenericFormMethod {

  constructor(private readonly osdsInput: any) { }

  /**
   * empty the value
   */
  async clear(): Promise<void> {
    if (this.osdsInput.disabled) {
      return;
    }
    this.osdsInput.value = '';
    if (this.osdsInput.inputEl) {
      this.osdsInput.inputEl.value = '';
    }
  }

  /**
   * active the focus on the input in order to let the user write something
   */
  async setFocus(): Promise<void> {
    this.osdsInput.inputEl?.focus();
  }

  /**
   * hide or display the value
   */
  async hide(): Promise<void> {
    if (this.osdsInput.disabled) {
      return;
    }
    this.osdsInput.masked = !this.osdsInput.masked;
  }

  /**
   * restore the value to the initial state
   */
  async reset(): Promise<void> {
    this.osdsInput.value = this.osdsInput.defaultValue ? this.osdsInput.defaultValue.toString() : '';
  }

  async setTabindex(value: number): Promise<void> {
    console.log('setTabindex', value)
    this.osdsInput.tabindex = value;
    console.log('', this.osdsInput.tabindex)
  }

  async getValidity(): Promise<OdsGenericFormFieldValidityState> {
    const forbiddenValue = this.hasForbiddenValue();
    return {
      ...(this.osdsInput.inputEl ? {
          ...OdsGetValidityState(this.osdsInput.inputEl.validity),
          forbiddenValue,
          invalid: forbiddenValue || !this.osdsInput.inputEl.validity.valid,
          valid: forbiddenValue ? false : this.osdsInput.inputEl.validity.valid,
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
    switch (this.osdsInput.type) {
    case 'number':
      return this.osdsInput.forbiddenValues.some((forbiddenValue: number | { min: number, max: number }) => {
        if (typeof forbiddenValue === 'number') {
          return forbiddenValue.toString() === this.osdsInput.value?.toString();
        }
        if (this.osdsInput.value && typeof this.osdsInput.value === 'number' && this.hasMinMax(forbiddenValue)) {
          return this.osdsInput.value >= forbiddenValue.min && this.osdsInput.value <= forbiddenValue.max;
        }
        return false;
      });
    default:
      return this.osdsInput.forbiddenValues.some((forbiddenValue: string | unknown) => {
        if (typeof forbiddenValue === 'string') {
          return forbiddenValue === this.osdsInput.value;
        }
        return false;
      });
    }
  }

  private hasMinMax(value: number | { min: number, max: number }): value is { min: number, max: number } {
    return typeof value !== 'number' && 'min' in value && 'max' in value;
  }
} 

export {
    OdsGenericFormMethodController,
}
  