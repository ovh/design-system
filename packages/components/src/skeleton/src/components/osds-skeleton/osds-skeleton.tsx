import type { ODS_SKELETON_SIZE } from './constants/skeleton-size';
import type { OdsSkeletonAttribute } from './interfaces/attributes';
import { Component, Host, Prop, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

@Component({
  shadow: true,
  styleUrl: 'osds-skeleton.scss',
  tag: 'osds-skeleton',
})
export class OsdsSkeleton implements OdsSkeletonAttribute {
  @Prop({ reflect: true }) public inline?: boolean = DEFAULT_ATTRIBUTE.inline;
  @Prop({ reflect: true }) public randomized?: boolean = DEFAULT_ATTRIBUTE.randomized;
  @Prop({ reflect: true }) public size?: ODS_SKELETON_SIZE = DEFAULT_ATTRIBUTE.size;

  private getRandomValue(): number {
    // between 30 and 100
    return Math.floor(Math.random() * (100 - 30)) + 30;
  }

  render(): JSX.Element {
    const { inline, randomized } = this;
    let width = inline ? '' : '100%';

    if (randomized) {
      width = `${this.getRandomValue()}%`;
    }

    return (
      <Host style={{ width }}>
        <div class="loader"></div>
      </Host>
    );
  }
}
