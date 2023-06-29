import { OdsPopover } from './ods-popover';
import { OdsComponentController } from '../../ods-component-controller';
import { OdsLogger } from '../../../logger/ods-logger';

/**
 * common controller logic for Popover component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsPopoverController extends OdsComponentController<OdsPopover> {
  private readonly logger = new OdsLogger('OdsPopoverController');

  constructor(component: OdsPopover) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
      return;
  }

  /**
   * Handle click event on Trigger
   */
  handleTriggerClick(): void {
    this.logger.log('Click on trigger');

    if (!this.component.surface) {
      return;
    }
    this.component.surface.opened = !this.component.surface.opened;
  }

  /**
   * Handle keypress event on Trigger
   */
  handleTriggerKey(event: KeyboardEvent): void {
    if((event.key === " " || event.key === "Enter")) {
      this.logger.log('Key on trigger');

      if (!this.component.surface) {
        return;
      }
      this.component.surface.opened = !this.component.surface.opened;
    }

    if(event.key === "Escape") {
      this.logger.log('EscapeKey on trigger');
      this.closeSurface();
    }
  }

  /**
   * Handle click event on Surface
   */
  handleSurfaceKey(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      this.logger.log('EscapeKey in surface');
      this.closeSurface();
    }
  }

  /**
   * Handle click event on document and check if it is not on the component itself
   */
  checkForClickOutside(event: any): void {
    if (this.component.el.contains(event.target) || this.component.surface === undefined || !this.component.surface.opened) {
      return;
    } else {
      this.logger.log('Click outside component while it is opened');
      this.closeSurface();
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

  syncReferences(): void {
    if (this.component.surface && this.component.anchor) {
      this.component.surface.setAnchorElement(this.component.anchor);
      this.component.surface.setAnchorMargin( {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      });
    }
  }
}
