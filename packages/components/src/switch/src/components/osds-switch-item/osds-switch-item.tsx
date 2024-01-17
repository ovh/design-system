import type { OdsSwitchItemAttribute } from './interfaces/attributes';
import type { OsdsRadio } from '../../../../radio/src';
import type { FunctionalComponent } from '@stencil/core';
import { Component, Element, Host, Method, Prop, State, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

@Component({
  shadow: true,
  styleUrl: 'osds-switch-item.scss',
  tag: 'osds-switch-item',
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

  componentWillLoad(): void {
    this.radio?.setButtonTabindex(this.tabindex);
  }

  render(): FunctionalComponent {
    const { checked, id, value } = this;

    return (
      <Host>
        <osds-radio {...{
          checked,
          id,
          ref: (el: unknown) => this.radio = el as OsdsRadio,
          value,
        }}>
          <slot></slot>
        </osds-radio>
      </Host>
    );
  }
}
