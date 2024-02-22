import type { OsdsClipboard } from '../osds-clipboard';
import { writeOnClipboard } from '@ovhcloud/ods-common-core';

class OdsClipboardController {
  private component: OsdsClipboard;

  constructor(component: OsdsClipboard) {
    this.component = component;
  }

  checkForClickOutside(event: MouseEvent): void {
    if (this.component.el.contains(event.target as Node) || this.component.surface === undefined || !this.component.surface.opened) {
      return;
    }

    this.closeSurface();
  }

  closeSurface(): void {
    if (this.component.surface && this.component.surface.opened) {
      this.component.surface.close();
    }
  }

  async handlerClick(value: string): Promise<void> {
    const successMessage = this.component.el.querySelector('[slot=success-message]')?.innerHTML;
    const errorMessage = this.component.el.querySelector('[slot=error-message]')?.innerHTML;

    try {
      await writeOnClipboard(value);
      this.openSurfaceWithMessage(successMessage);
    } catch (error) {
      this.openSurfaceWithMessage(errorMessage);
      throw error;
    }
  }

  private openSurfaceWithMessage(message: string | undefined): void {
    if (!message || !this.component.surface) {
      return;
    }
    this.component.surfaceMessage = message;
    this.component.surface.opened = !this.component.surface.opened;
  }

  syncReferences(): void {
    if (this.component.surface && this.component.anchor) {
      this.component.surface.setAnchorElement(this.component.anchor);
    }
  }
}

export {
  OdsClipboardController,
};
