import { Component, Element, Host, h, Prop } from '@stencil/core';
import { OdsBreadcrumbItem, OdsBreadcrumbItemController, OdsBreadcrumbItemMethods, OdsBreadcrumbItemEvents, odsBreadcrumbItemDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

@Component({
  tag: 'osds-breadcrumb-item',
  styleUrl: 'osds-breadcrumb-item.scss',
  shadow: true,
})
export class OsdsBreadcrumbItem implements OdsBreadcrumbItem<OdsStencilMethods<OdsBreadcrumbItemMethods>, OdsStencilEvents<OdsBreadcrumbItemEvents>> {
  controller: OdsBreadcrumbItemController = new OdsBreadcrumbItemController(this);
  @Element() el!: HTMLElement;

  /** Whether the breadcrumb item is active */
  @Prop({ reflect: true, mutable: true }) active = odsBreadcrumbItemDefaultAttributes.active;

  render() {
    return (
      <Host>
        <li>
          <span>
            <slot name="start"></slot>
            <a aria-current={this.active ? 'page' : undefined}>
              <slot></slot>
            </a>
            <slot name="end"></slot>
          </span>
        </li>
      </Host>
    );
  }
}
