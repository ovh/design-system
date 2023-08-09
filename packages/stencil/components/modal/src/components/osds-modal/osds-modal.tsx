import { Component, Element, Host, h, Prop, Method } from '@stencil/core';
import {
  OdsModal,
  OdsModalController,
  OdsModalEvents,
  OdsModalMethods,
  odsModalDefaultAttributes,
  OdsIconSize,
  OdsIconName,
  OdsTextLevel,
} from '@ovhcloud/ods-core';
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

  /**
   * @see OdsModalBehavior.beforeRender
   */
  beforeRender(): void {

  }

  componentWillRender(): void {
    document.documentElement.appendChild(this.el);
  }

  render() {

    const {
      color,
      headline,
      dismissible,
      masked
    } = this;

    return (
      <Host {...{ masked }}>
        <div class="backdrop"></div>

        <div class="wrapper">
          <div class="header">
            { dismissible &&
              <osds-icon
                {...{
                  ariaName: `${OdsIconName.CLOSE} icon`,
                  name: OdsIconName.CLOSE,
                  size: OdsIconSize.md,
                  color,
                  onClick: () => this.close(),
              }}></osds-icon>
            }
          </div>

          <div class="content">
            {headline && headline.length > 0 &&
              <div class="headline">
                <osds-text
                  {...{
                    level: OdsTextLevel.heading,
                    size: OdsThemeTypographySize._400,
                    color: OdsThemeColorIntent.primary,
                }}>{headline}</osds-text>
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
