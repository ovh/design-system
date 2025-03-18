import { Component, type FunctionalComponent, Host, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'ods-skeleton.scss',
  tag: 'ods-skeleton',
})
export class OdsSkeleton {
  render(): FunctionalComponent {
    return (
      <Host class="ods-skeleton">
        <div class="ods-skeleton__loader" part="skeleton">
        </div>
      </Host>
    );
  }
}
