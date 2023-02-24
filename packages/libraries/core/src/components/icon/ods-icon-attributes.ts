import { OdsIconName, OdsIconSize } from './ods-icon-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsIconAttributes extends OdsComponentAttributes {
  /**
   * Icon ARIA name
   */
  ariaName: string
  /**
   * Icon color theme
   */
  color?: OdsThemeColorIntent
  /**
   * Icon if contrasted or not
   */
  contrasted?: boolean
  /**
   * Icon name
   */
  name?: OdsIconName
  /**
   * Icon size
   */
  size?: OdsIconSize
}

