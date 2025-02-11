import { Component, Element, type FunctionalComponent, Host, Prop, h } from '@stencil/core';
import { getRandomHTMLId } from '../../../../../utils/dom';

@Component({
  shadow: true,
  styleUrl: 'ods-combobox-group.scss',
  tag: 'ods-combobox-group',
})
export class OdsComboboxGroup {
  private internalId = getRandomHTMLId();

  @Element() el!: HTMLElement;

  /** @internal */
  @Prop({ reflect: false }) public isVisible: boolean = true;

  render(): FunctionalComponent {
    return (
      <Host
        class="ods-combobox-group"
        id={ this.el.id || this.internalId }>
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
