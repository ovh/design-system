import { Component, type FunctionalComponent, Host, Prop, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'ods-combobox-group.scss',
  tag: 'ods-combobox-group',
})
export class OdsComboboxGroup {
  /** @internal */
  @Prop({ reflect: false }) public isVisible: boolean = false;

  render(): FunctionalComponent {
    return (
      <Host class="ods-combobox-group">
        <div
          class={{
            'ods-combobox-group__title': true,
            'ods-combobox-group__title--hidden': !this.isVisible,
          }}>
          <slot name="title"></slot>
        </div>

        <slot></slot>
      </Host>
    );
  }
}
