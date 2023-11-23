import type { OdsInputValue } from '../ods-input-value';

interface OdsCommonFieldValidityState extends ValidityState {
  forbiddenValue: boolean;
}

interface OdsCommonFieldAttribute {
  /**
   * @see HTMLElement.ariaLabel
   */
  ariaLabel: HTMLElement['ariaLabel'];
  /** ID of the element that labels the input */
  ariaLabelledby?: string;
  /** Ability to clear the input value */
  clearable?: boolean;
  /** Default value of the input */
  defaultValue: OdsInputValue;
  /** Indicates if the input is disabled or not: see component principles */
  disabled: boolean;
  /** Indicates if the input shows error or not */
  error: boolean;
  /** List of forbidden values for the input */
  forbiddenValues?: OdsInputValue[];
  /** Label of the input field */
  label?:string;
  /** Indicates if the input is in loading state or not */
  loading?: boolean;
  /** Name of the input field */
  name: string;
  /** Placeholder text for the input */
  placeholder?: string;
  /** Text before the input value */
  prefixValue?: string;
  /** Indicates if the input is read-only or not */
  readOnly?: boolean;
  /** Indicates if the input is required or not */
  required?: boolean;
  /** Step value for the input */
  step?: number;
  /** Tabindex for the input */
  tabindex?: number;
  /** Type of the input field */
  value: OdsInputValue;
}

export type {
  OdsCommonFieldAttribute,
  OdsCommonFieldValidityState,
};
