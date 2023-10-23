import {Component, Host, h} from '@stencil/core';
import {OcdkSurfaceCorner} from '@ovhcloud/ods-cdk';

/** ... */

@Component({
  tag: 'my-overlay',
  styleUrl: 'my-overlay.scss',
  shadow: true,
})
export class MyOverlay {
  /** ... */
  render() {
    return (
      <Host>
        {/* ... */}
        <ocdk-surface corners={[OcdkSurfaceCorner.BOTTOM_START, OcdkSurfaceCorner.TOP_START]}>
        </ocdk-surface>
      </Host>
    );
  }
}
