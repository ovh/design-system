import type { OsdsMessage } from '../osds-message';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_MESSAGE_TYPE } from '../constants/message-type';
import { odsIsTermInEnum, OdsLogger } from '@ovhcloud/ods-common-core'

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
  validateColor(color?: OdsThemeColorIntent): void {
    if (color && !odsIsTermInEnum(color, OdsThemeColorIntent)) {
      this.logger.warn(
        `The color attribute must have a value from [${Object.values(OdsThemeColorIntent).join(', ')}]`
      );
    }
  }

  /**
   * Change color attribute from type
   * Color will change if default is set
   * @param type - type of the message
   */
  setColorForType(type?: ODS_MESSAGE_TYPE): void {
    if(this.component.type && this.component.color === OdsThemeColorIntent.default) {
      this.component.color = type as unknown as OdsThemeColorIntent;
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
