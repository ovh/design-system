import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Prop, h } from '@stencil/core';
import { ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../../../button/src';
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

  @Prop({ reflect: true }) public color: OdsMessageColor = ODS_MESSAGE_COLOR.information;
  @Prop({ reflect: true }) public isDismissible: boolean = true;
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
          class={ `ods-message__message ods-message__message--${this.color} ods-message__message--${this.variant} ${this.isDismissible ? '' : 'ods-message__message__dismissible'}` }
          part="message">
          <ods-icon
            class="ods-message__message__icon"
            name={ getIconName(this.color) }>
          </ods-icon>

          <slot></slot>

          {
            this.isDismissible &&
            <ods-button
              class={ `ods-message__message__close ods-message__message__close--${this.color}` }
              icon={ ODS_ICON_NAME.xmark }
              label=""
              onClick={ () => this.handleClick() }
              onKeyUp={ (event: KeyboardEvent) => this.handleKeyUp(event) }
              size={ ODS_BUTTON_SIZE.xs }
              variant={ ODS_BUTTON_VARIANT.ghost }>
            </ods-button>
          }
        </div>
      </Host>
    );
  }
}
