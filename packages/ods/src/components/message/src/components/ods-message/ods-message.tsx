import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Prop, h } from '@stencil/core';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_MESSAGE_COLOR, type OdsMessageColor } from '../../constants/message-color';
import { ODS_MESSAGE_VARIANT, type OdsMessageVariant } from '../../constants/message-variant';
import { getIconName } from '../../controller/ods-message';

@Component({
  shadow: true,
  styleUrl: 'ods-message.scss',
  tag: 'ods-message',
})
export class OdsMessage {
  @Element() el!: HTMLElement;

  /** @docType OdsMessageColor */
  @Prop({ reflect: true }) public color: OdsMessageColor = ODS_MESSAGE_COLOR.information;
  /** @docType OdsMessageVariant */
  @Prop({ reflect: true }) public variant: OdsMessageVariant = ODS_MESSAGE_VARIANT.default;

  @Event() odsRemove!: EventEmitter<void>;

  private handleClick(): void {
    this.odsRemove.emit();
  }

  private handleKeyUp(event: KeyboardEvent): void {
    if (event.key === ' ') {
      event.preventDefault();
      this.odsRemove.emit();
    }
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-message">
        <div
          class={ `ods-message__message ods-message__message--${this.color} ods-message__message--${this.variant}` }
          part="message">
          <ods-icon
            class="ods-message__message__icon"
            name={ getIconName(this.color) }>
          </ods-icon>

          <slot></slot>

          <button
            class={ `ods-message__message__close ods-message__message__close--${this.color}` }
            onClick={ () => this.handleClick() }
            onKeyUp={ (event: KeyboardEvent) => this.handleKeyUp(event) }>
            <ods-icon name={ ODS_ICON_NAME.xmark }>
            </ods-icon>
          </button>
        </div>
      </Host>
    );
  }
}
