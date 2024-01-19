import type { OdsInputValue } from '@ovhcloud/ods-common-core';

interface OdsFormMethod {
  /**
   * Reset the form
   */
  reset(): Promise<void>;

  /**
   * Submit the form
   * You can submit only if the form is valid
   */
  submit(): Promise<void>;
  /**
   * Get all the errors associated with the field
   */
  getFormErrors(): Promise<Record<string, boolean>>;
  /**
   * Get all the values associated with the field
   */
  getFormValues(): Promise<Record<string, OdsInputValue>>;
  // Is the form valid
  isFormValid(): Promise<boolean>;
  /**
   * Get the error for a field
   * @param name name of the input
   */
  getFieldError(name: string): Promise<boolean | undefined>;
  /**
   * Set an error for a field
   * @param name name of the input to change
   */
  setFieldError(name: string, error: boolean): Promise<void>;
  /**
   * Get the value for a field
   * @param name name of the input
   */
  getFieldValue(name: string): Promise<OdsInputValue | undefined>;
  /**
   * Set a value for a field
   * @param name name of the input to change
   */
  setFieldValue(name: string, value: OdsInputValue): Promise<void>;
}

export type {
  OdsFormMethod,
};
