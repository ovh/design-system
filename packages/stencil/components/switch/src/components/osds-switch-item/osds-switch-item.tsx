import { Component, Element, Host, h, Prop, State, Event, EventEmitter, Method } from '@stencil/core';
import {
  OdsSwitchItem,
  OdsSwitchItemController,
  OdsSwitchItemEvents,
  OdsSwitchItemMethods,
  odsSwitchItemDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - Switch content
 */
@Component({
  tag: 'osds-switch-item',
  styleUrl: 'osds-switch-item.scss',
  shadow: true
})
export class OsdsSwitchItem implements OdsSwitchItem<OdsStencilMethods<OdsSwitchItemMethods>, OdsStencilEvents<OdsSwitchItemEvents>> {
  controller: OdsSwitchItemController = new OdsSwitchItemController(this);

  @Element() el!: HTMLElement;

  @State() id = odsSwitchItemDefaultAttributes.id;
  @State() tabindex = 0;

  @Prop({ reflect: true }) public value: HTMLInputElement['value'] = odsSwitchItemDefaultAttributes.value;

  @Prop({ reflect: true }) public checked: boolean = odsSwitchItemDefaultAttributes.checked;

  /** @see odsSwitchItemClick */
  @Event() odsSwitchItemClick!: EventEmitter<{ value: string }>;

  handlerOnKeyDown(event: KeyboardEvent): void {
    const isEnter = event.code.includes('Enter');
    const isSpace = event.code === 'Space';
    if (isEnter || isSpace) {
      this.odsSwitchItemClickEmit();
    }
  }

  odsSwitchItemClickEmit(): void {
    this.odsSwitchItemClick.emit({ value: this.value });
  }

  @Method()
  async setFocus(): Promise<void> {
    this.el.focus();
  }

  render() {
    const { checked, id, value, tabindex } = this;

    return (
      <Host {...{
          tabindex,
          onKeyDown: (event: KeyboardEvent) => this.handlerOnKeyDown(event)
        }}>
        <osds-radio {...{
          checked,
          id,
          value,
          tabindex: "-1",
        }}>
          <slot></slot>
        </osds-radio>
      </Host>
    );
  }
}
 