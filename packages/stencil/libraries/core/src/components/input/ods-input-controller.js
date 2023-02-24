import { OdsComponentController } from '../ods-component-controller';
import { OdsInputGetValidityState } from './ods-input-get-validity-state';
/**
 * common controller logic for input component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsInputController extends OdsComponentController {
  constructor(component) {
    super(component);
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
    return Object.assign({}, (inputEl ?
      OdsInputGetValidityState(inputEl.validity, forbiddenValue)
      : {
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
}
