import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsErrorStateControl } from '../../form/error/ods-error-state-control';
import { OdsFormControl } from '../../form/control/ods-form-control';
import { OdsTextAreaSize } from './ods-textarea-size';
import { OdsTextAreaValidityState } from '../../form/validation/textarea/ods-textarea-validity-state';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export interface OdsTextAreaAttributes extends OdsComponentAttributes {
  /** textarea id */
  textAreaId?: string;
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
  /** full width or not: see component principles */
  flex?: boolean;
  /** textarea form control */
  formControl?: OdsFormControl<OdsTextAreaValidityState>;
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
  size?: OdsTextAreaSize;
  /** spellcheck: see component principles */
  spellcheck: HTMLElement['spellcheck'];
  /** value: see component principles */
  value: HTMLTextAreaElement['value'];
  /** hasFocus or not */
  hasFocus: boolean;
}
