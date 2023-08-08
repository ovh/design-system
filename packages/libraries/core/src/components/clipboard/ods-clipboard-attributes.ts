import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsClipboardAttributes extends OdsComponentAttributes {
  /** Indicates if the input is full width or not: see component principles */
  flex?: boolean;

  /** Input text value */
  value: string;

  /** Disabled the input, the focus, and the tooltip */
  disabled?: boolean;
}
