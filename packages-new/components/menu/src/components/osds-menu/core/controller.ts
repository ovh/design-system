import { OdsLogger } from '@ovhcloud/ods-common-core';
import { OsdsMenu } from '../osds-menu';
import { OsdsMenuItem } from '../../osds-menu-item/osds-menu-item';

/**
 * common controller logic for Menu component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsMenuController {
  private readonly logger = new OdsLogger('OdsMenuController');
  private _menuItems: (HTMLElement & OsdsMenuItem)[] = [];

  public get menuItems(): (HTMLElement & OsdsMenuItem)[] {
    return this._menuItems;
  }

  public set menuItems(value: (HTMLElement & OsdsMenuItem)[]) {
    this._menuItems = value;
  }

  protected component: OsdsMenu;

  constructor(component: OsdsMenu) {
    this.component = component;
  }

  afterInit(): void {
    this.component.propagateDisabledToChild(this.component.disabled);
  }

  /**
   * Apply disabled attribute to child when parent is disabled itself
   */
  propagateDisabledToChild(disabled: boolean | undefined): void {
    if (disabled) {
      this.logger.log('Propagate Disabled attribute on children');
      this.component.title?.setAttribute('disabled', 'disabled');
    } else {
      this.logger.log('Remove Disabled attribute on children');
      this.component.title?.removeAttribute('disabled');
    }
  }

  /**
   * Handle click event on Trigger
   */
  handleTriggerClick(): void {
    this.logger.log('Click on trigger');

    if (!this.component.surface || this.component.disabled) {
      return;
    }
    this.component.surface.opened = !this.component.surface.opened;
  }

  handleKeyDown(event: KeyboardEvent): void {
    const selectedMenuItemIndex = this.menuItems.findIndex((button) => button.getAttribute('selected') !== null || document.activeElement === button);
    switch (event.code) {
      case 'Escape': {
        this.menuItems.forEach(s => s.removeAttribute('selected'));
        return this.closeSurface();
      }
      case 'ArrowUp':
      case 'ArrowDown':
      case 'Tab':
        return this.handlerKeyArrow(event, selectedMenuItemIndex);
      case 'Enter':
      case 'NumpadEnter':
      case 'Space':
        return this.handlerKeyEnter();
      default:
        break;
    }
  }

  private handlerKeyEnter() {
    if (!this.component.surface || this.component.disabled) {
      return;
    }
    this.component.surface.opened = !this.component.surface.opened;
  }

  private handlerKeyArrow(event: KeyboardEvent, selectedMenuItemIndex: number): void {
    if (!this.component.surface?.opened) {
      return;
    }
    const focusMenuItem = (index: number) => {
      this.menuItems[index].focus();
      this.menuItems[index].setAttribute('selected', '');
      event.preventDefault();
    }

    const firstEnabled = (index: number, direction: string) => {
      const i = direction === 'previous' ? -1 : 1;
      do {
        index = index + i;
      }
      while (this.menuItems[index] && this.menuItems[index].getAttribute('disabled') === "")
      return index;
    }

    const hasSelectedItem = selectedMenuItemIndex !== -1;
    if (hasSelectedItem) {
      this.menuItems[selectedMenuItemIndex].removeAttribute('selected');
      this.menuItems[selectedMenuItemIndex].blur();
    }
    if (event.code === 'ArrowUp' || (event.code === 'Tab' && event.shiftKey)) {
      let index = hasSelectedItem ? firstEnabled(selectedMenuItemIndex, "previous") : firstEnabled(-1, "next");
      if (index < 0 && (event.code === 'Tab' && event.shiftKey)) {
        return;
      } else if (index < 0) {
        index = this.menuItems.length;
        return focusMenuItem(firstEnabled(index, "previous"));
      }
      return focusMenuItem(index);
    }
    if (event.code === 'ArrowDown' || event.code === 'Tab') {
      let index = hasSelectedItem ? firstEnabled(selectedMenuItemIndex, "next") : firstEnabled(-1, "next");
      if (index > this.menuItems.length - 1 && event.code === 'Tab') {
        this.menuItems.forEach(s => s.removeAttribute('selected'));
        return this.closeSurface();
      } else if (index > this.menuItems.length - 1) {
        index = -1;
        return focusMenuItem(firstEnabled(index, "next"));
      }
      return focusMenuItem(index);
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
      this.menuItems.forEach(s => s.removeAttribute('selected'));
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

export { OdsMenuController };
