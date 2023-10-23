import {Component, Host, h} from '@stencil/core';

@Component({
  tag: 'osds-cart-section',
  styleUrl: 'osds-cart-section.scss',
  shadow: true,
})
export class OsdsCartSection {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
