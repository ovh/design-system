import type { OsdsLink } from '../osds-link';
import { OdsHTMLAnchorElementTarget, OdsLogger, OdsWarnComponentAttribute } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

/**
 * common controller logic for link component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsLinkController {
  private readonly logger = new OdsLogger('OdsLinkController');
  protected component: OsdsLink;

  constructor(component: OsdsLink) {
    this.component = component;
  }

  /**
   * validating that the color and the target have correct values
   * and warn the user if not
   */
  validateAttributes(): void {
    const logger = this.logger;

    OdsWarnComponentAttribute<ODS_THEME_COLOR_INTENT, OsdsLink>({
      logger,
      attributeValues: ODS_THEME_COLOR_INTENT as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color,
    });

    if (this.component.href && !this.component.target) {
      this.component.target = OdsHTMLAnchorElementTarget._self;
    }

    this.component.href && OdsWarnComponentAttribute<OdsHTMLAnchorElementTarget, OsdsLink>({
      logger,
      attributeValues: OdsHTMLAnchorElementTarget as Record<string, unknown>,
      attributeName: 'target',
      attribute: this.component.target,
    });
  }
}

export {
  OdsLinkController,
};
