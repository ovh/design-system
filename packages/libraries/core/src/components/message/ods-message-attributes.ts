import type { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';
import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsMessageType } from './ods-message-type';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export interface OdsMessageAttributes extends OdsComponentAttributes {
  /**
   * Message color theme
   */
  color?: OdsThemeColorIntent
  /**
   * Message as flex
   */
  flex?: boolean
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
  type?: OdsMessageType
  /**
   * Message is in contrasterd mode or not
   */
   contrasted?: boolean
  }
