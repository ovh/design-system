import type { OsdsInput } from '../osds-input';
import type { OdsCommonFieldValidityState, OdsFormControl, OdsInputValue } from '@ovhcloud/ods-common-core';
import { OdsLogger, OdsWarnComponentAttribute } from '@ovhcloud/ods-common-core';

/**
 * common controller logic for input component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsInputController {
  private readonly component: OsdsInput;
  private readonly logger = new OdsLogger('OdsInputController');

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

  onFormControlChange(formControl?: OdsFormControl<OdsCommonFieldValidityState>): void {
    this.logger.log(`[input=${this.component.value}]`, 'onFormControlChange', formControl, formControl && formControl.id);
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
    this.logger.debug(`[input=${this.component.value}]`, 'value changed', { oldValue, value });
    this.assertValue(value);
    this.component.internals.setFormValue(value?.toString() ?? '');
    this.component.emitChange(value, oldValue);
  }

  assertValue(value: OdsInputValue): void {
    this.validateValue(value as number);
    this.updateInputCustomValidation();
  }

  private validateValue(value?: number): void {
    if (!value && value !== 0) {
      this.logger.warn('[OsdsInput] The value attribute must be a correct number');
    }
    if ((value || value === 0) && (this.component.min || this.component.min === 0) && (this.component.max || this.component.max === 0) && this.component.step) {
      OdsWarnComponentAttribute<number, OsdsInput>({
        attribute: +value,
        attributeName: 'value',
        logger: this.logger,
        max: this.component.max,
        min: this.component.min,
      });
      if (value && ((value - this.component.min) % this.component.step)) {
        this.logger.warn(
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

  onInput(event: Event): void {
    event.preventDefault();
    this.component.inputEl && this.handleInputValue(this.component.inputEl.value);
  }

  async hasError(): Promise<boolean> {
    const validity = await this.component.commonFieldMethodController.getValidity();
    return this.component.error || validity.invalid;
  }
}

export {
  OdsInputController,
};
