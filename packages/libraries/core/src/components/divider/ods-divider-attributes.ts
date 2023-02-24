import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsDividerSize } from './ods-divider-size';
import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsDividerAttributes extends OdsComponentAttributes {
  /**
   * Divider color theme
   */
  color?: OdsThemeColorIntent;
  /**
   * Divider design as contrasted version
   */
  contrasted?: boolean;
  /**
   * Divider has a separator or not
   */
  separator?: boolean;
  /**
   * Divider size
   */
  size?: OdsDividerSize;
}
