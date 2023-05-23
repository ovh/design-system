import { Component, Element, Host, h, State, Prop, Listen } from '@stencil/core';
import { OdsBreadcrumb, OdsBreadcrumbController, odsBreadcrumbDefaultAttributes, OdsBreadcrumbEvents, OdsBreadcrumbMethods, OdsIconName, OdsIconSize } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

@Component({
  tag: 'osds-breadcrumb',
  styleUrl: 'osds-breadcrumb.scss',
  shadow: true,
})
export class OsdsBreadcrumb implements OdsBreadcrumb<OdsStencilMethods<OdsBreadcrumbMethods>, OdsStencilEvents<OdsBreadcrumbEvents>> {
  @Element() el!: HTMLElement;

  controller!: OdsBreadcrumbController;

  /** @see odsBreadcrumbDefaultAttributes.collapsed */
  @Prop({ reflect: true, mutable: true }) collapsed = odsBreadcrumbDefaultAttributes.collapsed;

  @State() breadcrumbArray: Array<Element> = [];

  componentWillLoad() {
    const items = this.getBreadcrumbItems();
    this.breadcrumbInit(items);
    this.controller = new OdsBreadcrumbController(this);
  }

  private breadcrumbInit = (items: Array<Element>) => {
    this.breadcrumbArray = items;
  };

  // function to get the array of osds-breadcrumb-item
  private getBreadcrumbItems = () => {
    return Array.from(this.el.querySelectorAll('osds-breadcrumb-item'));
  };

  toggleCollapsed = () => {
    this.controller.toggleCollapsed();
  };

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleCollapsed();
    }
  }

  handleLinkClick = () => {
    this.toggleCollapsed();
  };
  render() {
    return (
      <Host role="navigation">
        <ul>
          {this.breadcrumbArray.length > 4 && !this.collapsed ? (
            <span>
              <span innerHTML={this.breadcrumbArray?.[0].innerHTML} />
              <span>
                <osds-link onClick={this.handleLinkClick}>
                  <osds-icon
                    {...{
                      name: OdsIconName.ELLIPSIS,
                      size: OdsIconSize.xxs,
                      color: 'primary' as OdsThemeColorIntent,
                    }}
                  ></osds-icon>
                </osds-link>
              </span>
              <span innerHTML={this.breadcrumbArray?.[this.breadcrumbArray.length - 1].innerHTML} />
            </span>
          ) : (
            <slot></slot>
          )}
        </ul>
      </Host>
    );
  }
}
