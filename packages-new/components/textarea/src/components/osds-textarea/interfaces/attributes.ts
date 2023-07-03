import type { OdsErrorStateControl, OdsFormControl, OdsTextAreaValidityState } from '@ovhcloud/ods-common-core';
import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import type { ODS_TEXTAREA_SIZE } from '../constants/textarea-size';

interface OdsTextAreaAttribute {
  /** ariaLabel: see component principles */
  ariaLabel: HTMLElement['ariaLabel'];
  /** ariaLabelledby: see component principles */
  ariaLabelledby?:string;
  /** main color: see component principles */
  color?: OdsThemeColorIntent;
  /** cols: see component principles */
  cols?: number;
  /** contrasted: see component principles */
  contrasted?: boolean;
  /** defaultValue: see component principles */
  defaultValue?: HTMLTextAreaElement['defaultValue'];
  /** cols: see component principles */
  disabled?: boolean;
  /** on error or not */
  error?: boolean;
  errorStateControl?: OdsErrorStateControl;
  /** inline or not: see component principles */
  inline?: boolean;
  /** textarea form control */
  formControl?: OdsFormControl<OdsTextAreaValidityState>;
  /** hasFocus or not */
  hasFocus: boolean;
  /** name : see component principles */
  name?: HTMLTextAreaElement['name'];
  /** placeholder : see component principles */
  placeholder?: string;
  /** readOnly or not : see component principles */
  readOnly?: boolean;
  /** required or not : see component principles */
  required?: boolean;
  /** resizable or not : see component principles */
  resizable?: boolean;
  /** row: see component principles */
  rows?: number;
  /** textarea size */
  size?: ODS_TEXTAREA_SIZE;
  /** spellcheck: see component principles */
  spellcheck: HTMLElement['spellcheck'];
  /** textarea id */
  textAreaId?: string;
  /** value: see component principles */
  value: HTMLTextAreaElement['value'];
}

export {
  OdsTextAreaAttribute,
};
