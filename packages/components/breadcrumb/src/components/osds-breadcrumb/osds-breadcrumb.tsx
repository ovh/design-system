import type { OdsBreadcrumbAttribute, OdsBreadcrumbAttributeItem } from './interfaces/attributes';
import type { OdsBreadcrumbItemAttribute } from '../osds-breadcrumb-item/interfaces/attributes';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsBreadcrumbController } from './core/controller';
import { Component, Element, Host, Listen, Prop, State, Watch, h } from '@stencil/core';
import { OdsLogger } from '@ovhcloud/ods-common-core';

/**
 * @slot (unnamed) - Breadcrumb content
 */
@Component({
  tag: 'osds-breadcrumb',
  styleUrl: 'osds-breadcrumb.scss',
  shadow: true,
})
export class OsdsBreadcrumb implements OdsBreadcrumbAttribute {
  private logger = new OdsLogger('OsdsBreadcrumb');
  private breadcrumbItems: OdsBreadcrumbItemAttribute[] = [];
  private parsedItems: OdsBreadcrumbAttributeItem[] = [];
  controller: OdsBreadcrumbController = new OdsBreadcrumbController();
  @Element() el!: HTMLElement;

  @State() isCollapsed = true;

  /** @see OdsBreadcrumbAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsBreadcrumbAttributes.items */
  @Prop({ reflect: true }) public items: OdsBreadcrumbAttributeItem[] | string = [];

  componentWillLoad() {
    this.parseItems();
    this.updateBreadcrumb();
  }

  @Watch('items')
  onItemsChange() {
    this.parseItems();
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

  private parseItems() {
    if (typeof this.items === 'string') {
      try {
        this.parsedItems = JSON.parse(this.items);
      } catch {
        this.logger.warn('[OsdsBreadcrumb] items string could not be parsed.');
        this.parsedItems = [];
      }
    } else {
      this.parsedItems = [...this.items];
    }
  }

  private updateBreadcrumb() {
    this.breadcrumbItems = this.controller.getBreadcrumbItems(this.parsedItems, this.isCollapsed);
  }

  render() {
    return (
      <Host role="navigation">
        {
          (this.breadcrumbItems || []).map((breadcrumbItem, index) => (
            <osds-breadcrumb-item key={index}
              contrasted={this.contrasted}
              {...breadcrumbItem}>
            </osds-breadcrumb-item>
          ))
        }
      </Host>
    );
  }
}
