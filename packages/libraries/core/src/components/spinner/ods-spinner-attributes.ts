import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsSpinnerMode } from './ods-spinner-mode';
import { OdsSpinnerSize } from './ods-spinner-size';

export interface OdsSpinnerAttributes extends OdsComponentAttributes {
  /**
   * Spinner attribute description
   */
  size?: OdsSpinnerSize;
  flex?: boolean;
  contrasted?: boolean;
  mode?:  OdsSpinnerMode;
}
