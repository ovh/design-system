import { OdsCodeSize } from './ods-code-size';
import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export interface OdsCodeAttributes extends OdsComponentAttributes {
  /** main color: see component principles */
  color?: OdsThemeColorIntent;
  /** contrasted or not: see component principles */
  contrasted?: boolean;
  /** size: see component principles */
  size?: OdsCodeSize;
}
