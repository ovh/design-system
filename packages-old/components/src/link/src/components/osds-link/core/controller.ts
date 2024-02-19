import type { OsdsLink } from '../osds-link';
import { OdsHTMLAnchorElementTarget, OdsWarnComponentAttribute } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

class OdsLinkController {
  protected component: OsdsLink;

  constructor(component: OsdsLink) {
    this.component = component;
  }

  validateAttributes(): void {
    OdsWarnComponentAttribute<ODS_THEME_COLOR_INTENT, OsdsLink>({
      attributeValues: ODS_THEME_COLOR_INTENT as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color,
    });

    if (this.component.href && !this.component.target) {
      this.component.target = OdsHTMLAnchorElementTarget._self;
    }

    this.component.href && OdsWarnComponentAttribute<OdsHTMLAnchorElementTarget, OsdsLink>({
      attributeValues: OdsHTMLAnchorElementTarget as Record<string, unknown>,
      attributeName: 'target',
      attribute: this.component.target,
    });
  }
}

export {
  OdsLinkController,
};
