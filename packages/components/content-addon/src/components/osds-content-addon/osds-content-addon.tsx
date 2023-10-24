import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'osds-content-addon',
  styleUrl: 'osds-content-addon.scss',
  shadow: true,
})
export class OsdsContentAddon {
  @Element() el!: HTMLElement;

  render() {
    return (
      <Host>
        <span class="osds-content-addon">
          <slot name={'top'}></slot>

          <span class={'inset-grid'}>
            <slot name={'start'}></slot>
            <slot name={'main'}></slot>
            <slot name={'end'}></slot>
          </span>

          <slot name={'bottom'}></slot>
        </span>
      </Host>
    );
  }
}
