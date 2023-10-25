import { OcdkSurface, ocdkDefineCustomElements, ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { Component, Host, h } from '@stencil/core';

// define custom elements from CDK
ocdkDefineCustomElements();

@Component({
  tag: 'my-overlay',
  styleUrl: 'my-overlay.scss',
  shadow: true,
})
export class MyOverlay {
  /** anchor reference. can be considered as fulfilled by the stencil ref system */
  private anchor!: HTMLElement;
  /** surface reference. initialized when cdk is */
  private surface?: OcdkSurface = undefined;

  /** ... */

  render() {
    return (
      <Host>
        <div class="trigger"
          ref={(el?: HTMLElement) => {
            this.anchor = el as HTMLDivElement;
            this.syncReferences();
          }}>
          My select trigger
        </div>
        <ocdk-surface ref={(el: HTMLElement) => {
          if (ocdkIsSurface(el)) {
            this.surface = el as OcdkSurface;
            this.syncReferences();
          }
        }}>
          Content
        </ocdk-surface>
      </Host>
    );
  }

  /**
   * when ready, set the anchor of the surface as the trigger element
   */
  private syncReferences() {
    if (this.surface && this.anchor) {
      this.surface.setAnchorElement(this.anchor);
    }
  }
}
