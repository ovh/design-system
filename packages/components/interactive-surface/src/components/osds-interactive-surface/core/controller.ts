
import type { OsdsInteractiveSurface } from '../osds-interactive-surface';

/**
 * common controller logic for select component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsInteractiveSurfaceController {
  private component: OsdsInteractiveSurface;
  private _options: (HTMLElement)[] = [];

  public get options(): (HTMLElement)[] {
    return this._options;
  }

  public set options(value: (HTMLElement)[]) {
    this._options = value;
  }

  constructor(component: OsdsInteractiveSurface) {
    this.component = component;
  }

  handlerKeyDown(event: KeyboardEvent): void {
    // const selectedSelectOptionIndex = this.selectOptions.findIndex((select) => select.getAttribute('selected') !== null || document.activeElement === select);
    switch (event.code) {
    case 'Escape': {
    //   this.selectOptions.forEach((s) => s.removeAttribute('selected'));
    //   this.selectOptions.find((s) => s.value === this.component.value)?.setAttribute('selected', '');
    //   return this.closeSurface();
      return console.log('Escape');
    }
    case 'ArrowUp':
      return console.log('arr up');
    case 'ArrowDown':
      return console.log('arr down');
    case 'Tab':
    //   return this.handlerKeyArrow(event, selectedSelectOptionIndex);
      return console.log('Tab');
    case 'Enter':
    case 'NumpadEnter':
    //   return this.handlerKeyEnter(this.selectOptions[selectedSelectOptionIndex]);
      return console.log('Numpad');
    default:
      break;
    }
  }

  syncReferences(): void {
    if (this.component.surface && this.component.anchor) {
      this.component.surface.setAnchorElement(this.component.anchor);
      this.component.surface.setAnchorMargin({ bottom: 0 });
    }
  }
}

export {
  OdsInteractiveSurfaceController,
};
