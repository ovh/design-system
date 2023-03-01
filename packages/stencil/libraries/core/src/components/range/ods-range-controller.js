import { OdsComponentController } from '../ods-component-controller';
import { OdsGetValidityState } from '../../form/validation/ods-get-validity-state';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';
/**
 * common controller logic for range component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsRangeController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsRangeController');
  }
  /**
   * handle a modification from the vanilla input.
   * Set the received value in the ods component.
   * @param newValue - new value to apply
   */
  handleInputValue(newValue, dual = false) {
    if (!this.component.disabled) {
      if (!dual) {
        if (this.isDualRange()) {
          this.component.value = [Number(newValue), this.asDualValues()[1]];
        }
        else {
          this.component.value = Number(newValue);
        }
      }
      else {
        this.component.value = [this.asDualValues()[0], Number(newValue)];
      }
    }
  }
  getRangeValidity(inputEl) {
    const forbiddenValue = this.hasForbiddenValue();
    const validity = Object.assign({}, (inputEl ? Object.assign(Object.assign({}, OdsGetValidityState(inputEl.validity)), { invalid: !inputEl.validity.valid, forbiddenValue }) : {
      valid: !forbiddenValue,
      valueMissing: false,
      stepMismatch: false,
      invalid: forbiddenValue,
      customError: forbiddenValue,
      forbiddenValue
    }));
    return validity;
  }
  hasForbiddenValue() {
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
        }
        else {
          return this.component.value >= forbiddenValue.min && this.component.value <= forbiddenValue.max;
        }
      }
      return false;
    });
  }
  isDualRange() {
    return Array.isArray(this.component.value) && this.component.value.length === 2;
  }
  asDualValues() {
    return this.component.value;
  }
  validateAttributes() {
    OdsWarnComponentAttribute({
      logger: this.logger,
      attributeValues: OdsThemeColorIntent,
      attributeName: 'color',
      attribute: this.component.color
    });
  }
  onFormControlChange(formControl) {
    this.logger.log(`[range=${this.component.value}]`, 'onFormControlChange', formControl, formControl && formControl.id);
    if (formControl) {
      formControl.register(this.component);
    }
  }
  beforeInit() {
    this.onFormControlChange(this.component.formControl);
    this.onValueChange(this.component.value);
  }
  onValueChange(newValue, oldValue) {
    this.validateValue(newValue);
    this.updateInputCustomValidation(this.component.inputEl);
    this.component.emitChange(newValue, oldValue);
  }
  initValue() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (this.component.value || this.component.value === 0) {
      if (this.isDualRange()) {
        const val = this.asDualValues();
        if (`${val[0]}` !== ((_a = this.component.inputEl) === null || _a === void 0 ? void 0 : _a.value) || `${val[1]}` !== ((_b = this.component.dualInputEl) === null || _b === void 0 ? void 0 : _b.value)) {
          this.logger.warn(`Value [${val}] is not valid. New value has been set to [${(_c = this.component.inputEl) === null || _c === void 0 ? void 0 : _c.value},${(_d = this.component.dualInputEl) === null || _d === void 0 ? void 0 : _d.value}]`);
          this.component.value = [Number((_e = this.component.inputEl) === null || _e === void 0 ? void 0 : _e.value), Number((_f = this.component.dualInputEl) === null || _f === void 0 ? void 0 : _f.value)];
        }
      }
      else {
        if (`${this.component.value}` !== ((_g = this.component.inputEl) === null || _g === void 0 ? void 0 : _g.value)) {
          this.logger.warn(`Value ${this.component.value} is not valid. New value has been set to ${(_h = this.component.inputEl) === null || _h === void 0 ? void 0 : _h.value}`);
          this.component.value = ((_j = this.component.inputEl) === null || _j === void 0 ? void 0 : _j.value) || null;
        }
      }
    }
  }
  validateValue(value) {
    if (value && isNaN(Number(value)) && !this.isDualRange()) {
      this.logger.warn('[OsdsRange] The value attribute must a correct number or a tuple [1, 2]');
    }
    if (this.component.min && this.component.max && this.component.step && typeof value === 'number') {
      OdsWarnComponentAttribute({
        logger: this.logger,
        attributeName: 'value',
        attribute: value,
        min: this.component.min,
        max: this.component.max
      });
    }
  }
  updateInputCustomValidation(inputEl) {
    if (this.hasForbiddenValue()) {
      inputEl === null || inputEl === void 0 ? void 0 : inputEl.setCustomValidity('forbiddenValue');
    }
    else {
      inputEl === null || inputEl === void 0 ? void 0 : inputEl.setCustomValidity('');
    }
  }
  onInput(event, inputEl, dual = false) {
    event.preventDefault();
    inputEl && this.handleInputValue(inputEl.value, dual);
  }
  onKeyup(event, inputEl, dual = false) {
    const key = event.key;
    if (key === '+') {
      inputEl === null || inputEl === void 0 ? void 0 : inputEl.stepUp();
    }
    else if (key === '-') {
      inputEl === null || inputEl === void 0 ? void 0 : inputEl.stepDown();
    }
    inputEl && this.handleInputValue(inputEl.value, dual);
  }
  handleClick() {
    this.logger.log('[range]', 'clicked');
  }
  hasError() {
    this.logger.log('hasError', this.getRangeValidity().invalid);
    return this.component.error || this.getRangeValidity().invalid;
  }
}
