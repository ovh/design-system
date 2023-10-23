import {Component, Element, Host, h} from '@stencil/core';
import {HTMLStencilElement} from '@stencil/core/internal';

@Component({
  tag: 'ocdk-dummy',
  shadow: true,
})
export class OcdkDummy {
  @Element() el!: HTMLStencilElement;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
