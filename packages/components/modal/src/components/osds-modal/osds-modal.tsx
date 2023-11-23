import type { OdsModalAttribute } from './interfaces/attributes';
import type { OdsModalEvent } from './interfaces/events';
import type { OdsModalMethod } from './interfaces/methods';
import type { EventEmitter } from '@stencil/core';
import { ODS_THEME_COLOR_INTENT, ODS_THEME_TYPOGRAPHY_SIZE } from '@ovhcloud/ods-common-theming';
import { ODS_BUTTON_VARIANT } from '@ovhcloud/ods-component-button';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { ODS_TEXT_LEVEL } from '@ovhcloud/ods-component-text';
import { Component, Element, Event, Host, Listen, Method, Prop, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

/**
 * @slot (unnamed) - Modal content
 */
@Component({
  shadow: true,
  styleUrl: 'osds-modal.scss',
  tag: 'osds-modal',
})
export class OsdsModal implements OdsModalAttribute, OdsModalMethod, OdsModalEvent {
  modal: HTMLDialogElement | undefined = undefined;
  @Element() el!: HTMLElement;

  /** @see OdsModalAttributes.color */
  @Prop({ reflect: true }) color: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsModalAttributes.dismissible */
  @Prop({ reflect: true }) dismissible?: boolean = DEFAULT_ATTRIBUTE.dismissible;

  /** @see OdsModalAttributes.headline */
  @Prop({ reflect: true }) headline?: string = DEFAULT_ATTRIBUTE.headline;

  /** @see OdsModalAttributes.masked */
  @Prop({ mutable: true, reflect: true }) masked?: boolean = DEFAULT_ATTRIBUTE.masked;

  /** @see OdsModalEvents.odsModalOpen */
  @Event() odsModalOpen!: EventEmitter<void>;

  /** @see OdsModalEvents.odsModalClose */
  @Event() odsModalClose!: EventEmitter<void>;

  @Listen('keydown', { target: 'window' })
  handleKeyDown(event: KeyboardEvent): void {
    console.log(document.activeElement);
    if (event.key === 'Escape') {
      event.stopPropagation();
      event.preventDefault();
      if (this.modal?.open && this.dismissible) {
        this.close();
      }
    }
  }

  @Watch('masked')
  handleShownState(): void {
    if (!this.modal) {
      return;
    }
    if (this.masked) {
      return this.modal.close?.();
    }
    return this.modal.showModal?.();
  }

  /**
   * @see OdsModalMethods.close
   */
  @Method()
  async close(): Promise<void> {
    this.masked = true;
    this.odsModalClose.emit();
  }

  /**
   * @see OdsModalMethods.open
   */
  @Method()
  async open(): Promise<void> {
    this.masked = false;
    this.odsModalOpen.emit();
  }

  componentDidLoad(): void {
    this.handleShownState();
  }

  render(): JSX.Element {
    const { color, headline, dismissible, masked } = this;

    return (
      <Host masked={masked}>
        <div class="backdrop"></div>

        <dialog
          class="wrapper"
          ref={(el?: HTMLElement | null): void => {
            this.modal = el as HTMLDialogElement;
          }}>
          <div class="header">
            {dismissible && (
              <osds-button onClick={(): Promise<void> => this.close()} color={color} circle variant={ODS_BUTTON_VARIANT.ghost}>
                <osds-icon ariaName={ODS_ICON_NAME.CLOSE + ' icon'} name={ODS_ICON_NAME.CLOSE} size={ODS_ICON_SIZE.sm} color={color}></osds-icon>
              </osds-button>
            )}
          </div>

          <div class="content">
            {headline && headline.length > 0 && (
              <div class="headline">
                <osds-text level={ODS_TEXT_LEVEL.heading} size={ODS_THEME_TYPOGRAPHY_SIZE._400} color={ODS_THEME_COLOR_INTENT.primary}>
                  {headline}
                </osds-text>
              </div>
            )}

            <div class="slot">
              <slot></slot>
            </div>

            <div class="actions">
              <slot name="actions"></slot>
            </div>
          </div>
        </dialog>
      </Host>
    );
  }
}
