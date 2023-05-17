import { OdsTooltip } from './ods-tooltip';
import { OdsComponentController } from '../../ods-component-controller';
import { OdsLogger } from '../../../logger/ods-logger';
import { OdsWarnComponentAttribute } from '../../../logger/ods-warn-logger';
import { OdsTooltipVariant } from './ods-tooltip-variant';

/**
 * common controller logic for component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTooltipController extends OdsComponentController<OdsTooltip> {
  private readonly logger = new OdsLogger('OdsTooltipController');

  constructor(component: OdsTooltip) {
    super(component);
  }

  /**
   * Handle click event on document and check if it is not on the component itself
   */
  checkForClickOutside(event: { target: HTMLElement }): void {
    if (this.component.surface === undefined || !this.component.surface.opened || this.component.el.contains(event.target)) {
      return;
    } else {
      this.component.surface.close();
    }
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
    OdsWarnComponentAttribute<OdsTooltipVariant, OdsTooltip>({
      logger: this.logger,
      attributeValues: OdsTooltipVariant as Record<string, unknown>,
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
