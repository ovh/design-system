import type { FunctionalComponent } from '@stencil/core';
import { Component, Host, Prop, h } from '@stencil/core';
import { ODS_CARD_COLOR, type OdsCardColor } from '../../constants/card-color';

@Component({
  shadow: true,
  styleUrl: 'ods-card.scss',
  tag: 'ods-card',
})
export class OdsCard {
  @Prop({ reflect: true }) public color: OdsCardColor = ODS_CARD_COLOR.primary;

  render(): FunctionalComponent {
    return (
      <Host class={`ods-card ods-card--${this.color}`}>
        <slot></slot>
      </Host>
    );
  }
}
