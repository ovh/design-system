import type { OdsFormControlMethods, OdsTextAreaValidityState } from '@ovhcloud/ods-common-core';

interface OdsTextAreaMethod extends OdsFormControlMethods<OdsTextAreaValidityState> {
  /**
   * empty the value
   */
  clear(): Promise<void>;

  /**
   * restore the value to the initial state
   */
  reset(): Promise<void>;

  /**
   * active the focus on the textarea in order to let the user write something
   */
  setFocus(): Promise<void>;

  /**
   * set a custom tab index for easier navigation
   * @param value - chosen index
   */
  setTextAreaTabindex(value: number): Promise<void>;
}

export {
  OdsTextAreaMethod,
};
