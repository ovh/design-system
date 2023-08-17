import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import type { ODS_MESSAGE_TYPE } from '../constants/message-type';
import type { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';

interface OdsMessageAttribute {
  /**
   * Message color theme
   */
  color?: OdsThemeColorIntent
  /**
   * Message as flex
   */
  inline?: boolean
  /**
   * The icon prefix
   */
  icon?: ODS_ICON_NAME
  /**
   * If the message can be removed or not
   */
  removable?: boolean
  /**
   * The message type
   */
  type?: ODS_MESSAGE_TYPE
  /**
   * Message is in contrasterd mode or not
   */
  contrasted?: boolean
}

export {
  OdsMessageAttribute,
};
