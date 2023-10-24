import type { ODS_DIVIDER_SIZE } from '../constants/divider-size';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

interface OdsDividerAttribute {
  /**
   * Divider color theme
   */
  color?: ODS_THEME_COLOR_INTENT;
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
