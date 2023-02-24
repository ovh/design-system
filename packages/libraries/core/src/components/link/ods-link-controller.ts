import { OdsComponentController } from '../ods-component-controller';
import { OdsLink } from './ods-link';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';

/**
 * common controller logic for link component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsLinkController extends OdsComponentController<OdsLink> {

  private readonly logger = new OdsLogger('OdsLinkController');

  constructor(component: OdsLink) {
    super(component);
  }

  /**
   * validating that the color, the referrerpolicy, the rel and the target have correct values
   * and warn the user if not
   */
  validateAttributes(): void {
    const logger = this.logger;
    OdsWarnComponentAttribute<OdsThemeColorIntent, OdsLink>({
      logger,
      attributeValues: OdsThemeColorIntent as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color
    });
    OdsWarnComponentAttribute<OdsHTMLAnchorElementTarget, OdsLink>({
      logger,
      attributeValues: OdsHTMLAnchorElementTarget as Record<string, unknown>,
      attributeName: 'target',
      attribute: this.component.target
    });
  }
}
