import { Component, type FunctionalComponent, Host, Prop, h } from '@stencil/core';

@Component({
  shadow: true,
  tag: 'ods-medium',
})
export class OdsMedium {
  @Prop({ reflect: true }) public alt: string = '';
  @Prop({ reflect: true }) public height?: number;
  @Prop({ reflect: true }) public src!: string;
  @Prop({ reflect: true }) public width?: number;

  render(): FunctionalComponent {
    return (
      <Host>
        <img
          alt={ this.alt }
          height={ this.height }
          src={ this.src }
          width={ this.width }
        />
      </Host>
    );
  }
}
