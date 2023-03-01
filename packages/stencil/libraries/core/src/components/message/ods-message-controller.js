import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { odsIsTermInEnum } from '../../types/guard/ods-is-term-in-enum';
/**
 * common controller logic for chip component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsMessageController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OsdsMessageController');
  }
  /**
   * Warn user if the color attribute is wrong
   * @param color
   */
  validateColor(color) {
    if (color && !odsIsTermInEnum(color, OdsThemeColorIntent)) {
      this.logger.warn(`The color attribute must have a value from [${Object.values(OdsThemeColorIntent).join(', ')}]`);
    }
  }
  /**
   * Change color attribute from type
   * Color will change if default is set
   * @param type
   */
  setColorForType(type) {
    if (this.component.type && this.component.color === OdsThemeColorIntent.default) {
      this.component.color = type;
    }
  }
  /**
   * send remove event on click
   */
  onRemoveClicked() {
    this.component.removeClicked();
  }
}
