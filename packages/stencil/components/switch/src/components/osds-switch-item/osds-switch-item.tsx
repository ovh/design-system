import type { OsdsRadio } from '@ovhcloud/ods-component-radio';
import { Component, Element, Host, h, Prop, State, Method } from '@stencil/core';
import {
  OdsSwitchItem,
  OdsSwitchItemController,
  OdsSwitchItemEvents,
  OdsSwitchItemMethods,
  odsSwitchItemDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

@Component({
  tag: 'osds-switch-item',
  styleUrl: 'osds-switch-item.scss',
  shadow: true
})
export class OsdsSwitchItem implements OdsSwitchItem<OdsStencilMethods<OdsSwitchItemMethods>, OdsStencilEvents<OdsSwitchItemEvents>> {
  controller: OdsSwitchItemController = new OdsSwitchItemController(this);

  private radio?: OsdsRadio;

  @Element() el!: HTMLElement;

  @State() id = odsSwitchItemDefaultAttributes.id;
  @State() tabindex = 0;

  @Prop({ reflect: true }) public value: HTMLInputElement['value'] = odsSwitchItemDefaultAttributes.value;

  @Prop({ reflect: true }) public checked: boolean = odsSwitchItemDefaultAttributes.checked;

  @Method()
  async setFocus(): Promise<void> {
    this.radio?.setFocus();
  }

  componentWillLoad() {
    this.radio?.setButtonTabindex(this.tabindex);
  }

  render() {
    const { checked, id, value } = this;

    return (
      <Host>
        <osds-radio {...{
          checked,
          id,
          value,
          ref: (el: unknown) => this.radio = el as OsdsRadio,
        }}>
          <slot></slot>
        </osds-radio>
      </Host>
    );
  }
}
 