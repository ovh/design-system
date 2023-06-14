import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsSwitchSize } from './ods-switch-size';
import { OdsSwitchVariant } from './ods-switch-variant';

export interface OdsSwitchAttributes extends OdsComponentAttributes {
  /** disabled: see component principles */
  disabled?: boolean;
  /** contrasted or not: see component principles */
  contrasted?: boolean;
  /** main color: see component principles */
  color?: OdsThemeColorIntent;
  /** used design aspect */
  variant?: OdsSwitchVariant;
  /** size: see component principles */
  size?: OdsSwitchSize;
}
