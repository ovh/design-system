import type { OdsBreadcrumbItemAttribute } from './interfaces/attributes';

import type { OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';
import type { ODS_LINK_REFERRER_POLICY } from '@ovhcloud/ods-component-link';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsBreadcrumbItemEvent } from './interfaces/events';
import { OdsBreadcrumbAttributeItem } from '../osds-breadcrumb/public-api';

/**
 * @slot (unnamed) - Breadcrumb Item content
 */
@Component({
  tag: 'osds-breadcrumb-item',
  styleUrl: 'osds-breadcrumb-item.scss',
  shadow: true,
})
export class OsdsBreadcrumbItem implements OdsBreadcrumbItemAttribute, OdsBreadcrumbItemEvent {
  private defaultColorIntent = ODS_THEME_COLOR_INTENT.primary;

  @Element() el!: HTMLElement;

  /** @see OdsBreadcrumbItemAttribute.contrasted */
  @Prop({ reflect: true }) public contrasted? = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsBreadcrumbItemAttribute.disabled */
  @Prop({ reflect: true }) public disabled? = DEFAULT_ATTRIBUTE.disabled;

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

  /** @see OdsBreadcrumbItemAttribute.referrerpolicy */
  @Prop({ reflect: true }) referrerpolicy?: ODS_LINK_REFERRER_POLICY;
  
  /** @see OdsBreadcrumbItemAttribute.rel */
  @Prop({ reflect: true }) rel?: OdsHTMLAnchorElementRel;

  /** @see OdsBreadcrumbItemAttribute.target */
  @Prop({ reflect: true }) target?: OdsHTMLAnchorElementTarget = DEFAULT_ATTRIBUTE.target;

  /** @see OdsBreadcrumbItemEvent.odsBreadcrumbItemCollapsedClick */
  @Event() odsBreadcrumbItemCollapsedClick!: EventEmitter<void>;

   /** @see OdsBreadcrumbItemEvent.odsBreadcrumbItemClick */
   @Event() odsBreadcrumbItemClick!: EventEmitter<OdsBreadcrumbAttributeItem & { event: MouseEvent }>;

  private onCollapsedElementClick(): void {
    this.odsBreadcrumbItemCollapsedClick.emit();
  }

  private onElementClick(event: MouseEvent): void {
    if (this.isDisabled()) {
      return;
    }
    this.odsBreadcrumbItemClick.emit({
      disabled: this.disabled,
      href: this.href,
      label: this.label,
      referrerpolicy: this.referrerpolicy,
      rel: this.rel,
      target: this.target,
      event,
    });
  }

  private isDisabled() {
    return this.disabled || this.isLast;
  }

  render() {
    const showSeparator = this.isLast ? false : this.isCollapsed ? this.isExpandableItem : true;

    return (
      <Host class={{ 'collapsed': this.isCollapsed }}>
        <div class="item">
          <osds-link color={this.defaultColorIntent}
            contrasted={this.contrasted}
            disabled={this.isDisabled()}
            href={this.href}
            referrerpolicy={this.referrerpolicy}
            rel={this.rel}
            target={this.target}
            onClick={(event: MouseEvent) => this.onElementClick(event)}>
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
