import { Component, Element, Host, h, State, Prop, Listen, Event, EventEmitter } from '@stencil/core';
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

  /** Emitted when the user clicks on a breadcrumb item */
  @Event() odsBreadcrumbItemSelection!: EventEmitter<void>;

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

  @Listen('keyup')
  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      if (this.breadcrumbArray.length > 0) {
        requestAnimationFrame(() => {
          const activeElement = document.activeElement as HTMLElement;
          const isLastBreadcrumbItem = activeElement === this.breadcrumbArray[this.breadcrumbArray.length - 1];

          if (isLastBreadcrumbItem) {
            event.preventDefault();
            this.toggleCollapsed();
            this.odsBreadcrumbItemSelection.emit();
          }
        });
      }
    } else if (event.key === 'Tab' && this.breadcrumbArray.length > 0) {
      requestAnimationFrame(() => {
        const activeElement = document.activeElement as HTMLElement;
        const isLastBreadcrumbItem = activeElement === this.breadcrumbArray[this.breadcrumbArray.length - 1];

        if (!isLastBreadcrumbItem) {
          this.odsBreadcrumbItemSelection.emit();
        }
      });
    }
    console.log('active element', document.activeElement);
  }

  handleLinkClick = () => {
    this.toggleCollapsed();
    this.odsBreadcrumbItemSelection.emit();
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
