class OdsPopoverController {
  constructor(component) {
    this.component = component;
  }
  /**
   * Handle click event on Trigger
   */
  handleTriggerClick() {
    if (!this.component.surface) {
      return;
    }
    this.component.surface.opened = !this.component.surface.opened;
  }
  /**
   * Handle keypress event on Trigger
   */
  handleTriggerKey(event) {
    if ((event.key === ' ' || event.key === 'Enter')) {
      if (!this.component.surface) {
        return;
      }
      this.component.surface.opened = !this.component.surface.opened;
    }
    if (event.key === 'Escape') {
      this.closeSurface();
    }
  }
  /**
   * Handle click event on Surface
   */
  handleSurfaceKey(event) {
    if (event.key === 'Escape') {
      this.closeSurface();
    }
  }
  /**
   * Handle click event on document and check if it is not on the component itself
   */
  checkForClickOutside(event) {
    if (this.component.el.contains(event.target) || event.composedPath().includes(this.component.el) || this.component.surface === undefined || !this.component.surface.opened) {
      return;
    }
    else {
      this.closeSurface();
    }
  }
  /**
   * Method to close the surface
   */
  closeSurface() {
    if (this.component.surface && this.component.surface.opened) {
      this.component.surface.close();
    }
  }
  syncReferences() {
    if (this.component.surface && this.component.anchor) {
      this.component.surface.setAnchorElement(this.component.anchor);
    }
  }
}
export { OdsPopoverController, };
