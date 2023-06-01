import { Component, Element, Host, h, Listen, Prop, State } from '@stencil/core';
import {
  OdsBreadcrumb,
  OdsBreadcrumbAttributes,
  OdsBreadcrumbController,
  OdsBreadcrumbEvents,
  OdsBreadcrumbItemAttributes,
  OdsBreadcrumbMethods,
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
  private breadcrumbItems: OdsBreadcrumbItemAttributes[] = []
  controller: OdsBreadcrumbController = new OdsBreadcrumbController(this);
  @Element() el!: HTMLElement;

  @State() isCollapsed = true;

  @Prop({ reflect: true }) items: OdsBreadcrumbAttributes['items'] = [];

  componentWillLoad() {
    this.updateBreadcrumb();
  }

  /**
   * @see OdsBreadcrumbBehavior.onBreadcrumbItemCollapsedClick
   */
  @Listen('odsBreadcrumbItemCollapsedClick')
  onBreadcrumbItemCollapsedClick() {
    this.isCollapsed = false;
    this.updateBreadcrumb();
  }

  private updateBreadcrumb() {
    this.breadcrumbItems = this.controller.getBreadcrumbItems(this.isCollapsed);
  }

  render() {
    return (
      <Host role="navigation">
        {
          this.breadcrumbItems.map((breadcrumbItem, index) => (
            <osds-breadcrumb-item key={index}
                                  {...breadcrumbItem}>
            </osds-breadcrumb-item>
          ))
        }
      </Host>
    );
  }
}
