import { OdsComponentMethods } from '../../ods-component-methods';
import { OdsSelectValidityState } from './ods-select-validity-state';

export interface OdsSelectMethods extends OdsComponentMethods {
  /**
   * reset the value to the initial one (default value)
   */
  reset(): void;

  /**
   * erase the current selection
   */
  clear(): void;

  /**
   * check that the select is valid or not.
   * In case of required field, the validation will check the entered value
   * and set the field in error if it is not fulfilled
   */
  validate(): OdsSelectValidityState;

  /**
   * focus the element
   */
  setFocus(): void;

  /**
   * set tab index on the component
   */
  setInputTabindex(value: number): void;

  /**
   * get the validity state
   */
  getValidity(): OdsSelectValidityState;
}
