import type { OdsGenericFieldValidityState } from './attributes';
import type { OdsFormControlMethods } from '../control/ods-form-control-methods';

interface OdsGenericFormMethod extends OdsFormControlMethods<OdsGenericFieldValidityState> {
    /**
     * empty the value
     */
    clear(): Promise<void>;
  
    /**
     * active the focus on the input in order to let the user write something
     */
    setFocus(): Promise<void>;

    /**
     * hide or display the value
     */
    hide(): Promise<void>;
    
    /**
     * restore the value to the initial state
     */
    reset(): Promise<void>;

    /**
     * set a custom tab index for easier navigation
     * @param value - chosen index
     */
    setTabindex(value: number): Promise<void>;

    getValidity(): Promise<OdsGenericFieldValidityState | undefined>;
} 

export {
    OdsGenericFormMethod,
}
  