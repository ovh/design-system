import type { OdsSkeletonAttribute } from './interfaces/attributes';
import type { ODS_SKELETON_SIZE } from './constants/skeleton-size';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'osds-skeleton',
  styleUrl: 'osds-skeleton.scss',
  shadow: true,
})
export class OsdsSkeleton implements OdsSkeletonAttribute {
  /** @see OdsSkeletonAttributes.inline */
  @Prop({ reflect: true }) public inline?: boolean = DEFAULT_ATTRIBUTE.inline;
  /** @see OdsSkeletonAttributes.randomized */
  @Prop({ reflect: true }) public randomized?: boolean = DEFAULT_ATTRIBUTE.randomized;
  /** @see OdsSkeletonAttributes.size */
  @Prop({ reflect: true }) public size?: ODS_SKELETON_SIZE = DEFAULT_ATTRIBUTE.size;

  private getRandomValue() {
    // between 30 and 100
    return Math.floor(Math.random() * (100 - 30)) + 30;
  }

  render() {
    const { inline, randomized } = this;

    return (
      <Host {...{
        'style': {
          width: !inline ? '100%' : randomized ? `${this.getRandomValue()}%` : '',
        },
      }}>
        <div class="loader"></div>
      </Host>
    );
  }
}
