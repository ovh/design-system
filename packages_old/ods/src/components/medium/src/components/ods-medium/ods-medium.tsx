import { Component, type FunctionalComponent, Host, Prop, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'ods-medium.scss',
  tag: 'ods-medium',
})
export class OdsMedium {
  @Prop({ reflect: true }) public alt: string = '';
  @Prop({ reflect: true }) public height?: number;
  @Prop({ reflect: true }) public src!: string;
  @Prop({ reflect: true }) public width?: number;

  render(): FunctionalComponent {
    return (
      <Host class="ods-medium">
        <img
          alt={ this.alt }
          height={ this.height }
          part="image"
          src={ this.src }
          width={ this.width } />
      </Host>
    );
  }
}
