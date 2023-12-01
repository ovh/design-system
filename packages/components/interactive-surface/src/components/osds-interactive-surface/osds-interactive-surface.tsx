import type { OdsInteractiveSurfaceAttribute } from './interfaces/attributes';
import type { OcdkSurface } from '@ovhcloud/ods-cdk';
import type { HTMLStencilElement } from '@stencil/core/internal';

import { ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { Component, Element, Event, EventEmitter, Host, Listen, h } from '@stencil/core';

import { OdsInteractiveSurfaceController } from './core/controller';
import { OdsInteractiveSurfaceEvent } from './interfaces/events';

/**
 * @slot (unnamed) - InteractiveSurface content
 */
@Component({
  shadow: true,
  styleUrl: 'osds-interactive-surface.scss',
  tag: 'osds-interactive-surface',
})
export class OsdsInteractiveSurface implements OdsInteractiveSurfaceAttribute, OdsInteractiveSurfaceEvent {
  anchor!: HTMLElement;
  controller: OdsInteractiveSurfaceController = new OdsInteractiveSurfaceController(this);
  dirty: boolean = false;
  focusedElement: HTMLElement | HTMLStencilElement | null = null;
  hasFocus: boolean = false;
  observer?: MutationObserver;
  selectedElement: HTMLElement | HTMLStencilElement | null = null;
  slotElement: HTMLSlotElement | null = null;
  surface: OcdkSurface | undefined = undefined;

  @Element() el!: HTMLStencilElement;

  /** @see OdsSelectEvents.odsBlur */
  @Event() odsBlur!: EventEmitter<void>;

  /** @see OdsSelectEvents.odsInteractiveSurfaceFocus */
  @Event() odsInteractiveSurfaceFocus!: EventEmitter<void>;

  async componentDidLoad(): Promise<void> {
    this.observer = new MutationObserver(() => this.handleSlotChange());
    this.setOptions();
  }

  @Listen('blur', { capture: true })
  onBlur(event: FocusEvent): void {
    event.stopPropagation();
    console.log('blur', event.target);
    this.odsBlur.emit();
  }

  @Listen('click', { capture: true })
  handleClick(event: MouseEvent): void {
    event.stopPropagation();
    this.controller.clickHandler(event);
  }

  @Listen('focus', { capture: true })
  onFocus(event: FocusEvent): void {
    event.stopPropagation();
    console.log('focus', event.target);
    this.odsInteractiveSurfaceFocus.emit();
  }

  @Listen('keydown', { capture: true })
  handleKeyDown(event: KeyboardEvent): void {
    event.stopPropagation();
    this.controller.keyDownHandler(event);
  }

  syncReferences(): void {
    this.controller.syncReferences();
  }

  handleSlotChange(): void {
    this.setOptions();
  }

  setOptions(): void {
    const assignedElements = this.slotElement?.assignedElements({ flatten: true }) as (HTMLElement & HTMLStencilElement)[];
    console.log('Assigned Elements', assignedElements);
    this.controller.options = assignedElements ?? [];
    this.observer?.observe(this.el, { childList: true, subtree: true });
  }

  getOptionList(): (HTMLElement & HTMLStencilElement)[] {
    if (!this.surface) {
      return [];
    }
    return Array.from(this.surface.querySelectorAll<HTMLElement & HTMLStencilElement>('*'));
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
  }

  render(): void {

    return (
      <Host {...{
        class: 'osds-interactive-surface',
        ref: (el?: HTMLElement | null): void => {
          this.anchor = el as HTMLElement;
          this.syncReferences();
        },
      }}>
        <ocdk-surface {...{
          class: 'osds-interactive-surface__surface',
          ref: (el?: HTMLElement): void => {
            if (ocdkIsSurface(el)) {
              this.surface = el as OcdkSurface;
              this.syncReferences();
            }
          },
        }}>
          <slot {...{
            class: 'osds-interactive-surface__surface__slot',
            ref: (el?: Element): void => {
              if (el instanceof HTMLSlotElement) {
                this.slotElement = el;
                this.syncReferences();
              }
            },
          }}></slot>
        </ocdk-surface>
      </Host>
    );
  }
}
