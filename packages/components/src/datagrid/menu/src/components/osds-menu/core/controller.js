class OdsMenuController {
  constructor(component) {
    this.menuItems = [];
    this.component = component;
  }
  afterInit() {
    this.component.propagateDisabledToChild(this.component.disabled);
  }
  checkForClickOutside(event) {
    if (this.component.el.contains(event.target) || event.composedPath().includes(this.component.el) || this.component.surface === undefined || !this.component.surface.opened) {
      return;
    }
    else {
      this.menuItems.forEach((s) => s.removeAttribute('selected'));
      this.closeSurface();
    }
  }
  closeSurface() {
    if (this.component.surface && this.component.surface.opened) {
      this.component.surface.close();
    }
  }
  handlerKeyArrow(event, selectedMenuItemIndex) {
    var _a;
    if (!((_a = this.component.surface) === null || _a === void 0 ? void 0 : _a.opened)) {
      return;
    }
    const focusMenuItem = (index) => {
      this.menuItems[index].focus();
      this.menuItems[index].setAttribute('selected', '');
      event.preventDefault();
    };
    const firstEnabled = (index, direction) => {
      const i = direction === 'previous' ? -1 : 1;
      do {
        index = index + i;
      } while (this.menuItems[index] && this.menuItems[index].getAttribute('disabled') === '');
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
      }
      else if (index < 0) {
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
      }
      else if (index > this.menuItems.length - 1) {
        index = -1;
        return focusMenuItem(firstEnabled(index, 'next'));
      }
      return focusMenuItem(index);
    }
  }
  handleKeyDown(event) {
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
      case 'Enter':
      case 'NumpadEnter':
      case 'Space':
        return this.handleTriggerClick();
      default:
        break;
    }
  }
  handleTriggerClick() {
    if (!this.component.surface || this.component.disabled) {
      return;
    }
    this.component.surface.opened = !this.component.surface.opened;
  }
  propagateDisabledToChild(disabled) {
    var _a, _b;
    if (disabled) {
      (_a = this.component.title) === null || _a === void 0 ? void 0 : _a.setAttribute('disabled', 'disabled');
    }
    else {
      (_b = this.component.title) === null || _b === void 0 ? void 0 : _b.removeAttribute('disabled');
    }
  }
  syncReferences() {
    if (this.component.surface && this.component.anchor) {
      this.component.surface.setAnchorElement(this.component.anchor);
      this.component.surface.setAnchorMargin({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      });
    }
  }
}
export { OdsMenuController };
