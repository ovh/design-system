import { Component, Element, Event, EventEmitter, Host, h, Prop } from '@stencil/core';
import {
  OdsBreadcrumbItem,
  OdsBreadcrumbItemController,
  odsBreadcrumbItemDefaultAttributes,
  OdsBreadcrumbItemEvents,
  OdsBreadcrumbItemMethods,
  OdsButtonSize,
  OdsButtonVariant,
  OdsIconName,
  OdsIconSize,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

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
  @Prop() isCollapsedItem = odsBreadcrumbItemDefaultAttributes.isCollapsedItem;

  /** @internal */
  @Prop() isLast = odsBreadcrumbItemDefaultAttributes.isLast;

  /** @see OdsBreadcrumbItemAttributes.href */
  @Prop({ reflect: true }) href = '';

  /** @see OdsBreadcrumbItemAttributes.icon */
  @Prop({ reflect: true }) icon?: OdsIconName;

  /** @see OdsBreadcrumbItemAttributes.label */
  @Prop({ reflect: true }) label?: string;

  /** @see OdsBreadcrumbItemEvents.odsBreadcrumbItemCollapsedClick */
  @Event() odsBreadcrumbItemCollapsedClick!: EventEmitter<void>;

  private onCollapsedElementClick() {
    this.odsBreadcrumbItemCollapsedClick.emit();
  }

  render() {
    const showSeparator = this.isLast ? false : this.isCollapsed ? this.isCollapsedItem : true;

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
                           size={OdsIconSize.xs}
                           color={this.defaultColorIntent}>
                </osds-icon>
              </span>
            }
            {this.label}
          </osds-link>
        </div>

        {
          this.isCollapsedItem &&
          <osds-button color={this.defaultColorIntent}
                       contrasted={this.contrasted}
                       onClick={() => this.onCollapsedElementClick()}
                       size={OdsButtonSize.sm}
                       variant={OdsButtonVariant.ghost}>
            <osds-icon color={this.defaultColorIntent}
                       contrasted={this.contrasted}
                       name={OdsIconName.ELLIPSIS}>
            </osds-icon>
          </osds-button>
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
