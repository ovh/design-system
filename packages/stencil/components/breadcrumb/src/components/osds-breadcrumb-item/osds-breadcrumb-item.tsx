import { Component, Element, Host, h, /*State,*/ Prop, Event, EventEmitter } from '@stencil/core';
import {
  OdsBreadcrumbItem,
  OdsBreadcrumbItemController,
  OdsBreadcrumbItemMethods,
  odsBreadcrumbItemDefaultAttributes,
  OdsBreadcrumbItemClickEventDetail,
  OdsIconName,
  OdsIconSize,
  OdsBreadcrumbItemEvents,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

@Component({
  tag: 'osds-breadcrumb-item',
  styleUrl: 'osds-breadcrumb-item.scss',
  shadow: true,
})
export class OsdsBreadcrumbItem implements OdsBreadcrumbItem<OdsStencilMethods<OdsBreadcrumbItemMethods>, OdsStencilEvents<OdsBreadcrumbItemEvents>> {
  controller: OdsBreadcrumbItemController = new OdsBreadcrumbItemController(this);
  @Element() el!: HTMLElement;

  /** @see odsBreadcrumbItemDefaultAttributes.active */
  @Prop({ reflect: true }) active = odsBreadcrumbItemDefaultAttributes.active;
  /** @see odsBreadcrumbItemDefaultAttributes.collapsed */
  @Prop({ reflect: true }) collapsed = odsBreadcrumbItemDefaultAttributes.collapsed;
  /** @see odsBreadcrumbItemDefaultAttributes.disabled */
  @Prop({ reflect: true }) disabled = odsBreadcrumbItemDefaultAttributes.disabled;
  /** @see odsBreadcrumbItemDefaultAttributes.disabled */
  @Prop({ reflect: true }) displayed = odsBreadcrumbItemDefaultAttributes.displayed;
  /** @see odsBreadcrumbItemDefaultAttributes.showCollapsedIndicator */
  @Prop({ reflect: true }) showCollapsedIndicator = odsBreadcrumbItemDefaultAttributes.showCollapsedIndicator;

  /** @see OdsLinkAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsBreadcrumbItemDefaultAttributes.color;

  @Event() collapsedClick!: EventEmitter<OdsBreadcrumbItemClickEventDetail>;
  /**
   * Emitted when the breadcrumb has focus.
   */
  @Event() inFocus!: EventEmitter<void>;

  /**
   * Emitted when the breadcrumb loses focus.
   */
  @Event() inBlur!: EventEmitter<void>;

  /** @see OdsBreadcrumbItemEvents.odsFocus */
  @Event() odsFocus!: EventEmitter<void>;
  private onFocus() {
    this.odsFocus.emit();
  }

  /** @see OdsBreadcrumbItemEvents.odsBlur */
  @Event() odsBlur!: EventEmitter<void>;

  onBlur() {
    this.odsBlur.emit();
  }

  render() {
    const { active, color, collapsed, disabled, displayed, /*el,*/ showCollapsedIndicator } = this;
    return (
      <Host
        aria-current={disabled ? 'true' : null}
        {...{
          disabled,
          active,
          collapsed,
          displayed,
          color,
          onFocus: this.onFocus.bind(this),
          onBlur: this.onBlur.bind(this),
        }}
      >
        <li>
          <slot name="start"></slot>
          <slot></slot>
          <slot name="end"></slot>
        </li>
        {showCollapsedIndicator && (
          <a
            onClick={() => {
              console.log('ellipsis click');
            }}
            class="ellipsis"
          >
            <osds-icon
              {...{
                name: OdsIconName.ELLIPSIS,
                size: OdsIconSize.xxs,
                color: 'primary' as OdsThemeColorIntent,
              }}
            ></osds-icon>
          </a>
        )}
      </Host>
    );
  }
}
