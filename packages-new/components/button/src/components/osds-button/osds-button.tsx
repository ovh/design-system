import type { OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';
import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import type { HTMLStencilElement } from '@stencil/core/internal';
import type { ODS_BUTTON_SIZE } from './constants/button-size';
import type { ODS_BUTTON_TYPE } from './constants/button-type';
import type { ODS_BUTTON_VARIANT } from './constants/button-variant';
import type { OdsButtonAttribute } from './interfaces/attributes';
import { Component, Element, Host, Prop, h, Listen } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsButtonController } from './core/controller';

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
export class OsdsButton implements OdsButtonAttribute {
  controller: OdsButtonController = new OdsButtonController(this);
  @Element() el!: HTMLStencilElement;

  /** @see OdsButtonAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = DEFAULT_ATTRIBUTE.color;

  /** @see OdsButtonAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted? = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsButtonAttributes.disabled */
  @Prop({ reflect: true }) public disabled? = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsButtonAttributes.rel */
  @Prop() public download?: HTMLAnchorElement['download'] = DEFAULT_ATTRIBUTE.download;

  /** @see OdsButtonAttributes.inline */
  @Prop({ reflect: true, mutable: true }) public inline? = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsButtonAttributes.href */
  @Prop({ reflect: true }) public href?: string;

  /** @see OdsButtonAttributes.rel */
  @Prop({ reflect: true }) public rel?: OdsHTMLAnchorElementRel = DEFAULT_ATTRIBUTE.rel;

  /** @see OdsButtonAttributes.size */
  @Prop({ reflect: true }) public size?: ODS_BUTTON_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsButtonAttributes.target */
  @Prop({ reflect: true }) public target?: OdsHTMLAnchorElementTarget = DEFAULT_ATTRIBUTE.target;

  /** @see OdsButtonAttributes.type */
  @Prop({ reflect: true }) type?: ODS_BUTTON_TYPE = DEFAULT_ATTRIBUTE.type;

  /** @see OdsButtonAttributes.variant */
  @Prop({ reflect: true, mutable: true }) public variant?: ODS_BUTTON_VARIANT = DEFAULT_ATTRIBUTE.variant;

  /** @see OdsButtonAttributes.circle */
  @Prop({ reflect: true }) public circle? = DEFAULT_ATTRIBUTE.circle;

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
