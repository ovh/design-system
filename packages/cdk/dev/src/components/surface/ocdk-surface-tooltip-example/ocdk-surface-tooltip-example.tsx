import { OcdkSurfaceTooltipPosition } from './ocdk-surface-tooltip-position';
import { Component, Element, Host, Listen, Prop, h } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OcdkLogger, OcdkSurface, OcdkSurfaceCorner, ocdkDefineCustomElements, ocdkIsSurface } from '@ovhcloud/ods-cdk';

// define custom elements from CDK
ocdkDefineCustomElements();

@Component({
  tag: 'ocdk-surface-tooltip-example',
  styleUrl: 'ocdk-surface-tooltip-example.scss',
  shadow: true,
})
export class OcdkSurfaceTooltipExample {
  static totalIds = 0;
  @Element() el!: HTMLStencilElement;
  @Prop({ reflect: true }) value = '';
  @Prop({ reflect: true }) position: OcdkSurfaceTooltipPosition = OcdkSurfaceTooltipPosition.BOTTOM;
  private anchor!: HTMLElement;
  /** surface reference. initialized when cdk is */
  private surface?: OcdkSurface = undefined;
  private uniqueId = OcdkSurfaceTooltipExample.totalIds++;
  private logger = new OcdkLogger(`OcdkSurfaceTooltipExample #${this.uniqueId}`);
  private leaveDebounce = 0;

  @Listen('position')
  onPositionChange() {
    this.syncPosition();
  }

  render() {
    return (
      <Host onMouseEnter={this.debounce(this.handleMouseEnter, 500)}
        onMouseLeave={this.debounce(this.handleMouseLeave)}
        ref={(el: HTMLElement | null) => {
          this.anchor = el as HTMLElement;
          this.syncReferences();
        }}>
        <slot></slot>
        <ocdk-surface animation={'scaling'} ref={(el: HTMLElement) => {
          if (ocdkIsSurface(el)) {
            this.surface = el as OcdkSurface;
            this.syncReferences();
          }
        }}>
          {this.value}
        </ocdk-surface>
      </Host>
    );
  }

  private handleMouseEnter() {
    this.logger.log('hover on trigger');
    clearTimeout(this.leaveDebounce);
    this.leaveDebounce = 0;
    if (!this.surface) {
      return;
    }
    this.surface.opened = true;
  }

  debounce(func: (...args: any[]) => void, timeout = 300) {
    return (...args: any[]) => {
      clearTimeout(this.leaveDebounce);
      this.leaveDebounce = 0;
      this.leaveDebounce = setTimeout(() => {
        func.apply(this, args);
      }, timeout) as unknown as number;
    };
  }

  private handleMouseLeave() {
    this.logger.log('hover out from trigger');
    if (!this.surface) {
      return;
    }
    this.surface.opened = false;
  }

  /**
   * when ready, set the anchor of the surface as the trigger element
   */
  private syncReferences() {
    if (this.surface && this.anchor) {
      this.surface.setAnchorElement(this.anchor);
    }
    this.syncPosition();
  }

  private syncPosition() {
    this.logger.log('[syncPosition]', { position: this.position.toUpperCase() });
    if (!this.surface) {
      return;
    }

    switch (this.position.toUpperCase()) {
    case OcdkSurfaceTooltipPosition.TOP:
      this.surface.setAnchorCorner(OcdkSurfaceCorner.TOP_LEFT);
      this.surface.setOriginCorner(OcdkSurfaceCorner.BOTTOM_LEFT);
      break;
    case OcdkSurfaceTooltipPosition.BOTTOM:
      this.surface.setCornerPoints({ anchor: OcdkSurfaceCorner.BOTTOM_LEFT, origin: OcdkSurfaceCorner.TOP_LEFT });
      break;
    default:
      break;
    case OcdkSurfaceTooltipPosition.LEFT:
      this.surface.setCornerPoints({ anchor: OcdkSurfaceCorner.TOP_LEFT, origin: OcdkSurfaceCorner.TOP_RIGHT });
      break;
    case OcdkSurfaceTooltipPosition.RIGHT:
      this.surface.setCornerPoints({ anchor: OcdkSurfaceCorner.TOP_RIGHT, origin: OcdkSurfaceCorner.TOP_LEFT });
      break;
    case OcdkSurfaceTooltipPosition.BOTTOM_CENTER:
      this.surface.setCornerPoints({ anchor: OcdkSurfaceCorner.BOTTOM_CENTER, origin: OcdkSurfaceCorner.TOP_CENTER });
      break;
    case OcdkSurfaceTooltipPosition.TOP_CENTER:
      this.surface.setCornerPoints({ anchor: OcdkSurfaceCorner.TOP_CENTER, origin: OcdkSurfaceCorner.BOTTOM_CENTER });
      break;
    case OcdkSurfaceTooltipPosition.CENTER_LEFT:
      this.surface.setCornerPoints({ anchor: OcdkSurfaceCorner.CENTER_LEFT, origin: OcdkSurfaceCorner.CENTER_RIGHT });
      break;
    case OcdkSurfaceTooltipPosition.CENTER_RIGHT:
      this.surface.setCornerPoints({ anchor: OcdkSurfaceCorner.CENTER_RIGHT, origin: OcdkSurfaceCorner.CENTER_LEFT });
      break;
    }

  }
}
