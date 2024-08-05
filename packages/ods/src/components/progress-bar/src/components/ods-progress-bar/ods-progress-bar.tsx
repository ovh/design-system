import { Component, type FunctionalComponent, Host, Prop, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'ods-progress-bar.scss',
  tag: 'ods-progress-bar',
})
export class OdsProgressBar {
  @Prop({ reflect: true }) public max: number = 100;
  @Prop({ reflect: true }) public value: number = 0;

  render(): FunctionalComponent {
    return (
      <Host class="ods-progress-bar">
        <progress
          class="ods-progress-bar__progress"
          max={ this.max }
          part="progress"
          value={ this.value } />
      </Host>
    );
  }
}
