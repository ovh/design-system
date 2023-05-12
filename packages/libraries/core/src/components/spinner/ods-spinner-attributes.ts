import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsSpinnerMode } from './ods-spinner-mode';
import { OdsSpinnerSize } from './ods-spinner-size';

export interface OdsSpinnerAttributes extends OdsComponentAttributes {
  /** contrasted or not: see component principles */
  contrasted?: boolean;
  /** full width or not: see component principles */
  flex?: boolean;
  /** choose between infinite or progress spinner (infinite only for now) */
  mode?: OdsSpinnerMode;
  /** size: see component principles */
  size?: OdsSpinnerSize;
}
