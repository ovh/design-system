import { Component, Host, h } from '@stencil/core';

/**
 *
 */
@Component({
  tag: 'osds-cart-item-option',
  styleUrl: 'osds-cart-item-option.scss',
  shadow: true,
})
export class OsdsCartItemOption {
  render() {
    return (
      <Host>
        <slot name={'subhead'}></slot>
        <slot name={'title'}></slot>
        <slot name={'price'}></slot>
        <slot name={'extra'}></slot>
      </Host>
    );
  }
}
