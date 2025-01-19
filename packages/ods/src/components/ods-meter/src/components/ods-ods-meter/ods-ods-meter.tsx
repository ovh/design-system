import type { FunctionalComponent } from '@stencil/core';
import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'ods-ods-meter.scss',
  tag: 'ods-ods-meter',
})
export class OdsOdsMeter {
  @Prop({ reflect: true }) public dummy?: string;

  render(): FunctionalComponent {
    return (
      <Host
        class='ods-ods-meter'
        role="article">
        <p>
          ODS Template Component: { this.dummy }
        </p>
      </Host>
    );
  }
}
