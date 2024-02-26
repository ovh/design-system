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
      this.openSurfaceWithMessage(successMessage, 'Slot "success-message" is not defined. If you want a tooltip with a success message you need to defined it.');
    } catch (error) {
      this.openSurfaceWithMessage(errorMessage, 'Slot "error-message" is not defined. If you want a tooltip with a error message you need to defined it.');
      throw error;
    }
  }

  openSurfaceWithMessage(html: string | undefined, warnMessage: string): void {
    if (!html || !this.getTextContent(html) || !this.component.surface) {
      console.warn(warnMessage);
      return;
    }
    this.component.surfaceMessage = html;
    this.component.surface.opened = !this.component.surface.opened;
  }

  getTextContent(html: string): string | null {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .documentElement.textContent;
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
