import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import type { EventEmitter } from '@stencil/core';
import type { OdsMessageAttribute } from './interfaces/attributes';
import type { OdsMessageEvent } from './interfaces/events';
import { Component, Event, Host, Prop, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_MESSAGE_TYPE } from './constants/message-type';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { OdsMessageController } from './core/controller';
// import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - Message content
 */
@Component({
  tag: 'osds-message',
  styleUrl: 'osds-message.scss',
  shadow: true
})
export class OsdsMessage implements OdsMessageAttribute, OdsMessageEvent {
  controller: OdsMessageController = new OdsMessageController(this);

  /** @see OdsMessageAttributes.color */
  @Prop({ reflect: true, mutable: true }) public color?: OdsThemeColorIntent = DEFAULT_ATTRIBUTE.color;

  /** @see OdsMessageAttributes.inline */
  @Prop({ reflect: true }) public inline? = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsMessageAttributes.icon */
  @Prop({ reflect: true, mutable: true }) public icon?: ODS_ICON_NAME = DEFAULT_ATTRIBUTE.icon;

  /** @see OdsMessageAttributes.removable */
  @Prop({ reflect: true }) public removable? = DEFAULT_ATTRIBUTE.removable;

  /** @see OdsMessageAttributes.type */
  @Prop({ reflect: true }) public type?: ODS_MESSAGE_TYPE = DEFAULT_ATTRIBUTE.type;

  /** @see OdsMessageAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted? = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsMessageEvents.odsRemoveClick */
  @Event() odsRemoveClick!: EventEmitter<void>;

  @Watch('color')
  validateColor(color?: OdsThemeColorIntent): void {
    this.controller.validateColor(color);
  }

  @Watch('type')
  setColorForType(type?: ODS_MESSAGE_TYPE): void {
    this.controller.setColorForType(type);
  }

  /** @see OdsMessageBehavior.beforeInit */
  beforeInit(): void {
    this.controller.validateColor(this.color);
    this.controller.setColorForType(this.type);
  }

  connectedCallback(): void {
    this.beforeInit();
  }

  /** @see OdsMessageBehavior.removeClicked */
  removeClicked(): void {
    this.odsRemoveClick.emit();
  }

  render() {
    const { color, icon, removable, type } = this;

    return (
      <Host {...{
        tabindex: removable ? '0' : '-1',
      }}>
        <span class={'message__wrapper'}>
          <span class={'message_content'}>
            {icon || type ? <osds-icon {...{
              name: (icon || `${type}-circle`) as ODS_ICON_NAME,
              size: ODS_ICON_SIZE.sm,
              color: color as OdsThemeColorIntent
            }}></osds-icon>
            : ''}
            <slot></slot>
          </span>
          {removable ? <span
            class={'message__close-wrapper'}
            onClick={() => this.controller.onRemoveClicked()}
            >
            <osds-icon {...{
              name: ODS_ICON_NAME.CLOSE,
              size: ODS_ICON_SIZE.xs,
              color: color as OdsThemeColorIntent
            }}></osds-icon>
          </span> : ''}
        </span>
      </Host>
    );
  }
}
