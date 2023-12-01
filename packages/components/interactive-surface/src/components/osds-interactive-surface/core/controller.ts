
import type { OsdsInteractiveSurface } from '../osds-interactive-surface';
import type { HTMLStencilElement } from '@stencil/core/internal';

/**
 * common controller logic for select component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsInteractiveSurfaceController {
  private component: OsdsInteractiveSurface;
  private _options: (HTMLElement & HTMLStencilElement)[] = [];

  public get options(): (HTMLElement & HTMLStencilElement)[] {
    return this._options;
  }

  public set options(value: (HTMLElement & HTMLStencilElement)[]) {
    this._options = value;
  }

  constructor(component: OsdsInteractiveSurface) {
    this.component = component;
  }

  findOptionIndex(element: HTMLElement): number {
    return this._options.findIndex((option) => option === element);
  }

  focusOptionAtIndex(index: number): void {
    if (index >= 0 && index < this._options.length) {
      const option = this._options[index];
      option.focus();
      this.component.focusedElement = option;
    }
  }

  clickHandler(event: MouseEvent): void {
    event.stopPropagation();
    return console.log('click', event.target);
  }

  keyDownHandler(event: KeyboardEvent): void {
    event.stopPropagation();
    const { code } = event;

    switch (code) {
    case 'Tab':
      if (event.shiftKey) {
        console.log('shift tab', event.target);
      } else {
        console.log('tab', event.target);
      }
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      console.log('navigate backwards', event.target);
      this.navigateBackwards(event.target as HTMLElement);
      break;
    case 'ArrowRight':
    case 'ArrowDown':
      console.log('navigate forward', event.target);
      this.navigateForward(event.target as HTMLElement);
      break;
    case 'Enter':
    case 'Space':
      console.log('select', event.target);
      break;
    case 'Escape':
      console.log('close', event.target);
      break;
    default:
      break;
    }
  }

  isFocusable(el: HTMLElement): boolean {
    return !el.hasAttribute('disabled')
        && (el.tabIndex >= 0 || el.isContentEditable || this.isInherentlyFocusable(el));
  }

  isInherentlyFocusable(el: HTMLElement): boolean {
    const focusableTags = ['a', 'button', 'input', 'select', 'textarea'];
    return focusableTags.includes(el.tagName.toLowerCase()) && el.hasAttribute('href');
  }

  getNextFocusableIndex(currentIndex: number, direction: 'forward' | 'backward'): number {
    const maxIndex = this._options.length;
    let nextIndex = currentIndex;
    do {
      nextIndex = direction === 'forward' ? (nextIndex + 1) % maxIndex : (nextIndex - 1 + maxIndex) % maxIndex;
    } while (nextIndex !== currentIndex && !this.isFocusable(this._options[nextIndex]));

    return nextIndex === currentIndex ? -1 : nextIndex;
  }

  navigateBackwards(target: HTMLElement): void {
    const currentIndex = this.findOptionIndex(target);
    const previousIndex = this.getNextFocusableIndex(currentIndex, 'backward');
    if (previousIndex !== -1) {
      this.focusOptionAtIndex(previousIndex);
    }
  }

  navigateForward(target: HTMLElement): void {
    const currentIndex = this.findOptionIndex(target);
    const nextIndex = this.getNextFocusableIndex(currentIndex, 'forward');
    if (nextIndex !== -1) {
      this.focusOptionAtIndex(nextIndex);
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
