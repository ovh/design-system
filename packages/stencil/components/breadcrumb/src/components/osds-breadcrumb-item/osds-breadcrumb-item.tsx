import { Component, Element, Event, EventEmitter, Host, h, Prop, Watch } from '@stencil/core';
import {
  OdsBreadcrumbItem,
  OdsBreadcrumbItemController,
  OdsBreadcrumbItemEvents,
  OdsBreadcrumbItemMethods,
  OdsButtonSize,
  OdsButtonVariant,
  OdsLink,
  // odsBreadcrumbItemDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
// import { OsdsLink } from '@ovhcloud/ods-stencil/components/link/src/components';

/**
 * @slot (unnamed) - Breadcrumb Item content
 */
@Component({
  tag: 'osds-breadcrumb-item',
  styleUrl: 'osds-breadcrumb-item.scss',
  shadow: true
})
export class OsdsBreadcrumbItem implements OdsBreadcrumbItem<OdsStencilMethods<OdsBreadcrumbItemMethods>, OdsStencilEvents<OdsBreadcrumbItemEvents>> {
  controller: OdsBreadcrumbItemController = new OdsBreadcrumbItemController(this);
  @Element() el!: HTMLElement;

  /** @internal */
  @Prop() isCollapsed = false;

  /** @internal */
  @Prop() isCollapsedItem!: boolean;

  /** @internal */
  @Prop() isLast!: boolean;

  /** @see OdsBreadcrumbItem.odsBreadcrumbItemCollapsedClick */
  @Event() odsBreadcrumbItemCollapsedClick!: EventEmitter<void>;

  @Watch('isLast')
  onIsLastChange() {
    if (this.isLast) {
      this.disableLink();
    }
  }

  private disableLink() {
    const linkElement = this.getLink();

    if (linkElement) {
      linkElement.disabled = true
    }
  }

  private getLink() {
    return this.el.querySelector<OdsLink & HTMLElement>('osds-link');
  }

  private onCollapsedElementClick() {
    this.odsBreadcrumbItemCollapsedClick.emit();
  }

  render() {
    const showSeparator = this.isLast ? false : this.isCollapsed ? this.isCollapsedItem : true;

    return (
      <Host class={{ 'collapsed': this.isCollapsed }}>
        <div class="item">
          <slot></slot>
        </div>

        {
          this.isCollapsedItem &&
          <osds-button onClick={ () => this.onCollapsedElementClick() }
                       size={ OdsButtonSize.sm }
                       variant={ OdsButtonVariant.ghost }>
            ...
          </osds-button>
        }

        {
          showSeparator &&
          <slot name="separator">
            <osds-text class="separator"
                       aria-hidden="true">
              |
            </osds-text>
          </slot>
        }
      </Host>
    );
  }
}
