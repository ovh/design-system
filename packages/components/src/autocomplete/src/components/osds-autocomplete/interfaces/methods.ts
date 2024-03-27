import type { OdsValidityState } from '@ovhcloud/ods-common-core';

interface OdsAutocompleteMethod {
  /**
   * Erase the current selection
   */
  clear(): Promise<void>;

  /**
   * Get the validity state
   */
  getValidity(): Promise<OdsValidityState>;

  /**
   * Reset the value to the initial one (default value)
   */
  reset(): Promise<void>;

  /**
   * Focus the element
   */
  setFocus(): Promise<void>;

  /**
   * Set tab index on the component
   */
  setInputTabindex(value: number): Promise<void>;

  /**
   * check if the Autocomplete is valid.
   * In case of required field, the validation will check the entered value
   * and set the field in error if it is not fulfilled
   */
  validate(): Promise<OdsValidityState>;
}

export type {
  OdsAutocompleteMethod,
};
