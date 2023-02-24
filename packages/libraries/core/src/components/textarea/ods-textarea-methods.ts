import { OdsFormControlMethods } from '../../form/control/ods-form-control-methods';
import { OdsTextAreaValidityState } from '../../form/validation/textarea/ods-textarea-validity-state';
import { OdsComponentMethods } from '../ods-component-methods';

export interface OdsTextAreaMethods extends OdsFormControlMethods<OdsTextAreaValidityState>, OdsComponentMethods {
  /**
   * restore the value to the initial state
   */
  reset(): void;

  /**
   * empty the value
   */
  clear(): void;

  /**
   * active the focus on the textarea in order to let the user write something
   */
  setFocus(): void;

  /**
   * set a custom tab index for easier navigation
   * @param value - chosen index
   */
  setTextAreaTabindex(value: number): void;
}
