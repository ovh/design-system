import { Component, Element, Host, h } from '@stencil/core';
import {
  OdsPopoverContent,
  OdsPopoverContentController,
  OdsPopoverContentEvents,
  OdsPopoverContentMethods,
  // odsPopoverDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - Popover content
 */
@Component({
  tag: 'osds-popover-content',
  styleUrl: 'osds-popover-content.scss',
  shadow: true
})
export class OsdsPopoverContent implements OdsPopoverContent<OdsStencilMethods<OdsPopoverContentMethods>, OdsStencilEvents<OdsPopoverContentEvents>> {
  controller: OdsPopoverContentController = new OdsPopoverContentController(this);
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
