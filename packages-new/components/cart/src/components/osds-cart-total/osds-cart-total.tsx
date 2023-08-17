import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'osds-cart-total',
  styleUrl: 'osds-cart-total.scss',
  shadow: true,
})
export class OsdsCartTotal {
  render() {
    return (
      <Host>
        <slot name={'total'}></slot>
        <slot name={'info'}></slot>
        <slot name={'price'}></slot>
        <slot name={'extra'}></slot>
      </Host>
    );
  }
}
