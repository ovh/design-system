import { OdsComponentController } from '../../ods-component-controller';
import { OdsPaginationValidityState } from './ods-pagination-validity-state';
import { OdsPagination } from './ods-pagination';

/**
 * common controller logic for select component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsPaginationController extends OdsComponentController<OdsPagination> {
  constructor(component: OdsPagination) {
    super(component);
  }

  /**
   * get the validity object properties of the component.
   * it is based on the validity state of the vanilla select.
   * in case of no vanilla select passed, it returns the default value for each property
   */
  getValidity(): OdsPaginationValidityState {
    return {
      valid: true,
      invalid: false,
      forbiddenValue: false,
      valueMissing: false,
      stepMismatch: false,
      customError: false,
    };
  }
}
