import type { OsdsInput } from '../osds-input';
import type { OdsCommonFieldValidityState, OdsFormControl, OdsInputValue } from '@ovhcloud/ods-common-core';
import { OdsGetValidityState, OdsWarnComponentAttribute } from '@ovhcloud/ods-common-core';
import { ODS_INPUT_TYPE } from '../constants/input-type';

class OdsInputController {
  private readonly component: OsdsInput;

  constructor(component: OsdsInput) {
    this.component = component;
  }

  /**
   * handle the change of value from the vanilla input.
   * it will cast the component value to number if necessary
   * @param newValue - value of the HTML input
   */
  private handleInputValue(newValue: HTMLInputElement['value']): void {
    if(!this.component.disabled) {
      if (newValue === '') {
        this.component.value = newValue;
      } else {
        switch (this.component.type) {
        case 'number':
          this.component.value = Number(newValue);
          break;
        default:
          this.component.value = newValue;
        }
      }
    }
  }

  /**
   * get the validity object properties of the component.
   * it is based on the validity state of the vanilla input.
   * in case of no vanilla input passed, it returns the default value for each property
   * @param inputEl - vanilla input to analyze (may undefined if not already in the DOM during initialization)
   */
  getInputValidity(inputEl?: HTMLInputElement): OdsGenericFieldValidityState {
    const forbiddenValue = this.hasForbiddenValue();
    return {
      ...(inputEl ? {
        ...OdsGetValidityState(inputEl.validity),
        forbiddenValue,
        invalid: !inputEl.validity.valid,
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
  private hasForbiddenValue(): boolean {
    switch (this.component.type) {
    case 'number':
      return this.component.forbiddenValues.some((forbiddenValue: unknown) => {
        if (typeof forbiddenValue === 'number') {
          return `${forbiddenValue}` === `${this.component.value}`;
        }
        if (this.component.value && typeof this.component.value === 'number') {
          return this.component.value >= (forbiddenValue as ({ min: number, max: number })).min && this.component.value <= (forbiddenValue as ({ min: number, max: number })).max;
        }
        return false;
      });
    default:
      return this.component.forbiddenValues.some((forbiddenValue: unknown) => {
        if (typeof forbiddenValue === 'string') {
          return forbiddenValue === this.component.value;
        }
        return false;
      });
    }
  }

  onFormControlChange(formControl?: OdsFormControl<OdsCommonFieldValidityState>): void {
    if (formControl) {
      formControl.register(this.component);
    }
  }

  beforeInit(): void {
    this.onFormControlChange(this.component.formControl);
    this.assertValue(this.component.value);
    if (!this.component.value && this.component.value !== 0) {
      this.component.value = this.component.defaultValue;
    }
    this.component.internals.setFormValue(this.component.value?.toString() ?? '');
  }

  onValueChange(value: OdsInputValue, oldValue?: OdsInputValue): void {
    this.assertValue(value);
    this.component.internals.setFormValue(value?.toString() ?? '');
    this.component.emitChange(value, oldValue);
  }

  assertValue(value: OdsInputValue): void {
    this.validateValue(value as number);
    this.updateInputCustomValidation();
  }

  private validateValue(value?: number): void {
    if (this.component.type !== ODS_INPUT_TYPE.number) {
      return;
    }

    if (!value && value !== 0) {
      console.warn('[OsdsInput] The value attribute must be a correct number');
    }
    if ((value || value === 0) && (this.component.min || this.component.min === 0) && (this.component.max || this.component.max === 0) && this.component.step) {
      OdsWarnComponentAttribute<number, OsdsInput>({
        attribute: +value,
        attributeName: 'value',
        max: this.component.max,
        min: this.component.min,
      });
      if (value && ((value - this.component.min) % this.component.step)) {
        console.warn(
          `[OsdsInput] The value attribute must be a multiple of ${this.component.step}`,
        );
      }
    }
  }

  private updateInputCustomValidation(): void {
    if (this.component.commonFieldMethodController.hasForbiddenValue()) {
      this.component.inputEl?.setCustomValidity('forbiddenValue');
    } else {
      this.component.inputEl?.setCustomValidity('');
    }
  }

  stepUp(): void {
    const inputEvent = new CustomEvent('input', { bubbles: true });
    if (this.component.inputEl) {
      this.component.inputEl.stepUp();
      this.component.inputEl.dispatchEvent(inputEvent);
    }
  }

  stepDown(): void {
    const inputEvent = new CustomEvent('input', { bubbles: true });
    if (this.component.inputEl) {
      this.component.inputEl.stepDown();
      this.component.inputEl.dispatchEvent(inputEvent);
    }
  }

  onFocus(): void {
    this.component.hasFocus = true;
    this.component.emitFocus();
  }

  onBlur(): void {
    this.component.hasFocus = false;
    this.component.emitBlur();
  }

  onInput(event: Event): void {
    event.preventDefault();
    this.component.inputEl && this.handleInputValue(this.component.inputEl.value);
  }

  async hasError(): Promise<boolean> {
    const validity = await this.component.commonFieldMethodController.getValidity();
    return this.component.error || validity.invalid;
  }

  reset(): void {
    this.component.value = this.component.defaultValue ? `${this.component.defaultValue}` : '';
  }

  clear(): void {
    if (!this.component.disabled) {
      this.component.value = '';
      if (this.component.inputEl) {
        this.component.inputEl.value = '';
      }
    }
  }

  hide(): void {
    if (!this.component.disabled) {
      this.component.masked = !this.component.masked;
    }
  }
}

export {
  OdsInputController,
};
