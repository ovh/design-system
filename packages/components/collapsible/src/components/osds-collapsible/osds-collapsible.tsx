import type { OdsCollapsibleAttribute } from './interfaces/attributes';
import type { OdsCollapsibleEvent } from './interfaces/events';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsCollapsibleController } from './core/controller';
import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';

/**
 * @slot (unnamed) - Collapsible content
 */
@Component({
  tag: 'osds-collapsible',
  styleUrl: 'osds-collapsible.scss',
  shadow: true,
})
export class OsdsCollapsible implements OdsCollapsibleAttribute, OdsCollapsibleEvent {
  controller: OdsCollapsibleController = new OdsCollapsibleController(this);
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public opened?: boolean = DEFAULT_ATTRIBUTE.opened;

  /** @see OdsCollapsibleEvents.odsCollapsibleToggle */
  @Event() odsCollapsibleToggle!: EventEmitter<boolean>;

  /**
   * on update of `opened` property by the user
   */
  @Watch('opened')
  onOpenedChanged(): void {
    this.controller.onToggle();
  }

  /**
   * @see OdsCollapsibleBehavior.emitToggle
   */
  emitToggle(opened: boolean): void {
    this.odsCollapsibleToggle.emit(opened);
  }

  render() {

    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
