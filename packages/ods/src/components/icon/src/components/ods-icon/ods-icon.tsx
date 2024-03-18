import type { OdsIconName } from '../../constants/icon-name';
import type { FunctionalComponent } from '@stencil/core';
import { Component, Host, Prop, h } from '@stencil/core';
import icons from '../../assets/icons.data.json'; // TODO replace with dedicated icon font when file server get available

@Component({
  shadow: true,
  styleUrl: 'ods-icon.scss',
  tag: 'ods-icon',
})
export class OdsIcon {
  @Prop({ reflect: true }) alt?: string = '';
  @Prop({ reflect: true }) name!: OdsIconName;

  render(): FunctionalComponent {
    const base64Icon = icons[this.name];

    return (
      <Host
        class="ods-icon"
        alt={ this.alt }
        style={
          (base64Icon ? { '--ods-icon-mask-image': `url("${base64Icon}")` } : { })
        }
      ></Host>
    );
  }
}
