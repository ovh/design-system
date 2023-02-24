import { OdsFormControlMethods } from '../../form/control/ods-form-control-methods';
import { OdsInputValidityState } from './ods-input-validity-state';
import { OdsComponentMethods } from '../ods-component-methods';

export interface OdsInputMethods extends OdsFormControlMethods<OdsInputValidityState>, OdsComponentMethods {
  /**
   * restore the value to the initial state
   */
  reset(): void;

  /**
   * empty the value
   */
  clear(): void;

  /**
   * active the focus on the input in order to let the user write something
   */
  setFocus(): void;

  /**
   * set a custom tab index for easier navigation
   * @param value - chosen index
   */
  setInputTabindex(value: number): void;

  stepUp(): ReturnType<HTMLInputElement['stepUp']>;

  stepDown(): ReturnType<HTMLInputElement['stepDown']>;
}
