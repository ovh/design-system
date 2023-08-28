import type { OdsModalAttribute } from './interfaces/attributes';
import { ODS_THEME_COLOR_INTENT, ODS_THEME_TYPOGRAPHY_SIZE } from '@ovhcloud/ods-common-theming';
import { Component, Element, Host, Method, Prop, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { ODS_TEXT_LEVEL } from '@ovhcloud/ods-component-text';
import { OdsModalController } from './core/controller';
import { OdsModalMethod } from './interfaces/methods';

/**
 * @slot (unnamed) - Modal content
 */
@Component({
  tag: 'osds-modal',
  styleUrl: 'osds-modal.scss',
  shadow: true
})
export class OsdsModal implements OdsModalAttribute, OdsModalMethod {
  controller: OdsModalController = new OdsModalController(this);
  @Element() el!: HTMLElement;

  /** @see OdsModalAttributes.color */
  @Prop({ reflect: true }) color: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsModalAttributes.dismissible */
  @Prop({ reflect: true }) dismissible?: boolean = DEFAULT_ATTRIBUTE.dismissible;

  /** @see OdsModalAttributes.headline */
  @Prop({ reflect: true }) headline?: string = DEFAULT_ATTRIBUTE.headline;

  /** @see OdsModalAttributes.masked */
  @Prop({ reflect: true, mutable: true }) masked?: boolean = DEFAULT_ATTRIBUTE.masked;

  /**
   * @see OdsModalMethods.close
   */
  @Method()
  async close(): Promise<void> {
    this.controller.close();
  }

  /**
   * @see OdsModalMethods.open
   */
  @Method()
  async open(): Promise<void> {
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
                  size={ODS_THEME_TYPOGRAPHY_SIZE._400}
                  color={ODS_THEME_COLOR_INTENT.primary}
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
