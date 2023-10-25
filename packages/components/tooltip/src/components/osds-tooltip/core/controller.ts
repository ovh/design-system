import type { OsdsTooltip } from '../osds-tooltip';

import { OdsLogger, OdsWarnComponentAttribute } from '@ovhcloud/ods-common-core';

import { ODS_TOOLTIP_VARIANT } from '../constants/tooltip-variant';

class OdsTooltipController {
  private component: OsdsTooltip;
  private readonly logger = new OdsLogger('OdsTooltipController');

  constructor(component: OsdsTooltip) {
    this.component = component;
  }

  /**
   * Handle click event on document and check if it is not on the component itself
   */
  checkForClickOutside(event: { target: HTMLElement }): void {
    if (this.component.surface === undefined || !this.component.surface.opened || this.component.el.contains(event.target)) {
      return;
    }

    this.component.surface.close();
  }

  /**
   * Method to close the surface
   */
  closeSurface(): void {
    if (this.component.surface && this.component.surface.opened) {
      this.component.surface.close();
    }
  }

  /**
   * Handle mouse enter event on Trigger
   */
  handleMouseEnter(): void {
    this.openSurface();
  }

  /**
   * Handle mouse leave event on Trigger
   */
  handleMouseLeave(): void {
    this.closeSurface();
  }

  /**
   * Handle blur event on Trigger
   */
  handleTriggerBlur(): void {
    this.closeSurface();
  }

  /**
   * Handle click event on Trigger
   */
  handleTriggerClick(): void {
    this.openSurface();
  }

  /**
   * Handle focus event on Trigger
   */
  handleTriggerFocus(): void {
    this.openSurface();
  }

  syncReferences(): void {
    if (this.component.surface && this.component.anchor) {
      this.component.surface.setAnchorElement(this.component.anchor);
    }
  }

  /**
   * Validate that all attributes have correct values
   */
  validateAttributes(): void {
    OdsWarnComponentAttribute<ODS_TOOLTIP_VARIANT, OsdsTooltip>({
      logger: this.logger,
      attributeValues: ODS_TOOLTIP_VARIANT as Record<string, unknown>,
      attributeName: 'variant',
      attribute: this.component.variant,
    });
  }

  private openSurface(): void {
    if (this.component.surface) {
      this.component.surface.open();
    }
  }
}

export {
  OdsTooltipController,
};
