import { Component, Element, Prop, h, Host } from '@stencil/core';
import { OdsBreadcrumbItem, OdsBreadcrumbItemController, odsBreadcrumbsDefaultAttributes, OdsBreadcrumbItemEvents, OdsBreadcrumbItemMethods } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { HTMLStencilElement } from '@stencil/core/internal';

/**
 * @slot start - Fixed start breadcrumb content
 * @slot (unnamed) - Breadcrumbs content
 * @slot end - Fixed end breadcrumb content
 */
@Component({
  tag: 'osds-breadcrumb-item',
  styleUrl: 'osds-breadcrumb-item.scss',
  shadow: true,
})
export class OsdsBreadcrumbs implements OdsBreadcrumbItem<OdsStencilMethods<OdsBreadcrumbItemMethods>, OdsStencilEvents<OdsBreadcrumbItemEvents>> {
  controller: OdsBreadcrumbItemController = new OdsBreadcrumbItemController(this);
  @Element() host!: HTMLStencilElement;

  /** @see OdsBreadcrumItemAttributes.href */
  @Prop({ reflect: true }) public href: string = odsBreadcrumbsDefaultAttributes.href;

  /**
   * @see OdsChipBehavior.beforeRender
   */
  beforeRender(): void {
    this.controller.validateAttributes();
  }

  componentWillRender(): void {
    this.beforeRender();
  }

  render() {
    return (
      <Host>
        <li>
          <slot></slot>
        </li>
      </Host>
    );
  }
}
