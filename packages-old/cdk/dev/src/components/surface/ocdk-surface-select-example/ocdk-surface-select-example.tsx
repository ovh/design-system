import {
  OcdkLogger,
  OcdkSurface,
  OcdkSurfaceCorner,
  ocdkAssertEventTargetIsNode,
  ocdkDefineCustomElements,
  ocdkIsSurface,
} from '@ovhcloud/ods-cdk';
import { Component, Element, Host, Listen, Prop, Watch, h } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

import { OcdkSurfaceSelectItemExample } from './ocdk-surface-select-item-example';
import { OcdkSurfaceSelectPosition } from './ocdk-surface-select-position';

// define custom elements from CDK
ocdkDefineCustomElements();

@Component({
  tag: 'ocdk-surface-select-example',
  styleUrl: 'ocdk-surface-select-example.scss',
  shadow: true,
})
export class OcdkSurfaceSelectExample {
  static totalIds = 0;
  @Element() el!: HTMLStencilElement;
  @Prop({ reflect: true }) value = '';
  @Prop({ reflect: true }) position: OcdkSurfaceSelectPosition = OcdkSurfaceSelectPosition.BOTTOM;
  @Prop({ reflect: true }) opened = false;
  @Prop({ reflect: true }) animation: null | 'none' = null;
  @Prop({ reflect: false }) debug = false;
  /** anchor reference. can be considered as fulfilled by the stencil ref system */
  private anchor!: HTMLElement;
  /** surface reference. initialized when cdk is */
  private surface?: OcdkSurface = undefined;
  private uniqueId = OcdkSurfaceSelectExample.totalIds++;
  private logger = new OcdkLogger(`OcdkSurfaceSelectExample #${this.uniqueId}`);
  /** is the select was touched by the user */
  private dirty = false;

  /**
   * receive a new selected value and set it as the select value
   * @param event - selected item and its value
   */
  @Listen('ocdkSurfaceSelectItemExampleClick')
  onItemSelection(event: CustomEvent<{ item: OcdkSurfaceSelectItemExample, value: string }>) {
    const details = event.detail;
    this.logger.log('[onItemSelection]', 'one item selected', { details });
    this.value = details.value;
    this.surface?.close();
  }

  @Listen('position')
  onPositionChange() {
    this.syncPosition();
  }

  // Hide overlay when we click anywhere else in the window.
  @Listen('click', { target: 'window' })
  checkForClickOutside(ev: PointerEvent) {
    ocdkAssertEventTargetIsNode(ev.target);
    if (!this.dirty || this.el.contains(ev.target)) { // click on component, do nothing
      return;
    }
    this.logger.log('[checkForClickOutside]', ev);
    this.surface?.close();
  }


  componentDidLoad(): void {
    if (this.surface) {
      this.surface.opened = this.opened;
    }
  }

  @Watch('opened')
  openedChanged(opened: boolean) {
    if (this.surface) {
      this.surface.opened = opened;
    }
  }

  render() {
    const debugHTML = this.debug
      ? <div style={{ fontSize: '0.75rem', color: '#bbbbbb', position: 'absolute', left: '10px' }}>debug: #{this.uniqueId} - value: "{this.value}"</div> : '';
    return (
      <Host>
        <div
          class="trigger"
          onClick={this.handleTriggerClick.bind(this)}
          ref={(el?: HTMLElement) => {
            this.anchor = el as HTMLDivElement;
            this.syncReferences();
          }}>
          {debugHTML}
          <slot name={'trigger'}></slot>
        </div>
        <ocdk-surface
          animation={this.animation ?? 'slipping'}
          animated={this.animation !== 'none'}
          corners={[OcdkSurfaceCorner.BOTTOM_START, OcdkSurfaceCorner.TOP_START]}
          ref={(el: HTMLElement) => {
            if (ocdkIsSurface(el)) {
              this.surface = el as OcdkSurface;
              this.syncReferences();
            }
          }}>
          <slot></slot>
        </ocdk-surface>
      </Host>
    );
  }


  /**
   * toggle the surface opened when we click on the trigger element
   */
  private handleTriggerClick() {
    this.logger.log('click on trigger');
    this.dirty = true;
    if (!this.surface) {
      return;
    }
    this.surface.opened = !this.surface.opened;
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
    // two methods exist to set corners
    case OcdkSurfaceSelectPosition.TOP:
      this.surface.setAnchorCorner(OcdkSurfaceCorner.TOP_LEFT);
      this.surface.setOriginCorner(OcdkSurfaceCorner.BOTTOM_LEFT);
      break;
    case OcdkSurfaceSelectPosition.BOTTOM:
      this.surface.setCornerPoints({ anchor: OcdkSurfaceCorner.BOTTOM_LEFT, origin: OcdkSurfaceCorner.TOP_LEFT });
      break;
    default:
      break;
    case OcdkSurfaceSelectPosition.LEFT:
      this.surface.setCornerPoints({ anchor: OcdkSurfaceCorner.TOP_LEFT, origin: OcdkSurfaceCorner.TOP_RIGHT });
      break;
    case OcdkSurfaceSelectPosition.RIGHT:
      this.surface.setCornerPoints({ anchor: OcdkSurfaceCorner.TOP_RIGHT, origin: OcdkSurfaceCorner.TOP_LEFT });
      break;
    }

  }
}
