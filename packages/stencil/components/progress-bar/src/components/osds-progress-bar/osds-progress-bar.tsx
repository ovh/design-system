import { Component, Element, Host, h, Prop } from '@stencil/core';
import {
  OdsProgressBar,
  OdsProgressBarController, odsProgressBarDefaultAttributes,
  OdsProgressBarEvents,
  OdsProgressBarMethods,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot end - display content aside the progress bar
 */
@Component({
  tag: 'osds-progress-bar',
  styleUrl: 'osds-progress-bar.scss',
  shadow: true
})
export class OsdsProgressBar implements OdsProgressBar<OdsStencilMethods<OdsProgressBarMethods>, OdsStencilEvents<OdsProgressBarEvents>> {
  controller: OdsProgressBarController = new OdsProgressBarController(this);
  @Element() el!: HTMLElement;

  /** @see OdsProgressBarAttributes.max */
  @Prop({ reflect: true }) public max?: OdsProgressBar['max'] = odsProgressBarDefaultAttributes.max;

  /** @see OdsProgressBarAttributes.value */
  @Prop({ reflect: true }) public value?: OdsProgressBar['value'] = odsProgressBarDefaultAttributes.value;

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
