import type { OdsBreadcrumbItemAttribute } from './interfaces/attributes';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

/**
 * @slot (unnamed) - Breadcrumb Item content
 */
@Component({
  tag: 'osds-breadcrumb-item',
  styleUrl: 'osds-breadcrumb-item.scss',
  shadow: true,
})
export class OsdsBreadcrumbItem implements OdsBreadcrumbItemAttribute {
  private defaultColorIntent = ODS_THEME_COLOR_INTENT.primary;

  @Element() el!: HTMLElement;

  /** @see OdsBreadcrumbItemAttribute.contrasted */
  @Prop({ reflect: true }) public contrasted? = DEFAULT_ATTRIBUTE.contrasted;

  /** @internal */
  @Prop() isCollapsed = DEFAULT_ATTRIBUTE.isCollapsed;

  /** @internal */
  @Prop() isExpandableItem = DEFAULT_ATTRIBUTE.isExpandableItem;

  /** @internal */
  @Prop() isLast = DEFAULT_ATTRIBUTE.isLast;

  /** @see OdsBreadcrumbItemAttribute.href */
  @Prop({ reflect: true }) href = DEFAULT_ATTRIBUTE.href;

  /** @see OdsBreadcrumbItemAttribute.icon */
  @Prop({ reflect: true }) icon?: ODS_ICON_NAME;

  /** @see OdsBreadcrumbItemAttribute.label */
  @Prop({ reflect: true }) label?: string;

  /** @see OdsBreadcrumbItemEvent.odsBreadcrumbItemCollapsedClick */
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
              !!this.icon
              && <span slot="start">
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
          this.isExpandableItem
          && <osds-link class="expandable"
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
          showSeparator
          && <osds-text class="separator"
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
