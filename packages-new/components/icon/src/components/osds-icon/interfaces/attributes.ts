import type { ODS_ICON_NAME } from '../constants/icon-name';
import type { ODS_ICON_SIZE } from '../constants/icon-size';
import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

interface OdsIconAttribute {
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
   * Icon if hoverabled or not
   */
  hoverable?: boolean
  /**
   * Icon name
   */
  name?: ODS_ICON_NAME
  /**
   * Icon size
   */
  size?: ODS_ICON_SIZE
}

export {
  OdsIconAttribute,
};
