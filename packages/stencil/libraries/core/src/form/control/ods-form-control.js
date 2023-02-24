import { isPromise } from '../../types/guard/ods-is-promise';
export class OdsFormControl {
  constructor(id) {
    this.valid = true;
    this.id = id;
  }
  register(formControl) {
    this.formControl = formControl;
  }
  /**
   * is the form control element has a particular error or not.
   * It is based on the `odsValidityState`
   * @param errorType - the error type to check
   */
  hasError(errorType) {
    if (this.formControl) {
      const validityState = this.formControl.getValidity();
      if (isPromise(validityState)) {
        return validityState.then(v => v[errorType]);
      }
      else {
        return new Promise((resolve) => resolve(validityState[errorType]));
      }
    }
    return new Promise((resolve) => resolve(false));
  }
}
