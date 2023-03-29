import { Component, Element, Host, h, Prop, State, Event, Listen, Watch, EventEmitter } from '@stencil/core';
import {
  OdsBreadcrumb,
  OdsBreadcrumbController,
  OdsBreadcrumbEvents,
  OdsBreadcrumbMethods,
  odsBreadcrumbDefaultAttributes,
  OdsBreadcrumbClickEventDetail,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - Breadcrumb content
 */
@Component({
  tag: 'osds-breadcrumb',
  styleUrl: 'osds-breadcrumb.scss',
  shadow: true,
})
export class OsdsBreadcrumb implements OdsBreadcrumb<OdsStencilMethods<OdsBreadcrumbMethods>, OdsStencilEvents<OdsBreadcrumbEvents>> {
  controller: OdsBreadcrumbController = new OdsBreadcrumbController(this);
  @Element() el!: HTMLElement;

  /** @see odsBreadcrumbDefaultAttributes.maxItems */
  @Prop({ reflect: true }) public maxItems = odsBreadcrumbDefaultAttributes.maxItems;
  /** @see odsBreadcrumbDefaultAttributes.itemBeforeCollapse */
  @Prop({ reflect: true }) public itemBeforeCollapse = odsBreadcrumbDefaultAttributes.itemBeforeCollapse;
  /** @see odsBreadcrumbDefaultAttributes.itemAfterCollapse */
  @Prop({ reflect: true }) public itemAfterCollapse = odsBreadcrumbDefaultAttributes.itemAfterCollapse;

  @State() collapsed!: boolean;
  @State() activeChanged!: boolean;

  /** @see OdsSelectEvents.odsValueChange */
  @Event() odsValueChange!: EventEmitter<OdsBreadcrumbClickEventDetail>;
  @Event() collapsedClick!: EventEmitter<OdsBreadcrumbClickEventDetail>;

  @Listen('collapsedClick')
  /**
   * @see OdsBreadcrumbBehavior.beforeRender
   */
  onCollapsedClick(ev: CustomEvent) {
    const items = this.getBreadcrumbItems();
    const collapsedBreadcrumbs = items.filter((item: any) => item?.collapsed);
    this.collapsedClick.emit({ ...ev.detail, collapsedBreadcrumbs });
  }
  @Watch('maxItems')
  @Watch('itemBeforeCollapse')
  @Watch('itemAfterCollapse')
  maxItemsChanged() {
    this.resetActiveBreadcrumbItem();
    this.breadcrumbInit();
  }

  componentWillLoad() {
    this.breadcrumbInit();
  }

  private breadcrumbInit = () => {
    const items = this.getBreadcrumbItems();
    this.setMaxItems(items);
  };

  private resetActiveBreadcrumbItem = () => {
    //const breadcrumbItems = this.getBreadcrumbItems();
    // Only reset the active breadcrumb-item if we were the ones to change it
    // otherwise use the one set on the component
    /*  const activeBreadcrumb = breadcrumbItems.find((breadcrumbItem: any) => breadcrumbItem.active);
    if (activeBreadcrumb && this.activeChanged) {
      activeBreadcrumb.active = false;
    } */
  };

  private setMaxItems = (items: any) => {
    if (items.length > 4) {
      items[(items.length - 1) / 2].showCollapsedIndicator = true;
      items.map((item: any, index: any) => {
        if (index !== 0 && (index !== items.length - 1)) {
            item.displayed = false;
        }
        return item;
      });
    }
  };

  private getBreadcrumbItems = () => {
    return Array.from(this.el.querySelectorAll('osds-breadcrumb-item'));
  };

  private slotChanged = () => {
    this.resetActiveBreadcrumbItem();
    this.breadcrumbInit();
  };

  render() {
    return (
      <Host role="navigation">
        <ul>
          <slot onSlotchange={this.slotChanged}></slot>
        </ul>
      </Host>
    );
  }
}
