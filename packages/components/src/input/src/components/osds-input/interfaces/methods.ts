import type { OdsFormControlMethods, OdsGenericFormFieldValidityState } from '@ovhcloud/ods-common-core';

interface OdsInputMethod extends OdsFormControlMethods<OdsGenericFormFieldValidityState> {
  /**
   * restore the value to the initial state
   */
  reset(): Promise<void>;

  /**
   * empty the value
   */
  clear(): Promise<void>;

  /**
   * hide or display the value
   */
  hide(): Promise<void>;

  /**
   * active the focus on the input in order to let the user write something
   */
  setFocus(): Promise<void>;

  /**
   * set a custom tab index for easier navigation
   * @param value - chosen index
   */
  setInputTabindex(value: number): Promise<void>;

  stepUp(): Promise<ReturnType<HTMLInputElement['stepUp']>>;

  stepDown(): Promise<ReturnType<HTMLInputElement['stepDown']>>;
}

export type {
  OdsInputMethod,
};
