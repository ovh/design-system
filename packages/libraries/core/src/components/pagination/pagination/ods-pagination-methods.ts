import { OdsComponentMethods } from '../../ods-component-methods';
import { OdsPaginationValidityState } from './ods-pagination-validity-state';

export interface OdsPaginationMethods extends OdsComponentMethods {
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
  validate(): OdsPaginationValidityState;

  /**
   * focus the element
   */
  setFocus(): void;

  /**
   * set page index on the component
   */
  setPageIndex(value: number): void;

  /**
   * get the validity state
   */
  getValidity(): OdsPaginationValidityState;
}
