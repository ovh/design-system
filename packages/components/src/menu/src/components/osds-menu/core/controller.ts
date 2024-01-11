import type { OsdsMenuItem } from '../../osds-menu-item/osds-menu-item';
import type { OsdsMenu } from '../osds-menu';

class OdsMenuController {
  protected component: OsdsMenu;
  public menuItems: (HTMLElement & OsdsMenuItem)[] = [];

  constructor(component: OsdsMenu) {
    this.component = component;
  }

  afterInit(): void {
    this.component.propagateDisabledToChild(this.component.disabled);
  }

  checkForClickOutside(event: Event): void {
    if (this.component.el.contains(event.target as Node) || event.composedPath().includes(this.component.el) || this.component.surface === undefined || !this.component.surface.opened) {
      return;
    } else {
      this.menuItems.forEach((s) => s.removeAttribute('selected'));
      this.closeSurface();
    }
  }

  closeSurface(): void {
    if (this.component.surface && this.component.surface.opened) {
      this.component.surface.close();
    }
  }

  private handlerKeyArrow(event: KeyboardEvent, selectedMenuItemIndex: number): void {
    if (!this.component.surface?.opened) {
      return;
    }
    const focusMenuItem = (index: number) => {
      this.menuItems[index].focus();
      this.menuItems[index].setAttribute('selected', '');
      event.preventDefault();
    };

    const firstEnabled = (index: number, direction: string) => {
      const i = direction === 'previous' ? -1 : 1;
      do {
        index = index + i;
      }
      while (this.menuItems[index] && this.menuItems[index].getAttribute('disabled') === '');
      return index;
    };

    const hasSelectedItem = selectedMenuItemIndex !== -1;
    if (hasSelectedItem) {
      this.menuItems[selectedMenuItemIndex].removeAttribute('selected');
      this.menuItems[selectedMenuItemIndex].blur();
    }
    if (event.code === 'ArrowUp' || (event.code === 'Tab' && event.shiftKey)) {
      let index = hasSelectedItem ? firstEnabled(selectedMenuItemIndex, 'previous') : firstEnabled(-1, 'next');
      if (index < 0 && (event.code === 'Tab' && event.shiftKey)) {
        return;
      } else if (index < 0) {
        index = this.menuItems.length;
        return focusMenuItem(firstEnabled(index, 'previous'));
      }
      return focusMenuItem(index);
    }
    if (event.code === 'ArrowDown' || event.code === 'Tab') {
      let index = hasSelectedItem ? firstEnabled(selectedMenuItemIndex, 'next') : firstEnabled(-1, 'next');
      if (index > this.menuItems.length - 1 && event.code === 'Tab') {
        this.menuItems.forEach((s) => s.removeAttribute('selected'));
        return this.closeSurface();
      } else if (index > this.menuItems.length - 1) {
        index = -1;
        return focusMenuItem(firstEnabled(index, 'next'));
      }
      return focusMenuItem(index);
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    const selectedMenuItemIndex = this.menuItems.findIndex((button) => button.getAttribute('selected') !== null || document.activeElement === button);
    switch (event.code) {
    case 'Escape': {
      this.menuItems.forEach((s) => s.removeAttribute('selected'));
      return this.closeSurface();
    }
    case 'ArrowUp':
    case 'ArrowDown':
    case 'Tab':
      return this.handlerKeyArrow(event, selectedMenuItemIndex);
    default:
      break;
    }
  }

  handleTriggerClick(): void {
    if (!this.component.surface || this.component.disabled) {
      return;
    }
    this.component.surface.opened = !this.component.surface.opened;
  }

  propagateDisabledToChild(disabled: boolean | undefined): void {
    if (disabled) {
      this.component.title?.setAttribute('disabled', 'disabled');
    } else {
      this.component.title?.removeAttribute('disabled');
    }
  }

  syncReferences(): void {
    if (this.component.surface && this.component.anchor) {
      this.component.surface.setAnchorElement(this.component.anchor);
      this.component.surface.setAnchorMargin( {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      });
    }
  }
}

export { OdsMenuController };
