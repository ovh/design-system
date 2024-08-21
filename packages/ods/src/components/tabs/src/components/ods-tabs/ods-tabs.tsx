import { Component, Event, type EventEmitter, type FunctionalComponent, Host, Listen, h } from '@stencil/core';
import { type OdsTabSelectedEventDetail } from '../../interfaces/events';

@Component({
  shadow: true,
  styleUrl: 'ods-tabs.scss',
  tag: 'ods-tabs',
})
export class OdsTabs {
  @Event() odsTabsSelected!: EventEmitter<OdsTabSelectedEventDetail>;

  @Listen('odsTabSelected')
  onOdsTabSelected(event: OdsTabSelectedEventDetail): void {
    this.odsTabsSelected.emit(event);
  }

  render(): FunctionalComponent {
    return (
      <Host
        class="ods-tabs"
        role="tablist">
        <div class="ods-tabs__wrapper">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
