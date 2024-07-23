import { Component, Element, type FunctionalComponent, Host, Listen, h } from '@stencil/core';
import { expandItems, setupItems } from '../../controller/ods-breadcrumb';

@Component({
  shadow: true,
  styleUrl: 'ods-breadcrumb.scss',
  tag: 'ods-breadcrumb',
})
export class OdsBreadcrumb {
  @Element() el!: HTMLElement;

  @Listen('odsExpand')
  onOdsExpand(): void {
    expandItems(Array.from(this.el.children));
  }

  onSlotChange(): void {
    setupItems(Array.from(this.el.children));
  }

  render(): FunctionalComponent {
    return (
      <Host
        class="ods-breadcrumb"
        role="navigation">
        <slot onSlotchange={ () => this.onSlotChange() }></slot>
      </Host>
    );
  }
}
