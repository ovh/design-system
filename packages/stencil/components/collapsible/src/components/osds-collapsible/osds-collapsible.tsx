import { Component, Element, Host, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import {
  OdsCollapsible,
  OdsCollapsibleController,
  odsCollapsibleDefaultAttributes,
  OdsCollapsibleEvents,
  OdsCollapsibleMethods,
  // odsCollapsibleDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - Collapsible content
 */
@Component({
  tag: 'osds-collapsible',
  styleUrl: 'osds-collapsible.scss',
  shadow: true
})
export class OsdsCollapsible implements OdsCollapsible<OdsStencilMethods<OdsCollapsibleMethods>, OdsStencilEvents<OdsCollapsibleEvents>> {
  controller: OdsCollapsibleController = new OdsCollapsibleController(this);
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public opened?: boolean = odsCollapsibleDefaultAttributes.opened;

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