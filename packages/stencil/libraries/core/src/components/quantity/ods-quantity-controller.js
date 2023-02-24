import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
/**
 * common controller logic for chip component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsQuantityController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OsdsQuantityController');
  }
  initInput() {
    const foundOsdsInput = this.component.el.querySelector('osds-input[type=number]');
    if (!foundOsdsInput) {
      const foundNativeInput = this.component.el.querySelector('input[type=number]');
      if (foundNativeInput) {
        this.component.input = foundNativeInput;
        this.component.input.addEventListener('change', () => this.processInputValueChange());
        this.component.input.addEventListener('blur', this.onBlur.bind(this));
      }
      else {
        this.logger.warn('An input of type number is mandatory.');
      }
    }
    else {
      this.component.input = foundOsdsInput;
      this.component.input.addEventListener('odsInputBlur', this.onBlur.bind(this));
    }
  }
  onBlur() {
    if (this.component.input && this.component.input.max && this.component.input.min) {
      const valueAsNb = Number(this.component.input.value);
      const minNb = Number(this.component.input.min);
      const maxNb = Number(this.component.input.max);
      if (!isNaN(valueAsNb)) {
        this.component.input.value = `${Math.max(minNb, Math.min(maxNb, valueAsNb))}`;
      }
    }
  }
  processInputValueChange(event) {
    if (event) {
      this.logger.log("Received the customer odsValueChange event: ", event.detail);
    }
    if (this.component.input && this.component.minus && this.component.plus) {
      if (this.component.input.value && this.component.input.min && this.component.input.max) {
        const valueAsNb = Number(this.component.input.value);
        const minNb = Number(this.component.input.min);
        const maxNb = Number(this.component.input.max);
        this.removeDisabled(this.component.minus, this.component.plus);
        if (!isNaN(valueAsNb)) {
          if (valueAsNb <= minNb) {
            this.setDisabled(this.component.minus);
          }
          else if (valueAsNb >= maxNb) {
            this.setDisabled(this.component.plus);
          }
        }
      }
    }
  }
  setDisabledOnChildren(disabled) {
    this.logger.log('disabled changed. update child', { disabled });
    if (this.component.minus && this.component.plus && this.component.input) {
      if (disabled) {
        this.setDisabled(this.component.minus, this.component.plus, this.component.input);
      }
      else {
        this.removeDisabled(this.component.minus, this.component.plus, this.component.input);
        this.processInputValueChange();
      }
    }
  }
  clearEventListeners() {
    var _a, _b, _c;
    (_a = this.component.input) === null || _a === void 0 ? void 0 : _a.removeEventListener('change', () => this.processInputValueChange());
    (_b = this.component.input) === null || _b === void 0 ? void 0 : _b.removeEventListener('blur', this.onBlur);
    (_c = this.component.input) === null || _c === void 0 ? void 0 : _c.removeEventListener('odsInputBlur', this.onBlur);
  }
  minusClickHandler() {
    if (this.component.input && !this.component.disabled) {
      this.component.input.stepDown();
      this.processInputValueChange();
    }
  }
  plusClickHandler() {
    if (this.component.input && !this.component.disabled) {
      this.component.input.stepUp();
      this.processInputValueChange();
    }
  }
  initSlots() {
    const minus = this.component.el.querySelector('[slot=minus]');
    const plus = this.component.el.querySelector('[slot=plus]');
    if (minus && plus) {
      this.component.minus = minus;
      this.component.plus = plus;
    }
    else {
      this.logger.warn('Minus and plus control are mandatory.');
    }
  }
  setDisabled(...elements) {
    elements.forEach(el => el.setAttribute('disabled', ''));
  }
  removeDisabled(...elements) {
    elements.forEach(el => el.removeAttribute('disabled'));
  }
}
