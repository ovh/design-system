import { OdsGetValidityState } from '../../form/validation/ods-get-validity-state';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';
/**
 * common controller logic for input component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsInputController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsInputController');
  }
  /**
   * handle the change of value from the vanilla input.
   * it will cast the component value to number if necessary
   * @param newValue - value of the HTML input
   */
  handleInputValue(newValue) {
    if (!this.component.disabled) {
      if (newValue === '') {
        this.component.value = newValue;
      }
      else {
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
  getInputValidity(inputEl) {
    const forbiddenValue = this.hasForbiddenValue();
    return Object.assign({}, (inputEl ? Object.assign(Object.assign({}, OdsGetValidityState(inputEl.validity)), { invalid: !inputEl.validity.valid, forbiddenValue }) : {
      valid: !forbiddenValue,
      valueMissing: false,
      stepMismatch: false,
      invalid: forbiddenValue,
      customError: forbiddenValue,
      forbiddenValue
    }));
  }
  /**
   * is the value of the component is a non-authorized value.
   * it returns true if the value is found in the list of forbidden values.
   * it returns true if the value is between a min/max from the forbidden values.
   */
  hasForbiddenValue() {
    return this.component.forbiddenValues.some(forbiddenValue => {
      if (typeof forbiddenValue === 'number') {
        return `${forbiddenValue}` === `${this.component.value}`;
      }
      if (this.component.value) {
        return this.component.value >= forbiddenValue.min && this.component.value <= forbiddenValue.max;
      }
      return false;
    });
  }
  onFormControlChange(formControl) {
    this.logger.log(`[input=${this.component.value}]`, 'onFormControlChange', formControl, formControl && formControl.id);
    if (formControl) {
      formControl.register(this.component);
    }
  }
  beforeInit() {
    this.onFormControlChange(this.component.formControl);
    this.onValueChange(this.component.value);
    this.onDefaultValueChange( /*this.defaultValue*/);
    if (!this.component.value && this.component.value !== 0) {
      this.component.value = this.component.defaultValue;
    }
  }
  onValueChange(value, oldValue) {
    this.logger.debug(`[input=${this.component.value}]`, 'value changed', { value, oldValue });
    this.validateValue(value);
    this.updateInputCustomValidation();
    this.component.emitChange(value, oldValue);
  }
  onDefaultValueChange(defaultValue) {
    this.logger.debug(`[input=${this.component.value}]`, 'defaultValue', defaultValue);
  }
  validateValue(value) {
    if (!value && value !== 0) {
      this.logger.warn('[OsdsInput] The value attribute must be a correct number');
    }
    if ((value || value === 0) && (this.component.min || this.component.min === 0) && (this.component.max || this.component.max === 0) && this.component.step) {
      OdsWarnComponentAttribute({
        logger: this.logger,
        attributeName: 'value',
        attribute: +value,
        min: this.component.min,
        max: this.component.max
      });
      if (value && ((value - this.component.min) % this.component.step)) {
        this.logger.warn(`[OsdsInput] The value attribute must be a multiple of ${this.component.step}`);
      }
    }
  }
  updateInputCustomValidation() {
    var _a, _b;
    if (this.hasForbiddenValue()) {
      (_a = this.component.inputEl) === null || _a === void 0 ? void 0 : _a.setCustomValidity('forbiddenValue');
    }
    else {
      (_b = this.component.inputEl) === null || _b === void 0 ? void 0 : _b.setCustomValidity('');
    }
  }
  setInputTabindex(value) {
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
  onInput(event) {
    var _a;
    this.logger.debug('oninput', (_a = this.component.inputEl) === null || _a === void 0 ? void 0 : _a.value);
    event.preventDefault();
    this.component.inputEl && this.handleInputValue(this.component.inputEl.value);
  }
  onChange() {
    var _a;
    this.logger.debug('onChange', (_a = this.component.inputEl) === null || _a === void 0 ? void 0 : _a.value);
  }
  hasError() {
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
