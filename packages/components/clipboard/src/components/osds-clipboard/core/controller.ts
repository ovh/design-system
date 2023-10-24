import type { OsdsClipboard } from '../osds-clipboard';
import { writeOnClipboard } from '@ovhcloud/ods-common-core';

class OdsClipboardController {
  private component: OsdsClipboard;

  constructor(component: OsdsClipboard) {
    this.component = component;
  }

  async handlerClick(value: string): Promise<void> {
    const successMessage = this.component.el.querySelector('[slot=success-message]')?.innerHTML;
    const errorMessage = this.component.el.querySelector('[slot=error-message]')?.innerHTML;

    try {
      await writeOnClipboard(value);
      this.component.surfaceMessage = successMessage;
      if (this.component.surface && this.component.surfaceMessage !== '') {
        this.component.surface.opened = !this.component.surface.opened;
      }
    } catch (error) {
      this.component.surfaceMessage = errorMessage;
      if (this.component.surface && this.component.surfaceMessage !== '') {
        this.component.surface.opened = !this.component.surface.opened;
      }
      throw error;
    }
  }

  syncReferences(): void {
    if (this.component.surface && this.component.anchor) {
      this.component.surface.setAnchorElement(this.component.anchor);
    }
  }

  closeSurface(): void {
    if (this.component.surface && this.component.surface.opened) {
      this.component.surface.close();
    }
  }

  checkForClickOutside(event: MouseEvent): void {
    if (this.component.el.contains(event.target as Node) || this.component.surface === undefined || !this.component.surface.opened) {
      return;
    }

    this.closeSurface();
  }
}

export {
  OdsClipboardController,
};
