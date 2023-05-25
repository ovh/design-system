import { OdsInput } from './ods-input';
import { OdsInputValue } from './ods-input-value';
import { OdsFormControl } from './../../form/control/ods-form-control';
import { OdsInputValidityState } from './ods-input-validity-state';
import { OdsGetValidityState } from '../../form/validation/ods-get-validity-state';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';

/**
 * common controller logic for input component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsInputController extends OdsComponentController<OdsInput> {
  private readonly logger = new OdsLogger('OdsInputController');

  constructor(component: OdsInput) {
    super(component);
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
  getInputValidity(inputEl?: HTMLInputElement): OdsInputValidityState {
    const forbiddenValue = this.hasForbiddenValue();
    return {
      ...(inputEl ? {
        ...OdsGetValidityState(inputEl.validity),
        invalid: !inputEl.validity.valid,
        forbiddenValue
      } : {
        valid: !forbiddenValue,
        valueMissing: false,
        stepMismatch: false,
        invalid: forbiddenValue,
        customError: forbiddenValue,
        forbiddenValue
      })
    };
  }

  /**
   * is the value of the component is a non-authorized value.
   * it returns true if the value is found in the list of forbidden values.
   * it returns true if the value is between a min/max from the forbidden values.
   */
  private hasForbiddenValue(): boolean {
    return this.component.forbiddenValues.some(forbiddenValue => {
      if (typeof forbiddenValue === 'number') {
        return `${forbiddenValue}` === `${this.component.value}`;
      }
      if (this.component.value) {
        return this.component.value >= forbiddenValue.min && this.component.value <= forbiddenValue.max;
      }
      return false;
    })
  }

  onFormControlChange(formControl?: OdsFormControl<OdsInputValidityState>) {
    this.logger.log(`[input=${this.component.value}]`, 'onFormControlChange', formControl, formControl && formControl.id);
    if (formControl) {
      formControl.register(this.component);
    }
  }

  beforeInit(): void {
    this.onFormControlChange(this.component.formControl);
    this.assertValue(this.component.value);
    this.onDefaultValueChange(/*this.defaultValue*/);
    if (!this.component.value && this.component.value !== 0) {
      this.component.value = this.component.defaultValue;
    }
  }

  onValueChange(value: OdsInputValue, oldValue?: OdsInputValue): void {
    this.logger.debug(`[input=${this.component.value}]`, 'value changed', { value, oldValue });
    this.assertValue(value);
    this.component.emitChange(value, oldValue);
  }

  assertValue(value: OdsInputValue): void {
    this.validateValue(value as number);
    this.updateInputCustomValidation();
  }

  onDefaultValueChange(defaultValue?: OdsInputValue) {
    this.logger.debug(`[input=${this.component.value}]`, 'defaultValue', defaultValue);
  }

  private validateValue(value?: number) {
    if (!value && value !== 0) {
      this.logger.warn('[OsdsInput] The value attribute must be a correct number');
    }
    if ((value || value === 0) && (this.component.min || this.component.min === 0) && (this.component.max || this.component.max === 0) && this.component.step) {
      OdsWarnComponentAttribute<number, OdsInput>({
        logger: this.logger,
        attributeName: 'value',
        attribute: +value,
        min: this.component.min,
        max: this.component.max
      });
      if (value && ((value - this.component.min) % this.component.step)) {
        this.logger.warn(
          `[OsdsInput] The value attribute must be a multiple of ${this.component.step}`
        );
      }
    }
  }

  private updateInputCustomValidation() {
    if (this.hasForbiddenValue()) {
      this.component.inputEl?.setCustomValidity('forbiddenValue')
    } else {
      this.component.inputEl?.setCustomValidity('');
    }
  }

  setInputTabindex(value: number) {
    this.component.inputTabindex = value;
  }

  stepUp() {
    const inputEvent = new CustomEvent('input', { bubbles: true });
    if (this.component.inputEl) {
      this.component.inputEl.stepUp();
      this.component.inputEl.dispatchEvent(inputEvent);
    }
  }

  stepDown() {
    const inputEvent = new CustomEvent('input', { bubbles: true });
    if (this.component.inputEl) {
      this.component.inputEl.stepDown();
      this.component.inputEl.dispatchEvent(inputEvent);
    }
  }

  onFocus() {
    this.component.hasFocus = true;
    this.component.emitFocus();
  }

  onBlur() {
    this.component.hasFocus = false;
    this.component.emitBlur();
  }

  onInput(event: Event) {
    this.logger.debug('oninput', this.component.inputEl?.value);
    event.preventDefault();
    this.component.inputEl && this.handleInputValue(this.component.inputEl.value);
  }

  onChange() {
    this.logger.debug('onChange', this.component.inputEl?.value)
  }

  hasError(): boolean {
    return this.component.error || this.getInputValidity().invalid;
  }

  reset() {
    this.logger.debug('reset this.inputEl', this.component.inputEl, 'this.defaultValue', this.component.defaultValue);
    this.component.value = this.component.defaultValue ? `${this.component.defaultValue}` : '';
  }

  clear() {
    this.component.value = '';
  }
}
