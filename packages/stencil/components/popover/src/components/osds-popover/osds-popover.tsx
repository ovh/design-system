import { Component, Element, Host, h } from '@stencil/core';
import {
  OdsPopover,
  OdsPopoverController,
  OdsPopoverEvents,
  OdsPopoverMethods,
  // odsPopoverDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - Popover content
 */
@Component({
  tag: 'osds-popover',
  styleUrl: 'osds-popover.scss',
  shadow: true
})
export class OsdsPopover implements OdsPopover<OdsStencilMethods<OdsPopoverMethods>, OdsStencilEvents<OdsPopoverEvents>> {
  controller: OdsPopoverController = new OdsPopoverController(this);
  @Element() el!: HTMLElement;

  // Component properties as @Prop
  // ex: @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsPopoverDefaultAttributes.color;

  /**
   * @see OdsPopoverBehavior.beforeRender
   */
  beforeRender(): void {

  }

  componentWillRender(): void {

  }

  render() {

    return (
      <Host>

        {/* UI template */}

      </Host>
    );
  }
}
