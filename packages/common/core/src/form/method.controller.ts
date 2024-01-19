import type { OdsCommonFieldAttribute, OdsCommonFieldValidityState } from './interfaces/attributes';
import type { OdsCommonFieldMethod } from './interfaces/methods';
import type { OdsCommonFieldEvent, OdsCommonFieldValueChangeEventDetail } from './interfaces/events';
import { OdsInputValue } from './ods-input-value';

class OdsCommonFieldMethodController<T extends OdsCommonFieldAttribute & OdsCommonFieldEvent<U>, U extends OdsCommonFieldValueChangeEventDetail = OdsCommonFieldValueChangeEventDetail> implements Omit<OdsCommonFieldMethod, 'getValidity' | 'setFocus'> {

  constructor(protected readonly component: T) {
   }

  beforeInit() {
    if (!this.component.name) {
      return console.warn('Attribute name is required.');
    }
  }

  /**
   * empty the value
   */
  async clear(): Promise<void> {
    if (this.component.disabled) {
      return;
    }
    this.component.value = null;
    this.component.odsClear.emit();
  }

  formResetCallback(): void {
    throw new Error('You need to implementation formResetCallback');
  }

  async getValidity<T extends { validity: ValidityState }>(element: T): Promise<OdsCommonFieldValidityState> {
    const forbiddenValue = this.hasForbiddenValue();
    const isValid = forbiddenValue ? false : element.validity.valid;

    return {
      ...this.toValidityState(element.validity),
      forbiddenValue,
      valid: isValid,
    };
  }

  /**
   * is the value of the component is a non-authorized value.
   * it returns true if the value is found in the list of forbidden values.
   * it returns true if the value is between a min/max from the forbidden values.
   */
  hasForbiddenValue(): boolean {
    return this.component.forbiddenValues?.some((forbiddenValue: OdsInputValue) => forbiddenValue === this.component.value) || false;
  }

  toValidityState(state: ValidityState): ValidityState {
    return {
      badInput: state.badInput,
      customError: state.customError,
      patternMismatch: state.patternMismatch,
      rangeOverflow: state.rangeOverflow,
      rangeUnderflow: state.rangeUnderflow,
      stepMismatch: state.stepMismatch,
      tooLong: state.tooLong,
      tooShort: state.tooShort,
      typeMismatch: state.typeMismatch,
      valid: state.valid,
      valueMissing: state.valueMissing,
    }
  }

  /**
   * active the focus on the input in order to let the user write something
   */
  async setFocus(elementToFocus: HTMLElement): Promise<void> {
    if (this.component.disabled) {
      return;
    }
    elementToFocus.focus();
    this.component.odsFocus.emit();
  }

  async setTabindex(value: number): Promise<void> {
    this.component.tabindex = value;
  }

  /**
   * restore the value to the initial state
   */
  async reset(): Promise<void> {
    if (this.component.disabled) {
      return;
    }
    this.component.value = this.component.defaultValue ?? null;
    this.component.odsReset.emit();
  }
}

export {
    OdsCommonFieldMethodController,
};