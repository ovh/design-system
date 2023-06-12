import { Component, Element, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';
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

  /**
   * The tabindex of the input.
   * @internal
   */
  @State() id = odsSwitchItemDefaultAttributes.id;

  @Prop({ reflect: true }) public value: HTMLInputElement['value'] = odsSwitchItemDefaultAttributes.value;

  @Prop({ reflect: true }) public checked: boolean = odsSwitchItemDefaultAttributes.checked;

  /** @see odsSwitchItemClick */
  @Event() odsSwitchItemClick!: EventEmitter<{ value: string }>;

  handlerOnClick(): void {
    this.odsSwitchItemClick.emit({ value: this.value});
  }

  render() {
    const { checked, id, value } = this;

    return (
      <Host onClick={() => this.handlerOnClick()}>
        <label>
          <input 
            type="radio"
            name="switch"
          {...{
            checked,
            id,
            value,
          }} />
          <slot></slot>
        </label>
      </Host>
    );
  }
}
