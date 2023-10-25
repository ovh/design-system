import { OcdkLogger } from '@ovhcloud/ods-cdk';
import { Component, Element, Event, EventEmitter, Host, Listen, Prop, h } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'ocdk-surface-select-item-example',
  styleUrl: 'ocdk-surface-select-item-example.scss',
  shadow: true,
})
export class OcdkSurfaceSelectItemExample {
  static totalIds = 0;
  @Element() el!: HTMLStencilElement;
  @Event() ocdkSurfaceSelectItemExampleClick!: EventEmitter<{ item: OcdkSurfaceSelectItemExample, value: string }>;
  @Prop({ reflect: true }) value = '';
  private uniqueId = OcdkSurfaceSelectItemExample.totalIds++;
  private logger = new OcdkLogger(`OcdkSurfaceSelectItemExample #${this.uniqueId}`);

  /**
   * emit an event on item click
   */
  @Listen('click')
  onCLick() {
    this.logger.log('onCLick', 'send value');
    this.ocdkSurfaceSelectItemExampleClick.emit({ item: this, value: this.value });
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
