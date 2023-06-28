import { Component, Element, h, Host, Prop } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import {
  OdsSkeleton,
  OdsSkeletonController,
  odsSkeletonDefaultAttributes,
  OdsSkeletonEvents,
  OdsSkeletonMethods,
  OdsSkeletonSize,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

@Component({
  tag: 'osds-skeleton',
  styleUrl: 'osds-skeleton.scss',
  shadow: true
})
export class OsdsSkeleton implements OdsSkeleton<OdsStencilMethods<OdsSkeletonMethods>, OdsStencilEvents<OdsSkeletonEvents>> {
  /** @see OdsComponent.controller */
  controller: OdsSkeletonController = new OdsSkeletonController(this as OdsSkeleton);

  /** @see OdsSkeletonBehavior.hostElement */
  @Element() hostElement!: HTMLStencilElement;

  /** @see OdsSkeletonAttributes.inline */
  @Prop({ reflect: true }) public inline?: boolean = odsSkeletonDefaultAttributes.inline;
  /** @see OdsSkeletonAttributes.randomized */
  @Prop({ reflect: true }) public randomized?: boolean = odsSkeletonDefaultAttributes.randomized;
  /** @see OdsSkeletonAttributes.size */
  @Prop({ reflect: true }) public size?: OdsSkeletonSize = odsSkeletonDefaultAttributes.size;

  /**
   * @see OdsSkeletonBehavior.afterInit
   */
  afterInit() {
    this.controller.afterInit();
  }

  componentDidLoad() {
    (async () => {
      this.afterInit();
    })();
  }

  render() {
    const { inline, randomized } = this;

    return (
      <Host {...{
        'style': {
          width: !inline ? '100%' : randomized ? `${Math.floor(Math.random() * (100 - 30)) + 30}%` : '', // between 30-100%
        }
      }}>
        <div {...{ class: 'loader' }}></div>
      </Host>
    );
  }
}
