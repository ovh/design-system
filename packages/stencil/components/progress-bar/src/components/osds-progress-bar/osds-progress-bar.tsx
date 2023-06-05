import { Component, Element, Host, h, Prop, Watch } from '@stencil/core';
import {
  OdsProgressBar,
  OdsProgressBarController, odsProgressBarDefaultAttributes,
  OdsProgressBarEvents,
  OdsProgressBarMethods,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - ProgressBar content
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

  /** @see OdsProgressBarAttributes.min */
  @Prop({ reflect: true }) public min?: OdsProgressBar['min'] = odsProgressBarDefaultAttributes.min;

  /** @see OdsProgressBarAttributes.progress */
  @Prop({ reflect: true }) public progress?: OdsProgressBar['progress'] = odsProgressBarDefaultAttributes.progress;

  /**
   * @see OdsProgressBarBehavior.beforeRender
   */
  componentWillLoad(): void {
    this.controller.validateAttributes();
    this.defineProgressCssValue(this.progress);
  }

  @Watch('progress')
  watchProgressHandler(newValue: OdsProgressBar['progress']) {
    this.defineProgressCssValue(newValue);
  }

  defineProgressCssValue(progress: OdsProgressBar['progress']): void {
    this.controller.defineProgressCssValue(progress);
  }

  render() {
    return (
      <Host>
        <div class="progress-bar__wrapper">
            <div class="progress-bar__progress"></div>
        </div>
      </Host>
    );
  }
}
