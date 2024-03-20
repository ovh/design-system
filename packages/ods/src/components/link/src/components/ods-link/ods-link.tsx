import { Component, type FunctionalComponent, Host, Prop, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'ods-link.scss',
  tag: 'ods-link',
})
export class OdsLink {
  @Prop({ reflect: true }) public dummy?: string;

  render(): FunctionalComponent {
    return (
      <Host
        class='ods-link'
        role="article">
        <p>
          ODS Template Component: { this.dummy }
        </p>
      </Host>
    );
  }
}
