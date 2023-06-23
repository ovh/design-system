import { Component, Element, Host, Prop, h, Listen } from '@stencil/core';
import {
  OdsButton,
  OdsButtonController,
  OdsButtonEvents,
  OdsButtonMethods,
  OdsButtonSize,
  OdsButtonType,
  OdsButtonVariant,
  OdsHTMLAnchorElementRel,
  OdsHTMLAnchorElementTarget,
  odsButtonDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot start - Fixed start button content
 * @slot (unnamed) - Button content
 * @slot end - Fixed end button content
 */
@Component({
  tag: 'osds-button',
  styleUrl: 'osds-button.scss',
  shadow: true,
})
export class OsdsButton implements OdsButton<OdsStencilMethods<OdsButtonMethods>, OdsStencilEvents<OdsButtonEvents>> {
  controller: OdsButtonController = new OdsButtonController(this);
  @Element() el!: HTMLStencilElement;

  /** @see OdsButtonAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsButtonDefaultAttributes.color;

  /** @see OdsButtonAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted? = odsButtonDefaultAttributes.contrasted;

  /** @see OdsButtonAttributes.disabled */
  @Prop({ reflect: true }) public disabled? = odsButtonDefaultAttributes.disabled;

  /** @see OdsButtonAttributes.rel */
  @Prop() public download?: HTMLAnchorElement['download'] = odsButtonDefaultAttributes.download;

  /** @see OdsButtonAttributes.flex */
  @Prop({ reflect: true, mutable: true }) public flex? = odsButtonDefaultAttributes.flex;

  /** @see OdsButtonAttributes.href */
  @Prop({ reflect: true }) public href?: string;

  /** @see OdsButtonAttributes.rel */
  @Prop({ reflect: true }) public rel?: OdsHTMLAnchorElementRel = odsButtonDefaultAttributes.rel;

  /** @see OdsButtonAttributes.size */
  @Prop({ reflect: true }) public size?: OdsButtonSize = odsButtonDefaultAttributes.size;

  /** @see OdsButtonAttributes.target */
  @Prop({ reflect: true }) public target?: OdsHTMLAnchorElementTarget = odsButtonDefaultAttributes.target;

  /** @see OdsButtonAttributes.type */
  @Prop({ reflect: true }) type?: OdsButtonType = odsButtonDefaultAttributes.type;

  /** @see OdsButtonAttributes.variant */
  @Prop({ reflect: true, mutable: true }) public variant?: OdsButtonVariant = odsButtonDefaultAttributes.variant;

  /** @see OdsButtonAttributes.circle */
  @Prop({ reflect: true }) public circle? = odsButtonDefaultAttributes.circle;

  @Listen('keyup')
  handleKey(event: KeyboardEvent) {
    this.controller.handleKey(event);
  }

  @Listen('click')
  handleClick(event: MouseEvent) {
    this.controller.handleClick(event);
  }

  /** @see OdsButtonBehavior.beforeRender */
  beforeRender(): void {
    this.controller.validateAttributes();
    this.controller.mutateAttributes();
  }

  componentWillRender(): void {
    this.beforeRender();
  }

  render() {
    const content = (
      <span class={'button__text-container'}>
        <slot name={'start'}></slot>
        <span class={'button__centered-text'}>
          <slot></slot>
        </span>
        <slot name={'end'}></slot>
      </span>
    );

    let template: Element;
    if (this.href) {
      template = (
        <a {...{
          class: 'button',
          href: this.href,
          part: 'button',
          role: 'link',
          tabindex: -1,
          target: this.target,
          rel: this.rel,
          download: this.download,
        }}>
          {content}
        </a>
      );
    } else {
      template = (
        <button {...{
          class: 'button',
          type: this.type,
          disabled: this.disabled,
          part: 'button',
          role: 'button',
          tabindex: -1,
        }}>
          {content}
        </button>
      );
    }

    return (
      <Host {...{
        tabindex: this.disabled ? -1 : 0,
      }}>
        {template}
      </Host>
    );
  }
}
