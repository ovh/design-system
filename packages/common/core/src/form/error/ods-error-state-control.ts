import { OdsFormControl } from '../control/ods-form-control';
import { OdsValidityState } from '../validation/ods-validity-state';

export class OdsErrorStateControl {
  isErrorState(control: OdsFormControl<OdsValidityState> | null): boolean {
    return !!(control && !control.valid);
  }
}
