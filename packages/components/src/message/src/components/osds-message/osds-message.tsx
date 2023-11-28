import type { OdsMessageAttribute } from './interfaces/attributes';
import type { OdsMessageEvent } from './interfaces/events';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import type { EventEmitter } from '@stencil/core';

import { ODS_ICON_NAME, ODS_ICON_SIZE } from '../../../../icon/src';
import { Component, Event, Host, Prop, Watch, h } from '@stencil/core';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_MESSAGE_TYPE } from './constants/message-type';
import { OdsMessageController } from './core/controller';


/**
 * @slot (unnamed) - Message content
 */
@Component({
  tag: 'osds-message',
  styleUrl: 'osds-message.scss',
  shadow: true,
})
export class OsdsMessage implements OdsMessageAttribute, OdsMessageEvent {
  controller: OdsMessageController = new OdsMessageController(this);

  /** @see OdsMessageAttributes.color */
  @Prop({ reflect: true, mutable: true }) public color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

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
  validateColor(color?: ODS_THEME_COLOR_INTENT): void {
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
        <span class={'message_wrapper'}>
          <span class={'message_content'}>
            {icon || type ? <osds-icon {...{
              name: (icon || `${type}-circle`) as ODS_ICON_NAME,
              size: ODS_ICON_SIZE.sm,
              color: color as ODS_THEME_COLOR_INTENT,
            }}></osds-icon>
              : ''}
            <slot></slot>
          </span>
          {removable ? <span
            class={'message_close-wrapper'}
            onClick={() => this.controller.onRemoveClicked()}
          >
            <osds-icon {...{
              name: ODS_ICON_NAME.CLOSE,
              size: ODS_ICON_SIZE.xs,
              color: color as ODS_THEME_COLOR_INTENT,
            }}></osds-icon>
          </span> : ''}
        </span>
      </Host>
    );
  }
}
