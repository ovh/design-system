import type { OsdsRadio } from '@ovhcloud/ods-component-radio';
import { Component, Element, Host, Method, Prop, State, h } from '@stencil/core';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import type { OdsSwitchItemAttribute } from './interfaces/attributes';

@Component({
  tag: 'osds-switch-item',
  styleUrl: 'osds-switch-item.scss',
  shadow: true,
})
export class OsdsSwitchItem implements OdsSwitchItemAttribute {
  private radio?: OsdsRadio;

  @Element() el!: HTMLElement;

  @State() id = DEFAULT_ATTRIBUTE.id;
  @State() tabindex = 0;

  @Prop({ reflect: true }) public value: HTMLInputElement['value'] = DEFAULT_ATTRIBUTE.value;

  @Prop({ reflect: true }) public checked: boolean = DEFAULT_ATTRIBUTE.checked;

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
