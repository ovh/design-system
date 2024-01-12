import type { OdsCommonFieldAttribute, OdsCommonFieldValidityState } from './interfaces/attributes';
import type { OdsCommonFieldMethod } from './interfaces/methods';
import type { OdsCommonFieldEvent } from './interfaces/events';
import { OdsInputValue } from './ods-input-value';

type OdsCommonFieldComponent = OdsCommonFieldAttribute & Partial<OdsCommonFieldEvent> & {
  el: HTMLElement;
  inputEl?: HTMLInputElement;
}

class OdsCommonFieldMethodController<T extends OdsCommonFieldAttribute & OdsCommonFieldEvent> implements OdsCommonFieldMethod {

  constructor(protected readonly component: T) { }

  /**
   * empty the value
   */
  async clear(): Promise<void> {
    if (this.component.disabled) {
      return;
    }
    this.component.value = null;
    this.component.odsClear?.emit();
  }

  /**
   * active the focus on the input in order to let the user write something
   */
  async setFocus(elementToFocus: HTMLElement): Promise<void> {
    if (this.component.disabled) {
      return;
    }
    elementToFocus.focus();
    this.component.odsFocus?.emit();
  }

  /**
   * restore the value to the initial state
   */
  async reset(): Promise<void> {
    this.component.value = this.component.defaultValue ?? null;
    this.component.odsReset?.emit();
  }

  async setTabindex(value: number): Promise<void> {
    this.component.tabindex = value;
  }

  async getValidity(element: HTMLInputElement): Promise<OdsCommonFieldValidityState> {
    const forbiddenValue = this.hasForbiddenValue();
    const isValid = forbiddenValue || element.validity.valid;
    return {
      ...element.validity,
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
    switch (this.component.type) {
    case 'number':
      return this.component.forbiddenValues?.some((forbiddenValue: OdsInputValue) => {
        if (typeof forbiddenValue === 'number') {
          return forbiddenValue.toString() === this.component.value?.toString();
        }
        return false;
      }) || false;
    default:
      return this.component.forbiddenValues?.some((forbiddenValue: OdsInputValue) => {
        return forbiddenValue === this.component.value;
      }) || false;
    }
  }
} 

export {
    OdsCommonFieldMethodController,
    OdsCommonFieldComponent,
}