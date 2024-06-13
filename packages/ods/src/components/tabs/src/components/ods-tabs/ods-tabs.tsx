import { Component, Event, type EventEmitter, type FunctionalComponent, Host, Listen, h } from '@stencil/core';
import { type OdsTabSelectedDetail } from '../../interfaces/events';

@Component({
  shadow: true,
  styleUrl: 'ods-tabs.scss',
  tag: 'ods-tabs',
})
export class OdsTabs {
  @Event() odsTabsSelected!: EventEmitter<OdsTabSelectedDetail>;

  @Listen('odsTabSelected')
  onOdsTabSelected(event: OdsTabSelectedDetail): void {
    this.odsTabsSelected.emit(event);
  }

  render(): FunctionalComponent {
    return (
      <Host
        class="ods-tabs"
        role="tablist">
        <slot></slot>
      </Host>
    );
  }
}
