import { Component, Element, Host, h } from '@stencil/core';
import {
  OdsCollapsible,
  OdsCollapsibleController,
  OdsCollapsibleEvents,
  OdsCollapsibleMethods,
  // odsCollapsibleDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - Collapsible content
 */
@Component({
  tag: 'osds-collapsible',
  styleUrl: 'osds-collapsible.scss',
  shadow: true
})
export class OsdsCollapsible implements OdsCollapsible<OdsStencilMethods<OdsCollapsibleMethods>, OdsStencilEvents<OdsCollapsibleEvents>> {
  controller: OdsCollapsibleController = new OdsCollapsibleController(this);
  @Element() el!: HTMLElement;

  // Component properties as @Prop
  // ex: @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsCollapsibleDefaultAttributes.color;

  /**
   * @see OdsCollapsibleBehavior.beforeRender
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
