import { Component, type FunctionalComponent, Host, Prop, h } from '@stencil/core';
import { type OdsIconName } from '../../constants/icon-name';

@Component({
  shadow: true,
  styleUrl: 'ods-icon.scss',
  tag: 'ods-icon',
})
export class OdsIcon {
  @Prop({ reflect: true }) public name!: OdsIconName;

  render(): FunctionalComponent {
    return (
      <Host class={ `ods-icon ods-icon__${this.name}` }>
      </Host>
    );
  }
}
