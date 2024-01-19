import type { OdsCommonFieldAttribute } from '@ovhcloud/ods-common-core';

interface OdsTextareaAttribute extends Omit<OdsCommonFieldAttribute, 'clearable' | 'loading' | 'prefixValue' | 'step'> {
  /** The visible width of the text control, in average character widths */
  cols?: number;
  /** Default value of the textarea */
  defaultValue: string | null;
  /** Indicates if the textarea is inline or not: see component principles */
  inline?: boolean;
  /** Indicates that the user can resize the control */
  resizable?: boolean;
  /** The number of visible text lines for the control */
  rows?: number;
  /** Define if the spelling of the value should be check */
  spellcheck: HTMLElement['spellcheck'];
  /** The native textarea element id */
  textAreaId?: string;
  /** Value of the textarea field */
  value: string | null
}

export type {
  OdsTextareaAttribute,
};
