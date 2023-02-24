import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsMessage } from './ods-message';
import { OdsMessageType } from './ods-message-type';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { odsIsTermInEnum } from '../../types/guard/ods-is-term-in-enum';

/**
 * common controller logic for chip component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsMessageController extends OdsComponentController<OdsMessage> {
  private readonly logger = new OdsLogger('OsdsMessageController');

  constructor(component: OdsMessage) {
    super(component);
  }

  /**
   * Warn user if the color attribute is wrong
   * @param color
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
   * @param type
   */
  setColorForType(type?: OdsMessageType): void {
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
