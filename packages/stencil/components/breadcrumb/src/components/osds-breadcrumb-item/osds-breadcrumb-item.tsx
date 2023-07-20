import { Component, Element, Event, EventEmitter, Host, h, Prop } from '@stencil/core';
import {
  OdsBreadcrumbItem,
  OdsBreadcrumbItemController,
  odsBreadcrumbItemDefaultAttributes,
  OdsBreadcrumbItemEvents,
  OdsBreadcrumbItemMethods,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';

/**
 * @slot (unnamed) - Breadcrumb Item content
 */
@Component({
  tag: 'osds-breadcrumb-item',
  styleUrl: 'osds-breadcrumb-item.scss',
  shadow: true
})
export class OsdsBreadcrumbItem implements OdsBreadcrumbItem<OdsStencilMethods<OdsBreadcrumbItemMethods>, OdsStencilEvents<OdsBreadcrumbItemEvents>> {
  private defaultColorIntent = OdsThemeColorIntent.primary;
  controller: OdsBreadcrumbItemController = new OdsBreadcrumbItemController(this);
  @Element() el!: HTMLElement;

  /** @see OdsBreadcrumbItemAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = odsBreadcrumbItemDefaultAttributes.contrasted;

  /** @internal */
  @Prop() isCollapsed = odsBreadcrumbItemDefaultAttributes.isCollapsed;

  /** @internal */
  @Prop() isExpandableItem = odsBreadcrumbItemDefaultAttributes.isExpandableItem;

  /** @internal */
  @Prop() isLast = odsBreadcrumbItemDefaultAttributes.isLast;

  /** @see OdsBreadcrumbItemAttributes.href */
  @Prop({ reflect: true }) href = '';

  /** @see OdsBreadcrumbItemAttributes.icon */
  @Prop({ reflect: true }) icon?: ODS_ICON_NAME;

  /** @see OdsBreadcrumbItemAttributes.label */
  @Prop({ reflect: true }) label?: string;

  /** @see OdsBreadcrumbItemEvents.odsBreadcrumbItemCollapsedClick */
  @Event() odsBreadcrumbItemCollapsedClick!: EventEmitter<void>;

  private onCollapsedElementClick() {
    this.odsBreadcrumbItemCollapsedClick.emit();
  }

  render() {
    const showSeparator = this.isLast ? false : this.isCollapsed ? this.isExpandableItem : true;

    return (
      <Host class={{ 'collapsed': this.isCollapsed }}>
        <div class="item">
          <osds-link color={this.defaultColorIntent}
                     contrasted={this.contrasted}
                     disabled={this.isLast}
                     href={this.href}>
            {
              !!this.icon &&
              <span slot="start">
                <osds-icon contrasted={this.contrasted}
                           name={this.icon}
                           size={ODS_ICON_SIZE.xs}
                           color={this.defaultColorIntent}>
                </osds-icon>
              </span>
            }
            {/* wbr enfore baseline alignement if there are no text */}
            {this.label || <wbr />}
          </osds-link>
        </div>

        {
          this.isExpandableItem &&
          <osds-link class="expandable"
                     color={this.defaultColorIntent}
                     contrasted={this.contrasted}
                     onClick={() => this.onCollapsedElementClick()}>
            <osds-text color={this.defaultColorIntent}
                       contrasted={this.contrasted}
                       aria-hidden="true">
              &hellip;
            </osds-text>
          </osds-link>
        }

        {
          showSeparator &&
          <osds-text class="separator"
                     color={this.defaultColorIntent}
                     contrasted={this.contrasted}
                     aria-hidden="true">
            |
          </osds-text>
        }
      </Host>
    );
  }
}
