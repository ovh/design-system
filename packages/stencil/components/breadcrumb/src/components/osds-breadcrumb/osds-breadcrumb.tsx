import { Component, Element, Host, h, Listen, State } from '@stencil/core';
import {
  OdsBreadcrumb,
  OdsBreadcrumbController,
  OdsBreadcrumbEvents, OdsBreadcrumbItem,
  OdsBreadcrumbMethods,
  // odsBreadcrumbDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

const MAX_DISPLAYED_ITEMS = 4; // TODO move to core?

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

  @State() isCollapsed = true;

  componentWillLoad() {
    this.updateBreadcrumb();
  }

  /**
   * @see OdsBreadcrumbBehavior.onBreadcrumbItemCollapsedClick TODO
   */
  @Listen('odsBreadcrumbItemCollapsedClick')
  onBreadcrumbItemCollapsedClick(_event: CustomEvent<void>) {//TODO _
    console.log('RECEIVE odsBreadcrumbItemCollapsedClick')

    this.isCollapsed = false;
    this.updateBreadcrumb();
  }

  // TODO controller?
  private updateBreadcrumb() {
    const breadcrumbItems = this.getBreadcrumbItems();

    if (!breadcrumbItems.length) {
      return;
    }

    breadcrumbItems.forEach((breadcrumbItem) => {
      breadcrumbItem.isCollapsed = false;
      breadcrumbItem.isCollapsedItem = false;
      breadcrumbItem.isLast = false;
    })

    if (this.isCollapsed && breadcrumbItems.length > MAX_DISPLAYED_ITEMS) {
      breadcrumbItems.forEach((breadcrumbItem, index) => {
        breadcrumbItem.isCollapsed = index >= 1 && index < (breadcrumbItems.length - 1);
        breadcrumbItem.isCollapsedItem = index === 1;
        breadcrumbItem.isLast = index === (breadcrumbItems.length - 1);
      })
    } else {
      breadcrumbItems[breadcrumbItems.length - 1].isLast = true;
    }
  }

  private getBreadcrumbItems() {
    return Array.from(this.el.querySelectorAll<OdsBreadcrumbItem & HTMLElement>('osds-breadcrumb-item'));
  }

  render() {
    return (
      <Host role="navigation">
        <slot></slot>
      </Host>
    );
  }
}
