import { isPromise } from '../../types/guard/ods-is-promise';
import { OdsFormControlMethods } from './ods-form-control-methods';
import { OdsComponentGenericMethods } from '../../components/ods-component-generic-methods';
import { OdsValidityStateUnion } from './ods-form-control-type';
export class OdsFormControl<ValidityState extends OdsValidityStateUnion> {
  valid = true;
  private formControl?: OdsComponentGenericMethods<OdsFormControlMethods<ValidityState>>;
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  register(formControl: OdsComponentGenericMethods<OdsFormControlMethods<ValidityState>>) {
    this.formControl = formControl;
  }

  /**
   * is the form control element has a particular error or not.
   * It is based on the `odsValidityState`
   * @param errorType - the error type to check
   */
  hasError<ValidityState extends OdsValidityStateUnion>(errorType: keyof ValidityState): Promise<boolean> {
    if (this.formControl) {
      const validityState = this.formControl.getValidity();
      if (isPromise(validityState)) {
        return validityState.then(v => (v as any)[errorType]);
      } else {
        return new Promise((resolve) => resolve((validityState as any)[ errorType ]));
      }
    }
    return new Promise((resolve) => resolve(false));
  }
}

