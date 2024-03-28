import type { FunctionalComponent } from '@stencil/core';
import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'ods-input.scss',
  tag: 'ods-input',
})
export class OdsInput {
  @Prop({ reflect: true }) public dummy?: string;

  render(): FunctionalComponent {
    return (
      <Host
        class='ods-input'
        role="article">
        <p>
          ODS Template Component: { this.dummy }
        </p>
      </Host>
    );
  }
}
