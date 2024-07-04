import type { OdsIconName } from '../../constants/icon-name';
import type { FunctionalComponent } from '@stencil/core';
import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'ods-icon.scss',
  tag: 'ods-icon',
})
export class OdsIcon {
  @Prop({ reflect: true }) public alt?: string = '';
  /** @docType OdsIconName */
  @Prop({ reflect: true }) public name!: OdsIconName;

  render(): FunctionalComponent {
    return (
      <Host
        class={ `ods-icon ods-icon__${this.name}` }
        alt={ this.alt }>
      </Host>
    );
  }
}
