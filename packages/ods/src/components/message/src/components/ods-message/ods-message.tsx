import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Prop, h } from '@stencil/core';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_MESSAGE_COLOR, type OdsMessageColor } from '../../constants/message-color';
import { ODS_MESSAGE_VARIANT, type OdsMessageVariant } from '../../constants/message-variant';
import { getIconName, handleKeySpace } from '../../controller/ods-message';

@Component({
  shadow: true,
  styleUrl: 'ods-message.scss',
  tag: 'ods-message',
})
export class OdsMessage {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public color: OdsMessageColor = ODS_MESSAGE_COLOR.information;
  @Prop({ reflect: true }) public variant: OdsMessageVariant = ODS_MESSAGE_VARIANT.default;

  @Event() odsMessageRemove!: EventEmitter<void>;

  private handleClick(): void {
    this.odsMessageRemove.emit();
  }

  private handleKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.odsMessageRemove.emit();
    }
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-message">
        <div
          class={ `ods-message__message ods-message__message--${this.color} ods-message__message--${this.variant}` }
          part="message">
          <div class={'ods-message__message__wrapper'}>
            <ods-icon
              class="ods-message__message__icon"
              name={getIconName(this.color)}>
            </ods-icon>

            <slot></slot>

            <div class="ods-message__message__close-wrapper">
              <button
                class={`ods-message__message__close ods-message__message__close--${this.color}`}
                onClick={this.handleClick.bind(this)}
                onKeyUp={(event: KeyboardEvent) => handleKeySpace(event, this.handleKeyUp.bind(this))}>
                <ods-icon name={ODS_ICON_NAME.cross}>
                </ods-icon>
              </button>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
