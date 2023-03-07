import { OdsComponentController } from '../ods-component-controller';
import { OdsBreadcrumbItem } from './ods-breadcrumb-item';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';

/**
 * common controller logic for breadcrumb-item component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsBreadcrumbItemController extends OdsComponentController<OdsBreadcrumbItem> {
  private readonly logger = new OdsLogger('OdsBreadcrumbItemController');

  constructor(component: OdsBreadcrumbItem) {
    super(component);
  }

  /**
   * validating that the color, the referrerpolicy, the rel and the target have correct values
   * and warn the user if not
   */
  validateAttributes(): void {
    const logger = this.logger;
    OdsWarnComponentAttribute<OdsThemeColorIntent, OdsBreadcrumbItem>({
      logger,
      attributeValues: OdsThemeColorIntent as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color,
    });
    OdsWarnComponentAttribute<OdsHTMLAnchorElementTarget, OdsBreadcrumbItem>({
      logger,
      attributeValues: OdsHTMLAnchorElementTarget as Record<string, unknown>,
      attributeName: 'target',
      attribute: this.component.target,
    });
  }
}
