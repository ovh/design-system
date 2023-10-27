import type { OdsInteractiveSurfaceAttribute } from './interfaces/attributes';
import type { OcdkSurface } from '@ovhcloud/ods-cdk';
import type { HTMLStencilElement } from '@stencil/core/internal';

import { ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { Component, Element, Event, EventEmitter, Host, h, Listen } from '@stencil/core';

import { OdsInteractiveSurfaceController } from './core/controller';

/**
 * @slot (unnamed) - InteractiveSurface content
 */
@Component({
  shadow: false,
  styleUrl: 'osds-interactive-surface.scss',
  tag: 'osds-interactive-surface',
})
export class OsdsInteractiveSurface implements OdsInteractiveSurfaceAttribute {
  controller: OdsInteractiveSurfaceController = new OdsInteractiveSurfaceController(this);
  surface: OcdkSurface | undefined = undefined;
  anchor!: HTMLElement;
  dirty = false;
  observer?: MutationObserver;

  @Element() el!: HTMLStencilElement;

  /** @see OdsSelectEvents.odsBlur */
  @Event() odsBlur!: EventEmitter<void>;

  /** @see OdsSelectEvents.odsFocus */
  @Event() odsFocus!: EventEmitter<void>;

  @Listen('click', { capture: true })
  handleClick(ev: MouseEvent): void {
    const target = ev.target as HTMLElement;
    if (target.parentElement?.className === 'interactive-surface') {
      return console.log('click', ev);
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    event.stopPropagation();
    this.controller.handlerKeyDown(event);
  }

  onBlur(): void {
    this.odsBlur.emit();
  }

  onFocus(): void {
    this.odsFocus.emit();
  }

  syncReferences(): void {
    this.controller.syncReferences();
  }

  async handleSlotChange(): Promise<void> {
    this.setOptions();
  }

  setOptions(): void {
    this.controller.options = this.getOptionList();
    this.controller.options.forEach((option) => this.observer?.observe(option, { childList: true }));
  }

  getOptionList(): HTMLElement[] {
    if (!this.surface) {
      return [];
    }
    return Array.from(this.surface.querySelectorAll<HTMLElement>('*'));
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
  }

  render(): void {

    return (
      <Host {...{
        onBlur: this.onBlur.bind(this),
        onFocus: this.onFocus.bind(this),
        onKeyDown: this.handleKeyDown.bind(this),
        ref: (el?: HTMLElement | null): void => {
          this.anchor = el as HTMLElement;
          this.syncReferences();
        },
      }}>
        <ocdk-surface
          class="interactive-surface"
          ref={(el: HTMLElement): void => {
            if (ocdkIsSurface(el)) {
              this.surface = el as OcdkSurface;
              this.syncReferences();
            }
          }}>
          <slot
            onSlotchange={(): Promise<void> => this.handleSlotChange()}
          ></slot>
        </ocdk-surface>
      </Host>
    );
  }
}
