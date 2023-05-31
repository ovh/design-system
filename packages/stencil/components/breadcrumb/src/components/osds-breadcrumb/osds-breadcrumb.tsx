import { Component, Element, Host, h } from '@stencil/core';
import {
  OdsBreadcrumb,
  OdsBreadcrumbController,
  OdsBreadcrumbEvents,
  OdsBreadcrumbMethods,
  // odsBreadcrumbDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - Breadcrumb content
 */
@Component({
  tag: 'osds-breadcrumb',
  styleUrl: 'osds-breadcrumb.scss',
  shadow: true
})
export class OsdsBreadcrumb implements OdsBreadcrumb<OdsStencilMethods<OdsBreadcrumbMethods>, OdsStencilEvents<OdsBreadcrumbEvents>> {
  controller: OdsBreadcrumbController = new OdsBreadcrumbController(this);
  @Element() el!: HTMLElement;

  // Component properties as @Prop
  // ex: @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsBreadcrumbDefaultAttributes.color;

  /**
   * @see OdsBreadcrumbBehavior.beforeRender
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
