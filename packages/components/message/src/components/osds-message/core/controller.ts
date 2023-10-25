import { OdsLogger, odsIsTermInEnum } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

import { ODS_MESSAGE_TYPE } from '../constants/message-type';
import type { OsdsMessage } from '../osds-message';

/**
 * common controller logic for chip component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsMessageController {
  private readonly logger = new OdsLogger('OsdsMessageController');
  protected component: OsdsMessage;

  constructor(component: OsdsMessage) {
    this.component = component;
  }

  /**
   * Warn user if the color attribute is wrong
   * @param color - color of the message
   */
  validateColor(color?: ODS_THEME_COLOR_INTENT): void {
    if (color && !odsIsTermInEnum(color, ODS_THEME_COLOR_INTENT)) {
      this.logger.warn(
        `The color attribute must have a value from [${Object.values(ODS_THEME_COLOR_INTENT).join(', ')}]`,
      );
    }
  }

  /**
   * Change color attribute from type
   * Color will change if default is set
   * @param type - type of the message
   */
  setColorForType(type?: ODS_MESSAGE_TYPE): void {
    if(this.component.type && this.component.color === ODS_THEME_COLOR_INTENT.default) {
      this.component.color = type as unknown as ODS_THEME_COLOR_INTENT;
    }
  }

  /**
   * send remove event on click
   */
  onRemoveClicked(): void {
    this.component.removeClicked();
  }
}

export {
  OdsMessageController,
};
