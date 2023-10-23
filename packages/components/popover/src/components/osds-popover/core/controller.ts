import type {OsdsPopover} from '../osds-popover';

class OdsPopoverController {
  private component: OsdsPopover;

  constructor(component: OsdsPopover) {
    this.component = component;
  }

  /**
   * Handle click event on Trigger
   */
  handleTriggerClick(): void {
    if (!this.component.surface) {
      return;
    }
    this.component.surface.opened = !this.component.surface.opened;
  }

  /**
   * Handle keypress event on Trigger
   */
  handleTriggerKey(event: KeyboardEvent): void {
    if((event.key === ' ' || event.key === 'Enter')) {
      if (!this.component.surface) {
        return;
      }
      this.component.surface.opened = !this.component.surface.opened;
    }

    if(event.key === 'Escape') {
      this.closeSurface();
    }
  }

  /**
   * Handle click event on Surface
   */
  handleSurfaceKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
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
    }
  }
}

export {
  OdsPopoverController,
};
