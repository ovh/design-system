import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'osds-cart-footer',
  styleUrl: 'osds-cart-footer.scss',
  shadow: true,
})
export class OsdsCartFooter {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
