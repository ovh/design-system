import { OdsComponentController } from '../ods-component-controller';
import { OdsFormControl } from '../../form/control/ods-form-control';
import { OdsGetValidityState } from '../../form/validation/ods-get-validity-state';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsRange } from './ods-range';
import { OdsRangeValidityState } from './ods-range-validity-state';
import { OdsRangeValue } from './ods-range-value';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';

/**
 * common controller logic for range component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsRangeController extends OdsComponentController<OdsRange> {
  private readonly logger = new OdsLogger('OdsRangeController');

  constructor(component: OdsRange) {
    super(component);
  }

  /**
   * handle a modification from the vanilla input.
   * Set the received value in the ods component.
   * @param newValue - new value to apply
   */
  private handleInputValue(newValue: HTMLInputElement['value'], dual = false): void {
    if (!this.component.disabled) {
      if (!dual) {
        if (this.isDualRange()) {
          this.component.value = [Number(newValue), this.asDualValues()[1]];
        } else {
          this.component.value = Number(newValue);
        }
      } else {
        this.component.value = [this.asDualValues()[0], Number(newValue)];
      }
    }
  }

  getRangeValidity(inputEl?: HTMLInputElement) {
    const forbiddenValue = this.hasForbiddenValue();

    const validity: OdsRangeValidityState = {
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
    return validity;
  }

  private hasForbiddenValue(): boolean {
    return this.component.forbiddenValues.some(forbiddenValue => {
      if (typeof forbiddenValue === 'number') {
        if (this.isDualRange()) {
          return (`${forbiddenValue}` === `${this.asDualValues()[0]}` || `${forbiddenValue}` === `${this.asDualValues()[1]}`);
        }
        return `${forbiddenValue}` === `${this.component.value}`;
      }
      if (this.component.value) {
        if (this.isDualRange()) {
          return ((this.asDualValues()[0] >= forbiddenValue.min && this.asDualValues()[0] <= forbiddenValue.max)
            || (this.asDualValues()[1] >= forbiddenValue.min && this.asDualValues()[0] <= forbiddenValue.max));
        } else {
          return this.component.value >= forbiddenValue.min && this.component.value <= forbiddenValue.max;
        }
      }
      return false;
    });
  }

  isDualRange(): boolean {
    return Array.isArray(this.component.value) && this.component.value.length === 2;
  }

  asDualValues(): [number, number] {
    return (this.component.value as [number, number]);
  }

  validateAttributes(): void {
    OdsWarnComponentAttribute<OdsThemeColorIntent, OdsRange>({
      logger: this.logger,
      attributeValues: OdsThemeColorIntent as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color
    });
  }

  onFormControlChange(formControl?: OdsFormControl<OdsRangeValidityState>) {
    this.logger.log(`[range=${this.component.value}]`, 'onFormControlChange', formControl, formControl && formControl.id);
    if (formControl) {
      formControl.register(this.component);
    }
  }

  beforeInit(): void {
    this.onFormControlChange(this.component.formControl);
    this.onValueChange(this.component.value);
  }

  onValueChange(newValue: OdsRangeValue, oldValue?: OdsRangeValue) {
    this.validateValue(newValue);
    this.updateInputCustomValidation(this.component.inputEl);
    this.component.emitChange(newValue, oldValue);
  }

  initValue(): void {
    if(this.component.value || this.component.value === 0) {
      if(this.isDualRange()) {
        const val = this.asDualValues();
        if (`${val[0]}` !== this.component.inputEl?.value || `${val[1]}` !== this.component.dualInputEl?.value) {
          this.logger.warn(`Value [${val}] is not valid. New value has been set to [${this.component.inputEl?.value},${this.component.dualInputEl?.value}]`);
          this.component.value = [Number(this.component.inputEl?.value), Number(this.component.dualInputEl?.value)];
        }
      } else {
        if (`${this.component.value}` !== this.component.inputEl?.value) {
          this.logger.warn(`Value ${this.component.value} is not valid. New value has been set to ${this.component.inputEl?.value}`);
          this.component.value = this.component.inputEl?.value || null;
        }
      }
    }
  }

  validateValue(value?: OdsRangeValue): void {
    if (value && isNaN(Number(value)) && !this.isDualRange()) {
      this.logger.warn('[OsdsRange] The value attribute must a correct number or a tuple [1, 2]');
    }
    if (this.component.min && this.component.max && this.component.step && typeof value === 'number') {
      OdsWarnComponentAttribute<number, OdsRange>({
        logger: this.logger,
        attributeName: 'value',
        attribute: value,
        min: this.component.min,
        max: this.component.max
      });
    }
  }

  private updateInputCustomValidation(inputEl?: HTMLInputElement) {
    if (this.hasForbiddenValue()) {
      inputEl?.setCustomValidity('forbiddenValue')
    } else {
      inputEl?.setCustomValidity('');
    }
  }

  onInput(event: Event, inputEl: HTMLInputElement, dual = false): void {
    event.preventDefault();
    inputEl && this.handleInputValue(inputEl.value, dual);
  }

  onKeyup(event: KeyboardEvent, inputEl: HTMLInputElement, dual = false): void {
    const key = event.key;
    if (key === '+') {
      inputEl?.stepUp();
    } else if (key === '-') {
      inputEl?.stepDown();
    }
    inputEl && this.handleInputValue(inputEl.value, dual);
  }

  handleClick() {
    this.logger.log('[range]', 'clicked');
  }

  hasError(): boolean {
    this.logger.log('hasError', this.getRangeValidity().invalid);
    return this.component.error || this.getRangeValidity().invalid;
  }
}
