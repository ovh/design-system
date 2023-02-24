import { OdsValidityStateUnion } from './ods-form-control-type';

/**
 * methods for all component that are in fact an input for the user (using a html vanilla input under the hood).
 * for instance, the odsInput (text/number, ect) and the odsRange are all input components
 */
export interface OdsFormControlMethods<ValidityState extends OdsValidityStateUnion> {
  /**
   * get the validity state
   */
  getValidity(): ValidityState;
}
