import {Component, Element, Host, h} from '@stencil/core';

/**
 * @slot (tooltip-content) - The Tooltip content
 */
@Component({
  tag: 'osds-tooltip-content',
  styleUrl: 'osds-tooltip-content.scss',
  shadow: true,
})
export class OsdsTooltipContent {
  @Element() el!: HTMLElement;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
