import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'osds-cart-footer-item',
  styleUrl: 'osds-cart-footer-item.scss',
  shadow: true,
})
export class OsdsCartFooterItem {
  render() {
    return (
      <Host>
        <div class={'cell-subhead-title'}>
          <slot name={'subhead'}></slot>
          <slot name={'title'}></slot>
        </div>
        <div class={'cell-price-extra'}>
          <slot name={'price'}></slot>
          <slot name={'extra'}></slot>
        </div>
      </Host>
    );
  }
}
