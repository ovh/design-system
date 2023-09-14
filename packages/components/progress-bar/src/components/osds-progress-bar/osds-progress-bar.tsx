import type { OdsProgressBarAttribute } from './interfaces/attributes';
import { Component, Host, Prop, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsProgressBarController } from './core/controller';

/**
 * @slot end - display content aside the progress bar
 */
@Component({
  tag: 'osds-progress-bar',
  styleUrl: 'osds-progress-bar.scss',
  shadow: true
})
export class OsdsProgressBar implements OdsProgressBarAttribute {
  controller: OdsProgressBarController = new OdsProgressBarController(this);

  /** @see OdsProgressBarAttributes.max */
  @Prop({ reflect: true }) public max? = DEFAULT_ATTRIBUTE.max;

  /** @see OdsProgressBarAttributes.value */
  @Prop({ reflect: true }) public value? = DEFAULT_ATTRIBUTE.value;

  /**
   * @see OdsProgressBarBehavior.beforeRender
   */
  componentWillLoad(): void {
    this.controller.validateAttributes();
  }

  render() {
    return (
      <Host>
        <div class="progress-bar__wrapper">
          <progress class="progress-bar" value={this.value} max={this.max} />
          <slot name="end"/>
        </div>
      </Host>
    );
  }
}
