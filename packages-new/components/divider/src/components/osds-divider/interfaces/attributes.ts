import { ODS_DIVIDER_SIZE } from '../constants/divider-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

interface OdsDividerAttribute {
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
  size?: ODS_DIVIDER_SIZE;
}

export {
  OdsDividerAttribute,
};
