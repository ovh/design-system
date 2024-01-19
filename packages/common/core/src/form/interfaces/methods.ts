import type { OdsCommonFieldValidityState } from './attributes';

interface OdsCommonFieldMethod {
  /**
   * empty the value
   */
  clear(): Promise<void>;

  formResetCallback(): void;

  /**
   * return the element validity
   */
  getValidity(): Promise<OdsCommonFieldValidityState | undefined>;

  /**
   * restore the value to the initial state
   */
  reset(): Promise<void>;

  /**
   * active the focus on the input in order to let the user write something
   */
  setFocus(): Promise<void>;

  /**
   * set a custom tab index for easier navigation
   * @param value - chosen index
   */
  setTabindex(value: number): Promise<void>;
}

export {
  OdsCommonFieldMethod,
};
