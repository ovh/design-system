import type { ODS_MESSAGE_TYPE } from '../constants/message-type';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import type { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';


interface OdsMessageAttribute {
  /**
   * Message color theme
   */
  color?: ODS_THEME_COLOR_INTENT
  /**
   * Message is in contrasted mode or not
   */
  contrasted?: boolean
  /**
   * The icon prefix
   */
  icon?: ODS_ICON_NAME
  /**
   * Message as inline
   */
  inline?: boolean
  /**
   * If the message can be removed or not
   */
  removable?: boolean
  /**
   * The message type
   */
  type?: ODS_MESSAGE_TYPE
}

export {
  OdsMessageAttribute,
};
