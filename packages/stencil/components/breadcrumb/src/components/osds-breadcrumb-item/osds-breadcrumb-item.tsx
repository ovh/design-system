import { Component, Element, Host, h } from '@stencil/core';
import { OdsBreadcrumbItem, OdsBreadcrumbItemController, OdsBreadcrumbItemMethods, OdsBreadcrumbItemEvents } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

@Component({
  tag: 'osds-breadcrumb-item',
  styleUrl: 'osds-breadcrumb-item.scss',
  shadow: true,
})
export class OsdsBreadcrumbItem implements OdsBreadcrumbItem<OdsStencilMethods<OdsBreadcrumbItemMethods>, OdsStencilEvents<OdsBreadcrumbItemEvents>> {
  controller: OdsBreadcrumbItemController = new OdsBreadcrumbItemController(this);
  @Element() el!: HTMLElement;

  render() {
    return (
      <Host>
        <li>
          <div>
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
          </div>
        </li>
      </Host>
    );
  }
}
