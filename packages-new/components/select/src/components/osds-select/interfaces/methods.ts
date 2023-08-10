import type { OdsValidityState } from '@ovhcloud/ods-common-core';

interface OdsSelectMethod {
  /**
   * erase the current selection
   */
  clear(): Promise<void>;

  /**
   * get the validity state
   */
  getValidity(): Promise<OdsValidityState>;

  /**
   * reset the value to the initial one (default value)
   */
  reset(): Promise<void>;

  /**
   * focus the element
   */
  setFocus(): Promise<void>;

  /**
   * set tab index on the component
   */
  setInputTabindex(value: number): Promise<void>;

  /**
   * check that the select is valid or not.
   * In case of required field, the validation will check the entered value
   * and set the field in error if it is not fulfilled
   */
  validate(): Promise<OdsValidityState>;
}

export {
  OdsSelectMethod,
};
