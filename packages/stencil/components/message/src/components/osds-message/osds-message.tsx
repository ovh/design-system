import { Component, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import {
  OdsIconName,
  OdsIconSize,
  OdsMessage,
  OdsMessageController,
  OdsMessageEvents,
  OdsMessageMethods,
  OdsMessageType,
  odsMessageDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot (unnamed) - Message content
 */
@Component({
  tag: 'osds-message',
  styleUrl: 'osds-message.scss',
  shadow: true
})
export class OsdsMessage implements OdsMessage<OdsStencilMethods<OdsMessageMethods>, OdsStencilEvents<OdsMessageEvents>> {
  controller: OdsMessageController = new OdsMessageController(this);

  /** @see OdsMessageAttributes.color */
  @Prop({ reflect: true, mutable: true }) public color?: OdsThemeColorIntent = odsMessageDefaultAttributes.color;

  /** @see OdsMessageAttributes.flex */
  @Prop({ reflect: true }) public flex? = odsMessageDefaultAttributes.flex;

  /** @see OdsMessageAttributes.icon */
  @Prop({ reflect: true, mutable: true }) public icon?: OdsIconName = odsMessageDefaultAttributes.icon;

  /** @see OdsMessageAttributes.removable */
  @Prop({ reflect: true }) public removable? = odsMessageDefaultAttributes.removable;

  /** @see OdsMessageAttributes.type */
  @Prop({ reflect: true }) public type?: OdsMessageType = odsMessageDefaultAttributes.type;

  /** @see OdsMessageAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted? = odsMessageDefaultAttributes.contrasted;

  /** @see OdsMessageEvents.odsRemoveClick */
  @Event() odsRemoveClick!: EventEmitter<void>;

  @Watch('color')
  validateColor(color?: OdsThemeColorIntent): void {
    this.controller.validateColor(color);
  }

  @Watch('type')
  setColorForType(type?: OdsMessageType): void {
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
              name: (icon || `${type}-circle`) as OdsIconName,
              size: OdsIconSize.sm,
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
              name: OdsIconName.CLOSE,
              size: OdsIconSize.xs,
              color: color as OdsThemeColorIntent
            }}></osds-icon>
          </span> : ''}
        </span>
      </Host>
    );
  }
}
