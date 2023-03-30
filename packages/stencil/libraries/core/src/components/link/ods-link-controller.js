import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';
/**
 * common controller logic for link component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsLinkController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsLinkController');
  }
  /**
   * validating that the color, the referrerpolicy, the rel and the target have correct values
   * and warn the user if not
   */
  validateAttributes() {
    const logger = this.logger;
    OdsWarnComponentAttribute({
      logger,
      attributeValues: OdsThemeColorIntent,
      attributeName: 'color',
      attribute: this.component.color
    });
    OdsWarnComponentAttribute({
      logger,
      attributeValues: OdsHTMLAnchorElementTarget,
      attributeName: 'target',
      attribute: this.component.target
    });
  }
}
