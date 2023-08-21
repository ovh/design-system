import { Component, Element, Host, h, Prop, Method } from '@stencil/core';
import {
  OdsModal,
  OdsModalController,
  OdsModalEvents,
  OdsModalMethods,
  odsModalDefaultAttributes
} from '@ovhcloud/ods-core';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { ODS_TEXT_LEVEL } from '@ovhcloud/ods-component-text';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent, OdsThemeTypographySize } from '@ovhcloud/ods-theming';

/**
 * @slot (unnamed) - Modal content
 */
@Component({
  tag: 'osds-modal',
  styleUrl: 'osds-modal.scss',
  shadow: true
})
export class OsdsModal implements OdsModal<OdsStencilMethods<OdsModalMethods>, OdsStencilEvents<OdsModalEvents>> {
  controller: OdsModalController = new OdsModalController(this);
  @Element() el!: HTMLElement;

  /** @see OdsModalAttributes.color */
  @Prop({ reflect: true }) color: OdsThemeColorIntent = odsModalDefaultAttributes.color;

  /** @see OdsModalAttributes.dismissible */
  @Prop({ reflect: true }) dismissible?: boolean = odsModalDefaultAttributes.dismissible;

  /** @see OdsModalAttributes.headline */
  @Prop({ reflect: true }) headline?: string = odsModalDefaultAttributes.headline;

  /** @see OdsModalAttributes.masked */
  @Prop({ reflect: true, mutable: true }) masked?: boolean = odsModalDefaultAttributes.masked;

  /**
   * @see OdsModalMethods.close
   */
  @Method()
  async close() {
    this.controller.close();
  }

  /**
   * @see OdsModalMethods.open
   */
  @Method()
  async open() {
    this.controller.open();
  }

  componentWillRender(): void {
    document.body.appendChild(this.el);
    const directChildren = Array.from(document.body.children);
    for (const child of directChildren) {
      if (child !== this.el && child.nodeName !== 'SCRIPT') {
        if (!this.masked) {
          child.setAttribute('inert', '');
        } else {
          child.removeAttribute('inert');
        }
      }
    }
  }

  render() {

    const {
      color,
      headline,
      dismissible,
      masked
    } = this;

    return (
      <Host masked={masked}>
        <div class="backdrop"></div>

        <div class="wrapper">
          <div class="header">
            { dismissible &&
              <osds-button
                onClick={() => this.close()}
                color={color}
                circle={true}
                ghost={true}
              >
                <osds-icon
                  ariaName={ODS_ICON_NAME.CLOSE + " icon"}
                  name={ODS_ICON_NAME.CLOSE}
                  size={ODS_ICON_SIZE.sm}
                  color={color}
                ></osds-icon>
              </osds-button>
            }
          </div>

          <div class="content">
            {headline && headline.length > 0 &&
              <div class="headline">
                <osds-text
                  level={ODS_TEXT_LEVEL.heading}
                  size={OdsThemeTypographySize._400}
                  color={OdsThemeColorIntent.primary}
                >{headline}</osds-text>
              </div>
            }

            <div class="slot">
              <slot></slot>
            </div>

            <div class="actions">
              <slot name="actions"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
